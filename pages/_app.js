import { ThemeProvider } from "next-themes";

import Navbar from "../components/navbar/navbar.component";
import Footer from "../components/footer/footer.component"
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <div className="min-h-screen lg:px-40 md:px-10 dark:bg-gray-900 dark:text-light-periwinkle bg-seashell px-5">
        <Navbar />
        <div className="lg:py-10 lg:mb-10 py-5">
          <Component {...pageProps} />
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
