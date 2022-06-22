import { useState, useEffect } from "react";
import axios from "axios";

const useFetchData = () => {
    const [status, setStatus] = useState("loading");
    const [ratesDate, setRatesDate] = useState();
    const [rates, setRates] = useState([]);

    const path = "https://api.exchangerate.host/latest?base=PLN";

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get(path);
                setRates(response.data.rates);
                setRatesDate(response.data.date);
                setStatus({ state: "ok" });
            } catch (error) {
                setStatus({ state: "error" });
            };
        };

        setTimeout(getData, 2000);
    }, []);

    return { status, ratesDate, rates };
};

export { useFetchData };