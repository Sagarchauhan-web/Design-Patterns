import { Button } from './Button.js';
import { DialogBox } from './DialogBox.js';
import { List } from './List.js';
import { TextBox } from './TextBox.js';

export class ArticlesDialogBox extends DialogBox {
  constructor() {
    super();
    this.articlesListBox = new List(this);
    this.titleTextBox = new TextBox(this);
    this.saveButton = new Button(this);
  }

  simulateUserInteraction() {
    this.articlesListBox.setSelection = 'Article 1';
    this.titleTextBox.setContent = '';
    this.articlesListBox.setSelection = 'Article 2';
    console.log('TextBox: ' + this.titleTextBox.getContent);
    console.log('Button: ' + this.saveButton.isEnabled);
  }

  changed(control) {
    if (control == this.articlesListBox) this.articleSelected();
    else if (control == this.titleTextBox) this.titleChanged();
  }

  titleChanged() {
    let content = this.titleTextBox.getContent;
    let isEmpty = content == null || content == '';
    this.saveButton.setEnabled = !isEmpty;
  }

  articleSelected() {
    this.titleTextBox.setContent = this.articlesListBox.getSelection;
    this.saveButton.setEnabled = true;
  }
}
