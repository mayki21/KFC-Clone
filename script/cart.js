let cartdata = JSON.parse(localStorage.getItem("cart")) || [];

let dataappend=document.getElementById("ItemList");
let checkoutSec = document.getElementById("checkoutBox");
let itemCount = document.getElementById("itemCount");
let totalAmount = document.getElementById("totalAmount");
let GSTAmt = document.getElementById("GSTAmt");
let totalAMT = document.getElementById("totalAMT");
Display(cartdata);
itemCounter();
subAmt();
GST();
ShowTotalAmt();
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
        quantitySec.append(lessBtn,quantity,moreBtn,button);
        detailsSec.append(image, name, price)
        card.append(detailsSec, quantitySec);
        dataappend.append(card);    
    });
}
function increaseqnty(index) {
    cartdata[index].quantity++;
    localStorage.setItem("cart", JSON.stringify(cartdata));
    Display(cartdata);
    itemCounter();
    subAmt();
    GST();
    ShowTotalAmt();
}
function decreaseqnty(index) {
    if (cartdata[index].quantity * 1 > 1) {
      cartdata[index].quantity--;
      localStorage.setItem("cart", JSON.stringify(cartdata));
      Display(cartdata);
      itemCounter();
      subAmt();
      GST();
      ShowTotalAmt();
    }else{
        alert("To remove the item from the cart click Remove button");
    }
}
function removeItem(index){
    cartdata.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cartdata));
    Display(cartdata);
    itemCounter();
    subAmt();
    GST();
    ShowTotalAmt();
}

function itemCounter(){
    var items = cartdata.reduce(function(acc, data){
        return acc + data.quantity;
    },0);
    itemCount.innerText = items+"-ITEMS"; 
}

function subAmt(){
    var amt = cartdata.reduce(function(acc,data){
        return acc + data.price*data.quantity;
    },0);
    totalAmount.innerText = "₹" + amt;
}

function GST(){
    var amt = cartdata.reduce(function(acc,data){
        return acc + data.price*data.quantity;
    },0);
    GSTAmt.innerText = "₹" + ((amt*5)/100); 
}

function ShowTotalAmt(){
    var amt = cartdata.reduce(function(acc,data){
        return acc + data.price*data.quantity;
    },0);
    totalAMT.innerText = `₹ ${amt + ((amt*5)/100)} `; 
}