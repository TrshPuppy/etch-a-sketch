// Create x16 divs on DOM load:
var containerDiv = document.getElementById('grid-container');
document.addEventListener('DOMContentLoaded', function() 
{
    for(let i = 0; i < 256; i++)
    {
        var div = document.createElement('div');
        div.id = 'container';
        div.innerHTML = 'hi!';
        div.className = 'border-pad';

        containerDiv.appendChild(div);
    }
}, false);

// Create pixelated hover event for ea div:
document.addEventListener('mouseover', function()
{
    div.style.color = red;
});