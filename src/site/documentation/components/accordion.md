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

The Accordion component can be used to condense information into a list of titles which expand to reveal more detailed information when pressed.

Javascript is used to generate the Accordion component and add convenient "Expand All" and "Collapse All" shortcut buttons.

This component is fully mouse, touch and keyboard accessible.

## Example YAML data

```yaml
subInc: 
  type: accordion
  content:
    - 
      title: A sensible title
      copy: |
        Some Markdown, which will:

        - be
        - converted
        - to
        - HTML
      img: /images/svg/ba/ba_u1_s1_p3_image_1.svg
    - 
      title: Another sensible title
      copy: |
        Lorem, _ipsum_ dolor sit amet consectetur adipisicing elit. Veritatis molestias excepturi beatae. Dolorum, natus praesentium.

        Sapiente **perspiciatis** cum fugiat rem quisquam dolore ratione assumenda ullam? Asperiores necessitatibus consequatur ab possimus?

        Est dolore [deserunt]() reprehenderit? Iure rerum corporis pariatur labore commodi qui eius quibusdam nisi asperiores?
```
