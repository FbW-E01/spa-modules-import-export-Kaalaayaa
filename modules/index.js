import * as Helpers from "./percentage.js";

import { fixRoundingErrors, calculateAspectRatio } from "./aspect-ratio.js"


const resultModulo = document.querySelector("#modulo_result");

resultModulo.addEventListener("click", function() {
    const modulo1 = parseInt(document.querySelector("#modulo_1").value);
    const modulo2 = parseInt(document.querySelector("#modulo_2").value);
    resultModulo.value = Helpers.modulo(modulo1 ,modulo2);
});



const resultPercentage = document.querySelector("#percentage_result");

resultPercentage.addEventListener("click", function() {
    const percentage1 = parseInt(document.querySelector("#percentage_1").value);
    const percentage2 = parseInt(document.querySelector("#percentage_2").value);
    resultPercentage.value = Helpers.percentage(percentage1, percentage2);
});


const resultPercentageOf = document.querySelector("#percentageOf_result");

resultPercentageOf.addEventListener("click", function() {
    const percentageOf1 = parseInt(document.querySelector("#percentageOf_1").value);
    const percentageOf2 = parseInt(document.querySelector("#percentageOf_2").value);
    resultPercentageOf.value = Helpers.percentageOf(percentageOf1, percentageOf2);
});

const resultDifference = document.querySelector("#difference_result");

resultDifference.addEventListener("click", function() {
    const difference1 = parseInt(document.querySelector("#difference_1").value);
    const difference2 = parseInt(document.querySelector("#difference_2").value);
    resultDifference.value = Helpers.difference(difference1, difference2);
});



const aspectForm = document.querySelector("#aspect-form");
const newWidth = document.querySelector("#ratio_result-width");
const newHeight = document.querySelector("#ratio_result-height");

aspectForm.addEventListener("change", function (e) {
    let result;
    const ratio1 = parseInt(document.querySelector("#ratio_1").value);
    const ratio2 = parseInt(document.querySelector("#ratio_2").value);
    if (e.target.id === "ratio_result-width") {
    result = newHeight;
    result.value = calculateAspectRatio(ratio1, ratio2, newWidth.value, "w");
} else if (e.target.id === "ratio_result-height") {
    result = newWidth;
            result.value = calculateAspectRatio(ratio1, ratio2, newHeight.value, "h");
}
});


