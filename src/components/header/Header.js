import React, { useState, useEffect, useMemo } from "react";

import { SalutationText, DateText } from "./styles";

const Header = () => {
  const [salutation, setSalutation] = useState();

  const defineDate = () => {
    const newDate = new Date();

    const month = newDate.getMonth(),
      day = newDate.getDate(),
      year = newDate.getFullYear();

    const monthsArr = [
      "Jan",
      "Feb",
      "Mar",
      "April",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    console.log("função defineDate");

    return `${monthsArr[month]} ${day}, ${year}`;
  };

  const defineSalutation = () => {
    const dayHour = new Date().getHours();
    if (dayHour > 0 && dayHour < 12) {
      setSalutation("Good Morning");
    } else if (dayHour > 12 && dayHour < 18) {
      setSalutation("Good Afternoon");
    } else if (dayHour > 18) {
      setSalutation("Good Evening");
    }
  };

  console.log("renderizou");

  useEffect(() => {
    setInterval(() => {
      defineSalutation();
    }, 60000);

    defineSalutation();
  }, []);

  const memoizedSalutation = useMemo(
    () => <SalutationText>{salutation}</SalutationText>,
    [salutation]
  );

  return (
    <>
      <DateText>{defineDate()}</DateText>
      {memoizedSalutation}
    </>
  );
};

export default Header;
