
let chickenBucketContainer = document.getElementById("Chick_bucket");
let biryaniBucketContainer = document.getElementById("Biryani_bucket");
let boxMealsContainer = document.getElementById("Box_Meal");
let burgersContainer = document.getElementById("Burger");
let stayHomeSpecialsContainer = document.getElementById("Stay_home");
let snacksContainer = document.getElementById("Snack");
let beveragesContainer = document.getElementById("Beverage");

let API = "http://localhost:3000/recipes";
let arr = [];
async function FetchData() {
    try {
        let request = await fetch(API);
        let data = await request.json();


        arr = data
        console.log(data);
        DisplayProduct(data)
    } catch (err) {
        console.log(err)
    }
}
FetchData()
let CartArr = JSON.parse(localStorage.getItem("cart")) || [];

function DisplayProduct(data) {


    chickenBucketContainer.innerHTML = "";
    biryaniBucketContainer.innerHTML = "";
    boxMealsContainer.innerHTML = "";
    burgersContainer.innerHTML = "";
    stayHomeSpecialsContainer.innerHTML = "";
    snacksContainer.innerHTML = "";
    beveragesContainer.innerHTML = "";


    data.forEach((product) => {

        let card = document.createElement("div");
        let image = document.createElement("img");
        let name = document.createElement("h3");
        let category = document.createElement("p");
        let details = document.createElement("p");
        let price = document.createElement("h4");
        let type = document.createElement("h4");
        let addToCartButton = document.createElement("button");


        type.textContent = product.type;
        image.src = product.image;
        name.textContent = product.name;
        category.textContent = product.category;
        price.textContent = `₹${product.price}`;
        details.textContent = product.description;
        addToCartButton.textContent = "Add to Cart";

        addToCartButton.addEventListener("click", () => {
            if (check(product)) {
                alert("Product Already in Cart");
            } else {
                CartArr.push({ ...product, quantity: 1 });
                localStorage.setItem("cart", JSON.stringify(CartArr));
                alert("Product Added To Cart");
                location.reload();
            }
        });

        card.append(image, type, name, price, details, category, addToCartButton);


        if (product.category === "chicken bucket") {
            chickenBucketContainer.append(card);
        } else if (product.category === "biryani bucket") {
            biryaniBucketContainer.append(card);
        } else if (product.category === "box meals") {
            boxMealsContainer.append(card);
        } else if (product.category === "burgers") {
            burgersContainer.append(card);
        } else if (product.category === "stay home specials") {
            stayHomeSpecialsContainer.append(card);
        } else if (product.category === "desserts") {
            snacksContainer.append(card);
        } else if (product.category === "beverages") {
            beveragesContainer.append(card);
        }
    });

}
function check(product) {
    for (let i = 0; i < CartArr.length; i++) {

        if (CartArr[i].id === product.id) {
            return true;

        }
    }
    return false;
}
let Total = document.getElementById("totalAmount");
let sum = 0;
for (let x = 0; x < CartArr.length; x++) {
    sum += CartArr[x].price;
}

Total.innerText = `₹${sum}`
//Search Function
let MainC = document.getElementById("chicken_bucket");
let MainBir = document.getElementById("biryani_bucket")
let MainBox = document.getElementById("box_meals")
let MainBurger = document.getElementById("burgers")
let MainSna = document.getElementById("snacks")
let MainStay = document.getElementById("stay_home_specials")
let MainBev = document.getElementById("beverages")


let Display = document.getElementById("SearchedItem");
let search = document.getElementById("main_searched_item")
search.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {

        MainC.innerHTML = "";
        MainBir.innerHTML = "";
        MainBox.innerHTML = "";
        MainBurger.innerHTML = "";
        MainSna.innerHTML = "";
        MainStay.innerHTML = "";
        MainBev.innerHTML = "";






        Display.innerHTML = "";
        chickenBucketContainer.innerHTML = "";
        biryaniBucketContainer.innerHTML = "";
        boxMealsContainer.innerHTML = "";
        burgersContainer.innerHTML = "";
        stayHomeSpecialsContainer.innerHTML = "";
        snacksContainer.innerHTML = "";
        beveragesContainer.innerHTML = "";


        let searchItem = search.value;
        console.log(searchItem)


        let filtered = arr.filter((element) => {
            if (
                element.name.toUpperCase().includes(searchItem.toUpperCase()) ===
                true
            ) {
                return true;
            } else {
                return false;
            }
        });
        filtered.forEach((product) => {

            let card = document.createElement("div");
            let image = document.createElement("img");
            let name = document.createElement("h3");
            let category = document.createElement("p");
            let details = document.createElement("p");
            let price = document.createElement("h4");
            let type = document.createElement("h4");
            let addToCartButton = document.createElement("button");


            type.textContent = product.type;
            image.src = product.image;
            name.textContent = product.name;
            category.textContent = product.category;
            price.textContent = `₹${product.price}`;
            details.textContent = product.description;
            addToCartButton.textContent = "Add to Cart";

            addToCartButton.addEventListener("click", () => {
                if (check(product)) {
                    alert("Product Already in Cart");
                } else {
                    CartArr.push({ ...product, quantity: 1 });
                    localStorage.setItem("cart", JSON.stringify(CartArr));
                    alert("Product Added To Cart");
                }
            });

            card.append(image, type, name, price, details, category, addToCartButton);
            Display.append(card)
        });

    }

});