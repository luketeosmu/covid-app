import React from "react";
import { Card, Row, Col, Container } from "react-bootstrap";

export default class CovidStat extends React.Component {
  state = {
    loading: true,
    covid: null,
  };

  async componentDidMount() {
    try {
      const url = "https://corona-api.com/countries/sg";
      const response = await fetch(url);
      const data = await response.json();
      this.setState({ covid: data.data.timeline[0], loading: false });
    } catch (error) {}
  }

  render() {
    return (
      <div>
        {this.state.loading || !this.state.covid ? (
          <div>Loading...</div>
        ) : (
          <Container>
            <Card className="text-center">
              <Card.Header
                style={{
                  color: "black",
                  fontWeight: "800",
                  padding: "10px",
                  fontFamily: "Libre Franklin",
                  display: "block",
                  margin: "0px",
                  fontSize: "20px",
                  textAlign: "center",
                }}
              >
                COVID-19 Statistics (updated daily)
              </Card.Header>
              <Row>
                <Col>
                  <Card>
                    <Card.Body>
                      <Card.Title className="text-center mb-3">
                        Total Cases
                      </Card.Title>
                      <Card.Subtitle className="text-center">
                        {this.state.covid.confirmed}
                      </Card.Subtitle>
                      <Card.Text
                        className="text-center"
                        style={{ color: "#D0342C" }}
                      >
                        + {this.state.covid.new_confirmed}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card>
                    <Card.Body>
                      <Card.Title className="text-center mb-3">
                        Active Cases
                      </Card.Title>
                      <Card.Subtitle className="text-center">
                        {this.state.covid.active}
                      </Card.Subtitle>
                      <Card.Text className="text-center text-muted">
                        N/A
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card>
                    <Card.Body>
                      <Card.Title className="text-center mb-3">
                        Deaths
                      </Card.Title>
                      <Card.Subtitle className="text-center">
                        {this.state.covid.deaths}
                      </Card.Subtitle>
                      <Card.Text
                        className="text-center"
                        style={{ color: "#D0342C" }}
                      >
                        + {this.state.covid.new_deaths}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card>
                    <Card.Body>
                      <Card.Title className="text-center mb-3">
                        Recovered
                      </Card.Title>
                      <Card.Subtitle className="text-center">
                        {this.state.covid.recovered}
                      </Card.Subtitle>
                      <Card.Text
                        className="text-center"
                        style={{ color: "#42ba96" }}
                      >
                        + {this.state.covid.new_recovered}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              <Card.Footer>Last Updated: {this.state.covid.date}</Card.Footer>
            </Card>
          </Container>
        )}
      </div>
    );
  }
}
