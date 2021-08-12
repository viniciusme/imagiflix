import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const today = new Date();
  return (
    <footer className="mt-32 px-12 pb-4 text-gray-400 text-sm">
      <FontAwesomeIcon
        className="mr-4 hover:text-white cursor-pointer"
        icon={faFacebookSquare}
        size="2x"
      />
      <FontAwesomeIcon
        className="mr-4 hover:text-white cursor-pointer"
        icon={faInstagram}
        size="2x"
      />
      <FontAwesomeIcon
        className="mr-4 hover:text-white cursor-pointer"
        icon={faTwitter}
        size="2x"
      />
      <FontAwesomeIcon
        className="hover:text-white cursor-pointer"
        icon={faYoutube}
        size="2x"
      />
      <div className="grid grid-cols-4 gap-2 my-8">
        <a className="mr-4 hover:text-white cursor-pointer" href="#">
          Idiomas e legendas
        </a>
        <a className="mr-4 hover:text-white cursor-pointer" href="#">
          Audiodescrição
        </a>
        <a className="mr-4 hover:text-white cursor-pointer" href="#">
          Centro de ajuda
        </a>
        <a className="mr-4 hover:text-white cursor-pointer" href="#">
          Cartão pré-pago
        </a>
        <a className="mr-4 hover:text-white cursor-pointer" href="#">
          Imprensa
        </a>
        <a className="mr-4 hover:text-white cursor-pointer" href="#">
          Relação com investidores
        </a>
        <a className="mr-4 hover:text-white cursor-pointer" href="#">
          Carreiras
        </a>
        <a className="mr-4 hover:text-white cursor-pointer" href="#">
          Termos de uso
        </a>
        <a className="mr-4 hover:text-white cursor-pointer" href="#">
          Privacidade
        </a>
        <a className="mr-4 hover:text-white cursor-pointer" href="#">
          Avisos legais
        </a>
        <a className="mr-4 hover:text-white cursor-pointer" href="#">
          Preferências de cookies
        </a>
        <a className="mr-4 hover:text-white cursor-pointer" href="#">
          Informações corporativas
        </a>
        <a className="mr-4 hover:text-white cursor-pointer" href="#">
          Entre em contato
        </a>
      </div>
      <p>&copy; 1997 - {today.getFullYear()} Imagiflix, Inc.</p>
    </footer>
  );
};

export default Footer;
