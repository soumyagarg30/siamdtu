// 'use client'
import { Title, TitleSm } from "@/components/common/Title";
import { blogdata } from "@/assets/data/dummydata";
// import { useRouter } from "next/router";
import React from "react";

const SinglePost = () => {
  const post = blogdata.find((temp) => temp.id === 2);
  return (
    <>
      <section className="post-details bg-top prevent-select">
        <div className="container">
          <div className="heading-title">
            <TitleSm title={post.date} /> <br />
            <br />
            <Title title={post.title} className="title-bg" />
            <div className="img py">
              <img
                src={post.cover}
                alt={post.title}
                width="100%"
                height="100%"
                className="round"
              />
            </div>
            <div className="desc">
              <TitleSm title={post.titlefull} />
              <p className="desc-p">
                I spent this summer interning as a Summer Analyst at Goldman Sachs, 
                where I worked in the Asset & Wealth Management division on building 
                an integrated testing suite for workflow systems (BPMNs). My role 
                involved designing a BDD testing framework using Cucumber and Java, 
                which gave me hands-on exposure to how large-scale systems are 
                validated and maintained.
              </p>
              <p className="desc-p">
                During my time in Hyderabad office, I had the chance to work directly 
                with the team there, and what I appreciated most was Goldman’s culture 
                of openness. The flat hierarchy made it easy to reach out to anyone—
                whether for quick clarifications or for detailed technical discussions, 
                which made the learning curve much smoother. Working with brilliant 
                engineers spread across Hyderabad, Bangalore, and London exposed me to 
                diverse perspectives and taught me the value of clear communication in 
                global projects.
              </p>
              <p className="desc-p">
                Also, I’ll always cherish the support and guidance provided by the SIAM 
                family throughout, preparing me to take on this opportunity with confidence.
              </p>
            </div>
          </div>

          <div className="cards">
            <span>Written By: </span>
            <div className="card">
              <div className="image">
                <div className="img">
                  <img src={post.profile} alt="" />
                </div>
                <div className="img-text">
                  <h3>{post.author}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SinglePost;
