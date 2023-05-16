let url = `https://fuzzy-garb-tuna.cyclic.app`;

let countdelBoys = document.querySelector("#Avail_del_boy");
let btn = document.querySelector(".addBtn");
let totalsales = document.querySelector("#totalsales");
let totalEarning = document.querySelector("#totalEarning");
let deltbody = document.querySelector("#delBoyTable tbody");
let signoutbutton = document.querySelector("#signoutbutton");

let orderArr = JSON.parse(localStorage.getItem("cart")) || [];



totalDelboy();
async function totalDelboy() {
    try {
        let req = await fetch(`${url}/employees`)
        let res = await req.json();
        // console.log(res);
        display(res);
    } catch (error) {
        console.log(error)
    }
}
function display(res) {
    countdelBoys.innerHTML = res.length;
    let str = "";
    res.forEach((el, i) => {
        str += `<tr>
            <td>${el.name}</td>
            <td>${el.salary}</td>
            <td class="status" id=${el.id}>Not Assigned</td>
        </tr>`
    })
    deltbody.innerHTML = str;
    assigningDelBoy(orderArr);
}


function assigningDelBoy(orderArr) {
    // console.log(orderArr)
    let allStatus = document.querySelectorAll(".status");
    orderArr.forEach((el) => {
        updatePieChart(el.category);
        if (el.booked == undefined) {
            for (i = 0; i < allStatus.length; i++) {
                if (allStatus[i].textContent == "Not Assigned") {
                    allStatus[i].textContent = "Assigned";
                    setTimeout(()=>{
                        localStorage.clear("cart")
                        window.location.reload();
                    }, 600000)
                    break;
                }
                
            }
        }
    })
}



calTotalSale();
function calTotalSale() {
    let sum = 50000;
    for (let i = 0; i < orderArr.length; i++) {
        sum += orderArr[i].price;
    }
    totalsales.innerHTML = `₹ ${sum}`;
    totalEarning.innerHTML = `₹ ${sum - (sum * 10 / 100)}`;
}

calTotalEarning();
function calTotalEarning() { }





let foodsaleobj = {
    burger: 51,
    beverage: 20,
    dessert: 10,
    "biryani bucket": 27,
    "box meals": 71,
    "new launch": 15,
    "chicken bucket": 44
}
localStorage.setItem("compData", JSON.stringify(foodsaleobj));
function updatePieChart(val) {
    let newArr = JSON.parse(localStorage.getItem("compData"));
    newArr[val]++;
    localStorage.setItem("compData", JSON.stringify(newArr));
}


bargraphdata();
function bargraphdata() {
    let saleRepArr = new Array(120);
    for (let i = 0; i < saleRepArr.length; i++) {
        saleRepArr[i] = Math.floor(Math.random() * 10000)
    }
    let storeArr = [], sum= 0, st=[0];
    for (let i = 0; i<=saleRepArr.length; i++){
        if(i>0 && (i)%30==0){
            let saleObj = {}
            saleObj.totalsale = sum;
            saleObj.monthAvg = sum - (sum/10);
            saleObj.lastmax = st[st.length-1] * 2;
            storeArr.push(saleObj)
            sum=0;
        }
        sum += saleRepArr[i];
        if(saleRepArr[i]>st[st.length-1]){
            st.push(saleRepArr[i]);
        }
    }
    console.log(storeArr);
    localStorage.setItem("barChartData", JSON.stringify(storeArr));
}


signoutbutton.addEventListener("click", ()=>{
    window.location.assign("/login.html")
})
