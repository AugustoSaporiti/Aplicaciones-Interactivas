const usuarioRoles = [
    {
      name: "Pepita",
      surname: "Gomez",
      email: "pepita@test.com",
      role: "Admin",
      pass: "admin"
    },
    {
      name: "Sandro",
      surname: "Perez",
      email: "sandro@test.com",
      role: "Doctor",
      pass: "doctor"
    },
    {
      name: "Lauro",
      surname: "Lopez",
      email: "lauro@test.com",
      role: "Secretario",
      pass: "secretario"
    },
    {
      name: "Susana",
      surname: "Aguirre",
      email: "susana@test.com",
      role: "Paciente",
      pass: "paciente"
    },
  ];

  const usuarioElegido =[{
    name: "",
    email: "",
    role: "",
    pass: ""
  }];
    export default{
        usuarioRoles,
        usuarioElegido
    }; 