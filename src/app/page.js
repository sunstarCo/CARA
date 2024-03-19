import Doctor from '@/components/main/Doctor';
import Gallery from '@/components/main/Gallery';
import Greetings from '@/components/main/Greetings';
import IntroProcedure from '@/components/main/IntroProcedure';
import MainBanner from '@/components/main/MainBanner';
import ProcedureSection from '@/components/main/ProcedureSection';
import SingleReview from '@/components/main/SingleReview';

export default function Home() {
  return (
    <main className="flex flex-col">
      <MainBanner />
      <Greetings />
      <Doctor />
      <ProcedureSection section="Breast" />
      <SingleReview number={0} />
      <IntroProcedure />
      <ProcedureSection section="Face&Nose" reverse />
      <SingleReview number={1} />
      <ProcedureSection section="Body" />
      {/* <PatientReview /> */}
      <Gallery />
    </main>
  );
}
