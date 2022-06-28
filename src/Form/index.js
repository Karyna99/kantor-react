import { useState } from "react";
import { useFetchData } from "./useFetchData";
import renderResult from "./renderResult";
import { StyledForm, Fieldset, Text, Input, Button, ResultWrapper } from "./styled";

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
            renderResult({
                targetAmount: +input * currencyRate,
                outputCurrency,
            })
        );
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (input < 0) {
            return;
        };
        calculateResult(outputCurrency);
    };

    if (status === "loading") {
        return <Text statusInfo>
            Pobieram kursy walut z serwera...
        </Text>
    } else if (status === "error") {
        return <Text statusInfo>
            Oops! Cos poszło nie tak😢. Koniecznie zajrzyj później!
        </Text>
    }
    return (
        <StyledForm onClick={onFormSubmit}>
            <Fieldset>
                <Text big>Przelicz walutę</Text>
                <Text regular>
                    Wpisz kwotę w PLN*:
                </Text>
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
                <Text regular>
                    Wybierz docelową walutę:
                </Text>
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
            </Fieldset>
            <Text smallText>Obowiązkowe pola są oznaczone gwiazdką*.</Text>
            <Button
                type="submit"
            >Oblicz
            </Button>
            <ResultWrapper>
                <p>Kwota wynosi:<strong>{` ${result}`}</strong>
                </p>
            </ResultWrapper>
            <Text apiDate>
                Kursy walut są pobierane z Europejskiego Banku Centralnego.
                Aktualne na dzień:<strong>{` ${ratesDate}`}</strong>
            </Text>
        </StyledForm>
    );
};

export default Form;