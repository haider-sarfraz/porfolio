import { FC } from "react";
import { Link, useLocation } from "react-router-dom";

import { routePaths, RoutePaths } from "../MetaData/RoutePaths";

const styles = {
  navItems: "hidden md:flex md:gap-[2rem] lg:gap-[5rem] font-[cursive] md:text-md lg:text-xl text-semi-bold",
  navItem: "min-w-[8rem] py-[4px] flex items-center justify-center rounded-nav-item bg-gray-500 dark:bg-gray-200 text-white dark:text-zinc-900 hover:bg-gray-900 dark:hover:bg-white dark:hover:text-zinc-800",
  activeNavItem: "w-[8rem] flex items-center justify-center bg-gray-700 dark:bg-zinc-600 text-white dark:text-white rounded-nav-item cursor-not-allowed",
  mobileNavItem: 'text-white',
  activeMobileNavItem: 'bg-white text-black',
}

interface INavLinks {
  isMobile?: boolean
}
export const NavLinks:FC<INavLinks> = ({ isMobile = false }) => {
  const { pathname } = useLocation();

  const linkStyles = {
    selected: isMobile ? styles.activeMobileNavItem : styles.activeNavItem,
    unselected: isMobile ? styles.mobileNavItem : styles.navItem,
  };

  return (
    <div className={styles.navItems}>
      {Object.keys(routePaths).map((key) => {
        const path = routePaths[key as keyof RoutePaths];

        return (
          <Link
            key={key}
            to={path !== "/" ? `/${path}` : path}
            className={
              path === pathname ? linkStyles.selected : linkStyles.unselected
            }
          >
            {key}
          </Link>
        );
      })}
    </div>
  );
}
