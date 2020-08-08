import React from 'react';

import {
  Icon,
  Tooltip,
  Position,
  Text
} from '@blueprintjs/core';

const prettyBytes = require('pretty-bytes');

 const treeHeader= ({ style, node }) => { // eslint-disable-line
  const iconType = node.icon;
  const iconStyle = { marginRight: '7px', marginTop: '3px' };

  if (node.type === 'server') {
    return (
      <div style={style.base}>
        <div style={style.title}>

          <Text>
            <Icon icon="globe" style={iconStyle} />
            <b style={{ fontSize: '16px' }}>{node.name}</b> <small><i>{node.database_host}</i></small>
          </Text>

        </div>
      </div>
    );
  } else if (node.type === 'database') {
    return (
      <div style={style.base}>
        <div style={style.title}>

          <Text>
            <b>{node.name}</b> <small> | {node.total_childrens}</small>
          </Text>

        </div>
      </div>
    );
  } else if (node.type === 'table' || node.type === 'engine') {
    return (
      <div style={style.base}>
        <div style={style.title}>
          <Tooltip position={Position.TOP} content={`${node.rows} rows`} disabled={node.rows === undefined || node.rows === null}>
            <div>
              <Icon icon={iconType} style={iconStyle} />
              <b style={{ fontSize: '13px' }}>{node.name}&nbsp;&nbsp;</b>
              <small>{node.engine} | {node.total_childrens}</small>
            </div>
          </Tooltip>
        </div>
      </div>
    );
  } else if (node.type === 'column') {
    return (
      <div style={style.base}>
        <div style={style.title}>
          <div style={{ marginLeft: '20px', fontSize: '13px' }}>
            <b>{node.name} </b>
            <i>
              <small>{node.data_type} {prettyBytes(parseInt(node.columnSize, 10))}</small>
            </i>
          </div>
        </div>
      </div>
    );
  }
};
export default treeHeader;