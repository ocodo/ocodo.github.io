import { Features } from '@/components/Features';
import { GradientBackground } from '@/components/GradientBackground';

export default function App() {
  return (
    <main className="relative h-screen w-screen overflow-hidden">
      <GradientBackground />

      <div className="absolute inset-0 flex items-center justify-center">
        <Features
          src="/ocodo.svg"
          alt="Ocodo"
        />
      </div>
    </main>
  );
}
