import React from "react";
import UploadFile from "./UploadFile";
import MediaLibrary from "./MediaLibrary";
import { Tabs } from "antd";

const { TabPane } = Tabs;

const Media = ({ page }) => {
  return (
    <Tabs>
      <TabPane id="upload-file" tab="Upload File" key="1">
        <UploadFile />
      </TabPane>
      <TabPane id="media-library" tab="Media Library" key="2">
        <MediaLibrary />
      </TabPane>
    </Tabs>
  );
};

export default Media;
