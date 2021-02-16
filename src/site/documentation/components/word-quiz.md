---
title: Word Quiz
tags:
  - documentation
  - sections
  - subInc
  - components
eleventyNavigation:
  key: word-quiz
  parent: components
  title: Word Quiz
review: true
tabledata:
  - 
    key: content
    required: yes
    datatype: Array
    desc: | 
      Holds all of the questions in `key/value` pairs. Each new question/answer pair is denoted by a hyphen '`-`'.

      All subsequent keys are children of the `content` key.
  - 
    key: sentence
    required: yes
    datatype: String
    desc: TBC
  - 
    key: answer
    required: yes
    datatype: String
    desc: |
      Holds a list of possible answers to the question in `key/value` pairs. All answers are used to populate the drop down list in the question presented to the learner. The answer must match the case of the word(s) it is replacing in the `question` key.
---

This component presents the learner with a list of sentences where a key word or phrase has been blanked out. They must choose the correct option from the drop down list which appears in place of the missing word(s) in the question.

The drop down list is populated by all the possible answers in the quiz as set out in your page data (see [Available Keys/Values](#keys).).

Feedback in the form of a tick or cross icon (displayed at the end of the sentence) is shown to the learner after choosing and answer.
