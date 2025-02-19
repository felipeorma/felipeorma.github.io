import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Post } from '../lib/posts';
import { BlogPost } from './BlogPost';

interface BlogListProps {
  posts: Post[];
  postsPerPage?: number;
  isEnglish?: boolean;
}

export function BlogList({ posts, postsPerPage = 3, isEnglish = true }: BlogListProps) {
  const [currentPage, setCurrentPage] = useState(1);
  
  const totalPages = Math.ceil(posts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const visiblePosts = posts.slice(startIndex, startIndex + postsPerPage);

  return (
    <div className="space-y-8">
      <div className="grid gap-8">
        {visiblePosts.map((post) => (
          <BlogPost
            key={post.slug}
            title={post.title}
            date={post.date}
            content={post.content}
            coverImage={post.coverImage}
            excerpt={post.excerpt}
            isPreview
            isEnglish={isEnglish}
          />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-4 mt-8">
          <button
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="p-2 rounded-full bg-green-600/20 hover:bg-green-600/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <span className="font-mono text-gray-400">
            {isEnglish ? 'Page' : 'Página'} {currentPage} {isEnglish ? 'of' : 'de'} {totalPages}
          </span>
          
          <button
            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="p-2 rounded-full bg-green-600/20 hover:bg-green-600/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </div>
  );
}