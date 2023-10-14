document.addEventListener('DOMContentLoaded', ()=> {
    //fetch the spacecraft names
    fetch('https://isro.vercel.app/api/spacecrafts')
    .then(res => res.json())
    .then(spacecrafts => { 
        //select the div created in html
    let spacecraftdiv = document.querySelector('#spacecraftdiv')
        //create a new div that will have the names button
    let newDiv = document.createElement('div')
    newDiv.className = 'newDiv'
//create the button that will have the names
    let buttonName =  document.createElement('button')
    buttonName.className = 'btnname'
    buttonName.textContent = 'Spacecrafts Names'
        //attach the button to the second div
    newDiv.appendChild(buttonName)
        //create a div that will have the list of names
    let listDiv = document.createElement('div')
        //add an event listener to the button that allows one to see the names after it's clicked
    buttonName.addEventListener('click', () => {
//create a list of the names
        let ul = document.createElement('ul')
    ul.innerHTML = `
    <li>${spacecrafts.spacecrafts[0].name}</li>
      <li>${spacecrafts.spacecrafts[1].name}</li>
      <li>${spacecrafts.spacecrafts[2].name}</li>
      <li>${spacecrafts.spacecrafts[3].name}</li>
     <li> ${spacecrafts.spacecrafts[4].name}</li>
    `
        //attach the list-div to the button
    buttonName.appendChild(listDiv)
        //attach the list to the list-div
    listDiv.appendChild(ul)
       document.getElementsByTagName(ul)
       
    })
        //attach the first div created in this file to the div created in html
    spacecraftdiv.appendChild(newDiv)
         //select like button 
   let nameLikeButton =  document.getElementById('likeButton')
   const likeCount = document.getElementById('likeCount');
let count = 0;
   nameLikeButton.addEventListener( 'click', () =>
  {  count++
    likeCount.innerText = count;
   })
        //create a form that will allow users to comment
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
    //fetch the data of spacecraft centres
    fetch('https://isro.vercel.app/api/centres')
    .then(res => res.json())
    .then(centres => { 
        //select the body element
        let body = document.querySelector('body')
        //create a div that will contain the centres button
        let centresDiv = document.createElement('div')
        //create the centres button
        let centresButton = document.createElement('button')
        centresButton.className = 'centresbtn'
        centresButton.textContent = 'Spacecraft Centres'
//attach the centres div to the body
        body.appendChild(centresDiv)
        //attach the centres button to the centres div
        centresDiv.appendChild(centresButton)
        //create a div that will contain the list of centres
        let centresNamesDiv = document.createElement('div')
        //attach the list to the button
        centresButton.appendChild(centresNamesDiv)
        //add an event listener to the button
        centresButton.addEventListener('click', () => {
            //create a list of the names
            let ul2 = document.createElement('ul')
            ul2.className = 'centreslist'
    ul2.innerHTML = `
    <li>${centres.centres[0].name}</li>
         <li>${centres.centres[1].name}</li>
         <li>${centres.centres[2].name}</li>
         <li>${centres.centres[3].name}</li>
         <li>${centres.centres[4].name}</li>
    `
            //attach the list to the list div
    centresNamesDiv.appendChild(ul2)

        })
        //create a form that will allow one to comment
        let centresFormDiv = document.createElement('form')
        centresFormDiv.innerHTML = `
        <form>
        <input id='input' placeholder='Comment'/>
        <input type='submit' value='Add comment'/>
        </form>
        `
        centresDiv.appendChild(centresFormDiv)
      let form = document.querySelector('form')
      form.className = 'centresform'
      console.log(form)
      form.addEventListener('submit', (e)=>{
      e.preventDefault()
      let centresFormValue = e.target.input.value
      let p = document.createElement('p')
      p.textContent = centresFormValue
      centresFormDiv.appendChild(p)
    })

        //create a div that will have the centres like button
    let form2Div = document.createElement('div')
    form2Div.setAttribute('id', 'form2Div')
    //create the centres like button
    let centresLikeButton = document.createElement('button')
    centresLikeButton.textContent = 'Like'
    centresLikeButton.setAttribute('id', 'likeButton2')
    
    
   
    let span2 = document.createElement('span')
    span2.setAttribute('id', 'likeCount2')
    
    const likeNumbers = 0
    span2.textContent = likeNumbers
    
    let count2 = 0
    centresLikeButton.addEventListener('click', () => {
  count2++
  likeCount2.innerText = count2;
    })
    //attach the button to the centres like button div
    form2Div.appendChild(centresLikeButton)
    form2Div.appendChild(span2)
    //attach the div to the body
    body.appendChild(form2Div)
})
})
