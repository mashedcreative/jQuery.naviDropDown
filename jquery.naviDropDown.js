/**
* plugin: jquery.naviDropDown.js
* author: KT Cheung
* website: www.mashedcreative.com
* description: simple jquery navigation drop down menu with easing and hoverIntent
**/

(function($){

  $.fn.naviDropDown = function(options) {  
  
	//set up default options 
	var defaults = { 
		dropDownClass: 'dropdown', //the class name for your drop down
		dropDownWidth: 'auto',	//the default width of drop down elements
		slideDownEasing: 'easeInOutCirc', //easing method for slideDown
		slideUpEasing: 'easeInOutCirc', //easing method for slideUp
		slideDownDuration: 500, //easing duration for slideDown
		slideUpDuration: 500, //easing duration for slideUp
		orientation: 'horizontal' //orientation - either 'horizontal' or 'vertical'
	}; 
  	
	var opts = $.extend({}, defaults, options); 	

    return this.each(function() {  
	  var $this = $(this);
	  $this.find('.'+opts.dropDownClass).css('width', opts.dropDownWidth).css('display', 'none');
	  
	  var buttonWidth = $this.find('.'+opts.dropDownClass).parent().width() + 'px';
	  var buttonHeight = $this.find('.'+opts.dropDownClass).parent().height() + 'px';
	  if(opts.orientation == 'horizontal') {
		$this.find('.'+opts.dropDownClass).css('left', '0px').css('top', buttonHeight);
	  }
	  if(opts.orientation == 'vertical') {
		$this.find('.'+opts.dropDownClass).css('left', buttonWidth).css('top', '0px');
	  }
	  
	  $this.find('li').hoverIntent(getDropDown, hideDropDown);
    });
	
	function getDropDown(){
		activeNav = $(this);
		showDropDown();
	}
	
	function showDropDown(){
		activeNav.find('.'+opts.dropDownClass).slideDown({duration:opts.slideDownDuration, easing:opts.slideDownEasing});
	}
	
	function hideDropDown(){
		activeNav.find('.'+opts.dropDownClass).slideUp({duration:opts.slideUpDuration, easing:opts.slideUpEasing});//hides the current dropdown
	}
	
  };
})(jQuery);