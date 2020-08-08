// @flow
import React, { Component } from 'react';

import { Dialog } from '@blueprintjs/core';

import logo from '../resources/houseOps_animated.svg';



export default class About extends Component {
  constructor() {
    super();

    this.state = {
      visibility: false
    };
  }

  handleOpen = () => { this.setState({ visibility: true }); };

  handleCancel = () => { this.setState({ visibility: false }); };

  render() {
    return (

      <Dialog
        isOpen={this.state.visibility}
        onClose={this.handleCancel}
        title=""
      >
        <div className="pt-dialog-body">

          <center>
            <img src={logo} alt="" height="60" />
            <br /><br />
            <h2>HouseOps</h2>
            <small>A unique Desktop ClickHouse Ops UI / IDE for OSX, Linux and Windows.</small>
            <hr />

            <p>
              <b>Created by</b><br />
              Community
            </p>

            <p>
              <b>Github Page</b><br />
              <a href="https://github.com/HouseOps/HouseOps" rel="noopener noreferrer" target="_blank">
                https://github.com/HouseOps/HouseOps
              </a>
            </p>

            <p>
              <b>Check for updates</b><br />
              <a href="https://github.com/HouseOps/HouseOps/releases" rel="noopener noreferrer" target="_blank">
                https://github.com/HouseOps/HouseOps/releases
              </a>
            </p>

            <p>
              <b>License</b><br />
              <a href="https://github.com/HouseOps/HouseOps/blob/master/LICENSE" rel="noopener noreferrer" target="_blank">
                https://github.com/HouseOps/HouseOps/blob/master/LICENSE
              </a>
              <br />
              MIT
            </p>

            <p>
              <b>Version</b><br />
             
            </p>

          </center>

        </div>
      </Dialog>
    );
  }
}
