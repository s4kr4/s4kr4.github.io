'use strict';

import React, { Component } from 'react';

import MenuItem from './MenuItem.js';

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          name: 'github',
          text: 'GitHub',
          url: 'https://github.com/s4kr4',
          option: 'spin'
        },
        {
          name: 'quora',
          text: 'Qiita',
          url: 'https://qiita.com/s4kr4',
          option: 'vertical'
        },
        {
          name: 'edit',
          text: 'Blog',
          url: 'http://s4kr4.hatenablog.com/',
          option: 'vertical'
        },
        {
          name: 'twitter',
          text: 'Twitter',
          url: 'https://twitter.com/s4kr4m4',
          option: 'vertical'
        }
      ]
    };
  }

  render() {
    let items = this.state.items.map((i) => {
      return (
        <MenuItem name={i.name} text={i.text} url={i.url} />
      );
    });

    return (
      <div className="menu">
        {items}
      </div>
    );
  }
}
