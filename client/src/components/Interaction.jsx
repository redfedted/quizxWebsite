import Groups from "./Groups";

function Interaction() {
  return (
    <>
      <div className="px-[1rem]">
        <div className="mb-[1.25rem] text-center text-[1.25rem] font-bold lg:mx-[4.5%] lg:text-start lg:text-[2.667rem] ">
          {" "}
          <h1>Discover the QuizX Difference</h1>
          <h2 className="text-[#CF0804]">Transform Your Campus Today.</h2>
        </div>
      </div>
      <div className="lg:mx-[4.5%]  lg:grid lg:grid-cols-3  lg:justify-between">
        <div>
          <Groups
            title={"Groups"}
            description={"Connect and Collaborate Anytime, Anywhere."}
            content={
              "Groups bring the classroom to you, wherever you are. It’s a dedicated space for teachers and students to communicate, share resources, and support each other’s learning journey. Simple, effective, and always accessible, Groups ensures that education doesn’t end at the classroom door—it’s where the extended learning community thrives."
            }
          />{" "}
          <Groups
            title={"Switch"}
            description={"Flip the Switch to Focus and Ideate."}
            content={
              "Switch is your gateway to meaningful conversations within Groups. It’s a space designed for clarity and purpose, where anyone can create a separate room to delve into specific topics. Invite the curious, document your brainstorming, and keep your ideas neatly organized. With Switch, you’re just one click away from transforming discussions into a wellspring of innovation."
            }
          />{" "}
          <Groups
            title={"Corridor"}
            description={"Discover and Connect"}
            content={
              "Corridor is the virtual crossroads of campus life. It’s where students from various institutions gather to meet, share, and spark collaborations. Just like the bustling hallways of a traditional campus, Corridor is a lively digital space that extends the boundaries of learning and interaction, fostering a vibrant community of like-minded individuals ready to explore and grow together."
            }
          />{" "}
          <Groups
            title={"Attention Tool "}
            description={"Boost focus through creative exercises"}
            content={
              "The Attention Tool helps students increase their capacity for focused attention. It provides creative exercises that train them to notice details more keenly. By honing this skill, students gain an extra edge in observation and awareness. The tool acts as a guide, analyzing images and audio that students share and offering feedback to acknowledge and reinforce their progress in focused attention. Like a meditative coach, it helps students master the art of paying close attention to the world around them."
            }
          />{" "}
          <Groups
            title={"Educational Podcasts "}
            description={
              "In-depth video conversations with knowledgeable professionals"
            }
            content={
              "This feature offers a library of engaging podcasts that explore educational topics through in-depth conversations. Podcast hosts interact with guests from diverse fields who have applied their knowledge in unique and interesting ways throughout their careers.Students can tune in to hear firsthand accounts and insights from experienced professionals across endless domains. Additionally, teachers can record their lectures in a podcast format, facilitating an interactive audio experience where curious students can ask questions. The Educational Podcasts provide an immersive long-form audio medium for students to expand their understanding while hearing real-world perspectives and stories that bring concepts to life."
            }
          />{" "}
        </div>
        <div>
          <Groups
            title={"Trivia"}
            description={"Learn, Play, Grow Every Day."}
            content={
              "Trivia transforms consuming information into an engaging game of discovery. It’s not just about the thrill of correct answers—it’s a daily adventure into new knowledge territories. Prioritizing students’ fields of study, Trivia ensures that every playful interaction is an opportunity to know something relevant and exciting."
            }
          />{" "}
          <Groups
            title={"Library"}
            description={"Knowledge, Neatly Cataloged."}
            content={
              "The Library feature is the heart of resource organization, serving as a central repository for all materials shared within Groups. Students can create personalized digital shelves to categorize their class notes and resources, streamlining the process of importing files from various formats and devices. With Library, educational content is meticulously organized, ensuring that necessary materials are always within easy reach."
            }
          />{" "}
          <Groups
            title={"Think! Game"}
            description={"Think Beyond the Right Answer."}
            content={
              "Think! Game is more than a quiz; it’s an invitation to engage with challenging content created by quizmasters. The focus here is on the pleasure of thinking and brainstorming, not just on finding the correct answer. With a connected forum, it invites students to see and discuss diverse perspectives, building a community where conversation, creativity, and various forms of thinking are sparked by knowledge. It’s a dynamic way to encourage deeper engagement with learning, turning every question into a chance for creative and critical discovery."
            }
          />{" "}
          <Groups
            title={"Desk"}
            description={"Personal workspace for academic tasks and goals"}
            content={
              "The Desk is a centralized area where students can view important assignments, projects, and goals assigned by teachers. Students can also create their own to-do lists and set personal goals. Tasks are displayed as progress bars, gamifying the process to motivate students to complete their work."
            }
          />{" "}
          <Groups
            title={"Admin Dashboard "}
            description={"Control center for managing your digital campus"}
            content={
              "Admins use this dashboard to create and edit their college profile, add students and faculty, and view analytics on institutional data and engagement."
            }
          />{" "} <Groups
          title={"Knowledge Spectrum "}
          description={"Next-gen Library for Knowledge"}
          content={
            "This system uses algorithms to analyze each student's interests and goals, delivering a tailored selection of resources from our knowledge library. It surfaces the most relevant content at the ideal time for efficient, personalized learning."
          }
        />{" "}
        </div>
        <div>
          <Groups
            title={"Scoreboard"}
            description={"Score Big with Classroom Engagement."}
            content={
              "Scoreboard is the competitive edge of classroom interaction. Embedded within each Group, it allows teachers to initiate a spirit of healthy competition. With intuitive controls for score assignment, Scoreboard turns academic challenges into a fun, engaging, and motivational game."
            }
          />{" "}
          <Groups
            title={"Think! Tool"}
            description={"AI-powered interactive learning"}
            content={
              "This conversational AI presents recent knowledge from a student's field of study in chunks, with thought-provoking questions. It encourages critical thinking as students explore concepts, while providing guidance to push their analysis further."
            }
          />{" "}
          <Groups
            title={"Imagine! Tool"}
            description={"Imagine Possibilites"}
            content={
              "This AI chat interface presents knowledge in chunks, prompting students to apply their imagination through open-ended questions. It engages students in an imaginative dialogue across diverse fields from Architecture to Zoology. As students ideate, the AI provides feedback to fuel their creativity."
            }
          />{" "}
          <Groups
            title={"Career Compass"}
            description={"AI career guidance tailored to students’ passion"}
            content={
              "This AI tool guides students towards fulfilling career paths based on their unique interests. It combines wisdom about societal impact with real-time job market data to suggest personalized options aligned with each student's goals."
            }
          />{" "}
          <Groups
            title={"Teacher's Studio "}
            description={
              "Powerful toolkit for creating engaging learning experiences"
            }
            content={
              "The Teacher's Studio is a comprehensive creative workspace that empowers educators to craft interactive educational content tailored to their students' needs. This studio is equipped with an array of powerful tools, including:Trivia builders for formative assessments and learning analytics Assignment creation and distribution Video uploading and YouTube curation An AI-powered lecture planner for well-structured, compelling lessons With this flexible studio, teachers can experiment with various multimedia resources and leverage AI assistance to design immersive, high-quality learning materials efficiently. The Studio's capabilities continuously expand based on educator feedback, ensuring optimal support for innovative teaching methods."
            }
          />{" "}
        </div>
      </div>
    </>
  );
}

export default Interaction;
