// // Create x16 divs on DOM load:
let canvas = document.querySelector('#canvas');

canvas.style.gridTemplateColumns = "repeat(16, 1fr)";
canvas.style.gridTemplateRows = "repeat(16, 1fr)";

for(let i = 0; i < 256; i++)
{
    let pixel = document.createElement('div');
    pixel.style.backgroundColor = "blue";
    canvas.insertAdjacentElement('beforeend', pixel);
}














// var containerDiv = document.getElementById('grid-container');

// document.addEventListener('DOMContentLoaded', function() 
// {
//     for(let i = 0; i < 256; i++)
//     {
//         var div = document.createElement('div');
//         div.id = 'container';
//         div.innerHTML = 'hi!';
//         containerDiv.appendChild(div);
//     }
// });

// // console.log(containerDiv);
// // // Create nodelist of divBoxes created on DOM load:
// // const divBoxes = containerDiv.childNodes;
// // console.log(divBoxes);

// // // Convert nodelist to array
// // const DBOXESARRAY= Array.prototype.slice.call(divBoxes);
// // console.log(DBOXESARRAY);

// // // Add event listener to boxes:
// // // divBoxes.forEach(dBox => 
// // // {
// // //     dBox.addEventListener('click', e =>
// // //     {
// // //         console.log('click');
// // //         console.log(e);
// // //     });
// // // });



