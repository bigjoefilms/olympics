import Image from 'next/image';
import Sidenav from '../components/sidenav';
import Link from 'next/link';
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (

    <div className="h-[100vh] md:overflow-hidden bg-[url('/images/bg-pattern.svg')]">
        <header className='bg-[#fff] flex justify-between px-[50px] py-[15px] border'>
            <Link href='/' className=" text-[28px] font-bold items-center flex gap-2">
           
       

      <Image
        src="/images/logo.png"
        alt="logo"
        width={30}
        height={30}
      />
       Wager
    
      </Link>
      <div className='flex items-center gap-2 text-[16px]'>
        <span className='text-[#888989]'>Need help ?</span>
        <p>Contact Us</p>
      </div>

        </header>
    
    <div className="h-screen">
        
      <div className="w-full h-[90vh] flex-none md:w-64">
        <Sidenav/>
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
    </div>
  );
}