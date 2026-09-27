# Break Your Own Site — Hardening Checkpoint

## Site
- Portfolio: https://basitachak.vercel.app/
- Checkpoint: Week 7 — Break Your Own Site

## 1. Break Tests

| Test | Result | Triage |
|---|---|---|
| Submit contact form empty | Browser's `required` validation prevents submission | Fixed / working as intended |
| Submit invalid email such as `abc` | Browser email validation prevents submission | Fixed / working as intended |
| Submit garbage text in required fields | Text fields accept arbitrary user text; this is expected contact-form behavior | Known limitation |
| Submit the form twice quickly | No client-side duplicate-submit lock is implemented | Known limitation |
| Use very long name/message | No explicit client-side length limit is implemented | Known limitation |
| Keyboard navigation | Previously verified: primary flow is keyboard accessible | Fixed |
| Mobile layout | Previously verified with Lighthouse Mobile | Fixed |
| External GitHub/LinkedIn/Calendly links | Links use normal external navigation with `noopener noreferrer` | Fixed |
| CV/PDF link | Opens the local resume PDF in a new tab | Fixed |
| No-results / empty search case | Portfolio has no search feature | Not applicable |
| JavaScript/API failure | Portfolio is primarily static; contact delivery is handled by Formspree | Known external-service dependency |

## 2. SEO / Findability Hardening

Added:
- Descriptive page title
- Meta description
- Canonical URL
- Open Graph title, description, URL, and image
- Twitter/X summary card metadata
- `Person` structured data with GitHub and LinkedIn profiles
- `robots.txt`
- `sitemap.xml`
- Social preview image at `/og-image.png`

The site should be checked after deployment by searching:
- `Abdul Basit BasitAchak`
- `basitachak.vercel.app`
- `"Abdul Basit" "Full Stack AI Developer"`

If the Vercel site itself does not appear in search results yet, record that as a **known indexing limitation**, not as a fake pass. Search indexing can take time.

## 3. Speed Evidence

Previous deployed Lighthouse Mobile audit:

- Performance: 100
- Accessibility: 100
- First Contentful Paint: 1.3 s
- Largest Contentful Paint: 1.3 s
- Total Blocking Time: 0 ms
- Cumulative Layout Shift: 0

Re-run Lighthouse after the SEO changes and record the new result below.

### Final Lighthouse Evidence
> Insert final Lighthouse screenshot here.

## 4. Fixed Now

1. Basic SEO metadata was expanded beyond the existing title/description.
2. Social-sharing metadata and preview image were added.
3. Canonical URL was added.
4. Search-engine crawling files were added.
5. Structured data was added for the portfolio owner.

## 5. Known Limitations

1. The contact form relies on Formspree as an external delivery service.
2. There is no client-side duplicate-submit lock.
3. There are no explicit maximum lengths on contact fields.
4. Search-engine indexing cannot be guaranteed immediately after deployment.
5. The portfolio does not contain a search/results feature, so no-results search testing is not applicable.

## 6. Structured Hardening Review

### Review checklist

- [x] Empty form behavior reviewed
- [x] Invalid email behavior reviewed
- [x] Garbage input behavior reviewed
- [x] Duplicate submission risk identified
- [x] Long-input risk identified
- [x] External links reviewed
- [x] PDF/CV link reviewed
- [x] Existing Lighthouse results reviewed
- [x] SEO gaps identified
- [x] SEO fix implemented

### Must-fix outcome

**Must-fix items addressed:** SEO metadata, canonical URL, social preview metadata, structured data, robots.txt, and sitemap.xml.

### Review evidence

> Insert screenshot of the deployed site after the SEO changes.

> Insert screenshot of final Lighthouse result.

> Insert screenshot showing the empty/invalid contact-form validation.

> Insert screenshot of search/findability result.

## 7. Final Status

**READY FOR LAUNCH HARDENING REVIEW**, subject to the final deployed-site checks and screenshots above.
