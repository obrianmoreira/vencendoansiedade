import { Inter } from 'next/font/google'
import Section from '../sections/form';
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home({data}) {

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Section
          title="Pratique Inglês de graça Com Nossa Inteligência Artificial"
          subTitle="Ao lado você encontra um formulário. Nele você pode decidir qual tipo de frase você quer (pergunta, negação, afirmação ou pergunta negando) e qual tempo verbal você deseja treinar. Com o clique no botão nossa inteligência artifiical vai gerar uma frase para você. No campo de texto em baixo, transforme em inglês a frase. Dependendo de sua resposta, nossa AI também vai dizer se você errou ou não ao apertar no botão de ver resultado. Resete caso queira reiniciar e criar uma frase nova. Com a prática você ficará um especialista em criar frases em inglês."
          titleCard="Escolha as regras e tipos de frases que quer treinar abaixo"
        />
      </main>
    </>
  )
}

/*

//
  <Fema data={data} />
  export async function getServerSideProps () {

  const res = await fetch("https://data.cdc.gov/resource/8pt5-q6wp.json");
  const data = await res.json();

  return {

      props: {
        data,
      },

  };

}*/