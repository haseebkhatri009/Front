'use client'
import { useRouter } from "next/navigation";
import { useState } from "react";

const LoanCalculator = ({ selectedCategory }) => {
  // Loan categories and details
  const loanDetails = {
    "Wedding Loans": {
      subcategories: ["Valima", "Furniture", "Valima Food", "Jahez"],
      maxLoan: 500000,
      loanPeriod: 3,
      initialDepositPercent: 0,
    },
    "Home Construction Loans": {
      subcategories: ["Structure", "Finishing", "Loan"],
      maxLoan: 1000000,
      loanPeriod: 5,
      initialDepositPercent: 0,
    },
    "Business Startup Loans": {
      subcategories: ["Buy Stall", "Advance Rent for Shop", "Shop Assets", "Shop Machinery"],
      maxLoan: 1000000,
      loanPeriod: 5,
      initialDepositPercent: 0,
    },
    "Education Loans": {
      subcategories: ["University Fees", "Child Fees Loan"],
      maxLoan: "Based on requirement",
      loanPeriod: 4,
      initialDepositPercent: 0,
    },
  };

  // If category details are not available
  if (!selectedCategory || !loanDetails[selectedCategory]) {
    return <p className="text-red-600">Please select a valid loan category.</p>;
  }

  const categoryDetails = loanDetails[selectedCategory];

  // State hooks
  const [selectedSubcategory, setSelectedSubcategory] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [initialDeposit, setInitialDeposit] = useState(0);
  const [monthlyEMI, setMonthlyEMI] = useState(0);

  // Loan amount change handler
  const handleLoanAmountChange = (e) => {
    const value = Number(e.target.value);
    if (value <= 0) {
      setErrorMessage("Loan amount must be greater than 0.");
    } else if (
      categoryDetails.maxLoan !== "Based on requirement" &&
      value > categoryDetails.maxLoan
    ) {
      setErrorMessage(
        `Loan amount should not exceed PKR ${categoryDetails.maxLoan.toLocaleString()}`
      );
    } else {
      setErrorMessage("");
    }
    setLoanAmount(value);
  };

  // Initial deposit change handler
  const handleInitialDepositChange = (e) => {
    const value = Number(e.target.value);
    if (value < 0) {
      setErrorMessage("Initial deposit cannot be negative.");
    } else if (value > loanAmount) {
      setErrorMessage("Initial deposit cannot exceed the loan amount.");
    } else {
      setErrorMessage("");
    }
    setInitialDeposit(value);
  };

  // EMI calculation
  const calculateEMI = () => {
    if (!loanAmount || loanAmount <= 0) {
      setErrorMessage("Please enter a valid loan amount.");
      return;
    }

    const annualInterestRate = 10; // 10% annual interest
    const monthlyInterestRate = annualInterestRate / 100 / 12;
    const loanPrincipal = loanAmount - initialDeposit;
    const totalPayments = categoryDetails.loanPeriod * 12;

    if (loanPrincipal <= 0) {
      setErrorMessage("Loan principal must be greater than 0.");
      return;
    }

    const emi =
      (loanPrincipal *
        monthlyInterestRate *
        Math.pow(1 + monthlyInterestRate, totalPayments)) /
      (Math.pow(1 + monthlyInterestRate, totalPayments) - 1);

    setMonthlyEMI(emi);
  };

  // Apply loan handler
  const router = useRouter();
  const handleApplyLoan = () => {
    if (selectedSubcategory && loanAmount > 0) {
      router.push("/registration");
    }
  };

  return (
    <div>
      <h3 className="text-xl font-semibold text-gray-700 mb-4">Loan Calculator</h3>

      {/* Subcategory Dropdown */}
      <div className="mb-4">
        <label className="block text-sm text-gray-600">Select Subcategory</label>
        <select
          className="w-full px-4 py-2 border border-gray-300 rounded-lg"
          value={selectedSubcategory}
          onChange={(e) => setSelectedSubcategory(e.target.value)}
        >
          <option value="">Select Subcategory</option>
          {categoryDetails.subcategories.map((subcategory, index) => (
            <option key={index} value={subcategory}>
              {subcategory}
            </option>
          ))}
        </select>
      </div>

      {/* Loan Amount Input */}
      <div className="mb-4">
        <label className="block text-sm text-gray-600">Enter Loan Amount</label>
        <input
          type="number"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg"
          placeholder="Enter Loan Amount"
          value={loanAmount}
          onChange={handleLoanAmountChange}
        />
      </div>

      {/* Initial Deposit Input */}
      <div className="mb-4">
        <label className="block text-sm text-gray-600">Enter Initial Deposit (optional)</label>
        <input
          type="number"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg"
          placeholder="Enter Initial Deposit (if any)"
          value={initialDeposit}
          onChange={handleInitialDepositChange}
        />
      </div>

      {/* Error Message */}
      {errorMessage && <p className="text-red-600 text-sm mt-2">{errorMessage}</p>}

      {/* Loan Details */}
      <div className="mt-6">
        <h4 className="font-semibold text-lg">Loan Details</h4>
        <p>
          Maximum Loan: PKR{" "}
          {categoryDetails.maxLoan === "Based on requirement"
            ? "No limit"
            : categoryDetails.maxLoan.toLocaleString()}
        </p>
        <p>Loan Period: {categoryDetails.loanPeriod} years</p>
      </div>

      {/* EMI Calculation */}
      {loanAmount > 0 && !errorMessage && (
        <div className="mt-6 bg-gray-100 p-4 rounded-lg">
          <h4 className="font-semibold text-lg">Loan Breakdown</h4>
          <p>Loan Amount: PKR {loanAmount.toLocaleString()}</p>
          <p>Initial Deposit: PKR {initialDeposit.toLocaleString()}</p>
          <button
            className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            onClick={calculateEMI}
          >
            Calculate EMI
          </button>
        </div>
      )}

      {/* Monthly EMI */}
      {monthlyEMI > 0 && (
        <div className="mt-4">
          <h4 className="font-semibold text-lg">Monthly EMI</h4>
          <p>PKR {monthlyEMI.toFixed(2)}</p>
        </div>
      )}

      {/* Apply Loan Button */}
      <div className="mt-4">
        <button
          className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
          disabled={!selectedSubcategory || loanAmount <= 0 || errorMessage}
          onClick={handleApplyLoan}
        >
          Apply for Loan
        </button>
      </div>
    </div>
  );
};

export default LoanCalculator;
