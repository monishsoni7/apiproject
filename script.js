const cont = document.querySelector(".countries-cont");
const filterSel = document.querySelector(".filter-region")
const innput = document.querySelector(".inputbar")
const TC = document.querySelector('.theme-changer')
let allcountrydata

fetch("https://restcountries.com/v3.1/all")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((country) => {
      // console.log(country.flags.svg);
      const countrycard = document.createElement("a");
      countrycard.classList.add("country");
      countrycard.href = `/country.html?name=${country.name.common}`;
      countrycard.innerHTML = `<img src="${country.flags.svg}" alt="flag">
<div class="card-cont">
    <h3 class="card-title">${country.name.common}</h3>
<p><b>Population:</b>${country.population.toLocaleString("en-IN")}</p>
<p><b>Region:</b>${country.region}</p>
<p><b>Capital:</b>${country.capital}</p>
</div>`;
      cont.append(countrycard);
      allcountrydata = data
    });
  });

filterSel.addEventListener('change',(e)=>{
    // console.log(e.target.value)
    fetch(`https://restcountries.com/v3.1/region/${filterSel.value}`)
  .then((res) => res.json())
  .then((data) => {
    cont.innerHTML=''
    data.forEach((country) => {
      // console.log(country.flags.svg);
      const countrycard = document.createElement("a");
      countrycard.classList.add("country");
      countrycard.href = `/country.html?name=${country.name.common}`;
      countrycard.innerHTML = `<img src="${country.flags.svg}" alt="flag">
<div class="card-cont">
    <h3 class="card-title">${country.name.common}</h3>
<p><b>Population:</b>${country.population.toLocaleString("en-IN")}</p>
<p><b>Region:</b>${country.region}</p>
<p><b>Capital:</b>${country.capital}</p>
</div>`;
      cont.append(countrycard)
    });
  });
  })
innput.addEventListener('input',(e)=>{
  const filterd = allcountrydata.filter((country)=> country.name.common.toLowerCase().includes(e.target.value.toLowerCase()))
  // console.log(filterd)
  // card(filterd)
  cont.innerHTML=''
  filterd.forEach((country) => {
    // console.log(country.flags.svg);
    const countrycard = document.createElement("a");
    countrycard.classList.add("country");
    countrycard.href = `/country.html?name=${country.name.common}`;
    countrycard.innerHTML = `<img src="${country.flags.svg}" alt="flag">
<div class="card-cont">
  <h3 class="card-title">${country.name.common}</h3>
<p><b>Population:</b>${country.population.toLocaleString("en-IN")}</p>
<p><b>Region:</b>${country.region}</p>
<p><b>Capital:</b>${country.capital}</p>
</div>`;
    cont.append(countrycard);
  })
  
})

TC.addEventListener('click',()=>{
  // document.body.classList.toggle('dark')
if(document.body.classList.toggle('dark')){
  TC.innerHTML =`<p class="theme-changer"><i class="fa-regular fa-sun"></i>&nbsp;&nbsp;Light Mode</p>`
}
else{
  TC.innerHTML= `<p class="theme-changer"><i class="fa-regular fa-moon"></i>&nbsp;&nbsp;Dark Mode</p>`
}
})
// function card (data){
//     cont.innerHTML=''
//     data.forEach((country) => {
//       // console.log(country.flags.svg);
//       const countrycard = document.createElement("a");
//       countrycard.classList.add("country");
//       countrycard.href = `/country.html?name=${country.name.common}`;
//       countrycard.innerHTML = `<img src="${country.flags.svg}" alt="flag">
// <div class="card-cont">
//     <h3 class="card-title">${country.name.common}</h3>
// <p><b>Population:</b>${country.population.toLocaleString("en-IN")}</p>
// <p><b>Region:</b>${country.region}</p>
// <p><b>Capital:</b>${country.capital}</p>
// </div>`;
//       cont.append(countrycard);
//     })  
// }