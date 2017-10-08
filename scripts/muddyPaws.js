function addToCart(){
	size = getProductSelectChoice('size');
	qty = parseInt(getProductSelectChoice('quantity'));

	console.log(size)
	console.log(qty)
	//getProductColor()

	updateShoppingCart(qty)
}

function getProductSelectChoice(id) {
    var selectTag = document.getElementById(id);
    var totalValues, size;

    totalValues = selectTag.options.length;
        for(var j=0; j<totalValues; j++){
        	if(selectTag.options[j].selected) {
        		return selectTag.options[j].text;
            }
        }
}

function getTotalItemsCart () {
	var cartText = document.getElementById('shoppingCartText').innerHTML;
	var qtyItems = cartText.substr(0,cartText.indexOf(' '));
	return parseInt(qtyItems)
}

function removeFromCart(obj) {
	var items = getTotalItemsCart();
	var elem;

	if (items > 0) {
		document.getElementById('shoppingCartText').innerHTML = (items-1) + ' items';
		elem = obj.parentNode.parentNode
		elem.remove();
	}
}


function updateShoppingCart(addQty) {
	var totalItems = getTotalItemsCart() + addQty;
	document.getElementById('shoppingCartText').innerHTML = totalItems + ' items';
}

/*function getColor() {
	//var tag = document.getElementById("colors");
	var color = document.getElementById("strawberry");
	console.log(color)
	if (color.onclick) {
		console.log("ckic")
	}
	//console.log(tag.children[1].getAttribute("id"))
	//console.log(tag.children[2])
}*/

/*document.addEventListener('click', function(e) {
    alert(e.target.id);
});
*/

/*$(document).ready(function(){
	$('.colorChoice').click(function(){
		$('.colorChoice').removeClass('highlight');
		$('.highlight').addClass('highlight');
		$(this).addClass('highlight');
	});
});*/