async function chiamaAPI(){
    try{    
        let nomeCocktail = document.getElementById("nomeCocktail").value

        let carta = document.getElementById("cocktailTrovati")
        carta.innerHTML = ""
        

        let risposta = await fetch(`https://thecocktaildb.com/api/json/v1/1/search.php?s=${nomeCocktail}`)
        let drinks = await risposta.json()

        for(let i=0; i<drinks.drinks.length; i++){
            let divDrink = document.createElement("div")

            divDrink.innerHTML = `
            <div>
            <div class="card" style="width: 18rem; box-shadow:  18px 18px 45px #121212,
            -18px -18px 45px #303030;">
                <img src="${drinks.drinks[i].strDrinkThumb} " class="card-img-top immagineDrink" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${drinks.drinks[i].strDrink}</h5>
                    <p class="card-text">${drinks.drinks[i].strInstructionsIT}</p>

                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal${i}" style="position: relative;">
                        Mostra dettagli
                    </button> 
                </div>
            </div>
            <!-- Modal -->
            <div class="modal fade classeModal" id="exampleModal${i}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style="max-width: 30%; margin-left: 35%; margin-right: 35%;">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <img class="modal-title fs-5 d-flex justify-content-center" id="exampleModalLabel" src="${drinks.drinks[i].strDrinkThumb}" style="width: 100%; border-radius: 5px" >
                  </div>
                  <div class="modal-body">
                    <h2>Dettagli</h2>
                    <p>${drinks.drinks[i].strInstructionsIT}</p>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-success" data-bs-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>
            </div>
            `
            carta.appendChild(divDrink)

        }
    }catch(error){
        console.error("Drink non trovato")
    }
}
