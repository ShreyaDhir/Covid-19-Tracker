import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';

function InfoBox({title, cases, total}) {
  return (
    <Card className="infoBox">
      <CardContent>
        {/* Title */}
          <Typography className="infoBox__title" color="textSecondary">
            {title}
          </Typography>
        
        {/* +200k Cases */}
          <h1 className="infoBox__cases">
            {cases}
          </h1>
        
        {/* 1.2M Total */}
          <Typography color="textSecondary" className="infoBox__total">
            {total} Total
          </Typography>
      </CardContent>
    </Card>
  )
}

export default InfoBox
