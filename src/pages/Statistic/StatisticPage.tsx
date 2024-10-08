import React from "react";
import "./StatisticPage.scss"
import { PreviewRecruiterChallenge, SolutionTable, StatisticCard } from "./partitals";

const StatisticPage: React.FC = () => {
    return (
        <div className="statistic-container">
            <StatisticCard />
            <SolutionTable />
            <PreviewRecruiterChallenge />
            <div className="challenge-component">
                Challege Component
            </div>
        </div>
    )
};

export default StatisticPage;
