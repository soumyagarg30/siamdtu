// 'use client'
import { Title, TitleSm } from "@/components/common/Title";
import { blogdata } from "@/assets/data/dummydata";
// import { useRouter } from "next/router";
import React from "react";

const SinglePost = () => {
  const post = blogdata.find((temp) => temp.id === 1);
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
                This summer, I had the opportunity to intern as a Technology
                Analyst at Morgan Stanley, an experience that proved to be both
                challenging and rewarding. My project focused on observability
                and distributed tracing, where I implemented OpenTelemetry with
                Jaeger and Grafana to strengthen client-to-server monitoring and
                traceability. It gave me first-hand exposure to building
                reliable large-scale systems and applying industry-grade
                practices to real-world problems.
              </p>

              <p className="desc-p">
                What made the journey truly special was the people at Morgan
                Stanley. From day one, my mentors made me feel supported—not
                just by guiding me technically, but also by sharing their
                experiences, encouraging me to ask questions, and pushing me to
                grow with confidence. My team created an environment where every
                idea was welcomed, every doubt was addressed, and every
                challenge turned into an opportunity to learn. Their warmth and
                encouragement made me feel like a valued part of the team, which
                is something I’ll always carry with me.
              </p>

              <p className="desc-p">
                Last but not the least, I am deeply grateful to my SIAM DTU
                seniors, friends, and family, whose guidance and support gave me
                the confidence to prepare well and make the most of this
                opportunity.
              </p>
            </div>
          </div>

          <div className="cards">
            <span> </span>
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
