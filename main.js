document.addEventListener("DOMContentLoaded", ()=>{
    const coords = document.getElementsByClassName("coords");
    const button = document.getElementsByClassName("button")[0];
    const result = document.getElementsByClassName("result")[0];

    const buttonID = document.getElementsByClassName("button")[1];
    const resultID = document.getElementsByClassName("result")[1];
    const id = document.getElementsByClassName("id")[0];

    buttonID.addEventListener("click", ()=>{
	resultID.value = calculateCoords(id.value);
    });
    button.addEventListener("click", ()=>{
        result.value = calculateID(coords[0].value, coords[1].value);
    });

    function calculateCoords(id){
    	let result = "";

	let x = id.split("-")[0];
	let y = id.split("-")[1];
	let tempX = 0;
	// AA-001
	if(x.charAt(0) == "A"){
		tempX = 0;
	}else if(x.charAt(0) == "B"){
		tempX = 26;
	}else if(x.charAt(0) == "C"){
		tempX = 52;
	}else if(x.charAt(0) == "D"){
		tempX = 78;
	}else if(x.charAt(0) == "E"){
		tempX = 104;
	}else if(x.charAt(0) == "F"){
		tempX = 130;
	}else if(x.charAt(0) == "G"){
		tempX = 156;
	}else if(x.charAt(0) == "H"){
		tempX = 182;
	}else if(x.charAt(0) == "I"){
		tempX = 208;
	}else if(x.charAt(0) == "J"){
		tempX = 234;
	}else if(x.charAt(0) == "K"){
		tempX = 260;
	}else if(x.charAt(0) == "L"){
		tempX = 286;
	}else if(x.charAt(0) == "M"){
		tempX = 312;
	}else if(x.charAt(0) == "N"){
		tempX = 338;
	}else if(x.charAt(0) == "O"){
		tempX = 364;
	}else if(x.charAt(0) == "P"){
		tempX = 390;
	}

	
	const alphabet = [];
        for (let i = 65; i <= 90; i++) {
            	alphabet.push(String.fromCharCode(i));
        }
 	tempX += alphabet.indexOf(x.charAt(1));

	result += tempX;
	result += "; " + parseInt(y);
	return result;
    }



    function calculateID(x, y){
        let result = "";
        if (x >= 0 && x <= 25) {
            result += "A";
            x -= 0;
        } else if (x >= 26 && x <= 51) {
            result += "B";
            x -= 26;
        } else if (x >= 52 && x <= 77) {
            result += "C";
            x -= 52;
        } else if (x >= 78 && x <= 103) {
            result += "D";
            x -= 78;
        } else if (x >= 104 && x <= 129) {
            result += "E";
            x -= 104;
        } else if (x >= 130 && x <= 155) {
            result += "F";
            x -= 130;
        } else if (x >= 156 && x <= 181) {
            result += "G";
            x -= 156;
        } else if (x >= 182 && x <= 207) {
            result += "H";
            x -= 182;
        } else if (x >= 208 && x <= 233) {
            result += "I";
            x -= 208;
        } else if (x >= 234 && x <= 259) {
            result += "J";
            x -= 234;
        } else if (x >= 260 && x <= 285) {
            result += "K";
            x -= 260;
        } else if (x >= 286 && x <= 311) {
            result += "L";
            x -= 286;
        } else if (x >= 312 && x <= 337) {
            result += "M";
            x -= 312;
        } else if (x >= 338 && x <= 363) {
            result += "N";
            x -= 338;
        } else if (x >= 364 && x <= 389) {
            result += "O";
            x -= 364;
        } else if (x >= 390 && x <= 415) {
            result += "P";
            x -= 390;
        }
        
        const alphabet = [];
        for (let i = 65; i <= 90; i++) {
            alphabet.push(String.fromCharCode(i));
        }

        result += alphabet[x] + "-";

        if(y < 10){
            result += "00" + y;
        }else if(y < 100){
            result += "0" + y;
        }else{
            result += y;
        }

        return result;
    }
});
