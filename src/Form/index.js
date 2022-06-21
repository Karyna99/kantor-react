import "./style.css";
import { useState } from "react";
import render from "./renderResult";
import currencies from "../currencies";
import { StyledForm, StyledFieldset, StyledText, Input, Button, ResultWrapper } from "../styled";

const Form = () => {
    const [input, setInput] = useState("");
    const [outputCurrency, setOutputCurrency] = useState("EUR");
    const [result, setResult] = useState("");

    const onInputChange = ({ target }) => setInput(target.value);
    const onOutputCurrencyChange = ({ target }) => setOutputCurrency(target.value);

    const calculateResult = (outputCurrency) => {
        const currencyRate = currencies.find(({ shortName }) => shortName === outputCurrency).rate;

        setResult(
            render({
                targetAmount: +input / currencyRate,
                outputCurrency,
            })
        );
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (input < 0) {
            return;
        }
        calculateResult(outputCurrency);
    };

    return (
        <StyledForm onClick={onFormSubmit}>
            <StyledFieldset>
                <StyledText big>Przelicz walutę</StyledText>
                <StyledText regular>
                    Wpisz kwotę w PLN*:
                </StyledText>
                <Input
                    className="form__input"
                    value={input}
                    onChange={onInputChange}
                    required
                    autoFocus
                    type="number"
                    min="0.01"
                    step="0.01"
                />
                <StyledText regular>
                    Wybierz docelową walutę:
                </StyledText>
                <select
                    name="currency"
                    value={outputCurrency}
                    onChange={onOutputCurrencyChange}
                >
                    {currencies.map((currency) => (
                        <option
                            key={currency.name}
                            value={currency.name}
                        >{currency.shortName}</option>
                    ))}
                </select>
            </StyledFieldset>
            <StyledText smallText>Obowiązkowe pola są oznaczone gwiazdką*.</StyledText>
            <Button
                type="submit"
            >Oblicz</Button>
            <ResultWrapper>
                <p>Kwota wynosi:<strong>{` ${result}`}</strong>
                </p>
            </ResultWrapper>
        </StyledForm>
    );
};

export default Form;