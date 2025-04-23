import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';

export default function AcmeLogo() {
  return (
    <div className={`${lusitana.className} flex flex-row items-center space-x-2 text-white`}>
       <div className="w-10 h-10 relative rounded-full overflow-hidden">
                  <Image
                    src="/dvd.png"
                    alt="DVD Logo"
                    fill
                    className="object-cover"
                  />
                </div>
      <span className="text-[36px] font-bold tracking-wide">CND</span>
    </div>
  );
}
