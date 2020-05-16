const { gql } = require('apollo-server');

const typeDefs = gql`

  type Query {
    launches: [Launch]!
    launch(id: ID!): Launch
    me: User
  }

  type Mutation {
    bookTrips(launchIDs: [ID]!): TripUpdateResponse!
    cancelTrip(launchID: ID!): TripUpdateResponse!
    login(email: String!): String # Auth Token
  }

  type Launch {
    id: ID!
    site: String
    mission: Mission
    rocket: Rocket
    isBooked: Boolean!
  }

  type User {
    id: ID!
    email: String
    trips: [Launch]!
  }

  type Rocket {
    id: ID!
    name: String
    type: String
  }

  type Mission {
    name: String
    missionPatch(size: PatchSize): String
  }

  enum PatchSize {
    SMALL
    LARGE
  }

  type TripUpdateResponse {
    success: Boolean!
    message: String
    launches: [Launch]
  }

`;


module.exports = typeDefs;
