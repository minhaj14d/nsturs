import Link from 'next/link';

export default function BlogCard({ post }) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      {post.cover_image && (
        <img src={post.cover_image} alt={post.title} className="w-full h-64 object-cover rounded-lg mb-6" />
      )}
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
  );
} 