// All page copy lives here so components stay focused on layout and behaviour.
import {
  ListChecks,
  TrendingUp,
  Users,
  BarChart3,
  Zap,
  ShieldCheck,
  FolderPlus,
  ClipboardList,
  Rocket,
} from 'lucide-react';

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
];

export const FEATURES = [
  {
    icon: ListChecks,
    title: 'Smart Task Management',
    text: 'Create, prioritise and assign tasks in seconds. Due dates, labels and subtasks keep every to-do clear.',
  },
  {
    icon: TrendingUp,
    title: 'Project Progress Tracking',
    text: 'Follow every project on boards and timelines with live progress bars, milestones and deadline alerts.',
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    text: 'Comment on tasks, mention teammates and share files in context, so decisions never get lost in chat.',
  },
  {
    icon: BarChart3,
    title: 'Productivity Analytics',
    text: 'Spot bottlenecks early with workload, velocity and completion reports generated automatically.',
  },
  {
    icon: Zap,
    title: 'Workflow Automation',
    text: 'Move cards, notify owners and update statuses with simple rules instead of repetitive manual work.',
  },
  {
    icon: ShieldCheck,
    title: 'Secure by Default',
    text: 'Role-based permissions, encrypted data and daily backups keep your team’s work safe and private.',
  },
];

export const STEPS = [
  {
    icon: FolderPlus,
    title: 'Create your workspace',
    text: 'Sign up free, name your workspace and invite teammates by email in under two minutes.',
  },
  {
    icon: ClipboardList,
    title: 'Plan and assign work',
    text: 'Break projects into tasks, set priorities and deadlines, and give every task a clear owner.',
  },
  {
    icon: Rocket,
    title: 'Track and deliver',
    text: 'Watch progress update in real time, review analytics and ship projects on schedule.',
  },
];

export const STATS = [
  { value: '10k+', label: 'teams organised' },
  { value: '38%', label: 'fewer missed deadlines' },
  { value: '6 hrs', label: 'saved per person weekly' },
];

export const PLANS = [
  {
    id: 'starter',
    name: 'Starter',
    price: 'Free',
    period: 'forever',
    description: 'For individuals and small teams getting organised.',
    features: [
      'Up to 5 team members',
      '3 active projects',
      'Kanban boards and task lists',
      'Basic progress tracking',
      'Community support',
    ],
    cta: 'Start for Free',
    recommended: false,
  },
  {
    id: 'professional',
    name: 'Professional',
    price: '$12',
    period: 'per month',
    description: 'For growing teams that need visibility and speed.',
    features: [
      'Unlimited team members',
      'Unlimited projects',
      'Timelines and milestones',
      'Productivity analytics dashboard',
      'Workflow automation rules',
      'Priority email and chat support',
    ],
    cta: 'Choose Professional',
    recommended: true,
  },
];

// Values used by the plan dropdown in the demo request form.
export const PLAN_OPTIONS = [
  { value: '', label: 'Not sure yet' },
  { value: 'starter', label: 'Starter (Free)' },
  { value: 'professional', label: 'Professional ($12/month)' },
];
