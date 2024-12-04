
const mealDaysContainer = document.getElementById("mealDays");


const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];


mealDaysContainer.innerHTML = daysOfWeek
  .map(
    (day) => `
    <div class="day-plan">
      <h3>${day}</h3>
      <input type="text" placeholder="Breakfast 🥞" id="${day.toLowerCase()}Breakfast">
      <input type="text" placeholder="Snack 🍎" id="${day.toLowerCase()}Snack1">
      <input type="text" placeholder="Lunch 🍲" id="${day.toLowerCase()}Lunch">
      <input type="text" placeholder="Snack 🍪" id="${day.toLowerCase()}Snack2">
      <input type="text" placeholder="Dinner 🍛" id="${day.toLowerCase()}Dinner">
    </div>
    `
  )
  .join("");


document.getElementById("generatePlan").addEventListener("click", () => {
  const userName = document.getElementById("name").value;
  const userEmail = document.getElementById("email").value;

  if (!userEmail.includes("@")) {
    alert("Please enter a valid email address!");
    return;
  }

  const mealPlan = daysOfWeek.map((day) => {
    return `
      <h3>${day}</h3>
      <ul>
        <li>Breakfast: ${document.getElementById(`${day.toLowerCase()}Breakfast`).value}</li>
        <li>Snack 1: ${document.getElementById(`${day.toLowerCase()}Snack1`).value}</li>
        <li>Lunch: ${document.getElementById(`${day.toLowerCase()}Lunch`).value}</li>
        <li>Snack 2: ${document.getElementById(`${day.toLowerCase()}Snack2`).value}</li>
        <li>Dinner: ${document.getElementById(`${day.toLowerCase()}Dinner`).value}</li>
      </ul>
    `;
  }).join("");

  const newWindow = window.open("", "MealPlan", "width=600,height=800");
  newWindow.document.write(`
    <html>
    <head>
      <title>${userName}'s Meal Plan</title>
      <style>
        body { font-family: Arial, sans-serif; padding: 20px; }
        h1 { color: #ff69b4; }
        ul { list-style: none; padding: 0; }
        li { margin-bottom: 5px; }
      </style>
    </head>
    <body>
      <h1>${userName}'s Weekly Meal Plan</h1>
      <p>Email: ${userEmail}</p>
      <p>Goal: ${document.getElementById("goal").value}</p>
      ${mealPlan}
    </body>
    </html>
  `);
});

document.getElementById("clearPlan").addEventListener("click", () => {
  document.querySelectorAll("input[type='text']").forEach((input) => {
    input.value = "";
  });
});

document.getElementById("printPlan").addEventListener("click", () => {
  window.print();
});
