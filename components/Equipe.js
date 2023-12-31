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
          Equipe
        </h1>

        <div className="pl-10 pt-10 prose prose-sm md:prose-lg">
        
          <div>
            <strong>Concepção e Coordenação Técnica</strong>
            <br/>
            Pedro Gasparinetti
            <br/>
            <br/>

            <strong>Valoração econômica</strong>
            <br/>
            Pedro Gasparinetti (coordenador geral)
            <br/>
            Leonardo Bakker (analista econômico)
            <br/>
            Victor Araújo (analista de dados)
            <br/>
            <br/>

            <strong>Comunicação, redação, imprensa</strong>
            <br/>
            Priscila Crispi
            <br/>
            <br/>

            <strong>WEBSITE</strong>
            <br/>
            Desenvolvimento
            <br/>
            Linze User Experience
            <br/>
            <br/>

            <strong>Design</strong>
            <br/>
            Carlos Eduardo Veloso
            <br/>
            <br/>

            <strong>Ilustrações</strong>
            <br/>
            Thaís Erre
            <br/>
            <br/>

            <strong>Roteiros</strong>
            <br/>
            Priscila Crispi
            <br/>
            <br/>

            <strong>Imagens</strong>
            <br/>
            Freepik
            <br/>
            <br/>

            <strong>FINANCIAMENTO</strong>
            <br/>
            Open Society
            <br/>
            <br/>
          </div>

        </div>

      </div>
    </>
  )
}
