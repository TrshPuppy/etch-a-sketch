
let canvas;
function generateCanvas(n)
{
    canvas = document.querySelector('.canvas');
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

generateCanvas(16);

// // Some things I need:
// - canvas dimensions (input)
// - color of pen (input/button)
// - reset function (reset button)
