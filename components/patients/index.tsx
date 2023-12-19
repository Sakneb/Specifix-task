import React, {
  createContext,
  useEffect,
  useContext,
  useState,
  ReactNode,
} from "react";
import { PatientProps } from "./types";
import mockData from "./mockData";

interface PatientProviderProps {
  children: ReactNode;
}

const PatientContext = createContext<{ patients: PatientProps[] } | null>(null);

export const PatientProvider: React.FC<PatientProviderProps> = ({
  children,
}) => {
  const [patients, setPatients] = useState<PatientProps[]>(mockData.patients);

  useEffect(() => {
    const fetchPatients = async (): Promise<void> => {
      try {
        const response = await fetch(`http://localhost:9000/patients/`);
        const data = await response.json();
        console.log("Fetched data:", data);
        setPatients(data.patients);
      } catch (error) {
        console.error("Error fetching patients:", error);
        console.error("Fetching local mock data instead.");
      }
    };

    fetchPatients();
  }, []);

  return (
    <PatientContext.Provider value={{ patients }}>
      {children}
    </PatientContext.Provider>
  );
};

export const usePatientContext = () => {
  const context = useContext(PatientContext);
  if (!context) {
    throw new Error("usePatientContext must be used within a PatientProvider");
  }
  return context;
};
