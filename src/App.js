import React from "react";
import "./App.scss";
import cn from "classnames";
import CatProductItem from "./components/CatProductItem";

const CLASS = "app";

const App = () => {
  return (
    <div className={CLASS}>
      <div className={cn(`${CLASS}__container`)}>
        <h1 className={cn(`${CLASS}__title`)}>Ты сегодня покормил кота?</h1>

        <div className={cn(`${CLASS}__products`)}>
          <div className={cn(`${CLASS}__product-item`)}>
            <CatProductItem
              weight="0,5"
              taste="с фуа-гра"
              composition="Головы щучьи с чесноком да свежайшая сёмгушка."
              quantityPortions={10}
              quantityGifts={1}
            />
          </div>
          <div className={cn(`${CLASS}__product-item`)}>
            <CatProductItem
              weight="2"
              taste="с рыбой"
              composition="Головы щучьи с чесноком да свежайшая сёмгушка."
              quantityPortions={40}
              quantityGifts={2}
            />
          </div>
          <div className={cn(`${CLASS}__product-item`)}>
            <CatProductItem
              weight="5"
              taste="с курой"
              disabled
              composition="Головы щучьи с чесноком да свежайшая сёмгушка."
              quantityPortions={100}
              quantityGifts={5}
              satisfied
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
