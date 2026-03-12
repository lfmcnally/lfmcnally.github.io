import { useState } from 'react';
import { useProject, genId } from '../../store/useProject';
import { BlockEditor } from './BlockEditor';
import { BlockPalette } from './BlockPalette';
import type { Block, BlockType } from '../../types/blocks';

function createDefaultBlock(type: BlockType): Block {
  const id = genId();
  switch (type) {
    case 'title': return { id, type, title: '', subtitle: '', dateLine: '', showEmbers: true };
    case 'scene': return { id, type, countdown: '', marker: '', title: '', body: '' };
    case 'reveal': return { id, type, triggerLabel: 'Click to reveal', hiddenContent: '' };
    case 'quote': return { id, type, text: '', attribution: '', style: 'primary' };
    case 'keypoint': return { id, type, text: '' };
    case 'cardgrid': return { id, type, cards: [{ id: genId(), name: '', subtitle: '', body: '', detail: '' }] };
    case 'numberedlist': return { id, type, items: [{ id: genId(), title: '', details: '' }] };
    case 'image': return { id, type, dataUrl: '', caption: '' };
    case 'blackout': return { id, type, text: '' };
    case 'divider': return { id, type };
    case 'twocolumn': return { id, type, leftHeader: '', rightHeader: '', leftBody: '', rightBody: '', leftColor: '#2d5a2d', rightColor: '#8a2a2a' };
    case 'footer': return { id, type, text: '' };
  }
}

export function EditorPanel() {
  const { project, addBlock } = useProject();
  const [showPalette, setShowPalette] = useState(false);
  const [insertIndex, setInsertIndex] = useState<number | undefined>(undefined);

  const handleAddBlock = (type: BlockType) => {
    const block = createDefaultBlock(type);
    // Title blocks always go first
    if (type === 'title') {
      addBlock(block, 0);
    } else {
      addBlock(block, insertIndex);
    }
    setShowPalette(false);
    setInsertIndex(undefined);
  };

  const openPaletteAt = (index?: number) => {
    setInsertIndex(index);
    setShowPalette(true);
  };

  return (
    <div className="flex-1 overflow-auto p-4">
      {project.blocks.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-full text-gray-400">
          <p className="text-sm mb-3">No blocks yet. Start building your lesson.</p>
          <button
            onClick={() => openPaletteAt()}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm hover:bg-blue-600"
          >
            + Add First Block
          </button>
        </div>
      ) : (
        <>
          {project.blocks.map((block, i) => (
            <div key={block.id}>
              {i === 0 && (
                <div className="flex justify-center mb-1">
                  <button
                    onClick={() => openPaletteAt(0)}
                    className="text-xs text-gray-300 hover:text-blue-500 py-0.5"
                  >+ Insert above</button>
                </div>
              )}
              <BlockEditor block={block} />
              <div className="flex justify-center mb-1">
                <button
                  onClick={() => openPaletteAt(i + 1)}
                  className="text-xs text-gray-300 hover:text-blue-500 py-0.5"
                >+</button>
              </div>
            </div>
          ))}
        </>
      )}
      {showPalette && (
        <BlockPalette
          onSelect={handleAddBlock}
          onClose={() => setShowPalette(false)}
          existingTypes={project.blocks.map((b) => b.type)}
        />
      )}
    </div>
  );
}
