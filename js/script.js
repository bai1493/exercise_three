var img = document.createElement("img")
var imgName = ["lake", "lake2", "lakecloseup", "lakelouise", "lakelouise2","morrainelake", "morrainelake2", "morrainelake3", "rocks", "waterfall"] 
img.src = "img/" + imgName + ".jpg"
var src = document.getElementById("images")
 


function Image(image, author, tags) {
	this.image = image;
	this.author = author;
	this.tags = tags;
	this.display = function() {

		var container = $("<div>")
		this.tags.forEach(function(tag){
			container.addClass(tag);
		})

		container.css("background", this.image)

		var imageString = "";
		imageString += "<img src ='" + this.image + "'>";
		imageString += "<cite>" + this.author + "</cite>";

		container.html(imageString)
		$(".images").prepend(container)
	}
}



var images = [

	new Image("src.appendChild(img))", 
	"Bailey Robertson", ["happy", "random"]),

	new Image("'I am also happy'", 
 	"Bailey Robertson", ["emotions", "random"])
 ]


//global taglist
var tagList = []

images.forEach(function(image){
	image.display();
	image.tags.forEach(function(tag){
		//check if tag is added to taglist
		if(!tagList.includes(tag)){
			//if it isnt added, add it
			tagList.push(tag);
			//and make button for it
			$(".buttons").prepend("<button class ='filter' id='" + tag + "'>" + tag + "</button>")
		}
		
	})	
})

$(".filter").on("click", function(){
	var tag = $(this).attr("id");

	$("div > div ").not("." + tag).hide();
	$("." + tag).fadeIn();

	$(".filter").removeClass("active")
	$(this).addClass("active")
})






