import React from 'react'
import '../css/event.css'
import poster1 from '../assets/posters/Poster-Intro to Programming.jpeg'
import poster2 from '../assets/posters/IntroToProgramming2-Poster.jpeg'
import poster3 from '../assets/posters/OpenSourceWorkshop.jpeg'
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
                        <EventCard secondCard={true} name="Introduction to Programming" type="Workshop" date="24 Nov 2022" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos!" poster_img={poster1} duration="2 hrs" color="red" name2="Introduction to Web Development"  type2="Workshop" date2="24 Nov 2022" desc2="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos!" poster_img2={poster1} duration2="2 hrs" color2="green" />

                        <EventCard secondCard={true} name="Introduction to Programming-2" type="Workshop" date="24 Nov 2022" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos!" poster_img={poster2} duration="2 hrs" color="blue" name2="Introduction to Open Source" type2="Workshop" date2="24 Nov 2022" desc2="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos!" poster_img2={poster3} duration2="2 hrs" color2="red" />
                    </div>
                </section>
            </div>
        </>
    );
}
