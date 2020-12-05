let favCities =  ["Biratnagar", "Lalitpur", "Patan", "Kathmandu","Pokhara","Palpa"];

//Adding two new cities
favCities = [...favCities,"Butwal","Dharan"];
console.log(favCities);

//removing Kathmandu from the list
favCities = favCities.filter((cities)=> cities != "Kathmandu");
console.log(favCities);