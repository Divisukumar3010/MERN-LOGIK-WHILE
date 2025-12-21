const para = document.getElementById("para")
console.log(para);
para.style.color = "black"
para.style.backgroundColor = "skyblue"
para.style.fontSize = "30px"
para.style.textAlign = "center"
para.style.padding = "10px"
para.style.border = "2px solid black"
para.style.borderRadius = "100px"
para.style.fontFamily = "lucida calligraphy"


const classElement = document.getElementsByClassName("container")
console.log(classElement);
for (let i = 0; i < classElement.length; i++) {
  classElement[i].style.color = "black"
  classElement[i].style.backgroundColor = "pink"
  classElement[i].style.fontSize = "20px"
  classElement[i].style.textAlign = "center"
  classElement[i].style.padding = "10px"
  classElement[i].style.border = "2px solid black"
  classElement[i].style.borderRadius = "100px"
  classElement[i].style.fontFamily = "lucida calligraphy"
  classElement[i].style.marginTop = "10px"
}

const tagElements = document.getElementsByTagName("button")
console.log(tagElements);
for (let i = 0; i < tagElements.length; i++) {
  tagElements[i].style.color = "white"
  tagElements[i].style.backgroundColor = "green"
  tagElements[i].style.fontSize = "15px"
  tagElements[i].style.cursor = "pointer"
  tagElements[i].style.textAlign = "center"
  tagElements[i].style.padding = "10px"
  tagElements[i].style.borderRadius = "20px"
  tagElements[i].style.fontFamily = "lucida calligraphy"
}


document.querySelectorAll(".container1").forEach(element => {
  element.style.color = "black"
  element.style.backgroundColor = "lightgreen"
  element.style.fontSize = "20px"
  element.style.textAlign = "center"
  element.style.padding = "10px"
  element.style.border = "2px solid black"
  element.style.borderRadius = "100px"
  element.style.fontFamily = "lucida calligraphy"
  element.style.marginTop = "10px"
});