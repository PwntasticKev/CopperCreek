
mutation {
  updatePost(id: 1, title: "API revolution", content: "Enjoy")
//   Update post is the endpoint. inside is the params.
}

query { // your query
	posts { // your endpoint you are hitting
	  title // the content you are wanting ----
	  content
	  author {
		firstName
		lastName
	  }
	}
  }