const usuarioRoles = [
    {
      name: "Pepita Gomez",
      email: "pepita@test.com",
      role: "Admin",
      pass: "admin"
    },
    {
      name: "Sandro Perez",
      email: "sandro@test.com",
      role: "Doctor",
      pass: "doctor"
    },
    {
      name: "Lauro Lopez",
      email: "lauro@test.com",
      role: "Secretario",
      pass: "secretario"
    },
    {
      name: "Susana Aguirre",
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