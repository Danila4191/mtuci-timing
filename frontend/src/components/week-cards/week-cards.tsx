import React from "react";
import styles from "./week-cards.module.css";
import Card from "../card/card";
import { CardData } from "../card/card";

interface CardsProps {
  cards?: CardData[];
}

function WeekCards({ cards }: CardsProps) {
  // запрос из стора выбранную неделю

  function arrays(cards) {
    const days = [
      "Понедельник",
      "Вторник",
      "Среда",
      "Четверг",
      "Пятница",
      "Суббота",
      "Воскресенье",
    ];
    let countDays = 7;
    let count = 0;
    let arrayDays = new Array();

    while (count < countDays) {
      arrayDays.push({ day: days[count] });
      count = count + 1;
    }
    return arrayDays;

    //   console.log(arrayDays)
    //  if ((count < countDays) && (count === 7))
    //  count = count - 7
    //  countDays =countDays - 7
  }
  console.log(arrays());
  return (
    <div className={` ${styles.cards}`}>
      {cards?.map((cardInfo: CardData, index) => (
        <Card key={cardInfo._id} card={cardInfo} index={index} />
      ))}
    </div>
  );
}
export default WeekCards;
