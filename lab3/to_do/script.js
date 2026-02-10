console.log("SCRIPT LOADED");


let currentSemester = 1;
let currentWeek = 1;
const store = {};
const sem1Btn = document.querySelector(".sem-1");
const sem2Btn = document.querySelector(".sem-2");
const weekButtons = document.querySelectorAll(".weeks-btn button");
const input = document.querySelector(".input-add");
const addBtn = document.querySelector(".add-btn")
const tasksUl = document.querySelector(".tasks");

function key() {
    return `${currentSemester}-${currentWeek}`;
}

function getTasks() {
    return store[key()] || [];
}

function setTasks(arr) {
    store[key()] = arr;
}

function setActiveSemester() {
    sem1Btn.classList.toggle("active", currentSemester === 1);
    sem2Btn.classList.toggle("active", currentSemester === 2);
}

function setActiveWeek() {
    weekButtons.forEach((b) => {
        b.classList.toggle("active", Number(b.textContent) === currentWeek);
    });
}

function render() {
  tasksUl.innerHTML = "";
  const tasks = getTasks();

  tasks.forEach((t, i) => {
    const li = document.createElement("li");
    li.className = "task" + (t.done ? " done" : "");

    const cb = document.createElement("input");
    cb.type = "checkbox";
    cb.checked = t.done;

    cb.addEventListener("change", () => {
      const updated = getTasks();
      updated[i].done = cb.checked;
      setTasks(updated);
      render();
    });

    const span = document.createElement("span");
    span.textContent = t.text;

    const del = document.createElement("button");
    del.className = "deleteBtn";
    del.type = "button";
    del.textContent = "✕";
    del.addEventListener("click", () => {
      const updated = getTasks().filter((_, idx) => idx !== i);
      setTasks(updated);
      render();
    });

    li.appendChild(cb);
    li.appendChild(span);
    li.appendChild(del);

    tasksUl.appendChild(li);
  });
}

function addTask() {
  const text = input.value.trim();
  if (text === "") return;

  const tasks = getTasks();
  tasks.push({ text, done: false });
  setTasks(tasks);

  input.value = "";
  render();
}

sem1Btn.addEventListener("click", () => {
  currentSemester = 1;
  currentWeek = 1;
  setActiveSemester();
  setActiveWeek();
  render();
});

sem2Btn.addEventListener("click", () => {
  currentSemester = 2;
  currentWeek = 1;
  setActiveSemester();
  setActiveWeek();
  render();
});

weekButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    currentWeek = Number(btn.textContent);
    setActiveWeek();
    render();
  });
});

addBtn.addEventListener("click", addTask);

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") addTask();
});

setActiveSemester();
setActiveWeek();
render();