import React, { createContext, useContext, useState } from "react";

type SessionContextType = {
  calendarDate: Date;
  setCalendarDate: React.Dispatch<React.SetStateAction<Date>>;
  selectedDate: Date;
  setSelectedDate: React.Dispatch<React.SetStateAction<Date>>;
  selectedTab: number;
  setSelectedTab: React.Dispatch<React.SetStateAction<number>>;
  addingExpense: boolean;
  setAddingExpense: React.Dispatch<React.SetStateAction<boolean>>;
};

const SessionContext = createContext<SessionContextType | null>(null);

export function SessionProvider({ children }: { children: React.ReactNode }) {
  const today = new Date();
  const [selectedDate, setSelectedDate] = useState<Date>(today);
  const [selectedTab, setSelectedTab] = useState<number>(0);
  const [calendarDate, setCalendarDate] = useState<Date>(today);
  const [addingExpense, setAddingExpense] = useState<boolean>(false);

  return (
    <SessionContext.Provider
      value={{
        calendarDate,
        setCalendarDate,
        selectedDate,
        setSelectedDate,
        selectedTab,
        setSelectedTab,
        addingExpense,
        setAddingExpense,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
}

export function useSession() {
  const context = useContext(SessionContext);

  if (!context) {
    throw new Error("useSession must be used within SessionProvider");
  }

  return context;
}
