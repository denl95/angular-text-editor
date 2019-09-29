import { Injectable } from '@angular/core';

const defaultText = 'A year ago I was in the audience at a gathering of designers in San Francisco. ' +
  'There were four designers on stage, and two of them worked for me. I was there to support them. ' +
  'The topic of design responsibility came up, possibly brought up by one of my designers, I honestly don’t remember the details. ' +
  'What I do remember is that at some point in the discussion I raised my hand and suggested, to this group of designers, ' +
  'that modern design problems were very complex. And we ought to need a license to solve them.';

@Injectable()
export class TextService {
  text = defaultText;
  metadata = [];
  getSelectedRange(style: string) {
    const selection = window.getSelection();
    const element = document.createElement(style);

    selection.getRangeAt(0).surroundContents(element);
  }
  processText(text) {
    let html = '';
    let anchor = 0;
    this.metadata.forEach((range) => {
      html += text.slice(anchor, range.range[0]);
      range.styles.forEach((style) => {
        html += `<${style}>`;
      });
      html += text.slice(range.range[0], range.range[1]);
      range.styles.forEach((style) => {
        html += `</${style}>`;
      });
      anchor = range.range[1];
    });
    html += text.slice(anchor);
    return html;
  }
}
