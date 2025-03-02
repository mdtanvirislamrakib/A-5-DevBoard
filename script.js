
// disabled completed buttons added
const completeButtoons = document.querySelectorAll('.complete-button');
const cardTitles = document.querySelectorAll(".card-title");
const container = document.getElementById("history");
const taskComplete = document.getElementById("task-complete");
const taskAssinged = document.getElementById("task-assinged");


for (let i = 0; i < completeButtoons.length; i++) {
    completeButtoons[i].addEventListener('click', function () {
        alert("Board Updated Successfully")
        completeButtoons[i].classList.add("disabled:bg-gray-400", "disabled:cursor-not-allowed");
        completeButtoons[i].setAttribute("disabled", true);


        
        if (completeButtoons[0].hasAttribute("disabled") && completeButtoons[1].hasAttribute("disabled") && completeButtoons[2].hasAttribute("disabled") && completeButtoons[3].hasAttribute("disabled") && completeButtoons[4].hasAttribute("disabled") && completeButtoons[5].hasAttribute("disabled")) {
            alert("Congratulates!! You have completed the current task");
        }

        // task complete count 
        const taskCompleteCount = parseInt(taskComplete.innerText) + 1;
        taskComplete.innerText = taskCompleteCount;

        // task assinged count 
        const taskAssingedCount = parseInt(taskAssinged.innerText) - 1;
        taskAssinged.innerText = taskAssingedCount;
        

        // added activity section
        const time = new Date();
        const formattedDateTime = time.toLocaleTimeString();

        const div = document.createElement("div");

        // const div = document.createElement("div");
        div.classList.add("bg-sky-50", "p-2", "mb-3", "rounded-lg", "text-sm");

        div.innerHTML = `
            <p>You have completed the task <strong>${cardTitles[i].innerText}</strong> at ${formattedDateTime}</p>
        `;

        container.appendChild(div);
    });
};




// add today 
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const today = new Date().getDay();
document.getElementById("dayDisplay").innerText = days[today];

const todayDate = document.getElementById("today-date");
todayDate.innerText = new Date().toDateString().slice(4);


// background color chnage 
const changeBg = document.getElementById("change-bg");
const colors = ["bg-sky-50", "bg-pink-50", "bg-gray-100", "bg-yellow-50", "bg-lime-100", "bg-emerald-100"];
let index = 0;
changeBg.addEventListener("click", function () {
    const bodyBg = document.getElementById("body-bg");
    for (let i = 0; i < colors.length; i++) {
        bodyBg.classList.remove(colors[i]);
    }
    bodyBg.classList.add(colors[index]);
    if (index < colors.length - 1) {
        index++;
    } else {
        index = 0;
    }
});


// clear activity log section

const clearButton = document.getElementById("clear-button");
clearButton.addEventListener("click", function() {
    container.innerHTML = "";
    
})

// blog click page
const blog = document.getElementById("blog");
blog.addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = "./blog.html"
});