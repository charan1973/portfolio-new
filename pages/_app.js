import { ThemeProvider } from "next-themes";

import Navbar from "../components/navbar/navbar.component";
import Footer from "../components/footer/footer.component"
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <div className="min-h-screen px-2 lg:px-40 dark:bg-gray-800 dark:text-white">
        <Navbar />
        <div className="py-10 mb-10">
          <Component {...pageProps} />
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
