import React from "react";
import logoFooter from "../imgs/logoFooter.png";
import {
  WhatsappLogoIcon,
  FacebookLogoIcon,
  InstagramLogoIcon,
} from "@phosphor-icons/react";

const Footer = () => {
  return (
    <footer className="w-full bg-bgFooter text-gray-300 pt-6 pb-10 mt-10 border-t border-gray-700 shadow-sm flex justify-center">
      <div className="px-4 md:px-32 w-full">
        <div className="mb-10 flex flex-col md:flex-row items-center md:items-center justify-between w-full">
          <div className="flex flex-col items-start text-center md:text-left">
            <strong>Fale Conosco</strong>
            <span>contato@grupojepterceirizacao.com.br</span>
            <span>(11) 3999-2727</span>
            <span>(11) 94732-2988</span>
            <a href="#" className="font-medium mt-2 inline-block">
              Envie uma mensagem
            </a>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={logoFooter}
              alt="Ícone"
              className="w-[200px] my-10 md:my-0 mx-auto"
            />
            <div className="flex flex-row gap-4 mt-2">
              <WhatsappLogoIcon className="w-6 h-6 hover:cursor-pointer" />
              <FacebookLogoIcon className="w-6 h-6 hover:cursor-pointer" />
              <InstagramLogoIcon className="w-6 h-6 hover:cursor-pointer" />
            </div>
          </div>
        </div>
        <p className="text-sm text-center">
          {" "}
          © {new Date().getFullYear()} Todos os direitos reservados |
          Desenvolvido por{" "}
          <a
            href="https://meuportfolio-misha.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium"
          >
            Danielle Cordeiro
          </a>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
