import { useState } from "react";
import { useFetchData } from "./useFetchData";
import render from "./renderResult";
import { StyledForm, StyledFieldset, StyledText, Input, Button, ResultWrapper } from "./styled";

const Form = () => {
    const [input, setInput] = useState("");
    const [outputCurrency, setOutputCurrency] = useState("EUR");
    const [result, setResult] = useState("");
    const { status, ratesDate, rates } = useFetchData();

    const onInputChange = ({ target }) => setInput(target.value);
    const onOutputCurrencyChange = ({ target }) => setOutputCurrency(target.value);

    const calculateResult = (outputCurrency) => {
        const currencyRate = rates[outputCurrency];

        setResult(
            render({
                targetAmount: +input * currencyRate,
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

    if (status === "loading") {
        return <StyledText>
            Pobieram kursy walut z serwera...
        </StyledText>
    } else if (status === "error") {
        return <StyledText>
            Oops! Cos poszło nie tak😢. Koniecznie zajrzyj później!
        </StyledText>
    }
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
                    {Object.keys(rates).map((currency) => (
                        <option
                            key={currency}
                            value={currency}
                        >{currency}</option>
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
            <StyledText apiDate>
                Kursy walut są pobierane z Europejskiego Banku Centralnego.
                Aktualne na dzień:<strong>{` ${ratesDate}`}</strong>
            </StyledText>
        </StyledForm>
    );
};

export default Form;