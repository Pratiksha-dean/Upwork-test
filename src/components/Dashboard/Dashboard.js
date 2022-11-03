import React from "react";
import { Card } from "react-bootstrap";
import Header from "../Header/Header";
import "./Dashboard.css";

export default function Dashboard() {
  return (
    <div className="dashboard-main-div">
      <Header />

      <div
        className="dashboard-header"
        style={{ backgroundImage: "url(/assests/Gradients.svg)" }}
      >
        <div className="container">
          <div className="welcome-text">Welcome back, Tania! 👋</div>
        </div>
      </div>

      <div className="container">
        <div className="sub-div">
          <div className="card mb-3">
            <div className="card-body">
              <div className="sub-heading">Stay on top of your wellness!</div>
              <div className="row">
                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4">
                  <Card className="employee-card dashboard-card">
                    <Card.Body>
                      <div className="d-flex ">
                        <div>
                          <div className="employee-card-title">Article</div>
                          <div className="employee-card-text">
                            8 Ways Managers Can Support Employees
                          </div>
                        </div>
                        <img src="\assests\article.svg" alt="" />
                      </div>
                    </Card.Body>
                  </Card>
                </div>

                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4">
                  <Card className="mental-health-card  dashboard-card">
                    <Card.Body>
                      <div className="d-flex ">
                        <div>
                          <div className="mental-health-card-title">
                            Article
                          </div>
                          <div className="mental-health-card-text">
                            Why should mental health be your business strategy?
                          </div>
                        </div>
                        <img src="\assests\head.svg" alt="" />
                      </div>
                    </Card.Body>
                  </Card>
                </div>
                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4">
                  <Card className="graph-card  dashboard-card">
                    <Card.Body>
                      <div className="d-flex ">
                        <div>
                          <div className="graph-card-title">Article</div>
                          <div className="graph-card-text">
                            Why should mental health be your business strategy?
                          </div>
                        </div>
                        <img src="\assests\graph.svg" alt="" />
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <div className="alert-msg">
                <div className="alert-msg-bar"></div>
                <div className="hand-with-heart">
                  <img src="\assests\hand.svg" alt="" />
                </div>
                <div className="d-flex justify-content-between w-100 align-items-center">
                  <div>
                    <div className="alert-msg-heading">
                      Pro-tip to help you prepare for your next appointment!
                    </div>
                    <div className="alert-msg-text">
                      Write down business goals you hope to achieve in the next
                      3-6-12 months!
                    </div>
                  </div>

                  <img src="\assests\x-close.svg" height="15px" alt="" />
                </div>
              </div>

              <div className="upcoming-appointments-table-heading">
                Upcoming Appointments
              </div>
              <div>
                <table className="table upcoming-appointments-table">
                  <thead>
                    <tr>
                      <th scope="col">
                        <div className="d-flex">
                          <div className="me-3">Date & Time</div>
                          <img src="\assests\sort.svg" alt="" />
                        </div>
                      </th>
                      <th scope="col">
                        <div className="d-flex">
                          <div className="me-3">Attendee(s)</div>
                          <img
                            src="\assests\sort.svg"
                            className="me-3"
                            alt=""
                          />
                        </div>
                      </th>
                      <th scope="col">
                        <div className="d-flex">
                          <div className="me-3">Session Type</div>
                          <img
                            src="\assests\sort.svg"
                            className="me-3"
                            alt=""
                          />
                        </div>
                      </th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="date">Sept 22, 2022</div>
                        <div className="time">11:00 AM</div>
                      </td>
                      <td>
                        {" "}
                        <img
                          className="mx-3"
                          src="\assests\Avatar.svg"
                          alt=""
                        />
                      </td>
                      <td>Therapist Session</td>
                      <td>
                        <button className="btn join-meeting-btn">
                          Join Meeting
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="date">Sept 22, 2022</div>
                        <div className="time">11:00 AM</div>
                      </td>
                      <td>
                        {" "}
                        <img
                          className="mx-3"
                          src="\assests\Avatar.svg"
                          alt=""
                        />
                      </td>
                      <td>Therapist Session</td>
                      <td>
                        <button className="btn join-meeting-btn">
                          Join Meeting
                        </button>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <div className="date">Sept 22, 2022</div>
                        <div className="time">11:00 AM</div>
                      </td>
                      <td>
                        {" "}
                        <img
                          className="mx-3"
                          src="\assests\Avatar.svg"
                          alt=""
                        />
                      </td>
                      <td>Therapist Session</td>
                      <td>
                        <button className="btn join-meeting-btn">
                          Join Meeting
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
