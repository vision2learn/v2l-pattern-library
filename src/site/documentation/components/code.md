---
title: Code
tags:
  - documentation
  - sections
  - subInc
  - components
eleventyNavigation:
  key: code
  parent: components
  title: Code
tabledata:
  - 
    key: lang
    required: yes
    datatype: String
    desc: |
      The language the code sample is written in. Common types:
        - js
        - python
        - cpp

      [Full list of supported languages](https://prismjs.com/#languages-list)
  -
    key: highlight
    datatype: String
    desc: |
      Highlight specific lines in the code sample. Specify specific lines, a range or a mix of both:

        - `2`
        - `2, 4, 7`
        - `3-8`
        - `2, 4, 6-10`

      **Note:** Line numbering begins at zero.
  - 
    key: code
    datatype: Markdown
    desc: |
      The code block to highlight. You must use YAML's pipe "`|`" character at the start.
      
---

This component displays sample code with appropriate syntax highlighting via [PrismJS](https://prismjs.com/), with optional line highlighting via the `highlight` key.

## Example YAML data
```yaml
subInc:
  type: code
  lang: js
  hightlight: "1-4"
  code: |
    let x = () => console.log('hello');

    myFunction() {
      return true;
    }
```
