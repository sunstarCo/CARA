import {Suspense} from 'react';

import Loading from './Loading';

import Doctor from '@/components/main/Doctor';
import Gallery from '@/components/main/Gallery';
import Greetings from '@/components/main/Greetings';
import IntroProcedure from '@/components/main/IntroProcedure';
import MainBanner from '@/components/main/MainBanner';
import PatientReview from '@/components/main/PatientReview';
import ProcedureSection from '@/components/main/ProcedureSection';
import SingleReview from '@/components/main/SingleReview';
import Spot from '@/components/main/spot/Spot';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Suspense fallback={<Loading />}>
        <MainBanner />
        <Greetings />
        <Doctor />
        <ProcedureSection section="Breast" />
        <SingleReview number={0} />
        <IntroProcedure />
        <ProcedureSection section="Face&Nose" />
        <SingleReview number={1} />
        <ProcedureSection section="Body" reverse />
        <Spot />
        <PatientReview />
        <Gallery />
      </Suspense>
    </div>
  );
}
