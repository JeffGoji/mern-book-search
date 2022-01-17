const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Book {
    bookId: String
    author: [String]
    description: String
    title: String
    image: String
    link: String
}


`

module.exports = { typeDefs }