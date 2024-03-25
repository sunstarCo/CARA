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
    region: 'LAS VEGAS (NV)',
    address: 'Spring Mountain/5808 Rd. #10/Las Vegas NV 89146',
    explain:
      'Indulgein the vibrant energy of Las Vegas as you undergo transformative plasticsurgery procedures. Our Las Vegas location combines the excitement of the citywith the expertise of our skilled team.',
  },
  {
    id: 'LosAngeles',
    region: 'LOS ANGELES (CA)',
    address: 'Serrano Medical Building/4220 W. 3rd St. #102/Los Angeles, CA 90020',
    explain:
      'Immerseyourself in the glamor of the City of Angels while undergoing top-notch plasticsurgery services. Our Los Angeles location at the Serrano Medical Building isequipped to cater to all your aesthetic needs.',
  },
  {
    id: 'OrangeCounty',
    region: 'ORANGE COUNTY (CA)',
    address: 'Village Circle on the beach/5161 Beach Blvd. #A/Buena Park, CA 90621',
    explain:
      'Escape to the picturesque surroundings ofOrange County while rejuvenating your appearance at our Buena Park location.Discover the intersection of cutting-edge treatments and beachside tranquility.',
  },
  {
    id: 'SanGabriel',
    region: 'SAN GABRIEL (CA)',
    address: 'San Gabriel Valley/1320 E Las Tunas Dr. #201/San Gabriel, CA 91776',
    explain:
      'Nestled in the beautiful San Gabriel Valley,our facility provides a serene environment for your cosmetic procedures.Experience the perfect blend of natural beauty and personalized care.',
  },
];
