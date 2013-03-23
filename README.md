jQuery.naviDropDown
===================
##Simple jQuery Dropdown Menu with Easing and hoverIntent

Here is a simple jQuery plugin I wrote recently which allows you to create a simple drop down menu, utilising hoverIntent, and jQuery’s own slideUp and slideDown effects. You can also set the orientation of the drop down depending if your navigation is horizontal (default) or vertical, and set the duration and easing method of both slideUp and slideDown on initiation of the plugin.

#### The Plugin – jquery.naviDropDown:
Example below shows initiation of horizontal (default) and vertical orientations.

```javascript
$(function(){
  $('#navigation_horiz').naviDropDown({
    dropDownWidth: '300px'
  });

  $('#navigation_vert').naviDropDown({
    dropDownWidth: '300px',
    orientation: 'vertical'
  });
});
```

#### Default operation (parameters):
For all the easing methods see <a href="http://gsgd.co.uk/sandbox/jquery/easing/">jQuery Easing Plugin</a>

```javascript
dropDownClass: 'dropdown', //the class name for your drop down
dropDownWidth: 'auto', //the default width of drop down elements
slideDownEasing: 'easeInOutCirc', //easing method for slideDown
slideUpEasing: 'easeInOutCirc', //easing method for slideUp
slideDownDuration: 500, //easing duration for slideDown
slideUpDuration: 500, //easing duration for slideUp
orientation: 'horizontal' //orientation - either 'horizontal' or 'vertical'
```

#### CSS: 
For vertical orientation – just remove the <em>float:left</em> from the <em>#navigation_vert ul li</em> or check the example below. Also <em>*display:inline-block;</em> resolves the gap issues between list items in Internet Explorer 7, this is only needed for vertical orientation.

```css
/* ----------------------------------------------------- */
/* navigation styles - BEGIN */

/* style for horizontal nav */
#navigation_horiz {width:820px; clear:both; padding:0 0 0 0; margin:0 auto}
#navigation_horiz ul {height:50px; display:block}
#navigation_horiz ul li {display:block; float:left; width:200px; height:50px; background:#999; margin:0 1px 0 0; position:relative}
#navigation_horiz ul li a.navlink {display:block; width:200px; height:30px; padding: 20px 0 0 0; text-align:center; color:#fff; text-decoration:none}
#navigation_horiz .dropdown {position:absolute; padding:20px; border-bottom-right-radius:10px; border-bottom-left-radius:10px; -moz-border-radius-bottomright:10px; -moz-border-radius-bottomleft:10px}

/* style for vertical nav */
#navigation_vert {width:820px; clear:both; padding:0 0 0 0; margin:0 auto}
#navigation_vert ul {height:50px; display:block}
#navigation_vert ul li {display:block; width:200px; height:50px; background:#999; margin:0 0 1px 0; position:relative}
#navigation_vert ul li a.navlink {display:block; *display:inline-block; width:200px; height:30px; padding: 20px 0 0 0; text-align:center; color:#fff; text-decoration:none}
#navigation_vert .dropdown {position:absolute; padding:20px; border-bottom-right-radius:10px; border-top-right-radius:10px; -moz-border-radius-bottomright:10px; -moz-border-radius-topright:10px}

/* style for each drop down - horizontal */
#navigation_horiz ul li #dropdown_one {background:#ccc; color:#fff}
#navigation_horiz ul li #dropdown_one a {color:red}
#navigation_horiz ul li #dropdown_two {background:#ccc; color:#fff}
#navigation_horiz ul li #dropdown_two a {color:black}
#navigation_horiz ul li #dropdown_three {background:#ccc; color:#fff}
#navigation_horiz ul li #dropdown_three a {color:gray}

/* style for each drop down - vertical */
#navigation_vert ul li #dropdown_four {background:#333; color:#fff}
#navigation_vert ul li #dropdown_four a {color:red}
#navigation_vert ul li #dropdown_five {background:#666; color:#fff}
#navigation_vert ul li #dropdown_five a {color:black}
#navigation_vert ul li #dropdown_six {background:#777; color:#fff}
#navigation_vert ul li #dropdown_six a {color:orange}

/* navigation styles - END */
/* ----------------------------------------------------- */
```

####HTML:
The element for the drop down is <em>.dropdown</em> – which is set as a parameter into the plugin, but can be changed, you can place any html within this element, each dropdown element can have its own styles, you can see that I have individually styled them via the CSS above targeting its ID. (The third list item does not have a drop down attached to it in the examples).

```html
<div id="navigation_horiz">
  <ul>
    <li>
      <a href="" class="navlink">List Item</a>
        <div class="dropdown" id="dropdown_one">
          <p><a href="#">This is a Link</a></p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin blandit sodales justo, id fringilla eros dapibus vitae. Morbi molestie enim diam, a vulputate neque. Morbi sit amet nunc id quam mollis aliquet. Donec sed massa justo, ut congue enim. Praesent lobortis viverra dolor commodo euismod. </p>
        </div><!-- .dropdown_menu -->
    </li>
    <li>
      <a href="" class="navlink">List Item</a>
        <div class="dropdown" id="dropdown_two">
          <p><a href="#">This is a Link</a></p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin blandit sodales justo, id fringilla eros dapibus vitae. Morbi molestie enim diam, a vulputate neque. Morbi sit amet nunc id quam mollis aliquet. Donec sed massa justo, ut congue enim. Praesent lobortis viverra dolor commodo euismod. </p>
        </div><!-- .dropdown_menu -->
    </li>
    <li><a href="" class="navlink">List Item</a></li>
    <li>
      <a href="" class="navlink">List Item</a>
        <div class="dropdown" id="dropdown_three">
          <p><a href="#">This is a Link</a></p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin blandit sodales justo, id fringilla eros dapibus vitae. Morbi molestie enim diam, a vulputate neque. Morbi sit amet nunc id quam mollis aliquet. Donec sed massa justo, ut congue enim. Praesent lobortis viverra dolor commodo euismod. </p>
        </div><!-- .dropdown_menu -->
    </li>
  </ul>
</div><!-- #navigation_horiz -->
```
####Limitations:
The default width of each dropdown is set to auto, so the automatic width will adjust to the width of the button for which the drop down is applied to. The plugin does not automatically calculate the width of the dropdown based on what is within it. You can manually overide the width from initiation – this applies to horizontal and vertical orientation. This is a basic jquery drop down menu, which obviously could be expanded, but can be customised further using CSS.
