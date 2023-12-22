import react from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

import { CartContext } from "../../context";

const CartWidgetComponent = () => {
  const { itemCount } = react.useContext(CartContext);
  const iconStyles = {
    fontSize: "1.3rem",
    paddingRight: "10px",
  };
};

export default CartWidgetComponent;
