import { FC } from 'react';
import { IIconEntity } from '../../types/entity/icon';

type StatisticCardIconPropsType = IIconEntity;
const StatisticCardIcon: FC<StatisticCardIconPropsType> = ({ width = 10, height = 8, stroke = "#1B1D21" }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox={`0 0 ${width} ${height}`}
            fill="none">
            <path
                d="M8.68162 3.45827C8.68162 3.23083 8.80069 3.02518 8.93832 2.84386C9.07979 2.65807 9.16172 2.43768 9.16172 2.20127C9.16172 1.53753 8.51711 1 7.72142 1C6.92573 1 6.28112 1.53817 6.28112 2.20127C6.28112 2.43768 6.36305 2.65807 6.50452 2.84386C6.64215 3.02518 6.76122 3.23083 6.76122 3.45827C6.76149 3.51321 6.75074 3.56764 6.72959 3.61834C6.70844 3.66903 6.67732 3.71496 6.63809 3.75338C6.59886 3.79181 6.55232 3.82195 6.50122 3.84202C6.45013 3.8621 6.39552 3.87169 6.34065 3.87023C5.45001 3.84455 4.56088 3.78042 3.67577 3.67802C3.79483 4.71143 3.86332 5.76022 3.87741 6.82182C3.878 6.8775 3.86754 6.93274 3.84662 6.98433C3.8257 7.03592 3.79475 7.08284 3.75556 7.12236C3.71637 7.16189 3.66973 7.19322 3.61833 7.21454C3.56694 7.23587 3.51183 7.24676 3.4562 7.24659C3.22895 7.24659 3.02347 7.12742 2.84231 6.98968C2.65883 6.84624 2.43307 6.76762 2.20025 6.76608C1.53707 6.76608 1 7.41124 1 8.2076C1 9.00396 1.53771 9.64912 2.20025 9.64912C2.43646 9.64912 2.65667 9.56711 2.84231 9.42553C3.02347 9.28778 3.22895 9.16861 3.4562 9.16861C3.65464 9.16861 3.81147 9.33519 3.79675 9.5338C3.71713 10.6201 3.57995 11.7013 3.38578 12.7731C4.35751 12.8948 5.34332 12.971 6.34065 12.9999C6.39552 13.0013 6.45013 12.9917 6.50122 12.9717C6.55232 12.9516 6.59886 12.9214 6.63809 12.883C6.67732 12.8446 6.70844 12.7987 6.72959 12.748C6.75074 12.6973 6.76149 12.6428 6.76122 12.5879C6.76122 12.3605 6.64215 12.1548 6.50452 11.9735C6.3612 11.7899 6.28265 11.5639 6.28112 11.3309C6.28112 10.6678 6.92637 10.1296 7.72142 10.1296C8.51711 10.1296 9.16172 10.6678 9.16172 11.3309C9.16172 11.5673 9.07979 11.7877 8.93832 11.9735C8.80069 12.1548 8.68226 12.3605 8.68226 12.5879C8.68226 12.8012 8.85958 12.9717 9.07275 12.9595C10.2375 12.8909 11.3973 12.7562 12.5468 12.5559C12.7207 11.5553 12.845 10.5467 12.9193 9.5338C12.9227 9.48698 12.9163 9.43997 12.9007 9.39573C12.885 9.35148 12.8604 9.31094 12.8284 9.27666C12.7963 9.24237 12.7576 9.21508 12.7145 9.19649C12.6715 9.1779 12.625 9.16841 12.5781 9.16861C12.3509 9.16861 12.1454 9.28778 11.9642 9.42553C11.7786 9.56711 11.5584 9.64912 11.3222 9.64912C10.6596 9.64912 10.1219 9.00396 10.1219 8.2076C10.1219 7.41124 10.6596 6.76608 11.3222 6.76608C11.559 6.76608 11.7786 6.84809 11.9642 6.98968C12.1454 7.12742 12.3509 7.24659 12.5788 7.24659C12.6344 7.24676 12.6895 7.23587 12.7409 7.21454C12.7923 7.19322 12.8389 7.16189 12.8781 7.12236C12.9173 7.08284 12.9483 7.03592 12.9692 6.98433C12.9901 6.93274 13.0006 6.8775 13 6.82182C12.9846 5.67364 12.9055 4.5272 12.7631 3.3878C11.5558 3.60691 10.3242 3.75555 9.07211 3.82922C9.02171 3.83202 8.97128 3.82447 8.92391 3.80704C8.87654 3.7896 8.83324 3.76265 8.79666 3.72785C8.76009 3.69304 8.73102 3.65111 8.71123 3.60464C8.69145 3.55817 8.68137 3.50878 8.68162 3.45827Z"
                stroke={stroke}
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round" />
        </svg>
    );
};

export { StatisticCardIcon };