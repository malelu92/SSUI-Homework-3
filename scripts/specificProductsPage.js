function addToCart() {
	var qty = $("#quantity").find(":selected").text();
	document.getElementById("qtyItems").innerHTML = qty + " items"
}