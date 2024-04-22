import React from 'react';
import Table from '../components/Table';

const PeoplePage = () => {
  return (
    <div>
      <Table
        rows={[
          {
            name: 'Luke Skywalker',
            birthYear: '19BBY',
            gender: 'male',
            planetName: 'Tatooine',
            fastestVehicleDriven: 'X-wing',
            films: [
              {
                name: 'A New Hope',
                releaseDate: '1977-05-25',
              },
              {
                name: 'The Empire Strikes Back',
                releaseDate: '1980-05-17',
              },
              {
                name: 'Return of the Jedi',
                releaseDate: '1983-05-25',
              },
              {
                name: 'Revenge of the Sith',
                releaseDate: '2005-05-19',
              },
            ],
          },
        ]}
        headers={[
          { label: 'Name', key: 'name' },
          { label: 'Birth Year', key: 'birthYear' },
          { label: 'Gender', key: 'gender' },
          { label: 'Home Planet', key: 'planetName' },
          { label: 'Fastest Vehicle', key: 'fastestVehicleDriven' },
          {
            label: 'Films',
            key: 'films',
            render: (person) => {
              const films = person.films;
              return films.map((film, index) => {
                const isNotLast = index !== films.length - 1;
                return (
                  <p
                    className="text-primary dark:text-primary-400 cursor-info "
                    title={'Release date: ' + film.releaseDate}
                  >
                    {film.name}
                    {isNotLast && ', '}
                  </p>
                );
              });
            },
          },
        ]}
      />
    </div>
  );
};

export default PeoplePage;
