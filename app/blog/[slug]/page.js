// This is a server component that fetches data based on the URL parameter.
async function getPostData(slug) {
  // In a real app, you'd fetch this from Firestore using the slug
  // For now, we return mock data.
  console.log(`Fetching post for slug: ${slug}`);
  return {
    title: 'Understanding Next.js Dynamic Routes',
    authorName: 'Admin',
    publishedDate: '2025-07-12',
    content: `This page is generated dynamically based on the 'slug' in the URL. The current slug is **${slug}**. You would use this value to query your database (like Firestore) and retrieve the specific blog post content.`
  };
}

export default async function BlogPostPage({ params }) {
  const post = await getPostData(params.slug);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <article className="prose lg:prose-xl">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">{post.title}</h1>
        <p className="text-gray-500">By {post.authorName} on {post.publishedDate}</p>
        <div className="mt-8">
          {/* You would use a library like 'marked' to render Markdown content here */}
          <p>{post.content}</p>
        </div>
      </article>
    </div>
  );
} 