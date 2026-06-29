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
