---
title: Course File and Folder Structure
---

## `site/_data/courses`

Holds data files in `.yaml` format which contain the content for each page of a course. Files and folders must be saved in lowercase with spaces replaced by hyphens "`-`".

When saving content (`.yaml`) files in this folder, the following structure should be followed:

- `course-name`
	- `01-unit-name` (where the number denotes the unit number)
		- `01-session-name` (where the number denotes the session number
			- `01.yaml` (where the number denotes the page number

If we take the IT User Skills Level 2 course as an example:

	- it-user-skills-level-2	 [course-name]
		- 01-word-processing-software [unit 1]
			- 01-welcome [session 1, unit 1]
				- 01.yaml
				- 02.yaml
				...

The folder structure/naming convention is used to generate the content in the page header and and navigation (Figure 1) so it is important to make sure this is correct.

![Fig. 1 - IT2 Page Header](IT_Header.png)

## Pages

Pages are written in `YAML` format, a structured data format designed to be human-readable. It is essentially a list of key/value pairs which are passed to the Prototype Builder to generate the page content. The `keys` tell the page templates what type of data they are about to receive and the `values` are the actual content to be rendered.

### Editor Settings

Please ensure your text editor's indentation settings are as follows:

- Indent using spaces
- Indent width = 2

![VS CODE SCREENSHOTS]()

### Key Types

| Type | Description |
|:--|:--|
| String | Single-line, free-format text |
| Markdown | Multi-line text, must start with pipe character (`|`) and accepts [Markdown syntax](https://daringfireball.net/projects/markdown) which is translated into HTML |
| Filename | The filename, including extension (e.g. `image.jpg`, `movie.mp4` etc). The system will infer the full path based on a number of factors including the media type, component type etc. |
| Array | A container which holds one or more of the component type defined by the array's key. New entries are denoted by a hyphen (`-`). |

### Top-Level Keys

Top-level keys are not indented in the page data (`.yaml`) file.

All pages should to contain the following keys, with the exception of the `sections` key on certain pages (see XXX):

| Key | Required | Data Type | Description |
|:--|:--|:--|:--|
| `title` | Yes | String | maps to page `<h1>` element |
| `intro` | Yes | String / Markdown | maps to introductory text below `<h1>` |
| `banner` | Yes | Filename | The banner image to display beneath the page header. Templating handles the full file path |
| `sections` | Yes (with exceptions) | Array | This is where most of the page content is entered. See [sections key]() below |

### The `sections` key

Apart from a few exceptions, most pages also require the `sections` key. This is where most of the actual course content will be placed.

_The most basic section requires only the `title` and `copy` keys to be set_.

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

### subInc (components)

- accordion
	- content:
		- title: String
		- copy: Markdown
		- img: Filename
- reveal
	- content:
		- title: String
		- copy: Markdown
		- img: Filename
- slider:
	- title: String
	- slider:
		- title: String
		- text: Markdown
		- img: Filename
- quick-quiz (Question with true/false answers):
	- content:
		- Question
			- answers:
				- String: true/false
- word-quiz
	- content:
		- sentence: String
		- answer: String

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

## `site/courses`

Holds metadata-style files which instruct the system to build the courses.
