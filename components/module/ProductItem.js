import React from "react";
import { shortenProductId } from "../../utils/helper";
import styles from "./ProductItem.module.css";
import EditProduct from "../icons/EditProduct";
import RemoveProduct from "../icons/RemoveProduct";
function ProductItem({ product }) {
  const editProductHandler = () => {};
  const removeProductHandler = () => {};
  return (
    <tr>
      <td>{product.name}</td>
      <td>{product.quantity}</td>
      <td>{product.price}</td>
      <td className={styles.format}>{shortenProductId(product.id)}</td>
      <td>
        <button onClick={editProductHandler}>
            <EditProduct/>
        </button>
        <button onClick={removeProductHandler}>
            <RemoveProduct/>
        </button>
      </td>
    </tr>
  );
}

export default ProductItem;
