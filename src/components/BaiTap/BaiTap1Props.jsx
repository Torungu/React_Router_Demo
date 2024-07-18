import React from "react";
import ItemPokemon from "./ItemPokemon";
import { DatePicker } from "antd";

const BaiTap1Props = () => {
  const pokemons = [
    {
      name: "Pikachu",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
      type: "Electric",
      damage: 55,
      defense: 40,
      attack: 90,
    },
    {
      name: "Charizard",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png",
      type: "Fire/Flying",
      damage: 84,
      defense: 78,
      attack: 100,
    },
    {
      name: "Bulbasaur",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
      type: "Grass/Poison",
      damage: 49,
      defense: 49,
      attack: 65,
    },
    {
      name: "Squirtle",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
      type: "Water",
      damage: 48,
      defense: 65,
      attack: 50,
    },
    {
      name: "Jigglypuff",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/039.png",
      type: "Normal/Fairy",
      damage: 45,
      defense: 20,
      attack: 45,
    },
    {
      name: "Meowth",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/052.png",
      type: "Normal",
      damage: 45,
      defense: 35,
      attack: 90,
    },
    {
      name: "Gengar",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/094.png",
      type: "Ghost/Poison",
      damage: 65,
      defense: 60,
      attack: 110,
    },
    {
      name: "Eevee",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/133.png",
      type: "Normal",
      damage: 55,
      defense: 50,
      attack: 55,
    },
    {
      name: "Snorlax",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/143.png",
      type: "Normal",
      damage: 110,
      defense: 65,
      attack: 30,
    },
    {
      name: "Dragonite",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/149.png",
      type: "Dragon/Flying",
      damage: 134,
      defense: 95,
      attack: 80,
    },
  ];

  return (
    <div>
      <DatePicker />
      <h2>Bài tập hiển thị các pokemons</h2>
      <div className="grid grid-cols-5">
        {/* mảng để map và tạo layout  */}
        {pokemons.map((item, index) => {
          const { image, name, attack, defense } = item;
          return <ItemPokemon key={index} pokemon={item} />;
        })}
      </div>
    </div>
  );
};

export default BaiTap1Props;
