-- Enable RLS on all tables
-- But first, create the tables

CREATE TABLE IF NOT EXISTS school_profile (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  school_name TEXT NOT NULL,
  location TEXT NOT NULL,
  tagline TEXT,
  about TEXT,
  established_year INTEGER,
  logo_url TEXT,
  cover_image_url TEXT,
  email TEXT,
  phone TEXT,
  website_url TEXT,
  address TEXT,
  followers_count INTEGER DEFAULT 0,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS staff_members (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  role TEXT NOT NULL, -- Principal, Teacher, Admin, etc.
  designation TEXT,
  department TEXT,
  bio TEXT,
  profile_image TEXT,
  email TEXT,
  phone TEXT,
  "order" INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  social_links JSONB, -- {facebook: "", instagram: "", linkedin: ""}
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS announcements (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  type TEXT DEFAULT 'general', -- general, exam, event, holiday, result
  priority TEXT DEFAULT 'medium', -- low, medium, high, urgent
  image_url TEXT,
  video_url TEXT,
  publish_date DATE DEFAULT CURRENT_DATE,
  expiry_date DATE,
  is_published BOOLEAN DEFAULT true,
  author_id UUID REFERENCES staff_members(id),
  views INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS birthday_posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_name TEXT NOT NULL,
  class TEXT,
  date_of_birth DATE NOT NULL,
  message TEXT,
  celebration_date DATE DEFAULT CURRENT_DATE,
  song_url TEXT,
  image_url TEXT,
  created_by UUID REFERENCES staff_members(id),
  is_published BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS gallery (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT,
  media_url TEXT NOT NULL,
  thumbnail_url TEXT,
  media_type TEXT DEFAULT 'image', -- image, video
  event_date DATE,
  category TEXT, -- event, sports, academic, cultural
  uploaded_by UUID REFERENCES staff_members(id),
  is_published BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS admins (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  role TEXT DEFAULT 'editor', -- admin, editor, viewer
  last_login TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS subscribers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  name TEXT,
  subscribed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS contact_inquiries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  subject TEXT,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'pending', -- pending, read, replied
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS on all tables
ALTER TABLE school_profile ENABLE ROW LEVEL SECURITY;
ALTER TABLE staff_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE announcements ENABLE ROW LEVEL SECURITY;
ALTER TABLE birthday_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE gallery ENABLE ROW LEVEL SECURITY;
ALTER TABLE subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_inquiries ENABLE ROW LEVEL SECURITY;

-- Policy: Public can read only published content
CREATE POLICY "Public Read Access Announcements" ON announcements
  FOR SELECT USING (is_published = true);
  
CREATE POLICY "Public Read Access Gallery" ON gallery
  FOR SELECT USING (is_published = true);

CREATE POLICY "Public Read Access Birthday Posts" ON birthday_posts
  FOR SELECT USING (is_published = true);
  
CREATE POLICY "Public Read Access School Profile" ON school_profile
  FOR SELECT USING (true);
  
CREATE POLICY "Public Read Access Staff Members" ON staff_members
  FOR SELECT USING (is_active = true);

-- Policy: Only authenticated users (admins) can write/update
-- Assuming auth.uid() corresponds to a user in auth.users
CREATE POLICY "Admin Full Access Announcements" ON announcements
  FOR ALL USING (auth.role() = 'authenticated');
  
CREATE POLICY "Admin Full Access Gallery" ON gallery
  FOR ALL USING (auth.role() = 'authenticated');
  
CREATE POLICY "Admin Full Access Birthday Posts" ON birthday_posts
  FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Admin Full Access School Profile" ON school_profile
  FOR ALL USING (auth.role() = 'authenticated');
  
CREATE POLICY "Admin Full Access Staff Members" ON staff_members
  FOR ALL USING (auth.role() = 'authenticated');
  
CREATE POLICY "Admin Full Access Subscribers" ON subscribers
  FOR ALL USING (auth.role() = 'authenticated');
  
CREATE POLICY "Admin Full Access Contact Inquiries" ON contact_inquiries
  FOR ALL USING (auth.role() = 'authenticated');
  
-- Public can insert contact inquiries
CREATE POLICY "Public Insert Contact Inquiries" ON contact_inquiries
  FOR INSERT WITH CHECK (true);
  
-- Public can insert subscribers
CREATE POLICY "Public Insert Subscribers" ON subscribers
  FOR INSERT WITH CHECK (true);
