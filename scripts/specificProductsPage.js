function addToCart(){
    var selectTag = document.getElementsByTagName("select");
    var totalTags = selectTag.length;
    var selectedValues = [];
    var totalValues;
    for(var i=0; i<totalTags; i++){
    	totalValues = selectTag[i].options.length;
        for(var j=0; j<totalValues; j++){
        	if(selectTag[i].options[j].selected) {
        		selectedValues.push(selectTag[i].options[j].text);
            }
        }
    }
    for (var i = 0; i < 2; i++){
    	console.log(selectedValues[i]);
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