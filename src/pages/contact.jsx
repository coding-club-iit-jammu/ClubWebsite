import React from 'react'
import {useState} from 'react';
import emailjs from '@emailjs/browser';

const feedback={
  name:'',
  email:'',
  message:''
}

export default function Contact() {

  const [values,setValues] = useState(feedback);

  const handleChange=(e)=>{
    setValues({...values,[e.target.name]:e.target.value})
  }

  const handleSubmit=(e)=>{
    emailjs.send('service_7vftg3f', 'template_b142zv5', {to_name: 'Coding Club IIT Jammu',message: values.message, from_name: values.name, reply_to: values.email,},'Mn912QQNe57pFwJEa')
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
       alert('Your message has been successfully sent');
       setValues({name:"",email:"",message:""});
    }, function(error) {
       console.log('FAILED...', error);
       alert('There was an error sending your message. Please try again')
    });
  }

  return (
    <div>
        <section class="text-gray-600 body-font relative">
  <div class="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
    <div class="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
      <iframe width="100%" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3353.6556208505344!2d74.89481136513828!3d32.80138943096463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391e814038301e31%3A0xe3a42e213df5c738!2sIndian%20Institute%20Of%20Technology%E2%80%93Jammu%20(IIT%E2%80%93Jammu)!5e0!3m2!1sen!2sin!4v1670850183398!5m2!1sen!2sin" height="100%" class="absolute inset-0" frameborder="0" title="map" marginheight="0" marginwidth="0" scrolling="no"></iframe>
      <div class="bg-white relative flex flex-wrap py-6 rounded shadow-md">
        <div class="lg:w-1/2 px-6">
          <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
          <p class="mt-1">IIT Jammu, Jagti, Nagrota, Jammu 181221</p>
        </div>
        <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
          <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
          <a class="text-indigo-500 leading-relaxed">codingclub@iitjammu.ac.in</a>
          <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
          <p class="leading-relaxed">123-456-7890</p>
        </div>
      </div>
    </div>
    <div class="lg:w-1/3 md:w-1/2 bg-gray-300 rounded-lg flex flex-col md:mr-auto w-full md:py-8 mt-8 md:mt-0">
      <h2 class="text-gray-900 text-lg mb-1 ml-3 font-medium title-font">Feedback</h2>
      <p class="leading-relaxed mb-5 ml-3 text-gray-600">Fill out the below form to reach out to us</p>
      <div class="relative ml-3 mr-3 mb-4">
        <label for="name" class="leading-7 text-sm text-gray-600">Name</label>
        <input type="text" value={values.name} onChange={handleChange} id="name" name="name" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div class="relative mb-4 mr-3 ml-3">
        <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
        <input type="email" value={values.email} onChange={handleChange}  id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div class="relative mb-4 mr-3 ml-3">
        <label for="message" class="leading-7 text-sm text-gray-600">Message</label>
        <textarea id="message" value={values.message} onChange={handleChange}  name="message" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
      </div>
      <button class="ml-3 mr-3 text-white bg-lime-500 border-0 py-2 px-6 focus:outline-none hover:bg-lime-600 rounded text-lg" onClick={handleSubmit}>Submit</button>
      {/* <p class="text-xs text-gray-900 mr-3 ml-3 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p> */}
    </div>
  </div>
</section>
    </div>
  )
}
