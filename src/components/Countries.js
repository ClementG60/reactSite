import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Card";

const Countries = () => {
    /*Utilisation d'un hook (fonction qui permet de se brancher sur des fonctionnalités React)
    useState permet de déclarer une variable d'état*/
    const [data, setData] = useState([]);
    const [rangeValue, setRangeValue] = useState();
    const [selectedRadio, setSelectedRadio] = useState("");
    const radios = ["Africa", "America", "Asia", "Europe", "Ocenia"];
    //Le useEffect se joue lorsque le composant est mis en place
    useEffect(() => {
        axios.get("https://restcountries.com/v3.1/all").then((res) => setData(res.data))
    }, [])
    return (
        <div className="countries">
            <ul className="radio-container">
                <input type="range" min="1" max="258" defaultValue={rangeValue} onChange={(e) => setRangeValue(e.target.value)} />
                {radios.map((continent) => (
                    <li>
                        <input type="radio" name="continentRadio" checked={continent === selectedRadio} id={continent} onChange={(e) => setSelectedRadio(e.target.id)} />
                        <label htmlFor={continent}>{continent}</label>
                    </li>
                ))}
            </ul>
            <ul>
                {selectedRadio && (
                    <button onClick={() => setSelectedRadio("")}>Annuler la recherche</button>
                )}
            </ul>
            <ul>
                {
                    data
                        .filter((country) => country.continents[0].includes(selectedRadio))
                        //permet de trier de manière décroissante suivant la population
                        .sort((a, b) => b.population - a.population)
                        .slice(0, rangeValue)
                        .map((country, index) => (
                            <Card key={index} country={country} />)
                        )}
            </ul>
        </div>
    );
};

export default Countries;