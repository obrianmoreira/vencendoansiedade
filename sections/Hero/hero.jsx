import {Frame, Wall} from "@/components/Layout/layout";
import { H1Text, H2Text, Texts } from "@/components/Items/Texts/texts";
import Style from '../Hero/Hero.module.css'
import { Button } from "@/components/Items/Button/button";

const Hero = (props) => {

    return (

        <>
            <Wall wall={Style.wall}>
                <Frame frame={Style.frame}>
                    <H1Text h1Style={Style.h1Style} h1Text={props.h1Text} />
                    <H2Text h2Style={Style.h2Style} h2Text={props.h2Text} />
                    <Button
                        buttonText={props.buttonText}
                        buttonStyle={Style.buttonStyle}
                    />
                </Frame> 
            </Wall>
               
        
        </>

    )

}

export default Hero;