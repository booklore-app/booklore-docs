import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation
 
 The sidebars can be generated from the filesystem, or explicitly defined here.
 
 Create as many sidebars as you want..
 */
const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'getting-started',
      label: '🚀 Getting Started',
    },
    {
      type: 'doc',
      id: 'installation',
      label: '🛠️ Installation',
    },
    {
      type: 'doc',
      id: 'initial-setup',
      label: '👤 Setup Admin User',
    },
    {
      type: 'category',
      label: '🏛️ Library',
      collapsed: false,
      items: ['library/setup-first-library', 'library/edit-library'],
    },
    {
      type: 'doc',
      id: 'shelf',
      label: '🗂️ Shelf',
    },
    {
      type: 'category',
      label: '📚 Book Browser',
      collapsed: false,
      items: [
        {type: 'doc', id: 'book-browser/grid', label: '🔲 Grid View'},
        {type: 'doc', id: 'book-browser/table', label: '📊 Table View'},
      ],
    },
    {
      type: 'doc',
      id: 'bookdrop',
      label: '📥 Bookdrop',
    },
    {
      type: 'doc',
      id: 'magic-shelf',
      label: '✨ Magic Shelf',
    },
    {
      type: 'category',
      label: '🖥️ Devices',
      collapsed: false,
      items: [
        {type: 'doc', id: 'devices/kobo', label: '📱 Kobo'},
        {type: 'doc', id: 'devices/koreader', label: '📖 KOReader'}
      ],
    },
  ],
};

export default sidebars;
