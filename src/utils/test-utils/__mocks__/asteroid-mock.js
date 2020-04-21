export const mockAsteroid = {
  element_count: 2,
  links: {},
  near_earth_objects: {
    '2020-04-19': [
      {
        links: {
          self:
            'http://www.neowsapp.com/rest/v1/neo/2088959?api_key=0D8NTQqesnNtKhURI8hLFTlMrWTwsDhRDd8cpf0n',
        },
        id: '2088959',
        neo_reference_id: '2088959',
        name: 'Asteroid1',
        nasa_jpl_url: 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=2088959',
        absolute_magnitude_h: 17.3,
        estimated_diameter: {
          kilometers: {
            estimated_diameter_min: 0.9216265485,
            estimated_diameter_max: 2.0608196123,
          },
          meters: {
            estimated_diameter_min: 921.6265485028,
            estimated_diameter_max: 2060.8196123208,
          },
          miles: {
            estimated_diameter_min: 0.5726720101,
            estimated_diameter_max: 1.2805335433,
          },
          feet: {
            estimated_diameter_min: 3023.70924539,
            estimated_diameter_max: 6761.2194168867,
          },
        },
        is_potentially_hazardous_asteroid: false,
        close_approach_data: [
          {
            close_approach_date: '2020-04-13',
            close_approach_date_full: '2020-Apr-13 22:11',
            epoch_date_close_approach: 1586815860000,
            relative_velocity: {
              kilometers_per_second: '28.7110061262',
              kilometers_per_hour: '103359.6220542199',
              miles_per_hour: '64223.6496036346',
            },
            miss_distance: {
              astronomical: '0.3482566087',
              lunar: '135.4718207843',
              kilometers: '52098446.874943469',
              miles: '32372473.7565351122',
            },
            orbiting_body: 'Earth',
          },
        ],
        is_sentry_object: false,
      },
      {
        links: {
          self:
            'http://www.neowsapp.com/rest/v1/neo/3587874?api_key=0D8NTQqesnNtKhURI8hLFTlMrWTwsDhRDd8cpf0n',
        },
        id: '3587874',
        neo_reference_id: '3587874',
        name: 'Basteroid2',
        nasa_jpl_url: 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3587874',
        absolute_magnitude_h: 22.8,
        estimated_diameter: {
          kilometers: {
            estimated_diameter_min: 0.0732073989,
            estimated_diameter_max: 0.1636967205,
          },
          meters: {
            estimated_diameter_min: 73.2073989347,
            estimated_diameter_max: 163.696720474,
          },
          miles: {
            estimated_diameter_min: 0.0454889547,
            estimated_diameter_max: 0.1017163949,
          },
          feet: {
            estimated_diameter_min: 240.181762721,
            estimated_diameter_max: 537.0627483999,
          },
        },
        is_potentially_hazardous_asteroid: false,
        close_approach_data: [
          {
            close_approach_date: '2020-04-13',
            close_approach_date_full: '2020-Apr-13 14:42',
            epoch_date_close_approach: 1586788920000,
            relative_velocity: {
              kilometers_per_second: '5.2082864404',
              kilometers_per_hour: '18749.8311852865',
              miles_per_hour: '11650.4159384354',
            },
            miss_distance: {
              astronomical: '0.2079169483',
              lunar: '80.8796928887',
              kilometers: '31103932.602580121',
              miles: '19327087.5102868298',
            },
            orbiting_body: 'Earth',
          },
        ],
        is_sentry_object: false,
      },
    ],
  },
};

export const mockFormattedAsteroids = [
  {
    additional_info: 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=2088959',
    closer_on: '2020-Apr-13 22:11',
    id: '2088959',
    is_hazardous: false,
    miss_distance: '52098446.874943469',
    name: 'Asteroid1',
    orbiting_body: 'Earth',
    velocity: '28.7110061262',
  },
  {
    additional_info: 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3587874',
    closer_on: '2020-Apr-13 14:42',
    id: '3587874',
    is_hazardous: false,
    miss_distance: '31103932.602580121',
    name: 'Basteroid2',
    orbiting_body: 'Earth',
    velocity: '5.2082864404',
  },
];

export const mockFormattedCustomDistanceAsteroids = [
  {
    additional_info: 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=2088959',
    closer_on: '2020-Apr-13 22:11',
    id: '2088959',
    is_hazardous: false,
    miss_distance: '52098446.874943469',
    name: 'Asteroid1',
    orbiting_body: 'Earth',
    velocity: '28.7110061262',
  },
  {
    additional_info: 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3587874',
    closer_on: '2020-Apr-13 14:42',
    id: '3587874',
    is_hazardous: false,
    miss_distance: '103932.602580121',
    name: 'Basteroid2',
    orbiting_body: 'Earth',
    velocity: '5.2082864404',
  },
];
