import React, { useRef } from "react";
import styles from "./SearchProducts.module.css";
import Search from "../icons/Search";
import { useRouter } from "next/router";
function SearchProducts({ query, setQuery }) {
  const router = useRouter();
  const searchHandler = () => {
    event.preventDefault();
    router.push({
      pathname: "/",
      query,
    });
  };
  const changeHandler = (event) => {
    const value = event.target.value.toLowerCase().trim();
    setQuery((query) => ({ ...query, searchProduct: value }));
  };
  return (
    <form className={styles.container} onChange={changeHandler}>
      <button onClick={searchHandler}>
        <Search />
      </button>
      <input type="text" placeholder="جستجو کالا" name="search" id="search" value={query.searchProduct}/>
    </form>
  );
}

export default SearchProducts;
