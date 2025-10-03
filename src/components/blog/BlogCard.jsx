import React from 'react';
import Card from '../ui/Card';
import Button from '../common/Button';

const BlogCard = ({ post, variant = 'default' }) => {
  if (variant === 'featured') {
    return (
      <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="relative overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-64 lg:h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute top-4 left-4">
              <span className="bg-[#d4af37] text-white px-3 py-1 rounded-full text-sm font-semibold">
                {post.category}
              </span>
            </div>
          </div>
          
          <div className="p-6 flex flex-col justify-center">
            <div className="flex items-center text-sm text-gray-600 mb-3">
              <span>{new Date(post.date).toLocaleDateString()}</span>
              <span className="mx-2">•</span>
              <span>{post.readTime}</span>
            </div>
            
            <h3 className="text-2xl font-serif font-semibold text-[#1a365d] mb-4">
              {post.title}
            </h3>
            
            <p className="text-gray-600 mb-6">
              {post.excerpt}
            </p>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <img
                  src={post.authorImage}
                  alt={post.author}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-[#2d3748]">{post.author}</div>
                  <div className="text-sm text-gray-600">{post.category}</div>
                </div>
              </div>
              <Button variant="primary" href={`/blog/${post.id}`}>
                Read Article
              </Button>
            </div>
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300">
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
          <span>{new Date(post.date).toLocaleDateString()}</span>
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
  );
};

export default BlogCard;