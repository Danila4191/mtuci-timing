import React from "react";
import styles from "./card.module.css";

export interface CardProps {
  card: CardData;
  index: number;
}
export interface CardData {
  _id: string;
  data: string;
  lessons: Lesson[];
}
export interface Lesson {
  name: string;
  time: string;
  office: string;
  ticher: string;
  format: string;
}

function Card({ card,index }: CardProps) {
    
      const days = [
        'Понедельник',
        'Вторник',
        'Среда',
        'Четверг',
        'Пятница',
        'Суббота',
        'Воскресенье',
      ];
      const data = card.data.slice(0,-2)
      const data2 = data.replace('.','/');
      var d = new Date();
      var n = d.getDay();
 
  return <div className={`${styles.card}`}>
        <p>{`${card.data}(${days[index]})`}</p>
  </div>;
}
export default Card;
