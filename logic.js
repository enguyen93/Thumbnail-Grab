jQuery.ajaxPrefilter(function (options) {
    if (options.crossDomain && jQuery.support.cors) {
        options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
    }
});

$("#test-Btn").on("click", function (event) {
    console.log("it works");
    event.preventDefault();
    var input = $("#testsearch").val().trim();
    $.ajax({

        type: "GET",
        url: "http://www.youtube.com/oembed?url=" + input
    }).then(function (response) {
        console.log(response);
        var thumbnailLink = response.thumbnail_url;
        var videoTitle = response.title;
        var card = $("<div>").addClass("card")
        card.attr("style", "18rem");
        var picHolder = $("<img>").addClass("card-image-top");
        var cardInfo = $("<h4>");
        var subTitle = $("<p>").html("Youtube Title")
        picHolder.attr("src", thumbnailLink);
        cardInfo.html(videoTitle);
        card.append(picHolder);
        card.append(cardInfo)
        card.append(subTitle)
        card.css({ "width": "600px", "border-radius": "12px", "text-align": "center" });
        $("#dumpithere").html(card);
    });
});