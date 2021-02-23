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
      Defines the number of individual blocks in the Reveal component. Each individual entry is denoted by a hyphen "`-`".
      
      All keys below are children of the `content` key.
  - 
    key: title
    required: yes
    datatype: String
    desc: Maps to the Reveal block's `<h3>` element.
  - 
    key: copy
    datatype: Markdown
    required: yes
    desc: The information to show to the learner after pressing on a Reveal block
  - 
    key: img
    datatype: Filename
    desc: Location of image for this Reveal block.
---

The Reveal component creates a grid of images which, when pressed by the learner, reveal further information related to each specific image. 

**NOTE: Reveal boxes are currently a fixed size so if the text set in the `copy` key is too long, it will be clipped and unreadable.**

This component is fully mouse, touch and keyboard accessible.
## Example YAML data

```yaml
subInc:
  type: reveal
  content:
    -
      title: Block One
      copy: |
        Individual issues, where an employer and employee need to discuss often sensitive issues. For example, an employee may have a complaint with their manager about bullying or discrimination, or a manager may feel an employee’s performance or conduct is falling below the required standard.
      img: ba_u1_s1_p4_rep1a.svg
    -
      title: Block Two
      copy: |
        Workers have a statutory right to be accompanied by a fellow worker or trade union official at disciplinary or grievance hearings.
      img: BA_U1_S1_P4_Rep1b.svg
    -
      title: Block Three
      copy: |
        Group issues, when employers need to communicate and consult with the whole workforce. This is often done in employee forums – also known as joint consultative committees or works councils.
      img: BA_U1_S1_P4_Rep2a.svg
    -
      title: Block Four
      copy: |
        Group issues, when employers need to communicate and consult with the whole workforce. This is often done in employee forums – also known as joint consultative committees or works councils.
      img: BA_U1_S1_P4_Rep2a.svg
```
