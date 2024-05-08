// const inputBox = document.querySelector("input-box")
// const listContainer = document.querySelector("list")

// const inputBox = document.querySelector("input-box")
// const listContainer = document.querySelector("List")
// function addTask() {
//     if (inputBox.value === '') {
//         alert("you Must Write SOmething")
//     } else {
//         let li = document.createElement('li')
//         li.innerHTML = inputBox.value
//         listContainer.appendChild(li)
//         let span = document.createElement('span')
//         span.innerHTML = '\u00d7'
//         li.appendChild(span)
//     }
//     inputBox.value = "";
// }
// listContainer.addEventListener( "click",   function  (e) {
//     if (e.target.tagName === "LI") {
//         e.target.classList.toggle("Checked")
//     } else  if (e.target.tagName === "Span") {
//         e.target.parentElement.remove();
//     }
        
    
// },false
// )
// addTask()
// inputBox.addEventListener(
//     "keyup",
//     function  (event) {
//         if (event.key == "Enter") {
//             console.log(this.value);
//         }
//     }
//  )
// const inputBox = document.getElementById("input-box")
// const listContainer = document.getElementById("li")

// function addTask() {
//     if (inputBox.value === '') {
//         alert("Do you write some thing!");
//     }
//     else {
//         let li = document.createElement("li");
//         li.innerHTML = inputBox.value;
//         listContainer.appendChild(li);
//         let span = document.createElement("span")
//         span.innerHTML = '\u00d7'
//         listContainer.appendChild(span)
        
//     }
//     inputBox.value = "";
// }
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list");

// function addTask() {
//     if (inputBox.value === '') {
//         alert("Please enter something!");
//     } else {
//         let li = document.createElement("li");
//         li.textContent = inputBox.value;
        
//         let span = document.createElement("span");
//         span.textContent = '\u00d7';
//         span.className = "close";
        
//         li.appendChild(span); // Append span inside li
        
//         listContainer.appendChild(li);
        
//         // Add functionality to remove the task
//         span.onclick = function() {
//             li.style.display = "none";
//         }
//     }
//     inputBox.value = "";
// }

// function addTask() {
//     if (inputBox.value === '') {
//         alert("do you Write SomeThing")
//     } else {
//         let li = document.createElement("li")
//         li.textContent = inputBox.value
//         let span = document.createElement("span")
//         span.textContent = "\u00d7"
//         span.className = "close"
//         li.appendChild(span)
//         listContainer.appendChild(li);

//         span.onclick = function() {
//       li.style.display = "none"
//     }
//     }
   
//     inputBox.value = "";
// }
function addTask() {
    if (inputBox.value === '') {
        alert("do you write some thing")
    } else {
        let li = document.createElement("li")
        li.textContent = inputBox.value
        let span = document.createElement("span")
        span.textContent = "\u00d7"
        // span.className = "close"
        li.appendChild(span)
        listContainer.appendChild(li)

        span.onclick = function () {
            li.style.display = "none"
        }
    }
    inputBox.value = "";
}