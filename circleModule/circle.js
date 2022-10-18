module.exports = {
    circleArea,
    circleCircumference
}

function circleArea(radius) {
    result = Math.PI * radius * radius;
    console.log(result);
}

function circleCircumference(radius){
    result = 2 * Math.PI * radius;
    console.log(result);
}