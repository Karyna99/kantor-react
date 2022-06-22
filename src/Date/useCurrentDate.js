import { useEffect, useState } from "react";

const useCurrentDate = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const intervalID = setInterval(() => {
            setDate(new Date())
        }, 1000);

        return (() => {
            clearInterval(intervalID)
        });
    }, []);

    const formatDate = (date) => {
        return date.toLocaleString(
            "pl", {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric",
            minute: "numeric",
            hour: "numeric",
        }
        );
    };
    return formatDate(date);
};

export default useCurrentDate;