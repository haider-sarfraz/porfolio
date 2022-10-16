import { FC } from "react";

import { MobileNavbar } from "./mobileNavbar";
import { NavLinks } from "./navlinks";

const styles = {
  navWrapper: "h-[var(--navHeight)] flex justify-between items-center",
  userName: "max-w-[20rem] min-w-[8rem] py-[4px] md:px-4 flex items-center justify-center font-[cursive] text-zinc-900 dark:text-gray-100 text-2xl md:text-xl lg:text-2xl",
};

export const Navbar:FC = () => {
  return (
    <div role="navigation" className={styles.navWrapper}>
      <title className={styles.userName}>@haider-sarfraz</title>      
      <NavLinks />
      <MobileNavbar />
    </div>
  );
};
