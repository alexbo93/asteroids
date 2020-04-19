import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getPod, selectPod } from '../../features/pod';
import { MainContainer } from '../../components/container';

import { PodImage } from './picture-of-day.styled';

const Pod = () => {
  const dispatch = useDispatch();
  const pod = useSelector(selectPod);

  useEffect(() => {
    dispatch(getPod());
  }, [dispatch]);

  const getMedia = () => {
    if (pod.media_type === 'video') {
      return (
        <video width="500">
          <source src={pod.url} type="video/mp4" />
        </video>
      );
    }
    return <PodImage src={pod.url} />;
  };
  return (
    <MainContainer>
      {pod && (
        <React.Fragment>
          <h1>{pod.title}</h1>
          {getMedia()}
          <p>{pod.explanation}</p>
          <p>{pod.date}</p>
          <p>{pod.copyright}</p>
        </React.Fragment>
      )}
    </MainContainer>
  );
};

export default Pod;
