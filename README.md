# Crestfield Academy (Concept Project)

Crestfield Academy is a fictional school website concept with an elegant academic identity, admissions pages, academic programmes, and a demonstration of how results look in the NeduHub Result Portal.

It was built by NeduHub as a portfolio piece. The school, its history, staff roles, news, events, contact details, student and results are all fictional. Forms do not send anything.

## How to run it

You need Node.js 20.9 or newer.

1. Open a terminal in this `crestfield-academy` folder.
2. Run `npm install` (only needed the first time).
3. Run `npm run dev`.
4. Open http://localhost:3000 in your browser.

To check a production build, run `npm run build` and then `npm run start`.

## Pages

| Page | Path |
| --- | --- |
| Home | `/` |
| About (history, mission, vision, values, leadership roles) | `/about` |
| Academics (Nursery, Primary, Junior Secondary, Senior Secondary) | `/academics` |
| Admissions (steps, requirements, FAQs, demo enquiry form) | `/admissions` (the Apply Now buttons go to `/admissions#apply`) |
| News & Events | `/news` |
| Gallery | `/gallery` |
| Contact (placeholders and demo form) | `/contact` |
| Privacy | `/privacy` |
| Results demo | `/results` (every Check Results button goes here) |

## Results demo

- The page shows the banner "Demo only. Fictional student and results." and the line "Schools use the NeduHub Result Portal", which links to https://neduhub.vercel.app/portal in a new tab.
- Students enter a 12-character PIN (capital letters and numbers, never O, 0, I or 1). The demo PIN `CRSTDEMQ7X4K` is shown on the page. Any other input shows "That PIN is not valid" and gives no hints. Results are never looked up by name or admission number.
- Session (2026/2027) and term (First Term) are chosen from dropdowns.
- The report card shows the school header and crest, student details, number in class, and a subject table with C.A (40), Exam (60), Total (100), Lowest, Highest, Class Average, Grade, Remark and Subject Position. Below that are totals, the overall average, class position, affective and psychomotor ratings (5 to 1), the grade key, the form teacher's and principal's remarks, and the date next term begins.
- Only raw C.A and exam scores are stored, for a fictional class of 28 (`app/data/results.ts`). Totals, lowest, highest, class averages, grades, remarks, subject positions, overall average and class position are all calculated in `app/data/grading.ts`. Tied scores share a position (1st, 2nd, 2nd, 4th).
- The Print button uses a print stylesheet. It prints only the report card on one A4 page, with no navigation, footer or banner. PDF export was not added. Use the browser's "Save as PDF" in the print dialog instead.

**Important:** the demo PIN check runs in the browser. Anyone can read the PIN and the scores in the page code. This is acceptable only because every name and score is fictional. A real portal must check PINs on a server and never send other students' data to the browser.

## How to edit content

All editable content lives in `app/data/`:

- `site.ts`: address, phone, email, office hours (all placeholders), nav links, and the NeduHub and portal links.
- `content.ts`: highlights, values, leadership roles, admission steps, requirements, FAQs and gallery photos.
- `programmes.ts`: the four academic sections and the "beyond the classroom" cards.
- `news.ts`: announcements and upcoming events.
- `results.ts`: demo PIN, sessions, terms, subjects, class scores and the demo student's details, ratings and remarks.
- `grading.ts`: grade key and all result calculations (edit only if the grading rules change).

## Brand

The crest (a shield with an open book) and the "CRESTFIELD / ACADEMY" wordmark are original SVGs in `app/components/Crest.tsx`. The favicon is `app/icon.svg`. Fonts are Playfair Display (headings) and Source Sans 3 (body), loaded through `next/font`.

## Image credits

All photos are from [Unsplash](https://unsplash.com) and used under the [Unsplash License](https://unsplash.com/license). They were resized to 1600px wide (large background photos) or 800px wide (cards and gallery) and saved in `public/images/`. Every photo was checked for readable signs, real school names, crests and brand logos, and any photo that had them was not used.

| File | Photographer | Source |
| --- | --- | --- |
| hero-campus.jpg | Mikheil Kuzmidi | https://unsplash.com/photos/a-bench-in-a-grassy-area-in-front-of-a-building-bZQtC5vxONI |
| about-building.jpg | Joey Zhou | https://unsplash.com/photos/red-brick-building-with-cupola-iCxJiAAi1Wg |
| classroom.jpg | Ivan Aleksic | https://unsplash.com/photos/empty-classroom-with-desks-and-chalkboard-PDRFeeDniCk |
| library.jpg | Drahomír Hugo Posteby-Mach | https://unsplash.com/photos/library-interior-with-bookshelves-and-tables-n4y3eiQSIoc |
| nursery.jpg | Sipho Ngondo | https://unsplash.com/photos/a-little-girl-sitting-on-the-ground-reading-a-book-6wuVtGrbL2U |
| primary.jpg | TopSphere Media | https://unsplash.com/photos/2-smiling-boys-in-uniform-oOHBxlGADx4 |
| junior-secondary.jpg | David Geneugelijk | https://unsplash.com/photos/a-student-carefully-draws-lines-with-a-ruler-zzcHmwBaG0w |
| senior-secondary.jpg | Zach Wear | https://unsplash.com/photos/a-couple-of-kids-that-are-sitting-in-a-desk-igyaKYzjkHU |
| teacher-class.jpg | David Geneugelijk | https://unsplash.com/photos/a-teacher-instructs-students-in-a-classroom-CXa6E3krENE |
| graduation.jpg | Oyemike Princewill | https://unsplash.com/photos/girl-in-green-academic-dress-4BvH27qTJ58 |
| books.jpg | Susan Q Yin | https://unsplash.com/photos/books-on-brown-wooden-shelf-2JIvboGLeho |
| science-lab.jpg | Chidera Faustina Okeke | https://unsplash.com/photos/young-woman-using-a-microscope-in-a-science-lab-SjzZV4JOge8 |
| pupils-smiling.jpg | Annie Spratt | https://unsplash.com/photos/boy-in-brown-collared-top-smiling-and-surrounded-by-children-QdK6aujOLYs |
| twin-boys.jpg | TopSphere Media | https://unsplash.com/photos/twin-boys-jLbmY5Zp7UQ |
| reading-steps.jpg | Michael Ali | https://unsplash.com/photos/a-group-of-children-sitting-on-steps-with-books-dPuMBIbvDCg |
| pupil-desk.jpg | Felicia Montenegro | https://unsplash.com/photos/a-group-of-young-children-sitting-at-a-table-EEbLJlfCnSI |
| corridor.jpg | Max von Rahmel | https://unsplash.com/photos/long-empty-hallway-with-wooden-floor-and-bright-windows-eKrFTQtyy68 |
| student-reading.jpg | Gift Habeshaw | https://unsplash.com/photos/selective-focus-photography-of-woman-reading-book-while-sitting-at-bench-kSTcz5gE018 |
| pupil-smile.jpg | Ben White | https://unsplash.com/photos/boy-holding-white-paper-83tkHLPgg2Q |

## Known limitations

- Frontend only. There is no backend, database or login.
- Contact and admissions forms show a demo notice and send nothing.
- The results demo has one fictional student, one session and one term.
- The PIN check runs in the browser (see the note above). This is fine for fictional data only.
- No PDF export. Printing to PDF from the browser works.
- The stock photos come from different countries and settings, so the campus photos do not show one real school.

## Build report

Checked on 24 October 2026:

- `npm run lint` and `npm run build` pass with no errors. All pages are prerendered as static pages.
- Every page was opened in Chrome at phone (390px), tablet (820px) and laptop (1366px) widths. There were no console errors, broken images, broken internal links, missing alt text or sideways scrolling.
- Results demo tested: empty, wrong, too short, too long and look-alike-character PINs all show "That PIN is not valid". The demo PIN works, including in lowercase or with spaces. The report card values match an independent calculation from the raw scores (total 982/1200, average 81.8%, 3rd of 28). "Check another PIN" returns to an empty form.
- Print was tested with Chrome's print-to-PDF. The report card fits on one A4 page, and the header, footer, banner and buttons are hidden.
- The mobile menu opens and closes (including with the Escape key) and closes after navigating.
- The footer on every page reads "Concept Project by NeduHub" and links to https://neduhub.vercel.app. The About page has a "Concept Project" section.
