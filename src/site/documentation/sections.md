---
title: Sections
tags: components
eleventyNavigation:
  key: sections
  title: Sections
  order: 6
tabledata:
  - 
    key: title
    required: true
    datatype: String
    desc: |
      Maps to the section's `<h2>` element
  - 
    key: copy
    datatype: Markdown
    desc: The text for the section.
  - 
    key: theme
    datatype: String
    desc: |
      Sets the colour scheme and iconography for the section. See [Colours](/documentation/colours/) for all possible options.
  - 
    key: layout
    required: true
    datatype: String
    desc: |
      Used when an image is included in the section. Options are:
        - `media` – Image is shown to the right of the `copy`
        - `media-rev`- Image is shown to the left of the `copy`
        - `media-half` – Image shown to the right but in a 50/50 ratio with the `copy`
  - 
    key: include
    datatype: String
    desc: | 
      Display a preset section. Options are currently limited to:
      - time-to-think
      - on-the-web
  - 
    key: img
    datatype: String
    desc: |
      Display a supporting image. Requires the full path to the image, e.g. `/images/svg/it2/it2_u1_s1_p4_image.svg`. 

      **If you use this key, a `layout` must also be set.**
  - 
    key: link
    datatype: String (URL)
    desc: |
      Turn the image set with the `img` key into a clickable link.

      **`img` key must be present otherwise this key is ignored.**
  - 
    key: video
    datatype: Filename
    desc: |
      Display a video in the section. Requires full path to the video.

      **The `layout` key is ignored if the `video` key is present. As such, all videos are displayed below any `copy`.**
  - 
    key: interactive
    datatype: Object
    desc: |
      Display content created in Adobe Animate. Requires the following sub keys:
      - `file`: Filename of the Javascript file created by Animate. Does not require the full path or the `.js`.extension. Animate JS files are placed in `src/site/js/interactive/{{ shortcode }}`, where `{{ shortcode }}` maps to the the value of the `shortcode` key set in the [course Data File](creating-courses/course-data-file/).
      - `width`: Number. The default width in pixels of the interactivity as defined in Animate.
      - `height`: Number. The default height of the interactivity as defined in Animate. 
      - `composition`: The Composition ID from Adobe Animate.
  
  - 
    key: subInc
    desc: |
      Add a component to the section. See [components](components) for full details.
  - 
    key: activity
    datatype: Object
    desc: | 
      Display Adobe Captivate content. This opens in an overlay window. Requires 1 subkey:
      - 'ref': This is the folder name of the Captivate content. Stored in `src/site/captivate/course-name/`
  - 
    key: copy2
    datatype: String
    desc: Display text below and include image/subInc etc.
---

Apart from a few exceptions, most pages also require the `sections` key. This is where most of the actual course content will be placed.

All of the keys listed below are *children* of the `sections` key and so require proper indentation. A new section on the page is denoted by a hyphen '`-`', which is indented 1 tab from the parent `sections` key. See the example YAML data below.

_The most basic section requires only the `title` and `copy` keys to be set_.

## Example YAML data

```yaml
sections:
  -
    title: A basic section
    copy: |
      This is the most basic section, with only a title and some copy.
  -
    title: A basic section with theme applied
    theme: t-bg-primary2
    copy: |
      This is another basic section, but with a theme applied.

      See [Colours](colours) for all available themes.
  -
    title: Section with an image but no layout set
    theme: t-bg-secondary2
    copy: |
      To have the image displayed beneath the text use [Markdown syntax to add the image](https://daringfireball.net/projects/markdown/syntax#img.). Do not use the `img` key.

      ### Markdown image syntax
      ![](https://via.placeholder.com/300)
  -
    title: Section with an image and default media layout
    theme: t-bg-primary
    copy: |
      Default `media` layout displays the image to the right of the text on wide screen displays in an approximate 65/35 ratio.
    img: https://via.placeholder.com/600
    layout: media
  -
    title: Section with image and text set to equal widths
    copy: |
      `media-half` layout displays the text and image in a 50/50 ratio
    img: https://via.placeholder.com/600?text=layout+media-half
    layout: media-half
  -
    title: Section with reversed image and text layout
    theme: t-bg-supporting2
    copy: |
      The `media-rev` layout displays the image to the left of the text but maintains the default 65/35 ratio of text to image.
    img: https://via.placeholder.com/600?text=layout+media-rev
    layout: media-rev
  -
    title: Section with video
    theme: t-bg-primary
    copy: |
        A section with a video.
    video: Submitting_Assessment_Recording.mp4
```
