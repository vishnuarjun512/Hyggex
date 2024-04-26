import React from "react";
import Accordion from "./Accordion";

const FAQ = () => {
  return (
    <div className="p-4 space-y-2 mt-5">
      <span className="ml-2 text-4xl font-bold text-transparent bg-gradient-to-t from-blue-400 to-blue-900 bg-clip-text">
        FAQ
      </span>
      <div className="space-y-3">
        <Accordion
          title={"Can education flashcards be used for all age groups?"}
          description={
            "Yes Education flashcards can be tailored to different age groups and learning levels. There are flashcards designed for preschoolers, elementary school students, high school studnets, and even for college-leve and adult learners"
          }
        />
        <Accordion
          title={"How do education flashcards work?"}
          description={
            "Education flashcards work by presenting a questions or prompt on one side and the correspongind answer or information on the other. Users can review the cards repeatedly, reinforcing their memory and enhancing learning through repitition."
          }
        />
        <Accordion
          title={"Can education be used for test preparation?"}
          description={
            "Absolutely, Flashcards are an excellent tool for test preparation, allowing students to review key concepts, terms and facts. They provide a quick and focused way to reinforce knowledge before exams."
          }
        />
      </div>
    </div>
  );
};

export default FAQ;
