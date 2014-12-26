/**
*
* Developed By Prashant Patel
*
* The implementation considers a Div structure in the following manner : 
*   <div class = "myslideshow" style = "height:auto">
*		<div class = "panel"> This is panel 1
*			<p class = controls>
*				<a href="#2' class="next"> Include some button image </a>
*			</p>
*		</div>
*		<div class = "panel"> This is panel 2
*			<p class = controls>
*				<a href="#1' class="prev"> Include some button image </a>
*				<a href="#3' class="next"> Include some button image </a>
*			</p>
*		</div>
*		<div class = "panel"> This is panel 3
*			<p class = controls>
*				<a href="#2' class="prev"> Include some button image </a>
*				<a href="#3' class="next"> Include some button image </a>
*			</p>
*		</div>
*		
*	</div>
* Details - intially hide the all the Divs except the first div. Then on clicking the Next button of first Div, hide the current div
*			and show the next div based on the href attribute value and class attibute of anchor tag
**/
	$(document).ready(function(){

	// used .find and .css jQuery function to hide all divs except current div. This way we show only the first Panel initially
	$('.myslideshow').find('> .panel:eq(0)').nextAll().css({'opacity':'0','display':'none'});

	// on clicking to anchor tag, include the Jquery callback function
	$('.controls > a').click(function(event) {
		event.preventDefault();

		// use .parents function to select the upper elements in the DOM. This way we get the current slide
		var currentslide = $(this).parents('.panel:first');

		// use .index Jquery function to get the index of currentSlide.
		var currentposition = $('.slideshow .panel').index(currentslide);

		// use .attr Jquery function to get the value of the attribute
		// This way our class attribute of anchor would help us in denoting which Arrow was clicked - was it next arrow or previous arrow.
		var nextposition = ($(this).attr('class')=='next') ? currentposition+1 : currentposition-1;

		// using .animate JQuery function, we can fade the current slide and do certain operations on its call back
		$('.slideshow .panel:eq('+currentposition+')').animate({opacity: 0}, 250, function() {

			// Hide the current slide
			$('.slideshow .panel:eq('+currentposition+')').css('display','none');

			// Show the next slide
			$('.slideshow .panel:eq('+nextposition+')').css('display','block');

			//fade the Next Slide in.
			$('.slideshow .panel:eq('+nextposition+')').animate({opacity: 100}, 1500);
		  }
		);
	});

	});
	
