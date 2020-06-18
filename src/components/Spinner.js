import React from "react";
import "./Spinner.css";

const Spinner = () => {
    return (
        <div className="centered">
            <div className="lds-facebook">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>

    );
};

export default Spinner;
