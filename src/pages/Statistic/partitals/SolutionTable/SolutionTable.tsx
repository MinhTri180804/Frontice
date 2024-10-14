import React from "react";
import "./SolutionTable.scss"
import { SolutionRow } from "./partials/";

const SolutionTable: React.FC = () => {
    return (
        <div className="solution-table-container">
            <div className="solution-table-title">Section title</div>

            <div className="solution-table-body">
                <div className="solution-table-header">
                    <span>Nội dung</span>
                    <span>Số điểm</span>
                    <span>Tương tác</span>
                    <span>Thời gian</span>
                </div>
                <SolutionRow />
                <SolutionRow />
                <SolutionRow />
                <SolutionRow />
            </div>
        </div>
    )
};

export default SolutionTable;
