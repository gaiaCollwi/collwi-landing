'use client';

import { useState } from "react";
import Image from "next/image";
import plus from "@/assets/images/landing/plus-gray.svg";
import minus from "@/assets/images/landing/minus-white.svg";

const FAQ = ({type}:{type: string}) => {
  const [faqs, setFaqs] = useState([
    {type: 'Coaches', title: 'How do I become a CollWI coach?', content: "To become a coach on CollWi, simply create a coach account here: https://collwi.com/register. We ask that you upload your coaching certification and complete your profile. Once that’s done, you’ll be able to explore the platform, connect with the community, and start offering your coaching programs to CollWi members!", isOpen: true},
    {type: 'Coaches', title: 'What qualifications do I need to become a coach on CollWi?', content: "To become a coach on CollWi, you must hold a certification from a recognized coaching institution and provide proof of certification during registration.", isOpen: false},
    {type: 'Coaches', title: 'How much experience do I need to be a CollWi coach?', content: "We prefer coaches with at least two years of active coaching experience or a substantial number of coaching hours.", isOpen: false},
    {type: 'Coaches', title: 'Can I coach in any area of expertise/topic?', content: "Yes! We welcome coaches from a variety of specializations—including life, business, relationship coaching, and more—as long as their approach aligns with CollWi’s values and mission. Please note that CollWi is not a platform for therapy or medical advice, and it is not intended to address clinical mental health concerns.", isOpen: false},
    {type: 'Coaches', title: 'Will CollWi provide guidance on what types of programs are in demand?', content: "Yes! CollWi offers coaches insights into trending and in-demand program topics to help you design offerings that truly resonate with our community. Our goal is to support you in creating impactful programs that meet members’ needs and increase engagement.", isOpen: false},
    {type: 'Coaches', title: 'How can I make money coaching on CollWi?', content: "Coaches on CollWi earn income by offering paid group coaching programs, sessions, or one-on-one coaching upon request. As a CollWi coach, you have the freedom to set your own pricing. CollWi PBC retains 15% of the total fee to cover administrative and marketing costs, plus an additional 3% payment processing fee.", isOpen: false},
    {type: 'Coaches', title: 'How does the payment process work?', content: "When a client signs up for a coaching session or program, payment is processed through Stripe. Stripe deducts a 3% payment processing fee, and CollWi retains 15% of the total fee to cover administrative and marketing costs, as well as platform development. The remaining 82% is paid to the coach, for participants who attend the session. Payouts are issued 15 days after the completion of a program, or after each completed single session. To receive payments, coaches must connect a Stripe or PayPal account linked to a bank account.", isOpen: false},
    {type: 'Coaches', title: 'What happens if the quorum is not reached?', content: "CollWi coaches are empowered to set the minimum required number of participants for each program/session. If the minimum quorum of registered participants is not met within 24 hours prior to the expected start date and time of the session/first session of the program, the coaching session/program will be cancelled and the total cost will be refunded. The coach will not be paid for any sessions that do not meet the quorum.", isOpen: false},
    {type: 'Coaches', title: 'Can I coach for free on CollWI?', content: "Yes, CollWi coaches are welcome to offer free sessions at any time. While full programs must be paid, individual sessions can be set as free to help you connect with members, build trust, and showcase your coaching style. Free sessions are a great way to: - Introduce yourself to the community - Offer a taste of your coaching approach - Attract participants to future paid programs - Build relationships and receive testimonials - Pilot a new topic or idea with live feedback", isOpen: false},
    {type: 'Coaches', title: 'What else do I need to start?', content: "Nothing else! Simply complete your profile, connect your Stripe or PayPal account, and start transforming lives!", isOpen: false},
    {type: 'Coaches', title: 'Can I share my profile outside the platform?', content: "Yes! Coaches are highly encouraged to share their CollWi profile with their network and on social media. This is a great way to showcase your expertise, attract potential clients, and grow your presence as a coach. Sharing your profile helps to build your personal brand and connect with people who may benefit from your coaching programs.", isOpen: false},
    {type: 'Coaches', title: 'As a new CollWi coach, how can I reach more clients?', content: "Start by engaging with the CollWi community — introduce yourself and connect with other members. Create relevant coaching programs or sessions to attract clients. Share your CollWi profile on your social media to increase visibility and let your network know about your services. Keep your profile updated, showcase client successes, and engage with feedback to build credibility and grow your client base.", isOpen: false},
    {type: 'Coaches', title: 'Is there a fee for the platform?', content: "No, the platform is completely free for now. However, as we introduce more features and functionalities in the future, there may be a fee. You will be notified in advance if and when any charges apply.", isOpen: false},
    // /////////////////////////////////////////////////
    {type: 'CollWiers', title: 'How can I get started? ', content: "Getting started with CollWi is easy! Simply sign up on our platform, explore the available communities and coaching programs, and choose the ones that best fit your goals. You'll be able to connect, learn, and start your journey towards growth and support right away!", isOpen: false},
    {type: 'CollWiers', title: 'Who can benefit from CollWi?', content: "Everyone! Whether you’re experiencing life challenges or seeking growth or just looking for an empowering community, you’re in the right place Our coach-led programs give you the support and guidance you need to overcome obstacles and achieve your goals. It's a community where you’ll be inspired and empowered every step of the way. ", isOpen: false},
    {type: 'CollWiers', title: 'Is CollWI confidential? ', content: "Yes, CollWi is committed to maintaining a safe and confidential environment. Your personal information and any shared experiences within the community are treated with the utmost respect and privacy.", isOpen: false},
    {type: 'CollWiers', title: 'What are the benefits of group coaching?', content: "Group coaching offers the unique benefit of learning from both coaches and peers. It provides a supportive, shared space where you can gain insights, receive feedback, and build connections with others facing similar challenges. Together, you’ll grow, stay motivated, and achieve your goals more effectively.", isOpen: false},
    {type: 'CollWiers', title: 'Are CollWI coaches certified and experienced? ', content: "Yes, all our coaches are certified in recognized coaching institutions with many hours of coaching experience. CollWi verifies their credentials when they join our community.", isOpen: false},
    {type: 'CollWiers', title: 'What are the costs involved? ', content: "'Joining the CollWi community is completely free. You can also create or join Sharing Rooms at no cost—these are open spaces designed to foster connection, reflection, and mutual support. While some individual coaching sessions may be offered for free at the discretion of the coach, most structured coaching programs do carry a fee. Each program is priced by the professional coach leading it, and payment in full is required at the time of enrollment for any paid session or program.'", isOpen: false},
    {type: 'CollWiers', title: 'Is there a minimum age to join CollWi?', content: "Yes, the minimum age is 18 years of age", isOpen: false},
    {type: 'CollWiers', title: 'What can I expect to achieve through CollWi?', content: "Through CollWi, expert-led coaches will equip you with the tools, support, and mindset to effectively tackle obstacles. You’ll join a small group of CollWiers facing similar challenges, providing each other with support, encouragement, and shared growth.", isOpen: false},
    {type: 'CollWiers', title: 'What’s the difference between coaching and therapy?', content: "Coaching focuses on personal development and achieving specific goals, helping individuals move forward by enhancing their strengths and skills. Therapy, on the other hand, often addresses past issues or emotional struggles, helping individuals heal and cope with psychological challenges. While coaching is future-oriented and goal-driven, therapy typically explores deeper emotional or mental health concerns. ", isOpen: false},
    {type: 'CollWiers', title: 'Is coaching an alternative to therapy?', content: "At CollWi, our coaches provide guidance, support, and strategies for personal and professional growth. However, please note that CollWi coaches do not offer therapy or medical advice, and they may not be qualified to address mental health concerns. If you require mental health support, we encourage you to seek assistance from a licensed mental health professional.", isOpen: false},
    {type: 'CollWiers', title: 'How do the coaching programs work and how much do they cost?', content: "CollWi’s coaching programs are designed by expert coaches to help participants tackle their challenges and provide the tools and mindset needed for success. Each program is tailored to address specific goals and can vary in length (ranging from 1 to 12 sessions) and focus area. As such, the cost of each program will depend on its length and topic.", isOpen: false},
    {type: 'CollWiers', title: 'What happens if the quorum is not reached?', content: "If the minimum quorum of registered participants is not met within 24 hours prior to the expected start date and time of the session/first session of the program, the coaching session/program will be cancelled and the total cost will be refunded. ", isOpen: false},
    {type: 'CollWiers', title: 'Is there a fee for the platform?', content: "No, the platform is completely free for now. However, as we introduce more features and functionalities in the future, there may be a fee. You will be notified in advance if and when any charges apply.", isOpen: false},
    {type: 'CollWiers', title: 'What is group coaching?', content: "Expert-led group coaching at CollWi brings together a small group of individuals with shared goals, guided by experienced coaches. In each session, participants receive expert guidance, practical tools, and personalized feedback, while also gaining support and insights from fellow group members. This approach combines the power of professional coaching with the strength of community, creating a collaborative space where everyone grows together.", isOpen: false},
  ]);

const toggleFaq = (i: number) => {
  const current_faqs = faqs.filter(f => f.type === type);
  current_faqs[i].isOpen = !current_faqs[i].isOpen
  setFaqs([...current_faqs]);
}

  return (
    <div className="bg-custom-gradient pt-8 rounded-xl shadow">
      <div className="bg-white md:py-16 py-4">
        <div className="text-2xl py-1 font-bold">FAQ&apos;s for {type}</div>
        <div className="grid grid-cols-2 gap-5 mt-10 md:mx-32 mx-2">
          {faqs.filter(f => f.type === type).map((faq, i) => (<div key={i} className='md:col-span-1 col-span-2'>
            <div className='p-4 shadow'>
              <div className="flex justify-between font-semibold">
                <span className="text-start text-sm">{faq.title}</span>
                <button
                  className={"p-2 rounded w-6 h-6 flex items-center justify-center flex-shrink-0 " + (faq.isOpen ? "bg-tertiary py-3" : "bg-secondary")}
                  onClick={() => toggleFaq(i)}>
                    <Image
                      src={faq.isOpen ?  minus : plus}
                      alt="show hide faq"
                      height={10}
                      width={10} />
                </button>
              </div>
              <div className={"text-sm text-left my-5 " + (faq.isOpen ? "" : "hidden transition")}>
                {faq.content}
              </div>
            </div>
          </div>))}
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.filter(f => f.type === type).map(faq => ({
              "@type": "Question",
              name: faq.title,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.content
              }
            }))
          })
        }}
      />
    </div>
  );
};

export default FAQ;
