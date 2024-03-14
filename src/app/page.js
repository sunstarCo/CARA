import Doctor from '@/components/main/Doctor';
import Greetings from '@/components/main/Greetings';
import MainBanner from '@/components/main/MainBanner';

export default function Home() {
  return (
    <main className="flex flex-col">
      <MainBanner />
      <Greetings />
      <Doctor />
    </main>
  );
}
