//main.js
import $ from "jquery"

$(document).ready(function(){
    $("#menu-toggle").change(function(){
        if(this.checked) {
            $("#burger p").text("Close");
        } else {
            $("#burger p").text("Menu");
        }
    });
});