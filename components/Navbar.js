import Link from 'next/link'
import Image from 'next/image' 

const Navbar = () => {
    return ( 
       <nav> 
           <div className="logo">
           <Image src="/logo.png" width={69} height={60} />
           </div> 
           <Link href="/our-history"><a>Our History</a></Link>
           <Link href="/product-development"><a>Product Development</a></Link>
           <Link href="/impact"><a>Impact</a></Link>
           <Link href="/members"><a>Members</a></Link>
           <Link href="/clients"><a>Clients</a></Link>
       </nav> 
     );
}
 
export default Navbar;