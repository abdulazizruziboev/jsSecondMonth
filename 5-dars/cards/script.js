const stylesTg = document.createElement("style");
stylesTg.textContent = `@import url('https://fonts.googleapis.com/css2?family=Big+Shoulders:opsz,wght@10..72,100..900&family=Chewy&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Lexend+Deca:wght@100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&display=swap');@import url('https://fonts.googleapis.com/css2?family=Big+Shoulders:opsz,wght@10..72,100..900&family=Chewy&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Lexend+Deca:wght@100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&display=swap');
";`
document.head.append(stylesTg); 
document.body.style.cssText = `
display:flex;
justify-content: center;
align-items: center;
width: 100%; height: 100vh;
margin: 0;
padding: 0;
box-sizing: border-box;
`;
const box = document.createElement("div");
box.style = `
display: flex; box-sizing: border-box;
`;
//////////////////////////////////////////////////
const cardOne = document.createElement("div");
const cardTwo = document.createElement("div");
const cardThree = document.createElement("div");
cardOne.classList.add("card");
cardTwo.classList.add("card");
cardThree.classList.add("card");
//////////////////////////////////////////////////
const cardOneGrp = document.createElement("div");
const cardOneImg = document.createElement("img");
cardOneImg.src="./carOne.svg";
const cardOneTitle = document.createElement("h2");
cardOneTitle.textContent = "sedans".toUpperCase();
const cardOneText = document.createElement("p");
cardOneText.textContent = "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.";
const cardOneLink = document.createElement("a");
cardOneLink.href="#";
cardOneLink.textContent="Learn More";
cardOneGrp.append(cardOneImg,cardOneTitle,cardOneText)
cardOne.append(cardOneGrp,cardOneLink);
//////////////////////////////////////////////////
const cardTwoGrp = document.createElement("div");
const cardTwoImg = document.createElement("img");
cardTwoImg.src="./carTwo.svg";
const cardTwoTitle = document.createElement("h2");
cardTwoTitle.textContent = "suvs".toUpperCase();
const cardTwoText = document.createElement("p");
cardTwoText.textContent = "Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.";
const cardTwoLink = document.createElement("a");
cardTwoLink.href="#";
cardTwoLink.textContent="Learn More";
cardTwoGrp.append(cardTwoImg,cardTwoTitle,cardTwoText)
cardTwo.append(cardTwoGrp,cardTwoLink);
//////////////////////////////////////////////////
const cardThreeGrp = document.createElement("div");
const cardThreeImg = document.createElement("img");
cardThreeImg.src="./carThree.svg";
const cardThreeTitle = document.createElement("h2");
cardThreeTitle.textContent = "luxury".toUpperCase();
const cardThreeText = document.createElement("p");
cardThreeText.textContent = "Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.";
const cardThreeLink = document.createElement("a");
cardThreeLink.href="#";
cardThreeLink.textContent="Learn More";
cardThreeGrp.append(cardThreeImg,cardThreeTitle,cardThreeText)
cardThree.append(cardThreeGrp,cardThreeLink);
//////////////////////////////////////////////////
cardOneGrp.style.cssText = `
display:flex;gap:30px;
flex-direction:column;
`;
cardOne.style.cssText = `
max-width: 310px;
width: 100%;
min-height: 500px;
height: auto;
background: #E28625;
color: #fff;
padding: 47.5px 47.5px;
display: flex;
flex-direction: column;
box-sizing:border-box;
margin:0;
justify-content: space-between;
`;
cardOneImg.style.cssText = `
width: 64px;
height: 40px;
margin:0;
`
cardOneTitle.style.cssText = `
font-size: 40px;
font-family: 'Big Shoulders',sans-serif;
margin:0;
`;
cardOneText.style.cssText = `
font-size: 15px;
font-family: 'Lexend Deca',sans-serif;
margin:0;
line-height: 150%;
`;
cardOneLink.style.cssText = `
font-size: 15px;
background: #fff;
text-decoration: none;
font-family: 'Lexend Deca',sans-serif;
border-radius: 50px;
display: flex;
align-items: center;
justify-content: center;
max-width: 146px;
height: 48px;
box-sizing:border-box;
color: #e28625;
margin:0;
transition: all 0.5s ease-in-out;
border: 2px solid #fff;
`;
///////////////////////////////////////
cardTwoGrp.style.cssText = `
display:flex;gap:30px;
flex-direction:column;
`;
cardTwo.style.cssText = `
max-width: 310px;
width: 100%;
min-height: 500px;
height: auto;
background: #006971;
color: #fff;
padding: 47.5px 47.5px;
display: flex;
flex-direction: column;
box-sizing:border-box;
margin:0;
justify-content: space-between;
`;
cardTwoImg.style.cssText = `
width: 64px;
height: 40px;
margin:0;
`
cardTwoTitle.style.cssText = `
font-size: 40px;
font-family: 'Big Shoulders',sans-serif;
margin:0;
`;
cardTwoText.style.cssText = `
font-size: 15px;
font-family: 'Lexend Deca',sans-serif;
margin:0;
line-height: 150%;
`;
cardTwoLink.style.cssText = `
font-size: 15px;
background: #fff;
text-decoration: none;
font-family: 'Lexend Deca',sans-serif;
border-radius: 50px;
display: flex;
align-items: center;
justify-content: center;
max-width: 146px;
height: 48px;
box-sizing:border-box;
color: #006971;
margin:0;
border: 2px solid #fff;
`;
//////////////////////////////////////////
cardThreeGrp.style.cssText = `
display:flex;gap:30px;
flex-direction:column;
`;
cardThree.style.cssText = `
max-width: 310px;
width: 100%;
min-height: 500px;
height: auto;
background: #004140;
color: #fff;
padding: 47.5px 47.5px;
display: flex;
flex-direction: column;
box-sizing:border-box;
margin:0;
justify-content: space-between;
`;
cardThreeImg.style.cssText = `
width: 64px;
height: 40px;
margin:0;
`
cardThreeTitle.style.cssText = `
font-size: 40px;
font-family: 'Big Shoulders',sans-serif;
margin:0;
`;
cardThreeText.style.cssText = `
font-size: 15px;
font-family: 'Lexend Deca',sans-serif;
margin:0;
line-height: 150%;
`;
cardThreeLink.style.cssText = `
font-size: 15px;
background: #fff;
text-decoration: none;
font-family: 'Lexend Deca',sans-serif;
border-radius: 50px;
display: flex;
align-items: center;
justify-content: center;
max-width: 146px;
height: 48px;
box-sizing:border-box;
color: #004140;
margin:0;
border: 2px solid #fff;
`;
//////////////////////////////////////////////////
cardOneLink.addEventListener("mouseover", ()=> {
cardOneLink.style.cssText = `
font-size: 15px;
text-decoration: none;
font-family: 'Lexend Deca',sans-serif;
border-radius: 50px;
display: flex;
align-items: center;
justify-content: center;
max-width: 146px;
height: 48px;
box-sizing:border-box;
color: #fff;
background: transparent;
margin:0;
opacity: 0.75;
transition: all 0.5s ease-in-out;
border: 2px solid #fff;
`;
});
/////////////////////////////
cardOneLink.addEventListener("mouseout", ()=> {
cardOneLink.style.cssText = `
font-size: 15px;
background: #fff;
text-decoration: none;
font-family: 'Lexend Deca',sans-serif;
border-radius: 50px;
display: flex;
align-items: center;
justify-content: center;
max-width: 146px;
height: 48px;
box-sizing:border-box;
color: #e28625;
margin:0;
transition: all 0.5s ease-in-out;
border: 2px solid #fff;
`;
});
//////////////////////////////////////////////////
//////////////////////////////////////////////////
cardTwoLink.addEventListener("mouseover", ()=> {
cardTwoLink.style.cssText = `
font-size: 15px;
text-decoration: none;
font-family: 'Lexend Deca',sans-serif;
border-radius: 50px;
display: flex;
align-items: center;
justify-content: center;
max-width: 146px;
height: 48px;
box-sizing:border-box;
color: #fff;
background: transparent;
margin:0;
opacity: 0.75;
transition: all 0.5s ease-in-out;
border: 2px solid #fff;
`;
});
/////////////////////////////
cardTwoLink.addEventListener("mouseout", ()=> {
cardTwoLink.style.cssText = `
font-size: 15px;
background: #fff;
text-decoration: none;
font-family: 'Lexend Deca',sans-serif;
border-radius: 50px;
display: flex;
align-items: center;
justify-content: center;
max-width: 146px;
height: 48px;
box-sizing:border-box;
color: #006971;
margin:0;
transition: all 0.5s ease-in-out;
border: 2px solid #fff;
`;
});
//////////////////////////////////////////////////
//////////////////////////////////////////////////
cardThreeLink.addEventListener("mouseover", ()=> {
cardThreeLink.style.cssText = `
font-size: 15px;
text-decoration: none;
font-family: 'Lexend Deca',sans-serif;
border-radius: 50px;
display: flex;
align-items: center;
justify-content: center;
max-width: 146px;
height: 48px;
box-sizing:border-box;
color: #fff;
background: transparent;
margin:0;
opacity: 0.75;
transition: all 0.5s ease-in-out;
border: 2px solid #fff;
`;
});
/////////////////////////////
cardThreeLink.addEventListener("mouseout", ()=> {
cardThreeLink.style.cssText = `
font-size: 15px;
background: #fff;
text-decoration: none;
font-family: 'Lexend Deca',sans-serif;
border-radius: 50px;
display: flex;
align-items: center;
justify-content: center;
max-width: 146px;
height: 48px;
box-sizing:border-box;
color: #004140;
margin:0;
transition: all 0.5s ease-in-out;
border: 2px solid #fff;
`;
});
box.append(cardOne,cardTwo,cardThree);
document.body.append(box);
console.log(box);