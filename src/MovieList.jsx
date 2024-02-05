import React from 'react';
import MovieCard from './MovieCard';
import BEEKEEPER from './assets/beekeeper_xlg.png';
import Aquaman from './assets/Aquaman_and_the_Lost_Kingdom_poster.jpg';
import Avatar from './assets/Avatar_The_Last_Airbender_2024_series_poster.jpg';


const MovieList = () => {
  const films = [
    { name: "The Beekeeper",paragraphe:"", image: BEEKEEPER, link: "https://www.imdb.com/title/tt15314262/", rate: "10/10" },
    { name: "Aquaman and the Lost Kingdom", image: Aquaman , link: "https://www.imdb.com/title/tt9663764/", rate:"5.5/10" },
    { name: "Avatar: The Last Airbender", image: Avatar , link: "https://www.imdb.com/title/tt9018736/", rate:"7.5/10" },
    { name: "Avatar: The Last Airbender", image: Avatar , link: "https://www.imdb.com/title/tt9663764/", rate:"7.5/10" },
    { name: "Avatar: The Last Airbender", image: Avatar , link: "https://www.imdb.com/title/tt9663764/", rate:"7.5/10" },
    { name: "Avatar: The Last Airbender", image: Avatar , link: "https://www.imdb.com/title/tt9663764/", rate:"7.5/10" },
    { name: "Avatar: The Last Airbender", image: Avatar , link: "https://www.imdb.com/title/tt9663764/", rate:"7.5/10" },
    { name: "Avatar: The Last Airbender", image: Avatar , link: "https://www.imdb.com/title/tt9663764/", rate:"7.5/10" },
   

  ];

  return (
    <section>
      <div className=" flex gap-5 p-[70px] flex-wrap justify-center">
        {films.map((film, index) => (
          <MovieCard
            key={index}
            name={film.name}
            image={film.image}
            link={film.link}
            rate={film.rate}
            paragraphe={film.paragraphe}
          />
          
        ))}
      </div>
    </section>
  );
};


export default MovieList