let cartdata = JSON.parse(localStorage.getItem("cart")) || [];

let dataappend=document.getElementById("ItemList");
Display(cartdata);
console.log(cartdata)

function Display(data)
{
    dataappend.innerHTML="";
    data.map(function(element, index){
        let card = document.createElement("div");
        card.setAttribute("class","cartcard");
        let detailsSec = document.createElement("div");
        detailsSec.setAttribute("class", "detailsSec")
        let image = document.createElement("img");
        let name = document.createElement("h3");
        let price = document.createElement("h4");
        let button=document.createElement("button");
        button.innerText="Remove";
        button.setAttribute("class","removebtn");
        button.addEventListener('click',()=>{
            removeItem(index);
        });
        image.src = element.image;
        name.textContent =element.name;
        price.textContent = `₹${element.price*element.quantity}`;
        let quantitySec = document.createElement("div");
        quantitySec.setAttribute("class", "quantitySec")
        let lessBtn = document.createElement("button");
        lessBtn.setAttribute("class", "quantityBtn");
        lessBtn.innerText="-";
        let moreBtn = document.createElement("button");
        moreBtn.setAttribute("class", "quantityBtn");
        moreBtn.innerText="+";
        lessBtn.addEventListener("click",()=>{
            decreaseqnty(index);
        });
        moreBtn.addEventListener("click",()=>{
            increaseqnty(index);
        });            
        let quantity = document.createElement("h4");
        quantity.setAttribute("class", "quantityBlock")
        quantity.innerText = element.quantity;
        quantitySec.append(lessBtn,quantity,moreBtn);
        detailsSec.append(image, name, price,button)
        card.append(detailsSec, quantitySec);
        dataappend.append(card);    
    });
}
function increaseqnty(index) {
    cartdata[index].quantity++;
    localStorage.setItem("cart", JSON.stringify(cartdata));
    Display(cartdata);
}
function decreaseqnty(index) {
    if (cartdata[index].quantity * 1 > 1) {
      cartdata[index].quantity--;
      localStorage.setItem("cart", JSON.stringify(cartdata));
      Display(cartdata);
    }else{
        alert("To remove the item from the cart click Remove button");
    }
}
function removeItem(index){
    cartdata.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cartdata));
    Display(cartdata);
}