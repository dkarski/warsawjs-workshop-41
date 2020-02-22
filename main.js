const appElement = document.getElementById("app");
let isDone;

function handleYesOnClick() {
  isDone = true;
  render();
}

function handleNoOnClick() {
  isDone = false;
  render();
}

function renderTextElement() {
  let text = '';
  if (isDone === undefined) {
    text = "Czy zrealizowałeś dzisiejszy nawyk?"
  } else if (isDone) {
    text = "Świetnie!";
  } else {
    text = "Próbuj dalej ;)";
  }

  return `
    <p>${text}</p>
  `
}

function renderButtonsElement() {
  if (isDone === undefined) {
    return `
      <button onclick="handleYesOnClick()">Tak</button>
      <button onclick="handleNoOnClick()"">Nie</button>
    `
  } else {
    return ""
  }
}

function renderAppElement() {
  const textElement = renderTextElement();
  const buttonsElement = renderButtonsElement();

  return `
      <a href="">Habits</a>
      ${textElement}
      ${buttonsElement}
    `
}

function render() {
  appElement.innerHTML = renderAppElement()
}

render();
