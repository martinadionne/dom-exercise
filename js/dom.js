//TASK 1
// access HTML element with id tag-line
var tagline = document.getElementById("tag-line");

//access all headings that belong to div with the class name bg-main-content
var headings  = document.querySelectorAll(".bg-main-content h2");

//create the variable collect and assign it with content of tag-line.
var collect = tagline.innerHTML+ "\n-------------------\n";

//Loop through the array of headings and append the content of each heading to variable collect
for (var i = 0; i < headings.length; i += 1) {
    collect += headings[i].innerHTML + "\n";
}
//After the loop, use alert to print collect
window.alert(collect);

//TASK 2
//Access 13th div with class name box that belongs to div with the class name bg-main-content. You can name the variable when_to_launch. 
var when_to_launch = document.querySelector(".bg-main-content");
var box = when_to_launch.querySelectorAll(".box")[12];


//Create the variable collect and assign it with content of heading that belongs to gotten array. Use property children to "scoop" in array all HTML elements that belong to that div.
var collect = "";
var HTMLelements = (box.children);

//Loop through the array starting with the second array element (the first one is heading and it is already assigned to variable collect) and append the content of array elements to variable collect.
for (var i =0; i<HTMLelements.length; i += 1) {
    collect += HTMLelements[i].innerHTML + "\n";
}
//After the loop, use alert to print collect
window.alert(collect);    