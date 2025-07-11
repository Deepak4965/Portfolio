
import './Contact.css'
import con from '../../assets/contact.png'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)
const Contact = () => {

useGSAP(()=>{
        gsap.from(".leftcontact img",{
            x:-100,
            duration:1,
            opacity:0,
            stagger:1,
            scrollTrigger:{
                trigger:".leftcontact img",
                scroll:"body",
                scrub:2,
             
                start:"top 80%",
                end:"top 30%"
            }
        })
        gsap.from("form",{
            x:-100,
            duration:1,
            opacity:0,
            stagger:1,
            scrollTrigger:{
                trigger:"form",
                scroll:"body",
                scrub:2,
                  
                start:"top 80%",
                end:"top 30%"
            }
        })
})
  
  return (
    <div id='Contact' className='text-white'>
      <div className="leftcontact">
<img src={con} alt="" />
      </div>
      <div className="rightcontact">
<form action="#">
    <input  name='Username' type="text" placeholder='Name' />
    <input name='Email' type="email" placeholder='Email' />
    <textarea name="message" id="textarea" placeholder='message'></textarea>
    <input type="submit" id="btn" value='Submit' />
</form>
      </div>
    </div>
  )
}

export default Contact
