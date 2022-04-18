import "./style.css";
import { useState } from "react";
import RenderResult from "./RenderResult";


const Form = ({ result, calculateResult }) => {
    const [value, setValue] = useState("");
    const [fromCurrency, setFromCurrency] = useState("PLN");
    const [toCurrency, setToCurrency] = useState("EUR");

    const currencies = [
        {
            name: "Złoty",
            shortName: "PLN",
            rate: 1,
        },
        {
            name: "Euro",
            shortName: "EUR",
            rate: 4.53,
        },
        {
            name: "Dolar amerykański",
            shortName: "USD",
            rate: 3.99,
        },
        {
            name: "Funt brytyjski",
            shortName: "GBP",
            rate: 5.43,
        },
        {
            name: "Frank szwajcarski",
            shortName: "CHF",
            rate: 4.33,
        },
    ];

    const onValueChange = (event) => setValue(event.target.value);

    const onSetFromCurrency = (event) => setFromCurrency(event.target.value);

    const onSetToCurrency = (event) => setToCurrency(event.target.value);

    const fromCurrencies = () =>
        currencies.find((currency) => currency.shortName === fromCurrency).rate;
    const rateFromCurrency = fromCurrencies(onSetFromCurrency);

    const toCurrencies = () =>
        currencies.find(({ shortName }) => shortName === toCurrency).rate;
    const rateToCurrency = toCurrencies(onSetToCurrency);

    const formSubmit = (event) => {
        event.preventDefault();
        
        calculateResult(
            value,
            rateFromCurrency,
            rateToCurrency,
            toCurrency
        );
    };

    return (
        <>
            <form className="form" onClick={formSubmit}>
                <fieldset className="form__fieldset">
                    <legend className="form__legend">Przelicz walutę</legend>
                    <p>
                        <label className="form__label">
                            <span className="form__labelText">
                                Wpisz kwotę w PLN*:
                            </span>
                            <input
                                className="form__input"
                                value={value}
                                onChange={onValueChange}
                                required type="number"
                                min="1"
                                step="any"
                            />
                        </label>
                    </p>
                    <p>
                        <label className="form__label">
                            <span className="form__labelText">
                                Wybierz początkową walutę:
                            </span>
                            <select
                                name="currency"
                                value={fromCurrency}
                                onChange={onSetFromCurrency}
                            >
                                {currencies.map((currency) => (
                                    <option
                                        key={currency.name}
                                        value={currency.shortName}
                                    >{currency.shortName}</option>
                                ))}
                            </select>

                            <span className="form__labelText">
                                Wybierz docelową walutę:
                            </span>
                            <select
                                name="currency"
                                value={toCurrency}
                                onChange={onSetToCurrency}
                            >
                                {currencies.map((currency) => (
                                    <option
                                        key={currency.name}
                                        value={currency.shortName}
                                    >{currency.shortName}</option>
                                ))}
                            </select>
                        </label>
                    </p>
                </fieldset>
                <p className="form__paragraph">Obowiązkowe pola są oznaczone gwiazdką*.</p>
                <button className="form__button">Oblicz</button>
                <div className="form__result">
                    <p className="form__paragraphResult">Kwota wynosi:<RenderResult result={result} />
                    </p>
                </div>
            </form>
        </>
    );
};

export default Form;