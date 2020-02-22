const appElement = document.getElementById("app");
const eventList = [];
let isDone;
let count = 0;
let comboCount = 0;

function handleHomeLinkClick() {
  isDone = undefined;
  render();
}

function handleYesOnClick() {
  count++;
  comboCount++;
  isDone = true;
  eventList.push("powiodło się!");
  render();
}

function handleNoOnClick() {
  isDone = false;
  comboCount = 0;
  eventList.push("nie powiodło się");
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

function renderCountElement() {
  if (isDone === undefined) {
    return ""
  } else {
    return `
        <p>Zrealizowałem: ${count}</p>
        <p>"Dobra passa": ${comboCount}</p>
    `
  }
}

function renderEventsElement() {
  let eventsElement = `<ul>`
  for (let i = 0; i < eventList.length; i++) {
    eventsElement += `<li>${eventList[i]}</li>`
  }
  eventsElement += `</ul>`;
  return eventsElement
}

function renderAppElement() {
  const textElement = renderTextElement();
  const buttonsElement = renderButtonsElement();
  const countElement = renderCountElement();
  const eventsElement = renderEventsElement();

  return `
      <a onclick="handleHomeLinkClick()">Habits</a>
      ${textElement}
      ${buttonsElement}
      ${countElement}
      ${eventsElement}
    `
}

function render() {
  appElement.innerHTML = renderAppElement()
}

render();
