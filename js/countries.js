const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then((response) => response.json())
    .then(data => displayCountries(data));
}
loadCountries();

const displayCountries = counties => {
    const countriesDiv = document.getElementById('countries');
    counties.forEach((country) => {
        // console.log(country);
        const div = document.createElement('div');
        div.classList.add('country');
        const h3 = document.createElement('h3');
        h3.innerText = country.name;
        countriesDiv.appendChild(h3);
        const p = document.createElement('p');
        p.innerText = country.capital;
        countriesDiv.appendChild(div);

    })

}

const bondCode=` I am Fake James bond . My new code is: 00${7+1+2}`
console.log(bondCode);

const data={ result: [ {userName: {title:'Mr.',name:"sakib khan"} } ] }
console.log(data.result[0].userName.name);

const p=[1,2,3]; 
const q=p.map( n=> Math.pow(n, 3));
console.log(q);

const info = { name: "", phoneNumber: null };
console.log(JSON.stringify(info));
const array = { hobbies: ["dancing", "singing", "acting"] };
console.log(JSON.stringify(array));
// {"hobbies":["ancing","singing","acting"]}

