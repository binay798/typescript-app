import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import { groups } from './../../utils/images';

function GroupCard() {
  return (
    <Card sx={{ width: '100%' }}>
      <CardMedia
        component='img'
        height='240'
        image={groups[0]}
        alt='green iguana'
      />
      <CardContent>
        <Typography variant='h5' component='div'>
          Lizard
        </Typography>
        <Typography color='secondary' variant='caption'>
          26.3k members
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant='outlined' color='secondary' sx={{ width: '100%' }}>
          Join Group
        </Button>
      </CardActions>
    </Card>
  );
}

export default GroupCard;
