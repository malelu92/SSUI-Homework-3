function addToCart(){
	size = getProductSelectChoice('size');
	qty = parseInt(getProductSelectChoice('quantity'));
	color = getProductSelectChoice('color');

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
	var cartText = document.getElementById('shopping-cart-text').innerHTML;
	var qtyItems = cartText.substr(0,cartText.indexOf(' '));
	return parseInt(qtyItems)
}

function removeFromCart(obj) {
	var items = getTotalItemsCart();
	var elem;

	if (items > 0) {
		document.getElementById('shopping-cart-text').innerHTML = (items-1) + ' items';
		elem = obj.parentNode.parentNode.parentNode
		elem.remove();
	}
}


function updateShoppingCart(addQty) {
	var totalItems = getTotalItemsCart() + addQty;
	document.getElementById('shopping-cart-text').innerHTML = totalItems + ' items';
}