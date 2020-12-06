$(() => {
    $(".change-devoured").on("click", (event) => {
      var id = $(this).data("id");
      var newDevoured = $(this).data("newDevoured");
  
      var newDevouredState = {
        devoured: newDevoured
      };
  
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevouredState
      }).then(
        () => {
          console.log("changed Devoured to", newDevoured);
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", (event) => {
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#bgr").val().trim(),
        devoured: $("[name=devoured]:checked").val().trim()
      };
  
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        () => {
          console.log("created new burger");
          location.reload();
        }
      );
    });
  
    $(".delete-burger").on("click", (event) => {
      var id = $(this).data("id");
  
      $.ajax("/api/burgers/" + id, {
        type: "DELETE"
      }).then(
        () => {
          console.log("deleted burger", id);
          location.reload();
        }
      );
    });
  });
  