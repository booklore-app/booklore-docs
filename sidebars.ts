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
      collapsed: true,
      items: [
        {type: 'doc', id: 'library/setup-first-library', label: '🆕 Setup First Library'},
        {type: 'doc', id: 'library/edit-library', label: '✏️ Edit Library'},
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
      label: '🛠️ Metadata',
      collapsed: true,
      items: [
        {type: 'doc', id: 'metadata/metadata-fetch-configuration', label: '🔄 Fetch Configuration'},
        {type: 'doc', id: 'metadata/metadata-manager', label: '🪄 Metadata Manager'},
        {type: 'doc', id: 'metadata/amazon-cookie', label: '🍪 Amazon Cookie'},
        {type: 'doc', id: 'metadata/hardcover-token', label: '🔑 Hardcover API'},
      ],
    },
    {
      type: 'category',
      label: '🔗 Integrations',
      collapsed: true,
      items: [
        {type: 'doc', id: 'integration/kobo', label: '📱 Kobo'},
        {type: 'doc', id: 'integration/koreader', label: '📖 KOReader'},
        {type: 'doc', id: 'integration/opds', label: '🌐 OPDS'}
      ],
    },
    {
      type: 'category',
      label: '⚙️ Tools',
      collapsed: true,
      items: [
        {type: 'doc', id: 'tools/task-manager', label: '📊 Task Manager'}
      ],
    },
    {
      type: 'doc',
      id: 'shelf',
      label: '🗂️ Shelf',
    },
    {type: 'doc', id: 'email-setup', label: '📧 Email Setup'},
    {
      type: 'category',
      label: '📚 Book Browser',
      collapsed: true,
      items: [
        {type: 'doc', id: 'book-browser/grid', label: '🔲 Grid View'},
        {type: 'doc', id: 'book-browser/table', label: '📊 Table View'},
      ],
    },
  ],
};

export default sidebars;
