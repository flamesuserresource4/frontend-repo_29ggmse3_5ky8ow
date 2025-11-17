import React from 'react'
import PageHeader from '../components/PageHeader'
import { Link } from 'react-router-dom'

const POSTS = [
  { slug: 'designing-for-speed', title: 'Designing for Speed', excerpt: 'How we build lightning-fast apps.' },
  { slug: 'mobile-first-excellence', title: 'Mobile-first Excellence', excerpt: 'Rethinking experiences on small screens.' },
  { slug: 'secure-by-default', title: 'Secure by Default', excerpt: 'Security as a fundamental principle.' },
]

function Blog() {
  return (
    <div>
      <PageHeader title="Insights" subtitle="Ideas, updates, and engineering notes." />
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-6">
          {POSTS.map((p) => (
            <Link key={p.slug} to={`/blog/${p.slug}`} className="p-6 rounded-xl border border-slate-200 bg-white hover:shadow-md transition-shadow">
              <div className="font-semibold text-[#1A3A60]">{p.title}</div>
              <div className="text-sm text-slate-600 mt-1">{p.excerpt}</div>
              <div className="mt-3 text-[#1E88E5] text-sm">Read more →</div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )}

export default Blog
