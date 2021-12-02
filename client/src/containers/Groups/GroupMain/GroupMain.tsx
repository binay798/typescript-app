import { useEffect, useState } from 'react';
import { Typography, Box, CircularProgress } from '@mui/material';
import GroupCard from '../../../components/GroupCard/GroupCard';
import { useDispatch, useSelector } from 'react-redux';
import axios from '../../../axiosInstance';
import * as Actions from '../../../store/actions/index';
import { RootState } from '../../../store/Store';
// import { Group } from '../../store/reducers/group.reducer';
// import { baseUrl } from '../../axiosInstance';
const groupContainer = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(30rem, 1fr))',
  gap: '3rem',
};

function GroupMain(): JSX.Element {
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state.group);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    (async () => {
      if (state.groups.length !== 0) return;
      setLoading(true);
      try {
        let res = await axios.get('/api/v1/groups');
        dispatch({
          type: Actions.GroupAction.GET_GROUPS,
          payload: res.data,
        });
      } catch (err) {
        console.log(err);
      }
      setLoading(false);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);
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
        {loading && <CircularProgress />}
        {state.groups.map((el, id) => {
          return <GroupCard key={id} data={el} />;
        })}
      </Box>
    </Box>
  );
}

export default GroupMain;
