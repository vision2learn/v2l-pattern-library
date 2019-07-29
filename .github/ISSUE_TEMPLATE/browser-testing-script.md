---
name: Browser Testing Script
about: Checklist to follow when conducting SAT in browsers
title: "[Browser Test]"
labels: Browser Test
assignees: MrSleeth

---

- Course:
- Unit:
- Session:
- Page:
- Browser (Name/Version): e.g. Firefox 60

*Note: Modern browsers = Latest Chrome, Firefox, Edge, Safari. Other browsers considered legacy (e.g. IE11)*

## General tests
- [ ] Layout is responsive
- [ ] Interactive elements have visible keyboard focus 

## Components

*Note: JavaScript dependent components behave differently on legacy browsers or if JavaScript fails. This is by design.*

### Navigation
- [ ] Session nav links work
- [ ] Page number links work (header)
- [ ] Next/Previous links work (header)
- [ ] Page number links work (footer)
- [ ] Next/Previous links work (footer)

### Banner
- [ ] Image shown
- [ ] Copy displayed correctly

### Slider (*JavaScript*)
- [ ] N/A
- [ ] Images shown (where applicable)
- [ ] No layout issues
- User can advance slider with:
- [ ] Next/Previous buttons
- [ ] Scroll wheel (shift + wheel on Windows)
- [ ] Touch (where applicable)

### Quiz (*JavaScript*)
- [ ] N/A
- [ ] Feedback shown on press
- [ ] (Quick quiz only) 1 question shown at a time
- [ ] Only one answer can be selected per question (single choice quiz)
- [ ] Multiple answers can be selected (multi choice quiz)
- [ ] Result shown at end

### Image grid (*show/hide, JavaScript*)
- [ ] N/A
- [ ] Images shown
- [ ] Text shown on press
- [ ] Text dismissed on press

### Video
- [ ] N/A
- [ ] Video thumbnail shown
- [ ] Video plays inline
- [ ] Video can play full screen
- [ ] Subtitles available
- [ ] Transcript available

### Interactives (*Captivate, JavaScript*)
- [ ] N/A
- [ ] Component loads (no JS errors in console)
- [ ] Images are shown (where applicable)

### Accordion (*JavaScript*)
- [ ] N/A
- [ ] All items collapsed on load
- [ ] Item open/closed state toggles on press
- [ ] Expand all button works as expected
- [ ] Collapse all button works as expected

### Unit overview (*JavaScript*)
- [ ] N/A
- [ ] Content toggles on tab (number button) press

### On the web
- [ ] N/A
- [ ] Links work

### Final page
- [ ] N/A
- [ ] Correct sections shown (TBC)
- [ ] Quiz link works (.NET)
- [ ] Assessment link works (.NET)
- [ ] Next button works
