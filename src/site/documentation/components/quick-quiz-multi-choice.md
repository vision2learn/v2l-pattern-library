---
title: Quick Quiz (Multiple Choice)
tags:
  - documentation
  - sections
  - subInc
  - components
review: true
eleventyNavigation:
  key: quick-quiz-multi
  parent: components
  title: Quick Quiz (Multiple Choice)
tabledata:
  - 
    key: mode
    datatype: String
    required: yes
    desc: | 
      Set this key to `multi-choice` to allow multiple correct answers per question
  - 
    key: content
    required: yes
    datatype: Array
    desc: | 
      TBC.
  - 
    key: question
    required: yes
    datatype: String
    desc: TBC
  - 
    key: answers
    required: yes
    datatype: Array
    desc: |
      Holds a list of possible answers to the question in `key/value` pairs
---
