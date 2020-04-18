class Asteroids {
  /** @type {Array} */
  items;

  static getParsedAsteroidForDay(asteroids, asteroidModel) {
    return asteroids.map((asteroid) => asteroidModel.build(asteroid));
  }

  static build(asteroidsData, asteroidModel) {
    const asteroids = new Asteroids();
    const days = Object.keys(asteroidsData.near_earth_objects);
    asteroids.items = [];

    days.forEach((day) => {
      const parsedDayAsteroids = Asteroids.getParsedAsteroidForDay(
        asteroidsData.near_earth_objects[day],
        asteroidModel
      );
      asteroids.items = [...asteroids.items, ...parsedDayAsteroids];
    });

    return asteroids;
  }
}

export default Asteroids;
