/* eslint-disable react-hooks/rules-of-hooks */

import { useState, useEffect } from "react";

const useScreenSize = () => {
    const [width, setWidth]: any[] | undefined | any = useState();
    const [height, setHeight]: any[] | undefined | any = useState();
    useEffect(() => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);

        window.addEventListener("resize", handleResize);
    }, []);

    const handleResize = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    };


    return { height, width }
}

export default useScreenSize

