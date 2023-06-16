$(function() {
    $("input[type='radio']").on("click", function() {
      const rating = $("input[name='rating']:checked").val();
      $("span").text(rating);
    });

    $("form").on("submit", function(e) {
        e.preventDefault();
        $(".thank-you-state").css("display", "grid");
        $(".rating-state").css("display", "none");
    })
  });

