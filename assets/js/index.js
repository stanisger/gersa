
//∆∆ BTN COLLPASE
 $(".button-collapse").sideNav();

 //∆∆ MODAL
 $('.modal').modal();

     $('.modal').modal({
      dismissible: true, // Modal can be dismissed by clicking outside of the modal
      opacity: .88, // Opacity of modal background
      inDuration: 500, // Transition in duration
      outDuration: 500, // Transition out duration
     }
    )

var card = $(".card-image");
 
$(".card-image").hover(
	  function () {
	    $(this).addClass('select');
	    $(this).removeClass('hover');
	    $(".card-image").addClass('hover');
	  }
  );

// if('select'){
// 	$(".card-image").addClass('hover');
// }


// //∆∆ Modal&Objetos
// var modalSelect = $('.modal');
// var computer = $('#animate1');

// //∆∆ Altura de Objetos (computer)
// var objetHeight = function height(objet){  
//       return  objet.outerHeight();   
//  }


// //∆∆ Scroll (modalSelect)
// var pixels = function height(obj){
// 	return obj.scrollTop();
// }

// $(document).scroll(function(){



// 	// function ecuation(height){
// 	//     return (height + pixels(modalSelect)) / height;
// 	//   }
    


//  //    var animation = function animation(multi){
//  //       return ecuation(objetHeight(computer)) * multi;
        
//  //    }

//  //    if(pixels(modalSelect) >= 1){
//  //        computer.css({ 
//  //            "top" : animation(10)  + "px", 
//  //            "display" : "inherit"
//  //               }
            
//  //         );
//  //    }

// });
	

