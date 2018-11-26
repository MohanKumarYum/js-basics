function Post(title, author, body) {
  this.title = title;
  this.body = body;
  this.author = author;
  this.views= 0;
  this.comments= [];
  this.isLive= false;
}

const post = new Post("My new blog","Mohan Kumar","hello");

console.log(post);