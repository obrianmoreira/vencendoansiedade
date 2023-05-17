import { Frame, Wall } from "@/components/Layout/layout"
import Image from "next/image"
import imageOne from '../Navbar/images/logoblue.png';
import Style from '../Footer/Footer.module.css'
import { H2Text, PText } from "@/components/Items/Texts/texts";

export const Footer = () => {

    return (

        <>
        
            <Wall wall={Style.wall}>
                <Frame frame={Style.frame}>
                    <div id={Style.image}>
                        <Image src={imageOne} width={200} className={Style.image}/>
                    </div>
                    <div>
                    <PText pText="Todos os direitos reservados para VencendoAnsiedade.com"/>
                    <PText pText="Site criado por Brian Moreira."/>
                    </div>
                </Frame>
            </Wall>

        </>

    )

}