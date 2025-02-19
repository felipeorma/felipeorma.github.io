import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Calendar, ChevronDown, ChevronUp } from 'lucide-react';

interface BlogPostProps {
  title: string;
  date: string;
  content: string;
  coverImage: string;
  excerpt: string;
  isPreview?: boolean;
  isEnglish?: boolean;
}

export function BlogPost({ title, date, content, coverImage, excerpt, isPreview = false, isEnglish = true }: BlogPostProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const displayContent = isPreview ? (isExpanded ? content : excerpt) : content;

  return (
    <article className="bg-gray-900/80 rounded-lg overflow-hidden shadow-xl transition-all duration-300 hover:shadow-green-600/10">
      <img 
        src={coverImage} 
        alt={title}
        className="w-full h-64 object-cover"
      />
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-4 text-gradient">{title}</h1>
        <div className="flex items-center gap-2 text-gray-400 mb-6">
          <Calendar size={18} />
          <time>{date}</time>
        </div>
        <div className="prose prose-invert prose-green max-w-none">
          <ReactMarkdown>{displayContent}</ReactMarkdown>
        </div>
        
        {isPreview && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-6 flex items-center gap-2 text-green-500 hover:text-green-400 transition-colors duration-300"
          >
            {isExpanded ? (
              <>
                <ChevronUp size={20} />
                {isEnglish ? 'Show less' : 'Mostrar menos'}
              </>
            ) : (
              <>
                <ChevronDown size={20} />
                {isEnglish ? 'Read more' : 'Leer más'}
              </>
            )}
          </button>
        )}
      </div>
    </article>
  );
}