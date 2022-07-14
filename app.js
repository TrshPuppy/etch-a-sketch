

function generateCanvas(n)
{
    let canvas = document.querySelector('.canvas');
    let pixels = canvas.querySelectorAll('div');
    pixels.forEach((div) => div.remove());
    canvas.style.gridTemplateColumns = "repeat(" + n +", 1fr)";
    canvas.style.gridTemplateRows = "repeat(" + n +", 1fr)";

    //update selected color when button presed:
    let colorChoice = 'black';
    let redButton = document.querySelector('#red-btn');
    redButton.addEventListener('click', () =>
    {
        colorChoice = 'red';
    });

    let blueButton = document.querySelector('#blue-btn');
    blueButton.addEventListener('click', () =>
    {
        colorChoice = 'blue';
    });

    let blackButton = document.querySelector('#black-btn');
    blackButton.addEventListener('click', () =>
    {
        colorChoice = 'black';
    });

    let whiteButton = document.querySelector('#white-btn');
    whiteButton.addEventListener('click', () =>
    {
        colorChoice = 'white';
    });

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

let selectedDimension = 4;

generateCanvas(selectedDimension);

function resetCanvas(dimension)
{
    generateCanvas(dimension);
}