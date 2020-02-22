const appElement = document.getElementById("app");
const eventList = [];
let isDone;
let count = 0;
let comboCount = 0;

function getDate() {
  const date = new Date();
  return `${date.toDateString()} ${date.toLocaleTimeString()}`
}

function handleHomeLinkClick() {
  isDone = undefined;
  render();
}

function handleYesOnClick() {
  count++;
  comboCount++;
  isDone = true;
  eventList.push({
    isDone,
    date: getDate()
  });
  render();
}

function handleNoOnClick() {
  isDone = false;
  comboCount = 0;
  eventList.push({
    isDone,
    date: getDate()
  });
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
      <button class="green" onclick="handleYesOnClick()">Tak</button>
      <button class="red" onclick="handleNoOnClick()"">Nie</button>
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

function renderEventElement(event) {
  return event.isDone ? `
  <li><span>${event.date}</span> <span>powiodło się!</span></li>`
    : `
  <li class="gray"><span>${event.date}</span> <span>nie powiodło się!</span></li>
  `
}

function renderEventsElement() {
  let eventsElement = `<ul>`
  for (let i = 0; i < eventList.length; i++) {
    eventsElement += renderEventElement(eventList[i])
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
      <a class="heading" onclick="handleHomeLinkClick()">Habits</a>
      <div class="padding-top-xs">
        ${textElement}
      </div>
      <div class="main-content-container padding-top-m">
        ${buttonsElement}
        ${countElement}
      </div>
      <div class="padding-top-s">
        ${eventsElement}
      </div>
    `
}

function render() {
  appElement.innerHTML = renderAppElement()
}

render();
