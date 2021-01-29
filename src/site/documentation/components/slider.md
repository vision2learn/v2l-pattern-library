---
title: Slider
tags:
  - documentation
  - sections
  - subInc
  - components
eleventyNavigation:
  key: slider
  parent: components
  title: Slider
review: true
tabledata:
  - 
    key: title
    datatype: String
    desc: An accessible title to describe the content of the slider. Not rendered visually and may be unnecessary 
  - 
    key: slides
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
    key: text
    datatype: Markdown
    required: yes
    desc: Body copy of the slide.
  - 
    key: img
    datatype: Filename
    desc: Location of image used to support the text. Slides with images automatically inherit the `media` layout. This cannot yet be overridden. 
---

A horizonally-scrolling panel. Can be operated with keyboard, mouse and touch.
