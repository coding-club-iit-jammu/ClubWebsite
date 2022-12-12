import React from 'react'
import TeamCards from '../components/TeamCards'

export default function about() {
  return (
    <div>
        <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-20">
      <h1 class="text-2xl font-medium title-font mb-4 text-gray-300 tracking-widest">OUR TEAM</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-300">We have a dedicated team of core members who are always ready to give back to the community</p>
    </div>
    <div class="flex flex-wrap -m-4">
        <TeamCards name="Harsh Agarwal" post="Coordinator" data="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur dolorem laboriosam possimus!"  />
        <TeamCards name="Sanath" post="Head : Competetive Programming" data="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur dolorem laboriosam possimus!"  />
        <TeamCards name="Aashray Gupta" post="Head : Competetive Programming" data="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur dolorem laboriosam possimus!"  />
        <TeamCards name="Arjav Barya" post="Co-Head : Competetive Programming" data="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur dolorem laboriosam possimus!"  />
        <TeamCards name="Aarav Jain" post="Head-Development" data="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur dolorem laboriosam possimus!"  />
        <TeamCards name="Prakhar Kapisway" post="Co-Head : Development" data="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur dolorem laboriosam possimus!"  />
        <TeamCards name="Harsh Agarwal" post="Coordinator" data="abc"  />
        <TeamCards name="Harsh Agarwal" post="Coordinator" data="abc"  />
    </div>
  </div>
</section>
    </div>
  )
}
