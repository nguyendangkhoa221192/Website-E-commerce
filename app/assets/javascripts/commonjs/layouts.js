/*-----------------------------------------------------------------------------------*/
/*	SHOPPING BAG
/*-----------------------------------------------------------------------------------*/
jQuery(document).ready(function() {
	jQuery('.shopping_bag .cart').slideUp(1);
	jQuery('.shopping_bag_btn').click(function(){
		jQuery('.shopping_bag .cart').slideToggle();
		jQuery('.shopping_bag .cart').parent().toggleClass('cart_active');
	});
});


/*-----------------------------------------------------------------------------------*/
/*	LOVE LIST
/*-----------------------------------------------------------------------------------*/
jQuery(document).ready(function() {
	jQuery('.love_list .cart').slideUp(1);
	jQuery('.love_list_btn').click(function(){
		jQuery('.love_list .cart').slideToggle();
		jQuery('.love_list .cart').parent().toggleClass('cart_active');
	});
});

/*-----------------------------------------------------------------------------------*/
/*	TOP SEARCH FORM
/*-----------------------------------------------------------------------------------*/
jQuery(document).ready(function() {
	jQuery('.top_search_form form').slideUp(1);
	jQuery('.top_search_btn').click(function(){
		jQuery('.top_search_form form').slideToggle();
		jQuery('.top_search_form form').parent().toggleClass('form_active');
	});
});
