import {H2Text, H3Text, H4Text, H5Text, PText} from "@/components/Items/Texts/texts";
import style from '../Problem/Problem.module.css'
import { Button } from "@/components/Items/Button/button";
import { BiBody } from "react-icons/bi";
import { useState } from "react";
import { Wall, Frame } from "@/components/Layout/layout";
import { Cards } from "@/components/Items/Cards/cards";

const Problem = (props) => {

    return (

        <>
            
            <Wall wall={style.wall}>
                <Frame frame={style.frameOne}>
                    <H2Text h2Style={style.h2Style} h2Text={props.title} />
                    <H3Text h3Style={style.h3Style} h3Text={props.subTitle} />
                    <div>
                        <PText
                            pStyle={style.pStyle} pText="Você se sente extremamente ansioso em situações sociais? Se sim,
                                você pode estar sofrendo de ansiedade social. Não se preocupe, você não está sozinho.
                                De acordo com a Organização Mundial da Saúde (OMS), a ansiedade é o distúrbio mental
                                mais comum do mundo, afetando mais de 260 milhões de pessoas em todo o mundo. Mas há esperança!
                                A Terapia Cognitivo-Comportamental (TCC) é um tratamento eficaz para superar a ansiedade social."
                        />
                    </div>
                    <div>
                        <PText
                            pStyle={style.pStyle} pText="A ansiedade social é um transtorno caracterizado pelo medo excessivo e persistente de situações
                                sociais ou de desempenho, levando a evitação dessas situações. Em Portugal, estima-se que cerca de 8%
                                da população sofra de ansiedade social. O transtorno pode começar na adolescência e afetar negativamente
                                a vida social e profissional das pessoas."
                        />
                    </div>
                </Frame>
                <Frame frame={style.frameTwo}>
                    <Frame>
                        <Cards cardClass={style.cards}>
                            <H4Text h4Style={style.h3StyleTwo} h4Text="sudorese excessiva" />
                            <PText
                                pText="A sudorese excessiva pode ser um sintoma constrangedor e desagradável para quem sofre com ansiedade social, o que pode aumentar ainda mais a ansiedade e a sensação de desconforto."
                            />
                        </Cards>
                        <Cards cardClass={style.cards}>
                            <H4Text h4Style={style.h3Style} h4Text="Medo Intenso" />
                            <PText
                                pText="O medo intenso é um sintoma comum da ansiedade social, que é um transtorno psicológico caracterizado pelo medo ou ansiedade excessiva em situações sociais ou de desempenho."/>
                        </Cards>    
                    </Frame>
                    <Frame>
                        <Cards cardClass={style.cards}>
                            <H4Text h4Text="Tremores" />
                            <PText
                                pText="Os tremores são movimentos involuntários das mãos, braços ou outras partes do corpo que podem ser causados por diversos fatores, incluindo a ansiedade social."/>
                        </Cards>
                        <Cards cardClass={style.cards}>
                            <H4Text h4Text="Palpitações" />
                            <PText
                                pText="A palpitação cardíaca é a sensação de batimentos cardíacos rápidos, irregulares ou fortes, que podem ser desencadeados por diversos fatores, incluindo a ansiedade social."/>
                        </Cards>
                    </Frame>
                </Frame>
            </Wall>

        </>

    )

}

/* 
<Layout>
                <Texts
                    h1Text={props.h1Text}
                    h1Style={Style.h1Style}
                />
                <div id={Style.main}>
                    <div>
                        <Cards>
                            <Texts
                                h1Text="250 milhoes"
                                h1Style={Style.cardH1}
                                pText="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias cumque, libero tempora deserunt earum sed vitae officia dignissimos?" 
                            />
                        </Cards>
                        <br />
                        <Cards>
                            <Texts
                                h1Text="250 milhões"
                                h1Style={Style.cardH1}
                                pText="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias cumque, libero tempora deserunt earum sed vitae officia dignissimos?" 
                            />
                        </Cards>
                        <br />
                        <Cards>
                            <Texts
                                h1Text="250 milhões"
                                h1Style={Style.cardH1}
                                pText="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias cumque, libero tempora deserunt earum sed vitae officia dignissimos?" 
                            />
                        </Cards>
                    </div>
                    <div id={Style.probText}>
                        <Texts
                            pText={props.pText}
                            pStyle={Style.pStyle}
                        />
                        <br />  
                        <Texts
                            pText={props.p2Text}
                            pStyle={Style.pStyle}
                        />
                    </div>
                </div>
            </Layout>

*/
export default Problem;