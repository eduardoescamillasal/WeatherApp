import * as React from "react";
const ForecastIcon = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={36}
    height={36}
    fill='none'
    className='icon'
    {...props}>
    <path
      fill='#2C2C2C'
      d='M7.608 33.305a3.29 3.29 0 0 1-2.415-.998 3.29 3.29 0 0 1-.998-2.414V9.108c0-.945.333-1.75.998-2.415a3.29 3.29 0 0 1 2.415-.998H9v-3h3.207v3h11.587v-3H27v3h1.393c.944 0 1.75.333 2.414.998a3.29 3.29 0 0 1 .998 2.415v20.785a3.29 3.29 0 0 1-.998 2.414 3.29 3.29 0 0 1-2.414.998H7.608Zm0-3.412h20.785V15H7.608v14.893Zm0-17.893h20.785V9.108H7.608V12Z'
    />
  </svg>
);
export default ForecastIcon;
