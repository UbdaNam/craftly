export type ContentStatus =
  | 'draft'
  | 'in_progress'
  | 'review'
  | 'scheduled'
  | 'published';
export type ContentPriority = 'low' | 'medium' | 'high';
export type Platforms = 'tiktok' | 'instagram' | 'linkedin' | 'x';
export type TwMainColor =
  | 'pink'
  | 'green'
  | 'yellow'
  | 'red'
  | 'indigo'
  | 'blue'
  | 'purple'
  | 'gray';

export interface Content {
  id: string;
  title: string;
  description?: string;
  platforms: Platforms[];
  status: ContentStatus;
  priority: ContentPriority;
  assignee?: {
    id: string;
    name: string;
    avatarUrl?: string;
  };
  dueDate?: string;
  createdAt: string;
}
