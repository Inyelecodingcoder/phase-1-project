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
    spacecraftdiv.appendChild(newDiv)
      let lastDiv = document.createElement('form')
      lastDiv.innerHTML = `
      <form>
      <input id='input' placeholder='Comment'/>
      <input type='submit' value='Add comment'/>
      </form>
      `
      newDiv.appendChild(lastDiv)
      let form = document.querySelector('form')
      console.log(form)
      form.addEventListener('submit', (e)=>{
        e.preventDefault()
        let formValue = e.target.input.value
        let p = document.createElement('p')
        p.textContent = formValue
        lastDiv.appendChild(p)

    })
})  
})

document.addEventListener('DOMContentLoaded', () => {
    fetch('https://isro.vercel.app/api/centres')
    .then(res => res.json())
    .then(centres => { 
        let body = document.querySelector('body')
        let launchersdiv = document.createElement('div')
        let launchersButton = document.createElement('button')
        launchersButton.className = 'launchersbtn'
        launchersButton.textContent = 'Launchers'

        body.appendChild(launchersdiv)
        launchersdiv.appendChild(launchersButton)
        
        let centresDiv = document.createElement('div')
        
        launchersButton.appendChild(centresDiv)
        launchersButton.addEventListener('click', () => {
            let ul2 = document.createElement('ul')
            ul2.className = 'centreslist'
    ul2.innerHTML = `
    <li>${centres.centres[0].name}</li>
         <li>${centres.centres[1].name}</li>
         <li>${centres.centres[2].name}</li>