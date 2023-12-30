import { CMS_NAME } from '../lib/constants'

const Intro = () => {
  return (
    <div>
      <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
        <div>
        <h1 className="text-4xl md:text-3xl font-bold tracking-tighter leading-tight md:pr-8 text-green-800">
          彌富資訊
        </h1>
        <p className="text-center md:text-left text-2xl mt-5 md:pl-8">
        彌富資訊致力於提供資訊服務，具有豐富的開源軟體安裝，客製化供裝和資安事故處理以及維護網頁系統安全的防護經驗。對於資訊系統從開發到上線維運的各個階段都有解決方案,以確保客戶的資訊資產,個資安全無虞。{' '}
        </p>
        </div>
      </section>
      <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
       <div>
        <h1 className="text-4xl md:text-3xl font-bold tracking-tighter leading-tight md:pr-8 text-green-800">
          公司介紹
        </h1>
        <p className="text-center md:text-left text-2xl mt-5 md:pl-8">
          彌富資訊有限公司於2021年成立,期許成為專業的資安服務和資訊系統開發服務提供。
        </p>
        <p className="text-center md:text-left text-2xl mt-5 md:pl-8">
            長期從事與開源軟體安裝建置和資訊安全相關工作,管理系統研發等多項專案,以及IDC維運以及電信系統認證,授權，紀錄等多項原始碼客製化技術解決專案以及開發帳務系統,均使用開源軟體自行修改符合特定需求。
            具有多次整合通信裝置， 應用系統，資料庫的經驗， 熟悉系統整合等相關運作。
        </p>
        <img src="/assets/blog/mefu/mam.jpg" alt="mefu" className="rounded-lg mx-auto d-block" style={{ width: 'auto', height: '350px' }}/>
        <p className="text-center md:text-left text-2xl mt-5 md:pl-8">
        超過10年執行個資保護計畫,負責資安訪談，資安協處。 輔導企業個資外洩事故處理超過300家次,了解遭受駭客攻擊導致個資外洩之企業的原因,經由資安訪談從受害企業獲得駭客攻擊的面相以及詐騙集團的手法，也累積大量電子商務業者資訊架構以及個人資料流程的改善經驗，具有數百次網站日誌分析，弱點掃描，源碼掃描，鑑識系統快篩項目熟悉整個資安事故處理機制與應變。
        </p>
        <img src="/assets/blog/mefu/vul.jpg" alt="mefu" className="rounded-lg mx-auto d-block" style={{ width: 'auto', height: '350px' }}/>
        <p className="text-center md:text-left text-2xl mt-5 md:pl-8">
        基於受害廠商回函說明事件原因不清楚，或者應變措施不足，甚至沒有。計畫要求廠商提供網站日誌進行分析，或弱點掃描，以至於其他資安協處，資安事故處理成效逐年提高甚至後期廠商主動要求協助。
        </p>
        <p className="text-center md:text-left text-2xl mt-5 md:pl-8">
        使用Acunetix , Nessss Pro,OpenVAS 等弱點掃描軟體,以及OWASP ZAP 網頁滲透測試軟體以及SonarQube 源碼掃描軟體。善用NMAP 找出潛伏惡意軟體。也熟悉React,Next.js JavaScript, Python, PowerShell,Material UI網頁開發技術。
        </p>
        <p className="text-center md:text-left text-2xl mt-5 md:pl-8">
        使用Acunetix , Nessss Pro,OpenVAS 等弱點掃描軟體,以及OWASP ZAP 網頁滲透測試軟體以及SonarQube 源碼掃描軟體。善用NMAP 找出潛伏惡意軟體。也熟悉React,Next.js JavaScript, Python, PowerShell,Material UI網頁開發技術。
        </p>
        <img src="/assets/blog/mefu/opensource.jpg" alt="mefu" className="rounded-lg mx-auto d-block" style={{ width: 'auto', height: '350px' }}/>
        <p className="text-center md:text-left text-2xl mt-5 md:pl-8">
        參與多項國內著名金融單位資安健檢服務,負責大多數項目的執行，客戶包含國內金融單位，國內外銀行，上市公司等。執行項目為資訊架構檢視,網路架構檢視,防火牆設定以及記錄分析,惡意軟體分析,Microsoft 基準安全性分析等
        </p>
        </div>
      </section>
      <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
       <div>
        <h1 className="text-4xl md:text-3xl font-bold tracking-tighter leading-tight md:pr-8 text-green-800">
          服務內容
        </h1>
        <div className="flex md:flex-row flex-col items-center">
          <p className="text-center md:text-left text-2xl mt-5 md:pl-8 md:w-3/4">
            1.資安事故鑑識調查、處理、完成行政檢查，結案報告撰寫<br />
            - 初步調查;確認事故發生的時間、地點、原因、影響範圍,採取臨時措施，防止事故進一步擴大<br />
            - 資料蒐集;收集事故現場的證據，包括系統日誌、檔案、網路流量， 人員訪談等<br />
            - 深入調查;分析證據，確認事故的原因、影響範圍，並提出改善建議<br />
            - 行政檢查<br />
            - 結案報告撰寫<br />
            <br />
          </p>
          <img src="/assets/blog/mefu/digforresic.jpg" alt="Service Content Image" className="rounded-lg mx-auto d-block md:ml-8 md:w-1/4" style={{ width: '200px', height: '200px' }}/>
        </div>
        <div className="flex md:flex-row flex-col items-center">
          <p className="text-center md:text-left text-2xl mt-5 md:pl-8 md:w-3/4">
          2.資安防護強化，改善現有現有資安防護機制，增加監控項目<br />
          - 針對企業現有資安防護機制進行全面評估，找出漏洞和不足。<br />
          - 制定資安防護改善計畫，並採取措施，消除漏洞和不足。<br />
          - 加強資安意識教育，提升員工資安防護意識。<br />
          </p>
          <br />
          <img src="/assets/blog/mefu/infor.jpg" alt="Service Content Image" className="rounded-lg mx-auto d-block md:ml-8 md:w-1/4" style={{ width: '200px', height: '200px' }}/>
        </div>
        <br />
        <div className="flex md:flex-row flex-col items-center">
          <p className="text-center md:text-left text-2xl mt-5 md:pl-8 md:w-3/4">
          3.提供弱點掃描，源碼掃描，網頁滲透測試，網站日誌分析，惡意軟體分析,資安診斷與測試，全面檢測漏洞，降低風險<br />
          </p>
          <br />
          <img src="/assets/blog/mefu/service2.jpg" alt="Service Content Image" className="rounded-lg mx-auto d-block md:ml-8 md:w-1/4" style={{ width: '200px', height: '200px' }}/>
        </div>
        <br />
        <div className="flex md:flex-row flex-col items-center">
          <p className="text-center md:text-left text-2xl mt-5 md:pl-8 md:w-3/4">
          4.精通開源軟體生命週期管理 <br />
          </p>
          <br />
          <img src="/assets/blog/mefu/log.jpg" alt="Service Content Image" className="rounded-lg mx-auto d-block md:ml-8 md:w-1/4" style={{ width: '200px', height: '200px' }}/>
          <br />
        </div>
        <br />
        <div className="flex md:flex-row flex-col items-center">
          <p className="text-center md:text-left text-2xl mt-5 md:pl-8 md:w-3/4">
          5.金融檢測服務,網路架構檢視,防火牆設定以及記錄分析,惡意軟體分析,Microsoft 基準安全性分析 <br />
          - 降低資安風險：識別和消除資安風險，降低金融機構遭受攻擊的可能性。<br />
          - 提升資安合規性：符合金融監管機構的資安合規要求。<br />
          - 提高營運效率：降低資安事件的影響，提高營運效率。<br />
          </p>
          <br />
          <img src="/assets/blog/mefu/service1.jpg" alt="Service Content Image" className="rounded-lg mx-auto d-block md:ml-8 md:w-1/4" style={{ width: '200px', height: '200px' }}/>
        </div>     
        </div>
        </section>
        <h1 className="text-4xl md:text-3xl font-bold tracking-tighter leading-tight md:pr-8 text-green-800">
          案例介紹
        </h1>
    </div>
  )
}
export default Intro
