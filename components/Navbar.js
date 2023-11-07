import Image from "next/image"
import Link from "next/link"

export default function Navbar() {
  return (
    <div className="container-lg sticky top-0 flex py-4 px-10 bg-black bg-opacity-90 z-10">
      <div className="container mx-auto w-full flex-none md:flex justify-between items-center">
        <div className="justify-start items-end">
          {" "}
          {/*Left area*/}
          <div className="flex items-center gap-4">
            <button>
              <Link href="/">
                <Image
                  className="w-10 lg:w-16"
                  width="0"
                  height="0"
                  src="/images/logo.svg"
                  alt="Comusic"
                />
              </Link>
            </button>
            <span className="text-white font-bold text-base">
              Calculadora do Desmatamento
            </span>
          </div>
        </div>

        <div className="justify-start lg:justify-end items-end md:pt-0 hidden md:flex">
          {" "}
          {/*Right area*/}
          <ul className="flex gap-6 text-gray-100 text-xs tracking-widest font-semibold uppercase">
            <li className="hover:underline underline-offset-8 hover:text-white">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:underline underline-offset-8 hover:text-white">
              <Link href="/calculadora">Calculadora</Link>
            </li>
            <li className="hover:underline underline-offset-8 hover:text-white">
              <Link href="/sobre">Sobre</Link>
            </li>
            <li className="hover:underline underline-offset-8 hover:text-white">
              <Link href="/equipe">Equipe</Link>
            </li>
            <li className="hover:underline underline-offset-8 hover:text-white">
              <Link href="/contato">Contato</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
