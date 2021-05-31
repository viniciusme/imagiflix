import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import logo from '../assets/imagiflix.png';
import { faSearch, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import placeholderUser from '../assets/user.jpg';

const NavBar = () => (
  <nav className="absolute top-0 left-0 grid grid-cols-2 items-center w-full p-8">
    <div className="justify-self-start grid grid-cols-2 gap-4 items-center">
      <h1 className="hidden">Imagiflix</h1>
      <img src={logo} alt="Imagiflix" />

      <ul className="grid grid-flow-col gap-4">
        <li className="font-bold">Início</li>
        <li>
          <a href="#series">Séries</a>
        </li>
        <li>
          <a href="#movies">Filmes</a>
        </li>
      </ul>
    </div>

    <div className="justify-self-end flex justify-items-end items-center">
      <form>
        <input type="text" placeholder="Títulos, gente e gêneros" />
        <button>
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </form>
      <div className="flex ml-4">
        <img src={placeholderUser} alt="Foto do usuário" />
        <button>
          <FontAwesomeIcon icon={faCaretDown} />
        </button>
        <ul className="hidden">
          <li>
            <a href="#account">Minha Conta</a>
          </li>
          <li>
            <a href="#logout">Sair</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default NavBar;
