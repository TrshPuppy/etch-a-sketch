// // Create x16 divs on DOM load:
let canvas = document.querySelector('#canvas');

canvas.style.gridTemplateColumns = "repeat(16, 1fr)";
canvas.style.gridTemplateRows = "repeat(16, 1fr)";

for(let i = 0; i < 256; i++)
{
    let pixel = document.createElement('div');
    pixel.style.backgroundColor = "grey";
    canvas.insertAdjacentElement('beforeend', pixel);

    pixel.addEventListener('mouseover', () =>
    {
        pixel.style.backgroundColor = "black";
    });
}

// // Some things I need:
// - canvas dimensions (input)
// - color of pen (input/button)
// - reset function (reset button)
