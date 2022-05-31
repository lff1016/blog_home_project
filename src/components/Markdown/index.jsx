import React from 'react';
import { marked } from 'marked';
import hljs from 'highlight.js';
// import 'highlight.js/styles/github.css';
// import './hljsCustom.css';
import './index.css'
import './an-old-hope.css'

export default function Markdown({content}) {

  hljs.configure({
    classPrefix: 'hljs-',
    languages: ['CSS', 'HTML', 'JavaScript', 'TypeScript', 'Markdown']
  })
  
  marked.setOptions({
    renderer: new marked.Renderer(),
    highlight: function(code) {
      return hljs.highlightAuto(code).value;
    },
    pedantic: false,
    gfm: true,
    tables: true,
    breaks: false,
    sanitize: false,
    smartLists: true,
    smartypants: false,
    xhtml: false
  }); 
  
  return (
    <div
    className='marked'
    dangerouslySetInnerHTML={{
      __html: marked(content || '').replace(/<pre>/g, "<pre class='hljs'>")
    }}
  />
  )
}
