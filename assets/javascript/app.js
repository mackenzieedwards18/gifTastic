var topics = ["spiderman", "deadpool", "iron man", "captain america", "black widow", "groot", "star-lord", "black panther", "wolverine", "venom", "hulk", "thor",]

function button() {
    $('#marvelButtons').empty();

    for (var i = 0; i < topics.length; i++) {
        $('#marvelButtons').append("<button type=button class='topic-button btn btn-primary'>" + topics[i] + "</button");
    };
};

button();

$('#additional').on('click', function(event) {
    event.preventDefault();
    var userInput = $('#marvel').val().trim();

    if (!userInput == " "){
        topics.push(userInput);
        button();
        console.log(topics);
        userInput = $('#marvel').val(" ");
    }
});

$(document).on("click", ".topic-button", function() {
    $('#marvelGif').empty();

    var apiKey = "Gr2wDpPec076Wp5CfQzit7KtG2yXAwpu"
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + $(this).html() + "&api_key=" + apiKey + "&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).done(function(response){
        console.log(response.data);

        var results = response.data;

        for (var j = 0; j < results.length; j++) {

            var newImage = $("<img>");
            newImage.attr("src", results[j].images.fixed_height_still.url);
            newImage.attr("alt", "missing gif");
            newImage.attr("id", "new-gif" + j);

            $("#marvelGif").append(newImage);
        }

        
        var isMoving0 = false;
		$(document).on("click", "#new-gif0" , function() {

			if (!isMoving0) {
				$("#new-gif0").attr("src", results[0].images.fixed_height.url); 
				isMoving0 = true;
			} else {
				$("#new-gif0").attr("src", results[0].images.fixed_height_still.url); 
				isMoving0 = false;
			}

        });
        
        var isMoving1 = false;
		$(document).on("click", "#new-gif0" , function() {

			if (!isMoving1) {
				$("#new-gif1").attr("src", results[0].images.fixed_height.url); //makes the gif move
				isMoving0 = true;
			} else {
				$("#new-gif1").attr("src", results[0].images.fixed_height_still.url); //makes the gif stop
				isMoving0 = false;
			}

        });

        var isMoving2 = false;
		$(document).on("click", "#new-gif2" , function() {

			if (!isMoving2) {
				$("#new-gif2").attr("src", results[2].images.fixed_height.url); //makes the gif move
				isMoving2 = true;
			} else {
				$("#new-gif2").attr("src", results[2].images.fixed_height_still.url); //makes the gif stop
				isMoving2 = false;
			}

		});

		
		var isMoving3 = false;
		$(document).on("click", "#new-gif3" , function() {

			if (!isMoving3) {
				$("#new-gif3").attr("src", results[3].images.fixed_height.url); //makes the gif move
				isMoving3 = true;
			} else {
				$("#new-gif3").attr("src", results[3].images.fixed_height_still.url); //makes the gif stop
				isMoving3 = false;
			}

		});


		
		var isMoving4 = false;
		$(document).on("click", "#new-gif4" , function() {

			if (!isMoving4) {
				$("#new-gif4").attr("src", results[4].images.fixed_height.url); //makes the gif move
				isMoving4 = true;
			} else {
				$("#new-gif4").attr("src", results[4].images.fixed_height_still.url); //makes the gif stop
				isMoving4 = false;
			}

		});


		
		var isMoving5 = false;
		$(document).on("click", "#new-gif5" , function() {

			if (!isMoving5) {
				$("#new-gif5").attr("src", results[5].images.fixed_height.url); //makes the gif move
				isMoving5 = true;
			} else {
				$("#new-gif5").attr("src", results[5].images.fixed_height_still.url); //makes the gif stop
				isMoving5 = false;
			}

		});


		
		var isMoving6 = false;
		$(document).on("click", "#new-gif6" , function() {

			if (!isMoving6) {
				$("#new-gif6").attr("src", results[6].images.fixed_height.url); //makes the gif move
				isMoving6 = true;
			} else {
				$("#new-gif6").attr("src", results[6].images.fixed_height_still.url); //makes the gif stop
				isMoving6 = false;
			}

		});


		
		var isMoving7 = false;
		$(document).on("click", "#new-gif7" , function() {

			if (!isMoving7) {
				$("#new-gif7").attr("src", results[7].images.fixed_height.url); //makes the gif move
				isMoving7 = true;
			} else {
				$("#new-gif7").attr("src", results[7].images.fixed_height_still.url); //makes the gif stop
				isMoving7 = false;
			}

		});


		
		var isMoving8 = false;
		$(document).on("click", "#new-gif8" , function() {

			if (!isMoving8) {
				$("#new-gif8").attr("src", results[8].images.fixed_height.url); //makes the gif move
				isMoving8 = true;
			} else {
				$("#new-gif8").attr("src", results[8].images.fixed_height_still.url); //makes the gif stop
				isMoving8 = false;
			}

		});


	
		var isMoving9 = false;
		$(document).on("click", "#new-gif9" , function() {

			if (!isMoving9) {
				$("#new-gif9").attr("src", results[9].images.fixed_height.url); //makes the gif move
				isMoving9 = true;
			} else {
				$("#new-gif9").attr("src", results[9].images.fixed_height_still.url); //makes the gif stop
				isMoving9 = false;
			}

		});



    })
})