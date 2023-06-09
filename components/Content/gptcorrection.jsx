import { useEffect, useState } from "react";
import { H1Text, PText } from "../Items/Texts/texts";
import axios from "axios";

const GptCorrection = ({data, datatwo}) => {

    const [gptCorrection, setGptCorrection] = useState('');
    const API_KEY = "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";

    useEffect(() => {
        if(data, datatwo) {

            const contentGenerate = async () => {

                try {

                    const res = await axios.post(
                        "https://api.openai.com/v1/engines/text-davinci-003/completions",
                        {
                            prompt:`"Compare this portuguese sentence: ${data} with this english sentence: ${datatwo}. Say in Portuguese if the second, your sentence, is a good translation of the first one."`,
                            max_tokens: 100,                            
                            temperature: 0.2,
                        },
                        {
                            headers: {
                                "Authorization": `Bearer ${API_KEY}`,
                                "Content-Type": "application/json",
                            }
                        }
                    );

                    const {choices} = res.data;
                    if(choices && choices.length > 0) {
                        const content = choices[0].text;
                        setGptCorrection(content);
                    }

                } catch (error) {

                    console.log('Error', error);

                }

            }

            contentGenerate();

        }
    }, [data, datatwo])

    return (
        <>
            <PText pText={gptCorrection} />
        </>
    )

}

export default GptCorrection;