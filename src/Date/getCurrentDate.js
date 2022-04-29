import { useEffect, useState } from "react";

const getCurrentDate = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const intervalID = setInterval(() => {
            setDate(new Date())
        }, 1000);

        return (() => {
            clearInterval(intervalID)
        });
    }, []);

    return date;
};

export default getCurrentDate;