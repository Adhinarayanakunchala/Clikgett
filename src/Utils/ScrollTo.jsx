import { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollTo = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
        // window.scrollX
    }, [pathname]);

    return null;
};

export default ScrollTo;