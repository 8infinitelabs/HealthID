const IconDocuments = ({ color, height, width, viewBox }: { color?: string, height?: string | number, width?: string | number, viewBox?: string  }) => (
  <>
    <svg
      stroke={color || "currentColor"}
      fill={color || "currentColor"}
      strokeWidth="0"
      viewBox={viewBox || "0 0 24 24"}
      height={height || "3em"}
      width={width || "2.5em"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="none"
        stroke={color || "#fff"}
        fillOpacity="0.74"
        strokeWidth="2"
        d="M16,7 L19,7 L19,11 L16,11 L16,7 Z M9,15 L20,15 M9,11 L13,11 M9,7 L13,7 M6,18.5 C6,19.8807119 4.88071187,21 3.5,21 C2.11928813,21 1,19.8807119 1,18.5 L1,7 L6.02493781,7 M6,18.5 L6,3 L23,3 L23,18.5 C23,19.8807119 21.8807119,21 20.5,21 L3.5,21"
      ></path>
    </svg>
  </>
);
export default IconDocuments;
