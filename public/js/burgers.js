$(document).ready(function () {


    $(".submit").click(function (event) {
        event.preventDefault();
        console.log('CLicked');
        var burger_id = $(this).data("id");
        $.ajax({
            method: "PUT",
            url: "/api/burgers/" + burger_id
        }).then(function(data) {
            location.reload()
        })

    });
        $("#text-enter-button").click(function(event){
            var newBurger = {
                name: $("#enter_text").val(),
                devoured: 0

            }
            $.ajax({
                method: "POST",
                url: "/api/burgers/" 
            }).then(function(data) {
                location.reload()
            })
    
            

        })
//     $(".makeburger").click(function (event) {
//         event.preventDefault();
        
//         var burger_id = $(this).data("id");
//         var burgerUpdate = {
//             id: burger_id,
//             devoured: 0
//         }
//         $.ajax("/", {type:"PUT", data: burgerUpdate}).then(function(data) {
//             location.reload();
//         })

//     });
})