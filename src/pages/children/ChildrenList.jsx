/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
/* eslint-disable array-callback-return */
import React, { useEffect } from 'react';
import { CircularProgress, Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import PageContainer from '../../components/container/PageContainer';
import { fetchNgoList } from '../../redux/actions/ngoAction';
import ChildrenTable from './ChildrenTable';

const ChildrenList = () => {
  const dispatch = useDispatch();

  const ngoAll = useSelector((state) => state.ngoAll);
  const { ngoList, loading, success } = ngoAll;

  useEffect(() => {
    dispatch(fetchNgoList());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <Grid sx={{ textAlign: 'center' }}>
          <CircularProgress />
        </Grid>
      ) : (
        success && (
          <PageContainer title="Login" description="this is Login page">
            <Grid>
              <ChildrenTable ngoList={ngoList} />
            </Grid>
          </PageContainer>
        )
      )}
    </>
  );
};

export default ChildrenList;
