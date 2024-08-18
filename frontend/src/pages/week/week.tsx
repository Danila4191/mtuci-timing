import React from "react";
import styles from "./week.module.css";
import WeekCards from "../../components/week-cards/week-cards";
import { Button } from "../../ui/button/button";
function Week() {
    //1. через юз эффект получить текущую неделю
    //2. сделать кнопки запроса конкретной недели и группы в стор
    //3. текст обозначение цветов
    const fakeCards = [
        {
          _id: "1",
          data: "05.07.2024г.",
          lessons: [
            {
              name: "Гражданское социально-ответственное поведение,лекци",
              time: "19:00",
              office: "204",
              ticher: "PUPOK",
              format: "distant",
            },
            {
              name: "Гражданское социально-ответственное поведение,лекци",
              time: "21:00",
              office: "204",
              ticher: "PUPOK",
              format: "exam",
            },
          ],
        },
        {
          _id: "2",
          data: "06.07.2024г.",
          lessons: [
            {
              name: "Гражданское социально-ответственное поведение,лекци",
              time: "19:00",
              office: "204",
              ticher: "PUPOK",
              format: "distant",
            },
            {
              name: "Гражданское социально-ответственное поведение,лекци",
              time: "21:00",
              office: "204",
              ticher: "PUPOK",
              format: "exam",
            },
          ],
        },
        {
          _id: "3",
          data: "07.07.2024г.",
          lessons: [
            {
              name: "Гражданское социально-ответственное поведение,лекци",
              time: "19:00",
              office: "204",
              ticher: "PUPOK",
              format: "distant",
            },
            {
              name: "Гражданское социально-ответственное поведение,лекци",
              time: "21:00",
              office: "204",
              ticher: "PUPOK",
              format: "exam",
            },
          ],
        },
        {
          _id: "4",
          data: "08.07.2024г.",
          lessons: [
            {
              name: "Гражданское социально-ответственное поведение,лекци",
              time: "19:00",
              office: "204",
              ticher: "PUPOK",
              format: "distant",
            },
            {
              name: "Гражданское социально-ответственное поведение,лекци",
              time: "21:00",
              office: "204",
              ticher: "PUPOK",
              format: "person",
            },
          ],
        },
      ];
  return (
    <div className={`pl-20 pr-20 pt-20 ${styles.week}`}>
        <WeekCards cards={fakeCards}/>
        <div className=""/><p>-</p>
    </div>
  );
}
export default Week;
