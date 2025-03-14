import Header from "@/components/header";
import Footer from "@/components/footer";
import LoanCategories from "@/components/loan-categories";
import LoanCalculator from "@/components/loan-calculator";

const Home = () => {
  const selectedCategory = "Wedding Loans"; // Set this to any category you want to test

  return (
    <div>
      <Header />
      <main>
        <section className="py-12 text-center">
          <h1 className="text-3xl font-semibold">Welcome to Saylani Loan Program</h1>
          <p className="mt-4">We are here to help you with your loan needs. Choose a category and calculate your loan today!</p>
        </section>

        <LoanCategories />
        {/* <LoanCalculator selectedCategory={undefined} /> */}
        <LoanCalculator selectedCategory={selectedCategory} />

      </main>
      <Footer />
    </div>
  );
};

export default Home;
