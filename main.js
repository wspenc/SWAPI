
 let residentsBtn = document.querySelector("#residents-btn");

 const baseURL = "https://swapi.dev"

 residentsBtn.addEventListener('click', () => {
    axios.get(baseURL + "/api/planets/?search=alderaan")
    .then((res) => {
        // console.log(res.data.results[0].residents)
        let residents = res.data.results[0].residents
        for (let i = 0; i < residents.length; i++){
           axios.get(residents[i])
           .then((res) => {
            let residents = res.data.name
            const h2 = document.getElementById("residents-list")
            let residentsList = document.createElement('h2')
            residentsList.textContent = residents
            h2.appendChild(residentsList)
            console.log(res.data.name)
           })
        }
    })
    .catch((err) => {
        console.log(err)
    })
})

// https://swapi.dev/api/planets/?search=alderaan


