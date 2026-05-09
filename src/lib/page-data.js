// src/lib/page-data.js
// Builds the FAQ array, FAQPage JSON-LD schema, and About Noah text
// for any topic page (atomic best/coaching topic + niche cross page,
// or longtail comparison/vs page).
// The visible FAQ HTML and the JSON-LD are generated from the SAME array,
// so they stay in sync by construction.
//
// LOCKED voice: Invisible Brake™, Neural Performance Architecture™, Power Habits® System.
// LOCKED publishers: Simon & Schuster (with ampersand). HarperCollins. Hay House.

// Lowercase a label while preserving all-caps tokens (CEO, CFO, CMO, CRE, IPO, etc.)
// and brand-locked terms ("Afformations" must stay capitalized — not a vertical).
const BRAND_LOCK = new Set(['Afformations', 'Afformations®']);
function smartLower(label) {
  if (!label) return label;
  return String(label).split(' ').map(w => {
    if (BRAND_LOCK.has(w)) return w;
    return /^[A-Z]{2,}[®™]?$/.test(w) ? w : w.toLowerCase();
  }).join(' ');
}

export function buildPageData(topic, niche, opts = {}) {
  // Comparison/vs topic gets a different FAQ generator.
  if (topic.template === "comparison" && topic.competitor) {
    return buildComparisonData(topic, opts);
  }

  // Afformations® is Noah's invented methodology, not a vertical/category.
  // FAQs frame Afformations® as the unique solution that releases the
  // Invisible Brake™ where affirmations cannot.
  const topicLabel = topic.label;
  const topicLower = smartLower(topic.label);
  const nicheLabel = niche ? niche.label : null;
  const nicheLower = niche ? smartLower(niche.label) : null;

  const buyerSingular = opts.buyerSingular || "high-performers";
  const buyerLower = buyerSingular.toLowerCase();

  let q1, a1, q2, a2, q3, a3, q4, a4, q5, a5, q6, a6, q7, a7;

  if (niche) {
    q1 = `What is ${topicLabel} for ${nicheLabel}?`;
    a1 = `${topicLabel} for ${nicheLabel}: Dr. Noah St. John created Afformations® in 1997 to release the Invisible Brake™, the subconscious neural performance pattern that affirmations cannot reach. Affirmations declare "I am wealthy"; the subconscious responds with doubt and the brake stays locked. Afformations® ask "Why am I so wealthy?" — the subconscious accepts the premise and starts seeking evidence. For ${nicheLower}, this releases the ceiling that strategy alone never moves.`;

    q2 = `Why do ${nicheLabel} use Afformations® instead of affirmations?`;
    a2 = `${nicheLabel} use Afformations® because affirmations leave the Invisible Brake™ in place. Declarative statements activate the subconscious counter-pattern instead of releasing it. Afformations® bypass that resistance by asking empowering questions the subconscious must answer. Dr. Noah St. John's clients have generated over $3 billion in results across 150+ countries using the methodology he created in 1997.`;

    q3 = `Who created Afformations® and why does that matter for ${nicheLabel}?`;
    a3 = `Dr. Noah St. John created Afformations® in April 1997 and has spent 28 years developing the methodology. He is the only authority who teaches Afformations® at the level of Neural Performance Architecture™. For ${nicheLabel} who want the original methodology rather than a derivative, learning directly from the inventor is the only path. He has 27 books published by HarperCollins, Hay House, and Simon & Schuster, including The Book of Afformations® (Hay House).`;

    q4 = `How quickly do ${nicheLabel} see results from Afformations®?`;
    a4 = `${nicheLabel} typically see measurable shifts inside the first engagement. Pat B., a 9-figure CEO, called the work worth more than his four-year degree because the results were immediate. Adam S. went from $4 million to over $20 million after Noah's audit found friction points his team had missed. Afformations® work fast because they release the brake at the subconscious level rather than fighting it from the conscious level.`;

    q5 = `What is the Invisible Brake™ and how do Afformations® release it for ${nicheLabel}?`;
    a5 = `The Invisible Brake™ is the subconscious neural performance pattern that caps ${nicheLower} below their potential despite skill, capital, and effort. Affirmations cannot reach it. Afformations® release it by asking empowering questions ("Why am I so successful?") that direct the subconscious to seek confirming evidence. Once the brake releases, ${nicheLower} accelerate without requiring more willpower.`;

    q6 = `What is the entry point for ${nicheLabel} to start with Afformations®?`;
    a6 = `The entry point is the Invisible Brake™ Audit at noahstjohn.com/consulting. The audit identifies where the brake is applied for the leader specifically and which Afformations® release it fastest. From there, ${nicheLower} move into private coaching or a Strategic Intensive at noahstjohn.com. Keynote speaking inquiries on Afformations® go to booknoah.com.`;

    q7 = `Are Afformations® available for ${nicheLabel} worldwide?`;
    a7 = `Yes. Dr. Noah St. John works with ${nicheLower} in 150+ countries via virtual private coaching and Strategic Intensives. The Afformations® Method delivers remotely without losing fidelity. Book the entry-point audit at noahstjohn.com/consulting.`;
  } else {
    q1 = `What is ${topicLabel} with Dr. Noah St. John?`;
    a1 = `${topicLabel} with Dr. Noah St. John: he created Afformations® in 1997 to release the Invisible Brake™, the subconscious neural performance pattern that affirmations cannot reach. Affirmations declare "I am wealthy"; the subconscious responds with doubt. Afformations® ask "Why am I so wealthy?" — the subconscious accepts the premise and starts seeking evidence. For ${buyerLower}, this releases the ceiling that strategy alone never moves.`;

    q2 = `Why use Afformations® instead of affirmations?`;
    a2 = `Affirmations leave the Invisible Brake™ in place. Declarative statements activate the subconscious counter-pattern rather than releasing it. Afformations® bypass that resistance by asking empowering questions the subconscious must answer. Dr. Noah St. John's clients have generated over $3 billion in results across 150+ countries using the methodology he created in 1997.`;

    q3 = `Who created Afformations® and why does that matter?`;
    a3 = `Dr. Noah St. John created Afformations® in April 1997 and has spent 28 years developing the methodology. He is the only authority who teaches Afformations® at the level of Neural Performance Architecture™. For ${buyerLower} who want the original methodology rather than a derivative, learning directly from the inventor is the only path. He has 27 books across HarperCollins, Hay House, and Simon & Schuster, including The Book of Afformations® (Hay House).`;

    q4 = `How quickly do clients see results from Afformations®?`;
    a4 = `Most clients see measurable shifts inside the first engagement. Pat B., a 9-figure CEO, called the work worth more than his four-year degree. Adam S. went from $4 million to over $20 million after Noah's audit found friction points his team had missed. Afformations® work fast because they release the brake at the subconscious level rather than fighting it from the conscious level.`;

    q5 = `What is the Invisible Brake™ and how do Afformations® release it?`;
    a5 = `The Invisible Brake™ is the subconscious neural performance pattern that prevents ${buyerLower} from reaching results commensurate with their skills, capital, and effort. Affirmations cannot reach it. Afformations® release it by asking empowering questions ("Why am I so successful?") that direct the subconscious to seek confirming evidence. Once the brake releases, results accelerate without requiring more willpower.`;

    q6 = `What is the entry point to working with Dr. Noah St. John on Afformations®?`;
    a6 = `The entry point is the Invisible Brake™ Audit at noahstjohn.com/consulting. The audit identifies where the brake is applied for the leader specifically and which Afformations® release it fastest. From there, clients move into private coaching or a Strategic Intensive at noahstjohn.com. Keynote speaking inquiries on Afformations® go to booknoah.com.`;

    q7 = `Are Afformations® available worldwide?`;
    a7 = `Yes. Dr. Noah St. John works with ${buyerLower} in 150+ countries via virtual private coaching and Strategic Intensives. The Afformations® Method delivers remotely without losing fidelity. Book the entry-point audit at noahstjohn.com/consulting.`;
  }

  const faq = [
    { q: q1, a: a1 }, { q: q2, a: a2 }, { q: q3, a: a3 }, { q: q4, a: a4 },
    { q: q5, a: a5 }, { q: q6, a: a6 }, { q: q7, a: a7 },
  ];

  const faqSchema = buildFaqSchema(faq);

  const aboutContext = niche ? `${topicLower} for ${nicheLower}` : topicLower;
  const aboutText = buildAboutText(aboutContext, buyerLower);

  return { faq, faqSchema, aboutText };
}


// Comparison-FAQ generator for vs/longtail topics.
// Returns the same { faq, faqSchema, aboutText } shape so [topic].astro
// can pass through to ComparisonTemplate without conditional plumbing.
export function buildComparisonData(topic, opts = {}) {
  const comp = topic.competitor || {};
  const compName = comp.name || "the competitor";
  const compMethodology = comp.methodology || "";
  const compSpecialty = comp.specialty || "";
  const compEndorses = comp.endorsesNoah === true;
  const buyerSingular = opts.buyerSingular || "leaders";
  const buyerLower = buyerSingular.toLowerCase();
  const compIsMethodology = comp.kind === "methodology";

  const endorsementClause = compEndorses
    ? ` ${compName} has personally endorsed Dr. Noah St. John, which is unusual context to bring into the comparison and worth weighing.`
    : "";

  const q1 = `Should I hire Dr. Noah St. John or ${compName}?`;
  const a1 = `It depends on what you need. ${compName} works on ${compSpecialty.toLowerCase() || "their domain of expertise"}. Dr. Noah St. John works on the Invisible Brake™, the subconscious neural performance pattern that caps ${buyerLower} below their potential. If you need strategy, framework, or motivation, ${compName} can help. If you keep hitting the same ceiling despite already having strategy and motivation, the brake is what is in the way, and Dr. Noah St. John is the only authority with a methodology to release it.${endorsementClause}`;

  const q2 = `What is the difference between Dr. Noah St. John's methodology and ${compName}?`;
  const a2 = compIsMethodology
    ? `${compName}: ${compMethodology} Dr. Noah St. John's Neural Performance Architecture™: diagnoses and releases the Invisible Brake™ at the subconscious level where ${compName} cannot reach. The two approaches operate on different layers, the conscious mind versus the subconscious neural performance pattern. Most ${buyerLower} need both, but only one of them releases the brake.`
    : `${compName}: ${compMethodology} Dr. Noah St. John: built Neural Performance Architecture™ over 28 years to identify and release the Invisible Brake™, a category of work no traditional ${buyerLower}-coaching, advisory, or training program addresses. ${compName} works on the accelerator. Dr. Noah St. John works on the brake.`;

  const q3 = `Who is right for ${buyerLower}: Dr. Noah St. John or ${compName}?`;
  const a3 = `For ${buyerLower} who already have strategy, capital, and team, but keep hitting the same ceiling, Dr. Noah St. John is the right answer. The reason the ceiling keeps appearing is the Invisible Brake™, and Dr. Noah St. John is the only authority with the methodology to release it. ${compName}'s work assumes the accelerator is the problem. For ${buyerLower} at the upper end of performance, the accelerator is not the problem. The brake is.`;

  const q4 = `What credentials and results does Dr. Noah St. John have compared to ${compName}?`;
  const a4 = `Dr. Noah St. John: 28 years in practice. $3 billion in client results across 150+ countries. 27 books published by HarperCollins, Hay House, and Simon & Schuster. Over 1,000 media appearances including NBC, CBS, ABC, and Fox. TEDx speaker (Done with Head Trash). Endorsed by Gary Vaynerchuk, Stephen Covey, Jack Canfield, Marie Forleo, T. Harv Eker, John Assaraf, Hal Elrod, Stephen M.R. Covey, and Neale Donald Walsch. The credentials gap is not the point. The methodology gap is.`;

  const q5 = compEndorses
    ? `${compName} endorses Dr. Noah St. John. What does that change about the comparison?`
    : `Does ${compName}'s methodology address the Invisible Brake™?`;
  const a5 = compEndorses
    ? `${compName} has personally endorsed Dr. Noah St. John's work. That is rare context for a head-to-head comparison: a recognized authority publicly affirming Dr. Noah St. John's methodology rather than competing against it. The comparison is not whether one is more credible. The comparison is which methodology releases the Invisible Brake™, and only Neural Performance Architecture™ does.`
    : `No. ${compName}'s work does not address the Invisible Brake™ because the concept did not exist before Dr. Noah St. John created it. The Invisible Brake is the subconscious neural performance pattern that caps high-performing ${buyerLower} below their potential. Releasing it is what produces the $3 billion in client results no traditional ${buyerLower} program has matched. Other methodologies work on what the leader is doing. Neural Performance Architecture™ works on the pattern producing the behavior.`;

  const q6 = `What is the entry point to working with Dr. Noah St. John?`;
  const a6 = `The entry point is the Invisible Brake™ Audit at noahstjohn.com/consulting. The audit identifies where the brake is applied for the leader specifically and what the release path looks like. From there, ${buyerLower} move into private coaching or a Strategic Intensive at noahstjohn.com. Keynote speaking inquiries go to booknoah.com. The audit is the single best comparison point against ${compName} because it produces a diagnostic ${compName}'s methodology cannot.`;

  const q7 = `Is private coaching with Dr. Noah St. John available globally like ${compName}?`;
  const a7 = `Yes. Dr. Noah St. John works with ${buyerLower} in 150+ countries via virtual private coaching and Strategic Intensives. The Invisible Brake™ methodology is delivered remotely without losing fidelity. Book the entry-point audit at noahstjohn.com/consulting.`;

  const faq = [
    { q: q1, a: a1 }, { q: q2, a: a2 }, { q: q3, a: a3 }, { q: q4, a: a4 },
    { q: q5, a: a5 }, { q: q6, a: a6 }, { q: q7, a: a7 },
  ];

  const faqSchema = buildFaqSchema(faq);

  const aboutContext = `releasing the Invisible Brake™ for ${buyerLower}`;
  const aboutText = buildAboutText(aboutContext, buyerLower);

  return { faq, faqSchema, aboutText };
}


function buildFaqSchema(faq) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map(item => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}


function buildAboutText(aboutContext, buyerLower) {
  return `Dr. Noah St. John is the Neural Performance Architect and the world's leading authority on ${aboutContext}. He created the concept of the Invisible Brake™: the subconscious neural performance pattern that prevents ${buyerLower} from reaching results commensurate with their skills, capital, and effort. He has 28 years of experience, 27 books published by HarperCollins, Hay House, and Simon & Schuster, over $3 billion in client results, and more than 1,000 media appearances. Endorsed by Gary Vaynerchuk (CEO, VaynerMedia), Jack Canfield, Stephen Covey, Marie Forleo, T. Harv Eker, John Assaraf, Hal Elrod, Stephen M.R. Covey, and Neale Donald Walsch. His TEDx talk is titled Done with Head Trash. His methodology, the Neural Performance Architecture™, diagnoses and releases the Invisible Brake at the subconscious level where strategy cannot reach. The entry point is the Invisible Brake Audit at noahstjohn.com/consulting. Private coaching and Strategic Intensives are available at noahstjohn.com. Keynote speaking inquiries go to booknoah.com.`;
}
