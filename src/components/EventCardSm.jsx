import React from "react";

export default function EventCardSm({ img, dept, heading, desc, link }) {
  return (
    <div class="p-4 md:w-1/3">
      <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <img
          class="lg:h-48 md:h-36 w-full object-cover object-center"
          src="https://dummyimage.com/720x400"
          alt="blog"
        />
        <div class="p-6">
          <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
            CATEGORY
          </h2>
          <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
            The Catalyzer
          </h1>
          <p class="leading-relaxed mb-3">
            Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
            microdosing tousled waistcoat.
          </p>
          <div class="flex items-center flex-wrap ">
            <a
              class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
              href="abc"
            >
              Resources
              <svg
                class="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </a>
            <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
            </span>
            <span class="text-gray-400 inline-flex items-center leading-none text-sm">
              <a
                class="ml-3 text-gray-300 hover:text-blue-600"
                href="https://www.linkedin.com/in/coding-club-3a4145237/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="0"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
