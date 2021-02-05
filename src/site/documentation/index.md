---
title: Course File and Folder Structure
eleventyNavigation:
	key: File and Folder Structure
	order: 0
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
### Top-Level Keys

Top-level keys are not indented in the page data (`.yaml`) file.

All pages should to contain the following keys, with the exception of the `sections` key on certain pages (see XXX):

| Key | Required | Data Type | Description |
|:--|:--|:--|:--|
| `title` | Yes | String | maps to page `<h1>` element |
| `intro` | Yes | String / Markdown | maps to introductory text below `<h1>` |
| `banner` | Yes | Filename | The banner image to display beneath the page header. Templating handles the full file path |
| `sections` | Yes (with exceptions) | Array | This is where most of the page content is entered. See [sections key]() below |

## `site/courses`

Holds metadata-style files which instruct the system to build the courses.
