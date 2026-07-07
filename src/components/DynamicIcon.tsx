import React from "react";
import {
  Briefcase,
  UserCheck,
  Target,
  GraduationCap,
  Sparkles,
  Heart,
  ShoppingBag,
  Cpu,
  Layers,
  RefreshCw,
  ShieldCheck,
  BrainCircuit,
  Terminal,
  ShieldAlert,
  BadgeDollarSign,
  Zap,
  Smartphone,
  TrendingUp,
  MessageSquareText,
  LifeBuoy,
  ChevronDown,
  ChevronUp,
  Github,
  Linkedin,
  Phone,
  Mail,
  Menu,
  X,
  ArrowUpRight,
  Check,
  Award,
  Send,
  Eye,
  Sun,
  Moon,
  Trash2,
  FileText
} from "lucide-react";

interface DynamicIconProps {
  name: string;
  className?: string;
  size?: number;
}

const iconMap: Record<string, React.ComponentType<{ className?: string; size?: number }>> = {
  Briefcase,
  UserCheck,
  Target,
  GraduationCap,
  Sparkles,
  Heart,
  ShoppingBag,
  Cpu,
  Layers,
  RefreshCw,
  ShieldCheck,
  BrainCircuit,
  Terminal,
  ShieldAlert,
  BadgeDollarSign,
  Zap,
  Smartphone,
  TrendingUp,
  MessageSquareText,
  LifeBuoy,
  ChevronDown,
  ChevronUp,
  Github,
  Linkedin,
  Phone,
  Mail,
  Menu,
  X,
  ArrowUpRight,
  Check,
  Award,
  Send,
  Eye,
  Sun,
  Moon,
  Trash2,
  FileText
};

export const DynamicIcon: React.FC<DynamicIconProps> = ({ name, className = "", size }) => {
  const IconComponent = iconMap[name];
  if (!IconComponent) {
    // Fallback icon
    return <Sparkles className={className} size={size} />;
  }
  return <IconComponent className={className} size={size} />;
};
