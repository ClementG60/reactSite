//{country} permet d'acceder directement aux informations (décomposition js)
const Card = ({country}) => {
    return (
        <li className="card">
            <img src={country.flags.svg} alt={"drapeau" + country.translations.fra.common} />
            <div className="infos">
                <h2>{country.translations.fra.common}</h2>
                <h4>{country.capital}</h4>
                {/* toLocaleString permet, dans ce cas précis, de rajouter des espaces entre les milliers */}
                <p>Pop. {country.population.toLocaleString()}</p>
            </div>
        </li>
    );
};

export default Card;