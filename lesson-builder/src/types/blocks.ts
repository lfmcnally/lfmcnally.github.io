export type BlockType =
  | 'title'
  | 'scene'
  | 'reveal'
  | 'quote'
  | 'keypoint'
  | 'cardgrid'
  | 'numberedlist'
  | 'image'
  | 'blackout'
  | 'divider'
  | 'twocolumn'
  | 'footer';

export interface BaseBlock {
  id: string;
  type: BlockType;
}

export interface TitleBlock extends BaseBlock {
  type: 'title';
  title: string;
  subtitle: string;
  dateLine: string;
  showEmbers: boolean;
}

export interface SceneBlock extends BaseBlock {
  type: 'scene';
  countdown: string;
  marker: string;
  title: string;
  body: string;
}

export interface RevealBlock extends BaseBlock {
  type: 'reveal';
  triggerLabel: string;
  hiddenContent: string;
}

export interface QuoteBlock extends BaseBlock {
  type: 'quote';
  text: string;
  attribution: string;
  style: 'primary' | 'secondary';
}

export interface KeyPointBlock extends BaseBlock {
  type: 'keypoint';
  text: string;
}

export interface CardItem {
  id: string;
  name: string;
  subtitle: string;
  body: string;
  detail: string;
}

export interface CardGridBlock extends BaseBlock {
  type: 'cardgrid';
  cards: CardItem[];
}

export interface NumberedItem {
  id: string;
  title: string;
  details: string;
}

export interface NumberedListBlock extends BaseBlock {
  type: 'numberedlist';
  items: NumberedItem[];
}

export interface ImageBlock extends BaseBlock {
  type: 'image';
  dataUrl: string;
  caption: string;
}

export interface BlackoutBlock extends BaseBlock {
  type: 'blackout';
  text: string;
}

export interface DividerBlock extends BaseBlock {
  type: 'divider';
}

export interface TwoColumnBlock extends BaseBlock {
  type: 'twocolumn';
  leftHeader: string;
  rightHeader: string;
  leftBody: string;
  rightBody: string;
  leftColor: string;
  rightColor: string;
}

export interface FooterBlock extends BaseBlock {
  type: 'footer';
  text: string;
}

export type Block =
  | TitleBlock
  | SceneBlock
  | RevealBlock
  | QuoteBlock
  | KeyPointBlock
  | CardGridBlock
  | NumberedListBlock
  | ImageBlock
  | BlackoutBlock
  | DividerBlock
  | TwoColumnBlock
  | FooterBlock;

export interface Project {
  id: string;
  name: string;
  theme: string;
  blocks: Block[];
  updatedAt: number;
}
