let countrySelectBox = document.querySelector('.countrySelect')
let citySelect = document.querySelector('.citySelect')

let countriesData = {
    Iran: ['tabriz', 'tehran', 'khoy', 'esfahan', 'mashhad'],
    Turkey:['Istanbul', 'izmir', 'ankara', 'antalya'],
    US:['washington', 'newyork', 'texas', 'losangles']
}

countrySelectBox.addEventListener('change', function(){

    if(countrySelectBox.value === "Please Select"){
       citySelect.innerHTML = '';
       citySelect.innerHTML += "<Option>select city</Option>";

    } else {
        let mainCountryName = countrySelectBox.value
        let mainCountrycities = (countriesData[mainCountryName]);

        citySelect.innerHTML = '';

        mainCountrycities.forEach(function (city) {
            // console.log(city)

            citySelect.innerHTML += '<option>' + city + '</option>'
        });
    }

    
});

