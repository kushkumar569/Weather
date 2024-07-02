const city = ["new delhi", "sasaram", "kolkata", "patna", "bangalore", "jammu"]

city.forEach(element => {
    // console.log(element)
    fetch(`https://api.weatherapi.com/v1/current.json?key=29e4d42b777d459cac6112945242506&q=${element}`)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            document.getElementById(`${element}`).innerHTML = `${element}\n${data.current.temp_c}°C`
        })
        .catch((error) => document.getElementById(`${element}`).innerHTML = `${element}\nError`)
});

fetch(`https://api.weatherapi.com/v1/current.json?key=29e4d42b777d459cac6112945242506&q=sasaram`)
    .then((response) => {
        return response.json()
    })
    .catch((error) => document.getElementById("feel").innerHTML = `Error`)
    .then((data) => {
        document.getElementById("time").innerHTML = `${data.location.localtime}`;
        document.getElementById("w_img").innerHTML = `<span style="font-size:50px;">⛅</span>`;
        document.getElementById("temp").innerHTML = `${data.current.temp_c}°C`;
        document.getElementById("day").innerHTML = `${data.current.condition.text}`;
        document.getElementById("feel").innerHTML = `Feel Like ${data.current.temp_c}°C`;
        document.getElementById("air").innerHTML = `<p>UV Index</p>\n${data.current.uv}`;
        document.getElementById("wind").innerHTML = `<p> Wind</p>\n${data.current.wind_kph} km/h`;
        document.getElementById("humidity").innerHTML = `<p> Humidity</p>\n${data.current.humidity}%`;
        document.getElementById("dew").innerHTML = `<p> Dew Point</p>\n${data.current.dewpoint_c}°`;
        const temp = data.current.temp_c;
        const hum = data.current.humidity;
        const day = data.current.condition.text;
    })


const submit = document.getElementById("btm");

submit.addEventListener('click', function (e) {
    e.preventDefault();

    const search = (document.getElementById('search').value);
    fetch(`https://api.weatherapi.com/v1/current.json?key=29e4d42b777d459cac6112945242506&q=${search}`)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            document.getElementById("time").innerHTML = `${data.location.localtime}`;
            document.getElementById("w_img").innerHTML = `<span style="font-size:50px;">⛅</span>`;
            document.getElementById("temp").innerHTML = `${data.current.temp_c}°C`;
            document.getElementById("day").innerHTML = `${data.current.condition.text}`;
            document.getElementById("feel").innerHTML = `Feel Like ${data.current.temp_c}°C`;
            document.getElementById("air").innerHTML = `<p>UV Index</p>\n${data.current.uv}`;
            document.getElementById("wind").innerHTML = `<p> Wind</p>\n${data.current.wind_kph} km/h`;
            document.getElementById("humidity").innerHTML = `<p> Humidity</p>\n${data.current.humidity}%`;
            document.getElementById("dew").innerHTML = `<p> Dew Point</p>\n${data.current.dewpoint_c}°`;
            const temp = data.current.temp_c;
            const hum = data.current.humidity;
            const day = data.current.condition.text;


        })
        .catch((error) => document.getElementById("feel").innerHTML = `Error`)
});

const instagram = document.getElementById('instagram');
const twitter = document.getElementById('twitter');
const linkedin = document.getElementById('linkedin');
const github = document.getElementById('github');
instagram.addEventListener('click', function (e) {
    window.open('https://www.instagram.com/im__k_u_s_h_/?hl=en', '_blank');
});

github.addEventListener('click', function (e) {
    window.open('https://github.com/kushkumar569', '_blank');
});

linkedin.addEventListener('click', function (e) {
    window.open('https://www.linkedin.com/in/kush-kushwaha-876525257/', '_blank');
});

twitter.addEventListener('click', function (e) {
    window.open('https://x.com/kush_kushwaha_1', '_blank');
});

