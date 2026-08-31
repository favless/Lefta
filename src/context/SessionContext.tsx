import { createContext, useContext, useState } from "react";

type SessionContextType = {
  selectedDay: string;
  setSelectedDay: React.Dispatch<React.SetStateAction<string>>;
  selectedTab: number;
  setSelectedTab: React.Dispatch<React.SetStateAction<number>>;
};

const SessionContext = createContext<SessionContextType | null>(null);

export function SessionProvider({ children }: { children: React.ReactNode }) {
  const [selectedDay, setSelectedDay] = useState<string>("");
  const [selectedTab, setSelectedTab] = useState<number>(0);

  return (
    <SessionContext.Provider
      value={{ selectedDay, setSelectedDay, selectedTab, setSelectedTab }}
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
