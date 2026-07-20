/* ======================================================
   Ishali Chavan Portfolio
   Modern Portfolio JavaScript
====================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================
       Mobile Navigation
    ========================== */

    const menuBtn = document.querySelector(".menu-btn");
    const navLinks = document.querySelector(".nav-links");

    if (menuBtn) {
        menuBtn.addEventListener("click", () => {
            navLinks.classList.toggle("active");

            const icon = menuBtn.querySelector("i");

            if (navLinks.classList.contains("active")) {
                icon.classList.remove("fa-bars");
                icon.classList.add("fa-xmark");
            } else {
                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");
            }
        });
    }

    /* ==========================
       Close menu after click
    ========================== */

    document.querySelectorAll(".nav-links a").forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

            if(menuBtn){
                const icon = menuBtn.querySelector("i");
                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");
            }

        });

    });

    /* ==========================
       Navbar Scroll Effect
    ========================== */

    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 80) {

            header.style.padding = "10px 8%";
            header.style.transition = ".3s";

        } else {

            header.style.padding = "20px 8%";

        }

    });

    /* ==========================
       Back To Top Button
    ========================== */

    const topBtn = document.getElementById("topBtn");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

            topBtn.classList.add("show");

        } else {

            topBtn.classList.remove("show");

        }

    });

    if(topBtn){

        topBtn.addEventListener("click", () => {

            window.scrollTo({

                top:0,

                behavior:"smooth"

            });

        });

    }

    /* ==========================
       Active Navigation
    ========================== */

    const sections = document.querySelectorAll("section");
    const navItems = document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 120;

            if (pageYOffset >= sectionTop) {

                current = section.getAttribute("id");

            }

        });

        navItems.forEach(link => {

            link.classList.remove("active");

            if(link.getAttribute("href")==="#" + current){

                link.classList.add("active");

            }

        });

    });

    /* ==========================
       Reveal Animation
    ========================== */

    const observer = new IntersectionObserver(entries=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("show-card");

            }

        });

    },{

        threshold:0.15

    });

    document.querySelectorAll(".glass-card").forEach(card=>{

        card.classList.add("hidden-card");

        observer.observe(card);

    });

    /* ==========================
       Skill Bars Animation
    ========================== */

    const skillBars=document.querySelectorAll(".progress-bar");

    const skillObserver=new IntersectionObserver(entries=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                const width=entry.target.style.width;

                entry.target.style.width="0";

                setTimeout(()=>{

                    entry.target.style.width=width;

                },200);

            }

        });

    },{

        threshold:0.5

    });

    skillBars.forEach(bar=>{

        skillObserver.observe(bar);

    });

    /* ==========================
       Floating Cards
    ========================== */

    document.querySelectorAll(".glass-card").forEach(card=>{

        card.addEventListener("mousemove",(e)=>{

            const rect=card.getBoundingClientRect();

            const x=e.clientX-rect.left;

            const y=e.clientY-rect.top;

            const rotateY=((x/rect.width)-0.5)*10;

            const rotateX=((y/rect.height)-0.5)*-10;

            card.style.transform=
            `perspective(800px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-8px)`;

        });

        card.addEventListener("mouseleave",()=>{

            card.style.transform=
            "perspective(800px) rotateX(0) rotateY(0)";

        });

    });

    /* ==========================
       Hero Typing Effect
    ========================== */

    const heroTitle=document.querySelector(".hero h2");

    if(heroTitle){

        const text=heroTitle.innerText;

        heroTitle.innerHTML="";

        let i=0;

        function typing(){

            if(i<text.length){

                heroTitle.innerHTML+=text.charAt(i);

                i++;

                setTimeout(typing,80);

            }

        }

        typing();

    }

    /* ==========================
       Floating Blossoms
    ========================== */

    setInterval(()=>{

        const blossom=document.createElement("span");

        blossom.className="floating";

        blossom.style.left=Math.random()*100+"vw";

        blossom.style.animationDuration=(8+Math.random()*8)+"s";

        blossom.style.opacity=Math.random();

        blossom.style.width=(10+Math.random()*20)+"px";

        blossom.style.height=blossom.style.width;

        document.body.appendChild(blossom);

        setTimeout(()=>{

            blossom.remove();

        },16000);

    },1200);

});
