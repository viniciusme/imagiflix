import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import logo from '../assets/imagiflix.png';
import { faSearch, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import placeholderUser from '../assets/user.jpg';

import './NavBar.css';

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleClick = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar absolute top-0 left-0 grid grid-cols-2 items-center w-full p-8">
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
                <form className="relative w-64">
                    <input
                        className="w-full bg-black border border-white rounded py-1 px-3 transition-all duration-300 ease-in-out opacity-0 hover:opacity-100 focus:opacity-100"
                        type="text"
                        placeholder="Títulos, gente e gêneros"
                    />
                    <button
                        className="search absolute right-0 py-1 px-2"
                        onClick={e => e.preventDefault()}
                    >
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </form>
                <div className="relative flex ml-4">
                    <img
                        src={placeholderUser}
                        alt="Foto do usuário"
                        onClick={handleClick}
                    />
                    <button onClick={handleClick}>
                        <FontAwesomeIcon className="ml-2" icon={faCaretDown} />
                    </button>
                    <ul
                        className={`absolute mt-10 top-0 right-0 w-32 bg-black rounded p-4 transition-all duration-500 ease-in-out ${!isMenuOpen && 'opacity-0 invisible'
                            }`}
                    >
                        <li>
                            <a href="#account" onClick={handleClick}>
                                Minha Conta
                            </a>
                        </li>
                        <li>
                            <a href="#logout" onClick={handleClick}>
                                Sair
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
