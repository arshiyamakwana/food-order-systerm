import React from 'react'
import { ImLocation2 } from "react-icons/im";
import { CiPhone } from "react-icons/ci";
import { FaBusinessTime } from "react-icons/fa";
const ContUs = () => {
  return (
   
        <div className="section-container" style={{marginLeft:'px',marginTop:"80px"}}>
     
     <section className="bg-white-50 dark:bg-slate-800" id="contact">
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mb-4">
            <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
                <p className="text-base font-semibold uppercase tracking-wide text-rose-600 dark:text-blue-200">
                    Contact
                </p>
                <h2
                    className="font-heading mb-4 font-bold tracking-tight text-rose-500 dark:text-white text-3xl sm:text-5xl">
                    Get in Touch
                </h2>
                <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-600 dark:text-slate-400">WE WOULD LOVE TO HERE FROM YOU
                </p>
            </div>
        </div>
        <div className="flex items-stretch justify-center">
            <div className="grid md:grid-cols-2">
                <div className="h-full pr-6">
                    <p className="mt-3 mb-12 text-lg text-gray-600 dark:text-slate-400">
                      DROP YOUR VALUEABLE COMMENTS 
                    </p>
                    <ul className="mb-6 md:mb-0">
                        <li className="flex">
                        <ImLocation2  size={40}/>
                            <div >
                               
                            </div>
                            <div className="ml-4 mb-4">
                              <i className="fa fa-location-arrow" aria-hidden="true"></i>
                                <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">Our Address
                                </h3>
                                <p className="text-gray-600 dark:text-slate-400">Vavdi road</p>
                                <p className="text-gray-600 dark:text-slate-400">Morbi,Gujarat</p>
                            </div>
                        </li>
                        <li className="flex">
                            <div><CiPhone size={40} />
                               
                                    
                             
                            </div>
                            <div className="ml-4 mb-4">
                              
                                <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">Contact
                                </h3>
                                <p className="text-gray-600 dark:text-slate-400">Mobile: +91 97147 82164</p>
                                <p className="text-gray-600 dark:text-slate-400">Mail: arshiyamakwna@gmail.com</p>
                            </div>
                        </li>
                        <li className="flex">
                            <div >
                            <FaBusinessTime size={40} />
                            </div>
                            <div className="ml-4 mb-4">
                                <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">Working
                                    hours</h3>
                                <p className="text-gray-600 dark:text-slate-400">Monday - Friday: 08:00 - 17:00</p>
                                <p className="text-gray-600 dark:text-slate-400">Saturday &amp; Sunday: 08:00 - 12:00</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="card h-fit max-w-6xl p-5 md:p-12" id="form">
                    
                    <form id="contactForm">
                        <div className="mb-6">
                            <div className="mx-0 mb-1 sm:mb-4">
                                <div className="mx-0 mb-1 sm:mb-4">
                                    <label to="name" className="pb-1 text-xs uppercase tracking-wider"></label><input type="text" id="name" placeholder="Your name" className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0" name="name"/>
                                </div>
                                <div className="mx-0 mb-1 sm:mb-4">
                                    <label to="email" className="pb-1 text-xs uppercase tracking-wider"></label><input type="email" id="email"  placeholder="Your email address" className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0" name="email"/>
                                </div>
                            </div>
                            <div className="mx-0 mb-1 sm:mb-4">
                                <label to="textarea" className="pb-1 text-xs uppercase tracking-wider"></label><textarea id="textarea" name="textarea" cols="30" rows="5" placeholder="Write your message..." className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"></textarea>
                            </div>
                        </div>
                        <div className="text-center">
                            <button type="submit" className="w-full bg-rose-500 text-white px-6 py-3 font-xl rounded-md sm:mb-0">Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>
        </div>
    
 
  )
}

export default ContUs
