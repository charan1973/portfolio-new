import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

function useToggleTheme() {
  const { theme, setTheme } = useTheme();
  const [themeValue, setThemeValue] = useState();

  useEffect(() => setThemeValue(theme), [theme]);

  return { theme: themeValue, setTheme };
}

export default useToggleTheme;
