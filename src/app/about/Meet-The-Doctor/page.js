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
        contents="With an unwavering commitment to excellence, Dr. David Kahng brings remarkable professional expertise to each procedure he undertakes. He has dedicated his life and career to assisting patients in attaining a more aesthetically pleasing appearance through the use of cosmetic and reconstructive plastic surgery, as well as a variety of medical spa treatments. As a renowned plastic surgeon recognized for his proficiency in various Asian plastic surgery procedures, Dr. Kahng consistently delivers the utmost artistry, ensuring a highly aesthetic and naturally appealing outcome."
      />
      <AboutSecondBanner
        mainDesc="Dr. David Khang"
        subDesc="Dr. David Kahng, a board-certified and highly trained plastic surgeon recognized in greater Los Angeles, brings his expertise to Las Vegas, ensuring exceptional cosmetic and reconstructive services with accreditation from the American Board of Plastic Surgery. / Dr. Kahng's practice is enriched by his international background, having lived in various countries including Italy, Malaysia, Indonesia, and Africa before settling in the United States. This diverse experience not only shapes his distinctive approach in treating a varied patient population but also enables him to cultivate trust, integrity, and strong rapport with the diverse individuals he serves."
      />
      <ExpertBanner />
      <PhilosophyBanner />
    </div>
  );
}
