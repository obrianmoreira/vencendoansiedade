import { Wall, Frame } from "@/components/Layout/layout"
import { H2Text, H3Text, H4Text, H5Text, PText } from "@/components/Items/Texts/texts"
import { Button } from "@/components/Items/Button/button"
import Style from '../Solution/Solution.module.css'
import LayoutStyle from '../../components/Layout/Layout.module.css'
import { Cards } from "@/components/Items/Cards/cards"
import { Bs1Circle } from "react-icons/bs";
import Image from "next/image"
import imageOne from '../Solution/images/talking3.png';
import imageTwo from '../Solution/images/socialanxiety.png';
import imageThree from '../Solution/images/talking.png';

export const Solution = (props) => {

    return (

        <>
        
            <Wall wall={Style.wall}>
                <H2Text h2Text={props.title} h2Style={Style.h2Style}/>
                <H3Text h3Text={props.subTitle} h3Style={Style.h3Style}/>
                <Frame frame={Style.frame}>
                    <Cards cardClass={Style.cards}>
                        <Image src={imageTwo} className={Style.image}/>
                        <H4Text h4Text={props.cardTitle} h4Style={Style.h4Style}/>
                        <PText pText={props.paragraph} pStyle={Style.pStyle}/>
                    </Cards>
                    <Cards cardClass={Style.cards}>
                        <Image src={imageThree} className={Style.image}/>
                        <H4Text h4Text={props.cardTitleTwo} h4Style={Style.h4Style}/>
                        <PText pText={props.paragraphThree} pStyle={Style.pStyle}/>
                    </Cards>
                    <Cards cardClass={Style.cards}>
                        <Image src={imageOne} className={Style.image}/>
                        <H4Text h4Text={props.cardTitleThree} h4Style={Style.h4Style}/>
                        <PText pText={props.paragraphTwo} pStyle={Style.pStyle}/>
                    </Cards>
                </Frame>
            </Wall>
        
        </>

    )

}