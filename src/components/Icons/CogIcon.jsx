import React from 'react';

const CogIcon = ({ classes, width = '18', color }) => (
    <svg className={classes} width={width} viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M17.7701 11.6609L16.1552 10.7283C16.3182 9.8488 16.3182 8.94657 16.1552 8.06708L17.7701 7.13452C17.9558 7.02837 18.0392 6.8085 17.9786 6.60379C17.5578 5.25423 16.8413 4.03356 15.905 3.01759C15.7609 2.86217 15.5259 2.82426 15.3439 2.9304L13.729 3.86297C13.0504 3.27917 12.2695 2.82805 11.4241 2.53236V0.671025C11.4241 0.458735 11.2763 0.272981 11.0678 0.22749C9.67651 -0.0833643 8.25113 -0.0682007 6.92811 0.22749C6.71961 0.272981 6.57176 0.458735 6.57176 0.671025V2.53615C5.73018 2.83563 4.94926 3.28675 4.26689 3.86676L2.65576 2.93419C2.47001 2.82805 2.23876 2.86217 2.09471 3.02139C1.15835 4.03356 0.441872 5.25423 0.0210819 6.60758C-0.0433634 6.81229 0.0438274 7.03216 0.229582 7.13831L1.84451 8.07087C1.6815 8.95036 1.6815 9.85259 1.84451 10.7321L0.229582 11.6646C0.0438274 11.7708 -0.0395725 11.9907 0.0210819 12.1954C0.441872 13.5449 1.15835 14.7656 2.09471 15.7816C2.23876 15.937 2.4738 15.9749 2.65576 15.8688L4.27068 14.9362C4.94926 15.52 5.73018 15.9711 6.57555 16.2668V18.1319C6.57555 18.3442 6.7234 18.53 6.9319 18.5755C8.32316 18.8863 9.74854 18.8712 11.0716 18.5755C11.2801 18.53 11.4279 18.3442 11.4279 18.1319V16.2668C12.2695 15.9673 13.0504 15.5162 13.7328 14.9362L15.3477 15.8688C15.5335 15.9749 15.7647 15.9408 15.9088 15.7816C16.8451 14.7694 17.5616 13.5487 17.9824 12.1954C18.0392 11.9869 17.9558 11.767 17.7701 11.6609V11.6609ZM8.99794 12.4304C7.32615 12.4304 5.96522 11.0695 5.96522 9.39768C5.96522 7.7259 7.32615 6.36496 8.99794 6.36496C10.6697 6.36496 12.0307 7.7259 12.0307 9.39768C12.0307 11.0695 10.6697 12.4304 8.99794 12.4304Z"
            fill={color}
        />
    </svg>
);

export default CogIcon;