const  verClima= async()=>{
    let apikey="01c823a5aa2a4e128746309f7850cd66";
    let divRes=document.querySelector("#res");
    if(navigator.geolocation){
        var success = async function(position){
        var latitud = position.coords.latitude,
            longitud = position.coords.longitude;
            console.log("Latitud: " + latitud + ", Longitud " + longitud);
        let url=`https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&appid=${apikey}&units=metric&lang=es`;
        console.log(url);
        const api= await fetch(url);
        const data = await api.json();
        
        console.log(data);
        const urlIcon = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`
        divRes.innerHTML=`
        <h1>${data.name}, ${data.sys.country}</h1>
        <p>Temperatura:${data.main.temp} °C</p>
        <img src="${urlIcon}">
        <h2>${data.weather[0].description.toUpperCase()}</h2>
        <p>Min: ${data.main.temp_min} °C</p>
        <p>Max: ${data.main.temp_max} °C</p>
        <p>Presion: ${data.main.pressure}</p>
        <p>Humedad: ${data.main.humidity}</p>
        <p>Velocidad del viento: ${data.wind.speed} m/s</p>
        `;
    }
        navigator.geolocation.getCurrentPosition(success, function(msg){
        console.error( msg );
        });
        }
}