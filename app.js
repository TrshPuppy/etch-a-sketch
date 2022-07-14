
let canvas;
function generateCanvas(n)
{
    canvas = document.querySelector('.canvas');
    let pixels = canvas.querySelectorAll('div');
    pixels.forEach((div) => div.remove());
    console.log(n);
    canvas.style.gridTemplateColumns = "repeat(" + n +", 1fr)";
    canvas.style.gridTemplateRows = "repeat(" + n +", 1fr)";

    let amount = n * n;
    for(let i = 0; i < amount; i++)
    {
        let pixel = document.createElement('div');
        pixel.style.backgroundColor = "grey";
        canvas.insertAdjacentElement('beforeend', pixel);

        pixel.addEventListener('mouseover', () =>
        {
            pixel.style.backgroundColor = "black";
        });
    }
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


generateCanvas(selectedDimension);


// // Some things I need:
// - canvas dimensions (input)
// - color of pen (input/button)
// - reset function (reset button)
