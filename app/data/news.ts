// Fictional announcements and events for the Crestfield Academy concept.

export type NewsItem = {
  slug: string;
  date: string; // ISO date
  category: "Announcement" | "Academics" | "Community";
  title: string;
  summary: string;
  image: string;
  imageAlt: string;
};

export type EventItem = {
  date: string; // ISO date
  title: string;
  time: string;
  location: string;
  details: string;
};

export const news: NewsItem[] = [
  {
    slug: "first-term-midterm-break",
    date: "2026-10-19",
    category: "Announcement",
    title: "First term mid-term break dates",
    summary:
      "Mid-term break runs from Thursday 29 October to Monday 2 November. Classes resume on Tuesday 3 November at the usual time.",
    image: "/images/corridor.jpg",
    imageAlt: "A long, bright school corridor with a wooden floor and tall windows",
  },
  {
    slug: "reading-challenge-launch",
    date: "2026-10-08",
    category: "Academics",
    title: "Termly reading challenge begins",
    summary:
      "Every class from Primary 3 to SSS 3 has a reading list for the term. Students log their books with their English teacher.",
    image: "/images/library.jpg",
    imageAlt: "A bright library with tall windows, bookshelves and red chairs at round tables",
  },
  {
    slug: "science-week",
    date: "2026-09-28",
    category: "Academics",
    title: "Junior and senior science week",
    summary:
      "Students ran simple experiments, presented projects and visited the laboratory in small groups across the week.",
    image: "/images/science-lab.jpg",
    imageAlt: "A student looking through a microscope in a science laboratory",
  },
  {
    slug: "parents-forum",
    date: "2026-09-15",
    category: "Community",
    title: "Welcome back parents' forum",
    summary:
      "Parents met form teachers and heads of section to talk through the term plan, homework routines and communication.",
    image: "/images/teacher-class.jpg",
    imageAlt: "A teacher holding up a sheet of paper while speaking to students",
  },
];

export const events: EventItem[] = [
  {
    date: "2026-11-13",
    title: "Inter-house sports day",
    time: "8:00 am to 2:00 pm",
    location: "School field",
    details: "Track events, relays and a march past by all four houses. Parents are welcome.",
  },
  {
    date: "2026-11-27",
    title: "Open day for prospective families",
    time: "10:00 am to 1:00 pm",
    location: "Main building",
    details: "Tour classrooms, meet teachers and ask questions about admissions.",
  },
  {
    date: "2026-12-07",
    title: "First term examinations begin",
    time: "8:00 am onwards",
    location: "All sections",
    details: "Examination timetables will be shared with students by their form teachers.",
  },
  {
    date: "2026-12-16",
    title: "Christmas carol service and prize giving",
    time: "11:00 am",
    location: "School hall",
    details: "Readings, carols and recognition for effort, conduct and progress across the term.",
  },
];

export function formatDate(iso: string, options: Intl.DateTimeFormatOptions = { day: "numeric", month: "long", year: "numeric" }) {
  return new Date(`${iso}T12:00:00`).toLocaleDateString("en-GB", options);
}
