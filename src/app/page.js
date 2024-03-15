import Doctor from '@/components/main/Doctor';
import Greetings from '@/components/main/Greetings';
import MainBanner from '@/components/main/MainBanner';
import ProcedureSection from '@/components/main/ProcedureSection';

export default function Home() {
  return (
    <main className="flex flex-col">
      <MainBanner />
      <Greetings />
      <Doctor />
      <ProcedureSection section="Breast" />
      <ProcedureSection section="Face&Nose" reverse />
      <ProcedureSection section="Body" />
    </main>
  );
}
