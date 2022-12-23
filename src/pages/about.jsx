import React from 'react'
import TeamCards from '../components/TeamCards'

export default function about() {
  return (
    <div>
        <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-20">
      <h1 class="text-2xl font-medium title-font mb-4 text-gray-300 tracking-widest">CORE TEAM</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-300">We have a dedicated team of core members who are always ready to give back to the community</p>
    </div>
    <div class="flex flex-wrap -m-4">
        <TeamCards name="Harsh Agarwal" post="Coordinator" data="Computer Science and Engineering" linkedin={"https://www.linkedin.com/in/harsh-agarwal-364439228/"} phone="917549395833" twitter={"https://twitter.com/HK_Agrwl"}  />
        <TeamCards name="Sanath" post="Head : Competetive Programming" data="Mechanical Engineering" />
        <TeamCards name="Aashray Gupta" post="Head : Competetive Programming" data="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur dolorem laboriosam possimus!" linkedin={"https://www.linkedin.com/in/aashray-gupta-26a503246/"} phone={"7009378912"} />
        <TeamCards name="Arjav Barya" post="Co-Head : Competetive Programming" data="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur dolorem laboriosam possimus!" linkedin={"https://www.linkedin.com/in/arjav-barya-569584235/"} phone={"9301763998"} />
        <TeamCards name="Aarav Jain" post="Head : Development" data="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur dolorem laboriosam possimus!"  />
        <TeamCards name="Prakhar Kapisway" post="Co-Head : Development" data="Computer Science and Engineering" linkedin={"https://www.linkedin.com/in/prakhar-kapisway-1524ba22b/"} phone={"9508307404"} />
        <TeamCards name="Atharva Bhunje" post="Head : Network and Security" data="Chemical Engineering"  />
        <TeamCards name="Vishwaroop Gangarde" post="Co-Head : Network and Security" data="Chemical Engineering"  />
        <TeamCards name="Aayush Gupta" post="Head : Artificial Intelligence and ML" data="Computer Science and Engineering"  />
        <TeamCards name="Sourav Saini" post="Co-Head : Artificial Intelligence and ML" data="Computer Science and Engineering" linkedin={"https://www.linkedin.com/in/aayush-gupta-095b3723a"} phone={"9485701058"} />
    </div>
    <div class="flex flex-col text-center w-full mb-20 mt-10">
      <h1 class="text-2xl font-medium title-font mb-4 text-gray-300 tracking-widest">ADVISING COMMITTEE</h1>
      {/* <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-300">We have a dedicated team of core members who are always ready to give back to the community</p> */}
    </div>
  </div>
</section>
    </div>
  )
}
