import React, { useState } from "react";
import FaqBanner from "./FaqBanner";

const Faq = () => {

  return (
    <section>
      <FaqBanner></FaqBanner>
      <div className="max-w-[1440px] mx-auto">
      <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">
          How To works developer ??
        </p>
        <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
          Top developer interview questions to ask
        </h2>
      <div className="flex flex-col lg:flex-row gap-[10%]">
      <div className="w-full lg:w-[40%]">
      <div tabIndex={0}  className="collapse collapse-arrow mb-5 border border-base-300 bg-base-100 rounded-box">
  <div className="collapse-title text-xl font-medium">
  <h3>What are the different ways to manage a state in a React application?</h3>
  </div>
  <div className="collapse-content"> 
    <p > Managing state in your React apps isn’t as simple as usinguseState or useReducer. Not only are there are a lot of different kinds of state, but there often dozens of ways of managing each kind. Which should you choose? In this guide, we will uncover the several kinds of state in your React apps that you might not be aware of, plus how to manage them in the most effective way.!</p>
  </div>
</div>
      <div tabIndex={0}  className="collapse collapse-arrow mb-5 border border-base-300 bg-base-100 rounded-box">
  <div className="collapse-title text-xl font-medium">
    <h3>How does prototypical inheritance work?</h3>
  </div>
  <div className="collapse-content"> 
    <p >The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.!</p>
  </div>
</div>
    

<div tabIndex={0}  className="collapse mb-5 collapse-arrow  border border-base-300 bg-base-100 rounded-box">
  <div className="collapse-title text-xl font-medium">
 <h3> What is a unit test?Why should we write unit tests?</h3>
  </div>
  <div className="collapse-content"> 
    <p > Unit Testing is a type of software testing where individual units or components of a software are tested. The purpose is to validate that each unit of the software code performs as expected. Unit Testing is done during the development (coding phase) of an application by the developers. Unit Tests isolate a section of code and verify its correctness. A unit may be an individual function, method, procedure, module, or object.In SDLC, STLC, V Model, Unit testing is first level of testing done before integration testing. Unit testing is a WhiteBox testing technique that is usually performed by the developer. Though, in a practical world due to time crunch or reluctance of developers to tests, QA engineers also do unit testing.!</p>
  </div>
</div>
<div tabIndex={0}  className="collapse mb-5 collapse-arrow  border border-base-300 bg-base-100 rounded-box">
  <div className="collapse-title text-xl font-medium">
  <h3>React vs. Angular vs. Vlue?</h3>
  </div>
  <div className="collapse-content"> 
    <p >Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option</p>
  </div>
</div>
      </div>
      <div className="w-full lg:w-[40%]">
      <div tabIndex={0}  className="collapse collapse-arrow mb-5 border border-base-300 bg-base-100 rounded-box">
  <div className="collapse-title text-xl font-medium">
  <h3>Why do we use the word “debugger” in javascript?</h3>
  </div>
  <div className="collapse-content"> 
    <p >The debugger for the browser must be activated in order to debug the code. Built-in debuggers may be switched on and off, requiring the user to report faults. The remaining section of the code should stop execution before moving on to the next line while debugging.</p>
  </div>
</div>
      <div tabIndex={0}  className="collapse collapse-arrow mb-5 border border-base-300 bg-base-100 rounded-box">
  <div className="collapse-title text-xl font-medium">
 <h3> Difference between “ == “ and “ === “ operators.</h3>
  </div>
  <div className="collapse-content"> 
    <p >Both are comparison operators. The difference between both the operators is that “==” is used to compare values whereas, “ === “ is used to compare both values and types.</p>
  </div>
</div>
      <div tabIndex={0}  className="collapse collapse-arrow mb-5 border border-base-300 bg-base-100 rounded-box">
  <div className="collapse-title text-xl font-medium">
   <h3>Explain passed by value and passed by reference.</h3>
  </div>
  <div className="collapse-content"> 
    <p >In JavaScript, primitive data types are passed by value and non-primitive data types are passed by reference.</p>
  </div>
</div>
      <div tabIndex={0}  className="collapse collapse-arrow mb-5 border border-base-300 bg-base-100 rounded-box">
  <div className="collapse-title text-xl font-medium">
  Explain Higher Order Functions in javascript.
  </div>
  <div className="collapse-content"> 
    <p >Functions that operate on other functions, either by taking them as arguments or by returning them, are called higher-order functions.</p>
  </div>
</div>

      </div>
      </div>
      </div> 
    </section>
  );
};

export default Faq;
