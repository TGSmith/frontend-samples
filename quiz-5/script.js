$(document).ready(function($) {
	
    // I don't know why but "something" doesn't work unless i put setTimeout around it!!1! @_@
    var something = $($('#results-template').text());

    function is_pangram(str) {
	    var s = str.toLowerCase();
	    var alphabet = "abcdefghijklmnopqrstuvwxyz";

	   	for (var i = 0; i < 26; i++)
	        if (s.indexOf(alphabet.charAt(i)) == -1)
	            return false;
	    return true;
	} 

	$('form').on('submit', function() {

		var anotherSomething = something.clone();
		console.log(is_pangram($('form input[name=sentence]').val()));
			var newStr;
		 if (is_pangram($('form input[name=sentence]').val())==true){
			newStr = "is";
		}
		else{
			newStr = "is not";
		}

		anotherSomething.find('p.input').text($('form input[name=sentence]').val());
		anotherSomething.find('p.validation').text("This sentence "+ newStr +" a pangram!");

	    $('#results').prepend(anotherSomething);

        return false;
    });
});