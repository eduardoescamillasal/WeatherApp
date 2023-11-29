import * as React from "react";
const UVIcon = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={36}
    height={36}
    fill='none'
    className='brightness-high'
    {...props}>
    <mask
      id='a'
      width={36}
      height={36}
      x={0}
      y={0}
      maskUnits='userSpaceOnUse'
      style={{
        maskType: "alpha",
      }}>
      <path fill='#D9D9D9' d='M0 0h36v36H0z' />
    </mask>
    <g mask='url(#a)'>
      <path
        fill='#2C2C2C'
        d='m18 35.29-5.07-4.985H5.695V23.07L.71 18l4.986-5.07V5.695h7.235L18 .7l5.07 4.995h7.235v7.235L35.3 18l-4.995 5.07v7.235H23.07L18 35.29Zm0-9.898c2.045 0 3.789-.72 5.23-2.162 1.442-1.441 2.163-3.185 2.163-5.23 0-2.045-.721-3.789-2.163-5.23-1.441-1.442-3.184-2.162-5.23-2.162-2.045 0-3.788.72-5.23 2.162-1.441 1.441-2.162 3.185-2.162 5.23 0 2.045.72 3.788 2.162 5.23 1.442 1.442 3.185 2.162 5.23 2.162Zm0 5.125 3.625-3.625h5.268v-5.268L30.517 18l-3.624-3.624V9.108h-5.268L18 5.483l-3.624 3.625H9.108v5.268L5.483 18l3.625 3.624v5.268h5.268L18 30.517Z'
      />
    </g>
  </svg>
);
export default UVIcon;
