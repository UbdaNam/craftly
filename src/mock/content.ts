import { Content } from '@/types';

export const mockContent: Content[] = [
  {
    id: '1',
    title: 'New feature launch teaser',
    platforms: ['linkedin', 'x'],
    status: 'review',
    priority: 'high',
    assignee: { id: 'u1', name: 'Abdu' },
    dueDate: '2026-02-01',
    createdAt: '2026-01-10',
  },
  {
    id: '2',
    title: 'TikTok product demo',
    platforms: ['tiktok'],
    status: 'draft',
    priority: 'medium',
    assignee: { id: 'u2', name: 'Sara' },
    createdAt: '2026-01-12',
  },
];
