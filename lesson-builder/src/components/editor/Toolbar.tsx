import { useState } from 'react';
import { useProject } from '../../store/useProject';
import { generateHTML } from '../../export/generateHTML';
import { THEMES } from '../../types/themes';
import type { ThemeId } from '../../types/themes';

const THEME_LIST = Object.values(THEMES);

export function Toolbar() {
  const { project, setProjectName, setTheme, saveProject, newProject, loadProject, deleteProject, savedProjects } = useProject();
  const [showSaved, setShowSaved] = useState(false);
  const [showThemes, setShowThemes] = useState(false);

  const handleExport = () => {
    const html = generateHTML(project);
    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${project.name.replace(/[^a-z0-9]/gi, '-').toLowerCase()}.html`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleNew = () => {
    if (project.blocks.length > 0 && !confirm('Start a new project? Unsaved changes will be lost.')) return;
    newProject();
  };

  return (
    <div className="bg-white border-b border-gray-200 px-4 py-2 flex items-center gap-3 shrink-0">
      <h1 className="font-semibold text-gray-800 text-sm whitespace-nowrap">Lesson Builder</h1>
      <div className="h-4 w-px bg-gray-300" />
      <input
        type="text"
        value={project.name}
        onChange={(e) => setProjectName(e.target.value)}
        className="text-sm border border-gray-200 rounded px-2 py-1 flex-1 max-w-xs focus:outline-none focus:border-blue-400"
      />
      <div className="relative">
        <button
          onClick={() => setShowThemes(!showThemes)}
          className="text-xs px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded text-gray-700 flex items-center gap-1.5"
        >
          <span className="w-3 h-3 rounded-full border border-gray-300" style={{ background: THEMES[(project.theme || 'clean') as ThemeId]?.colors.accent || '#1a73e8' }} />
          {THEMES[(project.theme || 'clean') as ThemeId]?.name || 'Clean'}
        </button>
        {showThemes && (
          <div className="absolute left-0 top-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 w-56">
            {THEME_LIST.map((t) => (
              <button
                key={t.id}
                onClick={() => { setTheme(t.id); setShowThemes(false); }}
                className={`w-full text-left px-3 py-2 hover:bg-gray-50 border-b border-gray-100 last:border-0 flex items-center gap-2 ${project.theme === t.id ? 'bg-blue-50' : ''}`}
              >
                <span className="w-4 h-4 rounded-full border border-gray-200 flex-shrink-0" style={{ background: t.colors.bg }}>
                  <span className="block w-2 h-2 rounded-full mt-1 ml-1" style={{ background: t.colors.accent }} />
                </span>
                <div>
                  <div className="text-xs font-medium text-gray-700">{t.name}</div>
                  <div className="text-[10px] text-gray-400">{t.description}</div>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
      <div className="flex items-center gap-1.5 ml-auto">
        <button onClick={handleNew} className="text-xs px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded text-gray-700">
          New
        </button>
        <button onClick={saveProject} className="text-xs px-3 py-1.5 bg-blue-500 hover:bg-blue-600 text-white rounded">
          Save
        </button>
        <div className="relative">
          <button onClick={() => setShowSaved(!showSaved)} className="text-xs px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded text-gray-700">
            Load
          </button>
          {showSaved && (
            <div className="absolute right-0 top-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 w-64 max-h-64 overflow-auto">
              {savedProjects.length === 0 ? (
                <div className="p-3 text-xs text-gray-400">No saved projects</div>
              ) : (
                savedProjects.map((p) => (
                  <div key={p.id} className="flex items-center justify-between px-3 py-2 hover:bg-gray-50 border-b border-gray-100 last:border-0">
                    <button
                      onClick={() => { loadProject(p.id); setShowSaved(false); }}
                      className="text-xs text-gray-700 text-left flex-1 truncate"
                    >
                      {p.name}
                    </button>
                    <button
                      onClick={(e) => { e.stopPropagation(); deleteProject(p.id); }}
                      className="text-xs text-red-400 hover:text-red-600 ml-2"
                    >
                      ✕
                    </button>
                  </div>
                ))
              )}
            </div>
          )}
        </div>
        <button onClick={handleExport} className="text-xs px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded">
          Export HTML
        </button>
      </div>
    </div>
  );
}
