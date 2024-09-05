import React from "react";
import Stripe from "./Stripe";

import image1 from '../assets/marquee/item1.svg'
import image2 from '../assets/marquee/item2.svg'
import image3 from '../assets/marquee/item3.svg'
import image4 from '../assets/marquee/item6.svg'
import image5 from '../assets/marquee/item7.svg'
import image6 from '../assets/marquee/item8.svg'

function Stripes() {
  const data = [
    { url: image1, numb: 34 },
    { url: image2, numb: 42 },
    { url: image3, numb: 12 },
    { url: image4, numb: 16 },
    { url: image5, numb: 31 },
    { url: image6, numb: 43 },
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
