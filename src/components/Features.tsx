import { useState, type FC } from 'react';
import { CircleX } from 'lucide-react';
import { UvxytdlpPanel } from '@/components/UvxytdlpPanel';
import { OcodoFoundryPanel } from '@/components/OcodoFoundryPanel';

interface FeaturesProps {
  src: string;
  alt?: string;
}

export const featureCard = `
  pointer-events-auto
  flex h-1/3 w-1
  items-center justify-center
  overflow-hidden
  rounded-sm
  border border-white/20
  bg-white/10
  text-7xl font-bold text-white
  shadow-2xl
  backdrop-blur-sm
  opacity-0
  origin-bottom
  animate-[feature-unfold_500ms_ease-out_forwards]
`;

export const closeButton = `
  fixed right-6 top-6 z-60
  cursor-pointer
  text-white
  drop-shadow-lg
  transition-opacity
  hover:opacity-70
`;

export const Features: FC<FeaturesProps> = ({
  src,
  alt = '',
}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="relative z-10 cursor-pointer"
        onMouseEnter={() => setOpen(true)}
        onTouchStart={() => setOpen(true)}
      >
        <img src={src} alt={alt} />
      </div>

      {open && (
        <>

          <div className="pointer-events-none fixed inset-0 z-50 flex flex-col items-center justify-center gap-6 p-6">
            <div className={`${featureCard} origin-bottom`}>
              <OcodoFoundryPanel />
            </div>

            <div className={`${featureCard} origin-top`}>
              <UvxytdlpPanel />
            </div>
          </div>


          <button
            type="button"
            aria-label="Close cards"
            onClick={() => setOpen(false)}
            className={closeButton}
          >
            <CircleX
              size={40}
              strokeWidth={0.5}
            />
          </button>
        </>
      )}
    </>
  );
};
