import React from "react";
import "./StatisticCardItem.scss"
import { StatisticCardIcon } from "../../../../../../assets/icons";

const StatisticCardItem: React.FC = () => {
    return (
        <div className="statistic-card-item-container">
            <div className="statistic-card-item-header">
                <div className="statistic-card-item-icon">
                    <StatisticCardIcon width={14} height={14} />
                </div>
                <div className="statistic-card-item-label">
                    Label content
                </div>
            </div>
            <div className="statistic-card-item-body">
                <span>12</span>
            </div>
        </div>
    )
};

export default StatisticCardItem;
