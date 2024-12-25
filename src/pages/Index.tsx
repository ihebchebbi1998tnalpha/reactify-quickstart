import { Rocket, Zap, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FeatureCard } from "@/components/FeatureCard";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-24 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 animate-gradient bg-300% leading-tight">
          Welcome to Your Amazing App
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl">
          Build something incredible with modern web technologies and beautiful design.
        </p>
        <Button
          className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105"
          onClick={() => console.log("CTA clicked")}
        >
          Get Started
        </Button>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Amazing Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            Icon={Rocket}
            title="Lightning Fast"
            description="Built with performance in mind for the best user experience"
          />
          <FeatureCard
            Icon={Shield}
            title="Secure by Default"
            description="Enterprise-grade security built into every layer"
          />
          <FeatureCard
            Icon={Zap}
            title="Powerful Tools"
            description="Everything you need to build amazing applications"
          />
        </div>
      </div>
    </div>
  );
};

export default Index;