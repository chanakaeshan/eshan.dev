import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const BlogSection = () => {
  const featuredPost = {
    id: 1,
    title: 'The Future of Web Development: Trends to Watch in 2025',
    excerpt: 'Exploring the cutting-edge technologies and methodologies that are shaping the future of web development, from AI integration to advanced performance optimization.',
    image: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=800&h=400&fit=crop',
    category: 'Web Development',
    readTime: '8 min read',
    publishDate: 'Dec 15, 2023',
    tags: ['React', 'AI', 'Performance', 'Trends'],
  };

  const posts = [
    {
      id: 2,
      title: 'Building Accessible React Components: A Complete Guide',
      excerpt: 'Learn how to create React components that work for everyone, including users with disabilities.',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&fit=crop',
      category: 'Accessibility',
      readTime: '12 min read',
      publishDate: 'Dec 10, 2023',
      tags: ['React', 'Accessibility', 'UX'],
    },
    {
      id: 3,
      title: 'Design Systems That Scale: Lessons from Industry Leaders',
      excerpt: 'How to build and maintain design systems that grow with your organization.',
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=250&fit=crop',
      category: 'Design Systems',
      readTime: '6 min read',
      publishDate: 'Dec 5, 2023',
      tags: ['Design', 'Systems', 'Scaling'],
    },
    {
      id: 4,
      title: 'TypeScript Best Practices for Large Applications',
      excerpt: 'Essential patterns and practices for maintaining type safety in complex TypeScript projects.',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop',
      category: 'TypeScript',
      readTime: '10 min read',
      publishDate: 'Nov 28, 2023',
      tags: ['TypeScript', 'Best Practices', 'Architecture'],
    },
    {
      id: 5,
      title: 'The Art of Code Reviews: Building Better Software Together',
      excerpt: 'How effective code reviews can improve code quality and team collaboration.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=250&fit=crop',
      category: 'Team Collaboration',
      readTime: '7 min read',
      publishDate: 'Nov 20, 2023',
      tags: ['Code Review', 'Team', 'Quality'],
    },
    {
      id: 6,
      title: 'Performance Optimization: From Good to Great',
      excerpt: 'Advanced techniques for optimizing web application performance and user experience.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop',
      category: 'Performance',
      readTime: '15 min read',
      publishDate: 'Nov 15, 2023',
      tags: ['Performance', 'Optimization', 'Web Vitals'],
    },
  ];

  const categories = ['All', 'Web Development', 'Design Systems', 'TypeScript', 'Accessibility', 'Performance'];

  return (
    <section id="blog" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-display font-bold mb-6 text-gradient">Blog</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Thoughts, tutorials, and insights about web development, design, and technology.
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <Card className="glass-card border-0 overflow-hidden hover-lift group">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative overflow-hidden">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-64 lg:h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">
                  Featured
                </Badge>
              </div>
              <CardContent className="p-8 flex flex-col justify-center">
                <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center">
                    <Calendar size={16} className="mr-2" />
                    {featuredPost.publishDate}
                  </span>
                  <span className="flex items-center">
                    <Clock size={16} className="mr-2" />
                    {featuredPost.readTime}
                  </span>
                </div>
                <Badge variant="secondary" className="w-fit mb-4">
                  {featuredPost.category}
                </Badge>
                <h3 className="text-2xl lg:text-3xl font-display font-bold mb-4 group-hover:text-accent transition-colors">
                  {featuredPost.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {featuredPost.tags.map((tag) => (
                    <span key={tag} className="flex items-center text-xs text-muted-foreground">
                      <Tag size={12} className="mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>
                <Button className="w-fit group/btn">
                  Read Full Article
                  <ArrowRight size={16} className="ml-2 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </CardContent>
            </div>
          </Card>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant="outline"
              size="sm"
              className="glass-card hover-lift"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {posts.map((post) => (
            <Card key={post.id} className="glass-card border-0 overflow-hidden hover-lift group">
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button size="sm" className="glass-card">
                    Read Article
                  </Button>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 text-xs text-muted-foreground mb-3">
                  <span className="flex items-center">
                    <Calendar size={12} className="mr-1" />
                    {post.publishDate}
                  </span>
                  <span className="flex items-center">
                    <Clock size={12} className="mr-1" />
                    {post.readTime}
                  </span>
                </div>
                <Badge variant="secondary" className="text-xs mb-3">
                  {post.category}
                </Badge>
                <h4 className="text-lg font-semibold mb-2 group-hover:text-accent transition-colors line-clamp-2">
                  {post.title}
                </h4>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="flex items-center text-xs text-muted-foreground">
                      <Tag size={10} className="mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>
                <Button variant="ghost" size="sm" className="p-0 h-auto group/btn">
                  Read More
                  <ArrowRight size={14} className="ml-2 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Signup */}
        <Card className="glass-card border-0 max-w-2xl mx-auto">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-display font-semibold mb-4">Stay Updated</h3>
            <p className="text-muted-foreground mb-6">
              Get the latest articles and insights delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <Button className="hover-lift">
                Subscribe
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default BlogSection;