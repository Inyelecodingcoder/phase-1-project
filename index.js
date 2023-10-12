document.addEventListener('DOMContentLoaded', ()=> {
    
    fetch('https://isro.vercel.app/api/spacecrafts')
    .then(res => res.json())
    .then(spacecrafts => { 
    let spacecraftdiv = document.querySelector('#spacecraftdiv')
    let newDiv = document.createElement('div')
    newDiv.className = 'newDiv'

    let buttonName =  document.createElement('button')
    buttonName.className = 'btnname'
    buttonName.textContent = 'Spacecrafts Names'
    newDiv.appendChild(buttonName)
    let listDiv = document.createElement('div')
    buttonName.addEventListener('click', () => {

        let ul = document.createElement('ul')
    ul.innerHTML = `
    <li>${spacecrafts.spacecrafts[0].name}</li>
      <li>${spacecrafts.spacecrafts[1].name}</li>
      <li>${spacecrafts.spacecrafts[2].name}</li>
      <li>${spacecrafts.spacecrafts[3].name}</li>
     <li> ${spacecrafts.spacecrafts[4].name}</li>
    `
    buttonName.appendChild(listDiv)
    listDiv.appendChild(ul)
       document.getElementsByTagName(ul)
       
    })