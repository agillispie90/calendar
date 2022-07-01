const d = new Date();
let currentMonth = d.getMonth()
let currentDay = d.getDate()
let currentYear = d.getFullYear()



let monthName = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];



let monthDisplay = monthName[currentMonth];
let monthDisplayQ = document.getElementById('month');
monthDisplayQ.innerText=monthDisplay;
let yearDisplay = currentYear;
let yearDisplayQ = document.getElementById('year');
yearDisplayQ.innerText = yearDisplay;


function changeYear(plusMinus){
    let currentMonthDisplay = document.getElementById('month');
    let i = monthName.indexOf(String(currentMonthDisplay.innerText));
    if(plusMinus=='minus'){
        let yearChange = document.getElementById('year');
         yearDisplay--;
         yearChange.textContent=yearDisplay
         let daysToGen = getDays(yearChange.textContent,i+1)
        replaceHTML()
        generateDays(daysToGen+1)
        getDays(yearDisplayQ.textContent,i+1);
        
    } else if(plusMinus =='plus') {
        let yearChange = document.getElementById('year');
         yearDisplay++;
         yearChange.textContent=yearDisplay
         let daysToGen = getDays(yearChange.textContent,i+1)
        replaceHTML()
        generateDays(daysToGen+1)
        getDays(yearDisplayQ.textContent,i+1);
    }
};

//month buttons

//subtracting a month
let yearChange = document.getElementById('year');
function changeMonth(plusMinus) {
    if(plusMinus=='minus'){
        let monthChange = document.getElementById('month');
        let yearChange = document.getElementById('year');
        let currentMonthDisplay = document.getElementById('month');
        let i = monthName.indexOf(String(currentMonthDisplay.innerText))
        if(i>0){
        i--;
        monthChange.textContent=monthName[i];
        let daysToGen = getDays(yearChange.textContent,i+1)
        replaceHTML()
        generateDays(daysToGen+1)
        getDays(yearDisplayQ.textContent,i+1);
        
    }
    //rolling back to previous year
    else 
        {
            monthChange.textContent='December'
            yearDisplay--;
            yearDisplayQ.textContent = yearDisplay;
            let daysToGen = getDays(yearChange.textContent,i+1)
         replaceHTML()
         generateDays(daysToGen+1)
        getDays(yearDisplayQ.textContent,i+1);
        }} 


        //adding a month
    else {
        let monthChange = document.getElementById('month');
        let currentMonthDisplay = document.getElementById('month');
        monthName.indexOf(String(currentMonthDisplay.innerText))
        let i = monthName.indexOf(String(currentMonthDisplay.innerText))
        if(i<11){
        i++;
        monthChange.textContent=monthName[i];
        let daysToGen = getDays(yearChange.textContent,i+1)
         replaceHTML()
         generateDays(daysToGen+1)
        getDays(yearDisplayQ.textContent,i+1);
    }
    //rolling forward to next year
    else 
        {
            monthChange.textContent='January'
            yearDisplay++;
            yearDisplayQ.textContent = yearDisplay;
            let daysToGen = getDays(yearChange.textContent,i+1)
         replaceHTML()
         generateDays(daysToGen+1)
        getDays(yearDisplayQ.textContent,i+1);
        }   
    }
    
    };

    //function for getting days in a month
    function getDays(year, month) {
        return new Date(year, month, 0).getDate();  
    };

   let currentMonthDays = getDays(currentYear,currentMonth);
  
 // function for getting the first day of the month
  function getFirstDay() {
    let firstDay = new Date(String(monthDisplayQ.textContent)+ '1' +','+ String(yearDisplayQ.textContent)).getDay()
    return firstDay;
  };

  

  //function for generating days on the calendar table
  function generateDays(days){
    
    for(let i = 1; i < days; i++){
        let day = document.getElementById(getFirstDay());
        let dayDisp = document.createTextNode(i);
        const p = document.createElement('p');
        p.textContent = i
        day.insertAdjacentElement("beforeBegin",p).classList.add('dayGenerated')
       
    }
  }
  
 generateDays(currentMonthDays)

 
 

 function replaceHTML(){
    let oldCalendar = document.getElementById('days');
    oldCalendar.innerHTML = '<p class="daysgen" id="0"></p><p class="daysgen" id="1"></p><p class="daysgen" id="2"></p><p class="daysgen" id= "3"></p><p class="daysgen" id="4"></p><p class="daysgen" id="5"></p><p class="daysgen" id="6"></p>'
 }




//function for selecting a date

function datePicker(){
    let dayPicked = document.getElementById('dayGenerated');
    let dayPickedQ = document.getElementById('datepicked')
    dayPicked.addEventListener('click', () => {
        dayPickedQ.textContent = `${month.textContent}`
    
    })
}