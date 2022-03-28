
var menu = {
    
    courses: {
        appetizers:[],
        mains:[], 
        desserts:[]
    },

    addDishToCourse:function(
        courseName, 
        dishName , 
        dishPrice) {
            const dish = {
                name: dishName ,
                price:dishPrice
            };
            if (courseName === "appetizer"){
                menu.courses.appetizers.push(dish);
            } else if (courseName === "main"){
                menu.courses.mains.push(dish);
            }else if (courseName === "dessert"){
                menu.courses.desserts.push(dish);
            } else {
                console.log('ERROR');
    }
},
    getRandomDishFromCourse: function(courseName){
        const dishes = menu.courses[courseName];
        const dishIndex = Math.floor(Math.random() * dishes.length);
        return dishes[dishIndex];
    },

            generateRandomMeal: function(){
            const appetizer = menu.getRandomDishFromCourse('appetizers');
            const main = menu.getRandomDishFromCourse('mains');
            const dessert = menu.getRandomDishFromCourse('desserts');
            
            const meal = [appetizer,main, dessert];
            const mealPrice = meal.reduce(function(acc, course){
                return acc += course.price;
            },0);
            console.log(`you will eat ${appetizer.name}, ${main.name} and ${dessert.name}. Your total $ ${mealPrice}`)
    }
 };
menu.addDishToCourse('appetizer', 'salad', 8);
menu.addDishToCourse('appetizer', 'soup', 6);   

menu.addDishToCourse('main', 'staik', 18);
menu.addDishToCourse('main', 'pasta', 12);

menu.addDishToCourse('dessert', 'icecream', 5);
menu.addDishToCourse('dessert', 'cake', 4);
menu.generateRandomMeal();
