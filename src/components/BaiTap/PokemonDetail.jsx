import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";

const PokemonDetail = () => {
  const params = useParams();
  const pathName = useLocation();
  console.log(params);
  return (
    <div>
      <Link>PokemonDetail</Link>
    </div>
  );
};

export default PokemonDetail;
