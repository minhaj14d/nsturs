import BlogList from '@/components/blog/BlogList';
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
          <BlogList posts={posts} />
        </div>
      </div>
    </div>
  );
};

export default BlogPage; 