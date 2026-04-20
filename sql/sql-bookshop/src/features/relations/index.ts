import { Author } from "../authors/authors.model";
import { Book } from "../books/books.model";

export const setupRelations = () => {
  Author.hasMany(Book, {
    foreignKey: "authorId",
    as: "books",
  });

  Book.belongsTo(Author, {
    foreignKey: "authorId",
    as: "author",
  });
};

// hasMany - one -> many (foreign key refers here)
// belongsTo - many -> one (foreign key)
// hasOne - one -> one (foreign key refers here)
// belongsToMany - many -> many (requires the junction table)
