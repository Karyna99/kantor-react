import getCurrentDate from "./getCurrentDate";
import "./style.css";

const Date = () => {
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

    const date = getCurrentDate();

    return (
        <p className="date__paragraph">
            {formatDate(date)}
        </p>
    );
};

export default Date;