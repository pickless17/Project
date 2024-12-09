//javascript to allow user to interact with menu

let hamburger = document.querySelector('#hamburger');

function showNav() {
    document.querySelector('nav ul').classList.toggle('showNav');
}
document.querySelector('#hamburger').addEventListener('click', showNav);



//javascript to load content from json file

let teamvariable = document.querySelector("#team");
let localJsonFile = "projectdata.json";
document.addEventListener('DOMContentLoaded', ()=>{
    fetch(localJsonFile)
    .then(response => response.json())
    .then(responseData =>{
        for (item of responseData){
            const member = document.createElement('article');
			const imageElement = document.createElement('img');
			const heading = document.createElement('h4');
			const para1 = document.createElement('p');
			
			let sectionElement = teamvariable;

			sectionElement.appendChild(member);
			imageElement.src = item.imageURL;
			imageElement.alt = item.alt;
			heading.textContent = item.name;

			para1.textContent = item.content;

			member.appendChild(imageElement);
			member.appendChild(heading);
			member.appendChild(para1);

			member.setAttribute('class', 'members')
    }})
    .catch(error => console.error("Error fetching JSON data:", error));
})

