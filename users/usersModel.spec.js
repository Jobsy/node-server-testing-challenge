const users = require("./users-model")
const db = require("../database/dbConfig")

beforeEach(async () => {
    await db('users').truncate();
  });

describe("users model", () => {
    describe("insert function", () => {
        test("should insert a user", async () => {
            await users.add({ username: "tessy",  password: "1234"})
        
        const Users = await db("users")
        expect(Users).toHaveLength(1)
        })

        // test("should get all user", async () => {
        //     await users.find({ username: "tessy",  password: "1234"})
        // })
    })
})