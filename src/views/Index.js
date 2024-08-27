import { useState } from "react";

import { Line } from "react-chartjs-2";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Card, CardHeader, CardBody, Container, Row, Col } from "reactstrap";

import { lineChartData, lineChartOptionsDashboard } from "variables/charts.js";

import Header from "components/Headers/Header.js";
import { lineChartDataLight } from "variables/charts";

const Index = (props) => {
  // const [activeNav, setActiveNav] = useState(1);

  const [isActive1, setIsActive1] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);
  const toggleIcon1 = () => {
    setIsActive1(!isActive1);
  };
  const toggleIcon2 = () => {
    setIsActive2(!isActive2);
  };
  const toggleIcon3 = () => {
    setIsActive3(!isActive3);
  };

  return (
    <>
      <Header />
      {/* Page content */}
      <Container
        className="mt-3"
        fluid
        style={{ paddingLeft: "15px", paddingRight: "5px" }}
      >
        <Row>
          <Col className="mb-5 mb-xl-0 pl-0" xl="5">
            <Card className="bg-gradient-default shadow">
              <CardHeader className="bg-transparent">
                <Row className="align-items-center">
                  <div className="col-8">
                    <h6 className="text-uppercase text-light ls-1 mb-1">
                      Overview
                    </h6>
                    <h2 className="text-white mb-0">Temperature & Humidity</h2>
                  </div>
                </Row>
              </CardHeader>
              <CardBody>
                <Line
                  data={lineChartData}
                  options={lineChartOptionsDashboard}
                />
              </CardBody>
            </Card>
          </Col>
          <Col className="mb-5 mb-xl-0 pl-0" xl="5">
            <Card className="bg-gradient-default shadow">
              <CardHeader className="bg-transparent">
                <Row className="align-items-center">
                  <div className="col">
                    <h6 className="text-uppercase text-light ls-1 mb-1">
                      Overview
                    </h6>
                    <h2 className="text-white mb-0">Light</h2>
                  </div>
                </Row>
              </CardHeader>
              <CardBody>
                {/* Chart */}
                <Line
                  data={lineChartDataLight}
                  options={lineChartOptionsDashboard}
                />
              </CardBody>
            </Card>
          </Col>

          <Col xl="2" className="pl-0">
            <Card
              className="shadow py-3"
              style={{
                backgroundColor: "#f5f6fa",
                height: "30%",
                border: "2px solid #ccc", // Add a 2px solid border with color #ccc
                borderRadius: "8px",
              }}
            >
              <Row className="align-items-center h-100">
                <div className="col ml-2">
                  <button
                    onClick={toggleIcon1}
                    style={{ background: "none", border: "none" }}
                  >
                    <i
                      className={`fas ${
                        isActive1 ? "fa-toggle-on" : "fa-toggle-off"
                      }`}
                      style={{
                        fontSize: "50px",
                        color: isActive1 ? "#ff6348" : "#696969",
                      }}
                    ></i>
                  </button>
                </div>
                <div className="icon text-white rounded-circle shadow mr-4">
                  <i
                    className="fa-solid fa-lightbulb"
                    style={{
                      fontSize: "50px",
                      color: isActive1 ? "#feca57" : "#696969",
                    }}
                  ></i>
                </div>
              </Row>
            </Card>
            <Card
              className="shadow my-3 py-3"
              style={{
                backgroundColor: "#f5f6fa",
                height: "30%",
                border: "2px solid #ccc", // Add a 2px solid border with color #ccc
                borderRadius: "8px",
              }}
            >
              <Row className="align-items-center h-100">
                <div className="col ml-2">
                  <button
                    onClick={toggleIcon2}
                    style={{ background: "none", border: "none" }}
                  >
                    <i
                      className={`fas ${
                        isActive2 ? "fa-toggle-on" : "fa-toggle-off"
                      }`}
                      style={{
                        fontSize: "50px",
                        color: isActive2 ? "#ff6348" : "#696969",
                      }}
                    ></i>
                  </button>
                </div>
                <div className="icon icon-shapetext-white  shadow mr-4">
                  <i
                    class="fa-solid fa-temperature-low"
                    style={{
                      fontSize: "50px",
                      color: isActive2 ? "#EA2027" : "#696969",
                    }}
                  />
                </div>
              </Row>
            </Card>
            <Card
              className="shadow py-3"
              style={{
                backgroundColor: "#f5f6fa",
                height: "30%",
                border: "2px solid #ccc", // Add a 2px solid border with color #ccc
                borderRadius: "8px",
              }}
            >
              <Row className="align-items-center h-100">
                <div className="col ml-2">
                  <button
                    onClick={toggleIcon3}
                    style={{ background: "none", border: "none" }}
                  >
                    <i
                      className={`fas ${
                        isActive3 ? "fa-toggle-on" : "fa-toggle-off"
                      }`}
                      style={{
                        fontSize: "50px",
                        color: isActive3 ? "#ff6348" : "#696969",
                      }}
                    ></i>
                  </button>
                </div>
                <div className="icon text-white rounded-circle shadow mr-4">
                  <i
                    class="fa-solid fa-droplet"
                    style={{
                      fontSize: "50px",
                      color: isActive3 ? "#4bcffa" : "#696969",
                    }}
                  />
                </div>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Index;
