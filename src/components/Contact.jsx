import React from "react"

function Contact() {
  return (
    <div class="contact">
      <h1>Contact Me</h1>
      <form>
        <div class="form-group">
          <label for="exampleFormControlInput1">Name</label>
          <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="John Doe"/>
        </div>
        <div class="form-group">
          <label for="exampleFormControlInput1">Email address</label>
          <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
        </div>
        <div class="form-group">
          <label for="exampleFormControlTextarea1">Message</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <button type="submit" class="btn btn-primary mb-2">Submit</button>
      </form> 
    </div>
    
  )
}

export default Contact