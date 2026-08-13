import Link from 'next/link'
  export const dynamic = 'force-static';
export default function ConsultingPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">

      {/* HERO */}
      <div className="mb-16">
        <p className="text-xs tracking-widest uppercase text-teal-500 font-medium mb-4">
          Consulting & Partnership
        </p>
        <div className="flex flex-col-reverse gap-8 md:flex-row md:items-start md:gap-12">
          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl font-semibold leading-snug mb-6">
              Reimagining classrooms to be sites of joy, play, and possibility for all learners.
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              I work with organizations, districts, and educators who need a thought partner with genuine classroom knowledge — someone who understands how identity and place shape learning, and has spent years inside schools as a researcher, teacher, and collaborator.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="text-sm text-gray-500 border border-gray-200 px-3 py-1">
                For <span className="text-teal-500 font-medium">organizations & districts</span> → research, evaluation, coaching
              </span>
              <span className="text-sm text-gray-500 border border-gray-200 px-3 py-1">
                For <span className="text-teal-500 font-medium">schools & classrooms</span> → teaching artist & curriculum work
              </span>
            </div>
            <a
              href="mailto:veena.vasudevan@gmail.com"
              className="inline-block bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 text-sm font-medium transition-colors"
            >
              Get in touch →
            </a>
          </div>
          {/* Replace this div with an <img> tag when your photo is ready */}
          <div className="w-full md:w-52 h-48 md:h-64 border-2 border-dashed border-gray-200 flex items-center justify-center text-gray-400 text-xs tracking-widest uppercase flex-shrink-0">
            Photo
          </div>
        </div>
      </div>

      <hr className="border-gray-200 mb-16" />

      {/* WHAT I OFFER */}
      <div className="mb-16 space-y-10">
        <div>
          <p className="text-xs tracking-widest uppercase text-teal-500 font-medium mb-3">
            What I Offer
          </p>
          <h2 className="text-2xl font-semibold mb-4">What I bring to the work</h2>
          <p className="text-gray-600 leading-relaxed">
            My work sits at the intersection of qualitative research, curriculum, and the lived realities of PreK–12 learners and educators. I have spent years inside schools — not as a visitor, but as a researcher, teacher, and collaborator — which means I can move between a classroom and a boardroom with equal fluency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div className="border-l-4 border-teal-500 bg-gray-50 p-6">
            <h3 className="font-semibold mb-3">Qualitative Research & Program Evaluation</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              I conduct qualitative and ethnographic research and design and implement program evaluations that help organizations understand how their programs and curriculum are actually working. Drawing on care-based methodologies and youth-centered inquiry, my findings are grounded in what's genuinely happening in classrooms and communities. Are children, communities, and educators being heard? Who benefits from the work? Whose voices go unnoticed?
            </p>
          </div>

          <div className="border-l-4 border-teal-500 bg-gray-50 p-6">
            <h3 className="font-semibold mb-3">Instructional Coaching & Curriculum Design</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              I work with educators and organizations to strengthen the relationships between teaching, learning, and assessment. I bring play-based learning, STEAM education, critical digital literacies, and multimodal approaches to curriculum design — creating conditions where students engage deeply, express themselves fully, and see their own experiences reflected in what they learn. I help educators ask: are my teaching, learning, and assessment truly aligned? Is my classroom genuinely student-centered? Am I integrating technology that nurtures and liberates learners — or technology that reinforces existing power structures and limits what's possible?
            </p>
          </div>

          <div className="border-l-4 border-teal-500 bg-gray-50 p-6">
            <h3 className="font-semibold mb-3">Project Management & Program Coordination</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Across universities, school districts, museums, and community organizations, I have led programs and initiatives from design through launch — managing diverse stakeholders, navigating institutional regulations and policy, and securing grant funding. My project experience spans program evaluation, curriculum development, technology design, and the building of educational spaces. What problem are we trying to solve? How do we get there without losing sight of why we started?
            </p>
          </div>

          <div className="border-l-4 border-teal-500 bg-gray-50 p-6">
            <h3 className="font-semibold mb-3">Designing Learning Environments for Joy and Inclusion</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              I work with educators across contexts to think deeply about the design of their learning environments — the materials, artifacts, spatial layouts, and daily routines that shape what's possible for children. Whether designing a new space or offering feedback on an existing one, I help educators ask: does this space spark joy? Are the materials accessible to every learner? Does this classroom promote freedom and belonging? Does it create the conditions for curiosity to take hold?
            </p>
          </div>

          <div className="border-l-4 border-teal-500 bg-gray-50 p-6 md:col-span-2">
            <h3 className="font-semibold mb-3">Online Course Design & Teaching</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              I have designed and taught graduate-level online courses for over a decade — in action research, STEAM education, technology and instructional design, and digital literacies. Rather than replicating in-person formats, I employ critical multimodal pedagogies, bring in tools that foster genuine collaboration and creativity, and reimagine what assessment can look like in online environments. How do our online teaching strategies promote equity for the range of students we serve? How do we leverage digital technologies — including AI — to facilitate meaningful learning experiences for professional students?
            </p>
          </div>

        </div>
      </div>

      {/* TEACHING ARTIST */}
      <div className="bg-gray-50 -mx-4 px-4 py-12 mb-16">
        <div className="max-w-2xl">
          <p className="text-xs tracking-widest uppercase text-teal-500 font-medium mb-3">
            Teaching Artist
          </p>
          <h2 className="text-2xl font-semibold mb-6">Making space for children to make meaning</h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              For over a decade I have worked alongside classroom teachers to enrich and expand standardized curriculum — bringing in arts-based practices, rich literature, and deep attention to children's lived experiences. I collaborate with educators to create spaces where children's curiosity, joy, and understanding are treated as worthy of expression.
            </p>
            <p>
              At the center of this work is a commitment to multimodal composition — supporting children in telling their stories and making meaning through drawing, movement, collage, digital media, photography, and other modes that honor the full range of how children communicate and create. I work within existing curriculum rather than replacing it, opening up space for children to move between the personal and the academic, the embodied and the representational.
            </p>
            <p>
              This practice has taken place in elementary classrooms, community spaces, and maker-oriented learning environments, always in close partnership with teachers and always with children's voices at the center.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 mt-6">
            {['Drawing', 'Movement', 'Collage', 'Digital Media', 'Photography', 'Rich Literature', 'Multimodal Composition'].map((mode) => (
              <span key={mode} className="text-xs border border-gray-300 px-3 py-1 text-gray-600">
                {mode}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* I'VE WORKED WITH */}
      <div className="mb-16">
        <p className="text-xs tracking-widest uppercase text-gray-400 font-medium mb-6">
          I've worked with
        </p>
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          {[
            'NYC Department of Education',
            'NY State Department of Education',
            'Philadelphia School District',
            'Princeton Public Schools',
            'New York University',
            'University of Pennsylvania',
            'University of Pittsburgh',
            'American Museum of Natural History',
            'Columbia University Center for New Media Teaching & Learning',
            'Institute for Financial Management & Research (India)',
          ].map((org) => (
            <span key={org} className="text-gray-700">
              {org}
            </span>
          ))}
        </div>
      </div>

      <hr className="border-gray-200 mb-16" />

      {/* CONTACT */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Let's find time to meet, connect, and imagine what's possible.
        </h2>
        <p className="text-gray-600 leading-relaxed mb-6">
          I'm interested in supporting your organization, team, or classroom. Reach out with questions, ideas, or simply to start a conversation.
        </p>
        <a
          href="mailto:veena.vasudevan@gmail.com"
          className="text-teal-500 hover:text-teal-600 font-medium"
        >
          veena.vasudevan@gmail.com →
        </a>
      </div>

    </div>
  )
}
