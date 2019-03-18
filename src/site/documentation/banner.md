The banner component overrides the basic section-level grid in order to have the text inside the overlay box align with the text on the rest of the page. Were it to simply inherit the standard layout, the left edge of the text box would be aligned to the other text creating a slightly disjointed appearance.

The banner element should house the page's `h1` element and some introductory text. The `h1` should be unique and meaningful to the content of the page.

The banner image is set using an `img` element as opposed to a `background-image` declaration in CSS. This is to make use of the new `srcset` and `sizes` attributes for serving responsive images. These attributes allow the browser to determine the most appropriate image to download based on the user's screen size, pixel density and network speeds. Supplying the image as a background would require more complex, media-query heavy CSS and not make use of the browser's ability to decide on the best image to use.

Banners are set to span the full width of the screen and have a `min-height` set to `36vw`. This maintains the aspect ratio of the image regardless of the viewport size.