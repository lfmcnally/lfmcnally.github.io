import type { BlockType } from '../../types/blocks';

const BLOCK_TYPES: { type: BlockType; label: string; icon: string; desc: string }[] = [
  { type: 'title', label: 'Title Screen', icon: '🎬', desc: 'Opening title with typewriter effect' },
  { type: 'scene', label: 'Scene Section', icon: '📜', desc: 'Main content section with scroll reveal' },
  { type: 'reveal', label: 'Reveal Block', icon: '👁', desc: 'Click-to-expand accordion' },
  { type: 'quote', label: 'Quote', icon: '❝', desc: 'Styled quote with attribution' },
  { type: 'keypoint', label: 'Key Point', icon: '⚡', desc: 'Centered emphasis block' },
  { type: 'cardgrid', label: 'Card Grid', icon: '🃏', desc: 'Expandable cards (2-4)' },
  { type: 'numberedlist', label: 'Numbered List', icon: '🔢', desc: 'Expandable numbered items' },
  { type: 'image', label: 'Image', icon: '🖼', desc: 'Embedded image with caption' },
  { type: 'blackout', label: 'Blackout', icon: '⬛', desc: 'Dramatic pause screen' },
  { type: 'divider', label: 'Divider', icon: '│', desc: 'Thin red line separator' },
  { type: 'twocolumn', label: 'Two-Column Table', icon: '▥', desc: 'Side-by-side comparison' },
  { type: 'footer', label: 'Footer', icon: '▬', desc: 'Small centered text' },
];

interface Props {
  onSelect: (type: BlockType) => void;
  onClose: () => void;
  existingTypes: BlockType[];
}

export function BlockPalette({ onSelect, onClose, existingTypes }: Props) {
  const hasTitleBlock = existingTypes.includes('title');

  return (
    <div className="fixed inset-0 bg-black/20 z-50 flex items-center justify-center" onClick={onClose}>
      <div className="bg-white rounded-xl shadow-xl p-4 w-[480px] max-h-[80vh] overflow-auto" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold text-gray-800 text-sm">Add Block</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">✕</button>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {BLOCK_TYPES.map((bt) => {
            const disabled = bt.type === 'title' && hasTitleBlock;
            return (
              <button
                key={bt.type}
                onClick={() => { if (!disabled) onSelect(bt.type); }}
                disabled={disabled}
                className={`text-left p-3 rounded-lg border transition ${
                  disabled
                    ? 'border-gray-100 bg-gray-50 text-gray-300 cursor-not-allowed'
                    : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="text-lg">{bt.icon}</span>
                  <span className="text-sm font-medium text-gray-700">{bt.label}</span>
                </div>
                <p className="text-xs text-gray-400 mt-1">{bt.desc}</p>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
