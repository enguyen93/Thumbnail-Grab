jQuery.ajaxPrefilter(function (options) {
    if (options.crossDomain && jQuery.support.cors) {
        options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
    }
});

$("#test-Btn").on("click", function () {
    console.log("it works");
    event.preventDefault();
    var input = $("#testsearch").val().trim();
    $.ajax({

        type: "GET",
        url: "http://www.youtube.com/oembed?url=" + input,
        headers: {
            "Client-ID": "3h185ufea6321xhqh2fawi17uy1uoy",
            "Accept": "application/vnd.twitchtv.v5+json"
        },
    }).then(function (response) {
        console.log(response);
        var thumbnailLink = response.thumbnail_url;
        var videoTitle = response.title;
        var card = $(".card").attr("style", "18rem");
        var picHolder = $("#picholder");
        var cardInfo = $("#cardInfo");
        picHolder.attr("src", thumbnailLink);
        cardInfo.html(videoTitle);
        $(".card-img-top").css({ "width": "600px", "height": "600px", "border-radius": "12px" });
        $(".imageContainer").append(card)
    });
});