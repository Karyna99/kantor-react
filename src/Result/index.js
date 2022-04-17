import "./style.css";

const Result = ({ value, toCurrency }) => (
    <p className="paragraph">
        Kwota wynosi: {value} {toCurrency}
    </p>
);
export default Result;