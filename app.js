// Create x16 divs on DOM load:
var containerDiv = document.getElementById('grid-container');

document.addEventListener('DOMContentLoaded', function() 
{
    for(let i = 0; i < 256; i++)
    {
        var div = document.createElement('div');
        div.id = 'container';
        div.innerHTML = 'hi!';
        containerDiv.appendChild(div);
    }
});

console.log(containerDiv);
// Create array of divBoxes created on DOM load:
const divBoxes = containerDiv.childNodes;
console.log(divBoxes);




