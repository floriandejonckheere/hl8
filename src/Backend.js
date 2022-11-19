const Backend = {
  professionals: [
    {
      id: 0,
      name: "Dr. Ilka Valkonen",
    }
  ],
  patients: [
    {
      id: 1,
      name: "Laitinen Mikko",
      birthdate: "12.04.1974",
      sex: "Male",
      image: "patient1-thumb.jpg",
    },
    {
      id: 2,
      name: "Marttila Leea",
      birthdate: "23.10.1959",
      sex: "Female",
      image: "patient2-thumb.jpg",
    },
    {
      id: 3,
      name: "Ukkonen Ville",
      birthdate: "01.01.1970",
      sex: "Male",
      image: "patient3-thumb.jpg",
    }
  ],
  requestId: 2,
  requests: [
    {
      id: 0,
      professionalId: 0,
      patientId: 1,
      healthcare: true,
      prescriptions: false,
      duration: 1,
      approved: null,
    },
    {
      id: 1,
      professionalId: 0,
      patientId: 2,
      healthcare: true,
      prescriptions: true,
      duration: 7,
      approved: true,
    },
    {
      id: 2,
      professionalId: 0,
      patientId: 3,
      healthcare: false,
      prescriptions: true,
      duration: 1,
      approved: false,
    },
  ],
}

export default Backend
