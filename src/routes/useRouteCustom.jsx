import React from "react";
import { useRoutes } from "react-router-dom";
import HomeTemplate from "../templates/HomeTemplate/HomeTemplate";
import Page404 from "../components/Page404/Page404";
import BaiTap1Props from "../components/BaiTap/BaiTap1Props";
import BaiTapHienThiDienThoai from "../components/BaiTap/BaiTapHienThiDienThoai/BaiTapHienThiDienThoai";
import PokemonDetail from "../components/BaiTap/PokemonDetail";
import { path } from "../common/path.js";
import DemoRedux from "../components/DemoRedux/DemoRedux.jsx";
import Dices from "../components/BaiTap/BaiTapDices/Dices.jsx";
import DemoUseEffect from "../components/DemoHook/DemoUseEffect/DemoUseEffect.jsx";
import DemoUseEffectDetail from "../components/DemoHook/DemoUseEffect/DemoUseEffectDetail.jsx";
import DemoFormReact from "../components/DemoFormReact/DemoFormReact.jsx";

const useRouteCustom = () => {
  const elements = useRoutes([
    {
      path: path.homePage,
      element: <HomeTemplate />,
      children: [
        {
          path: path.baiPokemon,
          element: <BaiTap1Props />,
        },
        {
          index: true,
          element: <BaiTapHienThiDienThoai />,
        },
        {
          path: `${path.pokemonDetail}/:id`,
          element: <PokemonDetail />,
        },
        {
          path: path.demoRedux,
          element: <DemoRedux />,
        },
        {
          path: path.baiTapDices,
          element: <Dices />,
        },
        {
          path: path.demoUseEffect,
          element: <DemoUseEffect />,
        },
        {
          path: path.demoUseEffectDetail,
          element: <DemoUseEffectDetail />,
        },
        {
          path: "/demo-form-react",
          element: <DemoFormReact />,
        },
      ],
    },
    {
      path: "*",
      element: <Page404 />,
    },
  ]);
  return elements;
};

export default useRouteCustom;
