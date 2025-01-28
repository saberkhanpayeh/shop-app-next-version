import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useDeleteProduct } from '../../services/mutations';
import { useNavigateLoginPage } from '../../hooks/navigateHooks';
import { useInvalidateQuery } from '../../services/queries';
import { removeProductForm } from '../../features/modal/modalSlice';
import styles from "./AlertModal.module.css";
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import { toastOptions } from '../../constants/toast';
function AlertModal() {
    const router=useRouter();
    const modalState=useSelector((store)=>store.modal);
    const modalDispatch=useDispatch();
    const {mutate}=useDeleteProduct();
    const navigteLoginPage=useNavigateLoginPage();
    const invalidateQuery=useInvalidateQuery();
    const {formTitle,confirmBtn,cancelBtn,product}=modalState;
    const removeHandler=()=>{
        // console.log("remove");
        mutate(product,{
            onSuccess:(data)=>{
                // console.log(data);
                modalDispatch(removeProductForm());
                toast.info("محصول مورد نظر حذف شد!",toastOptions);
                invalidateQuery(["products"]);
                router.push("/");
            },
            onError:(error)=>{
                console.log(error.response.data.message);
                toast.error("مشکلی در حذف محصول وجود دارد",toastOptions);
                navigteLoginPage();
            }
        })
    }
    const cancelHandler=()=>{
        console.log("cancel");
        modalDispatch(removeProductForm());
        router.push("/");
    }
  return (
    <div className={styles.wrapper}>
        <div className={styles.container}>
            <img src="/images/Close.png" alt="close-icon" />
            <p>{formTitle}</p>
            <div>
                <button onClick={removeHandler}>{confirmBtn}</button>
                <button onClick={cancelHandler}>{cancelBtn}</button>
            </div>
        </div>
    </div>
  )
}

export default AlertModal