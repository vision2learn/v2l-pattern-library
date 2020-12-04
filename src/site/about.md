---
title: Understanding the Pattern Library
permalink: /about/
layout: longform
theme:
  name: prism-xonokai
---

## Getting Started

- Clone the [Vision 2 Learn Github Repository](https://github.com/MrSleeth/v2l-pattern-library)

TODO: Instructions for local Node and running through Docker

## Creating Courses

### Content folder

- Course content is found in `/src/site/content`
- `content.11ty.data` sets all content to have a publish date of 01/01/2019 to prevent 11ty's default sorting algorithm which uses the file's date modified attribute
- Inside this directory, content should be added into the correct folder structure, i.e:
  - `/content/{course-name}/{unit-number}/{session-number}`
- Individual pages for each session should then be added as [Markdown](https://daringfireball.net/projects/markdown/) files. Filenames for pages doesn't matter, but something sensible like `"01.md", "02.md"` etc won't harm.
- **SUBJECT TO CHANGE** Inside each session folder, there should be a corresponding JSON-formatted configuration filed named `"{folder-name}.11tydata.json"`. This sets common data for all pages within the folder.

#### Example session-level config file
``` json
{
  "tags": "lm-2-u1-s1",
  "permalink": false,
  "course": "lean management",
  "unit": 1,
  "session": 1
}
```

1. "tags" - This adds each page to a corresponding [11ty collection](https://www.11ty.io/docs/collections/), which allows them to be paginated. Each string in the array is seen as a unique collection by 11ty.
2. "permalink" - this is set to false so that 11ty does not convert these source pages into HTML
4. `course`, `unit` and `session` keys are used to generate the page's permalink and retrieve course information from `all-courses.json` via the `course-vars.njk` include.

**Enumerating the units and sessions means we can change the corresponding titles in `all-courses.json` and this will automatically update every page without breaking the build.**

### Courses folder

- The `courses.11tydata.json` sets all templates inside this directory to use the `course.liquid` layout found in the `_includes/layouts` directory. This reduces duplication in the front matter of the templates inside the `courses` folder.
- In order for 11ty to generate pages from the files in the `content` folder, you must add corresponding template files into a top-level folder matching the name of the unit.
- For example, `content/lean-management` will have an equivalent `courses/lean-management` directory 
- Unlike the `content` directory, you don't need additional folders for units and sessions. Just create template files in the root folder with names following this convention:
  - `u1-s1.liquid`. This will generate all pages in Unit 1, session 1 of the relevant course, provided the content files are present
- Course templates must contain the following front matter:

``` yaml
pagination:
  data: collections.lm-2-u1-s1
  size: 1
  alias: module
  addAllPagesToCollections: true
```

- This front matter is the same for every template apart from the `data` key. This should be the same value as the tag set in the session-level config file in the `content` folder.
- The `alias` key creates a friendly reference to the `pagination.items[0]` object an is used by the templates which generate the pages. For more information, see the [11ty pagination documentation](https://www.11ty.io/docs/pagination/).

### course.liquid 

- The layout file for courses is found inside the `_includes/layouts` directory

``` yaml
layout: default
permalink: {%- raw %}courses/{{ module.data.course | slug }}/unit-{{ module.data.unit}}/session-{{ module.data.session }}/{{ module.data.title | slug }}/index.html{%- endraw %}
```

- The `permalink` key relies on the session-level data file in the this course's `content` directory, accessed via `module.data`.
- Each page will have a friendly url in the following format:
  - "courses/course-name/unit-number/session-number/page-title/"
- course-name, unit-number and session-number are set in the `session-x.11tydata.json` file and the page-title is set from the `title` key of each individual Markdown file in the `content` directory.
- `| slug` is a liquid filter which takes strings and makes them suitable for use as URLs by converting spaces to hyphens and making the text lowercase.
- The template first makes a call to the `course-vars.njk` include file, passing in the `module.data` object aliased to `course` for use inside the include.

### course-vars.njk
``` liquid
{%- raw %}
{%- assign courseData = all-courses[module.data.course] %}

{%- assign unitIndex = module.data.unit | minus: 1 %}

{%- assign sessionIndex = module.data.session | minus: 1 %}

{%- assign thisUnit = courseData.units[unitIndex].title %}

{%- assign thissession = courseData.units[unitIndex].sessions[sessionIndex] %}
{%- endraw %}
```

- `module.data` is the pagination object (from calling file, `course.liquid`), so module.data is the data object for each specific page in the collection
- `courseData` = course info for this specific page
- `unitIndex` = gets unit number from session-x.11tydata file, and subtracts by 1 for array mapping
- `sessionIndex` = gets session number from session-x.11tydata file, and subtracts by 1 for array mapping
- `thisUnit` = gets unit name from `all-courses.json` using `unitIndex` as the array index
- `thissession` = gets session name from `all-courses.json` using `sessionIndex` as array index

### all-courses.json extract

``` json
{
  "lean management": {
    "level": 2,
    "units": [
      {
        "title": "lean organisation techniques in business",
        "sessions": [
          "a lean environment",
          "the productivity needs analysis process",
          "producing a process map"
        ]
      }
    ]
  }
}
```

![](/images/data-map.png)
