import React, { createContext, useContext, useState } from "react";

type SessionContextType = {
  monthDisplay: number;
  setMonthDisplay: React.Dispatch<React.SetStateAction<number>>;
  selectedDate: Date;
  setSelectedDate: React.Dispatch<React.SetStateAction<Date>>;
  selectedTab: number;
  setSelectedTab: React.Dispatch<React.SetStateAction<number>>;
};

const SessionContext = createContext<SessionContextType | null>(null);

export function SessionProvider({ children }: { children: React.ReactNode }) {
  const today = new Date();
  const [selectedDate, setSelectedDate] = useState<Date>(today);
  const [selectedTab, setSelectedTab] = useState<number>(0);
  const [monthDisplay, setMonthDisplay] = useState<number>(today.getMonth());

  return (
    <SessionContext.Provider
      value={{
        monthDisplay,
        setMonthDisplay,
        selectedDate,
        setSelectedDate,
        selectedTab,
        setSelectedTab,
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
