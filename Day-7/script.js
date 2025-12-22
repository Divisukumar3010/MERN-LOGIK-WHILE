const textVisible = document.getElementById("textVisible")
textVisible.textContent = "This is Visible content."

const main = document.getElementById("main")
main.innerHTML = `<h4>This is text in division</h4>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ut, accusamus eum totam facere veritatis placeat harum minus architecto eius impedit tempora illo numquam aut quae omnis itaque quas iusto!</p>
  <img src="../images/Mern.jpeg" alt="">`

const mainDiv = document.getElementById("mainDiv")
const card = document.createElement("div")
card.innerHTML = "<h1>This is the appended text</h1>"
mainDiv.appendChild(card)
card.setAttribute("class","card-class")

const alertBtn = document.getElementById("alertBtn")
alertBtn.addEventListener("click", () => {
  const name = "Sukumar"
  alert(`Hello ${name}`)
})

