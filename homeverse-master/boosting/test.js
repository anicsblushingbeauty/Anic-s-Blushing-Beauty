let name = prompt("enter your name");
let fName = name.trim().toLowerCase();
console.log(name.length)
console.log(fName.length);

document.addEventListener('readystatechange', (event) => {
    if(event.target.readyState === "complete"){
        console.log('page load ready');
    }
})

for(let i = 0; i <= fName.length; i++){
    console.log(fName.charAt(i));
}

const view = document.querySelector('#view');

const createDiv = (parent, iter) => {
    let newDiv = document.createElement('div');
    newDiv.style.display = 'flex';
    newDiv.textContent = iter;
    newDiv.style.justifyContent = 'center';
    newDiv.style.alignItems = 'center';
    newDiv.style.backgroundColor = 'blue';
    newDiv.style.width = '100px';
    newDiv.style.height = '100px';
    parent.append(newDiv);
}

createDiv(view, fName);