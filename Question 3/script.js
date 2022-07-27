// Question 3: Write a function that converts HEX to RGB. Then Make that function auto-detect the formats so that if you enter HEX color format it returns RGB and if you enter RGB color format it returns HEX.

const red = 245; const green = 246; const blue = 247;
const hex = '#f5f6f7';

function formatConverter (v1, v2, v3){
	if (typeof(v2) === 'undefined' || typeof(v3) === 'undefined') { //it's hex
		console.log(hexToRgb(v1));
	} else { //it's rgb
		console.log(rgbToHex(v1, v2, v3));
	}
}


function hexToRgb(hex){
	const rgb = parseInt(hex.replace('#', ''), 16);
	const r = (rgb >> 16) & 255;
	const g = (rgb >> 8) & 255;
	const b = rgb & 255;
	return r + ',' + g + ',' + b;
}

function rgbToHex(r,g,b){
	return '#' + auxiliarComponentToHex(r) + auxiliarComponentToHex(g) + auxiliarComponentToHex(b);
}

function auxiliarComponentToHex(e){
	let hex = e.toString(16);
	return hex.length === 1 ? '0' + hex : hex;
}