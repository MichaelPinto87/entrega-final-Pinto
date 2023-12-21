import React from "react";
import { Button } from "react-bootstrap";
import { CartContext } from "../../context";

export const AddItemButton = ({
  label = "Agregar al Carrito",
  quantity,
  handleResetQuantity,
}) => {
  const { itemCount, setItemCount } = React.useContext(CartContext);

  const handleAddCart = () => {
    setItemCount(itemCount + quantity);
    handleResetQuantity();
  };

  return (
    <Button onClick={handleAddCart} style={{ marginLeft: "20px" }}>
      {label}
    </Button>
  );
};
