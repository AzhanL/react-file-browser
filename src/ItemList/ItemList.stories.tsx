import React from "react";
import ItemList, { ItemListProps } from "./ItemList";
import { Meta, Story } from "@storybook/react/types-6-0";

export default {
  title: "Components/Item List",
  component: ItemList,
} as Meta<ItemListProps>;

const Template: Story<ItemListProps> = (args) => <ItemList {...args} />;

export const IconCatalogue = Template.bind({});
IconCatalogue.args = {
  root: {
    type: "dir",
    children: {
      home: {
        type: "dir",
        children: {
          myname: {
            type: "dir",
            children: {
              "filea.txt": {
                type: "file",
              },
              "fileb.txt": {
                type: "file",
              },
              projects: {
                type: "dir",
                children: {
                  mysupersecretproject: {
                    type: "dir",
                    children: {
                      mysupersecretfile: {
                        type: "file",
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
      Pictures: {
        type: "dir",
        children: {
          myname: {
            type: "dir",
            children: {
              "filea.txt": {
                type: "file",
              },
              "fileb.txt": {
                type: "file",
              },
              projects: {
                type: "dir",
                children: {
                  mysupersecretproject: {
                    type: "dir",
                    children: {
                      mysupersecretfile: {
                        type: "file",
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
  currentPath: "",
  onChangePath: (_) => {}
};


let items: [
  {
    name: "Documents",
    type: "dir",
  },
  {
    name: "Downloads",
    type: "dir",
  },
  {
    name: "Pictures",
    type: "dir",
  },
  {
    name: "Hover Over Me! Supercalifragilisticexpialidocious",
    type: "file",
  },
  {
    name: "package.json",
    type: "file",
  },
  {
    name: "sitemap.xml",
    type: "file",
  },
  {
    name: "report.docx",
    type: "file",
  },
  {
    name: "operations.xlsx",
    type: "file",
  },
  {
    name: "Resume.pdf",
    type: "file",
  },
  {
    name: "video.mp4",
    type: "file",
  },
  {
    name: "picture.jpg",
    type: "file",
  },
  {
    name: "website.crt",
    type: "file",
  },
  {
    name: "backup.zip",
    type: "file",
  },
  {
    name: "contact.vcf",
    type: "file",
  },
  {
    name: "settings.ini",
    type: "file",
  },
  {
    name: ".gitignore",
    type: "file",
  },
  {
    name: "main.js",
    type: "file",
  },
  {
    name: "app.tsx",
    type: "file",
  },
  {
    name: "app.ts",
    type: "file",
  },
]