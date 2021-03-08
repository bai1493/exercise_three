
function Image(image, location, tags) {
	this.image = image;
	this.location = location;
	this.tags = tags;
	this.display = function() {

		var container = $("<div>")
		this.tags.forEach(function(tag){
			container.addClass(tag);
		})

		container.css("background", this.image)
		container.css("background-size", "cover")

		var imageString = "";
		imageString += "<div>" + this.image + "</div>";
		imageString += "<cite>" + this.location + "</cite>";

		container.html(imageString)
		$(".images").prepend(container)
	}
}

var imgName = ["lake", "lake2", "lakecloseup", "lakelouise", 
				"lakelouise2","morrainelake", "morrainelake2",
				"morrainelake3", "rocks", "waterfall"]

var images = [


	new Image( "url(img/" + imgName[0] + ".JPG)",
	"Bailey Robertson", ["happy", "random"]),

	new Image("url(img/" + imgName[1] + ".JPG)", 
 	"Bailey Robertson", ["emotions", "random"]),

 	new Image("url(img/" + imgName[2] + ".JPG)", 
 	"Bailey Robertson", ["emotions", "random"]),

 	new Image("url(img/" + imgName[3] + ".JPG)", 
 	"Bailey Robertson", ["emotions", "random"]),

 	new Image("url(img/" + imgName[4] + ".JPG)", 
 	"Bailey Robertson", ["emotions", "random"]),

 	new Image("url(img/" + imgName[5] + ".JPG)", 
 	"Bailey Robertson", ["emotions", "random"]),

 	new Image("url(img/" + imgName[6] + ".JPG)", 
 	"Bailey Robertson", ["emotions", "random"]),

 	new Image("url(img/" + imgName[7] + ".JPG)", 
 	"Bailey Robertson", ["emotions", "random"]),

 	new Image("url(img/" + imgName[8] + ".JPG)", 
 	"Bailey Robertson", ["emotions", "random"]),

 	new Image("url(img/" + imgName[9] + ".JPG)", 
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






