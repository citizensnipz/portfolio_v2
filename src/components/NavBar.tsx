import { FC, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { selectTheme, setTheme } from "../features/theme/themeReducer";

const NavBar: FC = () => {
  const [isDark, setIsDark] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const theme = useAppSelector(selectTheme);

  const menuItems = ["intro", "about", "work", "contact"];

  const handleSwitchClick = () => {
    setIsDark(!isDark);
    localStorage.theme = isDark ? "dark" : "light";
    const layout = document.getElementById("layout");
    if (!isDark) {
      dispatch(setTheme("dark"));
      layout?.classList.add("dark");
    } else {
      dispatch(setTheme("light"));
      layout?.classList.remove("dark");
    }
  };

  useEffect(() => {
    const navbar = document.getElementById("navbar");
    const navContainer = document.getElementById("nav-container");
    let sticky = navbar?.offsetTop;
    console.log(sticky);
    const stickyNav = () => {
      if (navbar && sticky) {
        if (window.pageYOffset >= sticky) {
            navContainer?.classList.add("bg-[#F2DF4D]");
            navContainer?.classList.add("dark:bg-[#5FA8ED]");
          navbar.classList.add("sticky");
        } else {
          navbar.classList.remove("sticky");
          navContainer?.classList.remove("bg-[#F2DF4D]");
            navContainer?.classList.remove("dark:bg-[#5FA8ED]");
        }
      }
    };
    window.onscroll = function () {
      stickyNav();
    };
  }, []);

  return (
    <div id="nav-container" className="w-full h-[4rem] flex flex-row justify-between items-center p-6">
      <div>
        {menuItems.map((item) => (
          <button
            key={item}
            onClick={() =>
              document
                .getElementById(item + "-bg")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="h-[1rem] w-[5rem] section-title text-amber-800 dark:text-[#eee8bf]"
          >
            {item}
          </button>
        ))}
      </div>
      <label className="switch">
        <input type="checkbox" onClick={handleSwitchClick} />
        <span className="slider round"></span>
      </label>
    </div>
  );
};

export default NavBar;
