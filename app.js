// Create x16 divs on DOM load:
var containerDiv = document.getElementById('grid-container');
document.addEventListener('DOMContentLoaded', function() 
{
    for(let i = 0; i < 16; i++)
    {
        var div = document.createElement('div');
        div.id = 'container';
        div.innerHTML = 'hi!';
        div.className = 'border-pad';

        containerDiv.appendChild(div);
    }
}, false);