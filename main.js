document.addEventListener("DOMContentLoaded", ()=>{
    const coords = document.getElementsByClassName("coords");
    const button = document.getElementsByClassName("button")[0];
    const result = document.getElementsByClassName("result")[0];

    button.addEventListener("click", ()=>{
        result.value = calculateID(coords[0].value, coords[1].value);
    });

    function calculateID(x, y){
        let result = "";
        if (y >= 0 && y <= 25) {
            result += "A";
            y -= 0;
        } else if (y >= 26 && y <= 51) {
            result += "B";
            y -= 26;
        } else if (y >= 52 && y <= 77) {
            result += "C";
            y -= 52;
        } else if (y >= 78 && y <= 103) {
            result += "D";
            y -= 78;
        } else if (y >= 104 && y <= 129) {
            result += "E";
            y -= 104;
        } else if (y >= 130 && y <= 155) {
            result += "F";
            y -= 130;
        } else if (y >= 156 && y <= 181) {
            result += "G";
            y -= 156;
        } else if (y >= 182 && y <= 207) {
            result += "H";
            y -= 182;
        } else if (y >= 208 && y <= 233) {
            result += "I";
            y -= 208;
        } else if (y >= 234 && y <= 259) {
            result += "J";
            y -= 234;
        } else if (y >= 260 && y <= 285) {
            result += "K";
            y -= 260;
        } else if (y >= 286 && y <= 311) {
            result += "L";
            y -= 286;
        } else if (y >= 312 && y <= 337) {
            result += "M";
            y -= 312;
        } else if (y >= 338 && y <= 363) {
            result += "N";
            y -= 338;
        } else if (y >= 364 && y <= 389) {
            result += "O";
            y -= 364;
        } else if (y >= 390 && y <= 415) {
            result += "P";
            y -= 390;
        }
        
        const alphabet = [];
        for (let i = 65; i <= 90; i++) {
            alphabet.push(String.fromCharCode(i));
        }

        result += alphabet[y] + "-";

        if(x < 10){
            result += "00" + x;
        }else if(x < 100){
            result += "0" + x;
        }else{
            result += x;git 
        }

        return result;
    }
});