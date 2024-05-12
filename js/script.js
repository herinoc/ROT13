function encrypt() {
    var inputText = document.getElementById("input").value;
    var outputText = "";

    for (var i = 0; i < inputText.length; i++) {
        var charCode = inputText.charCodeAt(i);

        if (charCode >= 65 && charCode <= 90) {
            outputText += String.fromCharCode(((charCode - 65 + 13) % 26) + 65);
        } else if (charCode >= 97 && charCode <= 122) {
            outputText += String.fromCharCode(((charCode - 97 + 13) % 26) + 97);
        } else {
            outputText += inputText.charAt(i);
        }
    }
    document.getElementById("input").value = "";
    document.getElementById("output").value = outputText;
}

function decrypt() {
    var inputText = document.getElementById("output").value;
    var outputText = "";

    for (var i = 0; i < inputText.length; i++) {
        var charCode = inputText.charCodeAt(i);

        if (charCode >= 65 && charCode <= 90) {
            outputText += String.fromCharCode(((charCode - 65 + 13) % 26) + 65);
        } else if (charCode >= 97 && charCode <= 122) {
            outputText += String.fromCharCode(((charCode - 97 + 13) % 26) + 97);
        } else {
            outputText += inputText.charAt(i);
        }
    }
    document.getElementById("output").value = "";
    document.getElementById("input").value = outputText;
}