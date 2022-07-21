import { useContext } from "react";
import { ThemeContext } from "../context/theme";
import Head from "next/head";

//Creating state to toggle dark and ligh mode
const ToggleTheme = () => {
  const [theme, setTheme] = useContext(ThemeContext);

  return (
    <>
      <Head>
        <link rel="stylesheet" href={`/css/${theme}.css`} />
      </Head>
      {theme === "light" ? (
        //SVG Icon for dark mode
        <svg
          onClick={() => {
            setTheme("dark");
            localStorage.setItem("theme", "dark");
          }}
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-gray-900"
          fill="none"
          stroke="currentColor"
          width="50"
          height="50"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      ) : (
        //SVG Icon for light mode
        <svg
          onClick={() => {
            setTheme("light");
            localStorage.setItem("theme", "light");
          }}
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-indigo-200"
          fill="none"
          stroke="currentColor"
          width="50"
          height="50"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      )}
    </>
  );
};

export default ToggleTheme;
