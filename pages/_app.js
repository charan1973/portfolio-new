import Navbar from "../components/navbar/navbar.component";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="px-2 py-0 lg:px-40 lg:py-0">
      <Navbar />
      <div className="py-10">
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
