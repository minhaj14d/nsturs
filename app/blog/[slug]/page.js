import { createClient } from '@/lib/supabase';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import BlogDetail from '@/components/blog/BlogDetail';

export default async function BlogPostPage({ params }) {
  const supabase = createClient();
  
  const { data: post, error } = await supabase
    .from('posts')
    .select()
    .eq('slug', params.slug)
    .single();

  if (error || !post) {
    notFound();
  }

  return (
    <div className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <BlogDetail post={post} />
            <div className="text-center mt-16">
                 <Link href="/blog">
                    <span className="inline-block mt-6 font-semibold text-brand-primary hover:underline">
                        &larr; Back to All Posts
                    </span>
                </Link>
            </div>
        </div>
    </div>
  );
} 