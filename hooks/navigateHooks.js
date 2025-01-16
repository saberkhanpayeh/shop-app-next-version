import { useRouter } from "next/router";

const useNavigateLoginPage = () => {
  const router = useRouter();
  const navigateLoginPage = (time = 2000) => {
    // console.log("login");
    setTimeout(() => {
      router.push("/login");
    }, time);
  };
  return navigateLoginPage;
};

export { useNavigateLoginPage };
