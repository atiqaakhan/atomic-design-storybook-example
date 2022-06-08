import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { Card, CardProps } from "./index";
import { Button } from '../../atoms/Button';

export default {
	title: "Molecules/Cards",
	component: Card,
} as Meta;

const Template: Story<CardProps> = (args) => <Card {...args} />;

export const CardTitle = Template.bind({});

CardTitle.args = {
	children: (
		<>
			<h3 className='text-xl'>Card Example 2</h3>
			<p className='text-sm text-gray-700'>
			Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla
			repellendus vitae, enim mollitia facilis quaerat id aperiam quibusdam
			perferendis incidunt, provident tempora magni! Aperiam unde vel nihil sunt
			quaerat. Iusto.
			</p>
		</>
	),
}

export const CardButton = Template.bind({});

CardButton.args = {
	children: (
		<>
			<h3 className='text-xl'>Card Example 2</h3>
			<p className='text-sm text-gray-700'>
			Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla
			repellendus vitae, enim mollitia facilis quaerat id aperiam quibusdam
			perferendis incidunt, provident tempora magni! Aperiam unde vel nihil sunt
			quaerat. Iusto.
			</p>
			<Button label='View More' size='large' primary />
		</>
	),
}
