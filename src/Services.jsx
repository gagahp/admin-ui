const city = "Jakarta";
const street = "Jl Kebon Jeruk";

export const getUsers = async () => {
    try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    return users.map((user) => ({
      name: user.name,
      email: user.email,
      city,
      street,
    }));
  } catch (error) {
    console.error("[Services] Gagal mengambil data:", error.message);
    throw error;
  }
};

// export const users = [
//     {
//         name: "Gagah",
//         email: "gagah@gmail.com",
//         street: "Jl. Merdeka No. 10",
//         city: "Semarang",
//         age: 25,
//         job: "Web Developer"
//     },
//     {
//         name: "Pristiyaputra",
//         email: "pristiyaputra@example.com",
//         street: "Jl. Kebangsaan No. 20",
//         city: "Bandung",
//     },
//     {
//         name: "Aga",
//         email: "aga@example.com",
//         street: "Jl. Kebangkitan No. 30",
//         city: "Surabaya",
//     },
// ];