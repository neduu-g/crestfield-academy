// Academic programmes for the Crestfield Academy concept (fictional).

export type Programme = {
  slug: string;
  name: string;
  classes: string;
  ages: string;
  summary: string;
  focus: string[];
  image: string;
  imageAlt: string;
};

export const programmes: Programme[] = [
  {
    slug: "nursery",
    name: "Nursery",
    classes: "Pre-Nursery, Nursery 1 and Nursery 2",
    ages: "Ages 2 to 5",
    summary:
      "A warm, play-based start where children build early language, number sense and confidence through songs, stories and guided play.",
    focus: ["Early literacy and phonics", "Number and shape play", "Art, music and movement", "Social and self-care skills"],
    image: "/images/nursery.jpg",
    imageAlt: "A young girl sitting outdoors and holding an open picture book",
  },
  {
    slug: "primary",
    name: "Primary",
    classes: "Primary 1 to Primary 6",
    ages: "Ages 5 to 11",
    summary:
      "A broad curriculum that strengthens reading, writing and mathematics while introducing science, social studies, languages and the arts.",
    focus: ["English and mathematics foundations", "Basic science and technology", "French and Nigerian languages", "Clubs, sports and creative arts"],
    image: "/images/primary.jpg",
    imageAlt: "Two smiling primary school boys in checked uniforms with school bags",
  },
  {
    slug: "junior-secondary",
    name: "Junior Secondary",
    classes: "JSS 1 to JSS 3",
    ages: "Ages 11 to 14",
    summary:
      "Students build study habits and independence across a wide range of subjects, with steady preparation for the Basic Education Certificate Examination.",
    focus: ["Core and elective subjects", "Practical science and computing", "Guided study skills", "Leadership through clubs and prefect roles"],
    image: "/images/junior-secondary.jpg",
    imageAlt: "A student drawing careful lines with a ruler in an exercise book",
  },
  {
    slug: "senior-secondary",
    name: "Senior Secondary",
    classes: "SSS 1 to SSS 3",
    ages: "Ages 14 to 17",
    summary:
      "Students choose a Science, Arts or Commercial pathway and prepare for WASSCE and NECO, with mentoring as they plan their next steps.",
    focus: ["Science, Arts and Commercial pathways", "Examination preparation", "Career and university guidance", "Community service and debate"],
    image: "/images/senior-secondary.jpg",
    imageAlt: "Two senior students reading a textbook together at a wooden desk",
  },
];

export const enrichment = [
  { title: "Clubs and societies", text: "Debate, Press, Science, Coding, Drama and Cultural clubs meet weekly." },
  { title: "Sports", text: "Football, athletics, table tennis and an annual inter-house sports day." },
  { title: "Library and reading", text: "Weekly library periods and a termly reading challenge for every class." },
  { title: "Pastoral care", text: "Form teachers and a guidance counsellor support each student's wellbeing." },
];
