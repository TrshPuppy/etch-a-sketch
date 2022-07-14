
let canvas;
function generateCanvas(n)
{
    canvas = document.querySelector('.canvas');
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
let selectedDimension = 4;
let button16 = document.querySelector('#sixteen');
button16.addEventListener('click', () =>
{
    selectedDimension = 16;
    generateCanvas(selectedDimension);
});

let button32 = document.querySelector('#thirty-two');
button32.addEventListener('click', () =>
{
    selectedDimension = 32;
    generateCanvas(selectedDimension);
});

let button64 = document.querySelector('#sixty-four');
button64.addEventListener('click', () =>
{
    selectedDimension = 64;
    generateCanvas(selectedDimension);
})

let button128 = document.querySelector('#one-twenty-eight');
button128.addEventListener('click', () =>
{
    selectedDimension = 128;
    generateCanvas(selectedDimension);
})

generateCanvas(selectedDimension);

function resetCanvas(dimension)
{
    generateCanvas(dimension);
}