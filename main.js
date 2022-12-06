// console.log([document])
// console.log(document.body.children[0])


// console.log([document.getElementById("title")])
// console.log(document.getElementById("nav"))

// console.log(document.getElementsByTagName("a"))

// console.log(document.querySelectorAll("a[href='#']"))

const title = document.getElementById("title")

// console.log(title.classList)

title.classList.add("text-white", "text-center")

const main = document.querySelector("main")
// main.classList.add("backgroundColor")

const nav = document.getElementById("nav")
// nav.style.backgroundColor = "green"

// const div = document.createElement("div")
// div.className = "text-danger border border-black"
// div.textContent = "Este es el nuevo div"

// const div2 = document.createElement("div")
// div2.className = "text-danger border border-black"
// div2.textContent = "Este es el nuevo div hijo del div"

// main.appendChild(div)
// div.appendChild(div2)

let mentores = ["Lucre", "Nico", "Flor", "Kevin", "Cami", "Igna", "Eric"]

const lista = document.getElementById("lista")

const fragment = document.createDocumentFragment()
let divMentores = document.createElement("div")

for ( let mentor of mentores ) {
    let li = document.createElement("li")
    li.textContent = mentor
    // console.log(li)
    fragment.appendChild(li)
}

lista.appendChild(fragment)

// for (let mentor of mentores) {
//     console.log(mentor)
//     lista.innerHTML += "<li>" + mentor + "</li>"
// }

// let sectionMentores = document.getElementById("contenedorMentores")



// for ( let mentor of mentores ) {
//     let p = document.createElement("p")
//     p.textContent = mentor
//     console.log(p)
//    divMentores.appendChild(p)
//    console.log(divMentores)
// }

// sectionMentores.appendChild(divMentores)



console.log(data)

//mostrar en el html un div con nombre y nombre completo de cada provincia

let sectionProvincias = document.getElementById("provincias")
let fragmentProvincias = document.createDocumentFragment()


for (let provincia of data.provincias) {
    let divProvincias = document.createElement("div")
    divProvincias.classList.add("border", "border-black")
    let pNombreProvincia = document.createElement("p")
    pNombreProvincia.textContent = provincia.nombre
    let pNombreCompleto = document.createElement("p")
    pNombreCompleto.textContent = provincia.nombre_completo
    // console.log(pNombreCompleto, pNombreProvincia)
    divProvincias.append(pNombreProvincia, pNombreCompleto)
    // fragmentProvincias.appendChild(pNombreCompleto)
    // fragmentProvincias.appendChild(pNombreProvincia)
    fragmentProvincias.appendChild(divProvincias)
}

sectionProvincias.appendChild(fragmentProvincias)