

var detail;
var obj;
var data = localStorage.getItem('arrayitem');

function jayesh1() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            detail = JSON.parse(this.responseText);
            gettingcart();
        }
    };
    xhttp.open("GET", "ecart.json", true);
    xhttp.send();
}

jayesh1();

var bind1 = '';

function gettingcart() {
    data = localStorage.getItem('arrayitem');
 
    // if(!JSON.parse(data).length){
            
    //     bind1 += '<div class="w-100 text-center "><h1> Your cart is empty...</h1></div>';
    // }else{

        for (let i = 0; i < detail.length; i++) {
        
            if ( JSON.parse(data) && JSON.parse(data).includes(detail[i].id)) {
                obj = detail[i];
                mahajan1();
            }
        // }
    }


    document.getElementById("display").innerHTML = bind1;


}



function mahajan1() {
    bind1 +=
        '<div class=" grid2 col-xl-3 col-lg-3 col-md-4 col-sm-6 " >' +
        '<div class="card card1 border-0 mb-2 ">' +
        '<a href="http://127.0.0.1:5500/DemoEcarttemp/index.html?id=' + obj.id + '" class="mx-auto" >' +
        '<img class="card-img-top " src="' + obj.images[0] + '" alt="Card image" style="width: fit-content;">' +
        '</a>' +
        '<div class="card-body  px-0 mx-auto" style="width: 237px;">' +
        '  <h4 class="card-title small mb-2 ab">' + obj.name + '</h4>' +

        '<p class="gray ml-0 mb-2 f12" >Black Strap Regular</p>' +
        ' <p class="card-text mb-2 f12"><button class="btn2">' + obj.Rating_star + '<i class="far fa fa-star" style="margin-left: 4px;"></i></button> <span class="gray">' + obj.rating + '</span></p>' +
        '<p class="mb-1">' +
        '<span class="f18"><i class="fa fa-inr" aria-hidden="true"></i> ' + calcu(obj.offer, obj.actual_price) + '</span>' +
        '<span class="line" style="font-size: 14px;"><i class="fa fa-inr" aria-hidden="true"></i> ' + obj.actual_price + '</span>' +
        '<span class="green" style="font-size: 14px;">' + obj.offer + '% off </span>' +
        '</p>' +

        ' <p style="font-size: 15px; font-weight: 500;">No Cost EMI</p>' +
        '</div>' +
        '</div>' +
        '</div>';
        document.getElementById('showCartItem').innerHTML = cartItem();
}


function calcu(off, actualPrice) {
    return Math.round((actualPrice) - ((off) * (actualPrice) / 100));
}
function cartItem(){

    data = localStorage.getItem('arrayitem');
    return JSON.parse(data).length;
  }