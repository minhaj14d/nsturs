import Link from 'next/link';
import { createClient } from '@/lib/supabase';

const BlogPage = async () => {
  const supabase = createClient();
  const { data: posts, error } = await supabase
    .from('posts')
    .select('*');

  if (error) {
    console.error('Error fetching posts:', error);
    // Optionally, render an error message
  }

  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            Our Blog
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Insights, guides, and updates from the NSTURS community.
          </p>
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <div className="space-y-12">
            {posts && posts.map((post) => (
              <div key={post.slug} className="bg-white p-8 rounded-lg shadow-md">
                {post.cover_image && <img src={post.cover_image} alt={post.title} className="w-full h-64 object-cover rounded-lg mb-6" />}
                <p className="text-sm text-gray-500 mb-2">
                  {new Date(post.created_at).toLocaleDateString()} • By {post.author_name || 'NSTURS Team'}
                </p>
                <Link href={`/blog/${post.slug}`}>
                  <span className="text-3xl font-bold text-brand-primary hover:text-brand-secondary cursor-pointer">
                    {post.title}
                  </span>
                </Link>
                <p className="mt-4 text-lg text-gray-600">
                  {post.content.substring(0, 150)}{post.content.length > 150 && '...'}
                </p>
                <Link href={`/blog/${post.slug}`}>
                  <span className="inline-block mt-6 font-semibold text-brand-primary hover:underline">
                    Read More &rarr;
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage; 