import { FC } from 'react';
import { IIconEntity } from '../../types/entity/icon';

type ChallengeIconPropsType = IIconEntity;
const ChallengeIcon: FC<ChallengeIconPropsType> = ({ width = 10, height = 8, stroke = "#A4A5A6" }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox={`0 0 ${width} ${height}`}
            fill="none">
            <path
                d="M4.26056 10.1472C3.98551 12.2527 3.82162 14.3713 3.76956 16.4942C6.64837 17.6967 9.40474 19.1735 12.0006 20.9042C14.5967 19.1734 17.3534 17.6966 20.2326 16.4942C20.1805 14.3713 20.0166 12.2527 19.7416 10.1472M19.7416 10.1472C20.6166 9.85316 21.5036 9.58116 22.3996 9.33316C19.1361 7.04541 15.6525 5.08905 12.0006 3.49316C8.34856 5.08939 4.86496 7.04608 1.60156 9.33416C2.49483 9.58079 3.38117 9.85189 4.25956 10.1472C6.92818 11.0444 9.51746 12.1622 12.0006 13.4892C14.4833 12.1622 17.0733 11.0444 19.7416 10.1472ZM6.75056 15.0002C6.94948 15.0002 7.14024 14.9211 7.28089 14.7805C7.42155 14.6398 7.50056 14.4491 7.50056 14.2502C7.50056 14.0513 7.42155 13.8605 7.28089 13.7198C7.14024 13.5792 6.94948 13.5002 6.75056 13.5002C6.55165 13.5002 6.36088 13.5792 6.22023 13.7198C6.07958 13.8605 6.00056 14.0513 6.00056 14.2502C6.00056 14.4491 6.07958 14.6398 6.22023 14.7805C6.36088 14.9211 6.55165 15.0002 6.75056 15.0002ZM6.75056 15.0002V11.3252C8.4473 10.2705 10.1999 9.30843 12.0006 8.44316M4.99356 19.9932C5.55153 19.4366 5.994 18.7752 6.29553 18.047C6.59705 17.3189 6.75169 16.5383 6.75056 15.7502V14.2502"
                stroke={stroke}
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round" />
        </svg>
    );
};

export { ChallengeIcon };