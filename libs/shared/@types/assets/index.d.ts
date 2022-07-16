// Source -> https://duncanleung.com/typescript-module-declearation-svg-img-assets/
declare module '*.svg' {
  import React = require('react');
  export const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}
