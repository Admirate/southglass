export default function ProductSkeleton() {
  return (
    <div className="animate-pulse bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10">
      {/* Image skeleton */}
      <div className="aspect-[4/3] bg-gray-700/30" />
      
      {/* Content skeleton */}
      <div className="p-6 space-y-4">
        {/* Title and type badge */}
        <div className="flex justify-between items-start gap-4">
          <div className="h-6 bg-gray-700/30 rounded w-3/4" />
          <div className="h-6 bg-gray-700/30 rounded-full w-16" />
        </div>
        
        {/* Description */}
        <div className="space-y-2">
          <div className="h-4 bg-gray-700/30 rounded w-full" />
          <div className="h-4 bg-gray-700/30 rounded w-5/6" />
        </div>
        
        {/* Features */}
        <div className="space-y-3">
          <div className="h-4 bg-gray-700/30 rounded w-1/3" />
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-gray-700/30 rounded-full" />
              <div className="h-3 bg-gray-700/30 rounded w-4/5" />
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-gray-700/30 rounded-full" />
              <div className="h-3 bg-gray-700/30 rounded w-3/4" />
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-gray-700/30 rounded-full" />
              <div className="h-3 bg-gray-700/30 rounded w-2/3" />
            </div>
          </div>
        </div>
        
        {/* Applications */}
        <div className="space-y-3">
          <div className="h-4 bg-gray-700/30 rounded w-1/3" />
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-gray-700/30 rounded-full" />
              <div className="h-3 bg-gray-700/30 rounded w-3/5" />
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-gray-700/30 rounded-full" />
              <div className="h-3 bg-gray-700/30 rounded w-1/2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 