import { useState } from 'react';
import { useProject } from '../../store/useProject';
import { generateHTML } from '../../export/generateHTML';

export function Toolbar() {
  const { project, setProjectName, saveProject, newProject, loadProject, deleteProject, savedProjects } = useProject();
  const [showSaved, setShowSaved] = useState(false);

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
