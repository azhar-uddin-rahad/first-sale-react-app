import React from "react";

const Faq = () => {
  return (
    <section className="dark:bg-gray-800 dark:text-gray-100">
      <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
        <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">
          How To works developer ??
        </p>
        <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
          Top developer interview questions to ask
        </h2>
        <div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
          <div>
            <h3 className="font-semibold">
              What are the different ways to manage a state in a React
              application?
            </h3>
            <p className="mt-1 dark:text-gray-400">
              Managing state in your React apps isn’t as simple as using
              useState or useReducer. Not only are there are a lot of different
              kinds of state, but there often dozens of ways of managing each
              kind. Which should you choose? In this guide, we will uncover the
              several kinds of state in your React apps that you might not be
              aware of, plus how to manage them in the most effective way.!
            </p>
          </div>
          <div>
            <h3 className="font-semibold">How does prototypical inheritance work?</h3>
            <p className="mt-1 dark:text-gray-400">
            The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.!
            </p>
          </div>
          <div>
            <h3 className="font-semibold">What is a unit test?Why should we write unit tests?</h3>
            <p className="mt-1 dark:text-gray-400">
            Unit Testing is a type of software testing where individual units or components of a software are tested. The purpose is to validate that each unit of the software code performs as expected. Unit Testing is done during the development (coding phase) of an application by the developers. Unit Tests isolate a section of code and verify its correctness. A unit may be an individual function, method, procedure, module, or object.In SDLC, STLC, V Model, Unit testing is first level of testing done before integration testing. Unit testing is a WhiteBox testing technique that is usually performed by the developer. Though, in a practical world due to time crunch or reluctance of developers to tests, QA engineers also do unit testing.!
            </p>
          </div>
          <div>
            <h3 className="font-semibold"> React vs. Angular vs. Vue?</h3>
            <p className="mt-1 dark:text-gray-400">
            Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
