import Link from 'next/link'
import Image from 'next/image' // Import the Image component from Next.js
import logo from '../public/assets/blog/mefu/mefu.jpg' // Import your logo file. Adjust the path according to your file structure.

const Header = () => {
  return (
    <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
      <Link href="/" className="hover:underline flex items-center">
      <Image src={logo} alt="Company Logo" width={100} height={80} className="mr-4" /> {/* Add your logo here */}
      <span className="text-green-700">彌富資訊</span>
      </Link>
      
    </h2>
  )
}

export default Header
