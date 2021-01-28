---
title: Top Level Keys
tags:
  - documentation
  - pages
  - pagedata
  - top-level-keys
eleventyNavigation:
  key: top-level-keys
  parent: docs
tabledata:
  - 
    key: title
    required: true
    datatype: String
    default: n/a
    desc: Maps to the page's `<h1>` element
  - 
    key: intro
    required: true
    datatype: String / Markdown
    default: n/a
    desc: Maps to introductory text below `<h1>`
  - 
    key: banner
    required: true
    datatype: Filename
    default: placeholder.jpg
    desc: The banner image to display beneath the page header. Templating handles the full file path
  - 
    key: sections
    required: true
    datatype: Array
    default: n/a
    desc: This is where most of the page content is entered. See [sections key]()
---

Top-level keys are not indented in the page data (`.yaml`) file.

All pages should to contain the following keys, with the exception of the `sections` key on certain pages (see XXX):
