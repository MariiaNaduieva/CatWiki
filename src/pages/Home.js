import React, {useContext} from "react";
import Header from "../components/Header";
import Discover from "../components/Discover";
import { BreedsContext } from "../context";
import CatInfo from "../components/CatInfo";

function Home() {
  const {breeds} = useContext(BreedsContext);
  return (
    <div>
      <Header breeds={breeds} />
      <Discover breeds={breeds} />
      <CatInfo />
    </div>
  );
}

export default Home;
