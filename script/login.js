let url = "http://localhost:3000";
    document.querySelector("form").addEventListener("submit", (e)=>{
        e.preventDefault();
        myFunction();
    });
    
    async function myFunction(){
        try {
            let req = await fetch(`${url}/users`)
            let res = await req.json();
            checkCredential(res);
        } catch (error) {
            console.log(error);
        }
    }

    function checkCredential(data){
        let enterEmail = document.querySelector("#email").value;
        let enterpass = document.querySelector("#password").value;
        let flag = false;
        data.forEach((el)=>{
            if(el.email == enterEmail && el.pass==enterpass){
                flag = true;
            }
        })
        if(flag==true){
            window.location.assign("./index.html");
        }else{
            alert("Wrong Credentials")
        }
    }


    let strtbtn=document.getElementById("startorder");
    strtbtn.addEventListener('click',()=>{
        window.location.href="./menu.html"
    })