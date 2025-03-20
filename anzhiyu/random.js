var posts=["2025/03/18/githubcopilot/","2025/03/04/cppstart/","2025/03/01/hello-world/","2025/03/07/waimai/","2025/03/06/markdown/","2025/03/11/lanqiao/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };