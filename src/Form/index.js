import "./style.css";
import { useState } from "react";
import render from "./RenderResult";


const Form = () => {
    const [input, setInput] = useState("");
    const [outputCurrency, setOutputCurrency] = useState("EUR");
    const [result, setResult] = useState("");

    const currencies = [
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

    const onInputChange = ({ target }) => setInput(target.value);
    const onOutputCurrencyChange = ({ target }) => setOutputCurrency(target.value);

    const calculateResult = (outputCurrency) => {
        const currencyRate = currencies.find(({ name }) => name === outputCurrency).rate;

        setResult(
            render({
                targetAmount: +input / currencyRate,
                outputCurrency,
            })
        );
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResult(outputCurrency);
    };

    return (
        
            <form className="form" onClick={onFormSubmit}>
                <fieldset className="form__fieldset">
                    <legend className="form__legend">Przelicz walutę</legend>
                    <p>
                        <label className="form__label">
                            <span className="form__labelText">
                                Wpisz kwotę w PLN*:
                            </span>
                            <input
                                className="form__input"
                                value={input}
                                onChange={onInputChange}
                                required
                                autoFocus
                                type="number"
                                min="0.01"
                                step="0.01"
                            />
                        </label>
                    </p>
                    <p>
                        <label>
                            <span className="form__labelText">
                                Wybierz docelową walutę:
                            </span>
                            <select
                                name="currency"
                                value={outputCurrency}
                                onChange={onOutputCurrencyChange}
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
                    <p className="form__paragraphResult">Kwota wynosi:<strong>{result}</strong> 
                    </p>
                </div>
            </form>
    );
};

export default Form;