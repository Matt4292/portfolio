import React from "react"

function Contact() {
  return (
    <div className="contact">
      <h1>Contact Me</h1>
      <form>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Name</label>
          <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="John Doe"/>
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Email address</label>
          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">Message</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <button type="submit" className="btn btn-primary mb-2">Submit</button>
      </form> 
    </div>
    
  )
}

export default Contact