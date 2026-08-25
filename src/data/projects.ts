export type ProjectCategory = 'Web' | 'Mobile' | 'Admin' | 'Desktop';

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory[];
  description: string;
  stack: string[];
  highlight: string;
  color: string;
  link?: string;
}

export const PROJECTS: Project[] = [
  {
    id: 'alert-dashboard',
    title: 'Real-Time Emergency Alert Dashboard',
    category: ['Web'],
    description: 'A live dispatch-console web app for monitoring emergency alerts on a map, with a simulated real-time feed and severity-based filtering.',
    stack: ['React', 'TypeScript', 'Leaflet'],
    highlight: 'Custom dispatch-console visual language built from scratch — not a template.',
    color: '#E5484D',
  },
  {
    id: 'safety-map',
    title: 'Public Safety Map',
    category: ['Web'],
    description: 'Incident density visualization with marker clustering and a heatmap toggle, plus a drill-down detail panel per report.',
    stack: ['React', 'TypeScript', 'Leaflet.heat'],
    highlight: 'Two rendering modes (cluster/heatmap) sharing one dataset and interaction model.',
    color: '#4FA3F7',
  },
  {
    id: 'incident-reporter',
    title: 'Community Incident Reporter',
    category: ['Mobile'],
    description: 'A React Native app for reporting local incidents with photo evidence, GPS tagging, and live Firestore sync.',
    stack: ['React Native', 'Expo', 'Firebase'],
    highlight: 'Firebase Storage + Firestore wired end-to-end, with security rules that lock down who can write what.',
    color: '#34C77B',
  },
  {
    id: 'alert-receiver',
    title: 'Offline-First Alert Receiver',
    category: ['Mobile'],
    description: 'A push-notification receiver app that stays useful without a connection — cached alerts, geofenced proximity warnings, and a bilingual UI.',
    stack: ['React Native', 'Expo', 'SQLite', 'FCM'],
    highlight: 'SQLite cache + Firestore sync means the app is never blank, online or off.',
    color: '#F5A623',
  },
  {
    id: 'ecommerce',
    title: 'Ecommerce Storefront + Admin',
    category: ['Web', 'Admin'],
    description: 'A full commerce build: a warm editorial storefront with cart and checkout, plus a dark admin console for inventory and order management.',
    stack: ['React', 'TypeScript', 'React Router'],
    highlight: 'Two intentionally distinct visual languages, one shared cart/order data model.',
    color: '#C1543D',
  },
  {
    id: 'notification-prefs',
    title: 'Notification Preference Center',
    category: ['Web'],
    description: 'An accessibility-first settings UI with real working high-contrast mode, reduced motion, and text scaling — not just cosmetic toggles.',
    stack: ['React', 'TypeScript'],
    highlight: 'Guardrails baked into the reducer: critical alert categories can\u2019t be silenced entirely.',
    color: '#4FA3F7',
  },
  {
    id: 'dispatcher-console',
    title: 'Dispatcher Console',
    category: ['Admin'],
    description: 'An auth-gated, server-rendered console for issuing and managing public emergency alerts.',
    stack: ['Next.js', 'TypeScript', 'Server Actions'],
    highlight: 'Middleware + layout-level auth checks, mutations via Server Actions with zero hand-written API routes.',
    color: '#F5A623',
  },
  {
    id: 'product-management',
    title: 'Product Management App',
    category: ['Web'],
    description: 'A combined roadmap + Kanban tool — quarterly initiative planning linked to the day-to-day task board.',
    stack: ['React', 'TypeScript'],
    highlight: 'Drag-and-drop with a genuine non-drag fallback: every card has keyboard-accessible move controls.',
    color: '#0F9B8E',
  },
];

export const CATEGORIES: ('All' | ProjectCategory)[] = ['All', 'Web', 'Mobile', 'Admin'];
