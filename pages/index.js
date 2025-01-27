import ProductsManagementPage from "../components/templates/ProductsManagementPage";

export default function Home({ data }) {
  console.log(data);
  return (
    <>
      <ProductsManagementPage data={data} />
    </>
  );
}

export async function getServerSideProps(context) {
  const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
  console.log(baseURL);
  const { query } = context;
  let data = [];
  try {
    const params = new URLSearchParams({
      page: query.pageNumber || 1,
      name: query.searchProduct || "",
    });
    const res = await fetch(`${baseURL}products?${params}`);
    data = await res.json();
  } catch (error) {
    console.log(error.message);
  }

  console.log(query);
  // console.log(data);

  return { props: { data } };
}
