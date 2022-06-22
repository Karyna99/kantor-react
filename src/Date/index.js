import useCurrentDate from "./useCurrentDate";
import { StyledDate } from "./styled";

const Date = () => {
    const date = useCurrentDate();
    return (
        <StyledDate>
            {date}
        </StyledDate>
    );
};

export default Date;