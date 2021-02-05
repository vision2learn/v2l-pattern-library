---
title: Sections
eleventyNavigation:
  key: sections
  title: Sections
	order: 2
tags:
  - documentation
  - sections
  - subInc
  - components
---

Apart from a few exceptions, most pages also require the `sections` key. This is where most of the actual course content will be placed.

_The most basic section requires only the `title` and `copy` keys to be set_.

{%- from 'components/all.njk' import section as section %}

{{ section({
	title: "Hello",
	copy: "This is some copy..."
}) }}

| Key | Required | Data Type | Default | Description |
|:--|:--|:--|:--|:--
| `title` | Yes  | String |  |  |
| `theme` | No | Predefined String, see [themes section]()  | Sets the colour scheme and iconography for the section | Dark grey text on a white background, with no header icon. |
| `copy` | No | Markdown | N/A |  |
| `layout` | No | Predefined String | N/A | Sets the layout style of the section, see, [layouts]() |
| `include` | No | see [subInc section]() | N/A | _Subject to change in future_ |
| `video` |  |  |  |  |
| `interactive` |  |  |  |  |
| `img` |  |  |  |  |
| `link` |  |  |  | (only with img) |
| `subInc` | No | see [subInc section]() | N/A | _Subject to change in future_ |
| `activity` |  |  |  | Captivate items (overlay) |
| `copy2` |  |  |  |  |


	sections:
	  -
	    title: Key point
	    theme: t-bg-grey i-keypoint
	    copy: |
	      You will find that there are many common features across each of the programs within the Microsoft Office Suite. This page will give you a quick tour of these features and many other useful things to look out for as you get to grips with Microsoft Office.

### `include` key

- time-to-think
- on-the-web

*to be removed/replaced/refactored*

### Interactive key (Adobe Animate exports)

- file: Filename
- width: number
- height: number
- composition: ID from Adobe Animate

### Themes

*Make colour chips*

- `.t-bg-primary‌`
- `‌.t-bg-primary1a`
- `‌.t-bg-primary1b`
- `‌.t-bg-primary1c`
- `‌.t-bg-primary2`
- `‌.t-bg-primary3`
- `‌.t-bg-secondary1`
- `‌.t-bg-secondary2`
- `‌.t-bg-secondary3`
- `‌.t-bg-supporting1`
- `‌.t-bg-supporting2`
- `‌.t-bg-supporting3`
- `‌.t-bg-white` *Remove?*
- `‌.t-bg-grey` *Remove?*

### Layout

- `media`
- `media-rev`
- `media-half`
