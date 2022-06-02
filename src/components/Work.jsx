import React from "react"

function Work() {
  return (
    <section className="work" id="work">
      <h2>My Work</h2>
      <div className="work-examples">
        
        <div className="example-sites" id="first-page">
          <a href="https://job-searchify-app.herokuapp.com" target="blank">
            <img src="images/job-searchify.jpg" className="site-pics" alt="Job searchify screenshot"/>          
            <h3>
              Job Searchify
            </h3>
          </a>

        </div>
        <div className="example-sites">
          <a href="https://agile-atoll-06958.herokuapp.com" target="blank">
            <img src="images/plant-blog.jpg" className="site-pics" alt="Plant Blog screenshot"/>          
            <h3>
              Plant Blog
            </h3>
          </a>
        </div>
        <div className="example-sites">
          <a href="https://matt4292.github.io/project-1/" target="blank">
            <img src="images/movie-details.jpg" className="site-pics" alt="Movie search site screenshot"/>          
            <h3>
              Movie search website
            </h3>
          </a>
        </div>
        <div className="example-sites">
          <a href="https://matt4292.github.io/day-planner/" target="blank">
            <img src="images/day-planner.jpg" className="site-pics" alt="Day Planner screenshot"/>          
            <h3>
              Day Planner
            </h3>
          </a>
        </div>
        <div className="example-sites">
          <a href="https://matt4292.github.io/weather-dashboard/" target="blank">
            <img src="images/weather-dashboard.jpg" className="site-pics" alt="Weather dashboard screenshot"/>          
            <h3>
              Weather Dashboard
            </h3>
          </a>
        </div>

      </div>
    </section>
  )
}

export default Work