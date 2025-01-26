import LoanCalculator from "@/components/loan-calculator";

const LoanCalculatorPage = () => {
  const selectedCategory = "Wedding Loans"; // or any valid category

  return (
    <div>
      <LoanCalculator selectedCategory={selectedCategory} />
    </div>
  );
};

export default LoanCalculatorPage;

