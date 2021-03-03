import Navbar from "../components/navbar/navbar.component";
import "../styles/globals.css";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <div className="min-h-screen px-2 lg:px-40 dark:bg-gray-800 dark:text-white">
        <Navbar />
        <div className="py-10">
          <Component {...pageProps} />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
