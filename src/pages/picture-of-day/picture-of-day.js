import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getPod, selectPod } from '../../features/pod';

import { PodImage, PodContainer } from './picture-of-day.styled';
import { InfoContainer } from '../../components/container';

const Pod = () => {
  const dispatch = useDispatch();
  const pod = useSelector(selectPod);

  useEffect(() => {
    dispatch(getPod());
  }, [dispatch]);

  const getMedia = () => {
    if (pod.media_type === 'video') {
      return (
        <InfoContainer>
          It seems there is an amazing video today. Please watch it on <br />
          <a href={pod.url}>{pod.url}</a>
        </InfoContainer>
      );
    }
    return <PodImage src={pod.url} />;
  };
  return (
    <PodContainer>
      {pod && (
        <React.Fragment>
          <h1>{pod.title}</h1>
          {getMedia()}
          <p>
            <strong>Description</strong>
          </p>
          <p>{pod.explanation}</p>
          <p>
            <strong>Date:</strong> {pod.date}
          </p>
          <p>
            <strong>Copyright:</strong> {pod.copyright}
          </p>
        </React.Fragment>
      )}
    </PodContainer>
  );
};

export default Pod;
