import { MenuIcon } from "@heroicons/react/solid";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AppMeta } from "../MetaData/App.meta";

const {
  styles,
  title,
  routes: AppRoutes,
} = AppMeta;


const NavOptionsVariants = {
  closed: {
    opacity: 0,
    display: "none"
  },
  open: {
    opacity: 1,
    x: -100,
    y: 0,
    display: "flex",
    transition: {
      duration: 1
    }
  }
};

export const Navbar = () => {
  const { pathname } = useLocation();
  const [ open, toggleOpen ] = useState(false);

  return (
    <div role="navigation" className={styles.navWrapper}>
      <span className={styles.userName}>{title}</span>
      <div className={styles.navItems}>
        {Object.keys(AppRoutes).map((key: string) => {
          const isSelected = AppRoutes[key] === pathname;
          return (
            <Link
              key={key}
              to={AppRoutes[key]}
              className={isSelected ? styles.activeNavItem : styles.navItem}
            >
              {key}
            </Link>
          );
        })}
      </div>
      {/* <ThemeControl className="left-0 top-4"/> */}
      <AnimatePresence>
        <motion.div
          variants={{
            closed: {
              backgroundColor: "transparent"
            },
            open: {
              width: "12rem",
              padding: "1rem 0.25rem",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              color: "white",
              backgroundColor: "black",
              height: "100vh",
              position: "absolute",
              zIndex: 21,
              top: 0,
              right: 0,
              transition: {
                duration: 1,
              }
            }
          }}
          initial="closed"
          animate={open ? "open" : "closed"}
        >
          <MenuIcon
            className={styles.menuHamBurger}
            onClick={() => toggleOpen(!open)}
          />
          <motion.div
            key="child"
            variants={{
              closed: {
                opacity: 0,
                display: 'none',
              },
              open: {
                opacity: 1,
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                color: "White"
              }
            }}
            initial="closed"
            animate={open ? "open" : "closed"}
            // className="w-[130px] h-[95%] bg-gray-200 flex flex-col gap-16 z-30"
          >
            {Object.keys(AppRoutes).map((key: string) => {
              const isSelected = AppRoutes[key] === pathname;
              return (
                <Link
                  key={key}
                  to={AppRoutes[key]}
                  className={isSelected ? "" : "text-white"}
                >
                  {key}
                </Link>
              );
            })}
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
