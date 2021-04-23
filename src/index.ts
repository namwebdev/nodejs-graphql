import express from "express";
import { graphqlHTTP } from "express-graphql";
import cors from "cors";
import { createConnection } from "typeorm";
import { schema } from "./schema/index";
import { Users } from "./Entities/User";

const main = async () => {
  await createConnection({
    type: "mysql",
    database: "my_graphql",
    username: "root",
    password: "123456",
    logging: true,
    synchronize: false,
    entities: [Users],
  });

  const port = 5000;

  const app = express();
  app.use(cors());
  app.use(express.json());

  app.get("/", (req, res) => res.send("Hello World!"));

  app.use(
    "/graphql",
    graphqlHTTP({
      schema,
      graphiql: true,
    })
  );

  app.listen(port, () => console.log(`Server running on port ${port}`));
};

main().catch((err) => console.log(err));
