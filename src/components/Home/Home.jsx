import React from "react";
import CovidStat from "./CovidStat";
import NavBar from "../NavBar/NavBar";
import News from "../News/News";
import BriefNews from "../News/BriefNews";
import NewsArticle from "../News/NewsArticle";
import { NewsContext, NewsContextProvider } from "../News/NewsContext";
import { Carousel, Row, Col, Card, Container } from "react-bootstrap";

const Home = () => {
  return (
    <div>
      <NavBar />
      <CovidStat />
      <Container>
        <Row>
          <Col>
            <Card className="text-center">
              {/* <Card.Header>Featured Headlines</Card.Header> */}
              <Carousel>
                <Carousel.Item>
                  <NewsContextProvider>
                    <BriefNews />
                  </NewsContextProvider>
                </Carousel.Item>
              </Carousel>
              {/* <Card.Footer className="text-muted">
                Last Updated: 2 days ago
              </Card.Footer> */}
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
