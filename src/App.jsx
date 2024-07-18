import { Route, Routes } from "react-router-dom";
import BaiTap1Props from "./components/BaiTap/BaiTap1Props";
import BaiTapHienThiDienThoai from "./components/BaiTap/BaiTapHienThiDienThoai/BaiTapHienThiDienThoai";
import HomeTemplate from "./templates/HomeTemplate/HomeTemplate";
import Page404 from "./components/Page404/Page404";
import PokemonDetail from "./components/BaiTap/PokemonDetail";
import useRouteCustom from "./routes/useRouteCustom";
function App() {
  const routes = useRouteCustom();
  return routes;
  // <>
  //   <Routes>
  //     <Route path="/hien-thi-iphone" element={<BaiTapHienThiDienThoai />} />
  //     <Route path="/" element={<HomeTemplate />}>
  //       <Route index element={<BaiTapHienThiDienThoai />} />
  //       <Route path="bai-tap-pokemon" element={<BaiTap1Props />} />
  //       <Route path="pokemon-detail/:id" element={<PokemonDetail />} />
  //     </Route>
  //     <Route path="*" element={<Page404 />} />
  //   </Routes>
  // </>
}

export default App;
