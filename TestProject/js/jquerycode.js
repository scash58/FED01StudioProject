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