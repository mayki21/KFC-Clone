let banner = document.getElementById("banner");
let posters = [
    "https://images.ctfassets.net/wtodlh47qxpt/3Q9nVrzAkO9gXkxk2OqKFS/c4077fb9cd4da6918f5363959a69e53b/Chizza_Banner_1440x396_delviery.jpg?w=1536&fit=fill&fm=webp",
    "https://images.ctfassets.net/wtodlh47qxpt/4wzmNLWjqVZZl95Fcf48r2/90bd1294b970f903545d8f0f5278b28a/Allu_Arjun_Combo_Meal__1440x396px.jpg?w=1536&fit=fill&fm=webp",
    "https://images.ctfassets.net/wtodlh47qxpt/4qo6xWTWQmjg8ycSRETMU5/649a454a732e77c4cc534524e48bd800/Box_Meals_App_Banner__1440x396px.jpg?w=1536&fit=fill&fm=webp",
    "https://images.ctfassets.net/wtodlh47qxpt/2cKs5e17FbKIE7Dza5ZlNM/e7163ee02d91d59d81a20ecf606f707b/Biryani_Banner_1440x396px.jpg?w=1536&fit=fill&fm=webp",
    "https://images.ctfassets.net/wtodlh47qxpt/4qo6xWTWQmjg8ycSRETMU5/649a454a732e77c4cc534524e48bd800/Box_Meals_App_Banner__1440x396px.jpg?w=1536&fit=fill&fm=webp"
]
let i=0;
setInterval(()=>{
    i++;
    if(i===posters.length){
        i=0;
    }
    let slideImg=document.createElement("img");
    slideImg.setAttribute("src", posters[i]);
    banner.innerHTML=null;
    banner.append(slideImg);
}, 2000)


//Added Total amount Devnandan

 let CartArr = JSON.parse(localStorage.getItem("cart"))
  let Total=document.getElementById("totalAmount");
    let sum=0;
        for (let x = 0; x < CartArr.length;x++){
            sum+=CartArr[x].price;
        }

Total.innerText = `₹${sum}`
    //End