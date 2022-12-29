import React from 'react'
import TeamCards from '../components/TeamCards'
import Abhinish from '../assets/memberImages/Abhinish.jpg'
import AravJain from '../assets/memberImages/AravJain.jpg'
import ArjavBarya from '../assets/memberImages/ArjavBarya.jpg'
import Sunny from '../assets/memberImages/Sunny.jpg'
import Harsh from '../assets/memberImages/Harsh.jpeg'
import Prakhar from '../assets/memberImages/Prakhar.jpg'
import Vishwaroop from '../assets/memberImages/Vishwaroop.jpg'
import Aashray from '../assets/memberImages/Aashray.jpg'
import Aayush from '../assets/memberImages/Aayush.jpg'
import Manish from '../assets/memberImages/Manish.jpg'
import Kishan from '../assets/memberImages/Kishan.jpeg'

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
            <TeamCards name="Harsh Agarwal" img={Harsh} post="Coordinator" data="Computer Science and Engineering" linkedin={"https://www.linkedin.com/in/harsh-agarwal-364439228/"} phone="917549395833" twitter={"https://twitter.com/HK_Agrwl"} github={"https://github.com/HKAgrwl"} />
            <TeamCards name="Sanath" post="Head : Competetive Programming" data="Mechanical Engineering" />
            <TeamCards name="Aashray Gupta" img={Aashray} post="Head : Competetive Programming" data="Computer Science and Engineering" linkedin={"https://www.linkedin.com/in/aashray-gupta-26a503246/"} phone={"7009378912"} />
            <TeamCards name="Arjav Barya" img={ArjavBarya} post="Co-Head : Competetive Programming" data="Mechanical Engineering" linkedin={"https://www.linkedin.com/in/arjav-barya-569584235/"} phone={"9301763998"} />
            <TeamCards name="Aarav Jain" img={AravJain} post="Head : Development" data="Computer Science and Engineering" linkedin={"https://www.linkedin.com/in/aaravjn/"} phone="7487853240" />
            <TeamCards name="Prakhar Kapisway" img={Prakhar} post="Co-Head : Development" data="Computer Science and Engineering" linkedin={"https://www.linkedin.com/in/prakhar-kapisway-1524ba22b/"} phone={"9508307404"} />
            <TeamCards name="Atharva Bhunje" post="Head : Network and Security" data="Chemical Engineering" />
            <TeamCards name="Vishwaroop Gangarde" img={Vishwaroop} post="Co-Head : Network and Security" data="Chemical Engineering" linkedin={"https://www.linkedin.com/in/vishwaroop-gangarde-118a02228/"} phone="7709888143" />
            <TeamCards name="Aayush Gupta" img={Aayush} post="Head : Artificial Intelligence and ML" data="Computer Science and Engineering" linkedin={"https://www.linkedin.com/in/aayush-gupta-095b3723a"} phone="9485701058" />
            <TeamCards name="Sourav Saini" post="Co-Head : Artificial Intelligence and ML" data="Computer Science and Engineering" linkedin={"https://www.linkedin.com/in/sourav-saini2003"} phone={"7082324117"} />
            <TeamCards name="Aditya Raj" post="Head : Event Management" data="Material Science" />
            <TeamCards name="Sunny" post="Co-Head : Event Management" img={Sunny} data="Chemical Engineering" linkedin={"https://www.linkedin.com/in/sunny-kumar-272982240/"} phone={"8708098785"} />
            <TeamCards name="Manish Jaiswar" img={Manish} post="Co-Head : Event Management" data="Material Science" linkedin={"https://www.linkedin.com/in/manish-jaiswar-783495230"} phone={"7718022192"} />
            <TeamCards name="Abhinish Ojha" img={Abhinish} post="Co-Head : Event Management" data="Chemical Engineering" linkedin={"https://www.linkedin.com/in/abhinish-ojha-522882227/"} phone={"6392830309"} />
            <TeamCards name="Soumye Sharma"  post="Co-Head : Event Management" data="Civil Engineering" linkedin={"Soumye Sharma | LinkedIn"} phone={"6376801575"} />
            <TeamCards name="KISHAN DAS" img={Kishan}  post="Event Management" data="Chemical Engineering" linkedin={"linkedin.com/in/iitian-kishan-502611253"} phone={"9436785392"} />

          </div>
          <div class="flex flex-col text-center w-full mb-20 mt-20">
            <h1 class="text-2xl font-medium title-font mb-4 text-gray-300 tracking-widest">ADVISING COMMITTEE</h1>
            {/* <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-300">We have a dedicated team of core members who are always ready to give back to the community</p> */}
          </div>
          <div class="flex flex-wrap -m-4">
            <TeamCards name="Shubh Karman Singh" post="Adviser" data="Computer Science and Engineering" linkedin={"https://www.linkedin.com/in/qascade"} phone="9149601803" twitter={"https://twitter.com/qascade"} github={"https://github.com/qascade"} />
            <TeamCards name="Ashutosh Gangwar" post="Adviser" data="Computer Science and Engineering" linkedin={""} phone="9870699593"  />
            <TeamCards name="Mohammad Touseef" post="Adviser" data="Computer Science and Engineering" linkedin={"https://www.linkedin.com/in/md-touseef"} phone="917549395833" />
            
            {/* <TeamCards name="_________________" post="Adviser" data="Computer Science and Engineering" linkedin={""} phone="917549395833" twitter={""} /> */}
l
          </div>
          


        </div>

      </section>
    </div >
  )
}
