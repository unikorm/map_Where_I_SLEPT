
import { useState } from "react";

const useActivePage = () => {
    const [activePage, setActivePage] = useState(null);

    const setActive = (page) => {
        setActivePage(page);
    };

    return {
        activePage,
        setActive,
    };
};

export default useActivePage;