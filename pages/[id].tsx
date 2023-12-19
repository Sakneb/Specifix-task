import Image from "next/image";
import styles from "@/styles/Home.module.scss";
import { PatientProps } from "@/components/patients/types";
import { usePatientContext } from "@/components/patients/index";
import { useEffect, useState } from "react";
import router from "next/router";

const DataPage = () => {
  const { patients } = usePatientContext();
  const [patient, setPatient] = useState<PatientProps | null>(null);

  const { id } = router.query;

  useEffect(() => {
    if (id && patients) {
      const selectedPatient = patients.find((p) => String(p.id) === String(id));

      if (!selectedPatient) {
        console.error(`No patient found with ID ${id}`);
      }

      setPatient(selectedPatient || null);
    }
  }, [id, patients]);

  if (!patient && id) {
    return <p>Loading patient with ID {id}...</p>;
  }

  if (!patient) {
    return <p>No patient found</p>;
  }

  return (
    <div className={styles.datapage}>
      <h1>{patient.name}</h1>
      <p>Address: {patient.address}</p>
      <p>Age: {patient.age}</p>
      <p>Blood Type: {patient.blood_type}</p>
      <p>Email: {patient.email}</p>
      <p>Gender: {patient.gender}</p>
      <p>Phone: {patient.phone}</p>
      {patient.image && (
        <Image
          src={patient.image}
          alt="Patient's Image"
          width={800}
          height={500}
        />
      )}
    </div>
  );
};

export default DataPage;
