let baseUrl = "https://disease.sh/v3/covid-19/all"
let totalCases=document.querySelector(".total-cases")
let activeCases=document.querySelector(".active-cases")
let recoveredCases=document.querySelector(".recovered-cases")
let deaths=document.querySelector(".deaths")
let todayCases=document.querySelector(".today-cases")
let test=document.querySelector(".test")

window.onload=()=>{
    fetch(baseUrl)
    .then((response)=>{
        getResults(response.json())
    })
}

getResults = (result) =>{
    Promise.resolve(result).then((val)=>{
    totalCases.innerHTML=val.cases
    activeCases.innerHTML=val.active
    recoveredCases.innerHTML=val.recovered
    deaths.innerHTML=val.deaths
    todayCases.innerHTML=val.todayCases
    test.innerHTML=val.tests
    })
}
