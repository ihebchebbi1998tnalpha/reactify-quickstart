import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
}

export const FeatureCard = ({ title, description, Icon }: FeatureCardProps) => {
  return (
    <div className="p-6 rounded-lg bg-white/5 backdrop-blur-lg border border-white/10 hover:border-white/20 transition-all duration-300">
      <Icon className="w-12 h-12 mb-4 text-blue-400" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};