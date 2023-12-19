// mainpage.tsx
import * as THREE from "three";
import styles from "@/styles/Home.module.scss";
import { PatientProps } from "@/components/patients/types";
import { usePatientContext } from "@/components/patients/index";
import { useEffect, useState } from "react";
import Header from "@/components/header/index";
import Image from "next/image";

const MainPage = () => {
  const { patients } = usePatientContext();
  const [patientsList, setPatientsList] = useState<PatientProps[]>([]);
  const [expandedPatientId, setExpandedPatientId] = useState<number | null>(
    null
  );

  useEffect(() => {
    setPatientsList(patients);
  }, [patients]);

  const handleClick = (patientId: number) => {
    setExpandedPatientId((prevId) => (prevId === patientId ? null : patientId));
  };

  return (
    <div className={styles.mainpage}>
      <Header />

      <div className={styles.main__container} id="patients">
        <h1>List Of Patients</h1>
        <div className={styles.line}></div>
        <div className={styles.listOfPatients}>
          <ul>
            {patientsList.map((patient: PatientProps, index: number) => (
              <li key={patient.id}>
                <div onClick={() => handleClick(patient.id || 0)}>
                  {`${index + 1}. ${patient.name}`}
                </div>
                {expandedPatientId === patient.id && (
                  <div className={styles.patient__data}>
                    <p>Address: {patient.address}</p>
                    <p>Age: {patient.age}</p>
                    <p>Blood Type: {patient.blood_type}</p>
                    <p>Email: {patient.email}</p>
                    <p>Gender: {patient.gender}</p>
                    <p>Phone: {patient.phone}</p>
                    <div className={styles.patient__image}>
                      {patient.image && (
                        <Image
                          src={patient.image}
                          alt="Patient's Image"
                          width={800}
                          height={500}
                        />
                      )}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
