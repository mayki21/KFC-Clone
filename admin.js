let url = `http://localhost:3000/recipes`;


fetch(url).then((res)=>res.json()).then((data)=>console.log(data));