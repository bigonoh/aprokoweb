function amountSplit(
  numbersToBeDeducted = [300000, 300000, 500000, 500000, 1600000],
  mainNumber,
  counter = 0,
  numberArray = []
) {
  if (mainNumber > numbersToBeDeducted[counter]) {
    let result = mainNumber - numbersToBeDeducted[counter];
    numberArray.push(numbersToBeDeducted[counter]);
    mainNumber = result;
    counter++;
    return amountSplit(numbersToBeDeducted, mainNumber, counter, numberArray);
  } else {
    numberArray.push(mainNumber);
    return numberArray;
  }
}
function getTotalPAye(
  amountsArray = [300000, 300000, 500000, 500000, 1600000, 1800000],
  percentage = [7, 11, 15, 19, 21, 24],
  counter = 0,
  totalPaye = 0
) {
  if (counter < amountsArray.length) {
    let percent = percentage[counter] / 100;
    let result = amountsArray[counter] * percent;
    totalPaye += result;
    counter++;
    return getTotalPAye(amountsArray, percentage, counter, totalPaye);
  } else {
    return totalPaye;
  }
}
//NHF = 2.5% of 40% of gross salary
const nhfCalculations = (grossSalary) => {
  let NHF = parseFloat(40) / parseFloat(100);
  NHF = parseFloat(NHF) * parseFloat(grossSalary);
  let mainNHF = parseFloat(2.5) / parseFloat(100);
  mainNHF = parseFloat(mainNHF) * parseFloat(NHF);
  return mainNHF;
};
//Pension = 8% of 70% of gross salary
const pensionCalculations = (grossSalary) => {
  let pension = parseFloat(70) / parseFloat(100);
  pension = parseFloat(pension) * parseFloat(grossSalary);
  let mainPension = parseFloat(8) / parseFloat(100);
  mainPension = parseFloat(mainPension) * parseFloat(pension);
  return mainPension;
};
const calculatePayeTax = (monthlyGrossSalary) => {
  //get annual gross salary
  let annualGrossSalary = monthlyGrossSalary * 12;
  const nhf = nhfCalculations(annualGrossSalary);
  const pension = pensionCalculations(annualGrossSalary);

  let annualNhf = nhf;
  let annualPension = pension;
  //get A
  let A = 1 / 100;
  A = annualGrossSalary * A;
  A = A > 200000 ? A : 200000;
  //get B
  let B = 20 / 100;
  B = annualGrossSalary * B;
  B = B > 200000 ? B : 200000;
  //C = Annual NHF + Annual Pension
  let C = annualNhf + annualPension;
  //D = Annual gross salary - (A+B+C)
  let D = annualGrossSalary - (A + B + C);
  let Rate = amountSplit([300000, 300000, 500000, 500000, 1600000], D, 0, []);
  let annualPAYE = getTotalPAye(Rate, [7, 11, 15, 19, 21, 24], 0, 0);
  // PAYE Monthly = Annual PAYE/12
  let monthlyPaye = annualPAYE / 12;
  return { monthlyPaye, annualPAYE };
};
export const exportgetTaxes = (monthlyGrossSalary) => {
  const monthlyNhf = nhfCalculations(monthlyGrossSalary);
  const monthlyPension = pensionCalculations(monthlyGrossSalary);
  const { monthlyPaye, annualPAYE } = calculatePayeTax(monthlyGrossSalary);
  return { monthlyNhf, monthlyPension, monthlyPaye, annualPAYE };
};
