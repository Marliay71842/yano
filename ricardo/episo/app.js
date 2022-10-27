const apiRicardo=async(pagina)=>{
let url="https://rickandmortyapi.com/api/episode/?page="+pagina;
const api= await fetch(url);
const data= await api.json();
console.log(data);
divRes=document.querySelector("#resultado")
divRes.innerHTML=""
data.results.map(item=>{
divItem=document.createElement(`div`)
divItem.innerHTML=`
<div class="card" style="width: 18rem;">
  
  <div class="card-body">
    <h5 class="card-title">${item.name}</h5>
      <h5 class="card-title">${item.air_date}</h5>
      <h5 class="card-title">${item.episode}</h5>
      
  </div>
</div>
`


divRes.appendChild(divItem);
});
}
apiRicardo(1);