$(document).ready(function (){
    // Add smooth scrolling to all links
    $("a").on("click",function(event) {
    // make sure this.hash has a value before overriding default behaviour
    if(this.hash !==""){
        // prevent default anchor click behaviour
        event.preventDefault();

        // store hash
        var hash = this.hash;

        // using Jquery's animate() method to add smooth page scroll
        // the optimal number(800) specifies the number of milliseconds it takes to scroll to the specified area
        $("html, body").animate(
            {
                scrollTop:$(hash).offset().top,
            },
            800,function(){
                // add hash(#) to URL when done scrolling (default click behaviour)
                window.location.hash = hash;
            }
        );
    }//end if
    });
});