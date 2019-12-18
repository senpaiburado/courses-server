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

export default function FilesView(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState([]);
  let index = 0;


  const handleChange = (event, nodes) => {
    setExpanded(nodes);
    console.log(nodes);
  };

  const handleClick = (folder) => {
    console.log(folder);
    props.onFolderClicked(folder);
  }

  const ListChildren = ({folder}) => {
    return (
      <div>
      {
        folder.map((folder) => !folder.type || folder.type === "directory" ? (
          <TreeItem key={index} nodeId={index++} label={folder.name} onClick={() => { handleClick(folder) }}>
            {folder.children && folder.children.length > 0 ?
            (<ListChildren folder={folder.children}/>) : ""}
          </TreeItem>) : ""
        )
      }
      </div>
    )
  }



  console.log(props);
  console.log(props.directories)
  return (
    <TreeView
      className={classes.root}
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      expanded={expanded}
      onNodeToggle={handleChange}
      // onClick={handleClick}
    >

      {
        props.directories.map((folder) => !folder.type || folder.type === "directory" ? (
          <TreeItem nodeId={index++} label={folder.name} onClick={() => { handleClick(folder) }}>
            <ListChildren folder={folder.children}/>
          </TreeItem>) : ""
        )
      }

    </TreeView>
  );
}
