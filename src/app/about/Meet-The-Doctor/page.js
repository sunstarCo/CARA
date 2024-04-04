import React from 'react';

import AboutSecondBanner from '@/components/about/AboutSecondBanner';
import ExpertBanner from '@/components/about/ExpertBanner';
import PhilosophyBanner from '@/components/about/PhilosophyBanner';
import CommonTopBanner from '@/components/common/banner/CommonTopBanner';

export default function Page() {
  return (
    <div>
      <CommonTopBanner
        url="About"
        title="Meet DR. David Kahng"
        contents="With an unwaveringcommitment to excellence, Dr. David Kahng brings remarkable professionalexpertise to each procedure he undertakes. His life's dedication revolvesaround assisting patients in attaining a more aesthetically pleasing appearancethrough the realms of cosmetic and reconstructive plastic surgery, as well as avariety of medical spa treatments. As a proficient plastic surgeon recognizedfor his proficiency in various Asian plastic surgery procedures, Dr. Kahngconsistently delivers the utmost artistry, ensuring a highly aesthetic andnaturally appealing outcome."
      />
      <AboutSecondBanner
        mainDesc="Dr. David Khang"
        subDesc="Dr. David Kahng, aboard-certified and highly trained Korean plastic surgeon recognized in LosAngeles, brings his expertise to Las Vegas, ensuring exceptional cosmetic andreconstructive services with the accreditation from the American Board of Plastic Surgery. 
        Dr. Kahng's practiceis enriched by his international background, having lived in various countriesincluding Italy, Malaysia, Indonesia, and Africa before settling in the UnitedStates. This diverse experience not only shapes his distinctive approach intreating a varied patient population but also cultivates trust, integrity, andstrong rapport with the diverse individuals he serves."
      />
      <ExpertBanner />
      <PhilosophyBanner />
    </div>
  );
}
