const shifts = ['Day', 'Night', 'Chill1', 'Chill2'];
const startDate = new Date(1990, 0, 1);

/**
 * 
 * @param {Date} date 
 * @param {number} [team]
 */

export const calcShift = (date, team) => {
  date = new Date(date.toDateString());
  const days = Math.floor(
    (date.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)
  );
  return team ? shifts[(days + 4 - team) % 4] : `
    1st: ${shifts[(days + 3) % 4]}
    2nd: ${shifts[(days + 2) % 4]}
    3rd: ${shifts[(days + 1) % 4]}
    4th: ${shifts[(days + 0) % 4]}
  `;
};
