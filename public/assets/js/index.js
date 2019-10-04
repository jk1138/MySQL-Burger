$("#burger-form").submit(function (event) {
    console.log("test")
    event.preventDefault();

    var newBurger = {
        burger_name: $("#burger").val().trim(),
        devoured: 0
    };

    $.post("/api/burgers", newBurger).then(function (data) {
        console.log(data);
    });

    $("#burger").val("");
    location.reload();
});

  $(".change-devoured").on("click", function(event) {
    var id = $(this).data("id");
    var newDevoured = $(this).data("newdevoured");

    var newDevouredState = {
      devoured: newDevoured
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevouredState
    }).then(
      function() {
        console.log("changed devoured to", newDevoured);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });