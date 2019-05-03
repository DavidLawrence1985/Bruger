
$(function(){
$("#burger-button").on("click", function(event) {
    event.preventDefault();

    var newBurger = {

      burger_name: $("#burger").val().trim(),
      
    };
    if(burger_name = false){
      alert("please add a burger before submit")
    }
    else {

      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          // console.log("created new burger" );
          location.reload();
        }
      );
    }
});

    $(".eat").on("click", function(event) {
      var id = $(this).data("id");

      var newStatus = {
        devoured: true
      };
  
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newStatus
      }).then(
        function() {
        //   console.log("burger", newStatus);
          location.reload();
        }
      );
    });
});
