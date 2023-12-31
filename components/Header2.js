"use client";

import React from 'react'
import Button from "@mui/material/Button"

function Header2() {
    return (
        <div
            className="pt-32 bg-cover bg-center px-5 lg:px-0 bg-black"
        //style={{ backgroundImage: `url("/images/test1.png")` }}
        >
            <div className="flex mx-auto items-center border-b-0 border-black">
                <div className="flex mx-auto items-center border-b-8 border-black">
                    <div className="flex flex-col lg:flex-row w-full items-center justify-between text-white pt-16 lg:pt-16 pb-10 px-4 lg:px-10 lg:pb-10 gap-10 lg:gap-0">
                        <div className="text-lg font-light text-left mb-0 pt-0 lg:w-1/2">
                            A{" "}
                            <span className="font-bold">
                                Calculadora de Impactos do Desmatamento
                            </span>{" "}
                            é uma ferramenta de valoração dos danos sociais e ambientais
                            causados pelo desmatamento na Amazônia
                        </div>
                        <div className="hidden mx-auto gap-8">
                            <Button
                                className="bg-green-400 hover:bg-green-100 py-4 px-8 text-green-900 font-bold"
                                variant="contained"
                                color="primary"
                                size="large"
                                href="/"
                                target="_blank"
                            >
                                CALCULATOR
                            </Button>
                            <Button
                                className="bg-green-400 hover:bg-green-100 py-4 px-8 text-green-900 font-bold"
                                variant="contained"
                                color="primary"
                                size="large"
                                href="/"
                                target="_blank"
                            >
                                GUIA DE USO
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header2
