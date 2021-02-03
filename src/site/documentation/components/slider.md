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
    desc: |
      An accessible title to describe the content of the Slider. 
    
      Not rendered visually.
  - 
    key: slides
    required: yes
    datatype: Array
    desc: |
      Defines the number of individual slides in the Slider component. Each individual entry is denoted by a hyphen "`-`".
      
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
    desc: Location of image used to support the text. Slides with images automatically inherit the `media` layout. This cannot be overridden but may change in future. 
---

A right-to-left horizonally-scrolling panel of individual slides.

This component is fully mouse, touch and keyboard accessible.

## Example YAML data

```yaml
subInc: 
  type: slider
  title: An accessible title
  slides:
    -
      title: Example Slide 1 (image)
      text: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, hic.
      img: ba_u1_s1_p3_statutory.svg
    -
      title: Example Slide 2 (no image)
      text: |
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio id libero eum sit magni placeat unde deserunt nulla consequatur distinctio, eligendi similique quaerat ipsam tenetur facilis rerum facere ipsa? 
        
        Perferendis, at. Vitae tempora quos atque modi ullam beatae voluptatibus, nihil voluptas, alias nostrum praesentium exercitationem laudantium iure deleniti provident a?
```
