 import React from 'react'
 import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup'
 import'./Cards.css'

const Cards = ({data:{confirmed,deaths,recovered,lastUpdate}}) => {
  if (!confirmed) {
    return "Loading...."
}
  return (
    <div className="cardContainer">
      <Grid className="container" >
      <Grid component={Card} item xs={8} className="Infected">
      <CardContent className="cardContent">
      <Typography color="textSecondary" gutterBottom>Infected</Typography>
      <Typography variant = "h5">  <CountUp start={0} end={confirmed.value} duration={4.5} separator=',' /></Typography>
      <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
      <Typography variant="body2">Number of active cases of COVID-19</Typography>

      </CardContent>
         
        </Grid>

        {/* Card NO 2 */}
        <Grid component={Card} item xs={8} className="Deathes">
      <CardContent>
      <Typography color="textSecondary" gutterBottom>Deathes</Typography>
      <Typography variant = "h5">  <CountUp start={0} end={deaths.value} duration={4.5} separator=',' /></Typography>
      <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
      <Typography variant="body2">Number of active cases of COVID-19</Typography>

      </CardContent>
         
        </Grid>
        {/* Card No 3 */}
        <Grid component={Card} item xs={8} className="Recovered">
      <CardContent>
      <Typography color="textSecondary" gutterBottom>Recovered</Typography>
      <Typography variant = "h5">  <CountUp start={0} end={recovered.value} duration={4.5} separator=',' /></Typography>
      <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
      <Typography variant="body2">Number of active cases of COVID-19</Typography>

      </CardContent>
         
        </Grid>
      </Grid>
    
   
    </div>
        
      
    
  )
}

export default Cards
