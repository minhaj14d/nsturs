import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

export default function BlogDetail({ post }) {
  if (!post) return null;
  return (
    <article>
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">{post.title}</h1>
        <p className="mt-4 text-lg text-gray-500">By {post.author_name} on {new Date(post.created_at).toLocaleDateString()}</p>
      </header>
      {post.cover_image && <img src={post.cover_image} alt={post.title} className="w-full h-96 object-cover rounded-xl my-8" />}
      <div className="prose lg:prose-xl mx-auto">
        <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
          {post.content}
        </ReactMarkdown>
      </div>
    </article>
  );
} 