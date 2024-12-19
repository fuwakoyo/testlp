import React from "react";
import { useEditor,EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Toolbar from './Toolbar';
import Blockquote from '@tiptap/extension-blockquote'
import Image from '@tiptap/extension-image'

type Props = {
  sentence:string;
  setSentence:(sentence:string)=> void;
}

const Editor = ({sentence,setSentence}:Props) => {
    const editor = useEditor({
        extensions: [
          StarterKit,
          Blockquote.configure({
          HTMLAttributes: {
            class: 'my-custom-class',
          },
        }),
        Image,
        Image.configure({
          inline: true,
        }),
        Image.configure({
          allowBase64: true,
        })                
        ],
        content: sentence,
        editorProps: {
          attributes: {
            class: "prose prose-base m-2 focus:outline-none text-left",
          },
        },
      });
    
      if(editor){
        editor.on('update',()=>{
          setSentence(editor.getText())
        })
      }

  return (
        <div className="mx-auto border-gray-500 border-2">
             {editor && <Toolbar editor={editor} />}
            <div className="p-3 h-[30vh] overflow-hidden mt-3">
                <EditorContent editor={editor} className=""/>
            </div>
        </div>
  );
};

export default Editor;