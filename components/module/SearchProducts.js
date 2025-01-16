import React, { useRef } from "react";
import styles from "./SearchProducts.module.css";
import Search from "../icons/Search";
function SearchProducts({ setSearchProducts }) {
  const inputRef = useRef(null);
  const searchHandler = () => {
    const inputValue = inputRef.current.value.toLowerCase().trim();
    setSearchProducts(inputValue);
  };
  return (
    <div className={styles.container}>
      <button onClick={searchHandler}>
        <Search />
      </button>
      <input type="text" ref={inputRef} placeholder="جستجو کالا" />
    </div>
  );
}

export default SearchProducts;
