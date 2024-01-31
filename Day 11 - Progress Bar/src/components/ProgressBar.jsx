import React, { useEffect, useState } from "react";
import "./ProgressBar.css";

const ProgressBar = ({ value = 0 }) => {
    const [percentage, setPercentage] = useState(value);
    
    useEffect(() => {
        setPercentage(Math.min(100, Math.max(value, 0)));
    }, [value])
    

    return (
        <div className="progress">
            <span style={{color: (percentage > 49 ? "black" : "white")}}>{percentage.toFixed()}%</span>
            <div style={{width: `${percentage}%`}} role="progressbar" aria-valuemax={100} aria-valuemin={0} aria-valuenow={percentage.toFixed()}></div>
        </div>
    );
};

export default ProgressBar;
