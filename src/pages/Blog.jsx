import React, { useState } from 'react'; 
import Button from '../components/common/Button';
import BlogCard from '../components/blog/BlogCard';
import { blogPosts, categories, getFeaturedPosts } from '../data/blog';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const featuredPosts = getFeaturedPosts();
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen">
      
      
      <main className=" ">
        {/* Hero Section */}
        <section className="bg-[#1a365d] text-white py-40">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
              Travel Blog
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Stories, tips, and inspiration from our travel experts and community
            </p>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-12 bg-[#f7fafc">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="flex-1 w-full lg:max-w-md">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#d4af37] focus:border-transparent transition-all duration-300"
                  />
                  <i className="fas fa-search absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                </div>
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2 justify-center">
                {categories.map(category => (
                  <Button
                    key={category.name}
                    variant={selectedCategory === category.name ? "primary" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category.name)}
                  >
                    {category.name} ({category.count})
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>

      

        {/* All Posts */}
        <section className="py-20 bg-[#f7fafc]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1a365d] text-center mb-12">
              {selectedCategory === 'All' ? 'All Articles' : `${selectedCategory} Articles`}
            </h2>
            
            {filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map(post => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <i className="fas fa-search text-4xl text-gray-400 mb-4"></i>
                <h3 className="text-xl font-semibold text-[#2d3748] mb-2">No articles found</h3>
                <p className="text-gray-600">Try adjusting your search or filter criteria</p>
              </div>
            )}
          </div>
        </section>
 
      </main>

    
    </div>
  );
};

export default Blog;