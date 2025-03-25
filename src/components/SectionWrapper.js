import React from "react";
import ScrollAnimation from "./ScrollAnimation";

// This component will be used to wrap all sections with consistent animations
const SectionWrapper = ({
  children,
  id,
  className,
  animationType = "fadeUp",
}) => {
  return (
    <section id={id} className={`${className} py-20 relative`}>
      {/* Space-themed background effects */}
      <div className="section-glow absolute inset-0 pointer-events-none"></div>

      <ScrollAnimation type={animationType}>
        <div className="cosmic-section-content">{children}</div>
      </ScrollAnimation>
    </section>
  );
};

export default SectionWrapper;
