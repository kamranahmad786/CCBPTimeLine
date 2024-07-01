import {AiFillClockCircle} from 'react-icons/ai'

import './index.css'

const CourseTimelineCard = props => {
  const {courseDetails} = props
  const {courseTitle, description, duration, tagsList} = courseDetails

  return (
    <>
      <div className="CourseTitleAndDurationContainer">
        <h1 className="CourseTitle">{courseTitle}</h1>
        <div className="DurationContainer">
          <AiFillClockCircle color="#171f46" />
          <p className="Duration">{duration}</p>
        </div>
      </div>
      <p className="CourseDescription">{description}</p>
      <ul className="CourseTagsList">
        {tagsList.map(eachTag => (
          <li className="CourseTagItem" key={eachTag.id}>
            <p className="CourseTag">{eachTag.name}</p>
          </li>
        ))}
      </ul>
    </>
  )
}

export default CourseTimelineCard
