import React from 'react';

import LocationCard from './LocationCard';

export default function LocationSection() {
  return (
    <div>
      {locations.map(location => {
        return <LocationCard key={location.id} locationInfo={location} />;
      })}
    </div>
  );
}

const locations = [
  {
    id: 'LasVegas',
    region: 'Las Vegas (NV)',
    address: '5808 Spring Mountain Rd #106, Las Vegas, NV 89146',
    explain:
      'Indulge in the vibrant energy of Las Vegas as you receive transformative plastic surgery procedures. Our Las Vegas location combines the excitement of the city with the expertise of our skilled team.',
  },
  {
    id: 'LosAngeles',
    region: 'Los Angeles (CA)',
    address: 'Serrano Medical Building, 4220 W. 3rd St. #102, Los Angeles, CA 90020',
    explain:
      'Immerse yourself in the glamor of the City of Angels while receiving top-notch plastic surgery services. Our Los Angeles location at the Serrano Medical Building is equipped to cater to all your aesthetic needs.',
  },
  {
    id: 'OrangeCounty',
    region: 'Buena Park - Orange County (CA)',
    address: 'Village Circle on the Beach, 5161 Beach Blvd. #A, Buena Park, CA 90621',
    explain:
      'Escape to the picturesque surroundings of Orange County while achieving your aesthetic ideals at our Buena Park location. Discover the intersection of innovative treatments and a tranquil atmosphere.',
  },
  {
    id: 'SanGabriel',
    region: 'San Gabriel Valley (CA)',
    address: '1320 E Las Tunas Dr. #201, San Gabriel, CA 91776',
    explain:
      'Nestled in the beautiful San Gabriel Valley, our facility provides a serene environment for your cosmetic procedures. Experience the perfect blend of natural beauty and personalized care.',
  },
];
