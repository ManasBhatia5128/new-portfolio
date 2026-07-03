import { MetadataRoute } from 'next';
import connectToDatabase from '@/lib/mongodb';
import Blog from '@/models/Blog';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://manasbhatia.me';
  
  // Static routes
  const routes: MetadataRoute.Sitemap = [
    '',
    '/experience',
    '/projects',
    '/blog',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));

  try {
    await connectToDatabase();
    const blogs = await Blog.find({}).select('slug updatedAt').lean();
    
    const blogRoutes: MetadataRoute.Sitemap = blogs.map((blog: any) => ({
      url: `${baseUrl}/blog/${blog.slug}`,
      lastModified: blog.updatedAt || new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    }));

    return [...routes, ...blogRoutes];
  } catch (error) {
    console.error('Error generating sitemap:', error);
    // Return static routes if db connection fails
    return routes;
  }
}
