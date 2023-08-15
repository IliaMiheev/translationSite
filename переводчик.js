const inputField = document.getElementById("input-field");
const languageSelect = document.getElementById("language-select");
const translatedText = document.getElementById("translated-text");
const deleteButton = document.getElementById("delete-button");
inputField.addEventListener("input", function () {
    translateText();
});
languageSelect.addEventListener("change", function () {
    translateText();
}); deleteButton.addEventListener("click", function () {
    inputField.value = "";
    translatedText.textContent = "перевод";
});
function translateText() {
    const inputValue = inputField.value;
    const languageCode = languageSelect.value;
    const apiUrl = "https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=" + languageCode + "&dt=t&q=" + encodeURIComponent(inputValue);
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const translatedValue = data[0][0][0];
            const length = translatedValue.length; // длина текста

            // проверяем, делится ли длина на 27 без остатка
            if (length % 27 === 0) {
                translatedText.textContent = translatedValue
            } else {
                translatedText.textContent = translatedValue;
            }
        })
        .catch(error => console.error(error));
}