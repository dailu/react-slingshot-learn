// @flow
import React, { Component } from 'react';
import jsonexport from 'jsonexport';

import { Tab, Tabs, Navbar, NavbarGroup, Tooltip, Button, Alignment, Position, Intent } from '@blueprintjs/core';

import Table from './Table';
import JSONObject from './JSONObject';
/* import Graphics from './Graphics'; */

import toaster from '../../utils/toaster';
import { object } from 'prop-types';





class QueryResults extends Component {


  constructor(props) {
    super(props);

    this.state = {
      navbarTabIdActive: ''
    };
  }

  UNSAFE_componentWillMount() {
    setTimeout(() => {
      this.setState({ navbarTabIdActive: 'table' });
    }, 200);
  }

  copyJsonObjectToClipboard = () => {
    if (this.props.data.data) {
     // copyToClipboard(JSON.stringify(this.props.data.data));
      toaster.show({
        message: 'JSON Object data copied to clipboard!',
        intent: Intent.SUCCESS,
        icon: 'tick-circle',
        timeout: 5000
      });
    } else {
      toaster.show({
        message: 'Ops, no data available to be copied.',
        intent: Intent.WARNING,
        icon: 'disable',
        timeout: 5000
      });
    }
  };

  copyCSVToClipboard = () => {
    if (this.props.data.data) {
      jsonexport(this.props.data.data, { rowDelimiter: '|' }, (err, csv) => {
        if (err) {
          toaster.show({
            message: `Error: ${err}`,
            intent: Intent.DANGER,
            icon: 'error',
            timeout: 5000
          });
        } else {
         alert(csv);
          toaster.show({ // TODO: change this for toaster.success
            message: 'CSV data copied to clipboard!',
            intent: Intent.SUCCESS,
            icon: 'tick-circle',
            timeout: 5000
          });
        }
      });
    } else {
      toaster.show({
        message: 'Ops, no data available to be copied.',
        intent: Intent.WARNING,
        icon: 'disable',
        timeout: 5000
      });
    }
  };

  handleNavbarTabIdActiveChange = (navbarTabIdActive) =>
    this.setState({ navbarTabIdActive });

  render() {
    return (
      <div
        style={{
          backgroundColor: '#394B59', height: '100%', overflow: 'hidden'
        }}
      >
        <Navbar
          style={{
            height: '35px', width: '100%', marginLeft: '0', zIndex: '0', backgroundColor: '#293742'
          }}
        >

          <NavbarGroup align={Alignment.RIGHT} style={{ height: '35px' }}>

            <Tooltip content="Copy JSON Object Data to Clipboard" position={Position.LEFT}>
              <Button
                onClick={this.copyJsonObjectToClipboard}
                className="pt-small pt-minimal"
                icon="code"
                text=""
                intent={Intent.WARNING}
              />
            </Tooltip>

            <Tooltip content="Copy CSV to Clipboard" position={Position.LEFT}>
              <Button
                onClick={this.copyCSVToClipboard}
                className="pt-small pt-minimal"
                icon="th-derived"
                text=""
                intent={Intent.WARNING}
              />
            </Tooltip>

          </NavbarGroup>

        </Navbar>
        <div style={{
          paddingLeft: '20px', paddingTop: '10px', height: '100%', width: '100%'
        }}
        >
          <Tabs
            id="TabsExample"
            animate="true"
            large="true"
            onChange={this.handleNavbarTabIdActiveChange}
            selectedTabId={this.state.navbarTabIdActive}
            renderActiveTabPanelOnly="true"
          >
            <Tab id="table" title="Table" panel={<Table data={this.props.data} />} />
            {/* <Tab id="graphics"
            title="Graphics" panel={<Graphics data={this.props.data} />}
            /> */}
            <Tab id="jsonObject" title="JSON Object" panel={<JSONObject data={this.props.data} />} />
          </Tabs>
        </div>
      </div>
    );
  }
}

QueryResults.propTypes = {
  data: object
};
export default  QueryResults;