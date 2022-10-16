import { useState, FC } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/solid";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

import { RoutePaths } from "../MetaData/RoutePaths";

const styles = {
  navWrapper: "h-[var(--navHeight)] flex justify-between items-center",
  userName: "max-w-[20rem] min-w-[8rem] py-[4px] md:px-4 flex items-center justify-center font-[cursive] text-zinc-900 dark:text-gray-100 text-2xl md:text-xl lg:text-2xl",
  navItem: "min-w-[8rem] py-[4px] flex items-center justify-center rounded-nav-item bg-gray-500 dark:bg-gray-200 text-white dark:text-zinc-900 hover:bg-gray-900 dark:hover:bg-white dark:hover:text-zinc-800",
  navItems: "hidden md:flex md:gap-[2rem] lg:gap-[5rem] font-[cursive] md:text-md lg:text-xl text-semi-bold",
  menuHamBurger: "block w-4 h-4 md:hidden w-8 dark:text-white",
  activeNavItem: "w-[8rem] flex items-center justify-center bg-gray-700 dark:bg-zinc-600 text-white dark:text-white rounded-nav-item cursor-not-allowed",
};

export const Navbar:FC = () => {
  const { pathname } = useLocation();
  const [ open, toggleOpen ] = useState(false);

  return (
    <div role="navigation" className={styles.navWrapper}>
      <title className={styles.userName}>@haider-sarfraz</title>
      <div className={styles.navItems}>
        {Object.keys(RoutePaths).map((key: string) => {
          const isSelected = RoutePaths[key] === pathname;
          return (
            <Link
              key={key}
              to={RoutePaths[key]}
              className={isSelected ? styles.activeNavItem : styles.navItem}
            >
              {key}
            </Link>
          );
        })}
      </div>
      {/* <ThemeControl className="left-0 top-4"/> */}
      <div
        key="icon"
        className="block lg:hidden"
        onClick={() => toggleOpen(!open)}
      >
        <MenuIcon className={styles.menuHamBurger} />
      </div>
      {/* Animated div around mobile Navbar */}
      <motion.div
        key="options"
        className="absolute"
        variants={{
          closed: {
            display: 'none',
            right: -150,
            transition: {
              duration: 1,
            }
          },
          open: {
            opacity: 1,
            display: "block",
            width: "100vw",
            height: "100vh",
            top: 0,
            right: 0,
            zIndex: 21,
            transition: {
              duration: 1,
              ease: "easeOut",
            },
          }
        }}
        initial="closed"
        animate={open ? "open" : "closed"}
      >
        {/* Wrapper around overlay and actual nav content so we can position them */}
        <div className="relative w-inherit h-inherit">
          {/* Overlay so if user clicks outside, they are able to close the navbar */}
          <div
            className="absolute left-0 w-inherit h-inherit"
            onClick={()=> toggleOpen(false)}
          />
          {/* Actual Mobile Navbar which holds nav options */}
          <div className="absolute right-0 flex flex-col gap-4 py-4 px-2 w-[12rem] bg-black text-white h-screen top">
            <XIcon className="self-end w-4 h-4" onClick={() => toggleOpen(false)}/>
            <div className="flex flex-col gap-4">
              {Object.keys(RoutePaths).map((key: string) => {
                const isSelected = RoutePaths[key] === pathname;
                return (
                  <Link
                    key={key}
                    to={RoutePaths[key]}
                    className={isSelected ? "bg-white text-black" : "text-white"}
                  >
                    {key}
                  </Link>
                );
              })}
          </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
