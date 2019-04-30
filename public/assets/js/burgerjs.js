
$(function(){
$(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      burger_name: $("#burger").val().trim(),
      
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
});

    $("#eat").on("click", function(event) {
      var id = $(this).data("id");
      var eaten = $(this).data("eaten");
  
      var newStatus = {
        devoured: true
      };
  
      // Send the PUT request.
      $.ajax("/api/burger/" + id, {
        type: "PUT",
        data: newStatus
      }).then(
        function() {
          console.log("burger", newStatus);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
});
