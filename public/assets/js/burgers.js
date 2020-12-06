$(() => {
    $('.change-devoured').on('click', function (event) {
         var id = $(this).data('id');
         var newDevoured = $(this).data('newdevoured');
    
         console.log({ id, newDevoured });
         var newDevouredState = {
           devoured: newDevoured,
         };
    
         $.ajax('/api/burgers/' + id, {
           type: 'PUT',
           data: newDevouredState,
         }).then(() => {
           console.log('changed Devoured to', newDevoured);
           location.reload();
         });
       });


    $(".create-form").on("submit", function(event) {
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#bgr").val().trim(),
        devoured: $("[name=devoured]:checked").val().trim()
      };
  
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          location.reload();
        }
      );
    });
  
    $(".delete-burger").on("click", function(event) {
      var id = $(this).data("id");
      console.log(" hello this is id....", id)
      $.ajax("/api/burgers/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted burger", id);
          location.reload();
        }
      );
    });
  });
  