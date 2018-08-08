import React, { Component } from "react";
import "./Form.css";
import img from "../../Images/new-color-logo.png";
import { connect } from "react-redux";
import {
  updateStudentName,
  updateAge,
  updateSkillLevel,
  updateDesiredSkill,
  updateResorts
} from "../../ducks/reducer";

class Form extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="nav">
        <nav>
          <div>
            <img className="logo-img" src={img} />
          </div>
          <div id="nav-items">
            <div>Instructors</div>
            <div>Rentals?</div>
            <div>Book A Lesson</div>
            <div>Contact</div>
          </div>
        </nav>

        <div className="info-container">
          <h2>Name</h2>
          <input
            value={this.props.student_name}
            onChange={e => this.props.updateStudentName(e.target.value)}
          />
          <h2> Age </h2>
          <input onChange={e => this.props.updateAge(e.target.value)} />
          <h2>Your Skill Level</h2>
          <input onChange={e => this.props.updateSkillLevel(e.target.value)} />
          <h2>What do you want to learn?</h2>
          <input
            onChange={e => this.props.updateDesiredSkill(e.target.value)}
          />
          <h2> Preferred Resorts </h2>
          <input onChange={e => this.props.updateResorts(e.target.value)} />

          <img src={this.props.image_url} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(
  mapStateToProps,
  {
    updateStudentName,
    updateAge,
    updateSkillLevel,
    updateDesiredSkill,
    updateResorts
  }
)(Form);
