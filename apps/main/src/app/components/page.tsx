import { FC, ReactElement } from "react";
import {motion} from "framer-motion";

type Page = {
  children: React.ReactNode;
  className?: string
};
export const Page: FC<Page> = ({
  children,
  className=''
}): ReactElement => (
  <motion.div
    animate={{
      x: [-999, 0],
    }}
    className={className}
  >
    {children}
  </motion.div>
);
