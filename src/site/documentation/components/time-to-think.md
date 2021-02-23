---
title: Time to Think
tags:
  - documentation
  - sections
  - include
  - components
eleventyNavigation:
  key: time-to-think
  parent: components
  title: Time to think
review: true
tabledata:
  - 
    key: copy
    required: yes
    datatype: Markdown
    desc: | 
      Text to introduce and explain the purpose of the Time to Think box
---

## Example YAML data

The Time to Think component allows the learner enter text which is then saved into their Journal. In the Live environment, learners can refer to their Journal entries to help with completing their assessments.

_Note: Journal functionality does not work in the prototyping environment_

```yaml
title: Time to think
include: 
  type: time-to-think
  copy: | 
    Some supporting text to explain the purpose of this Time to Think box.
```
