---
title: Banner
tags:
  - documentation
  - sections
  - subInc
  - components
eleventyNavigation:
  key: banner
  parent: components
  title: Banner
tabledata:
  - 
    key: title
    required: yes
    datatype: String
    desc: | 
      Sets the page's `<h1>` element and should therefore be descriptive of the page content as a whole.
  - 
    key: intro
    required: yes
    datatype: Markdown
    desc: A brief explaination of what will be covered on this page, expanding on the `title`.
  - 
    key: img
    datatype: Filename
    default: placeholder.jpg
    required: yes
    desc: |
      Path the the banner image to use.
    
      You only nees to save a single, high-resolution image and the build system will automatically generate resized images for suitable for different screen sizes and densities.
---

The banner component is required on all pages. 
## Example YAML data
```yaml
title: A banner
intro: |
  Some introductory text.

  In **Markdown** format.
banner: /path/to/image.jpg
```
