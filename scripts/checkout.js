$(document).ready(function(){
	document.getElementById("removeItem").onclick = function(){
		var qty = document.getElementById("qtyItems").textContent;
		var qtyValue = parseInt(qty.substr(0,qty.indexOf(' ')));
		if (qtyValue > 0) {
			var inCart = qtyValue-1;
			document.getElementById('qtyItems').innerHTML = inCart + ' items';
		}
}
});