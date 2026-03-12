import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Block, Project } from '../types/blocks';

let _nextId = 1;
function genId(): string {
  return `b${Date.now()}-${_nextId++}`;
}

export { genId };

interface ProjectStore {
  project: Project;
  savedProjects: Project[];

  setProjectName: (name: string) => void;
  setTheme: (theme: string) => void;
  addBlock: (block: Block, index?: number) => void;
  updateBlock: (id: string, updates: Partial<Block>) => void;
  removeBlock: (id: string) => void;
  moveBlock: (fromIndex: number, toIndex: number) => void;
  duplicateBlock: (id: string) => void;

  newProject: () => void;
  saveProject: () => void;
  loadProject: (id: string) => void;
  deleteProject: (id: string) => void;
  loadFromBlocks: (name: string, blocks: Block[]) => void;
}

function createEmptyProject(): Project {
  return {
    id: `p${Date.now()}`,
    name: 'Untitled Presentation',
    theme: 'clean',
    blocks: [],
    updatedAt: Date.now(),
  };
}

export const useProject = create<ProjectStore>()(
  persist(
    (set, get) => ({
      project: createEmptyProject(),
      savedProjects: [],

      setProjectName: (name) =>
        set((s) => ({ project: { ...s.project, name, updatedAt: Date.now() } })),

      setTheme: (theme) =>
        set((s) => ({ project: { ...s.project, theme, updatedAt: Date.now() } })),

      addBlock: (block, index) =>
        set((s) => {
          const blocks = [...s.project.blocks];
          if (index !== undefined) {
            blocks.splice(index, 0, block);
          } else {
            blocks.push(block);
          }
          return { project: { ...s.project, blocks, updatedAt: Date.now() } };
        }),

      updateBlock: (id, updates) =>
        set((s) => ({
          project: {
            ...s.project,
            blocks: s.project.blocks.map((b) =>
              b.id === id ? ({ ...b, ...updates } as Block) : b
            ),
            updatedAt: Date.now(),
          },
        })),

      removeBlock: (id) =>
        set((s) => ({
          project: {
            ...s.project,
            blocks: s.project.blocks.filter((b) => b.id !== id),
            updatedAt: Date.now(),
          },
        })),

      moveBlock: (fromIndex, toIndex) =>
        set((s) => {
          const blocks = [...s.project.blocks];
          const [moved] = blocks.splice(fromIndex, 1);
          blocks.splice(toIndex, 0, moved);
          return { project: { ...s.project, blocks, updatedAt: Date.now() } };
        }),

      duplicateBlock: (id) =>
        set((s) => {
          const idx = s.project.blocks.findIndex((b) => b.id === id);
          if (idx === -1) return s;
          const original = s.project.blocks[idx];
          const copy = { ...original, id: genId() };
          const blocks = [...s.project.blocks];
          blocks.splice(idx + 1, 0, copy as Block);
          return { project: { ...s.project, blocks, updatedAt: Date.now() } };
        }),

      newProject: () => set({ project: createEmptyProject() }),

      saveProject: () =>
        set((s) => {
          const proj = { ...s.project, updatedAt: Date.now() };
          const existing = s.savedProjects.findIndex((p) => p.id === proj.id);
          const saved = [...s.savedProjects];
          if (existing >= 0) {
            saved[existing] = proj;
          } else {
            saved.push(proj);
          }
          return { project: proj, savedProjects: saved };
        }),

      loadProject: (id) =>
        set((s) => {
          const proj = s.savedProjects.find((p) => p.id === id);
          if (proj) return { project: { ...proj } };
          return s;
        }),

      deleteProject: (id) =>
        set((s) => ({
          savedProjects: s.savedProjects.filter((p) => p.id !== id),
        })),

      loadFromBlocks: (name, blocks) =>
        set({
          project: {
            id: `p${Date.now()}`,
            name,
            blocks,
            updatedAt: Date.now(),
          },
        }),
    }),
    {
      name: 'lesson-builder-storage',
    }
  )
);
