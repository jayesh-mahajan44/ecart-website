

var details;
var select ;

function jayesh1() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            details = JSON.parse(this.responseText);
            getting();      
        }

    };
    xhttp.open("GET", "ecart.json", true);
    xhttp.send();
}
jayesh1();
function calcu(off, actualPrice) {
    return Math.round((actualPrice) - ((off) * (actualPrice) / 100));
}


var getQueryString = function (field, url) {
    var href = url ? url : window.location.href;
    var reg = new RegExp('[?&]' + field + '=([^&#]*)', 'i');
    var string = reg.exec(href);
    return string ? string[1] : null;
};



var ids = getQueryString('id');



function getting() {
    for (j = 0; j < details.length; j++) {
        if (ids == details[j].id) {
            select = details[j];
            // console.log(select)
            createHtml();
            break;
        }

    }

}



var bind2 = '';


function createHtml() {

data = (localStorage.getItem('arrayitem'));

    bind2 += '<div class="maindiv2a">' +
        '<div class="maindiv2a1"><img class="imo" src="honor.jpg" alt="Watch"> </div>' +
        '<div class="maindiv2a2"><img class="imo" src="honor1.jpg" alt="Watch" ></div>' +
        '<div class="maindiv2a3"><img class="imo" src="honor2.jpg" alt="Watch"></div>' +
        '<div class="maindiv2a4"><img class="imo" src="honor3.jpg" alt="Watch"></div>' +
        '<div class="maindiv2a5"><img class="imo" src="honor4.jpg" alt="Watch"></div>' +

        '<div class="maindiv2abig" >' +
        '<div class="maindiv2a11 text-center py-3"> <img class=" imo1 imo " src="' + select.images[0] + '" alt="Watch" > </div>' +
        '</div>' +
        '</div>' +

        '<div class="btn_grp"> ';
        // console.log(select, JSON.parse(data),JSON.parse(data).includes(select.id))
    if(JSON.parse(data) && JSON.parse(data).includes(ids)){
        bind2 += '<button id="removebtn" class="btn btn1"><span><i style="color: white; margin-right: 10px;" class="fa fa-shopping-cart " ></i> REMOVE</span></button>';
   
    } else {

        bind2 += '<button id="btnclick" class="btn btn1"><span><i style="color: white; margin-right: 10px;" class="fa fa-shopping-cart " ></i> Add to Cart</span></button>';
    }


    bind2 += '<button class="btn"><span><i style="color: white; margin-right: 10px;" class="fa fa-share" aria-hidden="true"></i>Buy Now</span></button>' +
    
    '</div>' +
        '<div class="maindiv2b" >' +
        '<h6 class="med1"> ' + select.name + '</h6>' +
        '<button class="btn2">' + select.Rating_star + '<i class="far fa fa-star" style="margin-left: 4px;"></i></button>' +
        '<span class="small gray">' + select.rating + '</span>' +
        '<p style="margin: 10px 0;"> <span class="med2"><i class="fa fa-inr" aria-hidden="true"></i> ' + calcu(select.offer, select.actual_price) + '</span> ' +
        '<span class="line"><i class="fa fa-inr" aria-hidden="true"></i>' + select.actual_price + '</span>' +
        '<span class="green">' + select.offer + '% off</span> ' +
        '</p>' +
        '<div class="maindiv2b1">' +
        '<p class="bb1"><strong style="font-size: 16px;"> Available offers </strong> </p>';
    for (let i = 0; i < select.Available_offers.length; i++) {
        if (i != 2) {
            bind2 += ' <i class="fa fa-tag green med1 b' + i + 1 + '1" aria-hidden="true"> </i><p class="small1 bb11"> <strong >Bank Offer </strong> ' + select.Available_offers[i] + ' <span class="blue"> T&C </span>  </p>'
        } else {
            bind2 += '<i class="fa fa-calendar-check-o green med1 b' + i + 1 + '1" aria-hidden="true"></i> <p class="small1 bb31"> <strong > No cost EMI <i class="fa fa-inr" aria-hidden="true"></i>  1,500/month.</strong>  Standard EMI also available <span class="blue"> View Plans <i class="fa fa-chevron-right" aria-hidden="true" style="margin-left: 3px;font-size: 12px;"></i></span> </p>'
        }
    }
    // bind2 +=  ' <i class="fa fa-tag green med1 b11" aria-hidden="true"> </i><p class="small1 bb11"> <strong >Bank Offer </strong>  5% Unlimited Cashback on Axis Bank Credit Card <span class="blue"> T&C </span>  </p>';

    // bind2 += '<i class="fa fa-tag green med1 b21" aria-hidden="true"></i><p class="small1 bb21"><strong >Bank Offer </strong> Extra 5% off with Axis Bank Buzz Credit Card <span class="blue" > T&C </span> </p>';

    //  '<i class="fa fa-calendar-check-o green med1 b31" aria-hidden="true"></i> <p class="small1 bb31"> <strong > No cost EMI <i class="fa fa-inr" aria-hidden="true"></i>  1,500/month.</strong>  Standard EMI also available <span class="blue"> View Plans <i class="fa fa-chevron-right" aria-hidden="true" style="margin-left: 3px;font-size: 12px;"></i></span> </p>'+
    bind2 += '</div>' +
        '<div class="maindiv3">' +

        ' <p class="maindiv3a">Delivery <strong class="margl"> :</strong></p>' +

        ' <p class="maindiv3b">Highlights  <strong class="margl"> :</strong></p>' +

        '<p class="maindiv3c">Seller  <strong class="margl"> :</strong></p>' +

        ' <p class="maindiv3d">Services  <strong class="margl"> :</strong></p>' +

        '<div class="maindiv3e">' +
        ' <div class="bord" >' +
        '<form class="" >' +
        ' <span class="blue"><i class="fa fa-map-marker" aria-hidden="true"></i></span> <input type="text" class="small bord1" placeholder="Enter Delivery Pincode">' +

        '</form>' +
        '<span class="blue">change</span>' +
        '</div>' +
        '<p style="margin: 10px 0 5px;"><span style="font-weight: 600;">Delivery by Tomorrow, Tuesday</span>  <span style="color: #ccc2c2;"> | </span> <span class="green"> Free</span> <span style="color: #9a9292e8;font-weight: 600; text-decoration: line-through;"><i class="fa fa-inr" aria-hidden="true" style="text-decoration: line-through;"></i>40</span></p>' +
        '<p class="blue" style="margin:0;">View Details</p>' +
        '</div>' +

        '<div class="maindiv3f">' +
        '<ul>';
    for (let kk = 0; kk < select.highlights.length; kk++) {

        bind2 += '<li class="flex"> <i class="fa fa-circle circle" aria-hidden="true"></i><p class="marg">' + select.highlights[kk] + '</p> </li>'
    }
    // ' <li  class="flex">  <i class="fa fa-circle circle" aria-hidden="true"></i>  <p class="marg">  Kirin A1 Chipset with Bluetooth v5.1 BLE </p> </li>'+
    //  '<li  class="flex">  <i class="fa fa-circle circle" aria-hidden="true"></i>  <p class="marg"> 3D Design with AMOLED Display </p> </li>'+
    // ' <li  class="flex">   <i class="fa fa-circle circle" aria-hidden="true"></i> <p class="marg"> 15 Smart workout Sports Modes </p> </li>'+
    //  '<li  class="flex">   <i class="fa fa-circle circle" aria-hidden="true"></i> <p class="marg">Inbuilt Microphone & Speaker for Bluetooth Calling & Music. </p> </li>'+
    //  '<li  class="flex">   <i class="fa fa-circle circle" aria-hidden="true"></i> <p class="marg">  Touchscreen </p> </li>'+
    //  '<li  class="flex">  <i class="fa fa-circle circle" aria-hidden="true"></i> <p class="marg">   Fitness & Outdoor </p> </li>'+
    bind2 += '</ul>' +
        '</div>' +

        '<div class="maindiv3g">';
    for (let l = 0; l < select.Services.length; l++) {

        bind2 += ' <p> <i class="fa fa-check check" aria-hiden="true"></i>' + select.Services[l] + '</p>'
    }
    //  ' <p> <i class="fa fa-check check" aria-hiden="true"></i> 1 Year Manufacturer Warranty</p>'+
    //   '<p><i class="fa fa-refresh check1" aria-hiddden="true"></i>10 Days Replacement Policy?</p>'+
    //   '<p><i class="fa fa-inr check2" aria-hidden="true"></i>Cash on Delivery available</p>'+
    bind2 += '</div>' +

        '<div class="maindiv3h">' +
        '<span> RetailNet <button class="btn2">' + select.Rating_star + '<i class="far fa fa-star" style="margin-left: 4px;"></i></button></span>' +
        '<ul>' +
        '<li class="flex"> <i class="fa fa-circle circle" aria-hidden="true"></i>  <p class="marg">' + select.Seller[0] + '</p> </li>' +
        '</ul>' +
        '</div>' +
        '</div>' +
        '</div>';

    document.getElementById("display1").innerHTML = bind2;
    document.getElementById('showCartItem').innerHTML = cartItem();

    if (JSON.parse(data) && JSON.parse(data).includes(ids)) {
        document.getElementById("removebtn").addEventListener("click", removecart);
        
    } else { 
         document.getElementById("btnclick").addEventListener("click", addtocart);
        
    }

}

function removecart() {
    var localarray = JSON.parse(data);
    var index = localarray.indexOf(ids);
    if(index > -1){
        localarray.splice(index,1);
       localStorage.setItem('arrayitem',JSON.stringify(localarray));
        bind2 ='';
        // removecartItem();
            createHtml();
    }
}

var data = (localStorage.getItem('arrayitem'));
function addtocart() {
    let array = [];
    
    if (!data) {
        array.push(ids);
        localStorage.setItem('arrayitem', JSON.stringify(array));
        bind2 ='';
        createHtml();
        // addtocartItem();
    }
    else {

        let getarray = JSON.parse(data);

        if (!data.includes(ids)) {
            getarray.push(ids);
            localStorage.setItem('arrayitem',JSON.stringify(getarray));
            bind2 ='';
          
            createHtml();
            // addtocartItem();
        }
    }

}
function cartItem(){

     data = localStorage.getItem('arrayitem');
     return JSON.parse(data).length;
}




// if(JSON.parse(data) && (JSON.parse(data)).includes(select.id)){