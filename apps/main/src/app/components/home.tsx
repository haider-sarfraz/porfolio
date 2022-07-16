import { FunctionComponent, useEffect, useRef } from 'react';
import { HomePageMetaData } from '../MetaData/HomePage.meta';
import { Page } from './page';

const { mainCss, title, subTitle } = HomePageMetaData;

export const Home: FunctionComponent = (props: any) => {
  const profileRef = useRef(null);

  useEffect(() => {
    if(profileRef.current) {
      const el:any = profileRef.current;
      el.style.backgroundImage = 'url(../../assets/personal-pic.jpeg)';
      el.style.backgroundSize = 'cover';
      el.style.backgroundPosition = 'center';
    }
  }, [])

  return (
    <Page className={mainCss}>
      <div ref={profileRef} className="block self-center w-[10rem] h-[10rem] rounded-full md:hidden" />
      <span className={title.css}>{title.text}</span>
      <span className={subTitle.css}>{subTitle.text}</span>
    </Page>
  );
};
