function addToCart(){
    var selectTag = document.getElementsByTagName("select");
    var totalTags = selectTag.length;
    var output = "";
    for(var i=0; i<totalTags; i++){
        output += selectTag[i].name + ":\n";
        for(var j=0, lenj=selectTag[i].options.length; j<lenj; j++){
        	if(selectTag[i].options[j].selected) {
            output += "\t- " 
                   //+ s[i].options[j].value 
                   + " (" + selectTag[i].options[j].text + "): " 
                   + (selectTag[i].options[j].selected ? 'Yes' : 'No') 
                   + "\n";
            }
        }
    }
    alert(output);
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