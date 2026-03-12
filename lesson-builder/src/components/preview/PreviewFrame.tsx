import { useEffect, useRef, useMemo } from 'react';
import { useProject } from '../../store/useProject';
import { generateHTML } from '../../export/generateHTML';

export function PreviewFrame() {
  const project = useProject((s) => s.project);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const html = useMemo(() => generateHTML(project), [project]);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;
    const doc = iframe.contentDocument;
    if (!doc) return;
    const scrollTop = doc.documentElement?.scrollTop || 0;
    doc.open();
    doc.write(html);
    doc.close();
    // Restore scroll position
    requestAnimationFrame(() => {
      if (doc.documentElement) doc.documentElement.scrollTop = scrollTop;
    });
  }, [html]);

  return (
    <div className="flex-1 flex flex-col bg-[#06060a] overflow-hidden">
      <div className="px-3 py-1.5 bg-[#0b0b12] border-b border-[#1a1520] flex items-center">
        <span className="text-[10px] text-[#4a4440] font-mono">PREVIEW</span>
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
