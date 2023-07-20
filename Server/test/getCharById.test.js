const axios = require("axios");
const getCharById = require("../controllers/getCharById"); 

// Mock de axios
jest.mock("axios");

describe("TEST of getCharById", () => {
  it("should return character data when a valid id is provided", async () => {
    const mockCharacterData = {
      id: 1,
      status: "Alive",
      name: "Rick Sanchez",
      species: "Human",
      origin: {
        name: "Earth (C-137)",
      },
      image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      gender: "Male",
      episode: ["https://rickandmortyapi.com/api/episode/1"],
    };

    // Simulamos la respuesta exitosa de la API
    axios.get.mockResolvedValueOnce({ data: mockCharacterData });

    // Datos ficticios para la solicitud HTTP (req)
    const req = { params: { id: 1 } };

    // Mock para res.json, que vamos a verificar en la prueba
    const jsonMock = jest.fn();

    // Ejecutamos la función
    await getCharById(req, { json: jsonMock });

    // Verificamos que se haya llamado res.json con los datos del personaje
    expect(jsonMock).toHaveBeenCalledWith(mockCharacterData);
  });

  it("should return a 500 error when the API responds with an error", async () => {
    const errorMessage = "API error";

    // Simulamos un error en la API
    axios.get.mockRejectedValueOnce(new Error(errorMessage));

    // Datos ficticios para la solicitud HTTP (req)
    const req = { params: { id: 999 } };

    // Creamos un objeto para simular el objeto res con las funciones necesarias
    const res = {
      status: jest.fn(() => res),
      json: jest.fn(),
    };

    // Ejecutamos la función
    await getCharById(req, res);

    // Verificamos que se haya llamado res.status con el código 500
    expect(res.status).toHaveBeenCalledWith(500);

    // Verificamos que se haya llamado res.json con una instancia de Error
    expect(res.json).toHaveBeenCalledWith({ message: expect.any(Error) });
  });
});
