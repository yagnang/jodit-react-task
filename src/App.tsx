import JoditEditor, { Jodit } from 'jodit-react';

import { useState, useRef, useMemo } from 'react';

// function preparePaste(jodit: any) {
//   jodit.e.on(
//     'paste',
//     e => {
//       if (window.confirm('Change pasted content?')) {
//         jodit.e.stopPropagation('paste');
//         jodit.s.insertHTML(
//           Jodit.modules.Helpers.getDataTransfer(e)
//             .getData(Jodit.constants.TEXT_HTML)
//             .replace(/a/g, 'b')
//         );
//         return false;
//       }
//     },
//     { top: true }
//   );
// }
// Jodit.plugins.add('preparePaste', preparePaste);
// }

function App() {
  const editor = useRef(null);
  const [content, setContent] = useState('');

  const config = useMemo(() => ({
    readonly: false,
    placeholder: 'Start typing...',
    showCharsCounter: true,
    showWordsCounter: true,
    height: 400,
    width: '100%',
    spellcheck: true
  }), []);
  return (
    <>
      <div style={{ marginTop: "5%", display: "flex", justifyContent: "center" }}>
        <h1 style={{ color: "#FFFBF5" }}>Jodit React Demo</h1>
      </div>

      <div style={{ marginTop: "1%", display: "flex", justifyContent: "center" }}>
        <div style={{ width: "50%" }}>
          <JoditEditor
            ref={editor}
            value={content}
            config={config}
            onChange={newContent => setContent(newContent)}
          />
        </div>
      </div>

      <div style={{ marginTop: "5%", display: "flex", justifyContent: "center" }}>
        <div style={{ width: "50%", backgroundColor: "#C3ACD0", fontSize: "22px" }}>
          {content}
        </div>
      </div>

      <div style={{ backgroundColor: "#F7EFE5" }} dangerouslySetInnerHTML={{ __html: content }} />

    </>
  )
}

export default App;
