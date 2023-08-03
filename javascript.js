import {todayDeal} from "./todayDeal.js";
console.log(todayDeal)

let slideBtnLeft=document.getElementById('slide-btn-left')
let slideBtnRight=document.getElementById('slide-btn-right')
let imageItem=document.querySelectorAll(".image-item")

console.log(imageItem.length-1)
let startSlider=0
let endSlider=(imageItem.length-1)*100
slideBtnLeft.addEventListener("click",handleLeftBtn);

function handleLeftBtn(){ 
    if(startSlider < 0){
        startSlider=startSlider+100;
    }

    imageItem.forEach(element =>{
        element.style.transform=`translateX(${startSlider}%)`;
    })
}


slideBtnRight.addEventListener("click",handleRightBtn);

function handleRightBtn(){
    if(startSlider>=-endSlider+100){
        startSlider=startSlider-100;
    }

    imageItem.forEach(element =>{
        element.style.transform=`translateX(${startSlider}%)`;
    })
}

// render automatic

function renderSlideAuto(){
    if(startSlider>=-endSlider+100){
        handleRightBtn();
    }
    else{
        startSlider=0;
    }
}

setInterval(renderSlideAuto,2000);

/* side bar navigation*/

const sidebarNavigationEl=document.getElementById('sidebar-container-navigation-id');

const sidebarOpenNavigationEl=document.getElementById('open-nav-sidebar')

sidebarOpenNavigationEl.addEventListener('click',()=>{
    sidebarNavigationEl.classList.toggle('slidebar-show')
})

const sidebarCloseNavigationEl=document.getElementById('sidebar-navigation-close')

sidebarCloseNavigationEl.addEventListener('click',()=>{
    sidebarNavigationEl.classList.toggle('slidebar-show')
})

// today deal
console.log(todayDeal)
let todayDealProductListsEl=document.querySelector(".today-deals-product-list");
// console.log(todayDealProductListsEl)

let todayDealProductHTML="";

let todayDeallength=todayDeal.length;
for(let i=0; i<todayDeal.length; i++){
    console.log(todayDeal[i])

    todayDealProductHTML+=`
        <div class="today-deals-product-item">
        <div class="today-deals-product-image">
        
             <img src=${todayDeal[i].img}>
        </div>

                <div class="discount-container">
                    <a href="#">Up to ${todayDeal[i].discount}% off</a>
                    <a href="#">${todayDeal[i].DealOfDay}</a>
                </div>
                <p>${todayDeal[i].desc}</p>
        </div>
    `
}

todayDealProductListsEl.innerHTML=todayDealProductHTML;

let today_deal_btn_prevEl=document.getElementById("today-deal-btn-prev");
let today_deal_btn_nextEl=document.getElementById("today-deal-btn-next");
let today_deals_product_itemEl=document.querySelectorAll(".today-deals-product-item");

let startProduct=0;

today_deal_btn_prevEl.addEventListener("click",()=>{
    if(startProduct<0){
        startProduct+=500;
    }
    if(startProduct>-2000){
    today_deals_product_itemEl.forEach(el=>{
        el.style.transform=`translateX(${startProduct}%)`;

    })
}
})

today_deal_btn_nextEl.addEventListener("click",()=>{
    
    if(startProduct>-1500){
        startProduct-=500;
    }
    today_deals_product_itemEl.forEach(el=>{
        el.style.transform=`translateX(${startProduct}%)`;

    })
})