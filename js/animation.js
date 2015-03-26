$(document).ready(function(){
	$(" #loading ").click(function () {
		$(" #loading ").fadeOut( "slow" );
	});
	
	$( ".feedRecipeWrap" ).click(function () {
		$( "#recipe_wrap" ).removeClass( "hide" );
        $( "#recipe_wrap" ).addClass( "show" );
	});

	$(".mdi-image-navigate-before").click(function () {
		$( "#recipe_wrap" ).removeClass( "show" );
        $( "#recipe_wrap" ).addClass( "hide" );
        $( ".foodOverview" ).removeClass( "blur" );
        $( ".cardWrap" ).fadeOut( 100 );
	});
	$( ".foodOverview" ).click(function () {
		$(this).addClass( "blur" );
		$( ".cardWrap" ).fadeIn( 100 );
	});

	$( ".mdi-action-search" ).click(function () {
	$( "#search:hidden:first" ).fadeIn(30);
	});
	$( ".cancelBtn" ).click(function () {
	$( "#search" ).fadeOut(100);
	});

    $(".typeArea").focusin(function(){
        $( "input" ).addClass( "bigger" );
        $( ".cancelBtn" ).addClass( "disappear" );
    });
    $( ".typeArea" ).focusout(function(){
        $( "input" ).removeClass( "bigger" );
        $( ".cancelBtn" ).removeClass( "disappear" );
    });

	$( ".step_01").click(function () {
		$( " .cardWrap " ).addClass( "move_01" );
	});
	$(".intro").click(function () {
		$( ".cardWrap " ).removeClass( "move_01" );
	});
	$(".step_02").click(function () {
		$( ".cardWrap" ).addClass( "move_02" );
	});
	$(".step_01").click(function () {
		$( ".cardWrap" ).removeClass( "move_02" );
	});
	$(".step_03").click(function () {
		$( ".cardWrap" ).addClass( "move_03" );
	});
	$(".step_02").click(function () {
		$( ".cardWrap" ).removeClass( "move_03" );
	});
});