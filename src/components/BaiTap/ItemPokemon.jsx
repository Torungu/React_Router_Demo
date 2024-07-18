import React from "react";
import { Link } from "react-router-dom";

const ItemPokemon = ({ pokemon }) => {
  // console.log(pokemon);
  // console.log(props);
  return (
    <div>
      <img
        src={
          pokemon
            ? pokemon.image
            : "https://assets.pokemon.com/assets/cms2/img/pokedex/full/149.png"
        }
        alt=""
      />
      {/* nếu như pokemon có dữ liệu (khác undifined hoặc null thì lúc đó mới render tạo ra 4 thẻ h3 thẻ p và button) */}
      {pokemon && (
        <>
          <h3>{pokemon?.name}</h3>
          <p>Tấn công: {pokemon?.attack}</p>
          <p>Phòng thủ: {pokemon?.defense}</p>
          <Link to={`pokemon-detail/${pokemon.name}`}>Xem chi tiết</Link>
        </>
      )}
    </div>
  );
};

export default ItemPokemon;
