import {
  LayoutDashboard,
  FolderKanban,
  CalendarDays,
  Users,
  Settings,
  CheckCircle2,
  Clock,
  TrendingUp,
} from 'lucide-react';

// A purely visual dashboard preview built with HTML + CSS (no images needed).
const SIDEBAR = [LayoutDashboard, FolderKanban, CalendarDays, Users, Settings];
const CHART = [
  { day: 'Mon', value: 45 },
  { day: 'Tue', value: 62 },
  { day: 'Wed', value: 54 },
  { day: 'Thu', value: 78 },
  { day: 'Fri', value: 92 },
  { day: 'Sat', value: 38 },
  { day: 'Sun', value: 30 },
];
const TASKS = [
  { title: 'Finalize launch roadmap', status: 'Done', tone: 'done', progress: 100 },
  { title: 'Design onboarding flow', status: 'In review', tone: 'review', progress: 75 },
  { title: 'API integration tests', status: 'In progress', tone: 'progress', progress: 40 },
];

export default function DashboardMockup() {
  return (
    <div className="mockup" role="img" aria-label="Preview of the NexaFlow project dashboard">
      <div className="mockup__window">
        <div className="mockup__topbar">
          <span className="mockup__dots">
            <i />
            <i />
            <i />
          </span>
          <span className="mockup__url">app.nexaflow.io/dashboard</span>
        </div>

        <div className="mockup__body">
          <aside className="mockup__sidebar">
            {SIDEBAR.map((Icon, index) => (
              <span key={index} className={index === 0 ? 'is-active' : ''}>
                <Icon size={18} />
              </span>
            ))}
          </aside>

          <div className="mockup__main">
            <div className="mockup__header">
              <div>
                <strong>Q4 Product Launch</strong>
                <small>12 members · Due Dec 18</small>
              </div>
              <span className="mockup__avatars">
                <i>AK</i>
                <i>MJ</i>
                <i>SR</i>
              </span>
            </div>

            <div className="mockup__stats">
              <div>
                <small>Completed</small>
                <strong>128</strong>
                <em className="up">+12%</em>
              </div>
              <div>
                <small>In progress</small>
                <strong>24</strong>
                <em>this week</em>
              </div>
              <div>
                <small>On track</small>
                <strong>92%</strong>
                <em className="up">+4%</em>
              </div>
            </div>

            <div className="mockup__panels">
              <div className="mockup__chart">
                <small>Tasks completed</small>
                <div className="mockup__bars">
                  {CHART.map(({ day, value }) => (
                    <span key={day}>
                      <i style={{ height: `${value}%` }} />
                      <b>{day}</b>
                    </span>
                  ))}
                </div>
              </div>

              <ul className="mockup__tasks">
                {TASKS.map((task) => (
                  <li key={task.title}>
                    <div>
                      <span>{task.title}</span>
                      <em className={`pill pill--${task.tone}`}>{task.status}</em>
                    </div>
                    <span className="mockup__progress">
                      <i style={{ width: `${task.progress}%` }} />
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mockup__float mockup__float--top">
        <CheckCircle2 size={20} />
        <div>
          <strong>Design review approved</strong>
          <small>2 minutes ago</small>
        </div>
      </div>

      <div className="mockup__float mockup__float--bottom">
        <span className="mockup__float-icon">
          <TrendingUp size={18} />
        </span>
        <div>
          <strong>Sprint velocity +18%</strong>
          <small>
            <Clock size={12} /> vs. last sprint
          </small>
        </div>
      </div>
    </div>
  );
}
