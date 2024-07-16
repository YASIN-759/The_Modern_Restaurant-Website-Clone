// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true,
//     lerp:0.02,
// });



// Menu

var menu_btn = document.querySelector("#menu_btn");
var navlink = document.querySelector(".navlink");

menu_btn.addEventListener("click",function() {
    if(navlink.style.top == "-300%") {
        navlink.style.top = "5.6" + "rem";
    }
    else {
        navlink.style.top = "-300%";
    }
})

// Sub Menu

var sub_menu_link = document.getElementById("sub_menu_link");
var sub_menu_btn = document.getElementById("more_pages");

sub_menu_btn.addEventListener("click", function() {
        if(sub_menu_link.style.display == "none") {
            sub_menu_link.style.display = "block";
            sub_menu_link.style.height = "auto";
        } else {
            sub_menu_link.style.display = "none";
            sub_menu_link.style.height = "0" + "rem";
        }
});

//-------------------- Restuarant Address

// var tl = gsap.timeline();


gsap.from(".restaurant_infos",{
    y:"8rem",
    duration:"1",
    opacity:"0",
    stagger: 0.5,
    scrollTrigger:{
        trigger:".restaurant_infos",
        scroller:"body",
        start:"top 95%",
        end:"top 95%",
    }
})


//-------------------- Restuarant journey

gsap.from(".journey_left_div",{
    duration:"1",
    opacity:"0",
    delay:0.5,
    scrollTrigger:{
        trigger:".journey_left_div",
        scroller:"body",
        start:"top 85%",
        end:"top 85%",
    }
})

gsap.from(".med_divs",{
    x:"4rem",
    duration:"1",
    opacity:"0",
    delay:0.5,
    stagger: 0.5,
    scrollTrigger:{
        trigger:".med_divs",
        scroller:"body",
        start:"top 85%",
        end:"top 85%",
    }
})

gsap.from(".journey_bottom_right_div",{
    y:"5rem",
    duration:"1",
    opacity:"0",
    delay:0.5,
    scrollTrigger:{
        trigger:".journey_bottom_right_div",
        scroller:"body",
        start:"top 85%",
        end:"top 85%",
    }
})


//-------------------- Restuarant Menu


gsap.from(".dishes_menu_left_div",{
    y:"4rem",
    duration:"1",
    opacity:"0",
    delay:"-0.5",
    stagger: 0.5,
    scrollTrigger:{
        trigger:".dishes_menu_left_div",
        scroller:"body",
        start:"top 40%",
        end:"top -50%",
        srcub:true,
    }
})

gsap.from(".dishes_menu_left_div",{
    scrollTrigger:{
        trigger:".dishes_menu_left_div",
        scroller:"body",
        pin:true,
        start:"top 5%",
        end:"top -50%",
        srcub:5,
    }
})

gsap.from("#dish_no_1",{
    x:"4rem",
    duration:"1",
    opacity:"0",
    delay:"0.3",
    scrollTrigger:{
        trigger:"#dish_no_1",
        scroller:"body",
        start:"top 80%",
        end:"top 75%",
        
    }
})

gsap.from("#dish_no_2",{
    x:"4rem",
    duration:"1",
    opacity:"0",
    delay:"0.3",
    scrollTrigger:{
        trigger:"#dish_no_2",
        scroller:"body",
        start:"top 80%",
        end:"top 75%",
        
    }
})

gsap.from("#dish_no_3",{
    x:"4rem",
    duration:"1",
    opacity:"0",
    delay:"0.3",
    scrollTrigger:{
        trigger:"#dish_no_3",
        scroller:"body",
        start:"top 80%",
        end:"top 75%",
        
    }
})

gsap.from("#dish_no_4",{
    x:"4rem",
    duration:"1",
    opacity:"0",
    delay:"0.3",
    scrollTrigger:{
        trigger:"#dish_no_4",
        scroller:"body",
        start:"top 80%",
        end:"top 75%",
        
    }
})

gsap.from("#dish_no_5",{
    x:"4rem",
    duration:"1",
    opacity:"0",
    delay:"0.3",
    scrollTrigger:{
        trigger:"#dish_no_5",
        scroller:"body",
        start:"top 80%",
        end:"top 75%",
        
    }
})

gsap.from("#dish_no_6",{
    x:"4rem",
    duration:"1",
    opacity:"0",
    delay:"0.3",
    scrollTrigger:{
        trigger:"#dish_no_6",
        scroller:"body",
        start:"top 80%",
        end:"top 75%",
        
    }
})

gsap.from("#dish_no_7",{
    x:"4rem",
    duration:"1",
    opacity:"0",
    delay:"0.3",
    scrollTrigger:{
        trigger:"#dish_no_7",
        scroller:"body",
        start:"top 80%",
        end:"top 75%",
        
    }
})

gsap.from("#dish_no_8",{
    x:"4rem",
    duration:"1",
    opacity:"0",
    delay:"0.3",
    scrollTrigger:{
        trigger:"#dish_no_8",
        scroller:"body",
        start:"top 80%",
        end:"top 75%",
        
    }
})

gsap.from("#dish_no_9",{
    x:"4rem",
    duration:"1",
    opacity:"0",
    delay:"0.3",
    scrollTrigger:{
        trigger:"#dish_no_9",
        scroller:"body",
        start:"top 80%",
        end:"top 75%",
        
    }
})

gsap.from("#dish_no_10",{
    x:"4rem",
    duration:"1",
    opacity:"0",
    delay:"0.3",
    scrollTrigger:{
        trigger:"#dish_no_10",
        scroller:"body",
        start:"top 80%",
        end:"top 75%",
        
    }
})



// ----------------Offers

gsap.from("#offer_1",{
    x:"-4rem",
    duration:"1",
    opacity:"0",
    delay:"0.3",
    scrollTrigger:{
        trigger:"#offer_1",
        scroller:"body",
        start:"top 80%",
        end:"top 75%",
    }
})

gsap.from("#offer_2",{
    x:"4rem",
    duration:"1",
    opacity:"0",
    delay:"0.3",
    scrollTrigger:{
        trigger:"#offer_2",
        scroller:"body",
        start:"top 80%",
        end:"top 75%",
    }
})

gsap.from(".offer_tag",{
    duration:"1",
    opacity:"0",
    delay:"1",
    scrollTrigger:{
        trigger:".offer_tag",
        scroller:"body",
        start:"top 80%",
        end:"top 75%",
    }
})


// ----------------Popular Dishes


gsap.from(".popular_dishe",{
    y:"4rem",
    duration:"1",
    opacity:"0",
    delay:"0",
    stagger:0.2,
    scrollTrigger:{
        trigger:".popular_dishe",
        scroller:"body",
        start:"top 80%",
        end:"top 75%",
    }
})


// ------------------Services

gsap.from(".services",{
    x:"4rem",
    duration:"1",
    opacity:"0",
    delay:"0.5",
    stagger:0.2,
    scrollTrigger:{
        trigger:".services",
        scroller:"body",
        start:"top 80%",
        end:"top 75%",
    }
})



// ------------------Blog

gsap.from(".blog_post",{
    y:"4rem",
    duration:"1",
    opacity:"0",
    delay:"0",
    scrollTrigger:{
        trigger:".blog_post",
        scroller:"body",
        start:"top 80%",
        end:"top 75%",
    }
})

gsap.from("#blog_post_lower_div > .tag",{
    x:"4rem",
    duration:"1",
    opacity:"0",
    delay:"0",
    scrollTrigger:{
        trigger:"#blog_post_lower_div > .tag",
        scroller:"body",
        start:"top 80%",
        end:"top 75%",
    }
})


// ------------------Reservation

gsap.from(".form_card",{
    duration:"1",
    opacity:"0",
    delay:"0",
    scrollTrigger:{
        trigger:".form_card",
        scroller:"body",
        start:"top 80%",
        end:"top 75%",
    }
})


// ------------------Footer

gsap.from(".logo_links",{
    y:"4rem",
    duration:"1",
    opacity:"0",
    delay:"0",
    scrollTrigger:{
        trigger:".logo_links",
        scroller:"body",
        start:"top 80%",
        end:"top 75%",
    }
})

gsap.from(".info_div",{
    y:"4rem",
    duration:"1",
    opacity:"0",
    delay:"0",
    scrollTrigger:{
        trigger:".info_div",
        scroller:"body",
        start:"top 80%",
        end:"top 75%",
    }
})

gsap.from(".sponsors",{
    duration:"1",
    opacity:"0",
    delay:"0",
    scrollTrigger:{
        trigger:".sponsors",
        scroller:"body",
        start:"top 90%",
        end:"top 75%",
    }
})






















