const loadCountries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => displayCountries(data));
}

loadCountries();

const displayCountries = (countries) => {
  /*   for(const country of countries){
        console.log(country);
    } */
    /* countries.forEach(country =>{
        console.log(country);
    })
 */
    const countriesDiv = document.getElementById('countries');
    countries.forEach(country => {
        const div = document.createElement('div');
        div.classList.add('country');
        div.innerHTML = `
            <h3> ${country.name}</h3>
            <p>${country.capital}</p>
            <button onclick="loadCountryDetail('${country.name}')">Details</button>
        `

        /* const h3 = document.createElement('h3');
        h3.innerText = `${country.name}`;
        div.appendChild(h3);
        const p = document.createElement('p');
        p.innerText = country.capital;
        div.appendChild(p); */
        countriesDiv.appendChild(div);
    })
}

const loadCountryDetail = name => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`
    fetch(url)
    .then(res => res.json())
    .then(data => countryDetail(data[0]));
}

const countryDetail = country => {
    const countryDetialsContainer = document.getElementById('country-detail');
    countryDetialsContainer.innerHTML =
    `
        <h5> ${country.name} </h5>
        <p> Poppulation: ${country.population}</p>
        <img width="200px" src="${country.flag}">
    `;
}