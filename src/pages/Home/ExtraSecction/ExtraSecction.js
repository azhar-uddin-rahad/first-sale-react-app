import React from "react";

const ExtraSecction = () => {
  return (
    <section class="my-8">
      <div class="container mx-auto flex flex-col items-center pb-6 mb-4 md:p-10 md:px-12">
        <h1 class="text-4xl font-semibold leading-none text-center">
          What our customers are saying about us
        </h1>
      </div>
      <div class="container mx-auto grid grid-cols-1 gap-8 lg:gap-20 md:px-10 md:pb-10 lg:grid-cols-2">
        <div class="flex flex-col items-center mx-12 lg:mx-0">
          <div class="relative text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              fill="currentColor"
              class="absolute top-0 left-0 w-8 h-8 dark:text-gray-700"
            >
              <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
              <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
            </svg>
            <p class="px-6 py-1 text-lg italic">
              |'m happy with the phone and the deal | got from the company. |
              wanted a good smartphone that did the basics, and the site
              recommended one that ticked all the boxes. Speaking with the
              service team helped me get exactly what | was looking for
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              fill="currentColor"
              class="absolute bottom-0 right-0 w-8 h-8 dark:text-gray-700"
            >
              <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
              <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
            </svg>
          </div>
          <span class="w-12 h-1 my-2 rounded-lg dark:bg-violet-400"></span>
          <p>Leroy Jenkins</p>
        </div>
        <div class="flex flex-col items-center max-w-lg mx-12 lg:mx-0">
          <div class="relative text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              class="absolute top-0 left-0 w-8 h-8 dark:text-gray-700"
            >
              <path
                fill="currentColor"
                d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"
              ></path>
              <path
                fill="currentColor"
                d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"
              ></path>
            </svg>
            <p class="px-6 py-1 text-lg italic">
              The company should adjust their system to let people know whether
              items are in stock or not so they don't create false expectations
              that goods will arrive on time.
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              class="absolute bottom-0 right-0 w-8 h-8 dark:text-gray-700"
            >
              <path
                fill="currentColor"
                d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"
              ></path>
              <path
                fill="currentColor"
                d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"
              ></path>
            </svg>
          </div>
          <span class="w-12 h-1 my-2 rounded-lg dark:bg-violet-400"></span>
          <p>Leroy Jenkins</p>
        </div>
      </div>
    </section>
  );
};

export default ExtraSecction;
