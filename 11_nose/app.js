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
        divRes.innerHTML=`
        <h1>${data.name}</h1>
        <p>Temperatura:${data.main.temp} °C</p>
        <p>${data.weather[0].description.toUpperCase()}</p>
        <p>Min: ${data.main.temp_min}</p>
        <p>Max: ${data.main.temp_max}</p>
        <p>Presion: ${data.main.pressure}</p>
        <p>Humedad: ${data.main.humidity}</p>
        <p>Velocidad del viento: ${data.wind.speed}</p>
        `
    }
        navigator.geolocation.getCurrentPosition(success, function(msg){
        console.error( msg );
        });
        }
}