import "./style.css";

const Form = () => {
    return (
        <form class="form js-form">
            <fieldset class="form__fieldset">
                <legend class="form__legend">Przelicz walutę</legend>
                <p>
                    <label class="form__label">
                        <span class="form__labelText">
                            Wpisz kwotę w PLN*:
                        </span>
                        <input class="form__input js-value" required type="number" min="1" name="value" step="any" />
                    </label>
                </p>
                <p>
                    <label class="form__label">
                        <span class="form__labelText">
                            Wybierz walutę:
                        </span>
                        <select class="js-currency" name="currency" >
                            <option value="EUR">Euro</option>
                            <option value="USD">Dolar amerykański</option>
                            <option value="GBP">Funt brytyjski</option>
                            <option value="CHF">Frank szwajcarski</option>
                        </select>
                    </label>
                </p>
            </fieldset>
            <p class="form__paragraph">Obowiązkowe pola są oznaczone gwiazdką*.</p>
            <button class="form__button">Oblicz</button>
        </form>
    );
};

export default Form;