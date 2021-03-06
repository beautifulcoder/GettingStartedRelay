/**
 *  Copyright (c) 2015, Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the PATENTS file in the same directory.
 */

// Model types
class User {}
class Widget {}

// Mock data
var viewer = new User();
viewer.id = '1';
viewer.name = 'Anonymous';

const imageUrl = [
  'http://bit.ly/28WswxC',
  'http://bit.ly/28VXOoZ',
  'http://bit.ly/2919Fo6'
];

var widgets = ['Panther', 'Cougar', 'Lion'].map((name, i) => {
  var widget = new Widget();

  widget.name = name;
  widget.id = `${i}`;
  widget.image = imageUrl[i];

  return widget;
});

module.exports = {
  // Export methods that your schema can use to interact with your database
  getUser: (id) => id === viewer.id ? viewer : null,
  getViewer: () => viewer,
  getWidget: (id) => widgets.find(w => w.id === id),
  getWidgets: () => widgets,
  User,
  Widget
};
