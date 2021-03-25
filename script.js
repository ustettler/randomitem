console.log("Random")

// Function RandomItem
function random(){
    //console.log("RandomItem")

    let divs = document.getElementById('wrapper').getElementsByTagName('div');

    // Loop durch alles Divs
    for(let i = 0, len = divs.length; i < len; i++){
        let div = divs[i];

        //Variable Item
        let item = +div.getElementsByClassName('item')[0].value;

        console.log("item : " + item);

        // Variable Random
        //let randomItem = Math.floor(Math.random() * item);
    }

    // Radom Item im Dom Anzeigen
        document.getElementById('randomItem').innerHTML = radomItem ;
}




   // Zufallszahl
    document.querySelector('#submit').addEventListener("click", ausgabeZufallszahl);

	let randomNumberMin = 000000000000;
		randomNumberMax = 999999999999;


	function rand (min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	function ausgabeZufallszahl () {
		document.querySelector('.output').innerText = rand(randomNumberMin,randomNumberMax);
	}