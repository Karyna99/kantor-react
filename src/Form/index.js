import "./style.css";

const Form = () => {
    return (
        <form className="form js-form">
            <fieldset className="form__fieldset">
                <legend className="form__legend">Przelicz walutę</legend>
                <p>
                    <label className="form__label">
                        <span className="form__labelText">
                            Wpisz kwotę w PLN*:
                        </span>
                        <input className="form__input js-value" required type="number" min="1" name="value" step="any" />
                    </label>
                </p>
                <p>
                    <label className="form__label">
                        <span className="form__labelText">
                            Wybierz walutę:
                        </span>
                        <select className="js-currency" name="currency" >
                            <option value="EUR">Euro</option>
                            <option value="USD">Dolar amerykański</option>
                            <option value="GBP">Funt brytyjski</option>
                            <option value="CHF">Frank szwajcarski</option>
                        </select>
                    </label>
                </p>
            </fieldset>
            <p className="form__paragraph">Obowiązkowe pola są oznaczone gwiazdką*.</p>
            <button className="form__button">Oblicz</button>
        </form>
    );
};

export default Form;