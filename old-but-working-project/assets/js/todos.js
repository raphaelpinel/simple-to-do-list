//Check off specific Todos by clicking
// $("li").click(function(){
// 	//if it is gray
// 	if($(this).css("color") === "rgb(128, 128, 128)"){
// 		// turn it black
// 		$(this).css({
// 			"color": "black",
// 			"textDecoration": "none"
// 		})
// 		console.log("it is currently gray!")
// 	} else {
// 	//turn it gray
// 	$(this).css({
// 		"color": "gray",
// 		"textDecoration": "line-through"
// 	})	
// 	}
	
// })
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
	});

//click on X to delete Todo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	})
	event.stopPropagation();
});

//add a new todo via input
$("input[type='text']").keypress(function(event){
	if(event.which === 13) {
		// grabbing new todo text from input
		var todoText = $(this).val();
		// create a new li and add to ul
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i> </span>" + todoText + "</li>")
		$(this).val("");
	}
})

$(".fa-plus").click(function(){
$("input[type='text']").fadeToggle();
});















