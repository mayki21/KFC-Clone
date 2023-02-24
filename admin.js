let url = `http://localhost:3000`;

let btn = document.querySelector(".addBtn");

let newprod = {
    name : "Roti Sabzi",
    price: "250",
    category: "non-veg"
}


btn.addEventListener("click", ()=>{
    addNewProduct(newprod);
    addUser(newuser)
})

async function addNewProduct(newprod){
    try {
        let req = await fetch(`${url}/recipes`, {
            method : "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(newprod)
        })
        console.log(req);
    } catch (error) {
        console.log(error)
    }
}

async function addUser(newuser){
    try {
        let req = await fetch(`${url}/users`, {
            method : "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(newuser)
        })
        console.log(req);
    } catch (error) {
        console.log(error)
    }
}


let foodsaleobj = {
    burger : 51,
    beverage : 20,
    dessert : 10,
    "biryani bucket": 27,
    "box meals" : 71,
    "new launch" : 15,
    "chicken bucket" : 44
}
localStorage.setItem("compData", JSON.stringify(foodsaleobj));




