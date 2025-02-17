function solve() {
  class Post {
    constructor(title, content) {
      this.title = title;
      this.content = content;
    }

    toString() {
      return `Post: ${this.title}\nContent: ${this.content}`;
    }
  }

  class SocialMediaPost extends Post {
    constructor(title, content, likes, dislikes) {
      super(title, content);
      this.likes = likes;
      this.dislikes = dislikes;
      this.comments = [];
    }

    addComment(comment) {
      this.comments.push(comment);
    }

    toString() {
      let output = super.toString() + "\n";
      output += `Rating: ${this.likes - this.dislikes}\n`;

      if (this.comments.length > 0) {
        output += `Comments:\n`;
        this.comments.forEach((comment) => (output += ` * ${comment}\n`));
      }
      return output.trim();
    }
  }

  class BlogPost extends Post {
    constructor(title, content, views) {
      super(title, content);
      this.views = views;
    }

    view() {
      this.views++;
      return this;
    }

    toString() {
      return super.toString() + `\nViews: ${this.views}`;
    }
  }

  return { Post, SocialMediaPost, BlogPost };
}

let app = solve();
let scm = new app.SocialMediaPost("TestTitle", "TestContent", 25, 30);
let blog = new app.BlogPost("TestTitle", "TestContent", 25);
blog.view().view().view();

scm.addComment("Good post");
scm.addComment("Very good post");
scm.addComment("Wow!");

console.log(scm.toString());
