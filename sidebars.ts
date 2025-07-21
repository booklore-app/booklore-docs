import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation
 
 The sidebars can be generated from the filesystem, or explicitly defined here.
 
 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  
  // But you can create a sidebar manually
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'getting-started',
      label: 'Getting Started',
    },
    {
      type: 'doc',
      id: 'installation',
      label: 'Installation',
    },
    {
      type: 'category',
      label: 'Walkthroughs',
      items: [
        {
          type: 'doc',
          id: 'walkthroughs/initial-setup',
          label: 'Setup Admin User',
        },
        {
          type: 'category',
          label: 'Library',
          items: ['walkthroughs/library/setup-first-library', 'walkthroughs/library/edit-library']
        },
        {
          type: 'doc',
          id: 'walkthroughs/shelf',
          label: 'Shelf'
        },
        {
          type: 'category',
          label: 'Book Browser',
          items: [
            {type: 'doc', id: 'walkthroughs/book-browser/grid', label: 'Grid View'},
            {type: 'doc', id: 'walkthroughs/book-browser/table', label: 'Table View'},
          ]
        },
        {
          type: 'doc',
          id: 'walkthroughs/bookdrop',
          label: 'Bookdrop'
        }
      ],
    },
  ],
};

export default sidebars;
