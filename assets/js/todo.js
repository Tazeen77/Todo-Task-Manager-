//Check Off Specifc Todos By Clicking
$("ul").on("click","li",function(){
	$(this).toggleClass("completed");
	
});


//Click on X to delete Todo
$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	//jquery method to stop bubbling as span is the part of li
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which == 13){
			//grabbing new todo text from the input
			var todoText = $(this).val();
			//create a new li and add to ul
			$(this).val("");
			$('ul').append("<li><span> <i class='fa fa-trash'></i> </span>"+todoText+"</li>")
		}

});

$(".fa-plus").click(function(){
	$('input').fadeToggle();
});


