import {
  DatePicker,
  RangeProvider,
  UtilityCalendar,
  withHolidays,
  withRange,
  withSelectedDay,
  withSundayFirst,
  withTasks,
  withWeekends,
} from "modsen-calendar-datepicker-library";
import "./App.css";

function App() {
  const calendarService = new UtilityCalendar();

  calendarService.addDecorator(withSelectedDay);
  calendarService.addDecorator(withHolidays);
  calendarService.addDecorator(withSundayFirst);
  calendarService.addDecorator(withTasks);
  calendarService.addDecorator(withWeekends);

  const Calendar = calendarService.getCalendar();

  const rangeService = new UtilityCalendar();
  rangeService.addDecorator(withHolidays);
  rangeService.addDecorator(withSelectedDay);
  rangeService.addDecorator(withWeekends);
  rangeService.addDecorator(withRange);

  const RangePicker = rangeService.getCalendar();

  return (
    <RangeProvider>
      <div style={{ display: "flex", gap: "30px" }}>
        <DatePicker CalendarView={Calendar} />
        <DatePicker CalendarView={RangePicker} />
      </div>
    </RangeProvider>
  );
}

export default App;
