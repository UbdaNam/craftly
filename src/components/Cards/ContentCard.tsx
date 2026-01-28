import { Content, ContentStatus, TwMainColor } from '@/types';
import Badge from '@/components/Badge/Badge';
import { PlatformIcon } from '../Icons/PlatformIcon';

interface ContentCardProps {
  content: Content;
}

const statusColors: Record<ContentStatus, TwMainColor> = {
  draft: 'gray',
  in_progress: 'yellow',
  review: 'blue',
  scheduled: 'indigo',
  published: 'green',
};

export default function ContentCard({ content }: ContentCardProps) {
  return (
    <div className="rounded-xl border border-border bg-card px-4 pt-3 pb-5 space-y-5 hover:bg-muted/40 transition">
      <div className="space-y-3">
        <div className="flex flex-col-reverse items-start gap-5">
          <h3 className="text-foreground font-medium">{content.title}</h3>
          <Badge
            name={content.status.replace('_', ' ')}
            color={statusColors[content.status]}
          />
        </div>
        {content.description && (
          <p className="text-sm text-muted-foreground line-clamp-2">
            {content.description}
          </p>
        )}
      </div>

      <div className="flex flex-wrap gap-2">
        {content.platforms.map((platform) => (
          <PlatformIcon platform={platform} />
        ))}
      </div>

      <div className="flex items-center justify-between text-xs text-muted-foreground">
        {content.assignee && <span>Assignee: {content.assignee.name}</span>}

        {content.dueDate && (
          <span>Due {new Date(content.dueDate).toLocaleDateString()}</span>
        )}
      </div>
    </div>
  );
}
