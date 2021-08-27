const loadQoutes = () => {
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => displayQoute(data));
}

const displayQoute = quote => {
    const dis = document.getElementById('quote');
    dis.innerText = quote.quote;
}


