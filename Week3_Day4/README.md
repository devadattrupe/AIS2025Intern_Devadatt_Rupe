# Week 3 – Day 4: Interactive Features and Accessibility Check

## Task 7: Interactive Features

Added basic interactive elements using JavaScript:

###  Back to Top Button
- A button appears when user scrolls down.
- On click, the page scrolls smoothly to the top using `window.scrollTo()`.

###  Collapsible FAQ Section
- Each question expands/collapses its answer when clicked.
- Implemented with simple DOM `.nextElementSibling` toggling.

## Task 8: Accessibility Final Check

Improved the website’s accessibility using these best practices:

###  Skip Navigation Link
- Allows screen readers or keyboard users to jump directly to main content.
- Hidden by default, becomes visible on focus.

###  ARIA Roles
- Added `role="navigation"` and `role="main"` for screen readers.

###  Proper Form Labels (in contact page)
- All inputs have matching `<label>` with `for` and `id`.

###  Keyboard Navigation
- All features are accessible via `Tab`, `Enter`, and `Esc` keys.
- FAQ and back-to-top button work with keyboard alone.

## Folder Structure:
├── index.html
├── css/
│ └── style.css
├── js/
│ └── script.js
