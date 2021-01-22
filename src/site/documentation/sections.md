---
title: Sections
layout: documentation.njk
tags:
  - documentation
  - pages
  - pagedata
  - sections
tabledata:
  - 
    key: title
    required: true
    datatype: String
    default: n/a
    desc: Maps to the sections's `<h2>` element
  - 
    key: theme
    required: true
    datatype: Predefined String
    default: Dark grey text on a white background, with no header icon.
    desc: Sets the colour scheme and iconography for the section, see [themes section]()
  - 
    key: copy
    datatype: Markdown
    desc: The banner image to display beneath the page header. Templating handles the full file path
  - 
    key: layout
    datatype: Predefined String
    desc: This is where most of the page content is entered. See [sections key]()
  - 
    key: include
    datatype: Key
    desc: See [Includes/Components section](). _Subject to change in future_
  - 
    key: video
    datatype: Filename
    desc: Video path
  - 
    key: interactive
    datatype: Key
    desc: Adobe Animate exports
  - 
    key: img
    datatype: Filename
    desc: Image path
  - 
    key: link
    datatype: URL String
    default: n/a
    desc: | 
      Only used when `img` key is also present. Wraps the image in a link tag. 
      
      Enter the URL without http/https protocol. E.g. //example.com
  - 
    key: subInc
    datatype: Key
    desc: | 
      Add a prebuilt component to this section. See [Components section]() for options.

      _Subject to change in future_
  - 
    key: activity
    datatype: Key
    desc: |
      Add an Adobe Captivate item (overlay)

      _Subject to change in future_
  - 
    key: copy2
    datatype: Markdown
    desc: Adds additonal to the bottom of the section.
---

Apart from a few exceptions, pages require the `sections` key as this is where most of the actual course content will be placed.

_The most basic section requires only the `title` and `copy` keys to be set_.
