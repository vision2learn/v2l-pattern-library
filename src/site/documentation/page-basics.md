---
title: Page Basics
tags:
  - documentation
  - pages
  - pagedata
  - top-level-keys
eleventyNavigation:
  key: top-level-keys
  title: Page Basics
  order: 5
tabledata:
  - 
    key: title
    required: true
    datatype: String
    default: n/a
    desc: Maps to the page's `<h1>` element. For accessibility purposes, the title should be descriptive of the page content and purpose.
  - 
    key: intro
    required: true
    datatype: String / Markdown
    default: n/a
    desc: Maps to introductory text below `<h1>`.
  - 
    key: banner
    required: true
    datatype: Filename
    default: placeholder.jpg
    desc: The banner image to display beneath the page header. Templating handles the full file path.
  - 
    key: sections
    required: true
    datatype: Array
    default: n/a
    desc: This is where most of the page content is entered. See [Sections](sections).
---

The following keys are, in most cases, required by all pages with the exception of the `sections` key. As these are top-level keys they are not indented in the page data (`.yaml`) file. 

The `title`, `banner` and `intro` keys control the [`banner`](components/banner) component, which is shown on every page.

## Example YAML data

```yaml
title: Page Title
intro: Some introductory text
banner: filename.svg
sections:
  - See Sections documentation
```
