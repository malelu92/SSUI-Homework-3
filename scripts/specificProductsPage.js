function addToCart(){
	size = getProductSelectChoice("size");
	qty = getProductSelectChoice("quantity");

	console.log(size)
	console.log(qty)
}

function getProductSelectChoice (id) {
    var selectTag = document.getElementById(id);
    var totalValues, size;

    totalValues = selectTag.options.length;
        for(var j=0; j<totalValues; j++){
        	if(selectTag.options[j].selected) {
        		return selectTag.options[j].text;
            }
        }
}

/*function addToCart() {
	//alert("lala")
	//var qty = $('#quantity').find(':selected').text();
	var qty = document.getElementById('quantity').innerHTML;
	console.log(qty.option.value)

	console.log(qty)
	//document.getElementById('qtyItems').innerHTML = qty + ' items';
}*/

/*$(document).ready(function(){
	$('.colorChoice').click(function(){
		$('.colorChoice').removeClass('highlight');
		$('.highlight').addClass('highlight');
		$(this).addClass('highlight');
	});
});*/