import get from 'lodash.get';

class Asteroid {
  /** @type {string} */
  name;

  /** @type {string} */
  id;

  /** @type {string} */
  miss_distance;

  /** @type {string} */
  velocity;

  /** @type {string} */
  orbiting_body;

  /** @type {string} */
  closer_on;

  /** @type {boolean} */
  is_hazardous;

  /** @type {string} */
  additional_info;

  static buildMissDistance(asteroidData) {
    return get(
      asteroidData,
      'close_approach_data[0].miss_distance.kilometers',
      'No distance'
    );
  }

  static buildVelocity(asteroidData) {
    return get(
      asteroidData,
      'close_approach_data[0].relative_velocity.kilometers_per_second',
      'No velocity'
    );
  }

  static buildOrbitingBody(asteroidData) {
    return get(
      asteroidData,
      'close_approach_data[0].orbiting_body',
      'Not in orbit'
    );
  }

  static buildCloserDate(asteroidData) {
    return get(
      asteroidData,
      'close_approach_data[0].close_approach_date_full',
      'Unknown'
    );
  }

  static build(asteroidData) {
    const asteroid = new Asteroid();

    asteroid.name = asteroidData.name;
    asteroid.id = asteroidData.id;
    asteroid.miss_distance = Asteroid.buildMissDistance(asteroidData);
    asteroid.velocity = Asteroid.buildVelocity(asteroidData);
    asteroid.orbiting_body = Asteroid.buildOrbitingBody(asteroidData);
    asteroid.closer_on = Asteroid.buildCloserDate(asteroidData);
    asteroid.is_hazardous = asteroidData.is_potentially_hazardous_asteroid;
    asteroid.additional_info = asteroidData.nasa_jpl_url;

    return asteroid;
  }
}

export default Asteroid;
