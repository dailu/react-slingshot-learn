import React, { Component } from 'react';
import { Dialog } from '@blueprintjs/core';


export default class KeyboardHelp extends Component {
  constructor() {
    super();

    this.state = {
      shortcutsVisibility: false
    };
  }
  shortcutsHandleClose = () => {
    this.setState({ shortcutsVisibility: false });
  };
  handleOpen = () => {
    this.setState({ shortcutsVisibility: true });
  };
  render() {
    return (
      <Dialog
          icon="comment"
          isOpen={this.state.shortcutsVisibility}
          onClose={this.shortcutsHandleClose}
          title="Keyboard Shortcuts and Help"
        >
          <div className="pt-dialog-body">

            <h4>Help Keyboard</h4>
            Select text to run query localized or all text in editor is executed.

            <br /><br /><br />

            <h4>Keyboard Shortcuts</h4>
            <b>CTRL or COMMAND + ENTER</b> -- Launch query 

          </div>
      </Dialog>

    
    );
  }
}

