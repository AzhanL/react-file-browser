import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import Item, { ItemProps } from "./Item";

export default {
  title: 'Components/Item',
  component: Item,
} as Meta<ItemProps>;


const Template: Story<ItemProps> = (args) => <Item {...args} />

export const Directory = Template.bind({})
Directory.args = {
    name: "Documents",
    type: "dir"
}
export const SuperLongName = Template.bind({})
SuperLongName.args = {
    name: "Hover Over Me! Supercalifragilisticexpialidocious",
    type: "file"
}

export const JSONFile = Template.bind({})
JSONFile.args = {
    name: "package.json",
    type: "file"
}