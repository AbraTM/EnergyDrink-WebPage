import React from "react";
import Hero from "./pages/hero/hero"
import Drink from "./pages/drink/drink";
import Flavours from "./pages/flavours/flavours";
import Info from "./pages/info/info";
import Footer from "./pages/footer/footer";


export default function App(){
  return (
    <div>
      <Hero/>
      <Drink/>
      <Flavours/>
      <Info/>
      <Footer/>
    </div>
  )
}