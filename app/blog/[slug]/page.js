import { createClient } from '@/lib/supabase';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

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
            <article>
                <header className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">{post.title}</h1>
                    <p className="mt-4 text-lg text-gray-500">By {post.author_name} on {new Date(post.created_at).toLocaleDateString()}</p>
                </header>
                 {post.cover_image && <img src={post.cover_image} alt={post.title} className="w-full h-96 object-cover rounded-xl my-8" />}
                <div 
                    className="prose lg:prose-xl mx-auto"
                >
                    <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
                      {post.content}
                    </ReactMarkdown>
                </div>
            </article>

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