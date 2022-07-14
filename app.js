//Default variables:
let selectedDimension = 4;
let colorChoice = 'black';

function generateCanvas(n)
{
    let canvas = document.querySelector('.canvas');
    let pixels = canvas.querySelectorAll('div');
    pixels.forEach((div) => div.remove());
    canvas.style.gridTemplateColumns = "repeat(" + n +", 1fr)";
    canvas.style.gridTemplateRows = "repeat(" + n +", 1fr)";

    let amount = n * n;
    for(let i = 0; i < amount; i++)
    {
        let pixel = document.createElement('div');
        pixel.style.backgroundColor = "white";
        canvas.insertAdjacentElement('beforeend', pixel);

        pixel.addEventListener('mouseover', () =>
        {
            pixel.style.backgroundColor = colorChoice;
        });
    }

    //Call to reset function:
    let resetButton = document.querySelector('#reset-btn');
    resetButton.addEventListener('click', () =>
    {
        resetCanvas(selectedDimension);
    });
}

//update selected color when button presed:
const colorOptions = document.querySelectorAll('[data-color]');
    
colorOptions.forEach(option => 
    {
        option.addEventListener('click', e =>
        {
            colorChoice = option.dataset.color;
        });
    });

// Update selected dimension when button pressed:
const dimensionOptions = document.querySelectorAll('[data-selection]');
dimensionOptions.forEach(option => 
    {
        option.addEventListener('click', e =>
        {
            selectedDimension = parseInt(option.dataset.selection);
            resetCanvas(selectedDimension);
        });
    });


generateCanvas(selectedDimension);

function resetCanvas(dimension)
{
    generateCanvas(dimension);
}