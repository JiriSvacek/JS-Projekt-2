const countries = [
  "United States",
  "China",
  "India",
  "Indonesia",
  "Brazil",
  "Pakistan",
  "Nigeria",
  "Bangladesh",
  "Russia",
  "Mexico",
  "Japan",
  "Philippines",
  "Vietnam",
  "Ethiopia",
  "Egypt",
  "Iran",
  "Turkey",
  "Democratic Republic of the Congo",
  "Thailand",
  "Myanmar",
];

//First part
/**
 * Check if the county is string and is not empty, then checks if the country is already in array,
 * in both cases function returns false and write message to console,
 * otherwise return true
 * @param {string} country wich country we want check
 * @param {array} contries compare to which array
 * @returns {boolean} Depending of the result true or false.
 */
function validityChecker(country, countries) {
  if (typeof country === "string" && country.length > 0) {
    const index = countries.indexOf(country);
    if (index > -1) {
      console.log(
        `Zadaná krajina ${country} se nachází v seznamu krajin na indexe ${index}.`
      );
      return false;
    }
    return true;
  }
  console.log(`Zadali jste neplatný dotaz: ${country}`);
  return false;
}
/**
 * Depending if the country is valid and is in array, if is valid and not present
 * in array then writes message to console. Else write info to console
 * @param {string} country wich country we want check
 * @param {array} contries compare to which array
 */
function checkCountry(country, countries) {
  if (validityChecker(country, countries)) {
    console.log(`Zadaná krajina ${country} se nenachází v seznamu krajin.`);
  }
}

checkCountry("Germany", countries);
checkCountry("Japan", countries);
checkCountry(1000, countries);

//Second part
/**
 * Depending if the country is valid and is in array, if is valid and not present
 * in array then adds country to the array and writes message to console.
 * Else write info to console
 * @param {string} country wich country we want add
 * @param {array} contries to which array
 */
function addCountry(country, countries) {
  if (validityChecker(country, countries)) {
    const sizeOfCountries = countries.push(country);
    console.log(
      `Zadaná krajina ${country} byla úspěšně přidaná do seznamu krajin na indexu ${
        sizeOfCountries - 1
      }. Celkový počet krajin v seznamu je ${sizeOfCountries}.`
    );
  }
}

addCountry("Vietnam", countries);
addCountry("Mexico", countries);
addCountry("Poland", countries);
addCountry("", countries);
