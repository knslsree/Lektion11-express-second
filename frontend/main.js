async function getAllBands() {
//Fetch all data from the rest API
const response = await fetch('http://localhost:3000/bands');

//convert data to JSON
const data = await response.json();
//Display the data
showBands(data);
}


function showBands(bands){
    //create html for each band
let html = ' ';
for(let {name,genre} of bands) {
    html+= `<p> ${name} - ${genre} </p>`;
}
// Show html in browser
document.querySelector('#bands').innerHTML = html;

}
async function addBand(){
    //Attach event listener to form
    document.getElementById('bandForm').addEventListener('submit',async(event)=>{
        //Prevent default behaviour of form
        event.preventDefault();
    })
}
getAllBands();

