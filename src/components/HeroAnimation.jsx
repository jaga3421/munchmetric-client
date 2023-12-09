// Lotte files
import Lottie from "lottie-react";
import animationData from "../animations/hero-bike.json";

function HeroAnimation() {
  return (
    <div className="hero-animation-container">
      <Lottie animationData={animationData} />
    </div>
  );
}

export default HeroAnimation;
