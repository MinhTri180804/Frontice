import React from "react";
import "./StatisticPage.scss"
import { PreviewRecruiterChallenge, SolutionTable, StatisticCard } from "./partitals";

const StatisticPage: React.FC = () => {
    return (
        <div className="statistic-container">
            <h1 className='statistic-title'>Statistic Page</h1>

            <div className="statistic-row">
                <div className="statistic-left-column">
                    <StatisticCard />
                    <SolutionTable />
                </div>

                <div className="statistic-right-column">
                    <PreviewRecruiterChallenge />
                </div>
            </div>

            <div className="challenge-component">
                Challege Component
            </div>
        </div>
    )
};

export default StatisticPage;
