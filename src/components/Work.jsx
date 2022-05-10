import React from "react"

function Work() {
  return (
    <section class="work" id="work">
      <h2>My Work</h2>
      <div class="work-examples">
        
        <div class="example-sites" id="first-page">
          <a href="https://matt4292.github.io/project-1/" target="blank">
            <img src="images/movie-details.jpg" class="site-pics"/>          
            <h3>
              Movie search website
            </h3>
          </a>

        </div>
        <div class="example-sites">
          <a href="https://agile-atoll-06958.herokuapp.com" target="blank">
            <img src="images/plant-blog.jpg" class="site-pics"/>          
            <h3>
              Plant Blog
            </h3>
          </a>
        </div>
        <div class="example-sites">
          <a href="https://matt4292.github.io/day-planner/" target="blank">
            <img src="images/day-planner.jpg" class="site-pics"/>          
            <h3>
              Day Planner
            </h3>
          </a>
        </div>
        <div class="example-sites">
          <a href="https://matt4292.github.io/weather-dashboard/" target="blank">
            <img src="images/weather-dashboard.jpg" class="site-pics"/>          
            <h3>
              Weather Dashboard
            </h3>
          </a>
        </div>
        <div class="example-sites">
          <a href="https://www.google.com" target="blank">
            <img src="images/placeholder.png" class="site-pics"/>          
            <h3>
              Example of previous work
            </h3>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Work