document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var inputA = parseFloat(document.getElementById("inputA").value);
    var inputB = parseFloat(document.getElementById("inputB").value);

    if (inputB > inputA) {
        alert("Formulário válido! B é maior que A.");
    } else {
        alert("Formulário inválido! B deve ser maior que A.");
    }






