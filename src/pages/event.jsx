import React from 'react'
import '../css/event.css'
import poster1 from '../assets/posters/Poster-Intro to Programming.jpeg'
import poster2 from '../assets/posters/IntroToProgramming2-Poster.jpeg'
import poster3 from '../assets/posters/OpenSourceWorkshop.jpeg'
import poster4 from '../assets/posters/CyberSec-Workshop-Poster.jpeg'
import poster5 from '../assets/posters/WebDev-Workshop.jpeg'
import poster6 from '../assets/posters/Codenite.jpg'
import poster7 from '../assets/posters/AIWorkshop.jpg'
import EventCard from '../components/eventCard';

export default function event() {
    return (
        <>
            <div>
                <section className="dark">
                    <div className=" py-4">
                        <h1 className=" head text-gray-300 tracking-widest pt-6 pl-10" id="pageHeaderTitle">Events</h1>
                        <div class="flex flex-col text-center w-full mb-20">
                            <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-300">We conduct various events in form of Workshops, Competitions etc to make the community engaging.</p>
                        </div>

                        <EventCard secondCard={false} name="Introduction Machine Learning" type="Workshop" date="26 January 2023" desc="This workshop was conductd by the AI-ML Department. The workshop covered various Machhine Learning models and the mathematics behind them along with hands on practice." poster_img={poster7} duration="2 hrs" color="red   " name2="&nbsp; Codenite" type2="Contest" date2="4 January 2023" desc2="This was an intra institute level competitive programming contest organised by Coding Club which saw a masive participation." poster_img2={poster6} duration2="2 hrs" color2="red" />

                        <EventCard secondCard={true} name2="Introduction to CyberSecurity and diving into Linux" type2="Workshop" date2="13 December 2022" desc2="This was the second installment and a continuation of the previous session, conducted by Competitive Programming Department." poster_img2={poster4} duration2="2 hrs" color2="green" name="&nbsp; Codenite" type="Contest" date="4 January 2023" desc="This was an intra institute level competitive programming contest organised by Coding Club which saw a masive participation." poster_img={poster6} duration="2 hrs" color="blue" />

                        <EventCard secondCard={true} name2="Introduction to Programming-2" type2="Workshop" date2="8 December 2022" desc2="This was the second installment and a continuation of the previous session, conducted by Copetetive Programming Department." poster_img2={poster2} duration2="2 hrs" color2="blue" name="Introduction to Open Source" type="Workshop" date="9 December 2022" desc="This session was conducted by Shubh Karman Singh (4th Year,BTech) in which he covered the basics of how to contribute to open source, remote collaboration and many more like topics were covered." poster_img={poster3} duration="2 hrs" color="red" />

                        <EventCard secondCard={true} name2="Introduction to Programming" type2="Workshop" date2="19 November 2022" desc2="Conducted by the competitive Programming department in which basics of C++ and DSA were taught.This session was focued on newcomers in the field of programming" poster_img2={poster1} duration2="2 hrs" color2="red" name="Introduction to Web Development"  type="Workshop" date="22 November 2022" desc=" This session was conducted by  Aman Pratap Singh (4th year BTech) along with the Development department in which basics of Html and CSS were covered." poster_img={poster5} duration="2 hrs" color="green" />
                    </div>
                </section>
            </div>
        </>
    );
}
