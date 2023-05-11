// Q2:
// const recipes = [
//     ["Salad", "Tomato", "Cucumber", "Salad", "Sauce"],
//     ["Pizza", "Tomato", "Sausage", "Sauce", "Dough"],
//     ["Quesadilla", "Chicken", "Cheese", "Sauce"],
//     ["Sandwich", "Salad", "Bread", "Tomato", "Cheese"]
// ]

const recipes = [
    ["Pasta", "Tomato Sauce", "Onions", "Garlic"],
    ["Chicken Curry", "Chicken", "Curry Sauce"],
    ["Fried Rice", "Rice", "Onions", "Nuts"],
    ["Salad", "Spinach", "Nuts"],
    ["Sandwich", "Cheese", "Bread"],
    ["Quesadilla", "Chicken", "Cheese"]
]


function solution(recipes) {
    const obj = {};

    recipes.forEach((recipeArr) => {
        const dish = recipeArr[0];
        recipeArr.forEach((eachEle, idx) => {
            if (idx !== 0) {
                if (obj[eachEle] && !obj[eachEle].includes(dish)) {
                    obj[eachEle].push(dish)
                } else {
                    obj[eachEle] = [dish];
                }
            }
        })

    })

    //turn obj into array
    const finalArr = [];
    Object.keys(obj).sort().forEach((ingredient) => {
        if (obj[ingredient].length !== 1) {
            finalArr.push([ingredient, ...obj[ingredient].sort()]);
        }
    })
    return finalArr;
}


solution(recipes)
