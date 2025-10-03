import React from 'react';
import { useParams, Link } from 'react-router-dom'; 
import Button from '../components/common/Button';
import Card from '../components/ui/Card';
import { getPostById, blogPosts } from '../data/blog';

const BlogPost = () => {
  const { id } = useParams();
  const post = getPostById(parseInt(id));

  if (!post) {
    return (
      <div className="min-h-screen">
     
        <main className="pt-20">
          <div className="container mx-auto px-4 py-20 text-center">
            <h1 className="text-4xl font-serif font-bold text-[#1a365d] mb-4">Article Not Found</h1>
            <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
            <Button variant="primary" href="/blog">
              Back to Blog
            </Button>
          </div>
        </main>
        
      </div>
    );
  }

  const relatedPosts = blogPosts
    .filter(p => p.id !== post.id && p.category === post.category)
    .slice(0, 3);

  return (
    <div className="min-h-screen">
  
      
      <main className="">
        {/* Article Header */}
        <section className="bg-[#1a365d] text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center">
              <div className="flex justify-center mb-4">
                <span className="bg-[#d4af37] text-white px-4 py-2 rounded-full text-sm font-semibold">
                  {post.category}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
                {post.title}
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                {post.excerpt}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-gray-300">
                <div className="flex items-center space-x-3">
                  <img
                    src={post.authorImage}
                    alt={post.author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="text-left">
                    <div className="font-semibold">{post.author}</div>
                    <div className="text-sm">Travel Expert</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4 text-sm">
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                {/* Main Content */}
                <article className="lg:col-span-3">
                  <div className="mb-8">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-96 object-cover rounded-2xl shadow-lg"
                    />
                  </div>
                  
                  <div className="prose prose-lg max-w-none">
                    {post.content.split('\n\n').map((paragraph, index) => (
                      <p key={index} className="text-gray-700 mb-6 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="mt-12 pt-8 border-t border-gray-200">
                    <h3 className="text-lg font-semibold text-[#2d3748] mb-4">Tags</h3>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map(tag => (
                        <span
                          key={tag}
                          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-[#d4af37] hover:text-white transition-colors duration-300"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Share */}
                  <div className="mt-8 pt-8 border-t border-gray-200">
                    <h3 className="text-lg font-semibold text-[#2d3748] mb-4">Share this article</h3>
                    <div className="flex space-x-4">
                      {['facebook', 'twitter', 'linkedin', 'link'].map(social => (
                        <button
                          key={social}
                          className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-[#d4af37] hover:text-white transition-colors duration-300"
                        >
                          <i className={`fab fa-${social}`}></i>
                        </button>
                      ))}
                    </div>
                  </div>
                </article>

                {/* Sidebar */}
                <aside className="lg:col-span-1">
                  {/* Author Bio */}
                  <Card className="p-6 mb-8">
                    <div className="text-center">
                      <img
                        src={post.authorImage}
                        alt={post.author}
                        className="w-20 h-20 rounded-full object-cover mx-auto mb-4"
                      />
                      <h3 className="text-lg font-semibold text-[#1a365d] mb-2">{post.author}</h3>
                      <p className="text-gray-600 text-sm mb-4">Travel Expert & Writer</p>
                      <p className="text-gray-600 text-sm">
                        {post.author} is an experienced travel writer with a passion for discovering hidden gems and sharing authentic travel experiences.
                      </p>
                    </div>
                  </Card>

                  {/* Categories */}
                  <Card className="p-6">
                    <h3 className="text-lg font-semibold text-[#1a365d] mb-4">Categories</h3>
                    <ul className="space-y-2">
                      {['Destinations', 'Travel Tips', 'Food & Culture', 'Sustainable Travel', 'Photography', 'Wellness'].map(category => (
                        <li key={category}>
                          <Link
                            to={`/blog?category=${category}`}
                            className="flex items-center justify-between text-gray-600 hover:text-[#d4af37] transition-colors duration-300"
                          >
                            <span>{category}</span>
                            <span className="bg-gray-100 text-gray-500 text-xs px-2 py-1 rounded-full">
                              {blogPosts.filter(p => p.category === category).length}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </aside>
              </div>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="py-20 bg-[#f7fafc]">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1a365d] text-center mb-12">
                Related Articles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedPosts.map(relatedPost => (
                  <Card key={relatedPost.id} className="overflow-hidden group hover:shadow-xl transition-all duration-300">
                    <div className="relative overflow-hidden">
                      <img
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-serif font-semibold text-[#1a365d] mb-3 line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {relatedPost.excerpt}
                      </p>
                      <Button variant="outline" size="sm" href={`/blog/${relatedPost.id}`}>
                        Read More
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

 
    </div>
  );
};

export default BlogPost;