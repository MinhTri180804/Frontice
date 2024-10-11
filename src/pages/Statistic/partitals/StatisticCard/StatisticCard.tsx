import React from "react";
import "./StatisticCard.scss"
import { StatisticCardItem } from "./partials";

const StatisticCard: React.FC = () => {
    return (
        <div className="statistic-card-container">
            <div className="statistic-card-title">Section title</div>
            <div className="statistic-card-row">
                <StatisticCardItem />
                <StatisticCardItem />
                <StatisticCardItem />
                <StatisticCardItem />
            </div>
        </div>
    )
};

export default StatisticCard;
