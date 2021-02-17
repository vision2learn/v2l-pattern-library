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

This component displays a multiple choice quiz to the learner where they can select one answer per question. Learners progress through the questions one by one and are then presented with a score at the end. If they don't achieve full marks they are given the option to try the quiz again.

Unlike end of unit quizzes, results are not recorded or sent on to the tutor.

If you want to provide the learner with multiple correct answers per question, use the [multi choice Quick Quiz component](/documentation/components/quick-quiz-(multiple-choice)/).

## Example YAML data

```yaml
content:
  Question one?:
    answers:
      Wrong answer 1: false
      Wrong answer 2: false
      Right answer: true
  Question two:
    answers:
      True: true
      False: false
  Question three:
    answers:
      Wrong answer 1: false
      Right answer: true
      Wrong answer 2: false
      Wrong answer 3: false
```
