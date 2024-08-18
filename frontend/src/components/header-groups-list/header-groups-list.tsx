import { useState } from "react";
import styles from "./header-groups-list.module.css";
import { Button } from "../../ui/button/button";
import { NavLink } from "react-router-dom";

interface HeaderGroupsProps {
  groups?: HeaderGroup[];
}
interface HeaderGroup {
  name: string;
}
function HeaderGroups({ groups }: HeaderGroupsProps) {
  const [menuActive, setMenuActive] = useState<boolean>(false);
  return (
    <div className={styles.groups__menu}>
      <button
        onClick={() => setMenuActive(!menuActive)}
        className={`${styles.groups__button} ${
          menuActive && styles.groups__button_active
        }`}
      >
        <p className={"text text_type_Medium text_size_Medium"}>
          выберите группу
        </p>
        <svg className={styles.arrow} />
      </button>
      {menuActive && (
        <div className={`${styles.groups__container} `}>
          <ul className={styles.groups}>
            {groups?.map((item: HeaderGroup) => (
              <li className={styles.groups__item}>
                <p className="text"> {item.name}</p>
              </li>
            ))}
          </ul>
          <Button buttonColor="blue" text="Создать группу" />
        </div>
      )}
    </div>
  );
}
export default HeaderGroups;
