// 'use client'
import { Title, TitleSm } from "@/components/common/Title";
import { blogdata } from "@/assets/data/dummydata";
// import { useRouter } from "next/router";
import React from "react";

const SinglePost = () => {
  const post = blogdata.find((temp) => temp.id === 4);
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
              <TitleSm title="Internship Experience at Bank of New York (BNY)" />
              <p className="desc-p">
                I interned at Bank of New York (BNY), Pune for two months, where I 
                worked under the CCAR team on building a pipeline of AI agents to 
                analyze financial data for portfolio stress testing. My work involved 
                creating Retrieval-Augmented Generation (RAG) frameworks using Python 
                and developing a frontend with React.js to support these models.
              </p>
              <p className="desc-p">
                This internship was an enriching learning experience that gave me 
                valuable exposure to practical applications of AI in finance. I am 
                grateful to SIAM for the guidance and peer support that helped me 
                throughout this journey.
              </p>
              <p className="desc-p">
                I was also honored to receive a PPO at the end of my internship, 
                which makes this experience even more memorable and rewarding.
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
