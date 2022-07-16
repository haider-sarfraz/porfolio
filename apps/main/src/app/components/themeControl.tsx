import { motion } from "framer-motion";
import { CheckIcon, ControlsIcon } from '@personal-portfolio/shared';
import { FC, ReactElement, useState } from "react";

const themes = {
  LIGHT: "Light",
  DARK: "Dark"
}

const controlMotion = {
  rest: { x:0 , ease: "easeIn", duration: 0.2, type: "tween" },
  hover: {
    opacity: 1,
    rotate: [0,90,180,270,360],
    transition: {
      duration: 0.4,
      ease: "easeIn"
    }
  }
}

const optionsMotion = {
  rest: { opacity: 0, display:'none' },
  hover: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: "easeIn"
    },
    display: "flex"
  }
}

type ThemeControlProps = {
  className?: string
}
export const ThemeControl:FC<ThemeControlProps> = ({ className='left-0 top-[10vh]' }): ReactElement => {
  const [activeTheme, setActiveTheme] = useState(themes.LIGHT);
  return (
    <motion.div
      className={`ThemeControl_Wrapper absolute ${className}`}
      whileHover="hover"
      animate="rest"
    >
      <motion.div variants={controlMotion} className="ThemeControl_Control">
        <ControlsIcon />
      </motion.div>

      {['Light', 'Dark'].map((theme, index) => (
        <motion.div
          key={index}
          variants={optionsMotion}
          className={`ThemeControl_Option ThemeControl_${theme}`}
          onClick={() => {setActiveTheme(theme)}}
        >
          {activeTheme === theme
            ? (<CheckIcon />)
            : null
          }
          <span>
            {theme}
          </span>
        </motion.div>
      ))}
    </motion.div>
  );
};
