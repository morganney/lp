## Decisions

- Browsers. Targeting modern specs because most browsers are auto-updating (evergreen) now.
- Use a CSS reset from a CDN. I opted to not do this because it was a simple landing page and felt it was more important to demonstrate understanding of reaching a baseline without an external dependency.
- Use CSS classes or semantic selectors. I opted for semantic selectors mostly because there weren't a lot of re-usable components in the design. The tradeoff here is that you get cleaner markup, but less reusability if you wanted to share component styles across pages.
- Use container queries or media queries for responsiveness. I opted for media queries because most the responsiveness was mostly focused around devices/viewport sizes rather than responding to container contexts for shared components.
- Keep the asset filenames as they are or rename for a consistent standard. Left them alone because EBQ clients probably have a good reason for the given names.
- Global padding. I noticed no padding styles in dev mode that applied to the overall page, so I used the smallest value I could glean from the grid lines (16px).
- Visual display and HTML source order disconnect: I opted for them to align on mobile devices and to accept a slight disconnect on desktop for the img elements because users don't usually tab to images and screen readers annoucing the img alt before the nearby text is probably not that disruptive.
- Desktop content padding: On desktop the --content-horz-padding is not really necessary, but I kept it because it helped more of the <p> text line-breaks match up with the Adobe XD design.
- Contact in-page anchors: I just made them that way because the design did not indicate what happens when those are clicked. Most likely they would bring the user to a real contact form page, or open a modal with a contact form.
- Debounce or throttle the scroll listener: I opted not to because it checks only four elements, removes itself after every element is revealed, and is registered as passive. Debouncing would delay the reveal, while throttling would add complexity without a meaningful performance benefit.
- Script in the head: I used `type="module"` because module scripts defer by default while opting into ESM semantics.

## Potential Enhancements

- Use `<picture>`, `<source>`, srcset and sizes to better support art direction and resolution switching across devices, DPI, and network differences.
- Make `<header>` sticky so it's always present regardless of the scroll position.
- Replace the scroll event listener used for the content reveal with `IntersectionObserver`. It can produce the same one-time reveal effect without checking every target during scroll events as the page grows.

## Questions

- The Adobe XD design had Lucide Grande font but I couldn't find an element it applied to.
