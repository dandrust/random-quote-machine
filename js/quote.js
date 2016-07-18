// start this script when page is loaded
$(document).ready(function() {
	// Listen for click on element with id=trigger, then execute the function
	$("#trigger").on("click", function(quotes) {
    // set quote object as variable quotes
    var quotes = [{"id":"1",
    						"author":"Audre Lorde",
								"quote":"The master's tools will never dismantle the master's house."},
							 {"id":"2",
								"author":"Margaret Walker",
								"quote":"Only ways you can keep folks hating is to keep them apart and separate them from each other."},
							 {"id":"3",
								"author":"Rita Dove",
								"quote":"Listen to how they say your name.  If they can’t say that right, there’s no way they’re going to know how to treat you proper, neither."},
							 {"id":"4",
								"author":"Ronald Takaki",
								"quote":"America’s dilema has been our resistance to ourselves - our denial of our immensely varied selves."},
							 {"id":"5",
								"author":"Patricia Williams",
								"quote":"Very little in our language or culture encourages looking at others as part of ourselves."},
					 		 {"id":"6",
								"author":"Muhammad Ali",
								"quote":"I try to learn as much as I can because I know nothing compared to what I need to know."},
							 {"id":"7",
								"author":"Maxine Hong Kingston",
								"quote":"I learned to make my mind large, as the universe is large, so that there is room for paradoxes."},
							 {"id":"8",
								"author":"Nelson Mandela",
								"quote":"Education is the most powerful weapon which you can use to change the world."},
							 {"id":"9",
								"author":"Ella Baker",
								"quote":"It is better to concentrate on what can be done than to despair about what cannot be done."},
							 {"id":"10",
								"author":"Nam Le",
								"quote":"Any place if beautiful: if you treat it as the answer to a question you’re asking yourself every day, just by being there."},
							 {"id":"11",
								"author":"Nikki Giovanni",
								"quote":"We love because it’s the only true adventure."},
							 {"id":"12",
								"author":"Howard Thurman",
								"quote":"To love is to make of one’s heart a swinging door."},
							 {"id":"13",
								"author":"Maya Angelou",
								"quote":"Nobody, but nobody / Can make it out here alone"},
							 {"id":"14",
								"author":"Leslie Marmon Silko",
								"quote":"To share one’s food is to demonstrate one’s humanity."},
							 {"id":"15",
								"author":"Walter Mosley",
								"quote":"Our labor is designed to maintain the values of our economy…Not human values but the values of the system that rules us."},
							 {"id":"16",
								"author":"Ernestine Anderson",
								"quote":"Nobody can teach you to sing the blues, you have to feel the blues."},
							 {"id":"17",
								"author":"Edwidge Danticat",
								"quote":"In fiction you can look through everyone’s eyes, and that’s where I feel most at ease."},
					 		 {"id":"18",
								"author":"Ella Baker",
								"quote":"I am here and so are you.  And we matter. We can change things."},
							 {"id":"19",
								"author":"Winona LaDuke",
								"quote":"Change will come.  As always, it is just a matter of who determines what that change will be."},
							 {"id":"20",
							  "author":"Elaine Kim",
					  		"quote":"No matter what, in the end there is no real turning away from other people’s misery, poverty, or lack of freedom."},
							 {"id":"21",
							  "author":"Beth Richie",
							  "quote":"Ultimately, we must be accountable not to those in power, but to the powerless."},
					  		{"id":"22",
							  "author":"Bayard Rustin",
							  "quote":"Let us be enraged about injustice, but let us not be destroyed by it."},
							 {"id":"23",
					  		"author":"Angela Davis",
							  "quote":"Prisons do not disappear problems, they disappear human beings."},
							 {"id":"24",
							  "author":"Jimi Hendrix",
					  		"quote":"When the power of love overcomes the love of power, the world will know peace."}];
		// Set variable for random number to select quote
    var random = Math.floor(Math.random()*25);
    // Pull value for key 'author' and set as author variable
    var author = quotes[random].author;
    // Pull value from key 'quote' and set as quoteText variable
    var quoteText = quotes[random].quote;
    // Create a link to publish quote of twitter
    var twitterLink = "http://www.twitter.com/intent/tweet?text=" + encodeURIComponent(quoteText + "-" + author);
    // Create HTML to be pushed to page
    var html = quoteText + "<br><p class='author'> -" + author + "</p>";
    // Erase html that is child of element class=author
    $(".author").html("");
    // Set html for element class=quote
    $(".quote").html(html);
    // set attribute 'href' to twitterLink for element class=tweet
    $(".tweet").attr("href",twitterLink);
  });
  $("#trigger").trigger("click");
});
