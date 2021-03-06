// ==UserScript==
// @name		Support Bar
// @include		http://scratch.mit.edu/discuss/topic/*
// @version		0.1
// @grant		none
// ==/UserScript==

var textcontent = "<form><input type='radio' name='choice' value='support' />&nbspYes<br /><br />Comments or reason?<input type='radio' name='choice' value='nosupport' />&nbspNo<br /><br /><textarea id='comments' rows='1' cols='100'></textarea><br /><br /><input type='button' value='Submit' id='submitsupport'></input></form>";
var boxhead = "<div class='box text-center'><div class='boxhead support-check'><h2>Do you support?</h2></div>";
var boxcontent = "<div class='box-content'>" + textcontent + "</div></div>";

var feedback;

$('#brdheader').after(boxhead + boxcontent);

$('.support-check').css({
  "padding":"5px",
  "text-align":"center"
});

$('.text-center').css('text-align', 'center');

$('#submitsupport').click(function() {
    if ($("input[name=choice]:checked").val() == 'support') {
        feedback = "Support.  ";
    } else if ($("input[name=choice]:checked").val() == 'nosupport') {
        feedback = "No support.  ";
    }
    feedback += $('#comments').val();
});
