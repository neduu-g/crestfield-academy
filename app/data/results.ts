// Fictional results data for the Crestfield Academy results demo.
// Nothing here belongs to a real student or school. Totals, grades, averages
// and positions are calculated from these raw scores in app/data/grading.ts.

// The demo PIN is shown on the results page. It uses capital letters and
// numbers only, with no look-alike characters (O, 0, I, 1).
export const DEMO_PIN = "CRSTDEMQ7X4K";

export const sessions = ["2026/2027"];
export const terms = ["First Term"];

export const subjects = [
  "English Language",
  "Mathematics",
  "Basic Science",
  "Basic Technology",
  "Social Studies",
  "Civic Education",
  "Business Studies",
  "Cultural and Creative Arts",
  "Computer Studies",
  "Agricultural Science",
  "French",
  "Home Economics",
];

// Raw scores for every student in the class, in the same order as `subjects`.
// Each pair is [C.A out of 40, Exam out of 60]. Row 0 is the demo student.
export const classScores: [number, number][][] = [
    [[38, 53], [33, 53], [28, 36], [30, 43], [36, 49], [29, 46], [34, 56], [38, 53], [33, 49], [36, 56], [31, 45], [30, 47]],
    [[31, 47], [24, 44], [25, 43], [25, 44], [30, 43], [23, 35], [35, 54], [36, 47], [27, 40], [29, 47], [22, 37], [30, 45]],
    [[26, 38], [24, 36], [24, 38], [25, 38], [26, 40], [18, 30], [25, 33], [27, 39], [24, 43], [27, 35], [21, 35], [25, 40]],
    [[29, 45], [34, 53], [32, 47], [28, 46], [27, 38], [24, 46], [27, 41], [24, 35], [32, 49], [26, 44], [27, 33], [27, 47]],
    [[32, 47], [38, 56], [33, 58], [30, 50], [36, 56], [32, 49], [31, 44], [33, 52], [33, 47], [32, 46], [29, 39], [27, 45]],
    [[16, 25], [24, 38], [25, 37], [18, 31], [18, 24], [27, 37], [28, 37], [16, 27], [20, 34], [29, 38], [25, 32], [26, 36]],
    [[27, 40], [27, 43], [35, 55], [32, 42], [27, 40], [29, 43], [33, 49], [25, 42], [29, 50], [34, 44], [30, 45], [25, 40]],
    [[12, 17], [21, 29], [17, 30], [24, 30], [23, 28], [21, 34], [19, 28], [13, 17], [12, 22], [18, 25], [22, 34], [14, 22]],
    [[15, 22], [20, 36], [19, 28], [14, 23], [15, 25], [11, 19], [17, 23], [21, 37], [23, 32], [20, 24], [25, 40], [14, 26]],
    [[20, 31], [29, 46], [30, 35], [27, 43], [28, 47], [25, 33], [25, 42], [21, 26], [25, 35], [27, 43], [19, 36], [28, 33]],
    [[19, 30], [28, 41], [24, 32], [24, 41], [23, 36], [20, 22], [22, 26], [25, 37], [21, 30], [29, 39], [26, 36], [29, 36]],
    [[19, 25], [23, 30], [20, 23], [22, 38], [15, 27], [21, 24], [26, 31], [14, 27], [13, 26], [13, 20], [14, 21], [22, 40]],
    [[20, 22], [18, 29], [17, 22], [16, 24], [18, 23], [18, 21], [19, 28], [12, 19], [18, 22], [19, 22], [15, 19], [18, 33]],
    [[15, 22], [18, 22], [14, 17], [16, 25], [24, 37], [20, 37], [22, 32], [23, 37], [18, 25], [18, 29], [15, 21], [24, 33]],
    [[18, 23], [19, 27], [16, 30], [19, 27], [19, 28], [20, 38], [16, 25], [21, 24], [21, 30], [22, 30], [16, 24], [18, 24]],
    [[30, 42], [24, 41], [27, 42], [18, 32], [19, 28], [25, 44], [31, 43], [27, 40], [27, 37], [29, 38], [19, 30], [31, 46]],
    [[22, 25], [23, 29], [19, 22], [20, 30], [12, 15], [13, 25], [12, 18], [18, 25], [18, 22], [17, 31], [12, 17], [15, 24]],
    [[31, 50], [35, 58], [33, 45], [32, 51], [33, 53], [39, 60], [28, 36], [35, 55], [33, 53], [34, 48], [26, 45], [32, 53]],
    [[33, 59], [40, 60], [36, 48], [32, 44], [36, 58], [25, 41], [36, 50], [30, 43], [31, 52], [26, 44], [28, 38], [29, 50]],
    [[26, 37], [30, 44], [27, 40], [33, 55], [32, 42], [27, 35], [30, 49], [25, 35], [22, 32], [34, 51], [29, 43], [27, 36]],
    [[18, 24], [20, 22], [18, 32], [24, 39], [17, 28], [29, 40], [22, 26], [22, 27], [23, 41], [25, 34], [26, 41], [18, 23]],
    [[17, 29], [18, 29], [28, 46], [24, 41], [17, 33], [25, 42], [24, 29], [19, 31], [27, 43], [24, 33], [15, 27], [28, 42]],
    [[27, 41], [26, 32], [25, 47], [19, 28], [24, 33], [14, 31], [29, 45], [27, 44], [26, 34], [15, 29], [26, 40], [21, 33]],
    [[33, 46], [38, 48], [36, 50], [35, 51], [37, 57], [37, 54], [31, 53], [33, 43], [28, 44], [33, 53], [27, 46], [27, 46]],
    [[19, 27], [31, 43], [30, 49], [27, 46], [21, 26], [27, 42], [23, 31], [19, 32], [26, 43], [24, 33], [29, 40], [30, 40]],
    [[34, 53], [33, 41], [31, 53], [28, 36], [32, 43], [33, 57], [35, 54], [33, 50], [30, 39], [30, 46], [34, 48], [32, 47]],
    [[12, 17], [13, 18], [19, 24], [20, 30], [23, 26], [12, 21], [10, 17], [14, 19], [18, 25], [15, 21], [16, 17], [20, 27]],
    [[24, 34], [25, 35], [23, 37], [28, 35], [28, 37], [21, 28], [28, 41], [29, 44], [26, 40], [32, 49], [29, 43], [24, 36]],
];

export const demoStudent = {
  row: 0,
  name: "Amara Nwosu",
  admissionNo: "CFA/DEMO/0142",
  className: "JSS 2",
  arm: "Gold",
  session: "2026/2027",
  term: "First Term",
  gender: "Female",
  daysOpened: 118,
  daysPresent: 114,
  nextTermBegins: "Monday, 11 January 2027",
  formTeacher: {
    role: "Form Teacher",
    remark:
      "Amara is attentive and well organised. She contributes thoughtfully in class and should keep up her reading habit over the holiday.",
  },
  principal: {
    role: "Principal",
  },
  affective: [
    { trait: "Punctuality", rating: 5 },
    { trait: "Attendance", rating: 4 },
    { trait: "Neatness", rating: 5 },
    { trait: "Politeness", rating: 5 },
    { trait: "Honesty", rating: 4 },
    { trait: "Relationship with others", rating: 4 },
    { trait: "Self-control", rating: 4 },
    { trait: "Attentiveness", rating: 5 },
  ],
  psychomotor: [
    { skill: "Handwriting", rating: 4 },
    { skill: "Drawing and painting", rating: 3 },
    { skill: "Sports and games", rating: 4 },
    { skill: "Musical skills", rating: 3 },
    { skill: "Handling of tools", rating: 4 },
    { skill: "Verbal fluency", rating: 5 },
  ],
};

export const ratingKey = [
  { rating: 5, label: "Excellent" },
  { rating: 4, label: "Very good" },
  { rating: 3, label: "Good" },
  { rating: 2, label: "Fair" },
  { rating: 1, label: "Poor" },
];
