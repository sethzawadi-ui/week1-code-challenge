// This function calculates the net salary when the button is clicked
function calculateNetSalary() {
  // Get user inputs
  const basicSalary = Number(document.getElementById("basic").value);
  const benefits = Number(document.getElementById("benefits").value);

  // Calculate gross salary
  const grossSalary = basicSalary + benefits;

  // ---- PAYE (KRA tax bands for Kenya, simplified) ----
  let payee;
  if (grossSalary <= 24000) {
    payee = grossSalary * 0.1;  // 10%
  } else if (grossSalary <= 32333) {
    payee = grossSalary * 0.25; // 25%
  } else {
    payee = grossSalary * 0.30; // 30%
  }

  // ---- NHIF (simplified brackets) ----
  let nhif;
  if (grossSalary <= 5999) nhif = 150;
  else if (grossSalary <= 7999) nhif = 300;
  else if (grossSalary <= 11999) nhif = 400;
  else if (grossSalary <= 14999) nhif = 500;
  else if (grossSalary <= 19999) nhif = 600;
  else if (grossSalary <= 24999) nhif = 750;
  else if (grossSalary <= 29999) nhif = 850;
  else if (grossSalary <= 34999) nhif = 900;
  else if (grossSalary <= 39999) nhif = 950;
  else if (grossSalary <= 44999) nhif = 1000;
  else if (grossSalary <= 49999) nhif = 1100;
  else if (grossSalary <= 59999) nhif = 1200;
  else if (grossSalary <= 69999) nhif = 1300;
  else if (grossSalary <= 79999) nhif = 1400;
  else if (grossSalary <= 89999) nhif = 1500;
  else if (grossSalary <= 99999) nhif = 1600;
  else nhif = 1700;

  // ---- NSSF (simplified: 6% of gross capped at 1080) ----
  let nssf = grossSalary * 0.06;
  if (nssf > 1080) nssf = 1080;

  // Calculate net salary
  const netSalary = grossSalary - (payee + nhif + nssf);

  // Show results
  document.getElementById("output").innerHTML = `
    Gross Salary: Ksh ${grossSalary.toFixed(2)} <br>
    PAYE (Tax): Ksh ${payee.toFixed(2)} <br>
    NHIF Deduction: Ksh ${nhif.toFixed(2)} <br>
    NSSF Deduction: Ksh ${nssf.toFixed(2)} <br>
    <strong>Net Salary: Ksh ${netSalary.toFixed(2)}</strong>
  `;
}