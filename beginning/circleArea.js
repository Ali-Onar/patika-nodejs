// area of ​​the circle =  pi x r²
function circleArea(r) {
    var result = Math.PI * r * r;
    result = result.toFixed(2);
    console.log(`Yarıçapı ${r} olan dairenin alanı: ${result} şeklinde olmalıdır`);
}

circleArea = circleArea(5);
console.log(circleArea);