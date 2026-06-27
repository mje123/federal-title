import { createClient } from '@/lib/supabase/server';
import Link from 'next/link';
import { FileText, Globe, PenSquare, Settings, TrendingUp, Clock, CheckCircle2, AlertCircle, ExternalLink, MapPin, Users, Home, DollarSign, Shield, BookOpen, Phone, Building2, Scale, Megaphone } from 'lucide-react';

export default async function PortalDashboard() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  const [
    { count: totalPosts },
    { count: publishedPosts },
    { count: draftPosts },
    { data: recentPosts },
  ] = await Promise.all([
    supabase.from('blog_posts').select('*', { count: 'exact', head: true }),
    supabase.from('blog_posts').select('*', { count: 'exact', head: true }).eq('status', 'published'),
    supabase.from('blog_posts').select('*', { count: 'exact', head: true }).eq('status', 'draft'),
    supabase.from('blog_posts').select('id, title, slug, status, published_at, created_at').order('created_at', { ascending: false }).limit(5),
  ]);

  const displayName = user?.email?.split('@')[0] ?? 'there';
  const now = new Date();
  const dateStr = now.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });

  const siteLinks = [
    {
      category: 'Portal Management',
      icon: <Settings className="h-4 w-4" />,
      color: 'bg-[var(--color-primary-100)] text-[var(--color-primary-700)]',
      links: [
        { label: 'Write New Blog Post', href: '/portal/blog/new', internal: true },
        { label: 'Manage All Posts', href: '/portal/blog', internal: true },
        { label: 'Announcement Banner', href: '/portal/settings', internal: true },
        { label: 'Office Hours', href: '/portal/settings', internal: true },
      ],
    },
    {
      category: 'Consumer Pages',
      icon: <Home className="h-4 w-4" />,
      color: 'bg-blue-100 text-blue-700',
      links: [
        { label: 'Homepage', href: '/', internal: true },
        { label: 'Homebuyers', href: '/homebuyers', internal: true },
        { label: 'Title Fees', href: '/homebuying/fees', internal: true },
        { label: 'Title Insurance', href: '/homebuying/title-insurance', internal: true },
        { label: 'Earnest Money', href: '/homebuyers/earnest-money', internal: true },
        { label: 'Sellers', href: '/sellers', internal: true },
        { label: 'Homeowners', href: '/homeowners', internal: true },
        { label: 'Remote Closing', href: '/remote-closing', internal: true },
      ],
    },
    {
      category: 'Agents & Lenders',
      icon: <Users className="h-4 w-4" />,
      color: 'bg-violet-100 text-violet-700',
      links: [
        { label: 'Agents', href: '/agents', internal: true },
        { label: 'REAL Benefits™', href: '/real-benefits', internal: true },
        { label: 'REALegal™', href: '/realegal', internal: true },
        { label: 'Marketing Downloads', href: '/agents/marketing-downloads', internal: true },
        { label: 'Lenders', href: '/lenders', internal: true },
        { label: 'Lender Best Practices', href: '/lenders/best-practices', internal: true },
        { label: 'Lender Licensing', href: '/lenders/licensing', internal: true },
      ],
    },
    {
      category: 'DC Tax & Resources',
      icon: <DollarSign className="h-4 w-4" />,
      color: 'bg-emerald-100 text-emerald-700',
      links: [
        { label: 'DC First-Time Homebuyer', href: '/dc-first-time-homebuyer', internal: true },
        { label: 'DC Tax Abatement', href: '/dc-tax-abatement', internal: true },
        { label: 'DC Homestead Deduction', href: '/dc-homestead-deduction', internal: true },
        { label: 'DC Reduced Recordation', href: '/dc-reduced-recordation', internal: true },
        { label: 'FIRPTA', href: '/firpta', internal: true },
        { label: 'Utility Providers', href: '/utility-providers', internal: true },
      ],
    },
    {
      category: 'Title Insurance',
      icon: <Shield className="h-4 w-4" />,
      color: 'bg-rose-100 text-rose-700',
      links: [
        { label: 'Title Insurance', href: '/title-insurance', internal: true },
        { label: "Owner's Protection", href: '/title-insurance/owners-protection', internal: true },
        { label: 'REALSafe™ (Wire Fraud)', href: '/realsafe', internal: true },
        { label: 'What Does a Title Company Do', href: '/what-does-a-title-company-do', internal: true },
        { label: 'REAL Credit', href: '/real-credit', internal: true },
      ],
    },
    {
      category: 'Guides & Resources',
      icon: <BookOpen className="h-4 w-4" />,
      color: 'bg-amber-100 text-amber-700',
      links: [
        { label: 'Blog', href: '/blog', internal: true },
        { label: 'Pre-Closing Guide', href: '/pre-closing-guide', internal: true },
        { label: 'Post-Closing Guide', href: '/post-closing-guide', internal: true },
        { label: 'Closing Docs', href: '/closing-docs', internal: true },
        { label: 'Closing Guides', href: '/closing-guides', internal: true },
        { label: 'Testimonials', href: '/testimonials', internal: true },
        { label: 'Press', href: '/press', internal: true },
      ],
    },
    {
      category: 'Company',
      icon: <Building2 className="h-4 w-4" />,
      color: 'bg-slate-100 text-slate-600',
      links: [
        { label: 'About Us', href: '/about-us', internal: true },
        { label: 'Team', href: '/about-us/team', internal: true },
        { label: 'Careers', href: '/about-us/careers', internal: true },
        { label: 'Contact', href: '/contact', internal: true },
        { label: 'Locations', href: '/locations', internal: true },
        { label: 'Privacy Policy', href: '/privacy', internal: true },
      ],
    },
    {
      category: 'External Tools',
      icon: <ExternalLink className="h-4 w-4" />,
      color: 'bg-cyan-100 text-cyan-700',
      links: [
        { label: 'Workflow System', href: 'https://tools.federaltitle.com', internal: false },
        { label: 'Order Services', href: 'https://tools.federaltitle.com/titleagents/orderservicen.aspx', internal: false },
        { label: 'Close It!™', href: 'https://closeit.federaltitle.com', internal: false },
        { label: 'Guaranteed Quote Tool', href: '/quick-quote', internal: true },
        { label: 'Google Business Profile', href: 'https://business.google.com', internal: false },
        { label: 'Vercel (Hosting)', href: 'https://vercel.com', internal: false },
      ],
    },
  ];

  return (
    <div className="max-w-6xl">

      {/* Header */}
      <div className="flex items-start justify-between mb-10">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-1">{dateStr}</p>
          <h1 className="text-3xl font-bold text-slate-900" style={{ fontFamily: 'var(--font-playfair), serif' }}>
            Welcome back, {displayName}.
          </h1>
          <p className="text-slate-500 mt-1 text-sm">{user?.email}</p>
        </div>
        <Link
          href="/portal/blog/new"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[var(--color-primary-800)] text-white text-sm font-semibold hover:bg-[var(--color-primary-900)] transition-colors shadow-sm"
        >
          <PenSquare className="h-4 w-4" />
          New Post
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="h-10 w-10 rounded-xl bg-[var(--color-primary-100)] flex items-center justify-center">
              <FileText className="h-5 w-5 text-[var(--color-primary-700)]" />
            </div>
            <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">Total</span>
          </div>
          <p className="text-4xl font-bold text-slate-900 mb-1">{totalPosts ?? 0}</p>
          <p className="text-sm text-slate-500">Blog posts</p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="h-10 w-10 rounded-xl bg-emerald-100 flex items-center justify-center">
              <Globe className="h-5 w-5 text-emerald-700" />
            </div>
            <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">Live</span>
          </div>
          <p className="text-4xl font-bold text-slate-900 mb-1">{publishedPosts ?? 0}</p>
          <p className="text-sm text-slate-500">Published</p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="h-10 w-10 rounded-xl bg-amber-100 flex items-center justify-center">
              <Clock className="h-5 w-5 text-amber-700" />
            </div>
            <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">Pending</span>
          </div>
          <p className="text-4xl font-bold text-slate-900 mb-1">{draftPosts ?? 0}</p>
          <p className="text-sm text-slate-500">Drafts</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6 mb-10">

        {/* Recent Posts */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
            <h2 className="font-semibold text-slate-800 text-sm">Recent Posts</h2>
            <Link href="/portal/blog" className="text-xs text-[var(--color-primary-700)] hover:text-[var(--color-primary-900)] font-medium transition-colors">
              View all →
            </Link>
          </div>
          {recentPosts && recentPosts.length > 0 ? (
            <ul className="divide-y divide-slate-100">
              {recentPosts.map((post) => (
                <li key={post.id}>
                  <Link
                    href={`/portal/blog/${post.id}/edit`}
                    className="flex items-center gap-4 px-6 py-4 hover:bg-slate-50 transition-colors"
                  >
                    <div className="shrink-0">
                      {post.status === 'published' ? (
                        <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                      ) : (
                        <AlertCircle className="h-4 w-4 text-amber-400" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-slate-800 truncate">{post.title || 'Untitled'}</p>
                      <p className="text-xs text-slate-400 mt-0.5">
                        {new Date(post.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </p>
                    </div>
                    <span className={`shrink-0 text-[10px] font-semibold uppercase tracking-widest px-2 py-0.5 rounded-full ${
                      post.status === 'published'
                        ? 'bg-emerald-100 text-emerald-700'
                        : 'bg-amber-100 text-amber-700'
                    }`}>
                      {post.status}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <div className="px-6 py-12 text-center">
              <FileText className="h-8 w-8 text-slate-300 mx-auto mb-3" />
              <p className="text-sm font-medium text-slate-500 mb-1">No posts yet</p>
              <p className="text-xs text-slate-400">Create your first blog post to get started.</p>
            </div>
          )}
        </div>

        {/* Quick Actions + Status */}
        <div className="space-y-4">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-100">
              <h2 className="font-semibold text-slate-800 text-sm">Quick Actions</h2>
            </div>
            <div className="p-4 space-y-2">
              <Link href="/portal/blog/new" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-[var(--color-primary-50)] text-slate-700 hover:text-[var(--color-primary-900)] transition-colors group">
                <div className="h-8 w-8 rounded-lg bg-[var(--color-primary-100)] flex items-center justify-center shrink-0 group-hover:bg-[var(--color-primary-200)] transition-colors">
                  <PenSquare className="h-4 w-4 text-[var(--color-primary-700)]" />
                </div>
                <span className="text-sm font-medium">Write a Post</span>
              </Link>
              <Link href="/portal/blog" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-50 text-slate-700 transition-colors group">
                <div className="h-8 w-8 rounded-lg bg-slate-100 flex items-center justify-center shrink-0 group-hover:bg-slate-200 transition-colors">
                  <FileText className="h-4 w-4 text-slate-600" />
                </div>
                <span className="text-sm font-medium">Manage Posts</span>
              </Link>
              <Link href="/portal/settings" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-50 text-slate-700 transition-colors group">
                <div className="h-8 w-8 rounded-lg bg-slate-100 flex items-center justify-center shrink-0 group-hover:bg-slate-200 transition-colors">
                  <Settings className="h-4 w-4 text-slate-600" />
                </div>
                <span className="text-sm font-medium">Site Settings</span>
              </Link>
              <a href="https://www.federaltitle.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-50 text-slate-700 transition-colors group">
                <div className="h-8 w-8 rounded-lg bg-slate-100 flex items-center justify-center shrink-0 group-hover:bg-slate-200 transition-colors">
                  <Globe className="h-4 w-4 text-slate-600" />
                </div>
                <span className="text-sm font-medium">View Live Site</span>
              </a>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">
            <h2 className="font-semibold text-slate-800 text-sm mb-4">Site Status</h2>
            <div className="space-y-3">
              {[
                { label: 'federaltitle.com', status: 'Online' },
                { label: 'Hosting (Vercel)', status: 'Operational' },
                { label: 'Database', status: 'Operational' },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between">
                  <span className="text-xs text-slate-500">{item.label}</span>
                  <div className="flex items-center gap-1.5">
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    <span className="text-xs font-medium text-emerald-700">{item.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Site Resource Hub */}
      <div className="mb-4">
        <h2 className="text-lg font-bold text-slate-800 mb-1" style={{ fontFamily: 'var(--font-playfair), serif' }}>Site Resource Hub</h2>
        <p className="text-sm text-slate-500">All pages and tools available for review and management.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {siteLinks.map((section) => (
          <div key={section.category} className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="px-5 py-4 border-b border-slate-100 flex items-center gap-2.5">
              <div className={`h-7 w-7 rounded-lg flex items-center justify-center ${section.color}`}>
                {section.icon}
              </div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-600">{section.category}</h3>
            </div>
            <ul className="p-3 space-y-0.5">
              {section.links.map((link) => (
                <li key={link.label}>
                  {link.internal ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between px-3 py-2 rounded-lg text-sm text-slate-600 hover:text-[var(--color-primary-800)] hover:bg-slate-50 transition-colors group"
                    >
                      <span>{link.label}</span>
                      <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-40 transition-opacity shrink-0" />
                    </a>
                  ) : (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between px-3 py-2 rounded-lg text-sm text-slate-600 hover:text-[var(--color-primary-800)] hover:bg-slate-50 transition-colors group"
                    >
                      <span>{link.label}</span>
                      <ExternalLink className="h-3 w-3 opacity-40 shrink-0" />
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
