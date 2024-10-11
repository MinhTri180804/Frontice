import React from "react";
import "./SolutionRow.scss"
import { IncreaseIcon, DecreaseIcon } from "../../../../../../assets/icons";

const SolutionRow: React.FC = () => {
    return (
        <div className="solution-row-container">
            <div className="solution-row-content">
                <div className="content-img"></div>
                <div className="content-title">Task title</div>
            </div>

            <div className="solution-row-score">
                50
            </div>

            <div className="solution-row-interact">
                <div className="increase-interact">
                    <IncreaseIcon />
                    12
                </div>

                <span className="border-interact">|</span>

                <div className="decrease-interact">
                    <DecreaseIcon />
                    5
                </div>
            </div>

            <div className="solution-row-time">
                12/05/2024
            </div>
        </div>
    )
};

export default SolutionRow;
