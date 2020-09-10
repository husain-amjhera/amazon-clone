import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />
      <div className="home__row">
        <Product
          id="12345679"
          title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
          alt=""
        />
        <Product
          id="223456789"
          title="Nintendo Switch with Neon Blue and Neon Red Joy‑Con - HAC-001(-01)"
          price={369}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/61JnrafZ7zL._AC_SL1457_.jpg"
          alt=""
        />
      </div>
      <div className="home__row">
        <Product
          id="333456789"
          title="LEGO Disney Pixar's The Incredibles - Nintendo Switch"
          price={19.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/71MKfqIpg0L._SL1500_.jpg"
          alt=""
        />
        <Product
          id="444456789"
          title='Samsung Galaxy A71 "5G" Unlocked | 6.7" AMOLED Screen |128GB of Storage | Long Lasting Battery | Single SIM | 2020 Model | US Version | Black'
          price={499.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/814rWnmjoQL._AC_SL1500_.jpg"
          alt=""
        />
        <Product
          id="555556789"
          title="Gucci Men's Blue/Beige Linen Vintage Striped Long Sleeve T-Shirt 408854 4267"
          price={325}
          rating={2}
          image="https://images-na.ssl-images-amazon.com/images/I/71wh15GvaeL._AC_UX342_.jpg"
          alt=""
        />
      </div>
      <div className="home__row">
        <Product
          id="666666789"
          title="Lenovo Flex 5 14 2-in-1 Laptop, 14.0 FHD (1920 x 1080) Touch Display, AMD Ryzen 5 4500U Processor, 16GB DDR4, 256GB SSD, AMD Radeon Graphics, Digital Pen Included, Win 10, 81X20005US, Graphite Grey"
          price={599.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/81x%2B9uFY1QL._AC_SL1500_.jpg"
          alt=""
        />
      </div>
    </div>
  );
}

export default Home;
