const newAccount=document.querySelector("#newAccount");
fetch('/newAccount.html')
.then(res=>res.text())
.then(data=>{
    newAccount.innerHTML=data;
})