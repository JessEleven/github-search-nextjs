import { SvgLogo, SvgSunLight } from '@/components/assets/SvgHeader'
import Link from 'next/link'

function Navigation() {
  return (
    <div className=" mt-4 rounded-lg bg-opacity-30 bg-slate-500">
      <div className="h-12 lg:h-[60px] mx-auto px-3 md:px-10 flex items-center justify-between">

        <Link href={"/"} className="flex items-center ">
          <SvgLogo className='w-9 lg:w-12'/>
          <p className='text-2xl font-bold md:text-3xl text-transparent bg-clip-text bg-gradient-to-br from-[#b45caa] to-[#c6c4c9]'>Searc<span className='text-green-300 text-2xl md:text-3xl font-bold'>Hub</span></p>
        </Link>

        <ul className="flex items-center space-x-3">
          <li className='text-lg font-medium'>
            <Link href={"/about"} 
                  className="hover:text-green-300 transition-colors duration-300 text-base font-semibold">
                  Acerca de
            </Link>
          </li>
          <li>
            <SvgSunLight className='text-green-300 hover:text-yellow-400 transition-colors duration-300 w-5 h-5 lg:w-6 lg:h-6' />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navigation