import React, { useEffect } from 'react';
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
        <InfoContainer data-testid="apod-video-info__container">
          It seems there is an amazing video today. Please watch it on <br />
          <a href={pod.url}>{pod.url}</a>
        </InfoContainer>
      );
    }
    return <PodImage data-testid="apod-image__container" src={pod.url} />;
  };
  return (
    <PodContainer data-testid="apod-container">
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
