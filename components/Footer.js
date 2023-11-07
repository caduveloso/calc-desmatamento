import Link from "next/link"
import { FaDiscord } from "react-icons/fa/"
import { FaTwitter } from "react-icons/fa/"

export default function Footer() {
  return (
    <div className="container-lg p-0 mb-0 mt-16 bg-black bg-opacity-100 px-0 lg:px-0">
      <div className="container flex flex-col mx-auto gap-0 text-white">
        <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-0 py-10 text-xs tracking-widest font-semibold uppercase text-gray-200 text-center">

          <div className="flex">
            <div className="hover:underline underline-offset-8 hover:text-gray-300">
              <Link href="/calculadora">Calculadora</Link>
            </div>
          </div>

          <div className="flex">
            <div className="hover:underline underline-offset-8 hover:text-gray-300">
              <Link href="/sobre">Sobre</Link>
            </div>
          </div>

          <div className="flex">
            <div className="hover:underline underline-offset-8 hover:text-gray-300">
              <Link href="/guias-de-uso">Guia de uso</Link>
            </div>
          </div>

          <div className="flex">
            <div className="hover:underline underline-offset-8 hover:text-gray-300">
              <Link href="/metodologia">Metodologia </Link>
            </div>
          </div>

          <div className="flex">
            <div className="hover:underline underline-offset-8 hover:text-gray-300">
              <Link href="/publicacoes">Publicações</Link>
            </div>
          </div>

          <div className="flex">
            <div className="hover:underline underline-offset-8 hover:text-gray-300">
              <Link href="/equipe">Equipe </Link>
            </div>
          </div>

          <div className="flex">
            <div className="hover:underline underline-offset-8 hover:text-gray-300">
              <Link href="/contato">Contato</Link>
            </div>
          </div>
        </div>

        <div className="container-lg flex justify-between items-end py-6 bg-black">
          <div className="text-sm text-white">
            &#169; CSF All rights reserved
          </div>
          <div className="flex gap-3 text-gray-500">
            <a
              className="hover:text-white"
              href="https://discord.gg/t2DjGc8y"
              target="_blank"
              rel="noreferrer"
            >
              <FaDiscord size={24} />
            </a>
            <a
              className="hover:text-white"
              href="https://twitter.com/ComusicIo"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter size={24} />{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
