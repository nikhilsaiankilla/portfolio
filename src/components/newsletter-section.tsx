import React from "react";
import AnimatedContainer from "./animated-container";
import Newsletter from "./newsletter";

const NewsletterSection = () => {
  return (
    <AnimatedContainer>
      <div className="w-full flex flex-col items-center justify-center gap-5">
        <h2 className="text-md md:text-2xl font-bold text-black dark:text-white tracking-tight font-heading">
          Join The Newsletter!
        </h2>

        <div className="text-lg text-gray-600 dark:text-gray-400 max-w-lg leading-relaxed text-center">
          I share what I’m building, what I’m learning, and things worth paying
          attention to. Straight to your inbox.
        </div>
        <Newsletter />
      </div>
    </AnimatedContainer>
  );
};

export default NewsletterSection;
