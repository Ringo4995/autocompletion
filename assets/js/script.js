const input = document.querySelector("#area input");
const result = document.querySelector("#result");
const affiche = document.querySelector("#image");

input.addEventListener("keyup", () => {
    result.innerHTML = "";
    console.log(input.value);
    if (input.value.length > 1) {
        //fetch contact une page du serveur à laquelle je peux envoyer des données sous forme de variables "GET" ici search=elephant
        fetch("./assets/inc/search.php?search=" + input.value)
            // 1ere étape transformer la réponse de la page contactée au format voulu (text() ou json())
            .then((response) => {
                return response.json()
            })
            .then((valeur) => {
                console.dir(valeur);
                // valeur sera un tableau d'objet(s)
                valeur.forEach(element => {
                    result.innerHTML += `
                    <div class="card">
                        <div class="cardcontent">
                            <h3>${element.title}</h3>
                            <p>${element.plot}</p>
                            <p>${element.cast}</p>
                            <p>${element.directors}</p>
                            <p>${element.year}</p>
                        </div>
                        <div>
                            <img src="./assets/img/posters/posters/${element.id_movie}.jpg" alt="">
                        </div>
                    </div>`;
                });
            })
    }
})