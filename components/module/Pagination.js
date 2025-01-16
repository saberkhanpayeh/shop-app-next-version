import ReactPaginate from "react-paginate";
import styles from "./Pagination.module.css";
function Pagination({ itemOffset, setItemOffset, totalPages }) {
  console.log("total Pages", totalPages);
  const handlePageClick = (event) => {
    const newOffset = event.selected + 1;
    console.log(
      `User requested page number ${
        event.selected + 1
      }, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <ReactPaginate
        breakLabel="..."
        nextLabel={totalPages > 4 ? "بعدی" : null}
        onPageChange={handlePageClick}
        forcePage={itemOffset - 1}
        pageRangeDisplayed={5}
        pageCount={totalPages}
        previousLabel={itemOffset > 1 ? "قبلی" : null}
        renderOnZeroPageCount={null}
        containerClassName={styles.pagination}
        pageLinkClassName={styles.pageNumber}
        previousLinkClassName={
          itemOffset <= 1 ? styles.disabled : styles.pageNumber
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
