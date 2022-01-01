import React, { FC, MouseEventHandler, useMemo } from "react";
import "../../node_modules/antd/dist/antd.css";
import "./item.less"
import { Col, Tooltip } from "antd";
import Icon from "@mdi/react";
import {
  mdiCodeJson,
  mdiDownload,
  mdiFile,
  mdiFileAccount,
  mdiFileCertificate,
  mdiFileCode,
  mdiFileCog,
  mdiFileExcel,
  mdiFileImage,
  mdiFileMusic,
  mdiFilePdf,
  mdiFileVideo,
  mdiFileWord,
  mdiFolder,
  mdiFolderDownload,
  mdiFolderImage,
  mdiGit,
  mdiLanguageJavascript,
  mdiLanguageTypescript,
  mdiReact,
  mdiXml,
  mdiZipBox,
} from "@mdi/js";
import { Typography, Space } from "antd";

const { Text, Link } = Typography;

export type FileItem = {
  /**
   * Name of the file or directory
   */
  name: string;

  /**
   * Type of file item (a directory or a file)
   */
  type: "dir" | "file";

  onClick?: MouseEventHandler<HTMLDivElement>
  
};
const icons = {
  dir: {
    generic: mdiFolder,
    Downloads: mdiDownload,
    Pictures: mdiFolderImage,
  },
  file: {
    generic: mdiFile,
    json: mdiCodeJson,
    xml: mdiXml,
    pdf: mdiFilePdf,
    zip: mdiZipBox,
    doc: mdiFileWord,
  },
};

let directoryIcons = new Map<string, string>();
directoryIcons.set("generic", mdiFolder);
directoryIcons.set("Downloads", mdiFolderDownload);
directoryIcons.set("Pictures", mdiFolderImage);

let fileIcons = new Map<string, string>();
fileIcons.set("generic", mdiFile);
fileIcons.set("json", mdiFileCode);
fileIcons.set("xml", mdiFileCode);
fileIcons.set("tsx", mdiFileCode);
fileIcons.set("js", mdiFileCode);
fileIcons.set("jsx", mdiFileCode);
fileIcons.set("css", mdiFileCode);
fileIcons.set("less", mdiFileCode);
fileIcons.set("sass", mdiFileCode);
fileIcons.set("scss", mdiFileCode);
fileIcons.set("xml", mdiFileCode);
fileIcons.set("pdf", mdiFilePdf);
fileIcons.set("doc", mdiFileWord);
fileIcons.set("docx", mdiFileWord);
fileIcons.set("zip", mdiZipBox);
fileIcons.set("7z", mdiZipBox);
fileIcons.set("gz", mdiZipBox);
fileIcons.set("xlsx", mdiFileExcel);
fileIcons.set("xls", mdiFileExcel);
fileIcons.set("vcf", mdiFileAccount);
fileIcons.set("png", mdiFileImage);
fileIcons.set("jpg", mdiFileImage);
fileIcons.set("conf", mdiFileCog);
fileIcons.set("ini", mdiFileCog);
fileIcons.set("mp3", mdiFileMusic);
fileIcons.set("mp4", mdiFileVideo);
fileIcons.set("webm", mdiFileVideo);
fileIcons.set("ogg", mdiFileMusic);
fileIcons.set("cer", mdiFileCertificate);
fileIcons.set("crt", mdiFileCertificate);
fileIcons.set("gitignore", mdiGit);
fileIcons.set("tsx", mdiReact);
fileIcons.set("jsx", mdiReact);
fileIcons.set("ts", mdiLanguageTypescript);
fileIcons.set("js", mdiLanguageJavascript);

export interface ItemProps extends FileItem {}

function getFileIcon({ type, name }: FileItem) {
  if (type == "dir") {
    /**
     * Check if the name of the file corresponds to an icon,
     * otherwise return a generic icon
     */
    return (
      directoryIcons.get(name) || (directoryIcons.get("generic") as string)
    );
  } else if (type == "file") {
    /**
     * Perform a regex match of the extensions and
     * see if they exist in fileIcons
     *
     * Example (name.match)
     * "secret.doc".match will yield array of [ "secret.doc", "secret.", "doc" ]
     * "secret".match will yield arry of [ "secret", undefined, undefined ]
     */
    let fileNameRegex = /^(.*\.(?=(json|xml|tsx|js|jsx|css|less|sass|scss|xml|pdf|doc|docx|zip|7z|gz|xlsx|xls|vcf|png|jpg|conf|ini|mp3|mp4|webm|ogg|cer|crt|gitignore|tsx|jsx|ts|js)$))?[^.]*$/;
    let matches = name.toLowerCase().match(fileNameRegex);

    // Return the icon if it exists
    return matches && matches[matches.length - 1]
      ? (fileIcons.get(matches[matches.length - 1]) as string)
      : (fileIcons.get("generic") as string);
  } else {
    return mdiFile;
  }
}
const Item: FC<ItemProps> = ({ name, type, onClick }) => {
  return (
    <Tooltip title={name} mouseEnterDelay={1}>
      <Col
        span={12}
        md={6}
        lg={3}
        className={"item-block"}
        style={{ width: "100%", display: 'flex', alignContent: 'center', alignItems: 'center' }}
        onClick={onClick}
      >
        <Space className={"item-spacer"} align="center">
          <Icon path={getFileIcon({ name, type })} size={1} />
          <Text className={"item-text"}>{name}</Text>
        </Space>
      </Col>
    </Tooltip>
  );
};

export default Item;
