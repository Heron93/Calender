const currentDate = document.querySelector(".current-date"),
    daysTag = document.querySelector(".days");
// Get the anchor and image elements
const chevronLink1 = document.getElementById('chevronLink1');
const chevronLink2 = document.getElementById('chevronLink2');
const chevronImageL = document.getElementById('chevronImageL');
const chevronImageR = document.getElementById('chevronImageR');

// Add a click event listener to the anchor element
chevronLink1.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default link behavior

    
    console.log('Chevron left clicked!');
    currMonth = chevronLink1.id === "prev" ? currMonth : currMonth + 1;
    renderCalender();
});



chevronLink2.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default link behavior


    console.log('Chevron right clicked!');
    currMonth = chevronLink2.id === "next" ? currMonth : currMonth - 1;
   
    renderCalender();
});


let date = new Date(),
currYear = date.getFullYear(),
currMonth = date.getMonth();

const months = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"];

const renderCalender = () => {
    let lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate();
    let liTag = "";

    for (let i = 1; i <= lastDateofMonth; i++) {
        liTag += `  <li>${i}</li>`;
    }

    currentDate.innerText = `${months[currMonth]} ${currYear}`;
    daysTag.innerHTML = liTag;
}
renderCalender();

