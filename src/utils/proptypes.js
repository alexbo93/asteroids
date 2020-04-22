import { PropTypes } from 'prop-types';

export const AsteroidType = PropTypes.shape({
  name: PropTypes.string,
  id: PropTypes.string,
  miss_distance: PropTypes.string,
  velocity: PropTypes.string,
  orbiting_body: PropTypes.string,
  closer_on: PropTypes.string,
  is_hazardous: PropTypes.bool,
  additional_info: PropTypes.string,
});
