import { FC } from "react"
import { AboutPageMetaData } from "../MetaData/AboutPage.meta";
import { Page } from "./page";

const { mainCss, intro } = AboutPageMetaData;
export const About:FC = () => {
  return (
    <Page className={mainCss}>
      <span className={intro.css}>
        {intro.text}
      </span>
    </Page>
  )
}