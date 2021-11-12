import {
  Box,
  Avatar,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Button,
} from '@mui/material';

function HomepageRightSection() {
  return (
    <Box
      sx={{
        overflowY: 'scroll',
        height: '88vh',
        '&::-webkit-scrollbar': {
          display: 'none',
        },
      }}
    >
      <List>
        <Typography
          variant='subtitle1'
          sx={{
            color: 'var(--heading-primary)',
            fontWeight: '600',
            marginLeft: '1rem',
            marginBottom: '1rem',
          }}
          component='div'
        >
          Your friends
        </Typography>
        <ListItemButton>
          <ListItemIcon>
            <Avatar
              src='https://i.insider.com/55d4ccbf2acae717448bf0ce?width=600&format=jpeg&auto=webp'
              alt='B'
            />
          </ListItemIcon>
          <ListItemText primary='Obama Riot' />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <Avatar
              src='https://www.pinclipart.com/picdir/middle/549-5498506_happy-person-png-transparent-images-happy-black-woman.png'
              alt='B'
            />
          </ListItemIcon>
          <ListItemText primary='Christine Smith' />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <Avatar
              src='https://www.artofliving.org/sites/www.artofliving.org/files/styles/original_image/public/wysiwyg_imageupload/guilherme-stecanella-375176-unsplash.jpg?itok=lR2wOhfN'
              alt='B'
            />
          </ListItemIcon>
          <ListItemText primary='Julia Mendosa' />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <Avatar
              src='https://cdn.tinybuddha.com/wp-content/uploads/2016/01/Happy-Guy.jpg'
              alt='B'
            />
          </ListItemIcon>
          <ListItemText primary='Robert Smith' />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <Avatar
              src='https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'
              alt='B'
            />
          </ListItemIcon>
          <ListItemText primary='Binay shrestha' />
        </ListItemButton>
        <Button sx={{ width: '95%' }} variant='contained'>
          See more users
        </Button>
      </List>

      {/* PEOPLE YOU MAY KNOW */}
      <List>
        <Typography
          variant='subtitle1'
          sx={{
            color: 'var(--heading-primary)',
            fontWeight: '600',
            marginLeft: '1rem',
            marginBottom: '1rem',
          }}
          component='div'
        >
          People you may know
        </Typography>
        <ListItemButton>
          <ListItemIcon>
            <Avatar
              src='https://i.insider.com/55d4ccbf2acae717448bf0ce?width=600&format=jpeg&auto=webp'
              alt='B'
            />
          </ListItemIcon>
          <ListItemText primary='Obama Riot' />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <Avatar
              src='https://www.pinclipart.com/picdir/middle/549-5498506_happy-person-png-transparent-images-happy-black-woman.png'
              alt='B'
            />
          </ListItemIcon>
          <ListItemText primary='Christine Smith' />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <Avatar
              src='https://www.artofliving.org/sites/www.artofliving.org/files/styles/original_image/public/wysiwyg_imageupload/guilherme-stecanella-375176-unsplash.jpg?itok=lR2wOhfN'
              alt='B'
            />
          </ListItemIcon>
          <ListItemText primary='Julia Mendosa' />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <Avatar
              src='https://cdn.tinybuddha.com/wp-content/uploads/2016/01/Happy-Guy.jpg'
              alt='B'
            />
          </ListItemIcon>
          <ListItemText primary='Robert Smith' />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <Avatar
              src='https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'
              alt='B'
            />
          </ListItemIcon>
          <ListItemText primary='Binay shrestha' />
        </ListItemButton>
        <Button sx={{ width: '95%' }} variant='contained'>
          See more users
        </Button>
      </List>
    </Box>
  );
}

export default HomepageRightSection;
