/* ===========================================================
        RoProfile Website
        Developed by Ryix
===========================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /* ===========================================
                    LOADER
    =========================================== */

    const loader = document.querySelector(".loader");

    if(loader){

        window.addEventListener("load", () => {

            setTimeout(() => {

                loader.classList.add("hidden");

            }, 500);

        });

    }

    /* ===========================================
                SCROLL REVEAL
    =========================================== */

    const revealElements = document.querySelectorAll(

        ".card, .stats div, .preview, .faq-box, .hero-left, .hero-right"

    );

    const revealObserver = new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }

        });

    },{

        threshold:.15

    });

    revealElements.forEach(el=>{

        el.classList.add("reveal");

        revealObserver.observe(el);

    });

    /* ===========================================
                    FAQ
    =========================================== */

    const faq = document.querySelectorAll(".faq-box");

    faq.forEach(box=>{

        box.querySelector("h3").addEventListener("click",()=>{

            faq.forEach(other=>{

                if(other!==box){

                    other.classList.remove("active");

                }

            });

            box.classList.toggle("active");

        });

    });

    /* ===========================================
                BACK TO TOP
    =========================================== */

    const topButton = document.createElement("button");

    topButton.id="topButton";

    topButton.innerHTML="↑";

    document.body.appendChild(topButton);

    window.addEventListener("scroll",()=>{

        if(window.scrollY>500){

            topButton.classList.add("show");

        }else{

            topButton.classList.remove("show");

        }

    });

    topButton.addEventListener("click",()=>{

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

    /* ===========================================
            NAVBAR BACKGROUND
    =========================================== */

    const navbar=document.querySelector(".navbar");

    window.addEventListener("scroll",()=>{

        if(window.scrollY>80){

            navbar.style.background="rgba(13,17,23,.92)";

            navbar.style.borderBottom="1px solid rgba(255,255,255,.08)";

        }else{

            navbar.style.background="rgba(13,17,23,.70)";

            navbar.style.borderBottom="1px solid rgba(255,255,255,.05)";

        }

    });

    /* ===========================================
                BUTTON RIPPLE
    =========================================== */

    const buttons=document.querySelectorAll(

        ".button-primary,.button-secondary,.invite-btn"

    );

    buttons.forEach(button=>{

        button.addEventListener("click",(e)=>{

            const circle=document.createElement("span");

            const size=Math.max(

                button.clientWidth,

                button.clientHeight

            );

            const rect=button.getBoundingClientRect();

            circle.style.width=size+"px";

            circle.style.height=size+"px";

            circle.style.left=(

                e.clientX-rect.left-size/2

            )+"px";

            circle.style.top=(

                e.clientY-rect.top-size/2

            )+"px";

            circle.classList.add("ripple");

            button.appendChild(circle);

            setTimeout(()=>{

                circle.remove();

            },600);

        });

    });

});
/* ===========================================================
                PARTICLES BACKGROUND
=========================================================== */

const canvas = document.createElement("canvas");

canvas.id = "particles-canvas";

document.getElementById("particles").appendChild(canvas);

const ctx = canvas.getContext("2d");

let particles = [];

function resizeCanvas(){

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

}

window.addEventListener("resize", resizeCanvas);

resizeCanvas();

class Particle{

    constructor(){

        this.reset();

        this.y = Math.random()*canvas.height;

    }

    reset(){

        this.x = Math.random()*canvas.width;

        this.y = canvas.height + Math.random()*100;

        this.size = Math.random()*2+1;

        this.speed = Math.random()*0.4+0.2;

        this.opacity = Math.random()*0.5+0.15;

    }

    update(){

        this.y -= this.speed;

        if(this.y < -20){

            this.reset();

        }

    }

    draw(){

        ctx.beginPath();

        ctx.arc(this.x,this.y,this.size,0,Math.PI*2);

        ctx.fillStyle=`rgba(88,166,255,${this.opacity})`;

        ctx.fill();

    }

}

for(let i=0;i<90;i++){

    particles.push(new Particle());

}

function animateParticles(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    particles.forEach(p=>{

        p.update();

        p.draw();

    });

    requestAnimationFrame(animateParticles);

}

animateParticles();

/* ===========================================================
                HERO PARALLAX
=========================================================== */

const heroImage = document.querySelector(".hero-right img");

document.addEventListener("mousemove",(e)=>{

    if(!heroImage) return;

    const x=(window.innerWidth/2-e.clientX)/45;

    const y=(window.innerHeight/2-e.clientY)/45;

    heroImage.style.transform=
        `translate(${x}px,${y}px)`;

});

/* ===========================================================
                COUNTER ANIMATION
=========================================================== */

const counters=document.querySelectorAll(".stats h2");

const counterObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const counter=entry.target;

const text=counter.innerText;

if(text.includes("%")){

animateCounter(counter,99.9,"%",1);

}else if(text==="100%"){

animateCounter(counter,100,"%",0);

}

counterObserver.unobserve(counter);

}

});

});

counters.forEach(c=>counterObserver.observe(c));

function animateCounter(element,target,suffix,decimal){

let current=0;

const step=target/90;

function update(){

current+=step;

if(current>=target){

current=target;

}

element.innerHTML=

decimal?

current.toFixed(1)+suffix:

Math.floor(current)+suffix;

if(current<target){

requestAnimationFrame(update);

}

}

update();

}

/* ===========================================================
            CURSOR LIGHT EFFECT
=========================================================== */

const glow=document.createElement("div");

glow.id="cursorGlow";

document.body.appendChild(glow);

document.addEventListener("mousemove",(e)=>{

glow.style.left=e.clientX+"px";

glow.style.top=e.clientY+"px";

});

/* ===========================================================
            NAVBAR ACTIVE LINK
=========================================================== */

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll(".navbar ul a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-120;

if(pageYOffset>=top){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});
