import { Editor } from '@tiptap/react'
import {
    MdFormatBold,
    MdFormatQuote,
    MdFormatStrikethrough,
    MdRedo,
    MdUndo,
} from 'react-icons/md'


const Toolbar = ({ editor }: { editor: Editor }) => {
    if (!editor) {
        return null
    }
    

    return (
        <div className="flex flex-wrap gap-2 border-b border-gray-600 p-4 text-2xl">
            <button
                type="button"
                onClick={() => editor.chain().focus().toggleBold().run()}
                className={!editor.isActive('bold') ? 'opacity-20' : ''}
            >
                <MdFormatBold />
            </button>
            <button
                type="button"
                onClick={() => editor.chain().focus().toggleStrike().run()}
                className={!editor.isActive('strike') ? 'opacity-20' : ''}
            >
                <MdFormatStrikethrough />
            </button>
            <button
            type="button"
            onClick={() => editor.chain().focus().toggleBlockquote().run()}
            className={!editor.isActive('blockquote') ? 'opacity-20' : ''}
          >
            <MdFormatQuote />
          </button>
            <button
                onClick={() => editor.chain().focus().undo().run()}
                type="button"
            >
                <MdUndo />
            </button>
            <button
                onClick={() => editor.chain().focus().redo().run()}
                type="button"
            >
                <MdRedo />
            </button>
        </div>
    )
}

export default Toolbar
