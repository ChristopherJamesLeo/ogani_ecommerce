// console.log("hello world");

// start jquery area
$(document).ready(function(){
    // console.log("hello jquery")

    // start nav bar btn
    $(".navbar-toggler").click(function(){
        $(".nav_slide_bar").toggleClass("active");
        $("body").toggleClass("active");
    })
    // end nav bar btn

    // start dep list
    $(".all_dept_list_btn").click(function(){
        $(".all_dept_list").animate({
            height : "toggle"
        },500);
    })
    // end dep list

    // start produst slide section
    $("#p_type_slide").owlCarousel({
        items : 4 ,
        loop : true,
        autoplay : true,
        autoplayHoverPause : true,
        autoplayTimeout : 4000,
        autoplaySpeed : 1000,
        dots : false,
        nav : true,
        responsive :{
            0 : {
                items : 1 
            },
            443 :{
                items : 2,
            },
            768 : {
                items : 3
            },
            992 : {
                items : 4 ,
            }
        }
    });
    // end product slide section

    // start feature product section
    $(".feature_p_tabs_container ul li").click(function(){
        // console.log($(this).data("feature-type"));
        $(this).siblings().removeClass("active");
        $(this).addClass("active");
        let getFeatureType = $(this).data("feature-type");
        // console.log(getFeatureType);
        if(getFeatureType === "all"){
            $(".product_show_case").show("slow");
        }else {
            $(".product_show_case").hide("slow");
            $(".product_show_case").filter("."+getFeatureType).show("slow");
        }
    })
    // end feature product section

    // start product choise section
    $(".product_choise").owlCarousel({
        items:1,
        dots : false,
        nav : true,
        loop : true,
        autoplay : true,
        autoplayHoverPause : true,
        autoplayTimeout : 4000,
        autoplaySpeed : 1000,
    })
    // end product choise section
})


// end jquery area
let getBody = document.querySelector("body");
let getSideBar = document.querySelector(".nav_slide_bar");

window.onclick = function(e){
    if(e.target === getBody){
        getSideBar.classList.toggle("active");
        setTimeout(function(){
            getBody.classList.toggle("active");

        },600)
    }
}

// start product store 

let getTotalFavIcons = document.querySelectorAll(".fav_product");
let getTotalCartIcons = document.querySelectorAll(".cart_product");



let getFavProducts = JSON.parse(localStorage.getItem("ogani_fav_product"));
let getCartProducts = JSON.parse(localStorage.getItem("ogani_cart_product"));

function showLocalCount(showicons,localArr,localName){
    if( localStorage.getItem(localName) !== null){
        showicons.forEach(function(getTotalFavIcon){
            getTotalFavIcon.innerHTML = " ";
            getTotalFavIcon.innerText = localArr.length;
        })
    }

}

showLocalCount(getTotalFavIcons,getFavProducts,"ogani_fav_product");
showLocalCount(getTotalCartIcons,getCartProducts,"ogani_cart_product");

// end product store