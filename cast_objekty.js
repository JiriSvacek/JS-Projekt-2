const countriesPopulation = [
  { country: "China", population: 1439323776 },
  { country: "India", population: 1379302771 },
  { country: "USA", population: 331002651 },
  { country: "Indonesia", population: 269603400 },
  { country: "Pakistan", population: 220892340 },
  { country: "Bangladesh", population: 164970459 },
  { country: "Japan", population: 126451398 },
  { country: "Philippines", population: 109581078 },
  { country: "Vietnam", population: 97338579 },
  { country: "Turkey", population: 84339642 },
];

const populationTotal = 8000000000;

function percentageOfPopulation(population, totalPopulation) {
  return ((population / totalPopulation) * 100).toFixed(2);
}

// China checking
console.log(
  percentageOfPopulation(countriesPopulation[0]["population"], populationTotal)
);

// Copy of array
var copyCountries = countriesPopulation.slice();

//Sorting copied array
copyCountries.sort((a, b) => {
  return a.population - b.population;
});
console.log(copyCountries);

//Adding id to each country
copyCountries.map(
  (element, index) => (element.id = element.country.slice(0, 3) + index)
);
console.log(copyCountries);

//Adding percentage to each country
copyCountries.map((element) => {
  element.percentage = percentageOfPopulation(
    element.population,
    populationTotal
  );
});
console.log(copyCountries);

//Creating new array of filttered countries
var filteredCountries = [];
/**
 * @param {number} nameLength wich country we want check
 * @param {number} percentage compare to which array
 * @returns {boolean} Depending of the result true or false.
 */
function countriesCondition(nameLength, percentage) {
  return (
    4 < nameLength && nameLength <= 8 && 1.5 < percentage && percentage < 10
  );
}
copyCountries.forEach((element) => {
  if (countriesCondition(element.country.length, element.percentage)) {
    filteredCountries.push(element);
  }
});
console.log("-".repeat(10) + " Filtered countries:");
console.log(filteredCountries);
