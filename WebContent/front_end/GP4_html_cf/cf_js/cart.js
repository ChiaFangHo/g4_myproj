
$(function(){
  var check = false;

function changeVal(el) {
var qt = parseFloat(el.parent().children(".qt").html());
var price = parseFloat(el.parent().children(".price").html());
var eq = Math.round(price * qt * 100) / 100;

el.parent().children(".full-price").html( eq + "元" );

changeTotal();			
}

function changeTotal() {

var price = 0;

$(".full-price").each(function(index){
price += parseFloat($(".full-price").eq(index).html());
});

price = Math.round(price * 100) / 100;
var fullPrice = Math.round((price) *100) / 100;

if(price == 0) {
fullPrice = 0;
}

$(".total span").html(fullPrice);

}

$(document).ready(function(){

$(".remove").click(function(){
var el = $(this);
el.parent().parent().addClass("removed");
window.setTimeout(
  function(){
    el.parent().parent().slideUp('fast', function() { 
      el.parent().parent().remove(); 
      if($(".product").length == 0) {
        if(check) {
          $(".container").hide;
          $("#foodtype").css("display", "none");
        } else {
          $("#cart").html("<br><br><br><br><h2>尚無食材/食譜</h2><br><br><br><br><br><br><br>");
          $("#next").remove(); 
          $("#del_return").css("display", "block");  
        }
      }
    });
  }, 200);
});


$(".btn").on("click", function(){
  $("#pay_info").show();
  $(".btn").css("visibility","hidden");	  
})

$(".final_btn").on("click", function(){

    Swal.fire({ position: 'center',
              icon: 'success',
              title: '訂單已確認送出!',
            text: '如欲取消訂單請至「訂單查詢」做取消',
              showConfirmButton: false,
              timer: 2000
        })
});



// $("card_info")
//     swal({
//         title: "HTML <small>信用卡支付</small>!",
//         text: "<input type='text'><label class='my-label'>Name</label>",
//         html: true 
//     });

// });


$(".qt-plus").click(function(){
$(this).parent().children(".qt").html(parseInt($(this).parent().children(".qt").html()) + 1);

$(this).parent().children(".full-price").addClass("added");

var el = $(this);
window.setTimeout(function(){el.parent().children(".full-price").removeClass("added"); changeVal(el);}, 150);
});

$(".qt-minus").click(function(){

child = $(this).parent().children(".qt");

if(parseInt(child.html()) > 1) {
  child.html(parseInt(child.html()) - 1);
}

$(this).parent().children(".full-price").addClass("minused");

var el = $(this);
window.setTimeout(function(){el.parent().children(".full-price").removeClass("minused"); changeVal(el);}, 150);
});

window.setTimeout(function(){$(".is-open").removeClass("is-open")}, 1200);

$(".btn").click(function(){
check = true;
$(".remove").click();
});
});


var state = 0;
var stateMax = 2;

function next() {
console.log("Next", state);
// browser side functions here
}

function back() {
console.log("Back", state);
// browser side functions here
}

$("#next").click(function () {
if (state < stateMax) {
    next();

    state += 1;

    // Enables 'back' button if disabled
    $("#back").removeClass("disabled");

    // Adds class to make nodes green
    $(".nConfirm" + state).each(function () {
        $(this).addClass("done");
    });

    // Progress bar animation
    var pBar = (state / stateMax) * 100;
    $(".pBar").css("width", `${pBar}%`);

    // Disables 'next' button if end of steps
    if (state == 2) {
        $("#next").addClass("disabled");
    }
}
});

$(".final_btn").click(function () {
if (state < stateMax) {
    next();

    state += 1;

    // Enables 'back' button if disabled
    $("#back").removeClass("disabled");

    // Adds class to make nodes green
    $(".nConfirm" + state).each(function () {
        $(this).addClass("done");
    });

    // Progress bar animation
    var pBar = (state / stateMax) * 100;
    $(".pBar").css("width", `${pBar}%`);

    // Disables 'next' button if end of steps
    if (state == 2) {
        $("#next").addClass("disabled");
    }
}
});

// $("#back").click(function () {
// 	if (state > 0) {
// 		back();

// 		// Enables 'next' button if disabled
// 		$("#next").removeClass("disabled");

// 		// removes class that makes nodes green
// 		$(".nConfirm" + state).each(function () {
// 			$(this).removeClass("done");
// 		});

// 		state -= 1;

// 		// Progress bar animation
// 		var pBar = (state / stateMax) * 100;
// 		$(".pBar").css("width", `${pBar}%`);

// 		// Disables 'back' button if end of steps
// 		if (state == 0) {
// 			$("#back").addClass("disabled");
// 		}
// 	}
// });

})

