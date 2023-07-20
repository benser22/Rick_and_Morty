const app = require("../src/app");
const session = require("supertest");
const agent = session(app);
const users = require("../utils/users");

describe("TEST of ROUTES", () => {
  describe("GET /rickandmorty/character/:id", () => {
    it("Reply with status: 200", async () => {
      await agent.get("/rickandmorty/character/1").expect(200);
    });

    it('Returns an object with properties: "id", "name", "species", "gender", "status", "origin" and "image"', async () => {
      const response = await agent.get("/rickandmorty/character/1").expect(200);
      expect(response.body).toHaveProperty("id");
      expect(response.body).toHaveProperty("name");
      expect(response.body).toHaveProperty("species");
      expect(response.body).toHaveProperty("gender");
      expect(response.body).toHaveProperty("status");
      expect(response.body).toHaveProperty("origin");
      expect(response.body).toHaveProperty("image");
    });

    it("If there is an error, reply with the status: 500", async () => {
      await agent.get("/rickandmorty/character/9999").expect(500);
    });
  });
  describe("GET /rickandmorty/login", () => {
    it("Respond with { access: true } if Query sends the correct credentials", async () => {
      const user = users[0]; // Obtener el primer usuario del array users

      const response = await agent
        .get(
          `/rickandmorty/login?email=${user.email}&password=${user.password}`
        )
        .expect(200);

      expect(response.body).toEqual({ access: true });
    });

    it("Respond with {access: false} if Query sends wrong credentials", async () => {
      const response = await agent
        .get(
          "/rickandmorty/login?email=wrong@example.com&password=wrongpassword"
        )
        .expect(200);

      expect(response.body).toEqual({ access: false });
    });
  });

  describe("POST /rickandmorty/fav", () => {
    it("What you send by body should be returned in an array", async () => {
      const character = { id: 1, name: "Rick", species: "Human" };
      const response = await agent
        .post("/rickandmorty/fav")
        .send(character)
        .expect(200);
      expect(response.body).toEqual([character]);
    });

    it("If you resubmit a new item by body, it should be returned in an array that includes a previously submitted item", async () => {
      const character1 = { id: 1, name: "Rick", species: "Human" };
      const character2 = { id: 2, name: "Morty", species: "Human" };

      // Enviar el primer personaje
      const response1 = await agent
        .post("/rickandmorty/fav")
        .send([character1, character2])
        .expect(200);
      expect(response1.body.length).toEqual(2);
      expect(response1.body[0]).toEqual(character1);
    });
  });

  describe("DELETE /rickandmorty/fav/:id", () => {
    // Prueba para eliminar un personaje que no existe en los favoritos
    it("Should return a array unchanged if non-existent ID is sent", async () => {
      await agent.delete("/rickandmorty/fav").expect(200);

      const initialData = [
        { id: 1, name: "Rick", species: "Human" },
        { id: 2, name: "Morty", species: "Human" },
      ];

      // Enviar el arreglo inicial
      await agent
        .post("/rickandmorty/fav")
        .send({ id: 1, name: "Rick", species: "Human" })
        .expect(200);

      await agent
        .post("/rickandmorty/fav")
        .send({ id: 2, name: "Morty", species: "Human" })
        .expect(200);

      // Eliminar un personaje con ID inexistente
      const response2 = await agent.delete("/rickandmorty/fav/999").expect(200);
      expect(response2.body).toEqual(initialData);
    });

    // Prueba para eliminar correctamente un personaje existente en los favoritos
    it("You must successfully remove the character with the valid ID", async () => {
      await agent.delete("/rickandmorty/fav").expect(200);

      // Enviar 1
      await agent
        .post("/rickandmorty/fav")
        .send({ id: 1, name: "Rick", species: "Human" })
        .expect(200);
      // Enviar 2
      await agent
        .post("/rickandmorty/fav")
        .send({ id: 2, name: "Morty", species: "Human" })
        .expect(200);

      // Eliminar el personaje con ID 1
      const response2 = await agent.delete("/rickandmorty/fav/1").expect(200);
      expect(response2.body).toEqual([
        {
          id: 2,
          name: "Morty",
          species: "Human",
        },
      ]);
    });

    // Prueba para eliminar un personaje que no está en los favoritos
    it("You should keep the array unchanged if you try to remove a non-existent character", async () => {
      await agent.delete("/rickandmorty/fav").expect(200);

      // Enviar 1
      await agent
        .post("/rickandmorty/fav")
        .send({ id: 1, name: "Rick", species: "Human" })
        .expect(200);
      // Enviar 2
      await agent
        .post("/rickandmorty/fav")
        .send({ id: 2, name: "Morty", species: "Human" })
        .expect(200);

      // Eliminar un personaje con ID inexistente
      const response2 = await agent.delete("/rickandmorty/fav/999").expect(200);
      expect(response2.body).toEqual([
        {
          id: 1,
          name: "Rick",
          species: "Human",
        },
        {
          id: 2,
          name: "Morty",
          species: "Human",
        },
      ]);
    });
  });
});
