import { useState, FC } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/solid";
import { motion } from "framer-motion";

import { NavLinks } from "./navlinks";

export const MobileNavbar:FC = () => {
  const [open, toggleOpen] = useState(false);

  return (
    <>
      <div
        key="icon"
        className="block lg:hidden"
        onClick={() => toggleOpen(!open)}
      >
        <MenuIcon className="block w-4 h-4 md:hidden w-8 dark:text-white" />
      </div>
      {/* Animated div around mobile Navbar */}
      <motion.div
        key="options"
        className="absolute"
        variants={{
          closed: {
            display: "none",
            right: -150,
            transition: {
              duration: 1,
            },
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
          },
        }}
        initial="closed"
        animate={open ? "open" : "closed"}
      >
        {/* Wrapper around overlay and actual nav content so we can position them */}
        <div className="relative w-inherit h-inherit">
          {/* Overlay so if user clicks outside, they are able to close the navbar */}
          <div
            className="absolute left-0 w-inherit h-inherit"
            onClick={() => toggleOpen(false)}
          />
          {/* Actual Mobile Navbar which holds nav options */}
          <div className="absolute right-0 flex flex-col gap-4 py-4 px-2 w-[12rem] bg-black text-white h-screen top">
            <XIcon
              className="self-end w-4 h-4"
              onClick={() => toggleOpen(false)}
            />
            <div className="flex flex-col gap-4">
              <NavLinks />
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
