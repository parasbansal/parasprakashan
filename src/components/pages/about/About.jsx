import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'

const About = (props) => {
  return (
    <div className="About mt-5">
      <div className="container">
        <ScrollAnimation animateIn="bounceInUp" animateOnce={true}>
          <div className="card border-dark">
            <div className="card-header bg-dark text-light">
              Paras Prakashan
            </div>
            <div className="card-body">
              <ScrollAnimation animateIn="fadeIn" animateOnce={true} delay={100}>
                <h5 className="card-title">Profile</h5>
                <p>
                  Paras Prakashan is leading publishing company of academic/scholastic books in various steams guided by its motto - publishing to make a difference. It is based in Delhi. It has built a strong reputation for its publications on all fronts. We believe in creating books that are Indian in essence and global in appeal. We wish to disseminate knowledge and create a bridge between the source and the sink of intelligence, taking seekers along an untrodden path. We welcome you to be a part of this process.
                </p>
              </ScrollAnimation>

              <ScrollAnimation animateIn="fadeIn" animateOnce={true} delay={100}>
                <p>
                  'Paras Prakashan' is our registered Trade Marks. We are publishing Paras Prakashan Books, which are very popular among the students. We follow the 'Modern Education System' for better learning of students. Our price our the most reasonable price with best quality of paper, fonts, graphics etc. Our delivery of books are always on time with 100% accuracy.
                </p>
              </ScrollAnimation>


              <ScrollAnimation animateIn="fadeIn" animateOnce={true} delay={100}>
                <h5 className="card-title">Team of Authors</h5>
                <p>
                  Our authors are the best in their fields. Our manuscripts are tenderly nurtured by the eminent editors and our proofs are comprehensively tested for quality. Our in-house production centre forms the backbone of our quality control system.
                </p>
              </ScrollAnimation>

              <ScrollAnimation animateIn="fadeIn" animateOnce={true} delay={100}>
                <h5 className="card-title">Network</h5>
                <p>
                  Our distribution network has the widest reaches in India (Delhi, Rajasthan, Madhya Pradesh, Uttar Pradesh, Haryana etc).
                </p>
              </ScrollAnimation>

              <ScrollAnimation animateIn="fadeIn" animateOnce={true} delay={100}>
                <h5 className="card-title">Recommendations</h5>
                <p>
                  Our titles have been recommended in many Public and Govt. schools. All the books on various subjects are very popular among the students.
                </p>
              </ScrollAnimation>

            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="bounceInUp" animateOnce={true}>
          <div className="card border-dark mt-5">
            <div className="card-header bg-dark text-light">
              From the Publisher Desk
          </div>
            <div className="card-body">
              <ScrollAnimation animateIn="fadeIn" animateOnce={true} delay={100}>
                <p>
                  'Education', said Aristotle, 'is the creation of a sound mind in a sound body'. It encompasses in itself the all-round development of an individual. The success of spreading education to the widest possible area is a challenging task. Education consists of transmitting to students two different things:<br />
                  1. the subject matter ('what to think'), and<br />
                  2. the correct way to understand and evaluate this subject matter ('how to think'), i.e., Critical Thinking.
                </p>
              </ScrollAnimation>

              <ScrollAnimation animateIn="fadeIn" animateOnce={true} delay={100}>
                <p>
                  Critical thinking or higher order thinking is an important topic in modern education. Children are not born with the power to think critically, nor do they develop this ability naturally beyond survival-level thinking. Critical thinking is an ability that must be taught and developed. This is what our new education policy is stressing on today. And this is what our books endeavour to do.<br />
                  We Paras Prakashan recognize that it is a privilege to publish textbooks, and we value our role in publishing for learning. As publishers, it is our endeavour to produce books that would inculcate among students the qualities of critical thinking, boldness in facing any situation and openness to new ideas.<br />
                  Our aim is to change the way in which a student normally would accept, uncritically, all that is taken for granted. The student should develop the confidence to go into the world, equipped with the qualities that are needed to be a success in life.
              </p>
              </ScrollAnimation>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  )
}

export default About