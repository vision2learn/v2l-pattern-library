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
    key: banner
    datatype: Filename
    default: placeholder.jpg
    required: yes
    desc: |
      Filename of the banner image to display. You do not need to provide the full path as this is handled by templating. Images should be saved to `src/site/images/banners/{{ shortcode }}` folder where `{{ shortcode }}` maps to the the value of the `shortcode` key set in the [Template Data File](creating-courses/template-data-file/).
    
      You only nees to save a single, high-resolution image and the build system will automatically generate resized images for suitable for different screen sizes and densities.
---

The banner component is required on all pages. 
## Example YAML data
```yaml
title: A banner
intro: |
  Some introductory text.

  In **Markdown** format.
banner: image.jpg
```
