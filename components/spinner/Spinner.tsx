import React from 'react'
import { useState, CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "black",
};


const Spinner = () => {

    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#ffffff");


    return (
        <div className='container'>
            <ClipLoader
                color={color}
                loading={loading}
                cssOverride={override}
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
            />

        </div>
    )
}

export default Spinner
