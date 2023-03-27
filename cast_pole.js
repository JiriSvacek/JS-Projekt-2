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
 * Check if the county is string and is not empty.
 * @param {string} country wich country we want check
 * @returns {boolean} Depending of the result true or false.
 */
function validityChecker(country) {
  if (typeof country !== "string" || country.length === 0) {
    console.log(`Zadali jste neplatný dotaz: ${country}`);
    return false;
  }
  return true;
}
/**
 * Depending if the country is valid and is in array, if is valid and not present
 * in array then writes message to console. Else write info to console
 * @param {string} country wich country we want check
 * @param {array} contries compare to which array
 */
function checkCountry(country, countries) {
  if (validityChecker(country)) {
    const index = countries.indexOf(country);
    if (index > -1) {
      console.log(
        `Zadaná krajina ${country} se nachází v seznamu krajin na indexe ${index}.`
      );
    } else {
      console.log(`Zadaná krajina ${country} se nenachází v seznamu krajin.`);
    }
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
  if (validityChecker(country)) {
    if (countries.includes(country)) {
      const index = countries.indexOf(country);
      console.log(
        `Zadaná krajina ${country} se nachází v sezname krajin na indexu ${index}.`
      );
    } else {
      const sizeOfCountries = countries.push(country);
      console.log(
        `Zadaná krajina ${country} byla úspěšně přidaná do seznamu krajin na indexu ${
          sizeOfCountries - 1
        }. Celkový počet krajin v seznamu je ${sizeOfCountries}.`
      );
    }
  }
}

addCountry("Vietnam", countries);
addCountry("Mexico", countries);
addCountry("Poland", countries);
addCountry("", countries);

/**
 * @param {string} country wich country we want add
 * @param {array} contries to which array
 */
function removeCountry(country, countries) {
  if (validityChecker(country)) {
    if (countries.includes(country)) {
      const index = countries.indexOf(country);
      countries.splice(index, 1);
      console.log(
        `Zadaná krajina ${country} byla odstraněná se seznamu krajin na indexu ${index}. Aktuální počet krajin v seznamu je ${countries.length}.`
      );
    } else {
      console.log(`Zadaná krajina ${country} se nenachází v seznamu.`);
    }
  }
}

removeCountry("", countries);
removeCountry("Vietnam", countries);
removeCountry("Laos", countries);
removeCountry("Thailand", countries);
