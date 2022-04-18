import "./style.css";
import { useState } from "react";
import RenderResult from "./RenderResult";


const Form = ({ result, calculateResult }) => {
    const [value, setValue] = useState("");
    const [fromCurrency, setFromCurrency] = useState("PLN");
    const [toCurrency, setToCurrency] = useState("EUR");

    const currencies = [
        {
            name: "PLN",
            rate: 1,
        },
        {
            name: "EUR",
            rate: 4.53,
        },
        {
            name: "USD",
            rate: 3.99,
        },
        {
            name: "GBP",
            rate: 5.43,
        },
        {
            name: "CHF",
            rate: 4.33,
        },
    ];

    const onValueChange = ({target}) => setValue(target.value);

    const onSetFromCurrency = ({target}) => setFromCurrency(target.value);

    const onSetToCurrency = ({target}) => setToCurrency(target.value);

    const fromCurrencies = () =>
        currencies.find(({ name }) => name === fromCurrency).rate;
    const rateFromCurrency = fromCurrencies(onSetFromCurrency);

    const toCurrencies = () =>
        currencies.find(({ name }) => name === toCurrency).rate;
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
                                min="0.01"
                                step="0.01"
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
                                        value={currency.name}
                                    >{currency.name}</option>
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
                                        value={currency.name}
                                    >{currency.name}</option>
                                ))}
                            </select>
                        </label>
                    </p>
                </fieldset>
                <p className="form__paragraph">Obowiązkowe pola są oznaczone gwiazdką*.</p>
                <button 
                className="form__button" 
                type="submit"
                >Oblicz</button>
                <div className="form__result">
                    <p className="form__paragraphResult">Kwota wynosi:<RenderResult result={result} />
                    </p>
                </div>
            </form>
        </>
    );
};

export default Form;