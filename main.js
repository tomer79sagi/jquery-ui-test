$( function() {
    $( "#slider" ).slider();

    alert('tomer');

    $("#slider").on("slidechange", (event, ui) => {
        alert(ui.value);
    });
  } );