export class DateSpan {
  readonly start: Date;
  readonly end: Date;

  constructor(start: Date, end: Date) {
    this.start = start;
    this.end = end;
  }

  static create(start: Date, end?: Date): DateSpan;
  static create(start: string, end?: string): DateSpan;
  static create(start: string | Date, end?: string | Date): DateSpan {
    const startDate = new Date(start);
    let endDate: Date;

    if (end === undefined) {
      endDate = new Date(startDate);
    } else {
      endDate = new Date(end);
    }

    return new DateSpan(startDate, endDate);
  }
}
