import * as React from 'react';

function SvgChevronBackOutline(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="chevron-back-outline_svg__ionicon"
      viewBox="0 0 512 512"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={48}
        d="M328 112L184 256l144 144"
      />
    </svg>
  );
}

export default SvgChevronBackOutline;
