
$(function(){
$(".create-form").on("submit", function(event) {
    event.preventDefault();

    var newBurger = {

      burger_name: $("#burger").val().trim(),
      
    };

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger" );
        location.reload();
      }
    );
});

    $(".eat").on("click", function(event) {
      var id = $(this).data("id");
    //   var eaten = $(this).data("eaten");data="{{id}}"
      
      var newStatus = {
        devoured: true
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newStatus
      }).then(
        function() {
          console.log("burger", newStatus);
          location.reload();
        }
      );
    });
});
