import React from "react";


import { getUser, removeUserSession } from "./Utils/Common";
import "./dashboard.css";
import First from "../src/First.jpg";
import Second from "../src/Second.jpg";




function Dashboard(props) {
  const user = getUser();

  // handle click event of logout button
  const handleLogout = () => {
    removeUserSession();
    props.history.push("/login");
  };
  

  return (
    <div className="container1">
      <header className="header1">
        <h1>Learning Management System</h1>
        <div className="logout">
          <input
            type="button"
            onClick={handleLogout}
            value="Logout"
            alt="logout_button"
          />
        </div>
      </header>
      <nav className="site-nav">
        <div className="welcome">
          Welcome {user.name}!<br />
          <br />
        </div>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li className="course_list">
            <a href="/Courses">Courses</a></li>

            <li>
            <a href="/Student">Student_Records</a>
          </li>
           

          <li>
            <a href="/Account">Account</a>
          </li>
          <li>
            <a href="/support">Support</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
        </ul>
      </nav>

      <main className="main">
        <h1>Active Courses</h1>
        <div className="Filters">
          <div className="Filteritem">
            <label>Filter by:</label>
            <select>
              <option value="/">All Courses</option>
              <option value="/">2020</option>
              <option value="/">2019</option>
            </select>
          </div>
          <div className="Filteritem">
            <label>Sort by:</label>
            <select>
              <option value="/">Alphabetically, A-Z</option>
              <option value="/">Alphabetically, Z-A</option>
              <option value="/">Date, new to old</option>
              <option value="/">Date, old to new</option>
            </select>
          
           
          </div>
        </div>

        <div className="Courses">
          <div className="course-card">
            <div className="course-image">
              <img
                src={First}
                width="100px"
                height="100px"
                alt="Course Images"
              />
            </div>
            <div className="course-info">
              <h5>Web Development </h5>
              <h6>HTML. CSS. Javascript</h6>
            </div>
          </div>
          <div className="course-card">
            <div className="course-image">
              <img
                src={Second}
                width="100px"
                height="100px"
                alt="Course Images"
              />
            </div>
            <div className="course-info">
              <h5>Data Structures </h5>
              <h6>Stacks. Arrays. List </h6>
            </div>
          </div>
          <div className="course-card">
            <div className="course-image">
              <img
                src={First}
                width="100px"
                height="100px"
                alt="Course Images"
              />
            </div>
            <div className="course-info">
              <h5>Web Development </h5>
              <h6>HTML. CSS. Javascript</h6>
            </div>
          </div>
        </div>
      </main>

      <div class="sidebar-top">
        <h1> </h1>
      </div>

      <div class="sidebar-bottom">
        <small>Coming up</small>
        <div class="cost">
          <span class="new">New Course </span>
          <br />
          <span>Starting - Jan 2020</span>
        </div>
        <a href="/signup">Sign up</a>
      </div>
      <footer></footer>
    </div>
  );
  }


export default Dashboard;
