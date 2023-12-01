import React from "react";
import { ScheduleComponent, ViewsDirective, ViewDirective, Day, Week, WorkWeek, Month, Agenda, Inject, Resize, DragAndDrop } from "@syncfusion/ej2-react-schedule";
import { DateRangePickerComponent } from "@syncfusion/ej2-react-calendars";
import { scheduleData } from "../data/dummy";
import { Header } from "../component";

const Calendar = () => {
  return(
    <div className=" bg-blue-900 m-2 md:m-10 mt-24 p-2 md:p-10 rounded-3xl">
      <Header category="App" title="Calendar" />
      <ScheduleComponent
      height = "650px"
      eventSettings={{ dataSource:
      scheduleData}}
      selectedDate={new Date(2023, 10, 1)}
      >
        <Inject services={[Day, Week, WorkWeek,Month,Agenda,Resize,DragAndDrop]} />
        </ScheduleComponent>
     
    </div>
  )

}
export default Calendar