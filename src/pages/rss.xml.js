import rss from '@astrojs/rss';
import fs from 'fs';
import matter from 'gray-matter';
import { join, extname } from 'path';

export async function GET(context) {
  const postsDirectory = join(process.cwd(), 'src/pages/blog/posts');
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames
    .filter(filename => extname(filename) === '.md') // Nur Markdown-Dateien verarbeiten
    .map(filename => {
      const filePath = join(postsDirectory, filename);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        slug: filename.replace(/\.md$/, ''),
        data,
        content,
      };
    });

  return rss({
    title: 'mdohr07’s Weblog',
    description: 'A personal space about Informatics, Art, Road Cycling, 3D and the Indie Web',
    site: context.site,
    items: posts.map(post => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: `/blog/${post.slug}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}
