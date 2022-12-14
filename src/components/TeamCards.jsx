import React from "react";

export default function TeamCards({ name, post, data,linkedin,twitter,phone }) {
  return (
    <div class="p-4 lg:w-1/2">
      <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left ml-10">
        <img
          alt="team"
          class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
          src="https://dummyimage.com/204x204"
        />
        <div class="flex-grow sm:pl-8">
          <h2 class="title-font font-medium text-lg text-gray-200">{name}</h2>
          <h3 class="text-gray-300 mb-3">{post}</h3>
          <p class="mb-4 text-gray-300">{data}.</p>
          <span class="inline-flex">
            <a class="text-gray-500 hover:text-blue-600" href={linkedin} target="_blank" rel="noopener noreferrer">
              <svg
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
            <a class="ml-2 text-gray-500 hover:text-blue-400" target="_blank" rel="noopener noreferrer" href={twitter}>
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a class="ml-2 text-gray-500 hover:text-lime-500" target="_blank" rel="noopener noreferrer" href={"tel:+" + phone}>
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}
