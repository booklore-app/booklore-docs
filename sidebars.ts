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
        {type: 'doc', id: 'library/folder-structure', label: '📁 Folder Structure'},
        {type: 'doc', id: 'library/physical-books', label: '📖 Physical Books'},
        {type: 'doc', id: 'library/duplicate-detection', label: '🔍 Duplicate Detection'},
      ],
    },
    {
      type: 'category',
      label: '📥 Bookdrop',
      collapsed: true,
      items: [
        {type: 'doc', id: 'bookdrop', label: '📥 Bookdrop Basics'},
        {type: 'doc', id: 'bookdrop-advanced', label: '🎯 Advanced Features'},
      ],
    },
    {
      type: 'doc',
      id: 'magic-shelf',
      label: '🪄 Magic Shelf',
    },
    {
      type: 'category',
      label: '🗂️ Metadata',
      collapsed: true,
      items: [
        {type: 'doc', id: 'metadata/metadata-center', label: '📖 Metadata Center'},
        {type: 'doc', id: 'metadata/metadata-settings', label: '⚙️ Metadata Settings'},
        {type: 'doc', id: 'metadata/metadata-fetch-configuration', label: '🔃 Fetch Configuration'},
        {type: 'doc', id: 'metadata/file-naming-patterns', label: '🗒️ File Naming Patterns'},
        {type: 'doc', id: 'metadata/metadata-manager', label: '🧙 Metadata Manager'},
        {type: 'doc', id: 'metadata/amazon-cookie', label: '🍪 Amazon Cookie'},
        {type: 'doc', id: 'metadata/hardcover-token', label: '🔑 Hardcover API'},
        {type: 'doc', id: 'metadata/lubimyczytac', label: '📚 LubimyCzytac'},
        {type: 'doc', id: 'metadata/ranobedb', label: '📚 RanobeDB'},
      ],
    },
    {
      type: 'category',
      label: '🔗 Integrations',
      collapsed: false,
      items: [
        {type: 'doc', id: 'integration/kobo', label: '📲 Kobo'},
        {type: 'doc', id: 'integration/koreader', label: '📚 KOReader'},
        {type: 'doc', id: 'integration/opds', label: '🌍 OPDS'}
      ],
    },
    {
      type: 'category',
      label: '⚙️ Tools',
      collapsed: false,
      items: [
        {type: 'doc', id: 'tools/task-manager', label: '🖥️ System Task Manager'},
        {type: 'doc', id: 'tools/custom-icons', label: '🎨 Custom Icons'},
        {type: 'doc', id: 'tools/custom-fonts', label: '🔤 Custom Fonts'},
        {type: 'doc', id: 'tools/cover-art-settings', label: '🖼️ Cover Art Settings'},
        {type: 'doc', id: 'tools/telemetry', label: '📊 Telemetry'},
        {type: 'doc', id: 'tools/audit-logs', label: '🛡️ Audit Logs'},
        {type: 'doc', id: 'tools/user-management', label: '👥 User Management'},
        {type: 'doc', id: 'tools/devices', label: '📱 Devices'},
        {type: 'doc', id: 'tools/global-preferences', label: '⚙️ Global Preferences'},
      ],
    },
    {
      type: 'category',
      label: '🔒 Authentication',
      collapsed: false,
      items: [
        {type: 'doc', id: 'authentication/overview', label: '🗝️ Overview'},
        {
          type: 'category',
          label: '🌐 Identity Providers (OIDC)',
          collapsed: true,
          items: [
            {type: 'doc', id: 'authentication/authentik', label: '🛡️ Authentik'},
            {type: 'doc', id: 'authentication/pocket-id', label: '💳 Pocket ID'},
            {type: 'doc', id: 'authentication/authelia', label: '🔐 Authelia'},
          ],
        },
        {type: 'doc', id: 'authentication/auto-user-provisioning', label: '👥 Auto User Provisioning'},
      ],
    },
    {
      type: 'doc',
      id: 'shelf',
      label: '📁 Shelf',
    },
    {
      type: 'doc',
      id: 'series',
      label: '📚 Series',
    },
    {
      type: 'doc',
      id: 'authors',
      label: '✍️ Authors',
    },
    {type: 'doc', id: 'reader-preferences', label: '📖 Reader Preferences'},
    {type: 'doc', id: 'view-preferences', label: '👁️ View Preferences'},
    {type: 'doc', id: 'email-setup', label: '✉️ Email Setup'},
    {
      type: 'category',
      label: '📖 Book Browser',
      collapsed: true,
      items: [
        {type: 'doc', id: 'book-browser/grid', label: '🔳 Grid View'},
        {type: 'doc', id: 'book-browser/table', label: '📋 Table View'},
      ],
    },
  ],
};

export default sidebars;
