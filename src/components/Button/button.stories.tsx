import { storiesOf } from '@storybook/react';
import { number,color} from '@storybook/addon-knobs'
import React from 'react';
import Button from './Button';
import { action, } from '@storybook/addon-actions'

storiesOf("Button", module)
  .add("Search Button",  () => (
    <Button buttonText="Button with TExt" backgroundColor={""} onClick={action('click')} flag={2} color={""} 
   
     > Search</Button>
  ))
  .add("Close Button",  () => (
    <Button buttonText="Button with" backgroundColor={""} onClick={action('click')} flag={1} color={"blue"} 
     > Close</Button>
  ))
 
  .add("Button with Knobs",
  () => (<Button  buttonText="Button with" onClick={action('click')} backgroundColor={color("Background","white","Background")} 
  flag={number("Icons from 1-3",0)} color={color("Color","Black","Color")}
  > Button Knobs</Button> 
  ));
