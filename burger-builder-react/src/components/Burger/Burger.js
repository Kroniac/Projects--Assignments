import React from "react";
import classes from "./Burger.css";
import BurgerIngredients from "./BurgerIngredients/BurgerIngredients";

const burger = props => {
  const transformedIngredients = Object.keys(props.ingredients).map(Key => {
    return [...Array(props.ingredients[Key])].map((_, i) => {
      return <BurgerIngredients key={Key + i} type={Key} />;
    });
  });
  return (
    <div className={classes.Burger}>
      <BurgerIngredients type="bread-top" />
      {transformedIngredients}
      <BurgerIngredients type="bread-bottom" />
    </div>
  );
};

export default burger;
