import Image from 'next/image';
import Head from 'next/head';
import React, {useState} from 'react';
import Link from 'next/link';
import Style from '../Navbar/Navbar.module.css'
import { Frame, Wall } from '@/components/Layout/layout';
import { H1Text, H2Text, PText } from '@/components/Items/Texts/texts';
import imageOne from '../Navbar/images/logowhite.png'
import { Button } from '@/components/Items/Button/button';
/* import Layout from '../layout';*/

const Navbar = () => {

    return (
        <Wall wall={Style.wall}>
            <Frame frame={Style.frame}>
                <div id={Style.image}>
                    <Image src={imageOne} className={Style.image}/>
                </div>
                <Frame frame={Style.frameTwo}>
                    <Button buttonText="Ansiedade Social" buttonStyle={Style.button}/>
                    <Button buttonText="Tratamento Eficaz" buttonStyle={Style.button}/>
                </Frame>
            </Frame>
        </Wall>
    )
}



export const MyLogo = ({imageSrc, widthLogo, heightLogo}) => {
    return (
        <Image
            src={imageSrc}
            width={widthLogo}
            height={heightLogo}
            alt="logo da empresa Thogt School"
        />
    )
}

const MyNavbarLink = (props) => {
    const [nav, setNav] = useState(false);
    const [openNav, setOpenNava] = useState(props.openN);

    const handleNav = () => {
        setNav(!nav);
    }

    function MouseHover () {

        setOpenNava(!openNav);
    
    }

    function MouseOut () {

        setOpenNava(false);
    
    }

    // onMouseOver={MouseHover} onMouseOut={MouseOut}

    return (
        <div>
            <ul className='hidden lg:visible sm:flex space-x-6 text-[19px]'>
                <li className='pt-2 hover:rounded hover:border-solid hover:text-white hover:bg-blue-900 px-[10px]'><Link href="#hero">Principal</Link></li>
                <li className='pt-2 hover:rounded hover:border-solid hover:text-white hover:bg-blue-900 px-[10px]'><Link href='#metodo'>Metódo Thogt</Link></li>
                <li className='pt-2 hover:rounded hover:border-solid hover:text-white hover:bg-blue-900 px-[10px]' ><Link href="#depo">Depoimentos</Link></li>
                <li className='pt-2 hover:rounded hover:border-solid hover:text-white hover:bg-blue-900 px-[10px]' ><Link href="#plans">Planos</Link></li>
                <li className='bg-blue-900 hover:bg-blue-700 rounded text-white border-solid px-4 py-2' ><a href="https://wa.me/+351968943125">Aula Free</a></li>
            </ul>
            <div onClick={handleNav} className='block sm:hidden z-10'>
            </div>
            <div className={
                nav
                    ? 'sm:hidden absolute top-20 mt-3 left-0 right-0 bottom-0 flex justify-left items-left pl-8 w-full h-fit bg-blue-900 text-left ease-in duration-300'
                    : 'sm:hidden absolute top-20 mt-3 right-[-100%] right-0 bottom-0 flex justify-left items-left pl-8 w-full h-fit bg-blue-700 text-center ease-in duration-300'
                }>
                <ul className='text-white pt-4 pb-8'>
                    <li className='p-4 text-[27px]'><Link href="#hero" onClick={(e) => setNav(!nav)}>Principal</Link></li>
                    <li className='p-4 text-[27px]'><Link href="#metodo" onClick={(e) => setNav(!nav)}>Método Thogt</Link></li>
                    <li className='p-4 text-[27px]'><Link href="#depo" onClick={(e) => setNav(!nav)}>Depoimentos</Link></li>
                    <li className='p-4 text-[27px]'><Link href="#plans" onClick={(e) => setNav(!nav)}>Planos</Link></li>
                    <li className='bg-white hover:bg-blue-700 hover:text-white rounded text-black text-[24px] border-solid w-36 pl-4 py-2 ml-4 mt-4' ><a href="https://wa.me/+351968943125">Aula Free</a></li>
                </ul>
            </div>
            { openNav ? (  
                                    
                <div className='text-[16px] text-center font-light'>
                    <p className=''>Hello, World</p>   
                </div>
                
            ) : (
            
                <></>
            )}
        </div>
    )
    
    /*
    
        <div onClick={handleNav} className='block sm:hidden z-10'>
        {nav ?  <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
    </div>
    
    <div className={
        nav 
            ? 'sm:hidden absolute top-[113px] left-0 right-0 bottom-0 flex justify-center items-center w-full h-fit bg-amber-300 text-center ease-in duration-300'
            : 'sm:hidden absolute top-[113px] left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-fit bg-amber-300 text-center ease-in duration-300'
        }>
        <ul>
            <li className='p-4 text-[27px]'><Link href="/">Home</Link></li>
            <li className='p-4 text-[27px]'><Link href="/">Services</Link></li>
            <li className='p-4 text-[27px]'><Link href="/">Benefits</Link></li>
            <li className='p-4 text-[27px]'><Link href="/">Free Hour</Link></li>
        </ul>
    </div>
    
    */
}



export default Navbar