import {
  Avatar,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  IconButton,
  Link,
  Stack,
  Typography,
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Box } from '@mui/system';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import { blue } from '@mui/material/colors';

function Post() {
  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: 'red' }} aria-label='recipe'>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label='settings'>
            <MoreVertIcon />
          </IconButton>
        }
        title='Shrimp and Chorizo Paella'
        subheader='September 14, 2016'
      />
      <CardMedia
        component='img'
        height='400'
        image='https://www.tasteofhome.com/wp-content/uploads/2021/01/tasty-butter-chicken-curry-dish-from-indian-cuisine-1277362334.jpg?fit=700,700'
        alt='Paella dish'
      />
      <CardContent>
        <Typography variant='body2' color='text.secondary'>
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <Stack
        direction='row'
        sx={{ padding: '0 2rem' }}
        justifyContent='space-between'
        alignItems='center'
      >
        <Stack direction='row' spacing={1} alignItems='center'>
          <Avatar sx={{ width: 24, height: 24, backgroundColor: blue[500] }}>
            <ThumbUpOutlinedIcon
              color='action'
              sx={{ width: 18, height: 18 }}
            />
          </Avatar>
          <Typography variant='body2' color='text.secondary'>
            200 likes
          </Typography>
        </Stack>

        <Typography variant='body2' color='text.secondary'>
          <Link href='#' color='inherit' underline='hover'>
            1 comment
          </Link>
        </Typography>
      </Stack>
      {/* LIKE AND COMMENT  */}
      <Box sx={{ padding: '2rem' }}>
        <Divider sx={{ borderColor: 'var(--divider)' }} />
        <Stack
          direction='row'
          justifyContent='space-evenly'
          sx={{ margin: '.5rem 3rem' }}
        >
          <Button startIcon={<ThumbUpOutlinedIcon />} sx={{ flex: 1 }}>
            Like
          </Button>
          <Button
            startIcon={<ChatBubbleOutlineOutlinedIcon />}
            sx={{ flex: 1 }}
          >
            Comment
          </Button>
        </Stack>
        <Divider sx={{ borderColor: 'var(--divider)' }} />
      </Box>
    </Card>
  );
}

export default Post;
