var quote1 = {
	quote: "'I am happy today'",
	author: "Bailey",
	tags: ["happy", "random"],
	color: "#800080",
	display: function() {
		var quoteString = "";
		quoteString += "<div style='background:" + this.color + "'>";
		quoteString += "<p>" + this.quote + "</p>";
		quoteString += "<cite>" + this.author + "</cite>";
		quoteString += "</div>"
		$("body").prepend(quoteString)
	}
}

quote1.display();

console.log(quote1.quote)