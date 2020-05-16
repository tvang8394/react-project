import React from 'react';
import { Card, Button, CardHeader, CardFooter, CardBody,
  CardTitle, CardText } from 'reactstrap';

const MatchHistory = (props) => {
  return (
    <div>
      <Card>
        <CardHeader tag="h3">Vs (name)</CardHeader>
        <CardBody>
          <CardTitle>Score: </CardTitle>
          <CardText>Laborum aute ut id consectetur occaecat eu laboris commodo fugiat tempor commodo est. Ex sunt cupidatat irure sunt ipsum nostrud commodo enim do ea reprehenderit et cillum. Consectetur qui nostrud reprehenderit esse Lorem incididunt ex dolor ad laborum incididunt nostrud eu.</CardText>
          <Button>More Detail</Button>
        </CardBody>
      </Card>
      <Card>
        <CardHeader tag="h3">Vs (name)</CardHeader>
        <CardBody>
          <CardTitle>Score: </CardTitle>
          <CardText>Laborum aute ut id consectetur occaecat eu laboris commodo fugiat tempor commodo est. Ex sunt cupidatat irure sunt ipsum nostrud commodo enim do ea reprehenderit et cillum. Consectetur qui nostrud reprehenderit esse Lorem incididunt ex dolor ad laborum incididunt nostrud eu.</CardText>
          <Button>More Detail</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default MatchHistory;