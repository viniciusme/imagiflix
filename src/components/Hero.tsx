import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPlus } from '@fortawesome/free-solid-svg-icons';

import Score from './Score';

import placeholder from '../assets/hero.jpg';

const Hero = ({ title = 'Avengers Endgame', score = 10 }) => (

    <header className="box-border relative min-h-screen -mb-60">
        <img
            className="object-cover object-center h-auto w-full"
            src={placeholder}
            alt="Filme em destaque"
        />
        <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black"></div>
        <article className="absolute bottom-0 mb-80 px-8">
            <p className="text-3xl">Assista agora:</p>
            <h2 className="text-6xl font-bold mb-4">{title}</h2>
            <p className="text-base">
                Nota{' '}
                <Score value={score} />
            </p>

            <button className="text-base py-2 px-8 mr-2 mt-8 rounded bg-black bg-opacity-50 transition-all duration-300 ease-in-out hover:bg-white hover:bg-opacity-75 hover:text-black">
                <FontAwesomeIcon icon={faPlay} /> Assistir
            </button>
            <button className="text-base py-2 px-8 mr-2 mt-8 rounded bg-black bg-opacity-50 transition-all duration-300 ease-in-out hover:bg-white hover:bg-opacity-75 hover:text-black">
                <FontAwesomeIcon icon={faPlus} /> Minha Lista
            </button>
        </article>
    </header>

);

export default Hero;
