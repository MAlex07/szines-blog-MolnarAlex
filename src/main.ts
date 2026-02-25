import './style.css'
import { Bejegyzes } from './Bejegyzés'




function megjelenit(){
  

  const cim = document.getElementById("postTitle") as HTMLInputElement;
  const postCim = cim.value;
  const tartalom = document.getElementById("postContent") as HTMLInputElement;
  const postTartalom = tartalom.value;
  const szin = document.getElementById("postColor") as HTMLInputElement;
  const postSzin = szin.value;
  const gomb = document.getElementById("elkuld") as HTMLInputElement;


  gomb.addEventListener("submit", (e) => {
    e.preventDefault()
    const postArticle = document.createElement("article");
    postArticle.style = postSzin;
    const posth2 = document.createElement("h2");
    posth2.textContent = postCim;
    const postP = document.createElement("p");
    postP.textContent = postTartalom;
    const postMain = document.getElementById("posts");

    postArticle.appendChild(posth2);
    postArticle.appendChild(postP);
    postMain?.appendChild(postArticle);
  })

 


}




document.addEventListener("DOMContentLoaded", () =>{
  const bejegyzes = new Bejegyzes("Elso bejegyzés", "bejegyzés tertalma", "#0000ff")
  megjelenit()
})