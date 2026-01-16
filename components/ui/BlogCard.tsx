import Link from 'next/link';
import { Calendar, ArrowRight } from 'lucide-react';

interface BlogCardProps {
  title: string;
  description: string;
  thumbnail: string;
  slug: string;
  date: string;
}

const BlogCard = ({ title, description, thumbnail, slug, date }: BlogCardProps) => {
  return (
    <Link href={`/insights/${slug}`} className="group block h-full">
      <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 h-full flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
        
        {/* Image Container */}
        <div className="relative w-full h-56 overflow-hidden">
          <img 
            src={thumbnail} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute top-4 left-4 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow-md">
            Insights
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
          <div className="flex items-center text-gray-400 text-xs mb-3 space-x-2 font-semibold uppercase tracking-wide">
            <Calendar size={14} className="text-orange-500" />
            <span>{new Date(date).toLocaleDateString()}</span>
          </div>

          <h3 className="text-xl font-bold text-[#041D2D] mb-3 line-clamp-2 group-hover:text-orange-600 transition-colors">
            {title}
          </h3>

          <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-6 flex-grow">
            {description}
          </p>

          {/* ✅ UPDATED BUTTON: Text Gradient on White Background */}
          <div className="mt-auto">
             <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-gray-100 shadow-md transition-all duration-300 group-hover:shadow-lg group-hover:scale-105">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-green-500 text-xs font-bold uppercase tracking-wider">
                    Read Full Article
                </span>
                {/* Icon ko solid color diya taki wo gayab na ho */}
                <ArrowRight size={14} className="text-green-500" />
             </span>
          </div>

        </div>
      </div>
    </Link>
  );
};

export default BlogCard;