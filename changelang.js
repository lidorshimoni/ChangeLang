

let hebrew = ['/', 'Q', "'", 'W', 'ק', 'E', 'ר', 'R', 'א', 'T', 'ט', 'Y', 'ו', 'U', 'ן', 'I', 'ם', 'O', 'פ', 'P', ']', '}', '[', '{', 'ש', 'A', 'ד', 'S', 'ג', 'D', 'כ', 'F', 'ע', 'G', 'י', 'H', 'ח', 'J', 'ל', 'K', 'ך', 'L', 'ף', ':', ',', '"', '\\', '|', 'ז', 'Z', 'ס', 'X', 'ב', 'C', 'ה', 'V', 'נ', 'B', 'מ', 'N', 'צ', 'M', 'ת', '>', 'ץ', '<', '.', '?'];
let english = ['q', 'Q', 'w', 'W', 'e', 'E', 'r', 'R', 't', 'T', 'y', 'Y', 'u', 'U', 'i', 'I', 'o', 'O', 'p', 'P', '[', '{', ']', '}', 'a', 'A', 's', 'S', 'd', 'D', 'f', 'F', 'g', 'G', 'h', 'H', 'j', 'J', 'k', 'K', 'l', 'L', ';', ':', "'", '"', '\\', '|', 'z', 'Z', 'x', 'X', 'c', 'C', 'v', 'V', 'b', 'B', 'n', 'N', 'm', 'M', ',', '<', '.', '>', '/', '?'];

function changeLang()
{
	var range = document.getSelection().getRangeAt(0);
	var translated = translate(document.getSelection().toString());
	range.deleteContents();

	range.insertNode(document.createTextNode(translated));
}

function translate(original)
{
	original = original.split('');
	
	intersection1 = original.filter(value => -1 !== hebrew.indexOf(value)).length;
	intersection2 = original.filter(value => -1 !== english.indexOf(value)).length;
	
	if(intersection1 > intersection2)
	{
		target = english;
		source = hebrew;
	}
	else
	{
		target = hebrew;
		source = english;
	}
	
	var translated = "";
	for (var i =0;i<original.length;i++)
	{
		var index = source.indexOf(original[i]);
		if(index != -1){
			translated += target[index];
		}
		else{
			translated += original[i];
		}
	}
	
	return translated
}

chrome.runtime.onMessage.addListener(function(message, sender, callback) {
  // alert("msg"); // never worked
  if (message.functiontoInvoke == "change") {
    callback({yourFunc: changeLang()});
	// changeLang()
  }
});

