import Greetings from '@/components/main/Greetings';
import MainBanner from '@/components/main/MainBanner';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <MainBanner />
      <Greetings />
    </main>
  );
}
