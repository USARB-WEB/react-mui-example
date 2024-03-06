import React from 'react';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import './App.css';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));


function App() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
        Here is a gentle confirmation that your action was successful.
      </Alert>


      <Stack spacing={1}>
        {/* For variant="text", adjust the height via font-size */}
        <Skeleton variant="text" sx={{ fontSize: '1rem' }} />

        {/* For other variants, adjust the size with `width` and `height` */}
        <Skeleton variant="circular" width={140} height={40} />
        <Skeleton variant="rectangular" width={210} height={60} />
        <Skeleton variant="rounded" width={510} height={60} />
      </Stack>


      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
        <CardMedia
          component="img"
          height="194"
          image="data:image/png;base64,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"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to cook
            together with your guests. Add 1 cup of frozen peas along with the mussels,
            if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>
              Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
              aside for 10 minutes.
            </Typography>
            <Typography paragraph>
              Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
              medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
              occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
              large plate and set aside, leaving chicken and chorizo in the pan. Add
              pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
              stirring often until thickened and fragrant, about 10 minutes. Add
              saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
            </Typography>
            <Typography paragraph>
              Add rice and stir very gently to distribute. Top with artichokes and
              peppers, and cook without stirring, until most of the liquid is absorbed,
              15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
              mussels, tucking them down into the rice, and cook again without
              stirring, until mussels have opened and rice is just tender, 5 to 7
              minutes more. (Discard any mussels that don&apos;t open.)
            </Typography>
            <Typography>
              Set aside off of the heat to let rest for 10 minutes, and then serve.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </>
  );
}

export default App;
