import ReactPaginate from "react-paginate";
import styles from "./Pagination.module.css";
import { useEffect } from "react";
import { useRouter } from "next/router";
function Pagination({ query, setQuery, totalPages }) {
  const router = useRouter();
  console.log("total Pages", totalPages);
  const handlePageClick = (event) => {
    const newOffset = event.selected + 1;
    console.log(
      `User requested page number ${
        event.selected + 1
      }, which is offset ${newOffset}`
    );
    // setItemOffset(newOffset);
    setQuery((query) => ({ ...query, pageNumber: newOffset }));
  };
  useEffect(() => {
    console.log("useEffect: ", query);
    router.push({
      pathname: "/",
      query,
    });
  }, [query.pageNumber]);

  return (
    <>
      <ReactPaginate
        breakLabel="..."
        nextLabel={totalPages > 4 ? "بعدی" : null}
        onPageChange={handlePageClick}
        forcePage={query.pageNumber - 1}
        pageRangeDisplayed={5}
        pageCount={totalPages}
        previousLabel={query.pageNumber > 1 ? "قبلی" : null}
        renderOnZeroPageCount={null}
        containerClassName={styles.pagination}
        pageLinkClassName={styles.pageNumber}
        previousLinkClassName={
          query.pageNumber <= 1 ? styles.disabled : styles.pageNumber
        }
        nextLinkClassName={
          totalPages <= 4 ? styles.disabled : styles.pageNumber
        }
        activeLinkClassName={styles.active}
      />
    </>
  );
}

export default Pagination;
