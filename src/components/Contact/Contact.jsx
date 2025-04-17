import React from 'react'
import './Contact.css'
import con from '../../assets/contact.png'
const Contact = () => {
  return (
    <div id='contact' className='text-white'>
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
