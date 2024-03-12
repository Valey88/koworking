import React from "react";
import Header from "../components/header/Header";
import Cmp1 from "../components/pagecomponents/Cmp1/Cmp1";
import Cmp2 from "../components/pagecomponents/Cmp2/Cmp2";
import Cmp3 from "../components/pagecomponents/Cmp3/Cmp3";
import Cmp4 from "../components/pagecomponents/Cmp4/Cmp4";
import Footer from "../components/footer/Footer";
const Home = () => {
  return (
    <div className="">
      <Cmp1 />
      <Cmp2 />
      <Cmp3 />
      <Cmp4 />
    </div>
  );
};

export default Home;
