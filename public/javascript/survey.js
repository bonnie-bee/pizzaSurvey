$("input").on("click", function (event) {
    console.log("hey");
    $(".alert").css("display", "none");
  })

  $("input").on("input", function () {
    const rangeVal = parseInt(this.value);
    const inputThumb = $(this);
    inputThumb.attr("value", rangeVal);
  })

  $("#surveySubBtn").on("click touchend", function () {
    event.preventDefault();
    let city = $("#city").val().trim();
    let place = $("#place").val().trim();
    let appearance = parseInt($("#appearance").val());
    let grease = parseInt($("#grease").val());
    let cheese = parseInt($("#cheese").val());
    let sauce = parseInt($("#sauce").val());
    let toppings = parseInt($("#toppings").val());
    let crust = parseInt($("#crust").val());
    let mouthfeel = parseInt($("#mouthfeel").val());
    let taste = parseInt($("#taste").val());
    let total = appearance + grease + cheese + sauce + toppings + crust + mouthfeel + taste
    console.log("total", total)

    if (!city && !place) {
      $(".alert").text("Enter City And Name Of Pizza Place");
      $(".alert").css("display", "block");
      return;
    } else if (!city) {
      $(".alert").text("Enter City");
      $(".alert").css("display", "block");
      return;
    } else if (!place) {
      $(".alert").text("Enter Name Of Pizza Place");
      $(".alert").css("display", "block");
      return;
    } else {
      $.post("/api/survey", {
        city: city,
        place: place,
        appearance: appearance,
        grease: grease,
        cheese: cheese,
        sauce: sauce,
        toppings: toppings,
        crust: crust,
        mouthfeel: mouthfeel,
        taste: taste,
        total: total
      }).then(function (events) {
        if (events === "/results") {
          window.location.replace(events)
        } else {
          console.log(events);
        }
      })
    }




  })


  function changeThumb() {

  }