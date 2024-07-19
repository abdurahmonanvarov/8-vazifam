

function getData(user, flag){
    return `<div id="cover">
             <img src="${flag}" alt="Flag of  ${user.country} "width = "50" higth = "30">
            <p>Country:  ${user.country}</p>
            <p>Code:  ${user.code}</p>
            <p>ID:   ${user.id}</p>
        </div>`;
}
const cover = document.querySelector('#wrapper');
const lod = document.querySelector('#loding')

 
document.addEventListener('DOMContentLoaded', function(){
    fetch(" https://cars-pagination.onrender.com/all-countries/",)
       .then(function(respons){
        if(respons.status == 200){
            return respons.json()
        }
       })
       .then(data => {
        data.length && data.forEach(function(el){
            let card = getData(el)
            cover.innerHTML += card
        })
       })
       .catch(err => {
        console.log(err);
       })
       .finally(function(){
        lod.remove()
       })
})




