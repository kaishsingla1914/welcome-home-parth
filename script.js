const slider = document.getElementById("loveSlider");
const label = document.getElementById("sliderLabel");
const enterBtn = document.getElementById("enterBtn");

const landing = document.getElementById("landing");
const home = document.getElementById("home");

const texts = [
"A Lot 😊",
"Too Much 😍",
"More Than Pizza 🍕",
"Infinite ♾️❤️"
];

home.style.display = "none";

slider.addEventListener("input", () => {

label.textContent = texts[slider.value];

createHeart();

if(slider.value == 2){
for(let i=0;i<6;i++){
createPizza();
}
}

if(slider.value == 3){

document.querySelector(".landing-card")
.classList.add("glow");

for(let i=0;i<20;i++){
createHeart();
}

enterBtn.disabled = false;
enterBtn.innerHTML = "Enter My World ❤️";
}
});

enterBtn.addEventListener("click",()=>{

landing.style.display = "none";

home.style.display = "flex";
home.classList.add("active");

});

function createHeart(){

const heart = document.createElement("div");

heart.className = "heart";

heart.innerHTML = "❤️";

heart.style.left =
Math.random()*window.innerWidth+"px";

heart.style.bottom = "0px";

document.body.appendChild(heart);

setTimeout(()=>{
heart.remove();
},3000);
}

function createPizza(){

const pizza = document.createElement("div");

pizza.className = "pizza";

pizza.innerHTML = "🍕";

pizza.style.left =
Math.random()*window.innerWidth+"px";

pizza.style.bottom = "0px";

document.body.appendChild(pizza);

setTimeout(()=>{
pizza.remove();
},3000);
}

document.querySelectorAll(".menu-card")
.forEach(card=>{

card.addEventListener("click",()=>{

home.style.display="none";

document.getElementById(
card.dataset.page
).style.display="flex";

});

});

document.querySelectorAll(".backBtn")
.forEach(btn=>{

btn.addEventListener("click",()=>{

document.querySelectorAll(".page")
.forEach(page=>{

page.style.display="none";

});

home.style.display="flex";

});

});

document.querySelector(".openVoiceNotes")?.addEventListener("click",()=>{

    document.querySelectorAll(".page").forEach(page=>{

        page.style.display="none";

    });

    document.getElementById("voiceNotes").style.display="flex";

});

document.querySelector(".voiceBack")?.addEventListener("click",()=>{

    document.querySelectorAll(".page").forEach(page=>{

        page.style.display="none";

    });

    document.getElementById("safe").style.display="flex";

});

document.querySelector(".openDemotivated")?.addEventListener("click",()=>{

    document.querySelectorAll(".page").forEach(page=>{

        page.style.display="none";

    });

    document.getElementById("demotivated").style.display="flex";

});

document.querySelector(".demoBack")?.addEventListener("click",()=>{

    document.querySelectorAll(".page").forEach(page=>{

        page.style.display="none";

    });

    document.getElementById("safe").style.display="flex";

});

document.querySelector(".openMissMe")?.addEventListener("click",()=>{

    document.querySelectorAll(".page").forEach(page=>{

        page.style.display="none";

    });

    document.getElementById("missMe").style.display="flex";

});

document.querySelector(".missBack")?.addEventListener("click",()=>{

    document.querySelectorAll(".page").forEach(page=>{

        page.style.display="none";

    });

    document.getElementById("safe").style.display="flex";

});

document.querySelector(".openUnloved")?.addEventListener("click",()=>{

    document.querySelectorAll(".page").forEach(page=>{

        page.style.display="none";

    });

    document.getElementById("unloved").style.display="flex";

});

document.querySelector(".unlovedBack")?.addEventListener("click",()=>{

    document.querySelectorAll(".page").forEach(page=>{

        page.style.display="none";

    });

    document.getElementById("safe").style.display="flex";

});

document.querySelector(".openAngry")?.addEventListener("click",()=>{

    document.querySelectorAll(".page").forEach(page=>{

        page.style.display="none";

    });

    document.getElementById("angry").style.display="flex";

});

document.querySelector(".angryBack")?.addEventListener("click",()=>{

    document.querySelectorAll(".page").forEach(page=>{

        page.style.display="none";

    });

    document.getElementById("safe").style.display="flex";

});

document.querySelector(".openBadDay")?.addEventListener("click",()=>{

    document.querySelectorAll(".page").forEach(page=>{

        page.style.display="none";

    });

    document.getElementById("badDay").style.display="flex";

});

document.querySelector(".badDayBack")?.addEventListener("click",()=>{

    document.querySelectorAll(".page").forEach(page=>{

        page.style.display="none";

    });

    document.getElementById("safe").style.display="flex";

});
