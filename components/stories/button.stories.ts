import { CommonModule } from '@angular/common';
import {
  Meta,
  moduleMetadata,
  StoryObj,
  applicationConfig,
} from '@storybook/angular';

import { expect, userEvent, within } from '@storybook/test';
import { ButtonComponent } from '../button';

const meta: Meta<ButtonComponent> = {
  title: 'Libraries Button',
  component: ButtonComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [CommonModule],
    }),
  ],
  render: (args: ButtonComponent) => ({
    props: {
      ...args,
    },
  }),
  argTypes: {
    label: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<ButtonComponent>;
export const Default: Story = {
  args: {
    label: 'save!!!kkl',
  },
};

export const btnClicked: Story = {
    args: {
        label: 'save!!!kkl',
      },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('Submit form', async () => {
      await userEvent.click(canvas.getByRole('button'));
    });

    // 👇 Assert DOM structure
    await expect(
        canvas.getByText(
          'save!!!kkl',
        ),
    ).toBeInTheDocument()
  },
};
