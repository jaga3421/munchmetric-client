import React from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="text-gray-500">
      {/* Header */}
      <Header />

      {/* Main */}
      <Main />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
