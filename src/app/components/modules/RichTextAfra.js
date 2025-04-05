"use client";

import {
  useEditor,
  EditorContent,
  BubbleMenu,
  FloatingMenu,
} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import TextStyle from "@tiptap/extension-text-style";
import Color from "@tiptap/extension-color";
import FontFamily from "@tiptap/extension-font-family";
import Highlight from "@tiptap/extension-highlight";
import TextAlign from "@tiptap/extension-text-align";
import Subscript from "@tiptap/extension-subscript";
import Superscript from "@tiptap/extension-superscript";
import TaskList from "@tiptap/extension-task-list";
import TaskItem from "@tiptap/extension-task-item";
import Table from "@tiptap/extension-table";
import TableCell from "@tiptap/extension-table-cell";
import TableHeader from "@tiptap/extension-table-header";
import TableRow from "@tiptap/extension-table-row";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import Placeholder from "@tiptap/extension-placeholder";
import CharacterCount from "@tiptap/extension-character-count";
import Typography from "@tiptap/extension-typography";
import Dropcursor from "@tiptap/extension-dropcursor";
import Gapcursor from "@tiptap/extension-gapcursor";
import History from "@tiptap/extension-history";
import Focus from "@tiptap/extension-focus";

const RichTextEditor = ({ data, type, onChange, value }) => {
  const initialContent = data;
  // `
  // <div id="letterDivId" style="direction:rtl;text-align:justify;width: 100%; padding:50px; padding-top:41px  !important; color: #000 !important;  line-height:33px; !important; font-size: 18px;" border="0">
  //     <table style="width: 100% !important; ">
  //         <tbody>
  //             <tr>
  //                 <td style="width:80% !important;"><br></td>
  //                 <td style="width:20% !important;text-align: center; height: 49px  !important;">${new Date().toLocaleDateString("fa-ir")}</td>
  //             </tr>
  //             <tr>
  //                 <td style="width:80% !important;"><br></td>
  //                 <td style="width:20% !important;text-align: center;height: 30px !important;"><br></td>
  //             </tr>
  //             <tr>
  //                 <td style="width:80% !important;"><br></td>
  //                 <td style="width:20% !important;text-align: center;">ندارد</td>
  //             </tr>
  //         </tbody>
  //     </table>
  //     <p style="text-align: center; width: 100%; " "=""><br></p>
  //     <p style=" text-align: center; !important;">بسمه تعالی</p>
  //     <p><br></p>
  //     <p style="text-align: justify; !important;">متن نامه را در این قسمت بنویسید...</p>
  //     <br>
  // </div>
  // `

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3],
        },
        codeBlock: false,
      }),
      Underline,
      TextStyle,
      Color,
      FontFamily,
      Highlight.configure({ multicolor: true }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
        alignments: ["right", "left", "center", "justify"],
        defaultAlignment: "right",
      }),
      Subscript,
      Superscript,
      TaskList,
      TaskItem.configure({
        nested: true,
      }),
      Table.configure({
        resizable: true,
        lastColumnResizable: false,
        cellMinWidth: 100,
      }),
      TableRow,
      TableHeader,
      TableCell,
      Image.configure({
        inline: true,
        allowBase64: true,
      }),
      Link.configure({
        openOnClick: false,
        autolink: true,
      }),
      Placeholder.configure({
        placeholder: "محتوا را اینجا بنویسید...",
      }),
      CharacterCount.configure({
        limit: 10000,
      }),

      //   CodeBlockLowlight.configure({
      //     lowlight,
      //   }),
      //   Typography,
      //   Dropcursor.configure({
      //     color: "#3B82F6",
      //     width: 2,
      //   }),
      //   Gapcursor,
      //   History,
      //   Focus.configure({
      //     mode: "all",
      //   }),
      // Collaboration, // نیاز به تنظیمات سرور دارد
      // CollaborationCursor, // نیاز به Collaboration دارد
    ],
    content: initialContent,
    editable: type == "2" ? false : true,
    editorProps: {
      attributes: {
        class: "letter-editor",
        style: "direction: rtl; text-align: right; min-height: 500px;",
      },
    },
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      onChange(html);
    },
  });

  const addImage = () => {
    const url = window.prompt("آدرس تصویر را وارد کنید");
    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  };

  const setLink = () => {
    const previousUrl = editor.getAttributes("link").href;
    const url = window.prompt("لینک را وارد کنید", previousUrl);

    if (url === null) return;

    if (url === "") {
      editor.chain().focus().extendMarkRange("link").unsetLink().run();
      return;
    }

    editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
  };

  if (!editor) {
    return <div>در حال بارگذاری ویرایشگر...</div>;
  }

  return type == "2" ? (
    <div className="editor-container">
      <EditorContent disabled={true} editor={editor} />
    </div>
  ) : (
    <div className="editor-container">
      <div className="menu-bar">
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={editor.isActive("bold") ? "is-active" : ""}
        >
          <strong>B</strong>
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={editor.isActive("italic") ? "is-active" : ""}
        >
          <em>I</em>
        </button>
        <button
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className={editor.isActive("underline") ? "is-active" : ""}
        >
          <u>U</u>
        </button>
        <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          className={editor.isActive("strike") ? "is-active" : ""}
        >
          <s>S</s>
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHighlight().run()}
          className={editor.isActive("highlight") ? "is-active" : ""}
        >
          Highlight
        </button>

        <select
          value={editor.getAttributes("heading").level || "paragraph"}
          onChange={(e) => {
            const level = e.target.value;
            if (level === "paragraph") {
              editor.chain().focus().setParagraph().run();
            } else {
              editor
                .chain()
                .focus()
                .toggleHeading({ level: parseInt(level) })
                .run();
            }
          }}
        >
          <option value="paragraph">پاراگراف</option>
          <option value="1">عنوان 1</option>
          <option value="2">عنوان 2</option>
          <option value="3">عنوان 3</option>
        </select>

        <button
          onClick={() => editor.chain().focus().setTextAlign("right").run()}
          className={editor.isActive({ textAlign: "right" }) ? "is-active" : ""}
        >
          راست
        </button>
        <button
          onClick={() => editor.chain().focus().setTextAlign("center").run()}
          className={
            editor.isActive({ textAlign: "center" }) ? "is-active" : ""
          }
        >
          وسط
        </button>
        <button
          onClick={() => editor.chain().focus().setTextAlign("left").run()}
          className={editor.isActive({ textAlign: "left" }) ? "is-active" : ""}
        >
          چپ
        </button>
        <button
          onClick={() => editor.chain().focus().setTextAlign("justify").run()}
          className={
            editor.isActive({ textAlign: "justify" }) ? "is-active" : ""
          }
        >
          justify
        </button>

        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={editor.isActive("bulletList") ? "is-active" : ""}
        >
          لیست نقطه‌ای
        </button>
        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={editor.isActive("orderedList") ? "is-active" : ""}
        >
          لیست شماره‌دار
        </button>
        <button
          onClick={() => editor.chain().focus().toggleTaskList().run()}
          className={editor.isActive("taskList") ? "is-active" : ""}
        >
          لیست کاری
        </button>

        <button
          onClick={() =>
            editor
              .chain()
              .focus()
              .insertTable({ rows: 3, cols: 3, withHeaderRow: true })
              .run()
          }
        >
          درج جدول
        </button>
        <button
          onClick={() => editor.chain().focus().addColumnAfter().run()}
          disabled={!editor.can().addColumnAfter()}
        >
          افزودن ستون
        </button>
        <button
          onClick={() => editor.chain().focus().addRowAfter().run()}
          disabled={!editor.can().addRowAfter()}
        >
          افزودن سطر
        </button>
        <button
          onClick={() => editor.chain().focus().deleteTable().run()}
          disabled={!editor.can().deleteTable()}
        >
          حذف جدول
        </button>

        <button
          onClick={() => editor.chain().focus().toggleCode().run()}
          className={editor.isActive("code") ? "is-active" : ""}
        >
          کد
        </button>
        <button
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          className={editor.isActive("codeBlock") ? "is-active" : ""}
        >
          بلوک کد
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={editor.isActive("blockquote") ? "is-active" : ""}
        >
          نقل قول
        </button>
        <button
          onClick={() => editor.chain().focus().setHorizontalRule().run()}
        >
          خط افقی
        </button>
        <button
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().undo()}
        >
          بازگردانی
        </button>
        <button
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().redo()}
        >
          انجام مجدد
        </button>
        <button onClick={addImage}>تصویر</button>
        <button
          onClick={setLink}
          className={editor.isActive("link") ? "is-active" : ""}
        >
          لینک
        </button>
        <input
          type="color"
          onInput={(e) => editor.chain().focus().setColor(e.target.value).run()}
          value={editor.getAttributes("textStyle").color || "#000000"}
        />
      </div>

      <BubbleMenu editor={editor}>
        <div className="bubble-menu">
          <button
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={editor.isActive("bold") ? "is-active" : ""}
          >
            Bold
          </button>
          <button
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={editor.isActive("italic") ? "is-active" : ""}
          >
            Italic
          </button>
          <button
            onClick={() => editor.chain().focus().toggleUnderline().run()}
            className={editor.isActive("underline") ? "is-active" : ""}
          >
            Underline
          </button>
          <button
            onClick={setLink}
            className={editor.isActive("link") ? "is-active" : ""}
          >
            Link
          </button>
        </div>
      </BubbleMenu>

      <FloatingMenu editor={editor}>
        <div className="floating-menu">
          <button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 1 }).run()
            }
            className={
              editor.isActive("heading", { level: 1 }) ? "is-active" : ""
            }
          >
            H1
          </button>
          <button
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={editor.isActive("bulletList") ? "is-active" : ""}
          >
            List
          </button>
          <button
            onClick={() => editor.chain().focus().toggleTable().run()}
            className={editor.isActive("table") ? "is-active" : ""}
          >
            Table
          </button>
        </div>
      </FloatingMenu>

      <EditorContent editor={editor} />
      <div className="character-count">
        {editor.storage.characterCount.characters()}/
        {editor.storage.characterCount.limit} characters
      </div>
    </div>
  );
};

export default RichTextEditor;
