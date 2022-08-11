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

    return `${monthsArr[month]} ${day}, ${year}`;
  };

  const defineSalutation = () => {
    const dayHour = new Date().getHours(),
      dayMinutes = new Date().getMinutes();

    if (
        (dayHour >= 0 && dayMinutes > 0) && 
        (dayHour <= 11 && dayMinutes <= 59)
      ) {
      setSalutation("Good Morning");
    } else if (
      (dayHour >= 12 && dayMinutes >= 0) && 
      (dayHour <= 17 && dayMinutes <= 59)
    ) {
      setSalutation("Good Afternoon");
    } else if (dayHour >= 18) {
      setSalutation("Good Evening");
    }
  };

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
