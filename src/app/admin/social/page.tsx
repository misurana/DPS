import { createClient } from '@/utils/supabase/server'
import { syncFacebookPosts, togglePostVisibility, deletePost } from './actions'
import { Facebook, RefreshCw, Eye, EyeOff, Trash2, ExternalLink } from 'lucide-react'

export default async function SocialPage() {
  const supabase = await createClient()
  
  // Fetch existing posts
  const { data: posts } = await supabase
    .from('facebook_posts')
    .select('*')
    .order('posted_at', { ascending: false })

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="flex justify-between items-center bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <Facebook className="w-6 h-6 text-blue-600" />
            Facebook Posts
          </h1>
          <p className="text-gray-500 mt-1 text-sm">
            Manage posts synced from the official Facebook page.
          </p>
        </div>
        
        <form action={syncFacebookPosts}>
          <button 
            type="submit" 
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
          >
            <RefreshCw className="w-4 h-4" />
            Sync Latest Posts
          </button>
        </form>
      </div>

      {!posts || posts.length === 0 ? (
        <div className="bg-white p-12 text-center rounded-xl border border-gray-100 shadow-sm">
          <Facebook className="w-12 h-12 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900">No posts synced yet</h3>
          <p className="text-gray-500 mt-2 mb-6">Click the sync button above to fetch the latest posts from Facebook.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div key={post.id} className={`bg-white rounded-xl shadow-sm border overflow-hidden transition-all ${post.is_visible ? 'border-gray-200' : 'border-gray-200 opacity-60 bg-gray-50'}`}>
              {post.image_url && (
                <div className="aspect-video w-full overflow-hidden bg-gray-100 relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={post.image_url} alt="Post image" className="w-full h-full object-cover" />
                  {!post.is_visible && (
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <span className="bg-gray-900 text-white text-xs font-bold px-2 py-1 rounded">HIDDEN</span>
                    </div>
                  )}
                </div>
              )}
              
              <div className="p-5">
                <p className="text-gray-800 text-sm mb-4 line-clamp-4">{post.content}</p>
                <div className="text-xs text-gray-400 mb-4">
                  {new Date(post.posted_at).toLocaleDateString()}
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <a href={post.post_url} target="_blank" rel="noreferrer" className="text-blue-600 hover:text-blue-800 text-sm flex items-center gap-1 font-medium">
                    View on FB <ExternalLink className="w-3 h-3" />
                  </a>
                  
                  <div className="flex gap-2">
                    <form action={togglePostVisibility.bind(null, post.id, post.is_visible)}>
                      <button 
                        type="submit" 
                        title={post.is_visible ? "Hide from website" : "Show on website"}
                        className={`p-2 rounded-lg transition-colors ${post.is_visible ? 'text-gray-600 hover:bg-gray-100' : 'text-blue-600 hover:bg-blue-50'}`}
                      >
                        {post.is_visible ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </form>
                    
                    <form action={deletePost.bind(null, post.id)}>
                      <button 
                        type="submit" 
                        title="Delete post"
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
