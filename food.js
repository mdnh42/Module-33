const searchFood = () =>{
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    console.log(searchText);

    

    searchField.value = '';



    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`

    fetch(url)
    .then(res => res.json())
    .then(data => displySearchResult(data.meals));
}


const displySearchResult = meals => {
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
   
    meals.forEach(meal => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML =`
        <div onclick="loadMealDetail(${meal.idMeal})" class="card h-100">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text"> ${meal.strInstructions.slice(0, 250)} </p>
            </div>
        </div>
        `
        searchResult.appendChild(div);
    
    })
}

const loadMealDetail = async mealId =>{
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;

    const res = await fetch(url);
    const data = await res.json();
    displyaMealDetails(data.meals[0]));
    // fetch(url)
    // .then(res => res.json())
    // .then(data => displyaMealDetails(data.meals[0]));
}

const displyaMealDetails = meal =>{
    const mealDetails = document.getElementById('meal-details');
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
        <div class="card bg-dark text-white">
            <img src="${meal.strMealThumb}" class="card-img" alt="...">
            <div class="card-img-overlay">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(0, 150)}</p>
            </div>
        </div>
    `;
    mealDetails.appendChild(div);

}