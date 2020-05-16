import React from "react";
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";
import DateTimePicker from "./DateTimePicker";

const FindPlayerForm = (props) => {
  return (
    <Form>
      <Row form>
        <Col md={12}>
          <DateTimePicker />
        </Col>
        <Col md={6}></Col>
      </Row>
      <FormGroup>
        <Label for="Travel">Willing to Travel</Label>
        <Input type="text" name="travel" id="Travel" placeholder="Miles" />
      </FormGroup>
      <FormGroup>
        <Label for="Duration">Duration</Label>
        <Input type="text" name="duration" id="Duration" placeholder="Hours" />
      </FormGroup>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="exampleCity">City</Label>
            <Input type="text" name="city" id="exampleCity" />
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="exampleState">State</Label>
            <Input type="text" name="state" id="exampleState" />
          </FormGroup>
        </Col>
        <Col md={2}>
          <FormGroup>
            <Label for="exampleZip">Zip</Label>
            <Input type="text" name="zip" id="exampleZip" />
          </FormGroup>
        </Col>
      </Row>
      <Row className="mx-auto">
        <Button className="btn btn-warning btn-lg mb-2 mx-auto">Search</Button>
      </Row>
    </Form>
  );
};

export default FindPlayerForm;
