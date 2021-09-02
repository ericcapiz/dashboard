import React from 'react';

const SearchIcon = ({ classes, width = '18', color }) => (
    <svg className={classes} width={width} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.8926 11.6083L17.7343 16.4501C17.9045 16.6204 18.0001 16.8513 18 17.0921C17.9999 17.3329 17.9042 17.5637 17.7339 17.7339C17.5636 17.9041 17.3327 17.9996 17.0919 17.9996C16.8511 17.9995 16.6203 17.9037 16.4501 17.7334L11.6083 12.8917C10.1609 14.0127 8.34083 14.5403 6.51828 14.367C4.69573 14.1938 3.00764 13.3327 1.79742 11.959C0.587202 10.5853 -0.054236 8.80209 0.00359653 6.97224C0.0614291 5.14238 0.814188 3.40329 2.10874 2.10874C3.40329 0.814188 5.14238 0.0614291 6.97224 0.00359653C8.80209 -0.054236 10.5853 0.587202 11.959 1.79742C13.3327 3.00764 14.1937 4.69573 14.367 6.51828C14.5403 8.34083 14.0127 10.1609 12.8917 11.6083H12.8926ZM7.20033 12.5992C8.63244 12.5992 10.0059 12.0303 11.0185 11.0176C12.0312 10.005 12.6001 8.63154 12.6001 7.19944C12.6001 5.76733 12.0312 4.39389 11.0185 3.38124C10.0059 2.36859 8.63244 1.79969 7.20033 1.79969C5.76823 1.79969 4.39479 2.36859 3.38214 3.38124C2.36949 4.39389 1.80059 5.76733 1.80059 7.19944C1.80059 8.63154 2.36949 10.005 3.38214 11.0176C4.39479 12.0303 5.76823 12.5992 7.20033 12.5992V12.5992Z"
            fill={color}
        />
    </svg>
);

export default SearchIcon;