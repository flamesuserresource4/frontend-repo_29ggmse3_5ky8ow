import React from 'react'
import { useParams } from 'react-router-dom'
import PageHeader from '../components/PageHeader'

function BlogDetail() {
  const { slug } = useParams()
  return (
    <div>
      <PageHeader title="Blog" subtitle={slug.replaceAll('-', ' ')} />
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="prose prose-slate max-w-none">
            <h2 className="text-[#1A3A60]">{slug.replaceAll('-', ' ')}</h2>
            <p>Coming soon. This is a placeholder article showcasing the blog details layout.</p>
          </article>
        </div>
      </section>
    </div>
  )
}

export default BlogDetail
