import React from "react";
import Hero from "@/components/Hero/Hero";
import Content from "@/components/content/Content";
import BlogPost from "@/components/Blogpost/BlogPost";

const Home = () => {
  return (
    <div>
      <Hero />
      <Content />
      <BlogPost />
    </div>
  );
};

export default Home;
