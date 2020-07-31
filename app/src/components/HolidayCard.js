import React from 'react';
import { Card } from 'semantic-ui-react';


const HolidayCard = props => {
  const { holiday } = props;
  return (
    <>
      <Card>
        <Card.Content>
          <Card.Header>{holiday.name}</Card.Header>
          <Card.Meta>Date: {holiday.date}</Card.Meta>
          <Card.Description>Observed: {holiday.observed}</Card.Description>
        </Card.Content>
      </Card>
    </>
  )
}

export default HolidayCard;