import React, { useState } from "react";
import ItemPokemon from "./ItemPokemon";
import { DatePicker } from "antd";
import { useSelector } from "react-redux";
import useInput from "../../hooks/useInput";

const BaiTap1Props = () => {
  const taiKhoan = useInput();
  console.log(taiKhoan);
  const { pokemons } = useSelector((state) => state.pokemonSlice);
  return (
    <>
      <div>
        <DatePicker />
        <h2>Bài tập hiển thị các pokemons</h2>
        <div className="grid grid-cols-5">
          {/* mảng để map và tạo layout  */}
          {pokemons.map((item, index) => {
            // const { image, name, attack, defense } = item;
            return <ItemPokemon key={index} pokemon={item} />;
          })}
        </div>
        <input type="text" placeholder="ur account ?" {...taiKhoan} />
      </div>
    </>
  );
};

export default BaiTap1Props;
