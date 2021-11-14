import { Typography, Box } from '@mui/material';
import GroupCard from '../../../components/GroupCard/GroupCard';

const groupContainer = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(30rem, 1fr))',
  gap: '3rem',
};

function GroupMain(): JSX.Element {
  return (
    <Box sx={{ padding: '2rem 8rem' }}>
      <Typography
        color='secondary.light'
        style={{ fontWeight: 600 }}
        variant='h5'
      >
        Suggested for you
      </Typography>
      <Typography
        color='secondary'
        style={{ marginBottom: '3rem' }}
        variant='body2'
      >
        Groups you might be interested in
      </Typography>

      <Box sx={groupContainer}>
        <GroupCard />
        <GroupCard />
        <GroupCard />
        <GroupCard />
        <GroupCard />
      </Box>
    </Box>
  );
}

export default GroupMain;
