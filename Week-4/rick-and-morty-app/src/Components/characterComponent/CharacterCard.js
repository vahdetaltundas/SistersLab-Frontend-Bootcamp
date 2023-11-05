import { Button, Card, CardActions, CardContent, CardMedia, Grid, IconButton, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import FavoriteIcon from '@mui/icons-material/Favorite';

const CharacterCard = ({ character }) => {
  const [result, setResult] = useState([]);
  useEffect(() => {
    setResult(character);
  }, [character]);
  return (
    <div>
      <Card sx={{ width: "325px" }}>
            <CardMedia
              component="img"
              alt="character"
              image={result.image}
            />
            <CardContent>
              <Typography variant="h5" component="div">
                {result.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {result.gender} {result.status}
              </Typography>
            </CardContent>
            <CardActions>
            <Grid
              container
              direction="row"
              justifyContent="space-around"
              alignItems="flex-end"
            >
              <IconButton aria-label="add to favorites">
                  <FavoriteIcon color="error"/>
                </IconButton>
                <Button size="small" variant="text">Details</Button>
            </Grid>
            </CardActions>
          </Card>
    </div>
  );
};

export default CharacterCard;
