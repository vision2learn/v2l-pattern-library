---
title: Accordion
tags:
  - documentation
  - sections
  - subInc
  - components
eleventyNavigation:
  key: accordion
  parent: components
  title: Accordion
review: true
tabledata:
  - 
    key: content
    required: yes
    datatype: Array
    desc: | 
      Defines the number of items in the accordion. Each individual entry is denoted by a hyphen "`-`".
      
      All keys below are children of the `content` key.
  - 
    key: title
    required: yes
    datatype: String
    desc: Clickable title which should summarise the content which is shown when the accordion item is expanded
  - 
    key: copy
    required: yes
    datatype: Markdown
    desc: The information which is summarised by the `title` key
  - 
    key: img
    datatype: Filename
    desc: Location of image used to support the text. Accordion items with images automatically inherit the `media` layout. This cannot yet be overridden. 
---
