---
title: 'Windows事件紀錄分析'
excerpt: '對於Windows 系列的事件紀錄分析，經常執行。 通常以系統(system)事件紀錄，應用(application)事件紀錄，以及安全(security)事件紀錄這三個事件紀錄的分析。最主要的Security 事件紀錄的登入成功以及登入失敗的紀錄特別適用於找出異常的登入，以判別Windows 系統是否已經遭受攻擊。如何判斷的方式在於研究是否異常的IP或異常的時間，或登入的身分?'
coverImage: '/assets/blog/winevt/event-log-powershell.jpg'
date: '2021-01-18T05:35:07.322Z'
author:
  name: Kengyu
  picture: '/assets/blog/authors/ky.jpg'
ogImage:
  url: '/assets/blog/winevt/event-log-powershell.jpg'
---

# Windows事件紀錄分析

## 前言
對於Windows 系列的事件紀錄分析，經常執行。 通常以系統(system)事件紀錄，應用(application)事件紀錄，以及安全(security)事件紀錄這三個事件紀錄的分析。

Windows系統事件紀錄是一種儲存系統、安全和應用程式事件的紀錄，它可以幫助網路管理員追蹤潛在的威脅和可能降低效能的問題。Windows將事件紀錄儲存在一種標準的XML格式，能夠清楚地理解事件的資訊。Windows系統事件紀錄的主要目的是提供一種診斷和預測系統問題的工具。

應用程式事件紀錄用於儲存作業系統、應用程式或裝置上發生的重要軟體或硬體事件的資訊。應用程式事件紀錄的目的是提供一種標準化、集中化的方式，讓應用程式和作業系統紀錄事件，以便於管理安全性、效能和排除IT問題。

本文著重以安全事件紀錄分析異常事件，IP作為找出系統遭受攻擊的證據，因此不討論Windows 系統以及應用事件紀錄的分析。

最主要的Security 事件紀錄的登入成功以及登入失敗的紀錄特別適用於找出異常的登入，以判別Windows 系統是否已經遭受攻擊。如何判斷的方式在於研究是否異常的IP或異常的時間，或登入的身分?

Windows 的事件紀錄目錄位於C:\Windows\System32\winevt\Logs，參見圖一。 裡面有 187 個事件紀錄的XML格式檔案
![Windows Event log 目錄](/assets/blog/winevt/envdir.jpg "Windows Event log 目錄")

以上顯示的每一個檔案都是XML的格式，必須使用事件紀錄檢視器開啟之後才能分析裡面的內容，每一個檔案裡面又根據他不同的性質而有Event ID 區分不同種類的紀錄。

Windows 事件紀錄最大的特點就是唯讀但無法寫入，以至於取得的事件紀錄無法對裡面的內容做變動只能轉換成其他格式，如讀出之後轉成csv 的格式但無法破壞原有的XML有唯讀的性質。
![事件檢視器](/assets/blog/winevt/envdir.jpg "事件檢視器")

Security事件以Event ID為依據進行分類，其中紀錄登入成功的是event Id 4624。因為確定登入成功，如果從異常IP，異常時間，異常帳號著手，往往就是證據。例如內用主機，如帳務系統，不可能有國外的IP 登入的可能，或是公司內用主機，深夜時間不可能遠端登入? 或內用主機只提供網頁服務，卻發生遠端登入系統管理員帳戶? 登入成功這不是很明顯的異常現象嗎? 

Event Id 4624 XML 格式請參照下圖

![Event Id 4624  的XML 內容， 依照系統版本略有出入](/assets/blog/winevt/security.jpg "Event Id 4624  的XML 內容， 依照系統版本略有出入")

Windows對登入的看法有別於其他系統，並且鉅細靡遺。用戶在本機輸入帳號密碼是登入，從網路存取一個檔案也是某一種登入，啟動一項服務也是一項登入。由於有多種類的登入因此它是使用類型(Type)作為區分。
## Windows 登入類型和描述
![Windows 登入的類型](/assets/blog/winevt/catolog.jpg "Windows 登入的類型")

以下PowerShell 程式讀取Event id 4624 的登入欄位

```powershell
Get-WinEvent -FilterHashtable @{Path = ".\Security.evtx"; ID = '4624' } | ForEach-Object {
    [PSCustomObject]@{
        Time                 = $_.TimeCreated
        UserAccount          = $_.Properties.Value[5]   // Get the logged-in username
        LogonType            = $_.Properties.Value[8]   // Get the login type
        ProcessName          = $_.Properties.Value[17]  // Get the name of the login program
        SourceNetworkAddress = $_.Properties.Value[18]  // Get the IP of the login
        Port                 = $_.Properties.Value[19]  // Get the port of the login
    }
} | export-csv -path ".\4624.csv"  // Convert the analysis result to csv format
```

若以實例分析結果，將會有成千上百的資料產生，一般而言， 一個事件紀錄往往超過12000筆的資料。只是分析的角度，只是針對特定的Event ID f擷取與分析。

再經過整理後就可以根據時間， IP，帳戶，做出是否異常的判斷? 下圖從事故的Security 事件紀錄Event Id 4624 所讀到的部分
![事件紀錄輸出 csv](/assets/blog/winevt/csvform.jpg "事件紀錄輸出 csv")


至於Event Id 4625 的屬性是登入失敗，反而更有意思， 因為如果找到攻擊者企圖猜測密碼或者以各種不同的帳號企圖登入，可能表示攻擊者已經找到一個途徑企圖登入， 彌補這個漏洞就能阻止攻擊。

分析Event Id 4625 的紀錄與前述分析Event Id 4624 幾乎相同，只是改變兩處地方， Event Id 以及 將logontype。

```powershell
Get-WinEvent -FilterHashtable @{Path = ".\Security.evtx"; ID = '4625' } | ForEach-Object {
    [PSCustomObject]@{
        Time                 = $_.TimeCreated
        UserAccount          = $_.Properties.Value[5]
        FailReason           = $_.Properties.Value[8]  // Reason for login failure
        ProcessName          = $_.Properties.Value[17]
        SourceNetworkAddress = $_.Properties.Value[18]
        Port                 = $_.Properties.Value[19]
    }
} | out-file .\faillogin.txt
```

根據實例Event Id 4625 分析的結果輸出到一個faillogin.txt 再使用PowerShell 命令，分離次數和登入名稱

```PowerShell
get-Content .\faillogin.txt | Group-Object | Select-Object count,name | Where-Object count -gt 11
```
以上結果除非重複次數大於11 以上的登入名稱才會顯示如下圖

![排序IP，登出成功次](/assets/blog/winevt/sorted.jpg "排序IP，登出成功次")

以上是從一個實際的案例找到的樣本，很明顯的這一部主機正遭受攻擊者測試系統管理員的帳號，由於之前曾經遭受過攻擊，才重新安裝不到3個禮拜。雖然在Event Id4624的紀錄裡面沒有發現登入成功的紀錄，但是從這個樣本的看來,駭客已經發現一個能夠登入的途徑，持續利用中，只要時間夠久就會成功。

這一家廠商對於資訊安全的投資不夠，工程師解釋這些應用系統沒有防火牆，我們討論之後還是決定使用Windows內建的防火牆阻止攻擊者的登入只提供白名單IP進入使用，

## 在實例發現Windows security 事件紀錄異常的可能原因?
### 重灌電腦的帳號雜亂?
上述分析的結果，來自一家物流公司的ERP的系統，經過事件紀錄分析之後找到登入的帳號與次數的對比關係。

看到數量這麼多的登入帳號，聯絡系統管理員也不曉得為何會有數量那麼多的帳號出現在安全事件紀錄? 並且又解釋這部機器其實才重新安裝不到一個月?重新安裝是因為先前發現這部電腦中毒，駭客把一些木馬程式放在服務啟動的目錄，雖然他們經過處理但是還不太放心因此整個系統重裝。

雖然 雖然看不到這部主機已經遭受入侵但的確發現駭客正在攻擊中。
 ### 免費的防毒軟體最貴
事件處理的主要目的是要找到核心原因，發生事故的主機使用Windows 2012有沒有裝防毒軟體? 系統管理員才告訴我們有他們有安裝一套免費版的防毒軟體。

以上的分析雖然沒有找到駭客入侵成功的證據，但是已經說明駭客已經找到可以嘗試攻擊的途徑。如果這樣是不是證明這樣子的免費防毒軟體是可能沒有效果，要不要考慮使用付費版的防毒軟體呢? 
 
與其使用免費版本的防毒軟體但是沒有效果，不如直接採購付費版的防毒軟，平均起來每一部電腦一天大概才兩元。這樣不是比較省事嗎? 電腦重灌後還是有病毒在裡面為了要處理這些事情已經花了不少時間。為了可能不到2000塊的費用重複使用工程師做些沒有意義的事情。

### 企業保守的觀念
這是一家物流公司雖然經營國際業務，號稱國外接單可以送到台灣，台灣收單之後可以把貨運到國外。 算是頗具規模的企業但是經營上對於資訊的思考方向還是十分保守。

### 人為管理疏忽
另外也發現了在網站憑證已經失效，檢查系統事件紀錄的時候發現了警示訊息，系統管理員詢問是不是憑證的問題? 當然這是很明顯的人為管理疏忽。

## 結論

從事件處理紀錄的分析中，我們可以明確地看到人為管理疏忽的影響。首先，系統未投資於專業的防毒軟體，而是選擇使用基本的免費防毒軟體。其次，HTTPS的憑證已過期，但並未進行續購。這兩點都顯示出對資訊安全的輕視。

近年來，駭客的攻擊目標已從電商後台轉向物流商後台，因為他們發現物流商後台的資訊安全控制措施往往不足。一旦找到弱點並成功突破，駭客可以獲得大量的收益，因為大部分電商的重要訂單資料都儲存在ERP的後台。

這種情況強烈提醒了我們，企業必須重視資訊安全。不僅要投資於專業的防護軟體以及硬體，也要確保所有的安全憑證都是最新的。此外，企業也需要定期進行風險評估，以確保他們的資訊安全控制措施能夠應對最新的威脅。

## 參考資料

1. 1 圖分別取自 Unsplash， 以及由 Windows Copilot Image Creator from Designer 產生。
2. 2 Windows event XML 檔案由 Windows Copilot 產生。
3. 3 本文的 IP 由 Windows Copilot 所產生， 用以示意， 非真實IP。
4. 4 部分文字經過Github Copilot 潤飾
