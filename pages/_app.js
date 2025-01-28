import "../styles/globals.css";
import ReactQueryProvider from "../provider/ReactQueryProvider";
import { Provider } from "react-redux";
import store from "../app/store";
function MyApp({ Component, pageProps }) {
  console.log({ Component, pageProps });
  return (
    <Provider store={store}>
      <ReactQueryProvider>
        <Component {...pageProps} />
      </ReactQueryProvider>
    </Provider>
  );
}

export default MyApp;
