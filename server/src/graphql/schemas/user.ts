export const userDefs = `
  type User {
    id: ID
    email: String
    image: String
    role: Role
  }
  type AuthPayload {
    message: String!
  }
  enum Role {
    ADMIN
    USER
  }
  type Mutation {
    register(email: String!, password: String!): AuthPayload!
    login(email: String!, password: String!): AuthPayload!
  }
  type Query {
    me: User
  }
`;
