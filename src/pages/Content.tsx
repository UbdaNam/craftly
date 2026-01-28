import Button from '@/components/Button/Button';
import ContentCard from '@/components/Cards/ContentCard';
import { Heading } from '@/components/Heading/Heading';
import { mockContent } from '@/mock/content';
import { ListFilter, Plus } from 'lucide-react';

const Content = () => {
  return (
    <div className="flex flex-col divide-y divide-border">
      <div className="flex items-center justify-between px-8 py-2">
        <Heading>Content</Heading>
        <Button className="space-x-1.5 border-stone-300">
          <Plus className="size-4" /> <span>New content</span>
        </Button>
      </div>
      <div className="px-8 py-2">
        <div className="flex items-center space-x-1.5 text-foreground text-sm">
          <ListFilter className="size-4" /> <span>Filter</span>
        </div>
      </div>
      <div className="px-4 py-6 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mx-auto">
        {mockContent.map((content) => (
          <ContentCard key={content.id} content={content} />
        ))}
      </div>
    </div>
  );
};

export default Content;
