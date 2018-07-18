import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseActions';

class CourseComponent extends Component {
  constructor() {
    super();
    this.state = {
      course: {title:''}
    }
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }

  onTitleChange(event){
    const course = this.state.course;
    course.title = event.target.value;
    this.setState({
      course: course
    })
  }

  onClickSave(event){
    this.props.createCourse(this.state.course);
  }

  courseRow(course, index){
    return <div key={index}>{course.title}</div>;
  }


  render(){
    return(
      <div>
        <h1>Course Page - Redux State</h1>
        {this.props.courses.map(this.courseRow)}
        <h2>Add course</h2>
        <input type='text' onChange={this.onTitleChange} value={this.state.course.title} />
        <input type='submit' value='save' onClick={this.onClickSave} />
      </div>
    )
  }
}

// mapStateToProps = (state) => {
//     courses: state.courses
// }

// mapDispatchToProps = (dispatch) => {
//     createCourse: course => dispatch(courseActions.createCourse(course));
// }

// export default connect(mapStateToProps, mapDispatchToProps)(coursesPage);

export default CourseComponent;