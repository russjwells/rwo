import React, { Component } from 'react'
import ProjectList from './ProjectList'

class More extends Component {
  render(){
    return(
      <div className="ProjectList">
          <h2>More live sites:</h2>
          <p><a target="_blank" href="https://www.battlehigh2.com">www.battlehigh2.com</a></p>
          <h2>Graphics for the web and print:</h2>
          <p>See <a target="_blank" href="https://www.behance.net/russjwells">behance</a> and <a target="_blank" href="http://dribbble.com/russjwells">dribbble</a>.</p>
          <h2>Video, motion graphics & animation:</h2>
          <p>See <a target="_blank" href="https://vimeo.com/russjwells">vimeo</a> and <a target="_blank" href="https://www.youtube.com/channel/UCSQZ5c7NsGrk7Vl1pYK4wuw">youtube</a>.</p>
      </div>
    );
  }
}

export default More
