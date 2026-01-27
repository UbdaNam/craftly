import TikTokIcon from '@/components/Icons/TikTokIcon';
import InstagramIcon from '@/components/Icons/InstagramIcon';
import XIcon from '@/components/Icons/XIcon';
import LinkedInIcon from '@/components/Icons/LinkedInIcon';
import { Platforms } from '@/types';
import { cn } from '@/lib/utils';

const platformIcons = {
  tiktok: TikTokIcon,
  instagram: InstagramIcon,
  linkedin: LinkedInIcon,
  x: XIcon,
};

export function PlatformIcon({
  className,
  platform,
}: {
  className?: string;
  platform: Platforms;
}) {
  const Icon = platformIcons[platform];
  return <Icon className={cn('size-4 text-muted-foreground', className)} />;
}
