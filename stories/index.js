import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import NavBar from '../src/components/NavBar';
import Search from '../src/components/Search';
import Menu from '../src/components/Menu';
import MenuItem from '../src/components/MenuItem';
import Picture from '../src/components/Picture';
import Loading from '../src/components/Loading';

storiesOf('Search', module)
  .add('Standard', () => (
    <Search onSubmit={action('clicked')} />
  ));

storiesOf('NavBar', module)
  .add('with search', () => (
    <NavBar>
        <Search onSubmit={action('clicked')} />
    </NavBar>
  ))
  .add('with search and menu', () => (
    <NavBar>
        <Search onSubmit={action('clicked')} />
        <Menu>
            <MenuItem><a href="#">Home</a></MenuItem>
            <MenuItem><a href="#">Projects</a></MenuItem>
            <MenuItem><a href="#">Images</a></MenuItem>
            <MenuItem><a href="#">Links</a></MenuItem>
            <MenuItem><a href="#">Settings</a></MenuItem>
        </Menu>
    </NavBar>
  ));

storiesOf('Picture', module)
  .add('with example image', () => (
    <Picture width={'300px'} height={'200px'} url={'https://cdn-images-1.medium.com/max/1000/1*7ucakqv0eGTL3alcTTatNQ.png'} />
  ))
  .add('with large example image', () => (
    <Picture width={'600px'} height={'400px'} url={'http://www.shewasonly.co.uk/wp-content/uploads/2014/04/Murray_Chalmers_Website_Designed_by_She_Was_Only8.jpg'} />
  ));

storiesOf('Loading', module)
  .add('Loading', () => (
    <Loading />
  ));