"use client"

//import { useState } from "react"
import Head from "next/head"
import Button from "@mui/material/Button"
import { RiPlantFill } from "react-icons/ri/"
import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import Typography from "@mui/material/Typography"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import TextField from "@mui/material/TextField"
import FormControl from "@mui/material/FormControl"
import InputLabel from "@mui/material/InputLabel"
import Select from "@mui/material/Select"
import MenuItem from "@mui/material/MenuItem"
import Header2 from "./Header2"

export default function Calculate() {


  return (
    <>
      <Head>
        <title>CSF</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="-mt-40 pb-10 border-b-8 border-black">
        <Header2/>

        <h1 className="flex text-2xl md:text-2xl font-bold p-10 border-b-8 border-black gap-4 items-center">
          <RiPlantFill />
          Metodologia
        </h1>

        <div className="pl-10 pt-10 prose prose-sm md:prose-md">
        <h2>Resumo</h2>
        <p>
          A metodologia para valoração dos impactos socioambientais do desmatamento baseia-se no conceito de que o valor é uma medida de bem‐estar definida socialmente por meio da sua importância relativa para um conjunto de indivíduos. Ou seja, o valor é relativo, uma vez que se relaciona não apenas com as características do objeto em questão, mas também com o contexto no qual se está inserido. Depende de sua escassez relativa (oferta) e da pressão pelo uso dos recursos disponíveis (demanda), como demonstra a figura abaixo:
        </p>
        <img src="/images/img1.png"/>
        <p>
          A imagem exemplifica como a sociedade declara um valor diferente a uma residência em função dos atributos ao seu redor e sua oferta. Da mesma forma, uma única árvore em uma área totalmente desmatada terá mais valor do que a mesma espécie em um ambiente totalmente florestado. Por isso, não se pode determinar um valor absoluto de uma floresta, já que dependerá do contexto e das alternativas de seu uso ou não uso.
        </p>
        <p>
          Além de determinado socialmente, o valor é algo marginal, uma vez que se refere a uma mudança de tendência esperada do estado dos recursos. Assim sendo, a determinação do que é perdido ou ganho com uma mudança de uso do solo, como a agricultura ou pecuária, está relacionada com a linha de base, ou seja, com a tendência que representa o status-quo como medida de variação da preferência dos indivíduos. Para chegar em valores monetários se faz uso de uma função de transferência de valor que busca correlacionar características contextuais com valores médios de perda econômica em diferentes países.
        </p>
        <p>
          A medição das categorias de impacto que utilizamos faz uso de diferentes métodos de valoração. 
        </p>
        <p>
          A mensuração das categorias de impacto utiliza diferentes métodos de valoração, que podem ser divididos em duas abordagens:
        </p>
        <ul>
          <li>
            Custo de substituição ou recuperação da área: representa o custo das técnicas apropriadas para recuperar o ambiente danificado e o bem-estar humano.
          </li>
          <li>
            Perda de serviços ecossistêmicos. o desmatamento gera uma perda de bem-estar, uma vez que a floresta em pé proporciona vários serviços ecossistêmicos que seriam afetados, como sequestro de carbono, regulação hídrica e controle da erosão. Além disso, considera-se o custo de oportunidade que corresponde ao retorno econômico esperado das alternativas de uso da terra daqueles que a possuem. As opções relacionadas ao custo de oportunidade incluem fornecer recursos madeireiros e não madeireiros da floresta. Além do retorno econômico, também são considerados valores de bem-estar perdidos que não são comercializados no mercado, como serviços culturais e recreativos.
          </li>
        </ul>
        <p>
          A magnitude destes impactos é ajustada por fatores contextuais que influenciam os valores econômicos, como a região analisada, a legalidade do desmatamento e a prioridade de conservação da área. A Calculadora de Impactos do Desmatamento pode produzir resultados médios para áreas na Amazônia ao determinar a região de pesquisa.
        </p>
        <p>
          <strong>Documentos técnicos produzidos pela Conservação Estratégica</strong>
          <br/>
          Conservação Estratégica (CSF) e Center for Climate Crimes Analysis (CCCA) (2022) Caso Casino: A Ligação entre o abastecimento de carne do Grupo Casino. Desmatamento e violações de direitos dos povos que habitam a Terra Indígena Uru-Eu-Wau-Wau na Amazônia Brasileira. 
          <br/>
          Disponível em:
          <br/>
          <a href="https://climatecrimeanalysis.org/wp-content/uploads/2022/08/CCCA-CasinoCase-Portuguese.pdf" target="_blank"> <small>https://climatecrimeanalysis.org/wp-content/uploads/2022/08/CCCA-CasinoCase-Portuguese.pdf</small></a>
          <br/>
          <br/>
          Para saber mais, leia nosso relatório metodológico completo de valoração de impactos do desmatamento na Amazônia, aqui.

        </p>



        </div>

      </div>
    </>
  )
}
