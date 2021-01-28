---
title: Reveal
tags:
  - documentation
  - sections
  - subInc
  - components
eleventyNavigation:
  key: reveal
  parent: components
  title: Reveal
review: true
tabledata:
  - 
    key: layout
    datatype: String
    desc: |
      Set to "`2x2`" to change default 3 by X layout to 2 by X.

      _You may encounter layout bugs with this setting_
  - 
    key: content
    required: yes
    datatype: Array
    desc: |
      Defines the number of individual slides in the slider. Each individual entry is denoted by a hyphen "`-`".
      
      All keys below are children of the `content` key.
  - 
    key: title
    required: yes
    datatype: String
    desc: Maps to the slide's `<h3>` element
  - 
    key: copy
    datatype: Markdown
    required: yes
    desc: Body copy of the slide.
  - 
    key: img
    datatype: Filename
    desc: Location of image used to support the text. Slides with images automatically inherit the `media` layout. This cannot yet be overridden. 
---
