import React from 'react';
import Slick from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

import mockData, { Movie } from '../data/mock';

const Poster = ({ cover, title }: Movie, index: number) => (
  <article key={index}>
    <img src={cover} alt={title} />
  </article>
);

interface CarouselData {
  title?: string;
  data?: Movie[];
}

const Carousel = ({ title = 'Carousel', data = mockData }: CarouselData) => {
  enum Direciton {
    left,
    right,
  }

  const SlickArrow = ({
    direction,
    onClick,
  }: {
    direction: Direciton;
    onClick?: () => void;
  }) => (
    <button
      type="button"
      className={`absolute w-16 h-full z-10 bg-black bg-opacity-50 top-0 ${
        direction ? 'right-0' : 'left-0'
      }`}
      onClick={onClick}
    >
      <FontAwesomeIcon
        icon={direction ? faChevronRight : faChevronLeft}
        size="3x"
      />
    </button>
  );

  const options = {
    infinite: true,
    slidesToScroll: 1,
    variableWidth: true,
    prevArrow: <SlickArrow direction={Direciton.left} />,
    nextArrow: <SlickArrow direction={Direciton.right} />,
  };

  return (
    <section>
      <h2 className="relative z-10 font-bold text-2xl ml-8 mb-4">{title}</h2>
      <Slick className="relative mb-8" {...options}>
        {data.map((movie, index) => Poster(movie, index))}
      </Slick>
    </section>
  );
};

export default Carousel;
