import React from "react";
import Stripe from "./Stripe";

function Stripes() {
  const data = [
    { url: "src/assets/marquee/item1.svg", numb: 34 },
    { url: "src/assets/marquee/item2.svg", numb: 42 },
    { url: "src/assets/marquee/item3.svg", numb: 12 },
    { url: "src/assets/marquee/item6.svg", numb: 16 },
    { url: "src/assets/marquee/item7.svg", numb: 31 },
    { url: "src/assets/marquee/item8.svg", numb: 43 },
  ];
  return (
    <div className="flex items-center justify-between overflow-x-auto flex-nowrap mt-28">
      {data.map((elem, index) => (
        <Stripe key={index} val={elem} />
      ))}
    </div>
  );
}

export default Stripes;
