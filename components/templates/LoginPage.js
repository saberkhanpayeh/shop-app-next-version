import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useLogin } from "../../services/mutations";
import { setCookie } from "../../utils/cookie";
import { yupResolver } from "@hookform/resolvers/yup";
import styles from "./RegistrationAndLogin.module.css";
import { loginFromSchema } from "../../schema/validationForms";
import { useRouter } from "next/router";
import Link from "next/link";
import OpenEye from "../icons/OpenEye";
import CloseEye from "../icons/CloseEye";
function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const{mutate}=useLogin();
  const router=useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginFromSchema),
    mode: "onChange", //real-time validation active
  });
  const onSubmit=(data)=>{
    // console.log(data);
    mutate(data,{
      onSuccess:(data)=>{
        // console.log(data);
        setCookie("token",data?.data.token);
        router.push("/");
      },
      onError:(error)=>{
        console.log(error.response.data.message);
      }
    })
  }
  return (
    <div style={{ width: "33%" }} className={styles.container}>
      <a className={styles.image} href="/login"></a>
      <h2>فرم ورود</h2>
      <form style={{ padding: "0 35px" }} onSubmit={handleSubmit(onSubmit)}>
        <input {...register("username")} placeholder="نام کابری" />
        {errors?.username && <span>*{errors?.username.message}</span>}
        <div className={styles.inputEye}>
          <input
            type={showPassword ? "text" : "password"}
            {...register("password")}
            placeholder="رمز عبور"
          />
          {!showPassword ? (
            <button onClick={() => setShowPassword(true)}>
                <OpenEye/>
            </button>
          ) : null}
          {showPassword ? (
            <button onClick={() => setShowPassword(false)}>
                <CloseEye/>
            </button>
          ) : null}
        </div>
        {errors?.password && <span>*{errors?.password.message}</span>}

        <button className={styles.submit} type="submit">
          ورود
        </button>
      </form>
      <Link className={styles.link} href="/registration">
        ایجاد حساب کاربری !
      </Link>
    </div>
  );
}

export default LoginPage;
