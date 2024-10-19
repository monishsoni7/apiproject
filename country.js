const countryName =new URLSearchParams(location.search).get('name')
const flagImage = document.querySelector('.mon')
const countryH1 = document.querySelector('.hone')
const nativeName=document.querySelector('.native-Name')
const Pop=document.querySelector('.Population')
const Region = document.querySelector('.Region')
const SubReg = document.querySelector('.Sub-Region')
const cap = document.querySelector('.Capital')
const Tld = document.querySelector('.doamin')
const cur = document.querySelector('.curr')
const lang = document.querySelector('.lang')
const bordercont = document.querySelector('.border-countries')
const Thc = document.querySelector('.changer')
fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`).then((res)=>res.json())
.then(([country])=>{
    // console.log(country)
    flagImage.src = country.flags.svg
    countryH1.innerText = country.name.common
Pop.innerText = country.population.toLocaleString('en-IN')
Region.innerText = country.region


Tld.innerText = country.tld.join(', ')
if(country.capital){
    cap.innerText= country.capital?.[0]
}
    if(country.subregion){
        SubReg.innerText=country.subregion
    }
    if(country.name.nativeName){
        nativeName.innerText = Object.values(country.name.nativeName)[0].common
    }
    else{
        nativeName.innerText = country.name.common
    }
    if(country.currencies){
        cur.innerText= Object.values(country.currencies).map((currency)=>currency.name).join(', ')
    }
    if(country.languages){
        lang.innerText = Object.values(country.languages).join(', ')
    }
    if(country.borders){
        country.borders.forEach((border)=>{
            fetch(`https://restcountries.com/v3.1/alpha/${border}`).then((res)=> res.json())
            .then(([bordercountry])=>{
                console.log(bordercountry)
                const bordercountrytag = document.createElement('a')
                bordercountrytag.href=`country.html?name=${bordercountry.name.common}`
                bordercountrytag.innerHTML = bordercountry.name.common
            bordercont.append(bordercountrytag)
            
            })
        })
    }
})
Thc.addEventListener('click',()=>{
    document.body.classList.toggle('darks')
})