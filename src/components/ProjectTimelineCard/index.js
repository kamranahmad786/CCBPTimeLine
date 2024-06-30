import {AiFillCalendar} from 'react-icons/ai'

import './index.css'

const ProjectTimelineCard = props => {
  const {projectDetails} = props
  const {imageUrl, projectTitle, description, projectUrl, duration} =
    projectDetails

  return (
    <div className="ProjectCardContainer">
      <img src={imageUrl} alt="project" className="ProjectImage" />
      <div className="ProjectTitileAndDurationContainer">
        <h1 className="ProjectTitle">{projectTitle}</h1>
        <div className="DurationContainer">
          <AiFillCalendar color=" #171f46" />
          <p className="DurationContainer">{duration}</p>
        </div>
      </div>
      <p className="ProjectDescription">{description}</p>
      <a href={projectUrl}>Visit</a>
    </div>
  )
}

export default ProjectTimelineCard
