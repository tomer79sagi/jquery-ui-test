$( function() {
    $( "#slider" ).slider();

    $("#slider").on("slidechange", (event, ui) => {
        alert(ui.value);
    });
  } );