import React, { FC, useMemo, useState } from "react";
import Item from "../Item/Item";
import { Row, Button, Breadcrumb } from "antd";
import "../../node_modules/antd/dist/antd.css";
import "./itemlist.less";
import { mdiArrowLeft, mdiBackspace } from "@mdi/js";
import { Icon } from "@mdi/react";

type Directory = {
  type: "dir" | "file";
  children?: {
    [index: string]: Directory;
  };
};

export interface ItemListProps {
  /**
   * Array of items
   */
  root: Directory;
}

const ItemList: FC<ItemListProps> = ({ root }) => {
  /**
   * Collect all items
   */

  /**
   * State for path
   */
  const [path, setPath] = useState("");

  /**
   * State for whether a directory or item is being output
   * true for directory or false for item
   */
  const [outputDirectory, setOutputDirectory] = useState(true);

  const traverse_tree = useMemo(() => {
    console.log(path.split("/").filter((directory) => directory != ""))
    return path.split("/").filter((directory) => directory != "");
  }, [path]);
  /**
   * Returns the items within the specificed path
   * @param path Path to directory for which the items are wanted
   * @param root Root directory
   */
  function getItemsInPath(): Directory {
    return traverseDirectory(traverse_tree, root);
  }

  /**
   * Traverses the directory and returns the items within that directory
   * @param traverse_tree Array of directories to traverse
   * @param directory The directory to traverse
   */
  function traverseDirectory(
    traverse_tree: string[],
    directory: Directory
  ): Directory {
    // If the traverse_tree has length 0 that indicates it is in the directory that it needs to be in
    if (traverse_tree.length == 0) {
      return directory;
    }

    // Otherwise it will need to go one more down in the directory structure
    else {
      let path = traverse_tree.shift();
      return traverseDirectory(traverse_tree, directory.children[path]);
    }
  }

  function goDown(item_name: string) {
    setPath(path + `/${item_name}`);
  }

  function goUp() {
    // Find the last '/' position
    let last_slash_position =
      path.lastIndexOf("/") == -1 ? 0 : path.lastIndexOf("/");

    // Set the new path to 1 directory up; e.g. /home/Documents -> /home
    let new_path = path.slice(0, last_slash_position);

    setPath(new_path);
  }

  const directory_items = useMemo(() => {
    // Gets the items within the directory
    let current_path = getItemsInPath();

    // If it is a directory then output the contents
    if (current_path.type == "dir" && current_path.children) {
      setOutputDirectory(true);
      // Output the contents of the directory if any
      return current_path.children
        ? Object.keys(current_path.children).map(
            (directoryItem, index) =>
              current_path.children && (
                <Item
                  name={directoryItem}
                  type={current_path.children[`${directoryItem}`].type}
                  onClick={(event) => goDown(directoryItem)}
                />
              )
          )
        : [];
    } else {
      setOutputDirectory(false);
    }
    // items.map((item, index) => (
    //   <Item name={item.name} type={item.type} key={index} />
    // )),
  }, [root, path]);

  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item>{JSON.stringify(path.split('/'))}</Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="">Application Center</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="">Application List</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>An Application</Breadcrumb.Item>
      </Breadcrumb>
      <Button
        shape="circle"
        onClick={(event) => goUp()}
        disabled={path == ""}
        icon={<Icon path={mdiArrowLeft} size={1} />}
      />

      {outputDirectory ? (
        <Row gutter={16}>{directory_items}</Row>
      ) : (
        <p onClick={(event) => goUp()}>Item</p>
      )}
    </>
  );
};

export default ItemList;
