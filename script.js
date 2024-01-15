// accordion
const accordionContent = document.querySelectorAll(".accordion-content");
accordionContent.forEach((item, index) => {
  let header = item.querySelector("header");
  header.addEventListener("click", () => {
    item.classList.toggle("open");
    let description = item.querySelector(".description");
    if (item.classList.contains("open")) {
      description.style.height = `${description.scrollHeight}px`; //scrollHeight property returns the height of an element including padding , but excluding borders, scrollbar or margin
      item.querySelector("i").classList.replace("fa-plus", "fa-minus");
    } else {
      description.style.height = "0px";
      item.querySelector("i").classList.replace("fa-minus", "fa-plus");
    }
    removeOpen(index); //calling the funtion and also passing the index number of the clicked header
  });
});
function removeOpen(index1) {
  accordionContent.forEach((item2, index2) => {
    if (index1 != index2) {
      item2.classList.remove("open");
      let des = item2.querySelector(".description");
      des.style.height = "0px";
      item2.querySelector("i").classList.replace("fa-minus", "fa-plus");
    }
  });
}

// calculator
function calculateLoan() {
  let loanAmount = parseFloat(document.getElementById("loanAmount").value); //input number
  let months = parseInt(document.getElementById("monthsSelect").value); //input month
  let payableTerms = parseInt(document.getElementById("termsSelect").value); //input payable terms
  let interestRate = 0.03; // 3% interest rate
  let serviceRate = 0.02; // 2% rate for service charge
  let serviceCharge = loanAmount * serviceRate; //servicecharge
  let interestMonth = interestRate * months; //interest rate per month %
  let interest = loanAmount * interestMonth; //total interest

  // computation
  let monthlyPayment = loanAmount / payableTerms; //monthly payment

  let loanPayout = loanAmount - (serviceRate + interestMonth) * loanAmount; //payout

  let totalInterest = serviceCharge + interest; //total interest rate per month.

  let totalDue = loanAmount + interest; //total amount due.

  let rate = Math.round(interestMonth * 100); //Interest rate per month in percentage

  // inner html
  document.getElementById("capital").innerHTML =
    " &#8369;" + loanAmount.toLocaleString(); //Loan Captial:

  document.getElementById("result").innerHTML =
    " &#8369;" + monthlyPayment.toLocaleString(); //Payment per month by terms:

  document.getElementById("cash").innerHTML =
    " &#8369;" + loanPayout.toLocaleString(); //Loan Payout:

  document.getElementById("service").innerHTML =
    " &#8369;" + serviceCharge.toLocaleString(); //Service Charge Rate:

  document.getElementById("total").innerHTML =
    " &#8369;" + totalInterest.toLocaleString(); //Total Deduction Rate:

  document.getElementById("total-interest").innerHTML =
    " &#8369;" + interest.toLocaleString(); // Total Interest Rate:

  document.getElementById("due").innerHTML =
    " &#8369;" + totalDue.toLocaleString(); //Overall Total Amount Due:

  document.getElementById("rate").innerHTML = " &#37;" + rate; //Monthly Interest Rate

  // console log
  console.log(interestMonth);
  console.log(loanPayout);
  console.log(totalInterest);
  console.log(rate);

  console.log(loanPayout.toLocaleString());
}

// loader script
// Wait for the document to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Simulate a delay for the loader
  setTimeout(function () {
    // Hide the loader and its background color
    document.getElementById("loader-wrapper").style.display = "none";
    // Display the content
    document.getElementById("content").style.display = "block";
  }, 1000); // 1500 milliseconds = 1.5 seconds
});
