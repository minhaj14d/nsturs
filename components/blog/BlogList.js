import BlogCard from './BlogCard';

export default function BlogList({ posts }) {
  if (!posts || posts.length === 0) {
    return <div className="text-center text-gray-500">No blog posts found.</div>;
  }
  return (
    <div className="space-y-12">
      {posts.map((post) => (
        <BlogCard key={post.slug} post={post} />
      ))}
    </div>
  );
} 