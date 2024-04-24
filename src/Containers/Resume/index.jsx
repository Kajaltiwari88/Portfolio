
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import PageHeader from '../../Components/PageHeader';
import { MdOutlineCastForEducation, MdWork } from 'react-icons/md';

const Resume = () => {
  const EducationData = [
    // Education data as in the original code...
    {
      title: 'Secondary School Certificate',
      school: 'Shivner Vidya Mandir High School',
      year: '2018-Passed',
      desc: 'Completed SSC with 88.60%.',
    },
    {
      title: 'Higher School Certificate',
      school: 'Mithibai College',
      year: '2020-Passed',
      desc: 'Completed HSC with 74%.',
    },
    {
      title: 'Bachelor of Science in Computer Science',
      school: 'Nagindas Khandwala College',
      year: '2024',
      desc:
        'Graduated' ,
    },
  ];

  const ExperienceData = [
    {
      title: 'Customer Service Supporter',
      company: 'Athena Company',
      year: 'Less than 6 months',
      desc: 'Provided excellent customer support and resolved queries.',
    },
    {
      title: 'Business Coordinator',
      company: 'Enrich Company',
      year: 'Less than 6 months',
      desc: 'Coordinated business activities and assisted in project management.',
    },
    {
      title: 'Web Developer (Fresher)',
      year: 'Fresher',
      desc: 'Currently pursuing a career as a web developer, learning and building projects.',
    },
  ];

  return (
    <div className="relative">
      <section>
        <PageHeader
          header="My Resume"
          icon={<MdOutlineCastForEducation size={40} />}
        />
      </section>
      <div className="flex flex-col md:flex-row mx-5 md:justify-between">
        <div className="w-full md:w-[50%] mb-8 md:mb-0 md:order-1">
          <h1 className="text-white text-6xl">Education</h1>
          <VerticalTimeline layout={'1-column'} lineColor="#b2bec3">
            {EducationData.map((data, index) => (
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                icon={
                  <MdOutlineCastForEducation size={40} color="#ffda79" />
                }
                key={index}
              >
                <div className="text-left text-xl flex flex-col leading-10">
                  <h3 className="italic font-extrabold text-2xl">{data.title}</h3>
                  <h4 className="italic font-bold text-fuchsia-700">{data.school}</h4>
                  <h5 className="italic">{data.year}</h5>
                  <p className="italic text-2xl">{data.desc}</p>
                </div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
        <div className="w-full md:w-[50%] md:order-2">
          <h1 className="text-white text-6xl">Experience</h1>
          <VerticalTimeline layout={'1-column'} lineColor="#b2bec3">
            {ExperienceData.map((data, index) => (
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                icon={<MdWork size={40} color="#ff5252" />}
                key={index}
              >
                <div className="text-left text-xl flex flex-col leading-10">
                  <h3 className="italic font-extrabold text-2xl">{data.title}</h3>
                  <h4 className="italic font-bold text-fuchsia-700">{data.company}</h4>
                  <h5 className="italic">{data.year}</h5>
                  <p className="italic text-2xl">{data.desc}</p>
                </div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </div>
  );
};

export default Resume;
