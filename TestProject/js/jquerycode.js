//Below is a fully-qualified ready function
//It waits for HTML and CSS to load before executing the code inside of the function

//We can also use the shortcut
$(function () {

    /////////// CUSTOM LIGHTBOX /////////////
    //When a user clicks on a thumbnail image, display the lightbox container and insert
    //an <img> tag

    $(".thumb").on("click", function () {

        //find the scr of the image that was clicked and store it as a variable
        var imgSrc = $(this).attr("src");

        //Plug an <img> tag into the #lightbox-content -- we will use imgSrc as the src
        $("#lightbox-content").html('<img src="' + imgSrc + '" class="img-responsive" />');

        //Make the lightbox visible by fading it in
        $("#lightbox-container").fadeIn(500);

        //When the user clicks anywhere in the #lightbox-container, fadeOut()
        $("#lightbox-container").on("click", function () {
            $(this).fadeOut(500);
        });

    });

});

//Create a new Date object to display our copyright info
let currentDate = new Date(); //Empty constructor -- for Date objects, this defaults to today's date

console.log(currentDate + " -- Current Date");

//Create a variable to take ONLY the year from our currentDate object
let currentYear = currentDate.getFullYear();

//Remember that JS is an Object Oriented language. This means that objects have properties (props)  that
//are like nouns, as well as methods which are like verbs.
//Above, currentYear was created from the Date() consturctor method, which means it can call methods
//int he Date class. The getFullYear() we used is an example of an instance method.

console.log(currentYear + " -- Current Year");

//Use the value of currentYear as the content for the <span id="copyright">
//Create a variable to capture the <span> from the HTML document
let copyright = document.getElementById("copyright");

console.log(copyright);

//To update the content of an element, we can use .textContent
copyright.textContent = currentYear;