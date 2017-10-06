function addToCart() {
	var qty = $("#quantity").find(":selected").text();
	document.getElementById("qtyItems").innerHTML = qty + " items"
}

function selectColor() {
	console.log("faf")
	$(".highlight").addClass("highlight");
	$(this).addClass("highlight");
}

/*document.getElementsByClassName('colorChoice')[0]
        .addEventListener('click', function (event) {
            alert("lala")
        });*/

$(document).ready(function(){
	$('.colorChoice').click(function(){
		$('.colorChoice').removeClass("highlight");
		$(".highlight").addClass("highlight");
		$(this).addClass("highlight");
	});

});