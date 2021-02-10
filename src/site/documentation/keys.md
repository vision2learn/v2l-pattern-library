---
title: Understanding Key Types
eleventyNavigation:
  key: key-types
  title: Understanding Key Types
  order: 4
---

Throughout the documentation you will find references to the different key types you will use when creating pages in YAML format. Below is an explanation of these key types.

| Type | Description |
|:--|:--|
| String | Single-line, free-format text |
| Markdown | Multi-line text, must start with pipe character (`|`) and accepts [Markdown syntax](https://daringfireball.net/projects/markdown) which is then translated into HTML |
| Filename | The filename, including extension (e.g. `image.jpg`, `movie.mp4` etc). The system will infer the full path based on a number of factors including the media type, component type etc. |
| Array | A container which holds one or more of the component type defined by the array's key. New entries are denoted by a hyphen (`-`). |
