import "../styles/globals.css";
import ReactQueryProvider from "../provider/ReactQueryProvider";
function MyApp({ Component, pageProps }) {
  return (
    <ReactQueryProvider>
      <Component {...pageProps} />
    </ReactQueryProvider>
  );
}

export default MyApp;
