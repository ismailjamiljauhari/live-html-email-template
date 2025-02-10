'use client';

import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels';

import CodeMirror from '@uiw/react-codemirror';
import { css } from '@codemirror/lang-css';
import defaultCSS from './content/default-css';
import defaultHTML from './content/default-html';
import { html } from '@codemirror/lang-html';
import { oneDark } from '@codemirror/theme-one-dark';
import { useState } from 'react';

export default function LiveEditor() {
  const [htmlCode, setHtmlCode] = useState(defaultHTML);
  const [cssCode, setCssCode] = useState(defaultCSS);

  const srcDoc = `
    <html>
      <head>
        <style>${cssCode}</style>
      </head>
      <body>
        ${htmlCode}
      </body>
    </html>
  `;

  return (
    <div className="h-screen bg-gray-900 text-white">
      <PanelGroup direction="horizontal">
        <Panel defaultSize={50} minSize={30}>
          <div className="p-4 space-y-4 h-full">
            <div>
              <h2 className="text-lg font-semibold">HTML</h2>
              <CodeMirror
                value={htmlCode}
                height="50vh"
                extensions={[html()]}
                theme={oneDark}
                onChange={(value) => setHtmlCode(value)}
              />
            </div>
            <div>
              <h2 className="text-lg font-semibold">CSS</h2>
              <CodeMirror
                value={cssCode}
                height="50vh"
                extensions={[css()]}
                theme={oneDark}
                onChange={(value) => setCssCode(value)}
              />
            </div>
          </div>
        </Panel>
        <PanelResizeHandle className="w-1 bg-gray-700 cursor-ew-resize" />
        <Panel defaultSize={50} minSize={30}>
          <div className="p-4 h-full">
            <h2 className="text-lg font-semibold">Preview</h2>
            <iframe
              className="w-full h-full bg-white"
              srcDoc={srcDoc}
              title="Live Preview"
              sandbox="allow-scripts"
            />
          </div>
        </Panel>
      </PanelGroup>
    </div>
  );
}
