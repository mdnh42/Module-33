const loadBuddies = () => {
    fetch('https://randomuser.me/api/?results=5')
    .then(res => res.json())
    .then(data => display(data));
}

loadBuddies();
const display = data => {
    const buddies = data.results;
    const buddiesContainer = document.getElementById('buddies');
    for(const buddy of buddies){
        const p = document.createElement('p');
        p.innerText = `Name: ${buddy.name.first} ${buddy.name.last}. Email: ${buddy.email}`;
        buddiesContainer.appendChild(p);
    }
}