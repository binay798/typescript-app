import {
  Box,
  Avatar,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Divider,
  Button,
} from '@mui/material';
import GroupsIcon from '@mui/icons-material/Groups';
import GroupAddIcon from '@mui/icons-material/GroupAdd';

function HomepageLeftSection(): JSX.Element {
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
        <ListItemButton>
          <ListItemIcon>
            <Avatar
              src='https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'
              alt='B'
            />
          </ListItemIcon>
          <ListItemText primary='Binay shrestha' />
        </ListItemButton>
        <Divider sx={{ borderColor: 'var(--divider)' }} />
        <ListItemButton>
          <ListItemIcon>
            <GroupsIcon sx={{ color: 'var(--light)', fontSize: '3rem' }} />
          </ListItemIcon>
          <ListItemText primary='My Groups' />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <GroupAddIcon sx={{ color: 'var(--light)', fontSize: '3rem' }} />
          </ListItemIcon>
          <ListItemText primary='Add group' />
        </ListItemButton>
      </List>

      {/* RECENTELY ADDED GROUPS */}
      <List
        sx={{ width: '100%' }}
        component='nav'
        aria-labelledby='nested-list-subheader'
      >
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
          Recently added groups
        </Typography>
        <ListItemButton>
          <ListItemIcon>
            <Avatar
              src='https://styles.redditmedia.com/t5_2wmvy/styles/communityIcon_72agqrawocc71.png'
              alt='A'
            />
          </ListItemIcon>
          <ListItemText primary='Animal lovers' />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <Avatar
              src='https://cdn.iconscout.com/icon/premium/png-256-thumb/aerospace-642028.png'
              alt='A'
            />
          </ListItemIcon>
          <ListItemText primary='Aerospace' />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <Avatar
              src='https://static-s.aa-cdn.net/img/ios/882400137/e49ec71ef09be47d0ee6f0cd4a7bb3f1?v=1'
              alt='A'
            />
          </ListItemIcon>
          <ListItemText primary='Meme group' />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <Avatar
              src='https://cdn.iconscout.com/icon/free/png-256/web-programming-2337692-1953988.png'
              alt='A'
            />
          </ListItemIcon>
          <ListItemText primary='Javascript Programming' />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <Avatar
              src='https://cdn.iconscout.com/icon/premium/png-256-thumb/technology-2462499-2076039.png'
              alt='A'
            />
          </ListItemIcon>
          <ListItemText primary='Technology' />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <Avatar
              src='https://cdn.iconscout.com/icon/premium/png-256-thumb/technology-2462499-2076039.png'
              alt='A'
            />
          </ListItemIcon>
          <ListItemText primary='Technology' />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <Avatar
              src='https://cdn.iconscout.com/icon/premium/png-256-thumb/technology-2462499-2076039.png'
              alt='A'
            />
          </ListItemIcon>
          <ListItemText primary='Technology' />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <Avatar
              src='https://cdn.iconscout.com/icon/premium/png-256-thumb/technology-2462499-2076039.png'
              alt='A'
            />
          </ListItemIcon>
          <ListItemText primary='Technology' />
        </ListItemButton>
        <Button sx={{ margin: '2rem' }} variant='contained'>
          Explore more groups
        </Button>
      </List>
    </Box>
  );
}

export default HomepageLeftSection;
