const getInputData = food => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${food}`;
    fetch(url)
        .then(response => response.json())
        .then(data => displayMeals(data))
        // .catch((error) => {
        //     console.error('Error:', alert('not found this item'));
        // });
}

const displayMeals = food => {
    const mealsDiv = document.getElementById("food-container");
    const foodItems = food.meals;
    foodItems.forEach(food => {
        const foodName = food.strMeal;
        const mealsNewDiv = document.createElement('div');
        mealsNewDiv.className = "food-item";

        const mealInfo = `
            <div onclick="foodDetailsBtn('${food.strMeal}')">
                <img src='${food.strMealThumb}'>
                <h4>${foodName}</h4>
            </div>
        `;
        mealsNewDiv.innerHTML = mealInfo;
        mealsDiv.appendChild(mealsNewDiv);
        //console.log(foodItems);
    });

}

const searchBtn = document.getElementById('search_button');
searchBtn.addEventListener('click', () => {
    const inputFood = document.getElementById('input-food').value;
    getInputData(inputFood);
    document.getElementById('input-food').value = "";
})




const foodDetailsBtn = name => {
    
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`;
    fetch(url)
    .then(res => res.json())
    .then(data => renderFoodInfo(data.meals))
    
}

const renderFoodInfo = food => {
    console.log(food[0]);
    const foodDetails = document.getElementById("food_detail");
    
        const foodItemDetail = document.createElement('div');
        foodItemDetail.className = "food-item-detail"
        foodItemDetail.className = "food_item_detail";
            const foodInfo = `
                <img src='${food[0].strMealThumb}'>
                <h4>${food[0].strMeal}</h4>
                <ul>
                    <li>${food[0].strMeasure1}+${food[0].strIngredient1}</li>
                    <li>${food[0].strMeasure2}+${food[0].strIngredient2}</li>
                    <li>${food[0].strMeasure3}+${food[0].strIngredient3}</li>
                    <li>${food[0].strMeasure4}+${food[0].strIngredient4}</li>
                    <li>${food[0].strMeasure5}+${food[0].strIngredient5}</li>
                    <li>${food[0].strMeasure7}+${food[0].strIngredient7}</li>
                    <li>${food[0].strMeasure8}+${food[0].strIngredient8}</li2
                </ul>
            `;
            foodItemDetail.innerHTML = foodInfo;
         foodDetails.appendChild(foodItemDetail);
}





