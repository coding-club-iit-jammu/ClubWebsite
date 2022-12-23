import React from "react";

export default function homeBottom() {
  return (
    <div
      className="overflow-hidden"
      style={{
        width: "80vw",
        marginLeft: "10vw",
        marginTop: "800px",
        // marginBottom:"200px",
        // border: "2px solid white",
        // zIndex:'100',
        position:'relative',
      }}
    >
      <h1
        class="font-medium font-style: normal; text-5xl mt-0 mb-2 text-gray-400"
        style={{
          letterSpacing: "-0.02em",
          fontStyle: "normal",
          fontWeight: "800",
          fontSize: "4  em",
        }}
      >
        Departments
      </h1>
      {/* Development Section */}
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:max-w-[20%] lg:w-full md:w-1/2 w-5\/6 mb-10 md:mb-0">
            <img
              class="object-cover object-center rounded sm:w-9"
              alt="hero"
              src="https://githubuniverse.com/assets/icons/asterisk_0.svg"
              style={{width:'10vw'}}
            />
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-0 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-100">
              Development
            </h1>
            <p class="mb-8 leading-relaxed text-gray-200">
              Copper mug try-hard pitchfork pour-over freegan heirloom neutra
              air plant cold-pressed tacos poke beard tote bag. Heirloom echo
              park mlkshk tote bag selvage hot chicken authentic tumeric
              truffaut hexagon try-hard chambray.
            </p>
            <div class="flex justify-center">
            </div>
          </div>
        </div>
      </section>
      {/* AI Section */}
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:max-w-[20%] lg:w-full md:w-1/2 w-5\/6 mb-10 md:mb-0">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src="https://githubuniverse.com/assets/icons/asterisk_2.svg"
              style={{width:'10vw'}}
            />
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-0 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-100">
              Artificial Intelligence
            </h1>
            <p class="mb-8 leading-relaxed text-gray-200">
              Copper mug try-hard pitchfork pour-over freegan heirloom neutra
              air plant cold-pressed tacos poke beard tote bag. Heirloom echo
              park mlkshk tote bag selvage hot chicken authentic tumeric
              truffaut hexagon try-hard chambray.
            </p>
            <div class="flex justify-center">
            </div>
          </div>
        </div>
      </section>
      {/* Security Section */}
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:max-w-[20%] lg:w-full md:w-1/2 w-5\/6 mb-10 md:mb-0">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src="https://githubuniverse.com/assets/icons/asterisk_1.svg"
              style={{width:'10vw'}}
            />
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-0 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-100">
              Network and Security
            </h1>
            <p class="mb-8 leading-relaxed text-gray-200">
              Copper mug try-hard pitchfork pour-over freegan heirloom neutra
              air plant cold-pressed tacos poke beard tote bag. Heirloom echo
              park mlkshk tote bag selvage hot chicken authentic tumeric
              truffaut hexagon try-hard chambray.
            </p>
            <div class="flex justify-center">
            </div>
          </div>
        </div>
      </section>
      {/* CP Section */}
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:max-w-[20%] lg:w-full md:w-1/2 w-5\/6 mb-10 md:mb-0">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src="https://githubuniverse.com/assets/icons/asterisk_3.svg"
              style={{width:'10vw'}}
            />
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-0 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-100">
              Competetive Programming
            </h1>
            <p class="mb-8 leading-relaxed text-gray-200">
              Copper mug try-hard pitchfork pour-over freegan heirloom neutra
              air plant cold-pressed tacos poke beard tote bag. Heirloom echo
              park mlkshk tote bag selvage hot chicken authentic tumeric
              truffaut hexagon try-hard chambray.
            </p>
            <div class="flex justify-center">
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
