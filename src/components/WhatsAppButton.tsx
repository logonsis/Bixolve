import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const contacts = [
    { country: 'India', number: '+918157822165', display: '+91 8157822165' },
    { country: 'UAE', number: '+971507727489', display: '+971 507 727 489' },
  ];

  const openWhatsApp = (number: string) => {
    window.open(`https://wa.me/${number.replace(/\+/g, '')}`, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-20 right-4 z-50 md:bottom-6">
      {/* Contact Options */}
      {isOpen && (
        <div className="mb-3 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden animate-in slide-in-from-bottom-2 duration-200">
          <div className="px-4 py-3 bg-[#25D366] text-white font-semibold text-sm">
            Chat with us on WhatsApp
          </div>
          {contacts.map((contact) => (
            <button
              key={contact.country}
              onClick={() => openWhatsApp(contact.number)}
              className="w-full px-4 py-3 flex items-center gap-3 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0"
            >
              <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <p className="font-medium text-gray-900">{contact.country} Office</p>
                <p className="text-sm text-gray-500">{contact.display}</p>
              </div>
            </button>
          ))}
        </div>
      )}

      {/* Main Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 ${
          isOpen ? 'bg-gray-600 rotate-90' : 'bg-[#25D366]'
        }`}
        aria-label={isOpen ? 'Close WhatsApp options' : 'Open WhatsApp chat'}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <svg
            viewBox="0 0 24 24"
            className="w-7 h-7 text-white fill-current"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        )}
      </button>
    </div>
  );
};

export default WhatsAppButton;
