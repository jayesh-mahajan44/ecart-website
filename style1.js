

var detail ;   
var emptyArray = [];
// localStorage.getItem("arrayitem");
localStorage.setItem('arrayitem', JSON.stringify(emptyArray));

// var data = JSON.parse(localStorage.getItem('arrayitem')) ;
  

function jayesh() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {

        detail =JSON.parse(this.responseText) ;
        // document.getElementById("display").innerHTML = this.responseText;
        mahajan();
       
      }
    }; 
    xhttp.open("GET", "ecart.json", true);
    xhttp.send();
  }

   var bind1 = '';
  
function mahajan(){ 
  for(i=0;i<detail.length;i++){
  //  var value = detail[[i]];
    bind1+= 
    '<div class=" grid2 col-xl-3 col-lg-3 col-md-4 col-sm-6 " >'+
    '<div class="card card1 border-0 mb-2 ">'+
    '<a href="http://127.0.0.1:5500/desc.html?id='+detail[i].id+'" class="mx-auto" >'+
  '<img class="card-img-top " src="'+detail[i].images[0]+'" alt="Card image" style="width: fit-content;">'+
  '</a>'+
  '<div class="card-body  px-0 mx-auto" style="width: 237px;">'+
  '  <h4 class="card-title small mb-2 ab">'+detail[i].name+'</h4>'+
  
    '<p class="gray ml-0 mb-2 f12" >Black Strap Regular</p>'+
   ' <p class="card-text mb-2 f12 "><button class="btn2">'+detail[i].Rating_star+'<i class="far fa fa-star" style="margin-left: 4px;"></i></button> <span class="gray1">'+detail[i].rating+'</span></p>'+
      '<p class="mb-1">'+
      '<span class="f18"><i class="fa fa-inr" aria-hidden="true"></i> '+calcu(detail[i].offer,detail[i].actual_price)+'</span>'+
      '<span class="line" style="font-size: 14px;"><i class="fa fa-inr" aria-hidden="true"></i> '+detail[i].actual_price+'</span>'+
      '<span class="green" style="font-size: 14px;">'+detail[i].offer+'% off </span>'+
      '</p>'+ 
      
    ' <p style="font-size: 15px; font-weight: 500;">No Cost EMI</p>'+
  '</div>'+
  '</div>'+
  '</div>';

}
document.getElementById('showCartItem').innerHTML = cartItem();
  document.getElementById("display").innerHTML = bind1;


  // var dataPush =  emptyArray.push(detail[i]);
  // // emptyArray.push(dataPush);
  // localStorage.setItem('arrayitem',JSON.stringify(dataPush));



}

jayesh();
function calcu(off,actualPrice){
  return Math.round((actualPrice) - ((off)*(actualPrice)/100));
}

 

function cartItem(){

  data = localStorage.getItem('arrayitem');
  return JSON.parse(data).length;
}




// function cartItem(){

//   data = localStorage.getItem('arrayitem');
//   return JSON.parse(data).length;
// }