import { useEffect, useState } from 'react';
import Style from '../Fema/Fema.module.css'

function Fema ({data}) {

        return (

            <>
                <ul>
                    {data.map((item => {
                        return (
                            <>
                                <li>{`Região: ${item.state}`}</li>
                            </>
                        )
                    }))}
                </ul>
            </>        

        )
                }
    export default Fema;