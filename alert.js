function message(string){

try{
document.querySelector("#alert").remove();
document.querySelector("#alertify").remove();
}
catch(error){

}
              document.body.innerHTML += `<div id="alert" onclick='document.querySelector("#alert").style.display = "none";document.querySelector("#alertify").style.display = "none"' style="height:100vh;width:100%;position:fixed;top:0px;left:0px;background-color:rgba(0,0,0,0.6);z-index:80;"></div>
        <div id="alertify" style="max-width:80%;min-height:80px;max-height:400px;overflow:auto;border-radius:10px;padding:10px;background-color:white;position:fixed;top:60px;left:10%;right:10%;display:block;margin:auto;word-wrap:break-word;font-size:20px;box-shadow:2px 2px 10px grey;animation:popup 0.4s 1;z-index:100;">`+string+`<button style="margin:20px;position:sticky;float:right;padding:10px;bottom:10px;right:20px;border:none;border-radius:4px;" onclick='document.querySelector("#alert").style.display = "none";document.querySelector("#alertify").style.display = "none"'>OK</button></div>`
}
window.onload = function(){
document.querySelector("head").innerHTML += `<style></style>`
    document.querySelector("style").innerHTML += `
body {
    height:100vh;
    width:100%;
    padding:0px;
    margin:0px;
}
@keyframes popup{
    0%{
        transform:scale(0.8);
    }
    60%{
        transform:scale(1.12);
    }
    100%{
        transform:scale(1);
    }
}
`;
}
