import React from "react";
import "./CatProduct.scss";
import cn from "classnames";
import cat from "../images/cat.png";
import PropsTypes from "prop-types";
import { pluralize } from "numeralize-ru";

const CLASS = "cat-product";

const CatProduct = (props) => {
  const [active, setActive] = React.useState(false);
  const [hover, setHover] = React.useState(false);
  const {
    disabled,
    weight,
    taste,
    composition,
    quantityPortions,
    quantityGifts,
    satisfied,
  } = props;

  const onClickHandler = () => {
    setActive((active) => !active);
    setHover(false);
  };

  return (
    <div className={cn(`${CLASS}__wrapper`)}>
      <div
        className={cn(CLASS, {
          [`${CLASS}--disabled`]: disabled,
          [`${CLASS}--active`]: active,
          [`${CLASS}--hover`]: hover,
        })}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={onClickHandler}
      >
        <div className={cn(`${CLASS}__inner`)}>
          <p className={cn(`${CLASS}__advertising`)}>
            {hover && active
              ? "Котэ не одобряет?"
              : "Сказочное заморское яство"}
          </p>
          <p className={cn(`${CLASS}__title`)}>Нямушка</p>
          <p className={cn(`${CLASS}__taste`)}>{taste}</p>

          <div className={cn(`${CLASS}__description`)}>
            <p className={cn(`${CLASS}__description-text`)}>
              <span>{quantityPortions} </span>
              {pluralize(quantityPortions, "порция", "порции", "порций")}
            </p>

            {quantityGifts && (
              <p className={cn(`${CLASS}__description-text`)}>
                {quantityGifts <= 1 ? "" : <span>{quantityGifts} </span>}
                {pluralize(quantityGifts, "мышь", "мыши", "мышей")} в подарок
              </p>
            )}

            {satisfied && (
              <p className={cn(`${CLASS}__description-text`)}>
                заказчик доволен
              </p>
            )}
          </div>

          <img className={cn(`${CLASS}__img`)} src={cat} alt="cat" />

          <div className={cn(`${CLASS}__weight`)}>
            <p className={cn(`${CLASS}__weight-number`)}>{weight}</p>
            <p className={cn(`${CLASS}__weight-text`)}>кг</p>
          </div>
        </div>
      </div>

      <footer className={`${CLASS}__footer`}>
        {disabled ? (
          `Печалька, ${taste} закончился.`
        ) : active ? (
          composition
        ) : (
          <p>
            Чего сидишь? Порадуй котэ,&nbsp;
            <span onClick={onClickHandler}>купи.</span>
          </p>
        )}
      </footer>
    </div>
  );
};

export default CatProduct;

CatProduct.PropsTypes = {
  disabled: PropsTypes.bool,
  weight: PropsTypes.string.isRequired,
  taste: PropsTypes.string.isRequired,
  composition: PropsTypes.string,
  quantityPortions: PropsTypes.number.isRequired,
  quantityGifts: PropsTypes.number,
  satisfied: PropsTypes.bool,
};
