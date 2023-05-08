function addFeedbackToLocalStorage() {
    // pega os valores do formulário
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const feedback = document.getElementById("feedback").value;

    if (email.indexOf("@") === -1) {
        alert("Please enter a valid email address.");
        return;
    }

    // verifica se o nome não é vazio
    if (name.trim() === "") {
        alert("Please enter your name.");
        return;
    }

    // cria um objeto com os valores do formulário
    const feedbackObj = { name, email, feedback };

    // converte o objeto em uma string
    const feedbackStr = JSON.stringify(feedbackObj);

    // adiciona a string no localStorage
    localStorage.setItem("feedback", feedbackStr);

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("feedback").value = "";
    alert("Thanks for your Feedback.");
}




function getFeedbackFromLocalStorage() {
    // pega a string do localStorage
    const feedbackStr = localStorage.getItem("feedback");

    // converte a string em um objeto
    const feedbackObj = JSON.parse(feedbackStr);

    // usa os valores do objeto como quiser
    console.log(feedbackObj.name);
    console.log(feedbackObj.email);
    console.log(feedbackObj.feedback);
}
