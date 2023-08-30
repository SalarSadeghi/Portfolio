import { useState } from 'react'
import './contact.scss'

function Contact() {
  const [message, setMessage] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault()
    setMessage(true)
  }
  return (
    <div className='contact' id='contact'>
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact</h2>
        <form action="" onSubmit={handleSubmit}>
          <input type="email" placeholder='Email' />
          <textarea name="" placeholder='Message' id="" cols="30" rows="10"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks for your message :)</span>}
        </form>
      </div>
    </div>
  )
}

export default Contact
