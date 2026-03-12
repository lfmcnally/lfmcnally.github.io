import { useState } from 'react';
import { useProject } from './store/useProject';
import { EditorPanel } from './components/editor/EditorPanel';
import { PreviewFrame } from './components/preview/PreviewFrame';
import { Toolbar } from './components/editor/Toolbar';

export default function App() {
  const [previewCollapsed, setPreviewCollapsed] = useState(false);

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      <Toolbar />
      <div className="flex-1 flex overflow-hidden">
        <div className={`${previewCollapsed ? 'flex-1' : 'w-1/2'} flex flex-col border-r border-gray-200 overflow-hidden`}>
          <EditorPanel />
        </div>
        {!previewCollapsed && (
          <div className="w-1/2 flex flex-col overflow-hidden">
            <PreviewFrame />
          </div>
        )}
        <button
          onClick={() => setPreviewCollapsed(!previewCollapsed)}
          className="absolute right-2 bottom-2 z-50 bg-white border border-gray-300 rounded-full w-8 h-8 flex items-center justify-center text-gray-500 hover:bg-gray-100 shadow-sm text-xs"
          title={previewCollapsed ? 'Show preview' : 'Hide preview'}
        >
          {previewCollapsed ? '◀' : '▶'}
        </button>
      </div>
    </div>
  );
}
