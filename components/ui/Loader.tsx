import { Loader2 } from "lucide-react";

interface LoaderProps {
  fullScreen?: boolean;
  text?: string;
  size?: number;
}

export default function Loader({ fullScreen = false, text = "Loading...", size = 40 }: LoaderProps) {
  if (fullScreen) {
    return (
      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white/80 backdrop-blur-sm">
        <Loader2 className="animate-spin text-orange-500 mb-4" size={size} />
        <p className="text-gray-600 font-medium animate-pulse">{text}</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center py-8">
      <Loader2 className="animate-spin text-orange-500 mb-2" size={size} />
      <p className="text-sm text-gray-500">{text}</p>
    </div>
  );
}