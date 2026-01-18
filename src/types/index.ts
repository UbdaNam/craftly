export type ContentStatus = 'draft' | 'review' | 'scheduled' | 'published';
export type ContentPriority = 'low' | 'medium' | 'high';
export type Platform = 'tiktok' | 'instagram' | 'linkedin' | 'x';

export interface Content {
  id: string;
  title: string;
  platforms: Platform[];
  status: ContentStatus;
  priority: ContentPriority;
  assignee: {
    id: string;
    name: string;
    avatarUrl?: string;
  };
  dueDate?: string;
  createdAt: string;
}
