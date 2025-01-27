import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { editProductForm, removeProduct } from '../../features/modal/modalSlice';
import { shortenProductId } from '../../utils/helper';
import EditProduct from '../icons/EditProduct';
import RemoveProduct from '../icons/RemoveProduct';
import styles from "./ProductsList.module.css"
function ProductsList({products}) {
const modalState=useSelector((store)=>store.modal);
const modalDispatch=useDispatch();
  const editProductHandler = (product) => {
    modalDispatch(editProductForm(product));
  };
  const removeProductHandler = (product) => {
    modalDispatch(removeProduct(product));
  };
  return (
    <div className={styles.tableContainer}>
    <table className={styles.table}>
      <thead>
        <tr>
          <th>نام کالا</th>
          <th>موجودی</th>
          <th>قیمت</th>
          <th>شناسه کالا</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {/* {isLoading && <tr>isLoading....</tr>} */}
        {products &&
          products.map((product) => (
            <tr key={product.id}>
            <td>{product.name}</td>
            <td>{product.quantity}</td>
            <td>{product.price}</td>
            <td className={styles.format}>{shortenProductId(product.id)}</td>
            <td>
              <button onClick={()=>editProductHandler(product)}>
                  <EditProduct/>
              </button>
              <button onClick={()=>removeProductHandler(product)}>
                  <RemoveProduct/>
              </button>
            </td>
          </tr>
          ))}
      </tbody>
    </table>
  </div>
  )
}

export default ProductsList