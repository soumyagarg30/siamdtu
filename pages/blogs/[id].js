'use client'
import { Title, TitleSm } from "@/components/common/Title";
import { useRouter } from "next/router";
import React from "react";

const SinglePost = () => {
  const router = useRouter();
  const { id } = router.query;

  const post = blogdata.find((temp) => temp.id === parseInt(id));
  console.log(post);

  return (
    <>
      <section className="post-details bg-top prevent-select">
      {post.id===1?<div className="container">
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
                {" "}
                In the realm of modern security and communication, cryptography
                stands as a pivotal player, shaping the landscape of computer
                science and cryptology. Abstract algebra, with its complicated
                structures and principles, is often the bedrock supporting the
                complexity of contemporary encryption algorithms.
              </p>
              <p className="desc-p">
                Cryptography, defined as the art of "writing in secret or cipher
                codes," functions as a technique to secure communication by
                encoding messages or data. Through the application of intricate
                mathematical algorithms, this process ensures that only the
                intended recipient can decipher the information, rendering it
                incomprehensible to unauthorized parties. The overarching goals
                of cryptography encompass confidentiality, integrity, and
                availability:
                <br />
                <br />
                Confidentiality: Safeguarding the content of a message from
                unauthorized access.
                <br />
                Integrity: Ensuring the authenticity of a message, confirming
                the true originator.
                <br />
                Availability: Guaranteeing that the intended recipient can
                access the message when required.
                <br />
              </p>
              <p className="desc-p">
                Abstract algebra emerges as a key player in the formulation of
                cryptographic algorithms, furnishing a mathematical foundation
                for critical aspects such as the development of public-key
                systems and the assessment of encryption algorithm security.
              </p>
            </div>
          </div>

          <div className="heading-title">
            <div className="desc">
              <TitleSm title="An example: " />

              <p className="desc-p">
                {" "}
                Consider the following example of a cryptographic system,
                suppose Siri wishes to securely send a message to Alexa.
                Utilizing a system grounded in the modular multiplicative
                inverse and two secret prime numbers, p and q, the encryption
                and decryption keys are computed as follows:
              </p>
              <p className="desc-p">
                def encrypt(plaintext, key):<br /> &ensp; ciphertext = [ord(char)**key for
                char in plaintext]<br />&ensp; return ciphertext<br /> def decrypt(ciphertext,
                key):<br /> &ensp; key = mod_inverse(key)<br />&ensp;  plaintext = [chr(char**key) for
                char in ciphertext] <br />&ensp;   return ''.join(plaintext)
              </p>
              <p className="desc-p">
              In this system, the ord function converts characters to their ASCII values. Encryption involves raising each character's ASCII value to the power of the key, while decryption employs the modular multiplicative inverse of the key.
              </p>
              <p className="desc-p">
              Beyond basic encryption and decryption techniques, cryptography encompasses advanced concepts like digital signatures, secure key exchange, and cryptographic hash functions. These sophisticated methods ensure the integrity, authenticity, and confidentiality of digital data and communications.
              </p>
              <p className="desc-p">
              So we see that cryptography stands as a linchpin in upholding the security and privacy of digital communication and data. By grasping the fundamentals of cryptography and its intricate ties to abstract algebra, we gain a deeper appreciation for the complexity and significance of this field. As technology progresses, prioritizing the development of robust cryptographic systems becomes essential to safeguarding digital assets and ensuring secure communication in an ever-evolving digital landscape.
              </p>
            </div>
          </div>
          
                <div className="cards">
                <span >Written By: </span>
                  <div className='card'>
                  
                    <div className='image'>
                      <div className='img'>
                        <img src="/images/1.jpg" alt='' />
                      </div>
                      <div className='img-text'>
                        <h3>Neeharika Singh</h3>
                      </div>
                    </div>
                  </div>
                </div>
        </div>:""}
        {post.id===2? <div className="container">
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
                {" "}
                Geometry and fractals are fascinating mathematical subjects that deal with abstract and complex mathematical concepts. These subjects have found numerous applications in various fields, such as computer graphics, number theory, and chaos theory. In this blog, we will delve into the intricate world of geometry and fractals, exploring their fundamental principles and delving into their fascinating connections to complex analysis.
              </p>
              <p className="desc-p">
              Geometry is a branch of mathematics that deals with the properties of space and the relationships between geometric figures. The two most fundamental principles of geometry are incidence and order. Incidence refers to the concept that any two distinct points determine a unique line. Order, on the other hand, is a concept that relates to the way in which points, lines, and planes can be arranged in a consistent manner.
              </p>
              <p className="desc-p">
              The history of geometry is rich and diverse, with countless contributions made by scholars from various cultures and time periods. One of the most famous geometrical texts is Euclid's "Elements," a comprehensive treatise on geometry that has been studied and appreciated for centuries.
              </p>
            </div>
          </div>

          <div className="heading-title">
            <div className="desc">
              <TitleSm title="Interesting world of Fractals" />

              <p className="desc-p">
                {" "}
                Fractals are a type of mathematical object that displays self-similarity at various scales. They were first studied in the early 20th century by the British mathematician Arthur Cayley, who introduced the concept of a "self-affine fractal" in his work. However, it was not until the 1970s and 1980s that fractals began to attract significant attention in the field of mathematics, largely due to the pioneering work of mathematicians such as Benoît Mandelbrot and Julia Set.
              </p>
              <p className="desc-p">
              Fractals have provided valuable insights into a wide range of mathematical problems and concepts. For example, fractals have been used to develop rigorous mathematical models for the behavior of dynamical systems, such as those found in chaos theory. These models have then been employed to analyze complex systems in various fields, such as meteorology, finance, and engineering.
              </p>
              <p className="desc-p">
              Complex analysis is a branch of mathematics that deals with complex numbers and the associated mathematical structures, such as functions and complex integration. The study of complex analysis has provided valuable tools for analyzing geometric objects and fractals, offering new perspectives and insights into these intricate mathematical concepts.
              </p>
              <p className="desc-p">
              For instance, the concept of analytic continuation, which allows the analytic extension of a function to a larger domain, has been used to analyze fractals from a complex analytic perspective. This approach has led to the development of various powerful techniques for understanding the complex behavior of fractals and the relationships between different fractal objects.
              </p>
              <p className="desc-p">
              In conclusion, geometry and fractals are captivating and profoundly complex mathematical subjects that have played a significant role in the development of modern mathematics. By exploring the fascinating world of geometry and fractals and delving into their intricate connections to complex analysis, we can better appreciate the remarkable achievements and ongoing advancements of this enigmatic field of study.
              </p>
            </div>
          </div>
          <div className="cards">
                <span >Written By: </span>
                  <div className='card'>
                  
                    <div className='image'>
                      <div className='img'>
                        <img src="/images/1.jpg" alt='' />
                      </div>
                      <div className='img-text'>
                        <h3>Neeharika Singh</h3>
                      </div>
                    </div>
                  </div>
                </div>
        </div>:""}
        {post.id===3? <div className="container">
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
              <TitleSm title="'There is no need of invoking God, as long as we have mathematics.' -Stephen Hawking " />
              <p className="desc-p">
                {" "}
                The parallels between the principles of evolution and mathematics are intriguing. Evolution operates on the premise of natural selection, where the fittest adaptation to the environment ensures survival. Similarly, mathematics relies on the belief that the most fitting solution to a mathematical model yields the correct answer.
              </p>
              <p className="desc-p">
              Consider the behavior of vervet monkeys in the face of predators. Instead of instinctively fleeing to protect themselves, these monkeys emit a warning call to alert their peers, even though this act draws attention to the caller, potentially increasing the risk of an attack. Understanding this behavior through the lens of game theory, which explores interactions among individuals competing for limited resources, reveals a delicate balance between risk and reward. Game theory suggests that natural selection would favor monkeys that abstain from forewarning calls, yet the prevalence of such calls in a group provides a survival advantage, encouraging the evolution of this trait.
              </p>
              <p className="desc-p">
              This concept extends beyond vervet monkeys, other animal groups employ game theory to ensure the survival of their species. For instance, vampires share regurgitated blood with group members who have failed to feed at night, preventing starvation and promoting collective survival.
              </p>
              <p className="desc-p">
              Even without delving into the intricacies of evolution, the role of mathematics remains essential. Considering the chronological aspect, discussing the last evolutionary occurrence involves the concept of time, a field fundamentally rooted in mathematics. Highlighting the indispensability of mathematics, one cannot undermine its significance. Neglecting it may lead to unsatisfactory solutions or potential contradictions down the line. The integration of mathematics with evolutionary principles underscores the intricate interplay between scientific understanding and mathematical frameworks, reinforcing the idea that mathematics serves as a fundamental tool in comprehending and explaining the complexities of our world.

              </p>
            </div>
          </div>
          <div className="cards">
                <span >Written By: </span>
                  <div className='card'>
                  
                    <div className='image'>
                      <div className='img'>
                        <img src="/images/1.jpg" alt='' />
                      </div>
                      <div className='img-text'>
                        <h3>Neeharika Singh</h3>
                      </div>
                    </div>
                  </div>
                </div>
        </div>:""}
        {post.id===4? <div className="container">
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
                {" "}
                Let's start our adventure by immersing ourselves in the beauty of pure mathematics. Often described as the language of the universe, mathematics is more than just a collection of formulas and theorems – it is an art form. From the elegance of prime numbers to the mesmerizing patterns in fractals, pure mathematics captivates us with its aesthetic appeal and the sheer elegance of its structures.
              </p>
              <p className="desc-p">
              No mathematical journey is complete without encountering unsolved puzzles and tantalizing conjectures. Dive into the enigmatic world of problems that have eluded mathematicians for centuries, such as the Riemann Hypothesis, the Collatz Conjecture, and the twin prime conjecture. Explore the excitement of contemporary researchers as they strive to unlock the answers to these mathematical riddles.
              </p>
              <p className="desc-p">
              Contrary to popular belief, mathematics isn't confined to abstract concepts and theoretical musings. Explore the fascinating ways in which mathematics intersects with the real world. From cryptography and data science to game theory and optimization, mathematics plays a pivotal role in shaping the technology and innovations that drive our modern society.
              </p>
            </div>
          </div>

          <div className="heading-title">
            <div className="desc">
              <TitleSm title="The Frontiers of Research" />

              <p className="desc-p">
                {" "}
                Now, let's step into the laboratories of mathematical research. Discover the cutting-edge projects and breakthroughs that are pushing the boundaries of our understanding. Whether it's exploring the depths of chaos theory, deciphering the complexities of machine learning algorithms, or navigating the uncharted territories of pure abstraction, mathematicians are at the forefront of unlocking the secrets of the universe.
              </p>
              <p className="desc-p">
              No exploration of mathematics is complete without meeting the brilliant minds behind the equations. In this section, we'll spotlight renowned mathematicians who have left an indelible mark on the field. Learn about their lives, contributions, and the enduring impact of their work on the world of mathematics.
              </p>
              <p className="desc-p">
              As we conclude our mathematical odyssey, let's celebrate the ever-evolving nature of this captivating discipline. Mathematics is not a static entity but a living, breathing force that continues to inspire awe and wonder. Whether you're an avid mathematician or someone intrigued by the beauty of numbers, this journey through the realms of mathematics and research is a testament to the limitless possibilities that await those who dare to explore the infinite depths of the mathematical universe. So, dear reader, may your curiosity be forever piqued, and may you continue to unravel the mathematical mysteries that beckon on the horizon. Happy exploring! 
              </p>
            </div>
          </div>
          <div className="cards">
                <span >Written By: </span>
                  <div className='card'>
                  
                    <div className='image'>
                      <div className='img'>
                        <img src="/images/1.jpg" alt='' />
                      </div>
                      <div className='img-text'>
                        <h3>Neeharika Singh</h3>
                      </div>
                    </div>
                  </div>
                </div>
        </div>:""}
      </section>
    </>
  );
};

export default SinglePost;


export const blogdata = [
  {
    id: 1,
    title: "Exploring cryptography",
    titlefull: "Exploring cryptography: An overview of its significance and ties to abstract algebra",
    cover: "../images/b1.jpg",
    date: "JANUARY 12, 2024",
  },
  {
    id: 2,
    title: "Exploring the beautiful world of geometry and fractals",
    titlefull:"Exploring the beautiful world of geometry and fractals",
    cover: "../images/b2.jpeg",
    date: "DECEMBER 26, 2023",
  },
  {
    id: 3,
    title: " How Math Shaped Evolution",
    titlefull:"How Math Shaped Evolution",
    cover: "../images/b3.jpg",
    date: "NOVEMBER 27, 2023",
  },
  {
    id: 4,
    title: "Unraveling the Mathematical Mysteries",
    titlefull:"Unraveling the Mathematical Mysteries: A Journey into the Depths of Research",
    cover: "../images/b4.jpg",
    date: "OCTOBER 20, 2023",
  },
]