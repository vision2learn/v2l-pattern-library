---
title: Quick Quiz
tags:
  - documentation
  - sections
  - subInc
  - components
eleventyNavigation:
  key: quick-quiz
  parent: components
  title: Quick Quiz
review: true
tabledata:
  - 
    key: mode
    datatype: String
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
