import useCurrentDate from "./useCurrentDate";
import "./style.css";

const Date = () => {
    const date = useCurrentDate();

    return (
        <p className="date__paragraph">
            {date}
        </p>
    );
};

export default Date;