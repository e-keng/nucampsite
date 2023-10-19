import React from "react";
import { Card, CardImg, CardText, CardBody, Col } from "reactstrap";

const CampsiteDetail = ({ campsite }) => {
  const { image, name, description } = campsite;
  return (
    <Col md="12" className="m-4">
      <Card>
        <CardImg src={image} alt={name} />
        <CardBody>
          <CardText>{description}</CardText>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CampsiteDetail;
