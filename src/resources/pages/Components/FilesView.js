import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';

const useStyles = makeStyles({
  root: {
    height: 216,
    flexGrow: 1,
    maxWidth: 400,
  },
});

export default function FilesView() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState([]);

  const handleChange = (event, nodes) => {
    setExpanded(nodes);
  };

  return (
    <TreeView
      className={classes.root}
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      expanded={expanded}
      onNodeToggle={handleChange}
    >
      <TreeItem nodeId="1" label="Applications">
        <TreeItem nodeId="2" label="Calendar" />
        <TreeItem nodeId="3" label="Chrome" />
        <TreeItem nodeId="4" label="Webstorm" />
      </TreeItem>
      <TreeItem nodeId="5" label="Documents">
        <TreeItem nodeId="6" label="Material-UI">
          <TreeItem nodeId="7" label="src">
            <TreeItem nodeId="8" label="index.js" />
            <TreeItem nodeId="9" label="tree-view.js" />
            <TreeItem nodeId="10" label="src1">
            <TreeItem nodeId="11" label="index.js" />
            <TreeItem nodeId="12" label="tree-view.js" />
            <TreeItem nodeId="13" label="src2">
            <TreeItem nodeId="14" label="index.js" />
            <TreeItem nodeId="15" label="tree-view.js" />
                
          </TreeItem>
          </TreeItem>
          
          </TreeItem>
        </TreeItem>
      </TreeItem>
    </TreeView>
  );
}