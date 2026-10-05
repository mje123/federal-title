import { notFound } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import { BlogEditor } from '../../BlogEditor';

export default async function EditPost({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const supabase = await createClient();

  const { data: post } = await supabase
    .from('blog_posts')
    .select('id, title, slug, excerpt, content, cover_image, status, published_at')
    .eq('id', id)
    .single();

  if (!post) notFound();

  return <BlogEditor initial={post} />;
}
