# Accessibility & Performance Audit

## Audit Summary

The deployed portfolio was audited using Lighthouse Mobile, WAVE, and a manual keyboard-only accessibility test.

No code changes were required after the audit because the project already met the required performance and accessibility targets.

---

## 1. Lighthouse — Before

**Device:** Mobile  
**Mode:** Navigation  
**Throttling:** Simulated

| Metric | Before |
|---|---:|
| Performance | 100 |
| Accessibility | 100 |
| First Contentful Paint | 1.3 s |
| Largest Contentful Paint | 1.3 s |
| Total Blocking Time | 0 ms |
| Cumulative Layout Shift | 0 |

### Before Screenshot

> Insert the Lighthouse baseline screenshot here.

---

## 2. WAVE Accessibility Audit

WAVE was run against:

`https://basitachak.vercel.app`

| Check | Result |
|---|---:|
| Errors | 0 |
| Contrast Errors | 0 |
| Alerts | 1 |
| Features | 4 |
| Structure | 13 |
| ARIA | 1 |
| WAVE AIM Score | 10/10 |

### WAVE Finding

WAVE reported one alert for a **link to a PDF document**.

This was reviewed manually and is not an accessibility error. The alert identifies the PDF link for manual review and does not indicate a failed accessibility requirement.

No WAVE errors or contrast errors were detected.

### WAVE Screenshot

> Insert the WAVE results screenshot here.

---

## 3. Keyboard Accessibility Test

A keyboard-only pass was performed on the deployed portfolio without using the mouse.

The primary navigation and interactive elements were tested using:

- `Tab`
- `Shift + Tab`
- `Enter`
- `Space`

The primary flow was completable using the keyboard alone.

### Result

**PASS**

Interactive elements were keyboard reachable and focus states were visible during navigation.

---

## 4. Accessibility Review

The following areas were reviewed:

- Semantic page structure and landmarks
- Heading hierarchy
- Keyboard navigation
- Visible focus states
- Interactive element accessibility
- ARIA usage
- Link accessibility
- Color contrast
- PDF link
- Page structure

No blocking accessibility issues were identified.

---

## 5. Performance Review

Lighthouse Mobile reported:

- Performance score: **100**
- First Contentful Paint: **1.3 s**
- Largest Contentful Paint: **1.3 s**
- Total Blocking Time: **0 ms**
- Cumulative Layout Shift: **0**

These results indicate that the deployed page met the assignment's performance target without requiring additional optimization.

---

## 6. Changes Made

No code changes were required as a result of this audit.

The deployed portfolio already satisfied the required Lighthouse and WAVE checks.

---

## 7. Lighthouse — After

The Lighthouse audit was re-run after completing the accessibility review.

| Metric | Before | After |
|---|---:|---:|
| Performance | 100 | 100 |
| Accessibility | 100 | 100 |
| First Contentful Paint | 1.3 s | 1.3 s |
| Largest Contentful Paint | 1.3 s | 1.3 s |
| Total Blocking Time | 0 ms | 0 ms |
| Cumulative Layout Shift | 0 | 0 |

### After Screenshot

> Insert the final Lighthouse screenshot here.

---

## 8. Final Result

The deployed portfolio meets the assignment requirements:

- Lighthouse Mobile Performance: **100**
- Lighthouse Mobile Accessibility: **100**
- WAVE Errors: **0**
- WAVE Contrast Errors: **0**
- Keyboard-only primary flow: **PASS**
- Accessibility issues requiring code changes: **None**

The audit confirms that the deployed portfolio meets the required performance and accessibility targets.