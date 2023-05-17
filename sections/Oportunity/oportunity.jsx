import { H2Text, H3Text, PText } from "@/components/Items/Texts/texts"
import { Frame, Wall } from "@/components/Layout/layout"
import Style from '../Oportunity/Oportunity.module.css'
import ImageOne from '../Oportunity/images/fight2.png'
import Image from "next/image"
import { Button } from "@/components/Items/Button/button"

export const Oportunity = (props) => {

    return (

        <>
        
            <Wall wall={Style.wall}>
                <Frame frame={Style.frame}>
                    <H2Text h2Text={props.title} h2Style={Style.h2Style}/>
                    <H3Text h3Text={props.subTitle} h3Style={Style.h3Style}/>
                    <PText pText={props.paragraph} pStyle={Style.pStyle}/>
                    <Button buttonText={props.button}/>
                </Frame>
                <Frame frame={Style.frameTwo}>
                    <Image src={ImageOne} className={Style.image}/>
                </Frame>
            </Wall>
        
        </>

    )

}