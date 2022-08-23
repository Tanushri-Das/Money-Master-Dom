
const newArr = [];
var calculatePlayerExpences = 0;

function displayplayername(name){
    const tableBody = document.getElementById('playersname-cart');
    tableBody.innerHTML='';
  
    
 for(let i=0;i<name.length;i++){
    
    const participantname = name[i].playerName;

      const tableContainer = document.createElement("tr");
  tableContainer.innerHTML = `
  <th>${i+1}</th>
  <td>.</td>
  <td>${participantname}</td>
  
  `;
    tableBody.appendChild(tableContainer);
  
    
 }
 
}
var calculatePlayerExpences = 0;
function playersName(element){
    
    const playerName = element.parentNode.children[1].innerText;
    
    const playerobj = {
        playerName : playerName
        
    }
    newArr.push(playerobj);
    if (newArr.length > 5) {
      alert('You already selected 5 players');
      return;
  }
  else {
      newPlayerNumber = newArr.length;
  }
  document.getElementById('selected-playername').innerText = newPlayerNumber;
  displayplayername(newArr);
 
  
}
document.getElementById('calculate-player-expences-btn').addEventListener('click', function () {

    const perPlayerExpensesField = document.getElementById('per-player-expenses');
    const perPlayerExpense = perPlayerExpensesField.value;
  
    calculatePlayerExpences = newPlayerNumber * perPlayerExpense;
    const playerExpences = document.getElementById('player-expences');
    playerExpences.innerText = calculatePlayerExpences;
  
  })
  document.getElementById('total-budget').addEventListener('click', function () {
   
    var managerCost = document.getElementById('manager-expense');
    var managerCost = parseFloat(managerCost.value);
    var coachCost = document.getElementById('coach-expense');
    var coachCost = parseFloat(coachCost.value);

    var totalAmountOfManagerAndCoach = managerCost + coachCost;
    totalAmountOfManagerAndCoach = parseFloat(totalAmountOfManagerAndCoach);

  
    var totalBudget = totalAmountOfManagerAndCoach + calculatePlayerExpences;
  
    totalBudget = parseFloat(totalBudget);

    var newTotalBudget = document.getElementById('total-expenses');
    newTotalBudget.innerText = totalBudget;
  })