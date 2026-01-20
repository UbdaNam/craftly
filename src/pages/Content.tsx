import Button from '@/components/Button/Button';
import { Heading } from '@/components/Heading/Heading';
import { ListFilter, Plus } from 'lucide-react';

const Content = () => {
  return (
    <div className="divide-y divide-border">
      <div className="flex items-center justify-between px-8 py-2">
        <Heading>Content</Heading>
        <Button className="space-x-1.5">
          <Plus className="size-4" /> <span>New content</span>
        </Button>
      </div>
      <div className="px-8 py-2">
        <div className="flex items-center space-x-1.5 text-stone-800 text-sm">
          <ListFilter className="size-4" /> <span>Filter</span>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Content;
