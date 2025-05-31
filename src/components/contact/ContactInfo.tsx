import React from "react";
import { MapPin, Mail, Building, Factory, Phone, Calendar } from "lucide-react";
import Link from "next/link";

interface ContactItemProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

function ContactItem({ icon, title, children }: ContactItemProps) {
  return (
    <div className="flex mb-8 group">
      <div className="mr-4 mt-1">
        <div className="p-3 bg-zinc-800 text-blue-400 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
          {icon}
        </div>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <div className="text-zinc-400">{children}</div>
      </div>
    </div>
  );
}

function EmailLink({ email }: { email: string }) {
  return (
    <a 
      href={`mailto:${email}`} 
      className="block text-zinc-400 hover:text-blue-400 transition-colors duration-200"
    >
      {email}
    </a>
  );
}

export default function ContactInfo() {
  return (
    <div className="bg-zinc-900 p-8 rounded-xl shadow-lg border border-zinc-800 h-full">
      <h2 className="text-2xl font-semibold mb-8">Contact Information</h2>
      
      <ContactItem icon={<Building size={24} />} title="Head Office">
        <p>Banjara Hills, Hyderabad</p>
        <p>Telangana, India</p>
      </ContactItem>
      
      <ContactItem icon={<Factory size={24} />} title="Factory Address">
        <p>Burgulla Village, NH-44</p>
        <p>Telangana, India</p>
      </ContactItem>
      
      <ContactItem icon={<Mail size={24} />} title="Email Us">
        <div className="space-y-2">
          <EmailLink email="glassorder@southglass.in" />
          <EmailLink email="ppc@southglass.in" />
          <EmailLink email="hr@southglass.in" />
        </div>
      </ContactItem>
      
      <ContactItem icon={<Phone size={24} />} title="Call Us">
        <a 
          href="tel:+919876543210" 
          className="block text-zinc-400 hover:text-blue-400 transition-colors duration-200"
        >
          +91 98765 43210
        </a>
      </ContactItem>
    </div>
  );
} 