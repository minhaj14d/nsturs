import { wings } from '@/data/wings';
import WingDetail from '@/components/wings/WingDetail';
import { notFound } from 'next/navigation';

export default function WingDetailPage({ params }) {
  // Generate a slug from the wing name for matching
  const slugify = (str) => str.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
  const wing = wings.find(w => slugify(w.name) === params.slug);

  if (!wing) notFound();

  return (
    <div className="py-16">
      <WingDetail wing={wing} />
    </div>
  );
} 