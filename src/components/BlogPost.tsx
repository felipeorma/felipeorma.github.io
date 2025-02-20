import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Calendar, ChevronDown, ChevronUp, Share2, Linkedin, Link, Check } from 'lucide-react';

interface BlogPostProps {
  title: string;
  date: string;
  content: string;
  coverImage: string;
  excerpt: string;
  isPreview?: boolean;
  isEnglish?: boolean;
  slug?: string;
}

export function BlogPost({ title, date, content, coverImage, excerpt, isPreview = false, isEnglish = true, slug }: BlogPostProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showCopiedTooltip, setShowCopiedTooltip] = useState(false);
  
  const displayContent = isPreview ? (isExpanded ? content : excerpt) : content;

  const handleShare = (platform: 'linkedin' | 'copy') => {
    const url = `${window.location.origin}/felipeorma.github.io/#blog`;
    const shareTitle = encodeURIComponent(title);
    
    if (platform === 'linkedin') {
      const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}&title=${shareTitle}`;
      window.open(linkedinUrl, '_blank');
    } else if (platform === 'copy') {
      navigator.clipboard.writeText(url).then(() => {
        setShowCopiedTooltip(true);
        setTimeout(() => setShowCopiedTooltip(false), 2000);
      });
    }
  };

  return (
    <article className="bg-gray-900/80 rounded-lg overflow-hidden shadow-xl transition-all duration-300 hover:shadow-green-600/10">
      <div className="relative h-[400px] overflow-hidden">
        <img 
          src={coverImage} 
          alt={title}
          className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent" />
        <h1 className="absolute bottom-0 left-0 right-0 p-8 text-3xl font-bold text-white">{title}</h1>
      </div>
      <div className="p-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2 text-gray-400">
            <Calendar size={18} />
            <time>{date}</time>
          </div>
          
          {/* Share buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleShare('linkedin')}
              className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors duration-300 group"
              title={isEnglish ? "Share on LinkedIn" : "Compartir en LinkedIn"}
            >
              <Linkedin size={18} className="text-gray-400 group-hover:text-green-500" />
            </button>
            
            <div className="relative">
              <button
                onClick={() => handleShare('copy')}
                className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors duration-300 group"
                title={isEnglish ? "Copy link" : "Copiar enlace"}
              >
                {showCopiedTooltip ? (
                  <Check size={18} className="text-green-500" />
                ) : (
                  <Link size={18} className="text-gray-400 group-hover:text-green-500" />
                )}
              </button>
              {showCopiedTooltip && (
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-green-500 text-white text-xs rounded whitespace-nowrap">
                  {isEnglish ? "Link copied!" : "¡Enlace copiado!"}
                </div>
              )}
            </div>
          </div>
        </div>
        
        <div className="prose prose-invert prose-green max-w-none">
          <ReactMarkdown
            components={{
              img: ({ node, ...props }) => (
                <span className="block my-8">
                  <img
                    {...props}
                    className="w-full h-auto max-h-[600px] object-contain rounded-lg shadow-lg hover:shadow-green-500/20 transition-shadow duration-300"
                    loading="lazy"
                  />
                </span>
              ),
              p: ({ node, children, ...props }) => {
                if (node?.children[0]?.type === 'element' && node.children[0].tagName === 'img') {
                  return <>{children}</>;
                }
                return <p {...props}>{children}</p>;
              }
            }}
          >
            {displayContent}
          </ReactMarkdown>
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