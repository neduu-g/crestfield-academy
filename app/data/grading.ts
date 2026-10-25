import { classScores, DEMO_PIN, subjects } from "./results";

export const gradeKey = [
  { grade: "A+", min: 85, max: 100, remark: "Excellent" },
  { grade: "A", min: 70, max: 84, remark: "Very good" },
  { grade: "B", min: 60, max: 69, remark: "Good" },
  { grade: "C", min: 50, max: 59, remark: "Credit" },
  { grade: "D", min: 45, max: 49, remark: "Fair" },
  { grade: "E", min: 40, max: 44, remark: "Pass" },
  { grade: "F", min: 0, max: 39, remark: "Fail" },
];

export function gradeFor(score: number) {
  return gradeKey.find((g) => score >= g.min) ?? gradeKey[gradeKey.length - 1];
}

export function ordinal(n: number) {
  const mod100 = n % 100;
  if (mod100 >= 11 && mod100 <= 13) return `${n}th`;
  switch (n % 10) {
    case 1:
      return `${n}st`;
    case 2:
      return `${n}nd`;
    case 3:
      return `${n}rd`;
    default:
      return `${n}th`;
  }
}

// Standard competition ranking: equal values share a position (1, 2, 2, 4).
function positionOf(value: number, all: number[]) {
  return all.filter((v) => v > value).length + 1;
}

function round1(n: number) {
  return Math.round(n * 10) / 10;
}

export function buildReport(row: number) {
  const totalsByStudent = classScores.map((scores) => scores.map(([ca, exam]) => ca + exam));
  const grandTotals = totalsByStudent.map((totals) => totals.reduce((a, b) => a + b, 0));
  const averages = grandTotals.map((t) => t / subjects.length);

  const rows = subjects.map((subject, i) => {
    const [ca, exam] = classScores[row][i];
    const total = ca + exam;
    const column = totalsByStudent.map((totals) => totals[i]);
    const grade = gradeFor(total);
    return {
      subject,
      ca,
      exam,
      total,
      lowest: Math.min(...column),
      highest: Math.max(...column),
      classAverage: round1(column.reduce((a, b) => a + b, 0) / column.length),
      grade: grade.grade,
      remark: grade.remark,
      position: ordinal(positionOf(total, column)),
    };
  });

  const average = averages[row];
  return {
    rows,
    totalObtained: grandTotals[row],
    totalObtainable: subjects.length * 100,
    average: round1(average),
    overallGrade: gradeFor(average).grade,
    classAverage: round1(averages.reduce((a, b) => a + b, 0) / averages.length),
    position: ordinal(positionOf(grandTotals[row], grandTotals)),
    numberInClass: classScores.length,
  };
}

export function principalRemark(average: number) {
  if (average >= 85) return "An outstanding term. Keep aiming high.";
  if (average >= 70) return "A very good result. Well done, and keep working steadily.";
  if (average >= 60) return "A good result. With more focus, even better is possible.";
  if (average >= 50) return "A fair result. Consistent effort will lift these grades.";
  return "More effort is needed next term. Please see the form teacher.";
}

// PINs use capital letters and numbers, excluding look-alikes O, 0, I and 1.
const PIN_PATTERN = /^[A-HJ-NP-Z2-9]{12}$/;

export function normalisePin(input: string) {
  return input.toUpperCase().replace(/[\s-]/g, "");
}

export function isDemoPin(input: string) {
  const pin = normalisePin(input);
  return PIN_PATTERN.test(pin) && pin === DEMO_PIN;
}
