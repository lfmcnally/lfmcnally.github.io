import { useProject, genId } from '../../store/useProject';
import type {
  Block, TitleBlock, SceneBlock, RevealBlock, QuoteBlock, KeyPointBlock,
  CardGridBlock, NumberedListBlock, ImageBlock, BlackoutBlock, TwoColumnBlock, FooterBlock,
  CardItem, NumberedItem
} from '../../types/blocks';
import { fileToBase64 } from '../../utils/base64';

interface Props {
  block: Block;
}

function Field({ label, value, onChange, multiline, placeholder }: {
  label: string; value: string; onChange: (v: string) => void; multiline?: boolean; placeholder?: string;
}) {
  return (
    <div className="mb-2">
      <label className="block text-xs font-medium text-gray-500 mb-1">{label}</label>
      {multiline ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full text-sm border border-gray-200 rounded px-2 py-1.5 resize-y min-h-[60px] focus:outline-none focus:border-blue-400"
          rows={3}
        />
      ) : (
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full text-sm border border-gray-200 rounded px-2 py-1.5 focus:outline-none focus:border-blue-400"
        />
      )}
    </div>
  );
}

function TitleEditor({ block }: { block: TitleBlock }) {
  const updateBlock = useProject((s) => s.updateBlock);
  const u = (updates: Partial<TitleBlock>) => updateBlock(block.id, updates);
  return (
    <>
      <Field label="Title" value={block.title} onChange={(v) => u({ title: v })} placeholder="The Republic Dies" />
      <Field label="Subtitle" value={block.subtitle} onChange={(v) => u({ subtitle: v })} placeholder="A story of ambition..." />
      <Field label="Date/Context Line" value={block.dateLine} onChange={(v) => u({ dateLine: v })} placeholder="133 BC — 43 BC" />
      <label className="flex items-center gap-2 text-xs text-gray-600 mt-1">
        <input type="checkbox" checked={block.showEmbers} onChange={(e) => u({ showEmbers: e.target.checked })} />
        Show ember particles
      </label>
    </>
  );
}

function SceneEditor({ block }: { block: SceneBlock }) {
  const updateBlock = useProject((s) => s.updateBlock);
  const u = (updates: Partial<SceneBlock>) => updateBlock(block.id, updates);
  return (
    <>
      <Field label="Countdown" value={block.countdown} onChange={(v) => u({ countdown: v })} placeholder="20 months remain" />
      <Field label="Marker" value={block.marker} onChange={(v) => u({ marker: v })} placeholder="The Aftermath" />
      <Field label="Title" value={block.title} onChange={(v) => u({ title: v })} />
      <Field label="Body (HTML/Markdown)" value={block.body} onChange={(v) => u({ body: v })} multiline placeholder="Use <b>bold</b>, <i>italic</i>, <br> for line breaks" />
    </>
  );
}

function RevealEditor({ block }: { block: RevealBlock }) {
  const updateBlock = useProject((s) => s.updateBlock);
  const u = (updates: Partial<RevealBlock>) => updateBlock(block.id, updates);
  return (
    <>
      <Field label="Trigger Label" value={block.triggerLabel} onChange={(v) => u({ triggerLabel: v })} placeholder="Click to reveal..." />
      <Field label="Hidden Content (HTML)" value={block.hiddenContent} onChange={(v) => u({ hiddenContent: v })} multiline />
    </>
  );
}

function QuoteEditor({ block }: { block: QuoteBlock }) {
  const updateBlock = useProject((s) => s.updateBlock);
  const u = (updates: Partial<QuoteBlock>) => updateBlock(block.id, updates);
  return (
    <>
      <Field label="Quote Text" value={block.text} onChange={(v) => u({ text: v })} multiline />
      <Field label="Attribution" value={block.attribution} onChange={(v) => u({ attribution: v })} placeholder="— Cicero" />
      <div className="mb-2">
        <label className="block text-xs font-medium text-gray-500 mb-1">Style</label>
        <select
          value={block.style}
          onChange={(e) => u({ style: e.target.value as 'primary' | 'secondary' })}
          className="text-sm border border-gray-200 rounded px-2 py-1.5 focus:outline-none focus:border-blue-400"
        >
          <option value="primary">Primary (accent colour)</option>
          <option value="secondary">Secondary (alt colour)</option>
        </select>
      </div>
    </>
  );
}

function KeyPointEditor({ block }: { block: KeyPointBlock }) {
  const updateBlock = useProject((s) => s.updateBlock);
  return (
    <Field label="Text" value={block.text} onChange={(v) => updateBlock(block.id, { text: v })} multiline placeholder="The key takeaway..." />
  );
}

function CardGridEditor({ block }: { block: CardGridBlock }) {
  const updateBlock = useProject((s) => s.updateBlock);
  const updateCard = (cardId: string, updates: Partial<CardItem>) => {
    updateBlock(block.id, {
      cards: block.cards.map((c) => (c.id === cardId ? { ...c, ...updates } : c)),
    });
  };
  const addCard = () => {
    if (block.cards.length >= 4) return;
    updateBlock(block.id, {
      cards: [...block.cards, { id: genId(), name: '', subtitle: '', body: '', detail: '' }],
    });
  };
  const removeCard = (cardId: string) => {
    updateBlock(block.id, { cards: block.cards.filter((c) => c.id !== cardId) });
  };

  return (
    <>
      {block.cards.map((card, i) => (
        <div key={card.id} className="border border-gray-200 rounded p-2 mb-2">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-medium text-gray-400">Card {i + 1}</span>
            <button onClick={() => removeCard(card.id)} className="text-xs text-red-400 hover:text-red-600">Remove</button>
          </div>
          <Field label="Name" value={card.name} onChange={(v) => updateCard(card.id, { name: v })} />
          <Field label="Subtitle" value={card.subtitle} onChange={(v) => updateCard(card.id, { subtitle: v })} />
          <Field label="Body" value={card.body} onChange={(v) => updateCard(card.id, { body: v })} multiline />
          <Field label="Expanded Detail" value={card.detail} onChange={(v) => updateCard(card.id, { detail: v })} multiline />
        </div>
      ))}
      {block.cards.length < 4 && (
        <button onClick={addCard} className="text-xs text-blue-500 hover:text-blue-700">+ Add Card</button>
      )}
    </>
  );
}

function NumberedListEditor({ block }: { block: NumberedListBlock }) {
  const updateBlock = useProject((s) => s.updateBlock);
  const updateItem = (itemId: string, updates: Partial<NumberedItem>) => {
    updateBlock(block.id, {
      items: block.items.map((it) => (it.id === itemId ? { ...it, ...updates } : it)),
    });
  };
  const addItem = () => {
    updateBlock(block.id, {
      items: [...block.items, { id: genId(), title: '', details: '' }],
    });
  };
  const removeItem = (itemId: string) => {
    updateBlock(block.id, { items: block.items.filter((it) => it.id !== itemId) });
  };

  return (
    <>
      {block.items.map((item, i) => (
        <div key={item.id} className="border border-gray-200 rounded p-2 mb-2">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-medium text-gray-400">Item {i + 1}</span>
            <button onClick={() => removeItem(item.id)} className="text-xs text-red-400 hover:text-red-600">Remove</button>
          </div>
          <Field label="Title" value={item.title} onChange={(v) => updateItem(item.id, { title: v })} />
          <Field label="Details (HTML)" value={item.details} onChange={(v) => updateItem(item.id, { details: v })} multiline />
        </div>
      ))}
      <button onClick={addItem} className="text-xs text-blue-500 hover:text-blue-700">+ Add Item</button>
    </>
  );
}

function ImageEditor({ block }: { block: ImageBlock }) {
  const updateBlock = useProject((s) => s.updateBlock);
  const handleFile = async (file: File) => {
    const dataUrl = await fileToBase64(file);
    updateBlock(block.id, { dataUrl });
  };
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) handleFile(file);
  };

  return (
    <>
      <div
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center mb-2 cursor-pointer hover:border-blue-400"
        onClick={() => {
          const input = document.createElement('input');
          input.type = 'file';
          input.accept = 'image/*';
          input.onchange = (e) => {
            const file = (e.target as HTMLInputElement).files?.[0];
            if (file) handleFile(file);
          };
          input.click();
        }}
      >
        {block.dataUrl ? (
          <img src={block.dataUrl} alt="" className="max-h-32 mx-auto rounded" />
        ) : (
          <p className="text-xs text-gray-400">Drag & drop or click to select an image</p>
        )}
      </div>
      <Field label="Caption" value={block.caption} onChange={(v) => updateBlock(block.id, { caption: v })} placeholder="Optional caption" />
    </>
  );
}

function BlackoutEditor({ block }: { block: BlackoutBlock }) {
  const updateBlock = useProject((s) => s.updateBlock);
  return <Field label="Text" value={block.text} onChange={(v) => updateBlock(block.id, { text: v })} placeholder="A single dramatic line..." />;
}

function TwoColumnEditor({ block }: { block: TwoColumnBlock }) {
  const updateBlock = useProject((s) => s.updateBlock);
  const u = (updates: Partial<TwoColumnBlock>) => updateBlock(block.id, updates);
  return (
    <>
      <div className="grid grid-cols-2 gap-2">
        <div>
          <Field label="Left Header" value={block.leftHeader} onChange={(v) => u({ leftHeader: v })} />
          <div className="mb-2">
            <label className="block text-xs font-medium text-gray-500 mb-1">Left Header Color</label>
            <input type="color" value={block.leftColor || '#2d5a2d'} onChange={(e) => u({ leftColor: e.target.value })} className="w-8 h-6 border rounded cursor-pointer" />
          </div>
          <Field label="Left Body (HTML)" value={block.leftBody} onChange={(v) => u({ leftBody: v })} multiline />
        </div>
        <div>
          <Field label="Right Header" value={block.rightHeader} onChange={(v) => u({ rightHeader: v })} />
          <div className="mb-2">
            <label className="block text-xs font-medium text-gray-500 mb-1">Right Header Color</label>
            <input type="color" value={block.rightColor || '#8a2a2a'} onChange={(e) => u({ rightColor: e.target.value })} className="w-8 h-6 border rounded cursor-pointer" />
          </div>
          <Field label="Right Body (HTML)" value={block.rightBody} onChange={(v) => u({ rightBody: v })} multiline />
        </div>
      </div>
    </>
  );
}

function FooterEditor({ block }: { block: FooterBlock }) {
  const updateBlock = useProject((s) => s.updateBlock);
  return <Field label="Text" value={block.text} onChange={(v) => updateBlock(block.id, { text: v })} placeholder="Tiberius Gracchus • 133 BC" />;
}

const BLOCK_LABELS: Record<string, string> = {
  title: '🎬 Title Screen',
  scene: '📜 Scene Section',
  reveal: '👁 Reveal Block',
  quote: '❝ Quote',
  keypoint: '⚡ Key Point',
  cardgrid: '🃏 Card Grid',
  numberedlist: '🔢 Numbered List',
  image: '🖼 Image',
  blackout: '⬛ Blackout',
  divider: '│ Divider',
  twocolumn: '▥ Two-Column Table',
  footer: '▬ Footer',
};

export function BlockEditor({ block }: Props) {
  const { removeBlock, duplicateBlock, moveBlock } = useProject();
  const blocks = useProject((s) => s.project.blocks);
  const idx = blocks.findIndex((b) => b.id === block.id);

  const handleRemove = () => {
    if (confirm('Delete this block?')) removeBlock(block.id);
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg mb-2 overflow-hidden">
      <div className="flex items-center justify-between px-3 py-2 bg-gray-50 border-b border-gray-100">
        <span className="text-xs font-medium text-gray-600">{BLOCK_LABELS[block.type] || block.type}</span>
        <div className="flex items-center gap-1">
          <button
            onClick={() => idx > 0 && moveBlock(idx, idx - 1)}
            disabled={idx <= 0}
            className="text-xs text-gray-400 hover:text-gray-600 disabled:opacity-30 px-1"
            title="Move up"
          >▲</button>
          <button
            onClick={() => idx < blocks.length - 1 && moveBlock(idx, idx + 1)}
            disabled={idx >= blocks.length - 1}
            className="text-xs text-gray-400 hover:text-gray-600 disabled:opacity-30 px-1"
            title="Move down"
          >▼</button>
          <button onClick={() => duplicateBlock(block.id)} className="text-xs text-gray-400 hover:text-blue-500 px-1" title="Duplicate">⧉</button>
          <button onClick={handleRemove} className="text-xs text-gray-400 hover:text-red-500 px-1" title="Delete">✕</button>
        </div>
      </div>
      <div className="p-3">
        {block.type === 'title' && <TitleEditor block={block} />}
        {block.type === 'scene' && <SceneEditor block={block} />}
        {block.type === 'reveal' && <RevealEditor block={block} />}
        {block.type === 'quote' && <QuoteEditor block={block} />}
        {block.type === 'keypoint' && <KeyPointEditor block={block} />}
        {block.type === 'cardgrid' && <CardGridEditor block={block} />}
        {block.type === 'numberedlist' && <NumberedListEditor block={block} />}
        {block.type === 'image' && <ImageEditor block={block} />}
        {block.type === 'blackout' && <BlackoutEditor block={block} />}
        {block.type === 'divider' && <p className="text-xs text-gray-400 italic">No settings — renders as a thin red line.</p>}
        {block.type === 'twocolumn' && <TwoColumnEditor block={block} />}
        {block.type === 'footer' && <FooterEditor block={block} />}
      </div>
    </div>
  );
}
