function addToCart() {
	var qty = $('#quantity').find(':selected').text();
	document.getElementById('qtyItems').innerHTML = qty + ' items';
}

$(document).ready(function(){
	$('.colorChoice').click(function(){
		$('.colorChoice').removeClass('highlight');
		$('.highlight').addClass('highlight');
		$(this).addClass('highlight');
	});
});