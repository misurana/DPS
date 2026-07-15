-- Create the facebook_posts table
CREATE TABLE IF NOT EXISTS facebook_posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  fb_post_id TEXT UNIQUE NOT NULL,
  content TEXT NOT NULL,
  image_url TEXT,
  post_url TEXT NOT NULL,
  posted_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  is_visible BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE facebook_posts ENABLE ROW LEVEL SECURITY;

-- Create policies for public access (read-only for visible posts)
CREATE POLICY "Public can view visible facebook posts" 
ON facebook_posts 
FOR SELECT 
USING (is_visible = true);

-- Create policies for authenticated users (admin can do everything)
CREATE POLICY "Admins can manage facebook posts" 
ON facebook_posts 
FOR ALL 
TO authenticated 
USING (true) 
WITH CHECK (true);
