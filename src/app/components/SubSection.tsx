import React from 'react';
import type { LucideIcon } from 'lucide-react';

interface SubSectionProps {
  title: string;
  content: string;
  Icon: LucideIcon;
}

export const SubSection: React.FC<SubSectionProps> = ({ title, content, Icon }) => (
  <div className="mb-4 group">
    <div className="flex items-center gap-2 mb-2">
      <Icon className="w-5 h-5 text-blue-500 transition-transform group-hover:scale-110" />
      <h4 className="font-semibold text-gray-800">{title}</h4>
    </div>
    <p className="text-gray-600 pl-7">{content}</p>
  </div>
);