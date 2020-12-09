




var detail ;       

function jayesh1() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {

        detail =JSON.parse(this.responseText) ;
        // document.getElementById("display").innerHTML = this.responseText;
      getting1();
       
      }
    };
    xhttp.open("GET", "ecart.json", true);
    xhttp.send();
  }



//   var getQueryString = function (field, url) {
//     var href = url ? url : window.location.href;
//     var reg = new RegExp('[?&]' + field + '=([^&#]*)', 'i');
//     var string = reg.exec(href);
//     return string ? string[1] : null;
// };



// var ids = getQueryString('id');

var data = JSON.parse(localStorage.getItem("arrayitem"));

// console.log(data)


function getting1() {
    for (j = 0; j < detail.length; j++) {
        if (data[0] == detail[j].id) {
            mahajan1(detail[j]);
           break;
        }
        
    }
 
}

  var bind3 = '';
  
  
function mahajan1(obj5){ 

  if(!data){
    bind3 += '<h1>No items in cart</h1>'; 

  }
  else{
 
bind3 += '<div class="cart1a  mt-5">'+

 '<div class="abc  ">'+

     '<h3>My Cart (1)</h3>'+
    
    ' <div class="flex justify-content-md-center"> '+
       '<span class="blue "><i class="fa fa-map-marker" aria-hidden="true"></i></span> '+
       '<span class="blue">Deliver to</span>'+
       '<form  class=" ">'+
             '<input type="text" class="small bord1 border-bottom border-primary pb-1 w-75" placeholder="Enter Delivery Pincode">'+
            ' <span><a href="#">check</a> </span>'+
       '</form>'+
      
   '</div>'+
   '</div>'+

' <div class="cart2 border-top py-4">'+
    ' <div class="text-center">'+
     '<img class="h-100 py-2 " src="'+obj5.images[0]+'" alt="Card image">'+
 '</div>'+

 '<div class="cart3 text-center">'+
    '<button class="cart3a" style="outline-style: none;">-</button> '+
    '<input class="cart3b ml-1 mr-2 text-center" type="text" name="number" value="1" maxlength="1">'+
    '<button class="cart3a" style="outline-style: none;"> +</button> '+
' </div>'+

     '<div class="cart4 pt-2" >'+
      ' <h4 class="small mb-2"> '+obj5.name+' </h4>'+
       '<p class="gray ml-0 mb-2" style="font-size: 12px;">Black Strap Regular</p>'+
       '<p class="mb-2" style="font-size: 12px;"> <button class="btn2">'+obj5.Rating_star+' <i class="far fa fa-star" style="margin-left: 4px;"></i></button>'+
           '<span class="gray">'+obj5.rating+' </span>'+
           '</p>'+
           '<p class="mb-1"> <span style=" font-size: 18px; font-weight: 600;"><i class="fa fa-inr" aria-hidden="true"></i>'+calcu(obj5.offer,obj5.actual_price)+'</span> '+
               '<span class="line" style="font-size: 14px;"><i class="fa fa-inr" aria-hidden="true"></i>'+obj5.actual_price+'</span> '+
               '<span class="green" style="font-size: 14px;"> '+obj5.offer+'% off</span> '+
           '</p>'+
           
    ' </div>'+
     '<div class="pt-2">'+
        '<p class="  mb-2" style="font-size: 14px;">Delivery in 3 - 5 days | <span class="green">Free</span></p>' +
        '<p class="gray ml-0 mb-2" style="font-size: 12px;">10 Days Replacement Policy</p>'+
   
     '</div>'+

    '<div class="cart5">'+
       '<a href="#" class="cart5a">SAVE FOR LATER</a>'+
       '<a href="#" class="cart5a ml-4">REMOVE</a>'+
     '</div>'+


' </div>'+
 

'<div class="d-flex justify-content-end pr-4 py-3" style="background-color: white;box-shadow: 0px 0px 15px 0px #dcd6d6;">'+
'<button class="btn btn1" style="width: 200px;"> PLACE ORDER</button>'+
'</div>'+

'</div>'+

'<div class="cart6 mt-5 ml-4" style="background-color: white;">'+

   '<span class="gray cart6a m-0 pl-4">PRICE detail</span>'+ 

 '<div class="cart6c pt-4">' +

'<div class="cart6d">'+
'<span class="pl-4"> Price (1 item)</span>'+
'<span class="pr-4"><i class="fa fa-inr" aria-hidden="true"></i> '+calcu(obj5.offer,obj5.actual_price)+'</span>'+
'</div>'+

'<div class="cart6d" style="border-bottom: dashed 1px lightgrey;"> '+
'<span  class="pl-4" > Delivery Fee</span>'+
'<span class="pr-4">  Free</span>'+
'</div>'+

'<div class="cart6d pt-3" style="font-size: 20px;font-weight: 500; border-bottom: solid 1px lightgrey;"> '+
'<span  class="pl-4">Total Payable</span>'+
'<span class="pr-4"><i class="fa fa-inr" aria-hidden="true"></i> '+calcu(obj5.offer,obj5.actual_price)+'</span>'+
'</div>'+

'</div>'+

'<p class="cart6b green m-0 text-center align-self-center">You will save <span class="px-1"> <i class="fa fa-inr" aria-hidden="true"></i> '+saving(obj5.offer,obj5.actual_price)+'</span> on this order</p>'+

'</div>';
  }

document.getElementById("display3").innerHTML = bind3;
document.getElementById('showCartItem').innerHTML = cartItem();


}

jayesh1();

function calcu(off,actualPrice){
  return Math.round((actualPrice) - ((off)*(actualPrice)/100));
}

function saving(off,actualPrice){
 return Math.round((off)*(actualPrice)/100);
}

function cartItem(){

  data = localStorage.getItem('arrayitem');
  return JSON.parse(data).length;
}










// cart after click



// var bind3 = '';
  
  
// function mahajan1(obj5){ 
//     var obj6 = JSON.parse(obj5);
//     for (let s = 0; s < obj6.length; s++) {
      
        
        
//         bind3 +=  '<div class="cart1 mx-auto px-2 ">'+
//         '<div class="cart1a  mt-5">'+
        
//         '<div class="abc  ">'+

//         '<h3>My Cart (1)</h3>'+
    
//         ' <div class="flex justify-content-md-center"> '+
//         '<span class="blue "><i class="fa fa-map-marker" aria-hidden="true"></i></span> '+
//         '<span class="blue">Deliver to</span>'+
//         '<form  class=" ">'+
//         '<input type="text" class="small bord1 border-bottom border-primary pb-1 w-75" placeholder="Enter Delivery Pincode">'+
//         ' <span><a href="#">check</a> </span>'+
//         '</form>'+
        
//         '</div>'+
//         '</div>'+
        
//         ' <div class="cart2 border-top py-4">'+
//     ' <div class="text-center">'+
//      '<img class="h-100 py-2 " src="'+obj6[s].images[0]+'" alt="Card image">'+
//      '</div>'+
     
//      '<div class="cart3 text-center">'+
//      '<button class="cart3a" style="outline-style: none;">-</button> '+
//      '<input class="cart3b ml-1 mr-2 text-center" type="text" name="number" value="1" maxlength="1">'+
//      '<button class="cart3a" style="outline-style: none;"> +</button> '+
//      ' </div>'+
     
//      '<div class="cart4 pt-2" >'+
//      ' <h4 class="small mb-2"> '+obj6[s].name+' </h4>'+
//      '<p class="gray ml-0 mb-2" style="font-size: 12px;">Black Strap Regular</p>'+
//      '<p class="mb-2" style="font-size: 12px;"> <button class="btn2">'+obj6[s].Rating_star+' <i class="far fa fa-star" style="margin-left: 4px;"></i></button>'+
//      '<span class="gray">'+obj6[s].rating+' </span>'+
//      '</p>'+
//      '<p class="mb-1"> <span style=" font-size: 18px; font-weight: 600;"><i class="fa fa-inr" aria-hidden="true"></i>'+calcu(obj6[s].offer,obj6[s].actual_price)+'</span> '+
//      '<span class="line" style="font-size: 14px;"><i class="fa fa-inr" aria-hidden="true"></i>'+obj6[s].actual_price+'</span> '+
//                '<span class="green" style="font-size: 14px;"> '+obj6[s].offer+'% off</span> '+
//                '</p>'+
           
//                ' </div>'+
//                '<div class="pt-2">'+
//                '<p class="  mb-2" style="font-size: 14px;">Delivery in 3 - 5 days | <span class="green">Free</span></p>' +
//                '<p class="gray ml-0 mb-2" style="font-size: 12px;">10 Days Replacement Policy</p>'+
   
//                '</div>'+
               
//                '<div class="cart5">'+
//                '<a href="#" class="cart5a">SAVE FOR LATER</a>'+
//                '<a href="#" class="cart5a ml-4">REMOVE</a>'+
//                '</div>'+
               
               
//                ' </div>'+
               
               
//                '<div class="d-flex justify-content-end pr-4 py-3" style="background-color: white;box-shadow: 0px 0px 15px 0px #dcd6d6;">'+
//                '<button class="btn btn1" style="width: 200px;"> PLACE ORDER</button>'+
//                '</div>'+
               
//                '</div>'+
               
//                '<div class="cart6 mt-5 ml-4" style="background-color: white;">'+
               
//                '<span class="gray cart6a m-0 pl-4">PRICE detail</span>'+ 
               
//                '<div class="cart6c pt-4">' +
               
//                '<div class="cart6d">'+
//                '<span class="pl-4"> Price (1 item)</span>'+
//                '<span class="pr-4"><i class="fa fa-inr" aria-hidden="true"></i> '+calcu(obj6[s].offer,obj6[s].actual_price)+'</span>'+
//                '</div>'+
               
//                '<div class="cart6d" style="border-bottom: dashed 1px lightgrey;"> '+
//                '<span  class="pl-4" > Delivery Fee</span>'+
//                '<span class="pr-4">  Free</span>'+
//                '</div>'+
               
//                '<div class="cart6d pt-3" style="font-size: 20px;font-weight: 500; border-bottom: solid 1px lightgrey;"> '+
//                '<span  class="pl-4">Total Payable</span>'+
//                '<span class="pr-4"><i class="fa fa-inr" aria-hidden="true"></i> '+calcu(obj6[s].offer,obj6[s].actual_price)+'</span>'+
//                '</div>'+
               
//                '</div>'+
               
//                '<p class="cart6b green m-0 text-center align-self-center">You will save <span class="px-1"> <i class="fa fa-inr" aria-hidden="true"></i> '+saving(obj6[s].offer,obj6[s].actual_price)+'</span> on this order</p>'+
               
//                '</div>'+
//                '</div>';
               

//             }
//                document.getElementById("display1").innerHTML = bind3;
               
               
//             }
            
//             function saving(off,actualPrice){
//  return Math.round((off)*(actualPrice)/100);
// }


