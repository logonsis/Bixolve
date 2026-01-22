import { Home, Briefcase, Mail, MessageCircle } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const navItems = [
  { icon: Home, label: 'Home', href: '#home' },
  { icon: Briefcase, label: 'Services', href: '#services' },
  { icon: Mail, label: 'Contact', href: '#contact' },
  { icon: MessageCircle, label: 'ChatWith', href: '#chatwith' },
];

const BottomNav = () => {
  const location = useLocation();

  const handleClick = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else if (location.pathname !== '/') {
        window.location.href = '/' + href;
      }
    }
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-t border-border shadow-elevated">
      <div className="flex items-center justify-around h-16 max-w-lg mx-auto px-4">
        {navItems.map((item) => (
          <button
            key={item.label}
            onClick={() => handleClick(item.href)}
            className="flex flex-col items-center justify-center gap-1 px-4 py-2 rounded-lg text-muted-foreground hover:text-accent hover:bg-accent/10 transition-all duration-200 group"
          >
            <item.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span className="text-xs font-medium">{item.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default BottomNav;
