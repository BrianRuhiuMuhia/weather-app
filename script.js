const apiKey="68dd462b9073ee9747024eb5e2ee0bdf"
const getData=(city,apiKey)=>{
   
    const response=fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`).then((response)=>{
        return response.json()
    }).then((data)=>{
displayData(data)
    }).catch((err)=>{
console.warn(err)
    })
}
function displayData(data)
{
    console.log(data)
    document.querySelector(".city").innerHTML=`City:${data.name}`
    document.querySelector(".temp").innerHTML=`Degrees:${data.main.temp}`
    document.querySelector(".condition").innerHTML=`Condition:${data.weather[0].main}`
    document.querySelector(".speed").innerHTML=`Wind Speed:${data.wind.speed}`
}
function search()
{
    const city=document.querySelector(".search-bar").value
    getData(city,apiKey)
}
document.querySelector(".btn").addEventListener("click",()=>{
search()
})
