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
      Holds a list of possible answers to the question in `key/value` pairs where the `key` is the possible answer and the `value` is set to `true` or `false`.
---

This component displays a quiz to the learner where they can select multiple answers per question. Learners progress through the questions one by one and are then presented with a score at the end. If they don't achieve full marks they are given the option to try the quiz again.

Unlike end of unit quizzes, results are not recorded or sent on to the tutor.

The YAML syntax and design of this component is identical to the default [Quick Quiz](/documentation/components/quick-quiz/) with the exception of the additional `mode: multi-choice` key.
## Example YAML data

```yaml
mode: multi-choice
content:
  The crazy ones?:
    answers:
      The misfits: true
      The rebels: true
      The square pegs in the round holes: true
      Fond of rules: false
    feedback: All of the above are true
  Take away the suit and what are you?:
    answers:
      Billionaire: true
      Playboy: true
      Philanthropist: false
      Iron Man: true
    feedback: All of the above are true
```
