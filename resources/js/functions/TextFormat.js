import _ from "lodash";

function CapitalizeText(text) {
    const capitalizedText = (text = text
        .split(" ")
        .map((v, k) => _.capitalize(v))
        .join(" "));
    console.log(capitalizedText);
    return capitalizedText;
}

export { CapitalizeText };
