import React from 'react'
import '../css/event.css'

export default function event() {
    return (
        <>
            <div>
                <section className="dark">
                    <div className=" py-4">
                        <h1 className=" head text-gray-300 tracking-widest pt-6 pl-10" id="pageHeaderTitle">Events</h1>
                        <div class="flex flex-col text-center w-full mb-20">
                            <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-300">We have a dedicated team of core members who are always ready to give back to the community</p>
                        </div>

                        <article className="postcard dark blue">
                            <a className="postcard__img_link" href="#">
                                <img className="postcard__img" src="data:image/png;base64,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" alt="Image Title" />
                            </a>
                            <div className="postcard__text">
                                <h1 className="postcard__title blue"><a href="#"> Introduction to Competitive Programming -1 </a></h1>
                                <div className="postcard__subtitle small">
                                    <time dateTime="2020-05-25 12:00:00">
                                        <i className="fas fa-calendar-alt mr-2" />Mon, May 25th 2020
                                    </time>
                                </div>
                                <div className="postcard__bar" />
                                <div className="postcard__preview-txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos!</div>
                                <ul className="postcard__tagbox">
                                    <li className="tag__item"><i className="fas fa-tag mr-2" />Podcast</li>
                                    <li className="tag__item"><i className="fas fa-clock mr-2" />55 mins.</li>
                                    <li className="tag__item play blue">
                                        <a href="#"><i className="fas fa-play mr-2" />Play Episode</a>
                                    </li>
                                </ul>
                            </div>
                        </article>
                        <article className="postcard dark red">
                            <a className="postcard__img_link" href="#">
                                <img className="postcard__img" src="https://blog.masaischool.com/content/images/2022/06/Competitive-Programming.png" alt="Image Title" />
                            </a>
                            <div className="postcard__text">
                                <h1 className="postcard__title red"><a href="#">Introduction to Web Developnment</a></h1>
                                <div className="postcard__subtitle small">
                                    <time dateTime="2020-05-25 12:00:00">
                                        <i className="fas fa-calendar-alt mr-2" />Mon, May 25th 2020
                                    </time>
                                </div>
                                <div className="postcard__bar" />
                                <div className="postcard__preview-txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos!</div>
                                <ul className="postcard__tagbox">
                                    <li className="tag__item"><i className="fas fa-tag mr-2" />Podcast</li>
                                    <li className="tag__item"><i className="fas fa-clock mr-2" />55 mins.</li>
                                    <li className="tag__item play red">
                                        <a href="#"><i className="fas fa-play mr-2" />Play Episode</a>
                                    </li>
                                </ul>
                            </div>
                        </article>
                        <article className="postcard dark green">
                            <a className="postcard__img_link" href="#">
                                <img className="postcard__img" src="https://blog.masaischool.com/content/images/2022/06/Competitive-Programming.png" alt="Image Title" />
                            </a>
                            <div className="postcard__text">
                                <h1 className="postcard__title green"><a href="#">Introduction to Competitive Programming -2</a></h1>
                                <div className="postcard__subtitle small">
                                    <time dateTime="2020-05-25 12:00:00">
                                        <i className="fas fa-calendar-alt mr-2" />Mon, May 25th 2020
                                    </time>
                                </div>
                                <div className="postcard__bar" />
                                <div className="postcard__preview-txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos!</div>
                                <ul className="postcard__tagbox">
                                    <li className="tag__item"><i className="fas fa-tag mr-2" />Podcast</li>
                                    <li className="tag__item"><i className="fas fa-clock mr-2" />55 mins.</li>
                                    <li className="tag__item play green">
                                        <a href="#"><i className="fas fa-play mr-2" />Play Episode</a>
                                    </li>
                                </ul>
                            </div>
                        </article>
                        <article className="postcard dark yellow">
                            <a className="postcard__img_link" href="#">
                                <img className="postcard__img" src="https://blog.masaischool.com/content/images/2022/06/Competitive-Programming.png" alt="Image Title" />
                            </a>
                            <div className="postcard__text">
                                <h1 className="postcard__title yellow"><a href="#">Podcast Title</a></h1>
                                <div className="postcard__subtitle small">
                                    <time dateTime="2020-05-25 12:00:00">
                                        <i className="fas fa-calendar-alt mr-2" />Mon, May 25th 2020
                                    </time>
                                </div>
                                <div className="postcard__bar" />
                                <div className="postcard__preview-txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos!</div>
                                <ul className="postcard__tagbox">
                                    <li className="tag__item"><i className="fas fa-tag mr-2" />Podcast</li>
                                    <li className="tag__item"><i className="fas fa-clock mr-2" />55 mins.</li>
                                    <li className="tag__item play yellow">
                                        <a href="#"><i className="fas fa-play mr-2" />Play Episode</a>
                                    </li>
                                </ul>
                            </div>
                        </article>

                    </div>
                </section>
            </div>
        </>
    );
}
