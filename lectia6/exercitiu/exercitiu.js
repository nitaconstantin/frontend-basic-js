function addValue() {
  let question = prompt(
    "Introduceti un numar, numar, sau textul adevarat sau fals"
  );
  let res = document.getElementById("result");
  if (question !== "") {
    if (!isNaN(question)) {
      question = parseInt(question);
      (res.innerText = question), "** are valoarea ", question * question;
    } else if (isNaN(question)) {
      if (question === "adevarat" || question === "fals") {
        res.innerText = "este corect poate fi adevarat sau fals!";
      } else {
        res.innerText = `Salut ${question} ! Bine ai venit la curs! `;
      }
    }
  } else {
    res.innerText =
      "Nu ati introdus nici o valoare.Va rugam introduceti un numar, nume sau textul adevarat sau fals";
  }
}
