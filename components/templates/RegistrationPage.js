import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useRegister } from "../../services/mutations";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerFromSchema } from "../../schema/validationForms";
import Link from "next/link";
import { useRouter } from "next/router";
import CloseEye from "../icons/CloseEye";
import OpenEye from "../icons/OpenEye";
import styles from "./RegistrationAndLogin.module.css";
function RegistrationPage() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const { mutate, isPending } = useRegister();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerFromSchema),
    mode: "onChange",
  });
  const onSubmit = (data) => {
    if (data.password !== data.confirmPassword) return;
    // console.log(data);
    mutate(data, {
      onSuccess: (res) => {
        // console.log(res.data.message);
        router.push("/login");
      },
      onError: (error) => {
        console.log(error.response.data.message);
      },
    });
  };
  return (
    <div className={styles.container}>
      {/* <img src={SiteLogo} alt="logo"/> */}
      <a className={styles.image} href="/registration"rel="noopener noreferrer"  target="_blank"></a>
      <h2>فرم ثبت نام</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
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
              <CloseEye />
            </button>
          ) : null}
          {showPassword ? (
            <button onClick={() => setShowPassword(false)}>
              <OpenEye />
            </button>
          ) : null}
        </div>
        {errors?.password && <span>*{errors?.password.message}</span>}
        <input
          type={showPassword ? "text" : "password"}
          {...register("password")}
          {...register("confirmPassword")}
          placeholder="تکرار رمز عبور"
        />
        {errors?.confirmPassword && (
          <span>*{errors?.confirmPassword.message}</span>
        )}
        <button className={styles.submit} type="submit">
          ثبت نام
        </button>
      </form>
      <Link className={styles.link} href="/login">
        حساب کاربری دارید؟
      </Link>
    </div>
  );
}

export default RegistrationPage;
