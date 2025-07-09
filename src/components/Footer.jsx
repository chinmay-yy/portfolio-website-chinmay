import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    // 📦 Footer container, now flex-col & centered
    <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-col items-center space-y-6">
      
      

      {/* 🔼 Scroll to Top Button */}
      <a
        href="#hero"
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};
