export const nowDate = new Date().toISOString().split('T')[0]

export function addDays(date, days) {
    let result = new Date(date);
    result.setDate(result.getDate() + days);

    return result.toISOString().split('T')[0];
}