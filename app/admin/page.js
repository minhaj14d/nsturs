import { createClient } from '@/lib/supabase';
import { redirect } from 'next/navigation';
import CreatePostForm from '@/components/forms/CreatePostForm';
import { revalidatePath } from 'next/cache';

export default async function AdminPage() {
  const supabase = createClient();

  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect('/login');
  }

  async function addPost(formData) {
    'use server';
    const { title, slug, content } = formData;

    const supabase = createClient();

    const { data, error } = await supabase
      .from('posts')
      .insert([
        { 
          title, 
          slug, 
          content,
          author_id: user.id, 
          author_name: user.email // Or you could fetch a profile name
        }
      ])
      .select();

    if (error) {
      console.error('Error inserting post:', error);
      // Handle error, maybe return a message
      return;
    }

    revalidatePath('/blog');
    revalidatePath(`/blog/${slug}`);
    
    // Redirect to the new post
    if (data && data[0]) {
      redirect(`/blog/${data[0].slug}`);
    } else {
      redirect('/blog');
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          <p className="mt-1 text-gray-600">Welcome, {user.email}!</p>
        </div>
        {/* We can add a sign-out button here later */}
      </div>
      
      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-4">Create a New Post</h2>
        <CreatePostForm onSave={addPost} />
      </div>
    </div>
  );
} 