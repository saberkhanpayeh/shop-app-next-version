import "../styles/globals.css";
import ReactQueryProvider from "../provider/ReactQueryProvider";
import { Provider } from "react-redux";
import store from "../app/store";
import { ToastContainer } from "react-toastify";
function MyApp({ Component, pageProps }) {
  console.log({ Component, pageProps });
  return (
    <Provider store={store}>
      <ReactQueryProvider>
        <Component {...pageProps} />
        <ToastContainer className="toast"/>
      </ReactQueryProvider>
    </Provider>
  );
}

export default MyApp;
