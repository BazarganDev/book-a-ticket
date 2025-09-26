let countrySelectBox = document.querySelector(".countrySelect");
let citySelect = document.querySelector(".citySelect");

let countriesData = {
    Iran: ["Tehran", "Tabriz", "Khoy", "Isfahan", "Mashhad"],
    Turkey: ["Istanbul", "Izmir", "Ankara", "Antalya"],
    US: ["Washington DC", "New York", "Texas", "Los Angeles"],
};

countrySelectBox.addEventListener("change", () => {
    if (countrySelectBox.value === "Please Select") {
        citySelect.innerHTML = "";
        citySelect.innerHTML += "<option>Select City ...</option>";
    } else {
        let mainCountryName = countrySelectBox.value;
        let mainCountrycities = countriesData[mainCountryName];

        citySelect.innerHTML = "";

        mainCountrycities.forEach((city) => {
            citySelect.innerHTML += `<option>${city}</option>`;
        });
    }
});
