import React from 'react'
import '../css/event.css'
import poster1 from '../assets/posters/Poster-Intro to Programming.jpeg'
import poster2 from '../assets/posters/IntroToProgramming2-Poster.jpeg'
import poster3 from '../assets/posters/OpenSourceWorkshop.jpeg'
import poster4 from '../assets/posters/CyberSec-Workshop-Poster.jpeg'
import poster5 from '../assets/posters/WebDev-Workshop.jpeg'
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
                        <EventCard secondCard={true} name="Introduction to Programming" type="Workshop" date="24 Nov 2022" desc="Conducted by the Competetive Programming department in which basics of C++ and DSA were taught.This session was focued on newcomers in the field of programming" poster_img={poster1} duration="2 hrs" color="red" name2="Introduction to Web Development"  type2="Workshop" date2="24 Nov 2022" desc2=" This session was conducted by  Aman Pratap Singh (4th year Btech) along with the Development department in which basics of Html and CSS were covered." poster_img2={poster5} duration2="2 hrs" color2="green" />

                        <EventCard secondCard={true} name="Introduction to Programming-2" type="Workshop" date="24 Nov 2022" desc="This was the second installment and a continuation of the previous session, conducted by Copetetive Programming Department." poster_img={poster2} duration="2 hrs" color="blue" name2="Introduction to Open Source" type2="Workshop" date2="24 Nov 2022" desc2="This session was conducted by Shubh Karman Singh (4th Year,CSE) in which he covered the basics of how to contribute to open source, remote collaboration and many more like topics were covered." poster_img2={poster3} duration2="2 hrs" color2="red" />

                        <EventCard secondCard={false} name="Introduction to CyberSecurity and diving into Linux" type="Workshop" date="24 Nov 2022" desc="This was the second installment and a continuation of the previous session, conducted by Copetetive Programming Department." poster_img={poster4} duration="2 hrs" color="blue" name2="Introduction to Open Source" type2="Workshop" date2="24 Nov 2022" desc2="This session was conducted by Shubh Karman Singh (4th Year,CSE) in which he covered the basics of how to contribute to open source, remote collaboration and many more like topics were covered." poster_img2={poster3} duration2="2 hrs" color2="red" />
                    </div>
                </section>
            </div>
        </>
    );
}
