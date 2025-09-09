// 'use client'
import { Title, TitleSm } from "@/components/common/Title";
import { blogdata } from "@/assets/data/dummydata";
// import { useRouter } from "next/router";
import React from "react";

const SinglePost = () => {
  const post = blogdata.find((temp) => temp.id === 3);
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
              <TitleSm title="Internship Experience at SPARK IIT Roorkee" />
              <p className="desc-p">
                I spent this summer interning at SPARK IIT Roorkee, where I worked 
                on a computer vision project focused on detecting lateral road shifts 
                for Indian roads. The project gave me the chance to dive deep into 
                practical applications of AI, using cutting-edge models and real-world 
                datasets. It was my first time being away from home for so long, and 
                being at a premier institution like IIT Roorkee made the experience 
                even more special.
              </p>
              <p className="desc-p">
                What stood out most to me was the atmosphere—surrounded by some of 
                the brightest and most driven students, I found myself constantly 
                motivated to push harder and learn more. Having access to world-class 
                equipment and facilities was equally transformative; it made 
                experimentation feel seamless and professional.
              </p>
              <p className="desc-p">
                I was also lucky to have advisors who were approachable, flexible, 
                and deeply invested in ensuring I had the best learning experience. 
                Their openness to discussions—whether technical or career-related—
                helped me grow in ways beyond the project itself.
              </p>
              <p className="desc-p">
                Above all, I’ll cherish how this internship gave me both technical 
                depth and personal growth, and I’ll always be grateful to the SIAM-DTU 
                family for preparing me with the confidence to take on such opportunities.
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
