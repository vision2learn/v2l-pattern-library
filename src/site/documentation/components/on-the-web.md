---
title: "On the web"
tags:
  - documentation
  - sections
  - include
  - components
eleventyNavigation:
  key: on-the-web
  parent: components
  title: On the Web
review: true
tabledata:
  - 
    key: copy
    required: yes
    datatype: Markdown
    default: "The following website(s) are all useful sources of information:"
    desc: | 
      Text to introduce and explain the purpose of the external links
  - 
    key: links
    datatype: Array
    desc: | 
      Key/Value pairs of text and hyperlinks in the format:

      `link: www.example.com`
---

This component creates a section with a list of links (URLs) to 3rd party content which is used to support the content on the current page.

To avoid browser security warning, do not add the protocol (e.g. `http://` / `https://`) to the URL. If the protocol is added, the system will remove it during the build process.

An "Opens in a new tab" icon is automatically appended to each link and a 3rd part content disclaimer is also added to the component.

## Example YAML data
```yaml
include: 
  type: on-the-web
  copy: |
    Here are some interesting links to other websites:
  links:
    vision2learn.net: www.vision2learn.net
    vision2learn.com: www.vision2learn.com
    The BBC: www.bbc.co.uk
    Google: www.google.com
```
