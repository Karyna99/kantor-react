import "./style.css";
import { useState } from "react";
import currencies from "../currencies";

const Form = () => {
    const [value, setValue] = useState(0);
    const [result, setResult] = useState(0);
    const [fromCurrency, setFromCurrency] = useState("");
    const [toCurrency, setToCurrency] = useState("");

    const onValueChange = (event) => setValue(event.target.value);

    const onSetFromCurrency = (event) => setFromCurrency(event.target.value);

    const onSetToCurrency = (event) => setToCurrency(event.target.value);

    const fromCurrencies = () =>
        currencies.find((currency) => currency.shortName === fromCurrency).rate;

    const toCurrencies = () =>
        currencies.find((currency) => currency.shortName === toCurrency).rate;
    const rateToCurrency = toCurrencies()

    const formSubmit = async (event) => {
        event.preventDefault();
        const formValid = +value >= 0 && fromCurrency && toCurrency;

        if (!formValid) {
            return;
        };
        const res = await fetch(
            `https://api.exchangeratesapi.io/latest?base=${fromCurrency}`
        );
        const { rates } = await res.json();
        setResult(+value * rates[toCurrency]);
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
                                {fromCurrencies.map((currency) => (
                                    <option key={currency}>{currency}</option>
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
                                {toCurrencies.map((currency) => (
                                    <option key={currency}>{currency}</option>
                                ))}
                            </select>
                        </label>
                    </p>
                </fieldset>
                <p className="form__paragraph">Obowiązkowe pola są oznaczone gwiazdką*.</p>
                <button className="form__button" type="submit">Oblicz</button>
            </form>
            <div>
                Kwota wynosi: {result.toFixed(2)} {toCurrency}
            </div>
        </>
    );
};

export default Form;