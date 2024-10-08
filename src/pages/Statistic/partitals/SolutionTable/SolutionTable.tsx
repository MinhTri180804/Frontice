import React from "react";
import "./SolutionTable.scss"
import { SolutionRow } from "./SolutionRow";

const SolutionTable: React.FC = () => {
    return (
        <div className="solution-table-container">
            Solution table
            <SolutionRow />
        </div>
    )
};

export default SolutionTable;
