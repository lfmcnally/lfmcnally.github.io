import { useEffect, useRef, useMemo } from 'react';
import { useProject } from '../../store/useProject';
import { generateHTML } from '../../export/generateHTML';
import { THEMES } from '../../types/themes';
import type { ThemeId } from '../../types/themes';

export function PreviewFrame() {
  const project = useProject((s) => s.project);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const themeId = (project.theme || 'clean') as ThemeId;
  const theme = THEMES[themeId] || THEMES.clean;

  const html = useMemo(() => generateHTML(project, { preview: true }), [project]);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;
    const doc = iframe.contentDocument;
    if (!doc) return;
    const scrollTop = doc.documentElement?.scrollTop || 0;
    doc.open();
    doc.write(html);
    doc.close();
    requestAnimationFrame(() => {
      if (doc.documentElement) doc.documentElement.scrollTop = scrollTop;
    });
  }, [html]);

  return (
    <div className="flex-1 flex flex-col overflow-hidden" style={{ background: theme.colors.bg }}>
      <div className="px-3 py-1.5 flex items-center border-b" style={{ background: theme.colors.bgSection, borderColor: theme.colors.border }}>
        <span className="text-[10px] font-mono" style={{ color: theme.colors.textDim }}>PREVIEW</span>
      </div>
      <iframe
        ref={iframeRef}
        className="flex-1 w-full border-0"
        title="Preview"
        sandbox="allow-scripts allow-same-origin"
      />
    </div>
  );
}
