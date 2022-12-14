import React, {useState} from 'react'
import AP from '../assets/AP.png'
import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle, AiFillMail } from "react-icons/ai";
import { Link} from 'react-scroll'
import Home from './Home';

function NavBar() {

  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)



  return (
    <section className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#101419] text-gray-300'>
      <div>
        <img src={AP} alt="logo imagen" className='w-[80px]'/>
      </div>

      {/* menu */}

        <ul className='hidden md:flex items-center'>


          <Link className='hover:bg-[#83a4b9] hover:transition-colors duration-400 hover:text-[black] flex h-[80px] items-center justify-center w-[75px] cursor-pointer'
          to="home" smooth='easeInOutQuart' offset={50} duration={1000}>
          Home
          </Link>

          <Link className='hover:bg-[#83a4b9] hover:transition-colors duration-400 hover:text-[black] flex h-[80px] items-center justify-center w-[75px] cursor-pointer'
          to="about" smooth='easeInOutQuart' offset={50} duration={1000}>
          About
          </Link>

          <Link className='hover:bg-[#83a4b9] hover:transition-colors duration-400 hover:text-[black] flex h-[80px] items-center justify-center w-[75px] cursor-pointer'
          to="skills" smooth='easeInOutQuart' offset={50} duration={1000}>
          Skills
          </Link>

          <Link className='hover:bg-[#83a4b9] hover:transition-colors duration-400 hover:text-[black] flex h-[80px] items-center justify-center w-[75px] cursor-pointer'
          to="work" smooth='easeInOutQuart' offset={20} duration={1000}>
          Work
          </Link>

          <Link className='hover:bg-[#83a4b9] hover:transition-colors duration-400 hover:text-[black] flex h-[80px] items-center justify-center w-[75px] cursor-pointer'
          to="contact" smooth='easeInOutQuart' offset={50} duration={1000}>
          Contacts
          </Link>
        </ul>


      {/* Hamburguer */}
      <section onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <i class="fa-solid fa-bars"></i> : <i class="fa-solid fa-xmark"></i>}
      
      </section>

      {/* Movil menu */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#101419] flex flex-col justify-center items-center'}>
          <li  className='py-6 text-4xl hover:bg-[#102634]'>
            <Link ref={Home} onClick={handleClick} to="home" smooth='easeInOutQuart' offset={50} duration={1000}> 
          Home
        </Link></li>
          <li className='py-6 text-4xl hover:bg-[#102634]'>
            <Link onClick={handleClick} to="about" smooth='easeInOutQuart' offset={50} duration={1000}>
          About
        </Link></li>
          <li className='py-6 text-4xl hover:bg-[#102634]'>
            <Link onClick={handleClick} to="skills" smooth='easeInOutQuart' offset={40} duration={1000}>
          Skills
        </Link></li>
          <li className='py-6 text-4xl hover:bg-[#102634]'>
            <Link onClick={handleClick} to="work" smooth='easeInOutQuart' offset={-12} duration={1000}>
          Works
        </Link></li>
          <li className='py-6 text-4xl hover:bg-[#102634]'>
            <Link onClick={handleClick} to="contact" smooth='easeInOutQuart' offset={50} duration={1000}>
          Contacts
        </Link></li>
        </ul>


      {/* Social icons */}
      <section className='md:flex fixed flex-col top-[35%] left-0 hidden'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#101419] hover:bg-white rounded-lg'>
            <a href="/" className='flex justify-between items-center w-full text-gray-300 hover:text-[#662729]'
            > Github <AiFillGithub size={30}/>
            </a>
          </li>

          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#101419] hover:bg-white rounded-lg mt-1'>
            <a href="/" className='flex justify-between items-center w-full text-gray-300 hover:text-[#0073B1]'
            > Linkedin <AiFillLinkedin size={30}/>
            </a>
          </li>

          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#101419] hover:bg-white rounded-lg mt-1'>
            <a href="/" className='flex justify-between items-center w-full text-gray-300 hover:text-[#4EA6E9]'
            > Twitter <AiFillTwitterCircle size={30}/>
            </a>
          </li>

          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#101419] hover:bg-white rounded-lg mt-1'>
            <a href="/" className='flex justify-between items-center w-full text-gray-300 hover:text-black'
            > Email <AiFillMail size={30}/>
            </a>
          </li>
        </ul>
      </section>


    </section>
  )
}

export default NavBar