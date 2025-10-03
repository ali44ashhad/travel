import React from 'react';
import Button from '../common/Button';
import Card from '../ui/Card';
import { blogPosts, getFeaturedPosts } from '../../data/blog';

const BlogSection = () => {
  const featuredPosts = getFeaturedPosts().slice(0, 3);

  return (
    <section className="py-20 bg-[#f7fafc]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1a365d] mb-4">
            Travel Blog
          </h2>
          <p className="text-xl text-[#2d3748] max-w-2xl mx-auto">
            Discover travel stories, tips, and inspiration from our experts and fellow travelers
          </p>
        </div>

        {/* Featured Posts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {featuredPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#d4af37] text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-600 mb-3">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
                
                <h3 className="text-xl font-serif font-semibold text-[#1a365d] mb-3 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <img
                      src={post.authorImage}
                      alt={post.author}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <span className="text-sm text-gray-600">{post.author}</span>
                  </div>
                  <Button variant="outline" size="sm" href={`/blog/${post.id}`}>
                    Read More
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="primary" size="lg" href="/blog">
            View All Blog Posts
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;