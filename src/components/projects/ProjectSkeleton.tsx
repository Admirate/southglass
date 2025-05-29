export default function ProjectSkeleton() {
  return (
    <div className="animate-pulse bg-gradient-to-br from-gray-900/80 to-black border border-white/10 rounded-xl overflow-hidden h-full flex flex-col">
      {/* Image area skeleton */}
      <div className="relative h-40 sm:h-48 md:h-52 bg-gray-800/50">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
        
        {/* Title skeleton */}
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="h-6 bg-gray-700/50 rounded w-3/4" />
        </div>
        
        {/* Category badges skeleton */}
        <div className="absolute bottom-2 left-2 flex gap-1.5">
          <div className="h-5 bg-gray-700/50 rounded-md w-20" />
          <div className="h-5 bg-gray-700/50 rounded-md w-24" />
        </div>
      </div>
      
      {/* Content skeleton */}
      <div className="p-4 space-y-3 flex-1">
        {/* Description */}
        <div className="space-y-2">
          <div className="h-4 bg-gray-800/50 rounded w-full" />
          <div className="h-4 bg-gray-800/50 rounded w-5/6" />
          <div className="h-4 bg-gray-800/50 rounded w-4/6" />
        </div>
        
        {/* Details */}
        <div className="flex items-center gap-4 pt-2">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-gray-800/50 rounded" />
            <div className="h-3 bg-gray-800/50 rounded w-20" />
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-gray-800/50 rounded" />
            <div className="h-3 bg-gray-800/50 rounded w-16" />
          </div>
        </div>
        
        {/* Button skeleton */}
        <div className="mt-auto pt-4">
          <div className="h-10 bg-gray-800/50 rounded-lg w-full" />
        </div>
      </div>
    </div>
  );
} 