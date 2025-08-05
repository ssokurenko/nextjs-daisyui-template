import ThemeSwitch from './ThemeSwitch';

export default function Navigation() {
  return (
    <div className="navbar bg-base-100 shadow-lg">
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl font-bold">Teleprompter Space</a>
      </div>
      <div className="navbar-end">
        <ThemeSwitch />
      </div>
    </div>
  );
}