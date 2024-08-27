import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";
import useRandomData from 'variables/useRandomData';

const getCardClass = (value, type) => {
  if (type === 'temperature') {
    if (value < 15) return 'card-cold';
    if (value >= 15 && value <= 25) return 'card-warm';
    return 'card-hot';
  } else if (type === 'light') {
    if (value < 500) return 'card-low-light';
    if (value >= 500 && value <= 1500) return 'card-medium-light';
    return 'card-high-light';
  } else if (type === 'humidity') {
    if (value < 30) return 'card-dry';
    if (value >= 30 && value <= 60) return 'card-normal-humidity';
    return 'card-humid';
  }
};
const Header = () => {
  const { dataTemperature, dataLight, dataHumidity } = useRandomData();
  return (
    <>
      <div className="header bg-gradient-neutral pb-9 pt-6" style={{height: '200px'}}>
        <Container fluid>
          <div className="header-body">
            {/* Card stats */}
            <Row>
              <Col lg="6" xl="4">
                <Card className={`card-stats mb-4 mb-xl-0 ${getCardClass(dataLight, 'light')}`}>
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Light
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">
                          {dataLight} Lux
                        </span>
                      </div>
                      <Col className="col-auto">
                        <div
                          className="icon icon-shape bg-danger text-white rounded-circle shadow"
                          style={{ height: "65px", width: "65px" }}
                        >
                          <i
                            className="fa-solid fa-lightbulb"
                            style={{ fontSize: "35px" }}
                          ></i>
                        </div>
                      </Col>
                    </Row>
                    <p className="mt-3 mb-0 text-muted text-sm">
                      <span className="text-success mr-2">
                        <i className="fa fa-arrow-up" /> 3.48%
                      </span>{" "}
                      
                    </p>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="6" xl="4">
                <Card className={`card-stats mb-4 mb-xl-0 ${getCardClass(dataTemperature, 'temperature')}`}>
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Tempurature
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">{dataTemperature} °C</span>
                      </div>
                      <Col className="col-auto">
                        <div
                          className="icon icon-shape bg-warning text-white rounded-circle shadow"
                          style={{ height: "65px", width: "65px" }}
                        >
                          <i
                            class="fa-solid fa-temperature-low"
                            style={{ fontSize: "35px" }}
                          />
                        </div>
                      </Col>
                    </Row>
                    <p className="mt-3 mb-0 text-muted text-sm">
                      <span className="text-danger mr-2">
                        <i className="fas fa-arrow-down" /> 3.48%
                      </span>{" "}
                      
                    </p>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="6" xl="4">
                <Card className={`card-stats mb-4 mb-xl-0 ${getCardClass(dataHumidity, 'humidity')}`}>
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Humidity
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">{dataHumidity}%</span>
                      </div>
                      <Col className="col-auto">
                        <div
                          className="icon icon-shape bg-yellow text-white rounded-circle shadow"
                          style={{ height: "65px", width: "65px" }}
                        >
                          <i
                            class="fa-solid fa-droplet"
                            style={{ fontSize: "35px" }}
                          />
                        </div>
                      </Col>
                    </Row>
                    <p className="mt-3 mb-0 text-muted text-sm">
                      <span className="text-warning mr-2">
                        <i className="fas fa-arrow-down" /> 1.10%
                      </span>{" "}
                      
                    </p>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Header;
