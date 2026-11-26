
'use strict';
const icons={Today:'<path d="m3 10 9-7 9 7v10H3z"/><path d="M9 20v-7h6v7"/>',Explore:'<circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2 5-5 2 2-5z"/>',Library:'<path d="M4 4h4v16H4zm6 0h4v16h-4zm6 1 4-1 3 15-4 1z"/>',Review:'<path d="M20 11a8 8 0 1 0-2 6M20 4v7h-7M4 13a8 8 0 0 0 2 5"/>',Profile:'<circle cx="12" cy="8" r="4"/><path d="M4 21v-2a8 8 0 0 1 16 0v2"/>',sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l2 2m10 10 2 2M19 5l-2 2M7 17l-2 2"/>',moon:'<path d="M20 15a9 9 0 0 1-11-11 9 9 0 1 0 11 11z"/>',bookmark:'<path d="M6 3h12v18l-6-4-6 4z"/>',close:'<path d="m6 6 12 12M18 6 6 18"/>',back:'<path d="m15 5-7 7 7 7"/>'};
const icon=n=>'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+icons[n]+'</svg>';
const E=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const courses=[
['bias','Psychology','The shortcuts of the mind','Why our brains sometimes take the wrong shortcut.','mind','Beginner','Course','https://www.apa.org/topics/judgment-decision-making',[
['Your brain makes shortcuts','A heuristic is a mental shortcut that helps us decide quickly with limited information. It can be useful, but it can also lead to systematic mistakes.','mind'],
['The availability heuristic','After seeing news about a plane crash, you may feel flying is unusually dangerous. Vivid, easily recalled examples can distort judgments about frequency.','scales'],
['Look for the base rate','Instead of asking how easily you can imagine something, ask how often it actually occurs in a relevant population. Use evidence, not just familiarity.','chart']],
[['After seeing one dramatic news story, you overestimate the risk. Which shortcut is this?',['Availability heuristic','Compounding','Natural selection'],0,'Ease of recall can be mistaken for frequency.'],['What is a useful way to counter this bias?',['Trust the most vivid story','Check reliable base-rate data','Ignore all anecdotes'],1,'Base rates provide a broader view than a memorable example.']]],
['memory','Psychology','How memory really works','Learn why remembering is an active process.','mind','Beginner','Course','https://www.learningscientists.org/blog/2016/6/23-1',[
['Memory is not a recording','We encode, store and retrieve information. Recall is reconstructive: what we remember can be influenced by prior knowledge and later information.','mind'],
['Practice retrieving','Close your notes and try to explain an idea from memory. Retrieval practice strengthens your ability to recall it later.','network'],
['Space your practice','Studying a concept over several days typically supports longer-term retention better than cramming the same study time into one sitting.','timeline']],
[['Which activity is retrieval practice?',['Rereading the same paragraph','Recalling the main idea without notes','Highlighting every sentence'],1,'Retrieval means bringing an idea to mind rather than seeing it again.'],['What usually helps long-term learning?',['Spacing practice over time','Only reviewing right before a test','Avoiding mistakes at all costs'],0,'Distributed practice helps build durable recall.']]],
['compound','Finance','The quiet power of compounding','See how growth can build on earlier growth.','growth','Beginner','Course','https://www.investor.gov/financial-tools-calculators/calculators/compound-interest-calculator',[
['Growth on growth','With compound growth, returns are calculated on both the original amount and prior accumulated returns. It is different from simple interest, which is calculated only on the principal.','growth'],
['Watch your money change','Adjust the annual rate in this simplified model. It assumes a constant annual return, no fees, taxes, withdrawals or extra deposits. Real investments can lose value.','compound'],
['Time is a powerful variable','When the rate is positive and returns remain invested, more time allows more rounds of compounding. But higher expected returns often come with greater uncertainty.','timeline']],
[['Why does compound growth accelerate at a fixed positive rate?',['The rate rises automatically','Returns build on prior returns','The starting principal doubles every year'],1,'The same rate is applied to a growing amount.'],['Is a modeled 7% return guaranteed?',['Yes','Only for stocks','No'],2,'Actual investment returns vary and may be negative.']]],
['inflation','Economics','Why prices rise','Understand the relationship between prices and purchasing power.','scales','Beginner','Course','https://www.bls.gov/cpi/',[
['A basket of goods','Inflation describes an increase in the overall price level over time. Price indexes track changes in the cost of a representative basket of goods and services.','scales'],
['Purchasing power','If a basket that cost $100 now costs $105, its price increased by 5%. The same $100 buys less of that basket than before.','growth'],
['More than one cause','Inflation can reflect strong demand, disruptions to supply, changing expectations and other forces. Different episodes have different causes.','network']],
[['If the overall price level rises, what happens to a fixed dollar amount’s purchasing power?',['It generally falls','It always doubles','It is unchanged'],0,'A fixed amount buys fewer goods at higher prices.'],['What does a consumer price index measure?',['Every individual price exactly','Changes in a representative basket’s prices','The total stock market value'],1,'It tracks a weighted set of consumer prices.']]],
['supply','Economics','Markets in motion','Explore supply, demand and equilibrium.','scales','Beginner','Course','https://openstax.org/books/principles-economics-3e/pages/3-introduction-to-demand-and-supply',[
['Buyers and sellers','In a simple competitive market, quantity demanded tends to fall as price rises, while quantity supplied tends to rise, holding other factors constant.','scales'],
['Find the equilibrium','Move the demand slider in this simplified linear model. The intersection of supply and demand determines the modeled market-clearing price.','supply'],
['What shifts a curve?','A change in buyers’ incomes or preferences can shift demand; a change in production costs can shift supply. A change in price alone typically moves along a curve.','network']],
[['What can shift the supply curve?',['A change in production costs','Movement along demand only','Nothing'],0,'Production costs influence how much sellers offer at a given price.'],['What is equilibrium in this simplified model?',['Demand exceeds supply','Quantity supplied equals quantity demanded','Every product is free'],1,'The two quantities agree at the equilibrium price.']]],
['stoic','Philosophy','The art of what you can control','A first look at Stoic philosophy.','orbit','Beginner','Course','https://plato.stanford.edu/entries/stoicism/',[
['The Stoic distinction','Stoic thinkers such as Epictetus distinguish our judgments and choices from external events that are not entirely up to us.','orbit'],
['Influence without certainty','You can prepare for a difficult conversation and choose how you speak. You cannot guarantee the other person’s reaction.','scales'],
['Practice, not indifference','Stoicism is not simply suppressing emotions or refusing to act. Classical Stoics emphasized virtue and the rational evaluation of judgments.','mind']],
[['Which is most directly within your control?',['A stranger’s opinion','Your own considered response','Tomorrow’s weather'],1,'Our response is more directly ours than external outcomes.'],['What is a central Stoic value?',['Virtue','Perfect control of others','Avoiding every emotion'],0,'Virtue and sound judgment are central to classical Stoicism.']]],
['evolution','Science','Evolution in action','Understand how populations change over generations.','nature','Beginner','Course','https://evolution.berkeley.edu/evolution-101/',[
['Variation comes first','Individuals in a population vary. Some differences are heritable and can be passed to offspring.','nature'],
['Selection changes frequencies','When heritable variants affect reproductive success in a particular environment, those variants can become more or less common over generations.','network'],
['Not a ladder of progress','Evolution has no predetermined goal. Natural selection, mutation, genetic drift and gene flow can all change populations.','timeline']],
[['What evolves across generations?',['A population’s inherited variation','An individual’s muscles during exercise','Every organism toward perfection'],0,'Evolution concerns inherited changes in populations.'],['Does natural selection plan for the future?',['Yes','No','Only in humans'],1,'Selection acts on existing variation in current conditions.']]],
['space','Astronomy','Why planets stay in orbit','Gravity and motion explained visually.','orbit','Beginner','Course','https://science.nasa.gov/solar-system/',[
['Gravity attracts','Gravity is an attractive interaction between masses. Near the Sun, planets experience a gravitational pull toward it.','orbit'],
['Falling sideways','A planet in orbit is continuously accelerating toward the Sun while moving sideways. Its path curves rather than falling straight inward.','orbit'],
['Orbits are not always circles','Many gravitational orbits are ellipses. The details depend on velocity, position and the masses involved.','orbit']],
[['What keeps a planet in orbit?',['No gravity in space','Gravity combined with its motion','A rigid invisible track'],1,'Gravity continually bends the planet’s motion.'],['Are all stable planetary orbits perfectly circular?',['Yes','No','Only Earth’s'],1,'Planetary orbits are generally elliptical.']]],
['internet','Technology','How the internet finds you','Follow a request from your device to a website.','network','Beginner','Course','https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Web_mechanics/How_does_the_Internet_work',[
['A network of networks','The internet connects many independent networks. Data travels in packets across these networks using agreed protocols.','network'],
['Names and addresses','DNS helps translate human-readable domain names into network information, often an IP address. Devices use addresses to route traffic.','network'],
['A request and response','A browser can send an HTTP request to a server, which responds with content or an error. HTTPS protects the connection through encryption and authentication.','network']],
[['What does DNS help do?',['Translate domain names to network addresses','Charge your battery','Render all graphics'],0,'DNS resolves names to records such as IP addresses.'],['What does HTTPS protect?',['The connection between client and server','Every file on your device forever','Your identity from every website'],0,'HTTPS encrypts and authenticates the connection, not everything you do.']]],
['ai','Technology','How machines learn','A grounded introduction to machine learning.','network','Beginner','Course','https://developers.google.com/machine-learning/crash-course',[
['Patterns from examples','Many machine-learning systems fit parameters to examples. They use learned patterns to produce predictions on inputs they have not seen.','network'],
['Learning versus memorizing','A model can perform well on training examples but poorly on new ones. This is called overfitting. Separate evaluation data helps detect it.','chart'],
['Predictions can be wrong','Models can inherit biases from data, fail under new conditions, or produce plausible but incorrect results. Evaluate performance for the intended use.','scales']],
[['What is overfitting?',['Learning training examples too closely to generalize well','Being correct on every future example','Using too little electricity'],0,'A model may fit training data but fail on new examples.'],['What helps evaluate generalization?',['Only training examples','Separate representative evaluation data','More confident wording'],1,'Evaluation on unseen data helps assess performance.']]],
['history','History','The Industrial Revolution','How a shift in production transformed societies.','timeline','Beginner','Course','https://www.britannica.com/event/Industrial-Revolution',[
['A changing economy','Beginning in Britain in the eighteenth century, industrialization shifted many forms of production toward mechanization and factories. It spread unevenly across regions.','timeline'],
['Power and production','Steam power, mechanized textile production and improvements in transport helped change how goods were made and distributed.','network'],
['Gains and costs','Industrialization increased production but also brought difficult labor conditions, environmental changes and rapid urban growth. Its effects varied across social groups.','scales']],
[['Where did the Industrial Revolution first develop?',['Britain','Antarctica','Ancient Egypt'],0,'Britain was an early center of industrialization.'],['Which statement best captures its social effects?',['Everyone benefited equally','Production grew alongside significant social costs','It ended all manual labor immediately'],1,'Its benefits and harms were unevenly distributed.']]],
['probability','Mathematics','The mathematics of chance','Explore why random events can surprise us.','chance','Beginner','Quick read','https://openstax.org/books/introductory-statistics-2e/pages/3-introduction',[
['Independent events','If fair coin tosses are independent, a previous heads result does not change the probability that the next toss is heads.','chance'],
['Try a small experiment','Run an independent fair-coin simulation. Small samples can vary widely; larger samples tend to have proportions closer to one half.','coin'],
['A common mistake','The gambler’s fallacy assumes that past independent events make an opposite future outcome due. A fair coin does not remember its previous toss.','mind']],
[['After five heads in a row, what is the chance of heads on the next independent fair toss?',['10%','50%','90%'],1,'Each independent fair toss still has probability one half.'],['What tends to happen as sample size grows?',['Relative frequency tends toward the underlying probability','Heads must alternate with tails','All uncertainty disappears'],0,'The law of large numbers concerns convergence of relative frequency.']]],
['sleep','Health','The rhythm of sleep','Learn how your body organizes rest.','orbit','Beginner','Quick read','https://www.nhlbi.nih.gov/health/sleep',[
['Two processes','Sleep timing reflects both pressure that builds during wakefulness and a roughly daily circadian rhythm influenced by light and other cues.','orbit'],
['Sleep changes through the night','Sleep includes non-REM and REM stages, cycling through the night. Different stages have different patterns of brain activity.','timeline'],
['Regularity matters','A consistent schedule and appropriate light exposure can support sleep timing. Persistent sleep difficulties may require professional evaluation.','nature']],
[['What influences circadian timing?',['Light exposure','Only the last meal','The number of unread emails'],0,'Light is a major timing cue for the body clock.'],['Does sleep consist of one unchanging state?',['Yes','No','Only in adults'],1,'Sleep alternates among distinct stages.']]],
['listening','Communication','Listening to understand','Build better conversations through attention and curiosity.','mind','Beginner','Quick read','https://www.ccl.org/articles/leading-effectively-articles/coaching-others-use-active-listening-skills/',[
['Listen before responding','Active listening involves attending to the speaker’s meaning rather than merely planning your reply.','mind'],
['Reflect and clarify','Summarize what you heard in your own words and ask if you understood correctly. Open questions can reveal what is missing.','network'],
['Agreement is not required','You can acknowledge another person’s perspective without agreeing with every conclusion. This creates room for a more productive discussion.','scales']],
[['Which response demonstrates active listening?',['Interrupting with advice','Checking your understanding of what was said','Assuming you already know'],1,'A reflective summary invites correction.'],['Does acknowledging someone’s viewpoint require agreement?',['Yes','No','Always in a workplace'],1,'Understanding and agreement are distinct.']]],
['government','Government','Why governments separate power','Explore checks and balances in the United States.','scales','Beginner','Quick read','https://constitution.congress.gov/browse/essay/intro-6-2/ALDE_00000031/',[
['Three branches','The US Constitution assigns legislative, executive and judicial powers to different branches. Their responsibilities are distinct but interact.','network'],
['Checks and balances','For example, Congress can pass bills, the president can veto them, and Congress can override a veto with the constitutionally required majorities.','scales'],
['A practical system','Separation of powers is designed to constrain concentrated authority. Its application involves constitutional law, institutions and ongoing disagreement.','timeline']],
[['Which branch generally makes federal statutes?',['Legislative','Judicial','Executive alone'],0,'Congress exercises federal legislative power.'],['What is an example of a check?',['A presidential veto','A coin toss','A private company’s logo'],0,'A veto is a constitutional check on legislation.']]],
['nature','Nature','The hidden network of ecosystems','Discover how energy moves through living systems.','nature','Beginner','Course','https://openstax.org/books/biology-2e/pages/46-2-energy-flow-through-ecosystems',[
['Energy enters','Many ecosystems rely on primary producers that convert light energy into chemical energy through photosynthesis. Other ecosystems use chemical energy.','nature'],
['Energy flows','Consumers obtain energy by eating other organisms. Energy is lost from usable biomass at each trophic transfer, often as heat.','network'],
['Matter cycles','Unlike energy flow, elements such as carbon and nitrogen can cycle among organisms and the environment. Decomposers help return nutrients.','orbit']],
[['Which organisms usually form the base of a sunlit food web?',['Primary producers','Top predators','Only fungi'],0,'Producers turn light energy into chemical energy.'],['What happens to usable energy at successive trophic levels?',['Generally decreases','Always doubles','Stays exactly the same'],0,'Energy is used and dissipated during each transfer.']]]
].map(x=>({id:x[0],category:x[1],title:x[2],desc:x[3],art:x[4],difficulty:x[5],format:x[6],source:x[7],slides:x[8].map(y=>({title:y[0],text:y[1],art:y[2]})),questions:x[9].map(y=>({q:y[0],options:y[1],correct:y[2],why:y[3]}))}));
// Catalog expansion: original lessons informed by public subject listings; no proprietary course content.
courses.push(...[
  {
    "id": "habits",
    "category": "Personal Development",
    "title": "How habits take root",
    "desc": "Turn a repeated action into a more reliable routine.",
    "art": "network",
    "diagram": [
      "Cue",
      "Action",
      "Outcome"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://openstax.org/books/psychology-2e/pages/1-introduction",
    "slides": [
      {
        "title": "A repeated setting",
        "text": "Habits are learned tendencies to act in familiar contexts. A location, time, or preceding activity can become a cue.",
        "label": "Cue",
        "art": "network"
      },
      {
        "title": "Make the start small",
        "text": "If you want to read after breakfast, place the book beside your breakfast spot. Reducing the effort of starting makes repetition easier.",
        "label": "Start",
        "art": "scales"
      },
      {
        "title": "Repetition over time",
        "text": "Repeated action in a stable context can increase automaticity. There is no universal number of days required for a habit to form.",
        "label": "Repeat",
        "art": "timeline"
      },
      {
        "title": "Design a recovery plan",
        "text": "Missing a day does not erase learning. Decide what to do when your usual context changes, such as reading after lunch while traveling.",
        "label": "Recover",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "Which plan makes a reading habit easier to repeat?",
        "options": [
          "Read whenever motivation strikes",
          "Read two pages after breakfast",
          "Wait until a free weekend"
        ],
        "correct": 1,
        "why": "A small action paired with a recurring cue is easier to repeat."
      },
      {
        "q": "Does every habit become automatic after exactly 21 days?",
        "options": [
          "Yes",
          "No",
          "Only if it is a morning habit"
        ],
        "correct": 1,
        "why": "Habit formation varies with the person, action, and context."
      }
    ]
  },
  {
    "id": "motivation",
    "category": "Psychology",
    "title": "What moves us to act",
    "desc": "Distinguish interest, incentives and motivation.",
    "art": "network",
    "diagram": [
      "Interest",
      "Choice",
      "Effort"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://openstax.org/books/psychology-2e/pages/1-introduction",
    "slides": [
      {
        "title": "Two kinds of motivation",
        "text": "Intrinsic motivation comes from interest or enjoyment of an activity. Extrinsic motivation comes from a separable outcome such as pay or recognition.",
        "label": "Interest",
        "art": "network"
      },
      {
        "title": "Motives can coexist",
        "text": "A person may enjoy teaching and also value their salary. Real motives are often mixtures rather than mutually exclusive categories.",
        "label": "Mixture",
        "art": "scales"
      },
      {
        "title": "Support autonomy",
        "text": "Choice, manageable challenges and useful feedback can help people feel competent and autonomous. Controlling incentives may work differently from supportive ones.",
        "label": "Choice",
        "art": "timeline"
      },
      {
        "title": "Redesign the task",
        "text": "Choose a personally meaningful reason for a task and identify a manageable next step. Motivation can grow through action rather than always preceding it.",
        "label": "Action",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "Which is primarily intrinsic motivation?",
        "options": [
          "Drawing because you enjoy it",
          "Drawing only for a cash prize",
          "Drawing to avoid a fine"
        ],
        "correct": 0,
        "why": "Enjoyment of the activity itself is an intrinsic reason."
      },
      {
        "q": "Can a worker be both intrinsically and extrinsically motivated?",
        "options": [
          "Never",
          "Yes",
          "Only if unpaid"
        ],
        "correct": 1,
        "why": "Interest and external rewards can coexist."
      }
    ]
  },
  {
    "id": "attention",
    "category": "Psychology",
    "title": "The limits of attention",
    "desc": "Discover why switching tasks feels costly.",
    "art": "network",
    "diagram": [
      "Signal",
      "Selection",
      "Switch"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://openstax.org/books/psychology-2e/pages/1-introduction",
    "slides": [
      {
        "title": "Attention is selective",
        "text": "The brain prioritizes some information over other inputs. This helps us act, but it means we can miss unexpected details.",
        "label": "Select",
        "art": "network"
      },
      {
        "title": "Working memory has limits",
        "text": "Keeping instructions, numbers or intentions in mind competes for limited mental resources. Complexity can increase the burden.",
        "label": "Capacity",
        "art": "scales"
      },
      {
        "title": "Switching has a cost",
        "text": "Alternating between demanding tasks often produces a short delay or more errors because the relevant rules and goals must be reactivated.",
        "label": "Switch",
        "art": "timeline"
      },
      {
        "title": "Reduce competing demands",
        "text": "Close unrelated tabs, write down unfinished tasks, and group similar work. The aim is to reduce unnecessary switches, not eliminate all multitasking.",
        "label": "Design",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "Why can rapid task switching slow work?",
        "options": [
          "The task goals must be reactivated",
          "The brain stops functioning",
          "All simple tasks require the same attention"
        ],
        "correct": 0,
        "why": "Switching task sets can take time and produce interference."
      },
      {
        "q": "Which design reduces working-memory load?",
        "options": [
          "Keep every step in your head",
          "Use a short written checklist",
          "Add unrelated notifications"
        ],
        "correct": 1,
        "why": "A checklist externalizes information."
      }
    ]
  },
  {
    "id": "happiness",
    "category": "Psychology",
    "title": "The many ingredients of happiness",
    "desc": "Separate momentary pleasure from life satisfaction.",
    "art": "network",
    "diagram": [
      "Pleasure",
      "Meaning",
      "Connection"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://openstax.org/books/psychology-2e/pages/1-introduction",
    "slides": [
      {
        "title": "More than a mood",
        "text": "Subjective well-being can include pleasant emotions, fewer unpleasant emotions and judgments about one's life. These measures are related but not identical.",
        "label": "Well-being",
        "art": "network"
      },
      {
        "title": "Adaptation is imperfect",
        "text": "People may become accustomed to some changes in their circumstances. Adaptation varies and does not make every hardship temporary or harmless.",
        "label": "Adaptation",
        "art": "scales"
      },
      {
        "title": "Social and material conditions",
        "text": "Supportive relationships, health, safety, and adequate resources are associated with well-being. Personal habits matter, but circumstances also matter.",
        "label": "Context",
        "art": "timeline"
      },
      {
        "title": "Choose sustainable practices",
        "text": "Consider one manageable activity that supports relationships, rest or meaning. Track whether it actually helps rather than assuming one practice suits everyone.",
        "label": "Practice",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "Which is a measure of evaluative well-being?",
        "options": [
          "Life satisfaction",
          "Height",
          "Reaction time alone"
        ],
        "correct": 0,
        "why": "Life satisfaction is a person's evaluation of their life."
      },
      {
        "q": "Does adaptation mean every serious hardship becomes harmless?",
        "options": [
          "Yes",
          "No",
          "Only with gratitude"
        ],
        "correct": 1,
        "why": "Adaptation is variable and adversity can have enduring effects."
      }
    ]
  },
  {
    "id": "emotion",
    "category": "Psychology",
    "title": "Reading your emotions",
    "desc": "Learn to notice feelings without assuming they are facts.",
    "art": "network",
    "diagram": [
      "Event",
      "Appraisal",
      "Response"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://openstax.org/books/psychology-2e/pages/1-introduction",
    "slides": [
      {
        "title": "Emotions have components",
        "text": "Emotions involve experience, bodily changes and tendencies to act. A racing heart can occur in different emotional states.",
        "label": "Components",
        "art": "network"
      },
      {
        "title": "Interpretation matters",
        "text": "Two people may interpret the same ambiguous message differently. Their appraisals can affect the emotions they experience.",
        "label": "Appraisal",
        "art": "scales"
      },
      {
        "title": "Name the uncertainty",
        "text": "Labeling a feeling can help you examine it. It does not prove that your interpretation of an event is correct.",
        "label": "Label",
        "art": "timeline"
      },
      {
        "title": "Choose a response",
        "text": "When possible, distinguish a feeling from an impulse. Consider a response aligned with your goal rather than acting automatically.",
        "label": "Response",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "A racing heart always proves someone is afraid. True?",
        "options": [
          "True",
          "False"
        ],
        "correct": 1,
        "why": "Bodily arousal can accompany excitement, exercise and other states."
      },
      {
        "q": "What can help when a message seems hostile but is ambiguous?",
        "options": [
          "Assume intent",
          "Ask for clarification",
          "Treat the feeling as definitive evidence"
        ],
        "correct": 1,
        "why": "Clarification tests an interpretation rather than treating it as fact."
      }
    ]
  },
  {
    "id": "social-proof",
    "category": "Psychology",
    "title": "Why crowds shape our choices",
    "desc": "Understand conformity and social influence.",
    "art": "network",
    "diagram": [
      "Group",
      "Evidence",
      "Choice"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://openstax.org/books/psychology-2e/pages/1-introduction",
    "slides": [
      {
        "title": "Informational influence",
        "text": "When we are uncertain, other people's behavior can provide clues. A crowd may know something we do not, but it can also be mistaken.",
        "label": "Information",
        "art": "network"
      },
      {
        "title": "Normative influence",
        "text": "People sometimes conform because they want acceptance or wish to avoid disapproval, even when they privately disagree.",
        "label": "Acceptance",
        "art": "scales"
      },
      {
        "title": "Independent evidence",
        "text": "Many people repeating one claim do not necessarily provide many independent sources. Check where the claim originated.",
        "label": "Evidence",
        "art": "timeline"
      },
      {
        "title": "Create room to disagree",
        "text": "In a meeting, collect individual judgments before discussion. This can reduce pressure to follow the first confident speaker.",
        "label": "Independence",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "Why might someone publicly agree but privately disagree?",
        "options": [
          "Normative influence",
          "Compound growth",
          "Natural selection"
        ],
        "correct": 0,
        "why": "Social acceptance can motivate conformity."
      },
      {
        "q": "Ten posts repeat the same unverified claim. How many independent sources is that?",
        "options": [
          "Always ten",
          "Possibly only one",
          "Automatically zero"
        ],
        "correct": 1,
        "why": "Repeated information may share one origin."
      }
    ]
  },
  {
    "id": "personality",
    "category": "Psychology",
    "title": "Personality beyond labels",
    "desc": "Explore traits without boxing people into types.",
    "art": "network",
    "diagram": [
      "Traits",
      "Context",
      "Behavior"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://openstax.org/books/psychology-2e/pages/1-introduction",
    "slides": [
      {
        "title": "Traits are dimensions",
        "text": "The Big Five model describes broad dimensions such as openness, conscientiousness, extraversion, agreeableness and neuroticism.",
        "label": "Dimensions",
        "art": "network"
      },
      {
        "title": "A continuum, not a box",
        "text": "Extraversion varies by degree. An individual need not belong to one of two absolute groups.",
        "label": "Continuum",
        "art": "scales"
      },
      {
        "title": "Context changes behavior",
        "text": "A normally reserved person may be talkative with close friends. Traits describe tendencies across situations, not guaranteed actions.",
        "label": "Context",
        "art": "timeline"
      },
      {
        "title": "Use labels carefully",
        "text": "Personality tests differ in reliability and validity. Avoid using a casual quiz as a diagnosis or a definitive basis for judging someone.",
        "label": "Evidence",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "What does a trait describe?",
        "options": [
          "A tendency across situations",
          "Every action a person will take",
          "An unchangeable destiny"
        ],
        "correct": 0,
        "why": "Traits summarize patterns, not certain predictions."
      },
      {
        "q": "Does low extraversion imply poor leadership?",
        "options": [
          "Yes",
          "No"
        ],
        "correct": 1,
        "why": "Leadership depends on numerous skills and circumstances."
      }
    ]
  },
  {
    "id": "attachment",
    "category": "Relationships",
    "title": "How relationships become secure",
    "desc": "Learn the basics of attachment research.",
    "art": "network",
    "diagram": [
      "Safety",
      "Trust",
      "Repair"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://openstax.org/books/psychology-2e/pages/1-introduction",
    "slides": [
      {
        "title": "Attachment and proximity",
        "text": "Attachment theory studies how people seek safety and connection from important others, especially under stress.",
        "label": "Safety",
        "art": "network"
      },
      {
        "title": "Patterns are not identities",
        "text": "Adult attachment research often describes anxiety about rejection and avoidance of closeness as dimensions, rather than fixed lifelong categories.",
        "label": "Dimensions",
        "art": "scales"
      },
      {
        "title": "Relationships differ",
        "text": "A person's expectations may vary between relationships and can change. Childhood experiences are one influence, not the only cause.",
        "label": "Change",
        "art": "timeline"
      },
      {
        "title": "Build dependable interaction",
        "text": "Clear communication, reliability, respect for boundaries and repairing misunderstandings can support trust. Serious relationship distress may need qualified support.",
        "label": "Repair",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "Are adult attachment patterns necessarily permanent?",
        "options": [
          "Yes",
          "No"
        ],
        "correct": 1,
        "why": "Patterns can differ across relationships and change."
      },
      {
        "q": "Which supports trust?",
        "options": [
          "Consistent follow-through",
          "Testing a partner secretly",
          "Ignoring boundaries"
        ],
        "correct": 0,
        "why": "Reliable and respectful behavior supports security."
      }
    ]
  },
  {
    "id": "conflict",
    "category": "Relationships",
    "title": "Disagree without destroying trust",
    "desc": "Separate problems from personal attacks.",
    "art": "network",
    "diagram": [
      "Issue",
      "Need",
      "Repair"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://www.pon.harvard.edu/",
    "slides": [
      {
        "title": "Name the specific issue",
        "text": "Instead of saying someone never cares, describe the event: a shared task was not completed by the agreed time.",
        "label": "Issue",
        "art": "network"
      },
      {
        "title": "Look beneath positions",
        "text": "Two people arguing about a schedule may have different underlying needs, such as rest, predictability or fairness.",
        "label": "Need",
        "art": "scales"
      },
      {
        "title": "Take a useful break",
        "text": "When a conversation becomes overwhelming, a mutually agreed pause with a clear time to return can help reduce escalation.",
        "label": "Pause",
        "art": "timeline"
      },
      {
        "title": "Repair and follow through",
        "text": "Acknowledge a specific mistake, agree on a feasible change, and revisit whether the change worked. Safety takes priority in abusive situations.",
        "label": "Repair",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "Which statement focuses on the problem?",
        "options": [
          "You are always selfish",
          "The agreed task was not finished yesterday",
          "You never do anything right"
        ],
        "correct": 1,
        "why": "Specific observations avoid global attacks on character."
      },
      {
        "q": "What makes a conversation break constructive?",
        "options": [
          "Disappearing indefinitely",
          "Agreeing when to return",
          "Using silence as punishment"
        ],
        "correct": 1,
        "why": "A clear return plan preserves accountability."
      }
    ]
  },
  {
    "id": "empathy",
    "category": "Communication",
    "title": "Empathy and perspective-taking",
    "desc": "Understand a view without claiming to read minds.",
    "art": "network",
    "diagram": [
      "Observe",
      "Ask",
      "Understand"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://openstax.org/books/psychology-2e/pages/1-introduction",
    "slides": [
      {
        "title": "Perspective is not telepathy",
        "text": "Cognitive empathy involves trying to understand another person's perspective. You can make an informed guess without knowing exactly what they feel.",
        "label": "Perspective",
        "art": "network"
      },
      {
        "title": "Check your interpretation",
        "text": "Ask a question rather than assuming a facial expression has one meaning. Culture, context and individual differences influence expression.",
        "label": "Ask",
        "art": "scales"
      },
      {
        "title": "Compassion and boundaries",
        "text": "Caring about someone does not require agreeing with everything or taking responsibility for every problem.",
        "label": "Boundary",
        "art": "timeline"
      },
      {
        "title": "Practice with disagreement",
        "text": "Summarize an opposing argument in terms its supporter would recognize, then explain where your reasoning differs.",
        "label": "Practice",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "What is the best way to test a guess about someone's feelings?",
        "options": [
          "Ask respectfully",
          "Assume facial expressions are universal proof",
          "Ignore their words"
        ],
        "correct": 0,
        "why": "Direct clarification is usually more reliable than mind-reading."
      },
      {
        "q": "Does empathy require agreement?",
        "options": [
          "Yes",
          "No"
        ],
        "correct": 1,
        "why": "Understanding another perspective is different from endorsing it."
      }
    ]
  },
  {
    "id": "negotiation",
    "category": "Business",
    "title": "Negotiation beyond winning",
    "desc": "Find agreements by understanding interests and alternatives.",
    "art": "network",
    "diagram": [
      "Interest",
      "Options",
      "Agreement"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://www.pon.harvard.edu/",
    "slides": [
      {
        "title": "Position versus interest",
        "text": "A position is a stated demand. An interest is the reason behind it. Different positions may conceal compatible needs.",
        "label": "Interest",
        "art": "network"
      },
      {
        "title": "Know your alternative",
        "text": "Before negotiating, consider the best available alternative if no agreement is reached. A weak deal may be worse than walking away.",
        "label": "Alternative",
        "art": "scales"
      },
      {
        "title": "Expand the options",
        "text": "Price is not the only negotiable factor. Timing, reliability, scope or responsibilities can sometimes create a mutually better arrangement.",
        "label": "Options",
        "art": "timeline"
      },
      {
        "title": "Make commitments explicit",
        "text": "Record what each party will do, by when, and how disagreements will be handled. An agreement should be clear and feasible.",
        "label": "Agreement",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "What is an interest in a salary negotiation?",
        "options": [
          "A need for financial stability",
          "The exact initial offer only",
          "A signed contract alone"
        ],
        "correct": 0,
        "why": "An interest explains why a position matters."
      },
      {
        "q": "Why identify an alternative before negotiating?",
        "options": [
          "To assess whether a proposed deal is worthwhile",
          "To guarantee victory",
          "To avoid listening"
        ],
        "correct": 0,
        "why": "Alternatives give a benchmark for judging offers."
      }
    ]
  },
  {
    "id": "leadership",
    "category": "Leadership",
    "title": "Leading through clarity",
    "desc": "Build trust through expectations and feedback.",
    "art": "network",
    "diagram": [
      "Purpose",
      "Roles",
      "Feedback"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://openstax.org/books/organizational-behavior/pages/1-introduction",
    "slides": [
      {
        "title": "Leadership is influence",
        "text": "Leadership involves influencing coordinated action toward a goal. A formal title can provide authority but does not guarantee effective influence.",
        "label": "Purpose",
        "art": "network"
      },
      {
        "title": "Clarity before activity",
        "text": "Teams work better when people understand the goal, their role and how success will be evaluated.",
        "label": "Roles",
        "art": "scales"
      },
      {
        "title": "Feedback is a dialogue",
        "text": "Describe an observed behavior and its effect. Ask for the person's perspective and agree on a specific improvement.",
        "label": "Feedback",
        "art": "timeline"
      },
      {
        "title": "Make it safe to speak",
        "text": "Leaders can invite dissent, admit mistakes and respond constructively to concerns. Accountability and psychological safety can coexist.",
        "label": "Trust",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "Which feedback is most actionable?",
        "options": [
          "Be better",
          "The report missed two required fields; let's review the checklist",
          "You have a bad attitude"
        ],
        "correct": 1,
        "why": "Specific behavior and a next step are actionable."
      },
      {
        "q": "Can a team combine psychological safety with accountability?",
        "options": [
          "Yes",
          "No"
        ],
        "correct": 0,
        "why": "People can speak up while remaining responsible for quality."
      }
    ]
  },
  {
    "id": "teams",
    "category": "Leadership",
    "title": "Why teams work—or fail",
    "desc": "Understand coordination, norms and shared goals.",
    "art": "network",
    "diagram": [
      "Roles",
      "Norms",
      "Results"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://openstax.org/books/organizational-behavior/pages/1-introduction",
    "slides": [
      {
        "title": "Groups need coordination",
        "text": "A collection of skilled individuals does not automatically become an effective team. Interdependent work requires coordination.",
        "label": "Coordination",
        "art": "network"
      },
      {
        "title": "Clarify dependencies",
        "text": "Map who needs information or completed work from whom. Unclear handoffs can delay everyone even when individuals work hard.",
        "label": "Dependencies",
        "art": "scales"
      },
      {
        "title": "Norms guide behavior",
        "text": "Teams develop expectations about meetings, communication and decisions. Make helpful norms explicit instead of assuming agreement.",
        "label": "Norms",
        "art": "timeline"
      },
      {
        "title": "Review the process",
        "text": "After a project, ask what happened, why, and what should change next time. Improve the system rather than assigning blame reflexively.",
        "label": "Review",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "What can improve a delayed handoff?",
        "options": [
          "Clear ownership and delivery expectations",
          "More vague instructions",
          "A longer title"
        ],
        "correct": 0,
        "why": "Explicit coordination reduces uncertainty."
      },
      {
        "q": "What should a useful retrospective focus on?",
        "options": [
          "Only finding someone to blame",
          "Learning what to improve",
          "Hiding mistakes"
        ],
        "correct": 1,
        "why": "Review is intended to improve future performance."
      }
    ]
  },
  {
    "id": "storytelling",
    "category": "Communication",
    "title": "How to tell an idea as a story",
    "desc": "Make explanations memorable without sacrificing accuracy.",
    "art": "network",
    "diagram": [
      "Context",
      "Change",
      "Meaning"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://openstax.org/books/organizational-behavior/pages/1-introduction",
    "slides": [
      {
        "title": "Start with a situation",
        "text": "A story gives information a context: who is involved, what they are trying to accomplish and what is at stake.",
        "label": "Context",
        "art": "network"
      },
      {
        "title": "Show a change",
        "text": "Explain what happened and why it mattered. Cause and effect can give an audience a framework for understanding events.",
        "label": "Change",
        "art": "scales"
      },
      {
        "title": "Evidence still matters",
        "text": "An engaging anecdote is not proof that a general claim is true. Pair representative data with a story where appropriate.",
        "label": "Evidence",
        "art": "timeline"
      },
      {
        "title": "End with a clear point",
        "text": "For a work presentation, connect the outcome to the decision or lesson the audience needs to remember.",
        "label": "Meaning",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "Can one compelling story establish a general statistical claim?",
        "options": [
          "Yes",
          "No"
        ],
        "correct": 1,
        "why": "Anecdotes may illustrate but cannot establish population frequencies."
      },
      {
        "q": "What makes a business story useful?",
        "options": [
          "A clear connection to the decision",
          "Maximum drama regardless of truth",
          "As many characters as possible"
        ],
        "correct": 0,
        "why": "The story should clarify its practical point."
      }
    ]
  },
  {
    "id": "persuasion",
    "category": "Business",
    "title": "The ethics of influence",
    "desc": "Recognize persuasive signals and protect informed choice.",
    "art": "network",
    "diagram": [
      "Claim",
      "Evidence",
      "Choice"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://openstax.org/books/psychology-2e/pages/1-introduction",
    "slides": [
      {
        "title": "Influence is everywhere",
        "text": "Persuasion can involve reasoning, emotion, authority and social cues. These cues are not necessarily deceptive.",
        "label": "Signal",
        "art": "network"
      },
      {
        "title": "Scarcity is not value",
        "text": "A limited offer may feel more desirable because it is scarce. Scarcity alone does not establish quality or usefulness.",
        "label": "Scarcity",
        "art": "scales"
      },
      {
        "title": "Authority has boundaries",
        "text": "A credential is most relevant when the person has expertise in the subject. A famous person is not automatically an expert in everything.",
        "label": "Authority",
        "art": "timeline"
      },
      {
        "title": "Respect informed decisions",
        "text": "Present accurate evidence, disclose incentives, avoid invented urgency and leave room for refusal. Ethical persuasion preserves choice.",
        "label": "Choice",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "A product is available for only one hour. What does that prove about quality?",
        "options": [
          "It is excellent",
          "Nothing by itself",
          "It is dangerous"
        ],
        "correct": 1,
        "why": "Availability is separate from evidence of quality."
      },
      {
        "q": "What supports ethical persuasion?",
        "options": [
          "Hidden fees",
          "Accurate information and freedom to decline",
          "Invented testimonials"
        ],
        "correct": 1,
        "why": "Informed, voluntary choices require honest information."
      }
    ]
  },
  {
    "id": "startup",
    "category": "Business",
    "title": "Testing an idea before building it",
    "desc": "Learn how businesses reduce uncertainty through experiments.",
    "art": "network",
    "diagram": [
      "Hypothesis",
      "Test",
      "Learn"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://www.sba.gov/business-guide",
    "slides": [
      {
        "title": "Start with a problem",
        "text": "Identify a specific group and a problem they experience. A proposed product is a hypothesis about what could help them.",
        "label": "Problem",
        "art": "network"
      },
      {
        "title": "Test the riskiest assumption",
        "text": "If you do not know whether users need a feature, interview them or test a small prototype before investing heavily.",
        "label": "Test",
        "art": "scales"
      },
      {
        "title": "Choose meaningful measures",
        "text": "Measure behavior related to the problem, such as completed tasks or repeat use, instead of relying only on page views.",
        "label": "Measure",
        "art": "timeline"
      },
      {
        "title": "Adapt or stop",
        "text": "Use results to refine the idea, try a different approach or stop. An unsuccessful experiment can still save resources.",
        "label": "Learn",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "What is a useful early test for an unproven feature?",
        "options": [
          "Build every feature first",
          "Show a small prototype to intended users",
          "Assume competitors proved demand"
        ],
        "correct": 1,
        "why": "A prototype can reveal problems before large investments."
      },
      {
        "q": "Why can stopping a failed experiment be valuable?",
        "options": [
          "It avoids further investment in weak assumptions",
          "It proves every idea is bad",
          "It hides evidence"
        ],
        "correct": 0,
        "why": "Learning can prevent unnecessary costs."
      }
    ]
  },
  {
    "id": "strategy",
    "category": "Business",
    "title": "Strategy is a choice",
    "desc": "Understand trade-offs, positioning and feedback.",
    "art": "network",
    "diagram": [
      "Goal",
      "Trade-off",
      "Action"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://openstax.org/books/introduction-business-2e/pages/6-1-the-role-of-management",
    "slides": [
      {
        "title": "A direction is not enough",
        "text": "A strategy identifies how a goal will be pursued, given resources, competitors and constraints. A vague aspiration does not explain how to act.",
        "label": "Direction",
        "art": "network"
      },
      {
        "title": "Choose what not to do",
        "text": "Limited resources mean priorities exclude alternatives. A company that tries to serve every customer may dilute its strengths.",
        "label": "Trade-off",
        "art": "scales"
      },
      {
        "title": "Connect decisions",
        "text": "Product design, pricing, distribution and operations should support a coherent approach rather than working against each other.",
        "label": "Alignment",
        "art": "timeline"
      },
      {
        "title": "Reassess the assumptions",
        "text": "Define signals that would reveal whether the strategy is working. Adjust when evidence or circumstances change.",
        "label": "Feedback",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "Why are trade-offs central to strategy?",
        "options": [
          "Resources are limited",
          "Every strategy must be expensive",
          "Goals are illegal"
        ],
        "correct": 0,
        "why": "Choosing one use of resources means forgoing others."
      },
      {
        "q": "What is a useful strategic review?",
        "options": [
          "Ignore changing conditions",
          "Compare outcomes with the assumptions",
          "Only repeat the slogan"
        ],
        "correct": 1,
        "why": "Review allows strategy to respond to evidence."
      }
    ]
  },
  {
    "id": "deep-attention",
    "category": "Productivity",
    "title": "Making room for demanding work",
    "desc": "Protect concentration without glorifying overwork.",
    "art": "network",
    "diagram": [
      "Plan",
      "Work",
      "Recover"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://openstax.org/books/psychology-2e/pages/1-introduction",
    "slides": [
      {
        "title": "Identify demanding tasks",
        "text": "Some work requires sustained reasoning and cannot be efficiently completed in small fragments between interruptions.",
        "label": "Identify",
        "art": "network"
      },
      {
        "title": "Protect an interval",
        "text": "Choose a manageable block of time, decide the desired outcome and reduce avoidable distractions.",
        "label": "Protect",
        "art": "scales"
      },
      {
        "title": "Plan interruptions",
        "text": "If an unrelated task comes to mind, record it for later. Urgent needs may still require a change of plan.",
        "label": "Capture",
        "art": "timeline"
      },
      {
        "title": "Allow recovery",
        "text": "Breaks, sleep and realistic workloads matter. A productive schedule need not consist entirely of uninterrupted demanding work.",
        "label": "Recover",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "What is a useful aim for a concentrated work block?",
        "options": [
          "A clear task outcome",
          "Never taking a break",
          "Answering every alert immediately"
        ],
        "correct": 0,
        "why": "A clear outcome directs attention."
      },
      {
        "q": "Should an effective schedule ignore rest?",
        "options": [
          "Yes",
          "No"
        ],
        "correct": 1,
        "why": "Recovery and adequate sleep support sustainable performance."
      }
    ]
  },
  {
    "id": "priorities",
    "category": "Productivity",
    "title": "Choosing what matters first",
    "desc": "Turn competing tasks into deliberate priorities.",
    "art": "network",
    "diagram": [
      "Urgency",
      "Value",
      "Capacity"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://openstax.org/books/organizational-behavior/pages/1-introduction",
    "slides": [
      {
        "title": "Urgent is not always important",
        "text": "Urgency describes time pressure. Importance describes consequences or contribution to goals. A task may have one, both or neither.",
        "label": "Distinction",
        "art": "network"
      },
      {
        "title": "Estimate consequences",
        "text": "Ask what happens if a task waits and what value completing it creates. Consider dependencies on other people.",
        "label": "Value",
        "art": "scales"
      },
      {
        "title": "Reserve capacity",
        "text": "Leave room for unplanned work and transitions. A plan that fills every minute can fail after one unexpected demand.",
        "label": "Capacity",
        "art": "timeline"
      },
      {
        "title": "Review and adjust",
        "text": "At the end of the day, compare the plan with reality. Reprioritize unfinished work rather than carrying every old task forward automatically.",
        "label": "Review",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "Which task can be important but not urgent?",
        "options": [
          "Preparing for a future certification exam",
          "An emergency alert requiring immediate action",
          "A meaningless pop-up"
        ],
        "correct": 0,
        "why": "Long-term preparation may matter without immediate pressure."
      },
      {
        "q": "Why leave room in a schedule?",
        "options": [
          "To make a plan less fragile",
          "Because planning is useless",
          "To guarantee no emergencies"
        ],
        "correct": 0,
        "why": "Slack accommodates uncertainty."
      }
    ]
  },
  {
    "id": "checklists",
    "category": "Productivity",
    "title": "Why checklists prevent mistakes",
    "desc": "Design reminders for critical repeatable steps.",
    "art": "network",
    "diagram": [
      "Steps",
      "Check",
      "Confirm"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://openstax.org/books/introduction-business-2e/pages/6-1-the-role-of-management",
    "slides": [
      {
        "title": "Memory is fallible",
        "text": "Even experienced people can omit a familiar step under pressure. A checklist provides an external reminder.",
        "label": "Memory",
        "art": "network"
      },
      {
        "title": "Identify critical actions",
        "text": "Include steps whose omission matters, not every trivial movement. Make the wording specific and observable.",
        "label": "Critical steps",
        "art": "scales"
      },
      {
        "title": "Choose the right moment",
        "text": "A checklist works best when used at a meaningful pause, such as before submitting a document or switching responsibility.",
        "label": "Timing",
        "art": "timeline"
      },
      {
        "title": "Improve with experience",
        "text": "Review missed steps and confusing items. Keep the list short enough to be usable and update it when processes change.",
        "label": "Improve",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "Which checklist item is clearest?",
        "options": [
          "Do the thing",
          "Confirm the required attachment is included",
          "Be careful"
        ],
        "correct": 1,
        "why": "Specific, observable actions can be checked."
      },
      {
        "q": "Why revise a checklist?",
        "options": [
          "Processes and failure patterns can change",
          "It must become longer every time",
          "Checklists replace judgment"
        ],
        "correct": 0,
        "why": "A good checklist adapts to actual work."
      }
    ]
  },
  {
    "id": "procrastination",
    "category": "Personal Development",
    "title": "Why we put things off",
    "desc": "Understand avoidance and build a practical starting point.",
    "art": "network",
    "diagram": [
      "Discomfort",
      "Delay",
      "Start"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://openstax.org/books/psychology-2e/pages/1-introduction",
    "slides": [
      {
        "title": "Delay despite a cost",
        "text": "Procrastination is unnecessary delay despite expecting negative consequences. Delaying for a good reason is not necessarily procrastination.",
        "label": "Delay",
        "art": "network"
      },
      {
        "title": "Short-term relief",
        "text": "Avoiding an unpleasant task can temporarily reduce discomfort. That relief can reinforce avoidance even when the task becomes harder later.",
        "label": "Relief",
        "art": "scales"
      },
      {
        "title": "Shrink the first step",
        "text": "Replace a vague intention like write a report with open the document and outline three headings. A defined start lowers ambiguity.",
        "label": "Start",
        "art": "timeline"
      },
      {
        "title": "Address the cause",
        "text": "Fatigue, unclear expectations and mental health difficulties can contribute. Strategies differ depending on the actual obstacle.",
        "label": "Cause",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "Why can avoidance become self-reinforcing?",
        "options": [
          "It may produce short-term relief",
          "It always solves the problem",
          "It increases time available"
        ],
        "correct": 0,
        "why": "Temporary relief can reinforce the delaying behavior."
      },
      {
        "q": "Which is a concrete first step?",
        "options": [
          "Finish everything perfectly",
          "Write three outline headings",
          "Never feel discomfort"
        ],
        "correct": 1,
        "why": "A small observable action is easier to begin."
      }
    ]
  },
  {
    "id": "learning",
    "category": "Personal Development",
    "title": "Learning that transfers",
    "desc": "Build skills you can use outside the lesson.",
    "art": "network",
    "diagram": [
      "Recall",
      "Practice",
      "Transfer"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://www.learningscientists.org/",
    "slides": [
      {
        "title": "Recognition is not recall",
        "text": "A familiar passage may feel easy to understand when visible. Test whether you can reconstruct the idea without seeing it.",
        "label": "Recall",
        "art": "network"
      },
      {
        "title": "Explain the why",
        "text": "Ask why a procedure works and how it relates to what you already know. Elaborating can build connections.",
        "label": "Explain",
        "art": "scales"
      },
      {
        "title": "Mix related problems",
        "text": "Once foundations are understood, alternate related types of problems to practice identifying which approach is appropriate.",
        "label": "Practice",
        "art": "timeline"
      },
      {
        "title": "Transfer to new situations",
        "text": "Apply a concept to an unfamiliar example, receive feedback and correct errors. This is a stronger test than repeating the original example.",
        "label": "Transfer",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "What tests transfer?",
        "options": [
          "Solving a new problem with the principle",
          "Rereading the original example",
          "Memorizing the page color"
        ],
        "correct": 0,
        "why": "Transfer means applying learning in a new situation."
      },
      {
        "q": "Why recall without notes?",
        "options": [
          "It practices retrieval",
          "It guarantees perfect memory",
          "It makes feedback unnecessary"
        ],
        "correct": 0,
        "why": "Retrieval strengthens and tests access to knowledge."
      }
    ]
  },
  {
    "id": "growth-mindset",
    "category": "Personal Development",
    "title": "Skills can develop",
    "desc": "Use feedback and effective practice without promising unlimited growth.",
    "art": "network",
    "diagram": [
      "Challenge",
      "Practice",
      "Feedback"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://openstax.org/books/psychology-2e/pages/1-introduction",
    "slides": [
      {
        "title": "Abilities are not all fixed",
        "text": "Many skills improve with instruction and practice, although opportunities, biology and circumstances influence outcomes.",
        "label": "Development",
        "art": "network"
      },
      {
        "title": "Effort needs direction",
        "text": "Repeating an ineffective strategy indefinitely is not enough. Useful feedback and better methods can matter more than simply increasing effort.",
        "label": "Strategy",
        "art": "scales"
      },
      {
        "title": "Choose useful challenges",
        "text": "A task slightly beyond current competence can expose a gap to practice. A task far beyond your preparation may need scaffolding.",
        "label": "Challenge",
        "art": "timeline"
      },
      {
        "title": "Separate identity from performance",
        "text": "Treat an error as information about current understanding. This is different from denying real limitations or blaming people for every setback.",
        "label": "Feedback",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "What should you do if a practice strategy repeatedly fails?",
        "options": [
          "Try a different evidence-informed method",
          "Keep repeating it unchanged forever",
          "Conclude nobody can learn"
        ],
        "correct": 0,
        "why": "Effective strategies and feedback support improvement."
      },
      {
        "q": "Does a growth mindset guarantee everyone reaches the same outcome?",
        "options": [
          "Yes",
          "No"
        ],
        "correct": 1,
        "why": "Resources, individual differences and circumstances still matter."
      }
    ]
  },
  {
    "id": "buddhism",
    "category": "Philosophy",
    "title": "An introduction to Buddhist thought",
    "desc": "Explore impermanence, suffering and ethical practice.",
    "art": "network",
    "diagram": [
      "Change",
      "Craving",
      "Practice"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://plato.stanford.edu/entries/buddha/",
    "slides": [
      {
        "title": "A family of traditions",
        "text": "Buddhism developed from teachings associated with Siddhartha Gautama in ancient South Asia. Its schools differ in beliefs and practices.",
        "label": "Tradition",
        "art": "network"
      },
      {
        "title": "Impermanence",
        "text": "Many Buddhist traditions emphasize that conditioned phenomena change. Clinging to something as permanently stable can generate dissatisfaction.",
        "label": "Change",
        "art": "scales"
      },
      {
        "title": "Understanding suffering",
        "text": "The Four Noble Truths describe suffering or unsatisfactoriness, its origins, its cessation and a path toward cessation.",
        "label": "Suffering",
        "art": "timeline"
      },
      {
        "title": "An ethical path",
        "text": "The Noble Eightfold Path includes dimensions of understanding, conduct and mental cultivation. It is not merely a relaxation technique.",
        "label": "Practice",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "Is Buddhism a single uniform tradition?",
        "options": [
          "Yes",
          "No"
        ],
        "correct": 1,
        "why": "Buddhist schools have diverse histories and interpretations."
      },
      {
        "q": "What does impermanence emphasize?",
        "options": [
          "Conditioned things change",
          "Everything stays identical",
          "Ethics is irrelevant"
        ],
        "correct": 0,
        "why": "Change is central to this concept."
      }
    ]
  },
  {
    "id": "existentialism",
    "category": "Philosophy",
    "title": "Meaning in an uncertain world",
    "desc": "An introduction to existential questions about freedom and responsibility.",
    "art": "network",
    "diagram": [
      "Choice",
      "Limits",
      "Meaning"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://plato.stanford.edu/entries/existentialism/",
    "slides": [
      {
        "title": "The question of existence",
        "text": "Existential philosophy explores what it means to live as a particular person facing uncertainty, mortality and choices.",
        "label": "Existence",
        "art": "network"
      },
      {
        "title": "Freedom and limits",
        "text": "Existential thinkers often emphasize responsibility for choices while recognizing that we do not choose all the circumstances of our lives.",
        "label": "Choice",
        "art": "scales"
      },
      {
        "title": "Authenticity",
        "text": "Authenticity can involve examining inherited expectations and taking responsibility for commitments instead of following convention without reflection.",
        "label": "Commitment",
        "art": "timeline"
      },
      {
        "title": "Different thinkers",
        "text": "Kierkegaard, Sartre and de Beauvoir differ substantially in their approaches to religion, freedom and ethics. Existentialism is not a single doctrine.",
        "label": "Plurality",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "Does existential freedom mean controlling every circumstance?",
        "options": [
          "Yes",
          "No"
        ],
        "correct": 1,
        "why": "People make choices within limits they did not choose."
      },
      {
        "q": "What is one existential question?",
        "options": [
          "How should I live given uncertainty?",
          "How many atoms are in a mole?",
          "What is today's exchange rate?"
        ],
        "correct": 0,
        "why": "Existentialism examines lived meaning and responsibility."
      }
    ]
  },
  {
    "id": "ethics",
    "category": "Philosophy",
    "title": "Three ways to reason about right and wrong",
    "desc": "Compare consequences, duties and character.",
    "art": "network",
    "diagram": [
      "Outcome",
      "Duty",
      "Character"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://plato.stanford.edu/entries/ethics-virtue/",
    "slides": [
      {
        "title": "Consequences",
        "text": "Consequentialist theories evaluate actions in terms of their outcomes. Different theories define valuable outcomes differently.",
        "label": "Outcomes",
        "art": "network"
      },
      {
        "title": "Duties",
        "text": "Deontological theories give moral significance to duties, rights or constraints, rather than considering only the best aggregate result.",
        "label": "Duties",
        "art": "scales"
      },
      {
        "title": "Character",
        "text": "Virtue ethics asks what kind of person acts well and how traits such as courage, honesty and practical wisdom develop.",
        "label": "Character",
        "art": "timeline"
      },
      {
        "title": "Use a dilemma",
        "text": "Consider whether lying to protect someone's feelings is justified. Different frameworks may prioritize consequences, truthfulness or compassionate judgment.",
        "label": "Dilemma",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "Which framework emphasizes character and practical wisdom?",
        "options": [
          "Virtue ethics",
          "Monetary policy",
          "Classical conditioning"
        ],
        "correct": 0,
        "why": "Virtue ethics centers on the qualities of an excellent moral agent."
      },
      {
        "q": "Do all moral theories evaluate choices by the same criterion?",
        "options": [
          "Yes",
          "No"
        ],
        "correct": 1,
        "why": "Theories emphasize different dimensions of moral reasoning."
      }
    ]
  },
  {
    "id": "logic",
    "category": "Philosophy",
    "title": "The anatomy of an argument",
    "desc": "Distinguish good reasoning from persuasive wording.",
    "art": "network",
    "diagram": [
      "Premise",
      "Inference",
      "Conclusion"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://plato.stanford.edu/",
    "slides": [
      {
        "title": "Premises and conclusions",
        "text": "An argument offers reasons, called premises, in support of a conclusion. A claim without reasons is not yet a developed argument.",
        "label": "Premise",
        "art": "network"
      },
      {
        "title": "Validity versus truth",
        "text": "A deductive argument is valid if true premises would guarantee the conclusion. Valid form does not guarantee that its premises are actually true.",
        "label": "Validity",
        "art": "scales"
      },
      {
        "title": "Inductive strength",
        "text": "Inductive reasoning uses evidence to make a conclusion more probable, rather than guaranteeing it. Strong evidence is still open to revision.",
        "label": "Evidence",
        "art": "timeline"
      },
      {
        "title": "Identify a hidden assumption",
        "text": "When a conclusion seems to follow, ask what unstated premise is necessary. Evaluate that premise separately.",
        "label": "Assumption",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "Can a valid argument have false premises?",
        "options": [
          "Yes",
          "No"
        ],
        "correct": 0,
        "why": "Validity concerns logical structure, not the actual truth of premises."
      },
      {
        "q": "What makes induction different from deduction?",
        "options": [
          "Induction supports probability rather than guaranteeing a conclusion",
          "Induction has no evidence",
          "Deduction is always factually true"
        ],
        "correct": 0,
        "why": "Inductive support is not deductive necessity."
      }
    ]
  },
  {
    "id": "investing",
    "category": "Finance",
    "title": "Investing from first principles",
    "desc": "Understand assets, uncertainty and long-term goals.",
    "art": "network",
    "diagram": [
      "Assets",
      "Risk",
      "Horizon"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://www.investor.gov/introduction-investing/investing-basics/investment-products",
    "slides": [
      {
        "title": "An asset with uncertainty",
        "text": "Investing involves committing resources in expectation of future benefits. Returns are uncertain and losses are possible.",
        "label": "Assets",
        "art": "network"
      },
      {
        "title": "Stocks and bonds",
        "text": "A stock represents ownership in a company. A bond represents lending to an issuer under agreed terms. Both can carry meaningful risks.",
        "label": "Ownership and debt",
        "art": "scales"
      },
      {
        "title": "Match time to risk",
        "text": "Money needed soon generally calls for different risk considerations than money for a distant goal. Liquidity and volatility matter.",
        "label": "Horizon",
        "art": "timeline"
      },
      {
        "title": "Fees and evidence",
        "text": "Compare costs and understand what an investment owns. Past returns do not guarantee future results, and promises of high returns without risk deserve scrutiny.",
        "label": "Costs",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "What does owning a stock generally represent?",
        "options": [
          "Ownership in a company",
          "A guaranteed interest payment",
          "A checking account"
        ],
        "correct": 0,
        "why": "Stockholders hold an equity interest."
      },
      {
        "q": "Does strong past performance guarantee future returns?",
        "options": [
          "Yes",
          "No"
        ],
        "correct": 1,
        "why": "Investment results remain uncertain."
      }
    ]
  },
  {
    "id": "diversification",
    "category": "Finance",
    "title": "Do not put every egg in one basket",
    "desc": "Explore the difference between concentrated and diversified risk.",
    "art": "network",
    "diagram": [
      "Assets",
      "Correlation",
      "Risk"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://www.investor.gov/introduction-investing/getting-started/asset-allocation",
    "slides": [
      {
        "title": "Concentration risk",
        "text": "Holding one company's stock exposes an investor to that company's particular fortunes. A broad portfolio can reduce dependence on one issuer.",
        "label": "Concentration",
        "art": "network"
      },
      {
        "title": "Assets move differently",
        "text": "Diversification benefits depend partly on how assets move relative to each other. Owning many highly similar investments may offer less diversification than expected.",
        "label": "Correlation",
        "art": "scales"
      },
      {
        "title": "Risk never disappears",
        "text": "Diversification can reduce certain risks but cannot guarantee profit or eliminate broad market downturns.",
        "label": "Limits",
        "art": "timeline"
      },
      {
        "title": "Rebalancing",
        "text": "Market changes can move a portfolio away from its chosen asset mix. Rebalancing restores that mix, considering transaction costs and taxes.",
        "label": "Rebalance",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "Does owning ten funds that hold the same stocks guarantee diversification?",
        "options": [
          "Yes",
          "No"
        ],
        "correct": 1,
        "why": "Underlying exposures can overlap."
      },
      {
        "q": "Can a diversified portfolio lose money?",
        "options": [
          "Yes",
          "No"
        ],
        "correct": 0,
        "why": "Diversification does not eliminate market risk."
      }
    ]
  },
  {
    "id": "budget",
    "category": "Finance",
    "title": "Where your money goes",
    "desc": "Create a simple model of cash flow and financial flexibility.",
    "art": "network",
    "diagram": [
      "Income",
      "Expenses",
      "Savings"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://www.consumerfinance.gov/consumer-tools/",
    "slides": [
      {
        "title": "Track cash flow",
        "text": "Cash flow is money entering and leaving over a period. It is different from net worth, which is assets minus liabilities at a point in time.",
        "label": "Cash flow",
        "art": "network"
      },
      {
        "title": "Distinguish expense types",
        "text": "Some expenses are regular and predictable; others vary or arrive irregularly. Plan for both rather than treating annual bills as surprises.",
        "label": "Expenses",
        "art": "scales"
      },
      {
        "title": "Create a buffer",
        "text": "An accessible emergency fund can reduce reliance on costly borrowing after a financial shock. The appropriate size depends on circumstances.",
        "label": "Buffer",
        "art": "timeline"
      },
      {
        "title": "Review the actual numbers",
        "text": "Compare expected and actual spending, then adjust a realistic plan. A budget is a decision aid, not a moral judgment.",
        "label": "Review",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "If monthly income is $2,500 and spending is $2,200, what is the surplus?",
        "options": [
          "$300",
          "$700",
          "$4,700"
        ],
        "correct": 0,
        "why": "Income minus spending is $300."
      },
      {
        "q": "Why account for irregular bills?",
        "options": [
          "They still affect cash flow",
          "They never need paying",
          "They are automatically investments"
        ],
        "correct": 0,
        "why": "Future expenses can be planned for even when infrequent."
      }
    ]
  },
  {
    "id": "stockmarket",
    "category": "Finance",
    "title": "What happens on a stock exchange",
    "desc": "Understand prices, orders and indexes.",
    "art": "network",
    "diagram": [
      "Company",
      "Exchange",
      "Investor"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://www.investor.gov/introduction-investing/investing-basics/investment-products",
    "slides": [
      {
        "title": "Primary and secondary markets",
        "text": "Companies can raise money by issuing shares. Most everyday exchange trading occurs between investors who buy and sell existing shares.",
        "label": "Markets",
        "art": "network"
      },
      {
        "title": "Bid and ask",
        "text": "The bid is a price a buyer offers; the ask is a price a seller requests. Their difference is the spread.",
        "label": "Quotes",
        "art": "scales"
      },
      {
        "title": "Market and limit orders",
        "text": "A market order prioritizes execution at available prices. A limit order sets a price condition but may never execute.",
        "label": "Orders",
        "art": "timeline"
      },
      {
        "title": "Indexes are measures",
        "text": "A stock index tracks a defined basket according to rules. It is not itself a stock, though funds can attempt to track it.",
        "label": "Index",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "What does a buy limit order control?",
        "options": [
          "The maximum acceptable purchase price",
          "A guaranteed fill",
          "Future investment profit"
        ],
        "correct": 0,
        "why": "A limit sets a price condition, not an execution guarantee."
      },
      {
        "q": "What is a stock index?",
        "options": [
          "A measure of a defined basket of securities",
          "A single company's guaranteed dividend",
          "A government savings account"
        ],
        "correct": 0,
        "why": "An index summarizes selected securities using a defined methodology."
      }
    ]
  },
  {
    "id": "central-bank",
    "category": "Economics",
    "title": "How central banks influence inflation",
    "desc": "Explore interest rates, borrowing and demand.",
    "art": "network",
    "diagram": [
      "Rates",
      "Credit",
      "Demand"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://openstax.org/books/principles-economics-3e/pages/28-introduction-to-monetary-policy-and-bank-regulation",
    "slides": [
      {
        "title": "Policy and prices",
        "text": "Central banks often aim for price stability and sometimes other objectives such as employment. They influence financial conditions rather than setting every retail price.",
        "label": "Mandate",
        "art": "network"
      },
      {
        "title": "Interest-rate channel",
        "text": "Higher policy rates can make borrowing more expensive, reduce some spending and affect asset values. Lower rates can work in the opposite direction.",
        "label": "Rates",
        "art": "scales"
      },
      {
        "title": "Transmission is delayed",
        "text": "Changes spread through banks, financial markets, investment and spending over time. Effects vary with the economic environment.",
        "label": "Transmission",
        "art": "timeline"
      },
      {
        "title": "Supply shocks complicate policy",
        "text": "A disruption in energy or food supply can raise prices while weakening growth. Central banks face trade-offs when shocks affect both prices and output.",
        "label": "Trade-off",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "How might higher interest rates reduce demand?",
        "options": [
          "By making some borrowing more expensive",
          "By directly fixing all shop prices",
          "By increasing everyone's salary"
        ],
        "correct": 0,
        "why": "Borrowing and spending can respond to financial conditions."
      },
      {
        "q": "Do policy changes affect all prices immediately?",
        "options": [
          "Yes",
          "No"
        ],
        "correct": 1,
        "why": "Monetary transmission takes time and varies."
      }
    ]
  },
  {
    "id": "public-debt",
    "category": "Economics",
    "title": "Government budgets and public debt",
    "desc": "Separate annual deficits from accumulated obligations.",
    "art": "network",
    "diagram": [
      "Revenue",
      "Spending",
      "Debt"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://openstax.org/books/principles-economics-3e/pages/30-introduction-to-government-budgets-and-fiscal-policy",
    "slides": [
      {
        "title": "The annual balance",
        "text": "A government deficit occurs when spending exceeds revenue during a period. A surplus is the reverse.",
        "label": "Balance",
        "art": "network"
      },
      {
        "title": "Debt is a stock",
        "text": "Government debt reflects accumulated borrowing and other adjustments over time. It is distinct from a single year's deficit.",
        "label": "Debt",
        "art": "scales"
      },
      {
        "title": "Compare with the economy",
        "text": "Debt-to-GDP and interest costs can help assess sustainability. The debt level alone does not capture borrowing costs, economic capacity or currency arrangements.",
        "label": "Capacity",
        "art": "timeline"
      },
      {
        "title": "Policy involves trade-offs",
        "text": "Taxes and spending affect public services, distribution and economic activity. Different economic conditions can justify different policy choices.",
        "label": "Policy",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "What is a deficit?",
        "options": [
          "Spending exceeds revenue in a period",
          "The entire accumulated debt",
          "Every tax payment"
        ],
        "correct": 0,
        "why": "The deficit is a flow over a period."
      },
      {
        "q": "Which measure gives context to the size of public debt?",
        "options": [
          "Debt relative to GDP",
          "The number of letters in the country's name",
          "The weather"
        ],
        "correct": 0,
        "why": "Relative measures help compare obligations with economic capacity."
      }
    ]
  },
  {
    "id": "inequality",
    "category": "Social Issues",
    "title": "Understanding income and wealth inequality",
    "desc": "Learn how different measures tell different stories.",
    "art": "network",
    "diagram": [
      "Income",
      "Wealth",
      "Opportunity"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://openstax.org/books/principles-economics-3e/pages/15-5-government-policies-to-reduce-income-inequality",
    "slides": [
      {
        "title": "Income and wealth differ",
        "text": "Income is a flow of earnings or receipts. Wealth is the value of assets minus debts. A high income does not automatically imply high net worth.",
        "label": "Measure",
        "art": "network"
      },
      {
        "title": "Distribution matters",
        "text": "An average can conceal differences across households. Medians, percentiles and distribution measures provide additional information.",
        "label": "Distribution",
        "art": "scales"
      },
      {
        "title": "Multiple influences",
        "text": "Education, inheritance, labor markets, public policy, discrimination and historical conditions can influence economic outcomes. Their relative roles differ by context.",
        "label": "Causes",
        "art": "timeline"
      },
      {
        "title": "Compare policy objectives",
        "text": "Policies may prioritize poverty reduction, opportunity, efficiency or redistribution. Evaluate evidence and trade-offs rather than assuming one measure answers every question.",
        "label": "Policy",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "Which is a measure of wealth?",
        "options": [
          "Assets minus debts",
          "Monthly wages alone",
          "Hours worked"
        ],
        "correct": 0,
        "why": "Net wealth is a balance-sheet measure."
      },
      {
        "q": "Why compare the median and mean?",
        "options": [
          "They can reveal differences in the distribution",
          "They are always equal",
          "They measure weather"
        ],
        "correct": 0,
        "why": "A skewed distribution can make the mean and median diverge."
      }
    ]
  },
  {
    "id": "rome",
    "category": "History",
    "title": "Rome: from republic to empire",
    "desc": "Understand political change in the ancient Mediterranean.",
    "art": "network",
    "diagram": [
      "Republic",
      "Conflict",
      "Empire"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://www.britannica.com/place/ancient-Rome",
    "slides": [
      {
        "title": "A republic with limits",
        "text": "Roman republican institutions included elected magistrates, assemblies and a Senate. Political participation and power were unequal.",
        "label": "Republic",
        "art": "network"
      },
      {
        "title": "Expansion and conflict",
        "text": "Conquest expanded Roman wealth and territory while generating social tensions, military competition and conflicts over political authority.",
        "label": "Expansion",
        "art": "scales"
      },
      {
        "title": "The imperial transition",
        "text": "Civil wars weakened republican institutions. Augustus established a new political order that preserved republican forms while concentrating authority.",
        "label": "Empire",
        "art": "timeline"
      },
      {
        "title": "Long transformations",
        "text": "The western imperial government fragmented in the fifth century CE, while the eastern Roman Empire continued for centuries. Roman institutions and culture changed rather than simply disappearing.",
        "label": "Legacy",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "Who established the political order known as the Principate?",
        "options": [
          "Augustus",
          "Plato",
          "Charlemagne"
        ],
        "correct": 0,
        "why": "Augustus consolidated authority after civil conflict."
      },
      {
        "q": "Did the eastern Roman Empire end when western imperial rule fragmented?",
        "options": [
          "Yes",
          "No"
        ],
        "correct": 1,
        "why": "Eastern Roman government continued for centuries."
      }
    ]
  },
  {
    "id": "human-origins",
    "category": "History",
    "title": "How humans became a global species",
    "desc": "Explore evidence from fossils, tools and migration.",
    "art": "network",
    "diagram": [
      "Origins",
      "Migration",
      "Culture"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://humanorigins.si.edu/",
    "slides": [
      {
        "title": "Shared evolutionary ancestry",
        "text": "Homo sapiens evolved in Africa. Fossils, genetics and archaeology provide complementary evidence about our origins.",
        "label": "Origins",
        "art": "network"
      },
      {
        "title": "Migration in waves",
        "text": "Human populations dispersed across regions over long periods, interacting with environments and sometimes with other human groups.",
        "label": "Migration",
        "art": "scales"
      },
      {
        "title": "Culture accumulates",
        "text": "Social learning enables techniques and knowledge to be passed across generations. Language and material evidence help researchers investigate cultural change.",
        "label": "Culture",
        "art": "timeline"
      },
      {
        "title": "No single path to civilization",
        "text": "Societies developed diverse forms of subsistence, settlement and governance. History is not a single inevitable sequence from simple to advanced.",
        "label": "Diversity",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "Where did Homo sapiens evolve?",
        "options": [
          "Africa",
          "Antarctica",
          "North America"
        ],
        "correct": 0,
        "why": "Evidence supports African origins of our species."
      },
      {
        "q": "What helps investigate human history?",
        "options": [
          "Fossils, archaeology and genetics",
          "A single myth as definitive evidence",
          "Only modern borders"
        ],
        "correct": 0,
        "why": "Different evidence types complement each other."
      }
    ]
  },
  {
    "id": "climate",
    "category": "Science",
    "title": "The physics of a warming planet",
    "desc": "Understand greenhouse gases, feedback and climate evidence.",
    "art": "network",
    "diagram": [
      "Energy",
      "Atmosphere",
      "Temperature"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://science.nasa.gov/climate-change/",
    "slides": [
      {
        "title": "Earth's energy balance",
        "text": "Sunlight warms Earth's surface, which emits infrared radiation. Temperature responds to the balance between absorbed and outgoing energy.",
        "label": "Energy",
        "art": "network"
      },
      {
        "title": "Greenhouse gases",
        "text": "Gases including carbon dioxide and methane absorb and emit infrared radiation. Increasing their concentration alters the energy balance.",
        "label": "Atmosphere",
        "art": "scales"
      },
      {
        "title": "Evidence across systems",
        "text": "Temperature records, ocean heat, ice observations and atmospheric measurements help scientists assess changing climate conditions.",
        "label": "Evidence",
        "art": "timeline"
      },
      {
        "title": "Feedback and responses",
        "text": "Warming can trigger feedbacks such as changes in ice reflectivity. Mitigation addresses emissions; adaptation addresses impacts and vulnerability.",
        "label": "Feedback",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "What does an increase in greenhouse gases affect?",
        "options": [
          "The planet's outgoing infrared energy balance",
          "The number of hours in a day",
          "The Moon's mass"
        ],
        "correct": 0,
        "why": "Greenhouse gases interact with infrared radiation."
      },
      {
        "q": "What is climate adaptation?",
        "options": [
          "Reducing vulnerability to impacts",
          "Pretending climate cannot change",
          "Only measuring carbon emissions"
        ],
        "correct": 0,
        "why": "Adaptation prepares for actual or expected impacts."
      }
    ]
  },
  {
    "id": "vaccines",
    "category": "Health",
    "title": "How vaccines prepare the immune system",
    "desc": "Understand immune memory and mRNA technology.",
    "art": "network",
    "diagram": [
      "Antigen",
      "Response",
      "Memory"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://www.cdc.gov/vaccines/",
    "slides": [
      {
        "title": "Recognizing a target",
        "text": "The adaptive immune system learns to recognize specific molecular targets. Antibodies and immune cells can contribute to protection.",
        "label": "Antigen",
        "art": "network"
      },
      {
        "title": "Practice before infection",
        "text": "Vaccines expose the immune system to an antigen or instructions for making one, using different technologies. This can prepare responses before encountering the pathogen.",
        "label": "Preparation",
        "art": "scales"
      },
      {
        "title": "mRNA as instructions",
        "text": "Certain vaccines deliver temporary messenger RNA instructions that cells use to make an antigen. This is distinct from changing a person's DNA.",
        "label": "mRNA",
        "art": "timeline"
      },
      {
        "title": "Protection varies",
        "text": "Vaccine effectiveness differs by disease, product, outcome and time. Safety and effectiveness are monitored, and recommendations depend on individual circumstances.",
        "label": "Evidence",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "What is the purpose of immune memory?",
        "options": [
          "To help respond to a previously recognized target",
          "To remember a password",
          "To eliminate every possible infection"
        ],
        "correct": 0,
        "why": "Adaptive immune memory supports later responses."
      },
      {
        "q": "Do mRNA vaccines need to alter a person's DNA to work?",
        "options": [
          "Yes",
          "No"
        ],
        "correct": 1,
        "why": "Their instructions are used to produce an antigen without changing DNA."
      }
    ]
  },
  {
    "id": "biodiversity",
    "category": "Nature",
    "title": "Why biodiversity matters",
    "desc": "Explore genetic, species and ecosystem diversity.",
    "art": "network",
    "diagram": [
      "Genes",
      "Species",
      "Ecosystems"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://openstax.org/books/biology-2e/pages/1-introduction",
    "slides": [
      {
        "title": "Three levels of diversity",
        "text": "Biodiversity includes variation within species, the variety of species, and the variety of ecosystems.",
        "label": "Levels",
        "art": "network"
      },
      {
        "title": "Connections create functions",
        "text": "Pollination, nutrient cycling and food-web relationships depend on organisms interacting in their environment.",
        "label": "Function",
        "art": "scales"
      },
      {
        "title": "Pressures on diversity",
        "text": "Habitat loss, invasive species, overexploitation, pollution and climate change can threaten biodiversity. Effects vary by place and species.",
        "label": "Pressures",
        "art": "timeline"
      },
      {
        "title": "Conservation is contextual",
        "text": "Protecting habitat, reducing pressures and restoring ecological processes can help, but interventions must be tailored to local conditions.",
        "label": "Conservation",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "Is genetic variation part of biodiversity?",
        "options": [
          "Yes",
          "No"
        ],
        "correct": 0,
        "why": "Diversity exists within species as well as among them."
      },
      {
        "q": "Which is an example of an ecosystem function?",
        "options": [
          "Pollination",
          "A stock dividend",
          "A browser update"
        ],
        "correct": 0,
        "why": "Pollination links organisms and supports reproduction."
      }
    ]
  },
  {
    "id": "mindfulness",
    "category": "Health",
    "title": "Attention to the present moment",
    "desc": "Understand mindfulness practices and their limitations.",
    "art": "network",
    "diagram": [
      "Notice",
      "Return",
      "Reflect"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://www.nccih.nih.gov/health",
    "slides": [
      {
        "title": "A way of attending",
        "text": "Mindfulness practices commonly involve attending to present experience with less automatic judgment. Practices differ across traditions and clinical programs.",
        "label": "Notice",
        "art": "network"
      },
      {
        "title": "Wandering is normal",
        "text": "During a short attention exercise, thoughts may wander. Returning attention to an anchor is part of the practice, not a failure.",
        "label": "Return",
        "art": "scales"
      },
      {
        "title": "Evidence has boundaries",
        "text": "Some structured mindfulness programs may help certain people with stress or symptoms. Effects vary and research does not establish a universal cure.",
        "label": "Evidence",
        "art": "timeline"
      },
      {
        "title": "Choose what fits",
        "text": "Try a brief comfortable practice if interested; stop if it causes distress. Mindfulness is not a substitute for needed medical or mental-health care.",
        "label": "Choice",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "When attention wanders during a practice, what can you do?",
        "options": [
          "Gently return to the chosen anchor",
          "Assume the practice failed",
          "Force every thought away"
        ],
        "correct": 0,
        "why": "Returning attention is part of the exercise."
      },
      {
        "q": "Is mindfulness a universal cure for mental illness?",
        "options": [
          "Yes",
          "No"
        ],
        "correct": 1,
        "why": "Benefits and suitability vary; appropriate clinical care may be needed."
      }
    ]
  },
  {
    "id": "nutrition",
    "category": "Health",
    "title": "Nutrition without the noise",
    "desc": "Learn to evaluate basic dietary claims.",
    "art": "network",
    "diagram": [
      "Energy",
      "Nutrients",
      "Pattern"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://www.myplate.gov/",
    "slides": [
      {
        "title": "Food supplies energy and nutrients",
        "text": "Carbohydrates, fats and proteins contribute energy and other functions. Vitamins and minerals support many physiological processes.",
        "label": "Nutrients",
        "art": "network"
      },
      {
        "title": "Patterns matter",
        "text": "Overall dietary patterns and adequate nutrition matter more than assuming one isolated food determines health.",
        "label": "Pattern",
        "art": "scales"
      },
      {
        "title": "Labels need context",
        "text": "Compare serving sizes, nutrient amounts and ingredients. A marketing phrase on the package may not describe the whole nutritional profile.",
        "label": "Labels",
        "art": "timeline"
      },
      {
        "title": "Individual needs differ",
        "text": "Age, activity, medical conditions, culture and access affect dietary needs. Seek appropriate professional advice for medical dietary restrictions.",
        "label": "Context",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "Does one food determine an entire diet's quality?",
        "options": [
          "Yes",
          "No"
        ],
        "correct": 1,
        "why": "Overall patterns and individual needs are important."
      },
      {
        "q": "What should you check when comparing nutrient labels?",
        "options": [
          "Serving sizes",
          "Package color only",
          "Brand popularity only"
        ],
        "correct": 0,
        "why": "Different serving sizes can distort comparisons."
      }
    ]
  },
  {
    "id": "blockchain",
    "category": "Technology",
    "title": "What a blockchain actually records",
    "desc": "Understand distributed ledgers and tokens.",
    "art": "network",
    "diagram": [
      "Record",
      "Validation",
      "Ledger"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://www.nist.gov/blockchain",
    "slides": [
      {
        "title": "Shared transaction history",
        "text": "A blockchain is a kind of distributed ledger where records are grouped and linked cryptographically. Implementations differ.",
        "label": "Ledger",
        "art": "network"
      },
      {
        "title": "Agreement among participants",
        "text": "Consensus mechanisms help participants agree on valid additions. Different systems use different rules and trust assumptions.",
        "label": "Consensus",
        "art": "scales"
      },
      {
        "title": "Tokens and ownership",
        "text": "Tokens can represent units or digital identifiers on a ledger. A token does not automatically establish legal ownership of an associated image or real-world asset.",
        "label": "Tokens",
        "art": "timeline"
      },
      {
        "title": "Understand the trade-offs",
        "text": "Distributed systems can face scalability, energy, security and governance challenges. A conventional database may be more suitable for many tasks.",
        "label": "Trade-offs",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "Does a token always transfer copyright to its associated image?",
        "options": [
          "Yes",
          "No"
        ],
        "correct": 1,
        "why": "Legal rights depend on applicable agreements and law."
      },
      {
        "q": "Is blockchain required for every database?",
        "options": [
          "Yes",
          "No"
        ],
        "correct": 1,
        "why": "Many tasks are better served by conventional databases."
      }
    ]
  },
  {
    "id": "anxiety",
    "category": "Psychology",
    "title": "Understanding the anxiety response",
    "desc": "Learn how threat anticipation can affect behavior.",
    "art": "network",
    "diagram": [
      "Threat",
      "Body",
      "Response"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://www.nimh.nih.gov/health/topics/anxiety-disorders",
    "slides": [
      {
        "title": "Anticipating uncertainty",
        "text": "Anxiety can involve anticipating danger or uncertainty, with cognitive, physical and behavioral responses.",
        "label": "Anticipation",
        "art": "network"
      },
      {
        "title": "A protective system",
        "text": "Some anxiety is adaptive: it can prompt preparation. Persistent or disproportionate anxiety may interfere with daily life.",
        "label": "Protection",
        "art": "scales"
      },
      {
        "title": "Avoidance and learning",
        "text": "Avoiding a feared situation can provide immediate relief and sometimes maintain fear over time. Clinical treatment should be tailored by qualified professionals.",
        "label": "Avoidance",
        "art": "timeline"
      },
      {
        "title": "When to seek support",
        "text": "If anxiety is persistent, distressing or disrupts work, relationships or sleep, professional evaluation can help identify appropriate treatment.",
        "label": "Support",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "Is every experience of anxiety a disorder?",
        "options": [
          "Yes",
          "No"
        ],
        "correct": 1,
        "why": "Anxiety is also a normal response; diagnosis depends on symptoms and impact."
      },
      {
        "q": "What is appropriate if anxiety seriously disrupts daily life?",
        "options": [
          "Seek qualified professional support",
          "Assume it can never improve",
          "Ignore all symptoms"
        ],
        "correct": 0,
        "why": "Assessment can identify effective, individualized support."
      }
    ]
  },
  {
    "id": "gerrymander",
    "category": "Government",
    "title": "How electoral districts shape representation",
    "desc": "Understand district boundaries, packing and cracking.",
    "art": "network",
    "diagram": [
      "Voters",
      "Districts",
      "Seats"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://constitution.congress.gov/",
    "slides": [
      {
        "title": "District-based elections",
        "text": "In many elections, voters are grouped into geographic districts that each elect a representative. Boundaries affect which voters are grouped together.",
        "label": "Districts",
        "art": "network"
      },
      {
        "title": "Packing and cracking",
        "text": "Packing concentrates a group in fewer districts. Cracking splits a group among districts, potentially reducing its influence. These are descriptive concepts, not automatic proof of illegality.",
        "label": "Mechanisms",
        "art": "scales"
      },
      {
        "title": "Other constraints",
        "text": "Population equality, geography, legal protections and community interests can affect district design. Rules vary across jurisdictions.",
        "label": "Constraints",
        "art": "timeline"
      },
      {
        "title": "Evaluate with care",
        "text": "Compare alternative maps, election patterns and legal requirements. A single visual shape or election outcome cannot establish all relevant facts.",
        "label": "Evaluation",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "What does packing describe?",
        "options": [
          "Concentrating voters of a group in a smaller number of districts",
          "Counting all votes twice",
          "Holding elections earlier"
        ],
        "correct": 0,
        "why": "Packing concentrates a voting group."
      },
      {
        "q": "Does an unusual district shape alone prove unlawful intent?",
        "options": [
          "Yes",
          "No"
        ],
        "correct": 1,
        "why": "Legal and factual evaluation requires more evidence."
      }
    ]
  }
]);
// Cross-disciplinary catalog expansion: independently authored educational modules.
courses.push(...[
  {
    "id": "electricity",
    "category": "Physics",
    "title": "Electricity: the invisible flow",
    "desc": "Understand voltage, current and resistance.",
    "art": "network",
    "diagram": [
      "Charge",
      "Voltage",
      "Current"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://openstax.org/books/college-physics-2e/pages/1-introduction-to-science-and-the-realm-of-physics-physical-quantities-and-units",
    "slides": [
      {
        "title": "Charge and motion",
        "text": "Electric current measures the rate at which charge passes a point. One ampere is one coulomb per second.",
        "label": "Charge",
        "art": "network"
      },
      {
        "title": "The driving difference",
        "text": "Voltage is energy transferred per unit charge. A battery establishes a potential difference across a circuit.",
        "label": "Voltage",
        "art": "scales"
      },
      {
        "title": "Resistance",
        "text": "For an ohmic resistor at constant temperature, current equals voltage divided by resistance. At 6 V across 3 ohms, current is 2 A.",
        "label": "Resistance",
        "art": "timeline"
      },
      {
        "title": "Energy in a circuit",
        "text": "Electrical power is voltage multiplied by current. The example resistor receives 12 watts. Real components have ratings that must be respected.",
        "label": "Power",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "What current flows through a 4-ohm ideal resistor at 12 V?",
        "options": [
          "3 A",
          "48 A",
          "0.33 A"
        ],
        "correct": 0,
        "why": "Ohm's law gives 12 ÷ 4 = 3 amperes."
      },
      {
        "q": "What does a watt measure?",
        "options": [
          "Charge",
          "Power",
          "Resistance"
        ],
        "correct": 1,
        "why": "Power is the rate of energy transfer."
      }
    ]
  },
  {
    "id": "motion",
    "category": "Physics",
    "title": "Why things keep moving",
    "desc": "Discover inertia, forces and acceleration.",
    "art": "network",
    "diagram": [
      "Inertia",
      "Force",
      "Acceleration"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://openstax.org/books/college-physics-2e/pages/1-introduction-to-science-and-the-realm-of-physics-physical-quantities-and-units",
    "slides": [
      {
        "title": "Inertia",
        "text": "Without a net external force, an object keeps a constant velocity. This includes staying at rest.",
        "label": "Inertia",
        "art": "network"
      },
      {
        "title": "Net force",
        "text": "For constant mass, acceleration equals net force divided by mass. Forces in opposite directions may cancel.",
        "label": "Net force",
        "art": "scales"
      },
      {
        "title": "A real example",
        "text": "A 2 kg cart pushed with a net force of 6 N accelerates at 3 m/s². Friction would reduce the net force if it opposed the push.",
        "label": "Acceleration",
        "art": "timeline"
      },
      {
        "title": "Action and reaction",
        "text": "When a person pushes a wall, the wall pushes back with equal magnitude and opposite direction. These forces act on different bodies.",
        "label": "Interaction",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "What is the acceleration of a 5 kg object under a net force of 10 N?",
        "options": [
          "2 m/s²",
          "50 m/s²",
          "0.5 m/s²"
        ],
        "correct": 0,
        "why": "Acceleration = net force ÷ mass."
      },
      {
        "q": "Why do action-reaction forces not cancel on one object?",
        "options": [
          "They act on different objects",
          "One is always weaker",
          "They act at different times"
        ],
        "correct": 0,
        "why": "The two forces belong to different free-body diagrams."
      }
    ]
  },
  {
    "id": "heat",
    "category": "Physics",
    "title": "How heat travels",
    "desc": "Distinguish temperature, heat and insulation.",
    "art": "network",
    "diagram": [
      "Conduction",
      "Convection",
      "Radiation"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://openstax.org/books/college-physics-2e/pages/1-introduction-to-science-and-the-realm-of-physics-physical-quantities-and-units",
    "slides": [
      {
        "title": "Energy in motion",
        "text": "Temperature relates to the thermal state of matter. Heat is energy transferred because of a temperature difference.",
        "label": "Temperature",
        "art": "network"
      },
      {
        "title": "Conduction",
        "text": "A metal spoon in hot soup warms as energy passes through the material. Metals often conduct thermal energy well.",
        "label": "Conduction",
        "art": "scales"
      },
      {
        "title": "Convection",
        "text": "Moving fluids carry thermal energy. Warmer, less dense fluid may rise while cooler fluid sinks under gravity.",
        "label": "Convection",
        "art": "timeline"
      },
      {
        "title": "Radiation",
        "text": "Electromagnetic radiation transfers energy even through a vacuum. Sunlight warms Earth without air connecting the two.",
        "label": "Radiation",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "Which mechanism carries energy from the Sun through space?",
        "options": [
          "Radiation",
          "Conduction",
          "Convection"
        ],
        "correct": 0,
        "why": "Electromagnetic radiation does not require a material medium."
      },
      {
        "q": "What does insulation generally do?",
        "options": [
          "Slows heat transfer",
          "Creates energy",
          "Eliminates all temperature differences"
        ],
        "correct": 0,
        "why": "Insulation reduces the rate of thermal exchange."
      }
    ]
  },
  {
    "id": "waves",
    "category": "Physics",
    "title": "From sound to light",
    "desc": "Explore frequency, wavelength and wave speed.",
    "art": "network",
    "diagram": [
      "Frequency",
      "Wavelength",
      "Speed"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://openstax.org/books/college-physics-2e/pages/1-introduction-to-science-and-the-realm-of-physics-physical-quantities-and-units",
    "slides": [
      {
        "title": "A moving disturbance",
        "text": "A wave carries energy through a medium or, for electromagnetic waves, through space. Matter need not travel with the wave.",
        "label": "Wave",
        "art": "network"
      },
      {
        "title": "Frequency and wavelength",
        "text": "Frequency counts cycles per second; wavelength is the distance between equivalent points in consecutive cycles.",
        "label": "Frequency",
        "art": "scales"
      },
      {
        "title": "The relationship",
        "text": "Wave speed equals frequency multiplied by wavelength. At fixed speed, higher frequency corresponds to shorter wavelength.",
        "label": "Wavelength",
        "art": "timeline"
      },
      {
        "title": "Sound and light differ",
        "text": "Sound is a mechanical wave and requires a medium. Light is electromagnetic radiation and can travel through a vacuum.",
        "label": "Medium",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "At fixed speed, doubling frequency does what to wavelength?",
        "options": [
          "Halves it",
          "Doubles it",
          "Leaves it unchanged"
        ],
        "correct": 0,
        "why": "v = fλ, so wavelength is inversely related to frequency."
      },
      {
        "q": "Which can travel through an ideal vacuum?",
        "options": [
          "Sound",
          "Light",
          "Both"
        ],
        "correct": 1,
        "why": "Light does not need a material medium."
      }
    ]
  },
  {
    "id": "atoms",
    "category": "Chemistry",
    "title": "The architecture of atoms",
    "desc": "Discover what elements and isotopes are.",
    "art": "network",
    "diagram": [
      "Protons",
      "Electrons",
      "Neutrons"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://openstax.org/books/chemistry-2e/pages/1-introduction",
    "slides": [
      {
        "title": "The nucleus",
        "text": "Atoms contain a nucleus with protons and usually neutrons, surrounded by electrons described by quantum states.",
        "label": "Nucleus",
        "art": "network"
      },
      {
        "title": "What defines an element",
        "text": "The number of protons determines the element. Carbon has six protons, regardless of its neutron count.",
        "label": "Protons",
        "art": "scales"
      },
      {
        "title": "Isotopes",
        "text": "Atoms of one element can have different numbers of neutrons. Carbon-12 and carbon-14 are isotopes of carbon.",
        "label": "Isotopes",
        "art": "timeline"
      },
      {
        "title": "Ions",
        "text": "An atom or molecule becomes an ion when it has a net electric charge. Losing electrons gives a positive charge; gaining them gives a negative charge.",
        "label": "Ions",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "What determines which element an atom is?",
        "options": [
          "Proton count",
          "Neutron count alone",
          "Temperature"
        ],
        "correct": 0,
        "why": "Atomic number equals the number of protons."
      },
      {
        "q": "What changes when a neutral atom loses one electron?",
        "options": [
          "It becomes positively charged",
          "It becomes a different element",
          "It gains a neutron"
        ],
        "correct": 0,
        "why": "Removing negative charge leaves a net positive charge."
      }
    ]
  },
  {
    "id": "chem-bonds",
    "category": "Chemistry",
    "title": "Why atoms stick together",
    "desc": "Learn the basics of chemical bonding.",
    "art": "network",
    "diagram": [
      "Ionic",
      "Covalent",
      "Metallic"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://openstax.org/books/chemistry-2e/pages/1-introduction",
    "slides": [
      {
        "title": "Bonding lowers energy",
        "text": "Chemical bonds can form when an arrangement of atoms has lower energy than separated alternatives under the relevant conditions.",
        "label": "Energy",
        "art": "network"
      },
      {
        "title": "Ionic attraction",
        "text": "Oppositely charged ions attract. Solid sodium chloride contains a repeating arrangement of sodium and chloride ions.",
        "label": "Ionic",
        "art": "scales"
      },
      {
        "title": "Covalent sharing",
        "text": "Covalent bonding involves shared electron density. Water contains covalent bonds between oxygen and hydrogen.",
        "label": "Covalent",
        "art": "timeline"
      },
      {
        "title": "Metallic bonding",
        "text": "In metals, electron density is shared across many atoms. This helps explain electrical conductivity and other metallic properties.",
        "label": "Metallic",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "Which describes a covalent bond?",
        "options": [
          "Shared electron density",
          "A neutron leaving the nucleus",
          "A change in gravity"
        ],
        "correct": 0,
        "why": "Covalent bonds involve electron sharing."
      },
      {
        "q": "What holds positive and negative ions together in an ionic solid?",
        "options": [
          "Electrostatic attraction",
          "Sound waves",
          "Magnetism alone"
        ],
        "correct": 0,
        "why": "Opposite electrical charges attract."
      }
    ]
  },
  {
    "id": "ph-scale",
    "category": "Chemistry",
    "title": "Acids, bases and the pH scale",
    "desc": "Understand a logarithmic measure of acidity.",
    "art": "network",
    "diagram": [
      "Acid",
      "Neutral",
      "Base"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://openstax.org/books/chemistry-2e/pages/1-introduction",
    "slides": [
      {
        "title": "Acidity",
        "text": "In the usual aqueous introductory model, acids increase hydronium concentration and bases can decrease it.",
        "label": "Acid",
        "art": "network"
      },
      {
        "title": "A logarithmic scale",
        "text": "pH is the negative base-10 logarithm of hydrogen-ion activity. Each unit difference represents a factor of ten in that activity.",
        "label": "pH",
        "art": "scales"
      },
      {
        "title": "Compare two values",
        "text": "A solution at pH 3 has about ten times the hydrogen-ion activity of one at pH 4. Equal numerical steps are multiplicative, not additive.",
        "label": "Logarithm",
        "art": "timeline"
      },
      {
        "title": "Neutrality and temperature",
        "text": "Pure water is neutral when hydrogen and hydroxide ion activities are equal. Neutral pH is about 7 at 25°C but changes with temperature.",
        "label": "Neutral",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "How much greater is hydrogen-ion activity at pH 3 than pH 5?",
        "options": [
          "2 times",
          "100 times",
          "10 times"
        ],
        "correct": 1,
        "why": "Two logarithmic units correspond to 10²."
      },
      {
        "q": "Is neutral pH always exactly 7 at all temperatures?",
        "options": [
          "Yes",
          "No"
        ],
        "correct": 1,
        "why": "The neutral point depends on temperature."
      }
    ]
  },
  {
    "id": "plate-tectonics",
    "category": "Earth Science",
    "title": "The planet beneath our feet",
    "desc": "See how moving plates reshape Earth.",
    "art": "network",
    "diagram": [
      "Divergence",
      "Convergence",
      "Transform"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://www.usgs.gov/educational-resources/geology-education",
    "slides": [
      {
        "title": "A moving shell",
        "text": "Earth's rigid outer lithosphere is divided into plates moving slowly relative to one another over more deformable material beneath.",
        "label": "Plates",
        "art": "network"
      },
      {
        "title": "Divergent boundaries",
        "text": "Where plates separate, new oceanic crust can form as magma rises and cools along spreading ridges.",
        "label": "Divergence",
        "art": "scales"
      },
      {
        "title": "Convergent boundaries",
        "text": "When plates meet, one may subduct beneath another or continental crust may thicken, building mountains.",
        "label": "Convergence",
        "art": "timeline"
      },
      {
        "title": "Transform boundaries",
        "text": "Plates can slide past one another. Stress may accumulate on faults and release during earthquakes.",
        "label": "Transform",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "Where is new oceanic crust commonly formed?",
        "options": [
          "Divergent ridges",
          "Every transform fault",
          "The center of Earth"
        ],
        "correct": 0,
        "why": "Seafloor spreading creates new crust at ridges."
      },
      {
        "q": "Which boundary primarily involves plates sliding past each other?",
        "options": [
          "Transform",
          "Divergent",
          "Convergent"
        ],
        "correct": 0,
        "why": "Transform motion is lateral relative motion."
      }
    ]
  },
  {
    "id": "water-cycle",
    "category": "Earth Science",
    "title": "The journey of a drop of water",
    "desc": "Follow water through the atmosphere, land and oceans.",
    "art": "network",
    "diagram": [
      "Evaporation",
      "Condensation",
      "Runoff"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://www.usgs.gov/special-topics/water-science-school",
    "slides": [
      {
        "title": "Water moves among reservoirs",
        "text": "Oceans, glaciers, groundwater, rivers and the atmosphere store water for different lengths of time.",
        "label": "Storage",
        "art": "network"
      },
      {
        "title": "Evaporation and transpiration",
        "text": "Solar energy drives evaporation. Plants also release water vapor through transpiration.",
        "label": "Evaporation",
        "art": "scales"
      },
      {
        "title": "Condensation and precipitation",
        "text": "Cooling moist air can produce water droplets or ice crystals. Under suitable conditions they grow and fall as precipitation.",
        "label": "Precipitation",
        "art": "timeline"
      },
      {
        "title": "Runoff and infiltration",
        "text": "Some water flows over land; some infiltrates soil and can replenish groundwater. Human land use can alter these pathways.",
        "label": "Runoff",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "What moves liquid surface water into the atmosphere as vapor?",
        "options": [
          "Evaporation",
          "Precipitation",
          "Infiltration"
        ],
        "correct": 0,
        "why": "Evaporation changes liquid water into vapor."
      },
      {
        "q": "Which process moves water into soil?",
        "options": [
          "Infiltration",
          "Radiation",
          "Sublimation only"
        ],
        "correct": 0,
        "why": "Infiltration is entry of water into the ground."
      }
    ]
  },
  {
    "id": "weather-fronts",
    "category": "Earth Science",
    "title": "How weather fronts work",
    "desc": "Understand air masses, pressure and changing weather.",
    "art": "network",
    "diagram": [
      "Air mass",
      "Front",
      "Cloud"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://www.noaa.gov/education/resource-collections",
    "slides": [
      {
        "title": "Air masses",
        "text": "Large bodies of air can have characteristic temperature and moisture. Their properties evolve as they move.",
        "label": "Air mass",
        "art": "network"
      },
      {
        "title": "A cold front",
        "text": "When colder air advances, it can lift warmer air. Rising moist air may cool and produce clouds or precipitation.",
        "label": "Cold front",
        "art": "scales"
      },
      {
        "title": "A warm front",
        "text": "Warmer air can rise over retreating colder air along a sloping boundary. Cloud patterns depend on moisture and atmospheric conditions.",
        "label": "Warm front",
        "art": "timeline"
      },
      {
        "title": "Forecasts are probabilistic",
        "text": "Meteorologists use observations and models. Forecast uncertainty increases when the atmospheric state or future developments are less well constrained.",
        "label": "Forecast",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "What can happen when moist air rises and cools?",
        "options": [
          "Condensation and cloud formation",
          "All water disappears",
          "Gravity reverses"
        ],
        "correct": 0,
        "why": "Cooling can bring water vapor toward saturation."
      },
      {
        "q": "Does every cold front produce a thunderstorm?",
        "options": [
          "Yes",
          "No"
        ],
        "correct": 1,
        "why": "Storm development also requires appropriate moisture, instability and lifting."
      }
    ]
  },
  {
    "id": "ocean-currents",
    "category": "Oceanography",
    "title": "The ocean's moving highways",
    "desc": "Follow currents that redistribute heat and nutrients.",
    "art": "network",
    "diagram": [
      "Wind",
      "Density",
      "Circulation"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://www.noaa.gov/education/resource-collections/ocean-coasts/ocean-currents",
    "slides": [
      {
        "title": "Surface movement",
        "text": "Winds transfer momentum to the upper ocean. Earth's rotation and continental boundaries help shape current patterns.",
        "label": "Wind",
        "art": "network"
      },
      {
        "title": "Density differences",
        "text": "Temperature and salinity affect seawater density. Dense water can sink under suitable conditions, contributing to deep circulation.",
        "label": "Density",
        "art": "scales"
      },
      {
        "title": "Climate connections",
        "text": "Ocean currents redistribute heat and influence regional climate. They interact with the atmosphere rather than operating independently.",
        "label": "Heat",
        "art": "timeline"
      },
      {
        "title": "Upwelling",
        "text": "Winds and circulation can bring deeper, nutrient-rich water toward the surface, supporting marine productivity in some regions.",
        "label": "Upwelling",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "Which factors affect seawater density?",
        "options": [
          "Temperature and salinity",
          "Latitude alone",
          "Wave height alone"
        ],
        "correct": 0,
        "why": "Both temperature and dissolved salt influence density."
      },
      {
        "q": "Why can upwelling support productive fisheries?",
        "options": [
          "It can supply nutrients to surface waters",
          "It eliminates all predators",
          "It stops photosynthesis"
        ],
        "correct": 0,
        "why": "Nutrients can support phytoplankton and food webs."
      }
    ]
  },
  {
    "id": "stars",
    "category": "Astronomy",
    "title": "The life and death of stars",
    "desc": "Explore fusion, mass and stellar evolution.",
    "art": "network",
    "diagram": [
      "Cloud",
      "Fusion",
      "Remnant"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://openstax.org/books/astronomy-2e/pages/1-introduction",
    "slides": [
      {
        "title": "From gas to star",
        "text": "Gravity can concentrate gas in molecular clouds. A protostar grows as surrounding material falls inward.",
        "label": "Formation",
        "art": "network"
      },
      {
        "title": "Fusion and balance",
        "text": "In a main-sequence star, hydrogen fusion supplies energy. Pressure gradients oppose gravity in approximate hydrostatic equilibrium.",
        "label": "Fusion",
        "art": "scales"
      },
      {
        "title": "Mass changes the story",
        "text": "A star's initial mass strongly influences its lifetime and later evolution. Massive stars generally exhaust their fuel faster than smaller stars.",
        "label": "Mass",
        "art": "timeline"
      },
      {
        "title": "Stellar remnants",
        "text": "Sun-like stars can leave white dwarfs. Some massive stars undergo core collapse and leave neutron stars or black holes.",
        "label": "Remnants",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "What powers a main-sequence star?",
        "options": [
          "Nuclear fusion",
          "Combustion with oxygen",
          "Chemical batteries"
        ],
        "correct": 0,
        "why": "Fusion in the core releases energy."
      },
      {
        "q": "Will the Sun eventually become a core-collapse supernova?",
        "options": [
          "Yes",
          "No"
        ],
        "correct": 1,
        "why": "The Sun is not massive enough for that evolutionary pathway."
      }
    ]
  },
  {
    "id": "black-holes",
    "category": "Astronomy",
    "title": "What makes a black hole black",
    "desc": "Understand horizons without science-fiction shortcuts.",
    "art": "network",
    "diagram": [
      "Gravity",
      "Horizon",
      "Evidence"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://openstax.org/books/astronomy-2e/pages/1-introduction",
    "slides": [
      {
        "title": "Extreme spacetime curvature",
        "text": "A black hole is a region of spacetime from which signals cannot escape to distant observers once inside its event horizon.",
        "label": "Gravity",
        "art": "network"
      },
      {
        "title": "The event horizon",
        "text": "The horizon is a causal boundary, not a solid surface. Light can move locally but cannot carry a signal outward from inside.",
        "label": "Horizon",
        "art": "scales"
      },
      {
        "title": "Not a cosmic vacuum cleaner",
        "text": "Far away, gravity depends on mass and other properties. Replacing a star with a black hole of the same mass would not automatically suck in distant orbiting objects.",
        "label": "Orbit",
        "art": "timeline"
      },
      {
        "title": "How we infer them",
        "text": "Astronomers use stellar motion, radiation from surrounding matter, gravitational waves and horizon-scale imaging to study black holes.",
        "label": "Evidence",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "Is the event horizon a material surface?",
        "options": [
          "Yes",
          "No"
        ],
        "correct": 1,
        "why": "It is a boundary in spacetime."
      },
      {
        "q": "How can a black hole be studied despite emitting no ordinary light from inside its horizon?",
        "options": [
          "Observe nearby matter and gravitational effects",
          "Only visit its interior",
          "It cannot be studied at all"
        ],
        "correct": 0,
        "why": "Its environment and gravitational signatures reveal information."
      }
    ]
  },
  {
    "id": "dna",
    "category": "Biology",
    "title": "DNA: information that cells inherit",
    "desc": "Understand genes, expression and variation.",
    "art": "network",
    "diagram": [
      "DNA",
      "RNA",
      "Protein"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://openstax.org/books/biology-2e/pages/1-introduction",
    "slides": [
      {
        "title": "A molecular alphabet",
        "text": "DNA stores information in sequences of four nucleotide bases. Complementary base pairing helps make copying possible.",
        "label": "DNA",
        "art": "network"
      },
      {
        "title": "Genes and regulation",
        "text": "Genes contain information used to produce functional RNA or proteins. Regulatory processes influence when and where genes are expressed.",
        "label": "Genes",
        "art": "scales"
      },
      {
        "title": "From sequence to function",
        "text": "For protein-coding genes, transcription produces RNA and translation uses its information to assemble a protein.",
        "label": "Expression",
        "art": "timeline"
      },
      {
        "title": "Variation and inheritance",
        "text": "DNA sequence differences can arise through mutation and be inherited. Effects range from neutral to harmful or beneficial, depending on context.",
        "label": "Variation",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "What is transcription?",
        "options": [
          "Making RNA using a DNA template",
          "Making DNA from protein in ordinary cells",
          "Dividing the entire organism"
        ],
        "correct": 0,
        "why": "Transcription produces RNA from DNA information."
      },
      {
        "q": "Do all genetic variants cause disease?",
        "options": [
          "Yes",
          "No"
        ],
        "correct": 1,
        "why": "Many variants have little or no harmful effect."
      }
    ]
  },
  {
    "id": "microbes",
    "category": "Biology",
    "title": "The world of microorganisms",
    "desc": "Meet bacteria, archaea, fungi and viruses.",
    "art": "network",
    "diagram": [
      "Cells",
      "Microbes",
      "Viruses"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://openstax.org/books/microbiology/pages/1-introduction",
    "slides": [
      {
        "title": "Small but diverse",
        "text": "Microorganisms include bacteria, archaea and many microscopic eukaryotes. They perform numerous ecological functions.",
        "label": "Diversity",
        "art": "network"
      },
      {
        "title": "Viruses are different",
        "text": "Viruses contain genetic material and depend on host cells for replication. They do not have the independent cellular machinery of bacteria.",
        "label": "Viruses",
        "art": "scales"
      },
      {
        "title": "Helpful and harmful",
        "text": "Some microbes support digestion, fermentation or nutrient cycles. Others can cause disease under particular circumstances.",
        "label": "Functions",
        "art": "timeline"
      },
      {
        "title": "Antibiotics and resistance",
        "text": "Antibiotics target bacteria, not viruses. Bacterial populations can evolve resistance, making appropriate prescribing and infection prevention important.",
        "label": "Resistance",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "Do antibiotics directly treat viral infections?",
        "options": [
          "Yes",
          "No"
        ],
        "correct": 1,
        "why": "Antibiotics target bacteria; viral infections may need other treatments."
      },
      {
        "q": "Are all bacteria harmful?",
        "options": [
          "Yes",
          "No"
        ],
        "correct": 1,
        "why": "Many bacteria perform useful or neutral functions."
      }
    ]
  },
  {
    "id": "heart",
    "category": "Human Biology",
    "title": "How the heart moves blood",
    "desc": "Trace the double circulation of the cardiovascular system.",
    "art": "network",
    "diagram": [
      "Heart",
      "Lungs",
      "Body"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://openstax.org/books/anatomy-and-physiology-2e/pages/1-introduction",
    "slides": [
      {
        "title": "Two circuits",
        "text": "The right side of the heart pumps blood toward the lungs; the left side pumps blood into systemic circulation.",
        "label": "Circuits",
        "art": "network"
      },
      {
        "title": "Gas exchange",
        "text": "At lung capillaries, oxygen enters blood and carbon dioxide leaves. Hemoglobin carries much of the oxygen.",
        "label": "Lungs",
        "art": "scales"
      },
      {
        "title": "Valves maintain direction",
        "text": "Heart valves open and close in response to pressure differences, helping prevent backward flow.",
        "label": "Valves",
        "art": "timeline"
      },
      {
        "title": "Delivery and return",
        "text": "Arteries carry blood away from the heart; veins carry it toward the heart. The distinction is direction, not oxygen content.",
        "label": "Vessels",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "Which circuit carries blood from the right heart to the lungs?",
        "options": [
          "Pulmonary",
          "Systemic",
          "Digestive"
        ],
        "correct": 0,
        "why": "Pulmonary circulation connects heart and lungs."
      },
      {
        "q": "What defines an artery?",
        "options": [
          "It carries blood away from the heart",
          "It always carries oxygen-rich blood",
          "It has no pressure"
        ],
        "correct": 0,
        "why": "Direction defines arterial circulation."
      }
    ]
  },
  {
    "id": "kidneys",
    "category": "Human Biology",
    "title": "How kidneys keep blood in balance",
    "desc": "Explore filtration, reabsorption and regulation.",
    "art": "network",
    "diagram": [
      "Filter",
      "Reabsorb",
      "Excrete"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://openstax.org/books/anatomy-and-physiology-2e/pages/1-introduction",
    "slides": [
      {
        "title": "Many tiny units",
        "text": "Nephrons are functional units of the kidneys. They help regulate fluid, electrolytes and waste products.",
        "label": "Nephron",
        "art": "network"
      },
      {
        "title": "Filtration",
        "text": "Pressure drives fluid and small solutes from glomerular capillaries into the nephron. Blood cells and most large proteins normally remain in circulation.",
        "label": "Filter",
        "art": "scales"
      },
      {
        "title": "Selective reabsorption",
        "text": "Tubules return much filtered water and useful solutes to the blood. Transport processes also secrete some substances into tubular fluid.",
        "label": "Reabsorb",
        "art": "timeline"
      },
      {
        "title": "Regulation",
        "text": "Hormones and local mechanisms influence water and salt handling. Kidneys also contribute to blood pressure and acid-base regulation.",
        "label": "Regulate",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "What happens to much of the filtered water?",
        "options": [
          "It is reabsorbed",
          "It all leaves as urine",
          "It becomes blood cells"
        ],
        "correct": 0,
        "why": "Tubular reabsorption returns most filtered water."
      },
      {
        "q": "Do kidneys only remove waste?",
        "options": [
          "Yes",
          "No"
        ],
        "correct": 1,
        "why": "They also regulate fluids, electrolytes and other functions."
      }
    ]
  },
  {
    "id": "research-methods",
    "category": "Scientific Literacy",
    "title": "How a scientific study earns trust",
    "desc": "Distinguish hypotheses, controls and replication.",
    "art": "network",
    "diagram": [
      "Hypothesis",
      "Test",
      "Evidence"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://openstax.org/books/introductory-statistics-2e/pages/1-introduction",
    "slides": [
      {
        "title": "A testable question",
        "text": "A scientific hypothesis makes a claim that evidence could support or challenge. A prediction describes an expected observation.",
        "label": "Hypothesis",
        "art": "network"
      },
      {
        "title": "Control comparisons",
        "text": "A comparison group can help distinguish an intervention's effects from other changes. Random assignment can balance confounding factors in expectation.",
        "label": "Controls",
        "art": "scales"
      },
      {
        "title": "Uncertainty",
        "text": "Samples vary and measurements can contain error. Report effect sizes and uncertainty rather than treating a result as perfectly precise.",
        "label": "Uncertainty",
        "art": "timeline"
      },
      {
        "title": "Replication and convergence",
        "text": "Independent studies, transparent methods and different evidence types help assess reliability. One study rarely settles a complex question.",
        "label": "Replication",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "Why use random assignment in an experiment?",
        "options": [
          "To reduce systematic group differences",
          "To guarantee a positive result",
          "To remove all uncertainty"
        ],
        "correct": 0,
        "why": "Random assignment helps balance confounding factors on average."
      },
      {
        "q": "Does a single study always establish a universal truth?",
        "options": [
          "Yes",
          "No"
        ],
        "correct": 1,
        "why": "Reliable conclusions often require converging evidence."
      }
    ]
  },
  {
    "id": "correlation",
    "category": "Statistics",
    "title": "When two things move together",
    "desc": "Learn why association is not always causation.",
    "art": "network",
    "diagram": [
      "Association",
      "Confounding",
      "Cause"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://openstax.org/books/introductory-statistics-2e/pages/1-introduction",
    "slides": [
      {
        "title": "Measure association",
        "text": "Two variables can vary together. Correlation measures aspects of association, not necessarily a causal relationship.",
        "label": "Association",
        "art": "network"
      },
      {
        "title": "A third variable",
        "text": "Ice cream sales and swimming activity can both increase in warm weather. Temperature helps explain their association.",
        "label": "Confounding",
        "art": "scales"
      },
      {
        "title": "Direction and alternatives",
        "text": "An association may reflect A causing B, B causing A, a common cause, or other processes. Study design helps distinguish them.",
        "label": "Direction",
        "art": "timeline"
      },
      {
        "title": "Evidence for causes",
        "text": "Experiments and carefully designed observational studies can strengthen causal inference. The appropriate method depends on the question and assumptions.",
        "label": "Inference",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "Ice cream and swimming both rise in summer. What is a plausible confounder?",
        "options": [
          "Temperature",
          "Ice cream flavor alone",
          "The name of the survey"
        ],
        "correct": 0,
        "why": "Warm conditions may influence both variables."
      },
      {
        "q": "Does correlation by itself establish causation?",
        "options": [
          "Yes",
          "No"
        ],
        "correct": 1,
        "why": "Association alone cannot rule out alternative explanations."
      }
    ]
  },
  {
    "id": "base-rates",
    "category": "Statistics",
    "title": "Why rare events fool our intuition",
    "desc": "Understand conditional probability and false positives.",
    "art": "network",
    "diagram": [
      "Prevalence",
      "Test",
      "Posterior"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://openstax.org/books/introductory-statistics-2e/pages/1-introduction",
    "slides": [
      {
        "title": "Start with frequency",
        "text": "Suppose 10 of 1,000 people have a condition. The prevalence in this illustrative group is 1%.",
        "label": "Prevalence",
        "art": "network"
      },
      {
        "title": "Test characteristics",
        "text": "Imagine a test detects 9 of those 10 cases and falsely flags 5% of the 990 unaffected people, about 50 individuals.",
        "label": "Test",
        "art": "scales"
      },
      {
        "title": "Count the outcomes",
        "text": "There are approximately 59 positive results: 9 true positives and 50 false positives. Around 15% of positives are true cases in this example.",
        "label": "Outcomes",
        "art": "timeline"
      },
      {
        "title": "Context matters",
        "text": "Predictive values depend on prevalence and test performance. This is a mathematical example, not a clinical interpretation of any real test.",
        "label": "Context",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "In this example, how many true positives are expected?",
        "options": [
          "9",
          "59",
          "990"
        ],
        "correct": 0,
        "why": "The test detects nine of the ten actual cases."
      },
      {
        "q": "What happens to positive predictive value when prevalence falls, all else equal?",
        "options": [
          "It generally falls",
          "It always rises",
          "It never changes"
        ],
        "correct": 0,
        "why": "False positives make up a larger fraction of positives when the condition is rarer."
      }
    ]
  },
  {
    "id": "sampling",
    "category": "Statistics",
    "title": "Can a sample speak for a population?",
    "desc": "Discover selection bias and sampling uncertainty.",
    "art": "network",
    "diagram": [
      "Population",
      "Sample",
      "Estimate"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://openstax.org/books/introductory-statistics-2e/pages/1-introduction",
    "slides": [
      {
        "title": "Population and sample",
        "text": "A population is the group of interest; a sample is the subset observed. Define the population before interpreting results.",
        "label": "Population",
        "art": "network"
      },
      {
        "title": "Selection matters",
        "text": "Surveying only people at a gym may misrepresent exercise habits of the whole city. Increasing a biased sample's size does not necessarily fix bias.",
        "label": "Selection",
        "art": "scales"
      },
      {
        "title": "Random variation",
        "text": "Different probability samples can yield different estimates. Sampling uncertainty reflects this variation under a specified sampling design.",
        "label": "Uncertainty",
        "art": "timeline"
      },
      {
        "title": "Read the method",
        "text": "Check who was included, how respondents were selected, nonresponse and question wording before drawing broad conclusions.",
        "label": "Method",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "Does a very large convenience sample automatically remove selection bias?",
        "options": [
          "Yes",
          "No"
        ],
        "correct": 1,
        "why": "Size does not correct a systematically unrepresentative selection process."
      },
      {
        "q": "What is the population when estimating all city residents' habits?",
        "options": [
          "All city residents",
          "Only survey respondents",
          "Only gym members"
        ],
        "correct": 0,
        "why": "The population is the full group the estimate concerns."
      }
    ]
  },
  {
    "id": "charts",
    "category": "Data Literacy",
    "title": "How charts can mislead",
    "desc": "Read axes, denominators and scales critically.",
    "art": "network",
    "diagram": [
      "Scale",
      "Context",
      "Comparison"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://openstax.org/books/introductory-statistics-2e/pages/1-introduction",
    "slides": [
      {
        "title": "Start with the axes",
        "text": "Check what each axis measures and its units. A line chart's visible slope depends partly on the displayed range.",
        "label": "Axes",
        "art": "network"
      },
      {
        "title": "Bars and baselines",
        "text": "Bar lengths encode magnitude. A truncated baseline can exaggerate relative differences; zero baselines are generally appropriate for magnitude bars.",
        "label": "Baseline",
        "art": "scales"
      },
      {
        "title": "Count versus rate",
        "text": "A region with more incidents may also have a larger population. Rates per comparable population can answer a different question from totals.",
        "label": "Denominator",
        "art": "timeline"
      },
      {
        "title": "Show uncertainty and context",
        "text": "Look for missing categories, time windows, sample sizes and uncertainty. A clean visual is not a substitute for a sound comparison.",
        "label": "Context",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "What helps compare incident frequency between populations of very different sizes?",
        "options": [
          "A rate using a comparable denominator",
          "Raw counts alone",
          "The darkest chart color"
        ],
        "correct": 0,
        "why": "Rates account for the population at risk."
      },
      {
        "q": "Why inspect a bar chart's baseline?",
        "options": [
          "Truncation can exaggerate magnitude differences",
          "It determines the author's age",
          "Bars never encode quantity"
        ],
        "correct": 0,
        "why": "Displayed length affects perception of magnitude."
      }
    ]
  },
  {
    "id": "source-check",
    "category": "Media Literacy",
    "title": "How to verify a claim online",
    "desc": "Learn to investigate the source before trusting the story.",
    "art": "network",
    "diagram": [
      "Source",
      "Evidence",
      "Cross-check"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://style.mla.org/lateral-reading/",
    "slides": [
      {
        "title": "Leave the page",
        "text": "A professional-looking site can still mislead. Search independently for who runs it, its reputation and its incentives.",
        "label": "Source",
        "art": "network"
      },
      {
        "title": "Find the original evidence",
        "text": "Trace a claim to the original document, dataset or statement. Check whether the article accurately represents it.",
        "label": "Evidence",
        "art": "scales"
      },
      {
        "title": "Cross-check independently",
        "text": "Multiple sites may simply repeat one source. Seek independent reporting or primary evidence rather than counting repetitions.",
        "label": "Cross-check",
        "art": "timeline"
      },
      {
        "title": "Know when to withhold judgment",
        "text": "If credible evidence is incomplete or contradictory, distinguish verified facts from speculation. Updating your view is part of evaluating information.",
        "label": "Judgment",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "What is a first step in lateral reading?",
        "options": [
          "Open other sources to investigate the publisher",
          "Trust the site's design",
          "Read only its testimonials"
        ],
        "correct": 0,
        "why": "Lateral reading investigates a source externally."
      },
      {
        "q": "Five websites copy one press release. Is that five independent confirmations?",
        "options": [
          "Yes",
          "No"
        ],
        "correct": 1,
        "why": "Shared origin limits independence."
      }
    ]
  },
  {
    "id": "image-context",
    "category": "Media Literacy",
    "title": "Seeing is not always believing",
    "desc": "Investigate images, captions and missing context.",
    "art": "network",
    "diagram": [
      "Image",
      "Origin",
      "Context"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://style.mla.org/lateral-reading/",
    "slides": [
      {
        "title": "Separate image from claim",
        "text": "A genuine photograph can be paired with a false caption. Authentic pixels do not establish time, place or meaning.",
        "label": "Claim",
        "art": "network"
      },
      {
        "title": "Look for earlier appearances",
        "text": "Reverse-image search and original publication records can sometimes reveal that a picture predates the event it supposedly shows.",
        "label": "Origin",
        "art": "scales"
      },
      {
        "title": "Consider edits and crops",
        "text": "A crop can hide important context. Image-generation and editing tools add other possibilities, but visual oddities alone are not definitive proof.",
        "label": "Edits",
        "art": "timeline"
      },
      {
        "title": "Corroborate the event",
        "text": "Check independent reports, reliable records and known context. State uncertainty when an image's origin cannot be established.",
        "label": "Context",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "Can a real photo be used to support a false claim?",
        "options": [
          "Yes",
          "No"
        ],
        "correct": 0,
        "why": "An accurate image may be miscaptioned or taken from another event."
      },
      {
        "q": "Do visual artifacts alone prove an image is AI-generated?",
        "options": [
          "Yes",
          "No"
        ],
        "correct": 1,
        "why": "Compression, lighting and editing can also create artifacts."
      }
    ]
  },
  {
    "id": "cyber-safety",
    "category": "Cybersecurity",
    "title": "Recognizing digital deception",
    "desc": "Learn protective habits against common phishing scams.",
    "art": "network",
    "diagram": [
      "Message",
      "Verify",
      "Protect"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://www.consumerfinance.gov/ask-cfpb/what-are-some-common-types-of-fraud-and-scams-en-2092/",
    "slides": [
      {
        "title": "An impersonated request",
        "text": "Phishing messages may imitate a bank, employer or service to obtain credentials, money or access.",
        "label": "Impersonation",
        "art": "network"
      },
      {
        "title": "Urgency and trust",
        "text": "Pressure to act immediately can discourage verification. A familiar logo or display name does not establish the sender's identity.",
        "label": "Urgency",
        "art": "scales"
      },
      {
        "title": "Verify independently",
        "text": "Use a known official address or contact method rather than following an unsolicited request. Never share authentication codes with an unexpected caller.",
        "label": "Verify",
        "art": "timeline"
      },
      {
        "title": "Limit account damage",
        "text": "Unique passwords, password managers and strong multifactor authentication can reduce account takeover risk. Report suspicious messages through appropriate channels.",
        "label": "Protect",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "A message claims your bank account will close immediately. What is a safer next step?",
        "options": [
          "Contact the bank using a known official channel",
          "Send your password",
          "Follow the message's login link immediately"
        ],
        "correct": 0,
        "why": "Independent verification avoids relying on the suspect message."
      },
      {
        "q": "Should you give an unexpected caller a one-time login code?",
        "options": [
          "Yes",
          "No"
        ],
        "correct": 1,
        "why": "Such codes can enable access to your account."
      }
    ]
  },
  {
    "id": "passwords",
    "category": "Cybersecurity",
    "title": "Why passwords should not be reused",
    "desc": "Understand credentials, breaches and authentication.",
    "art": "network",
    "diagram": [
      "Password",
      "Breach",
      "MFA"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://consumer.ftc.gov/",
    "slides": [
      {
        "title": "One secret per service",
        "text": "If a password is reused, a breach at one service can expose accounts elsewhere through credential reuse.",
        "label": "Reuse",
        "art": "network"
      },
      {
        "title": "Long and unique",
        "text": "A password manager can generate and store distinct, strong passwords. A memorable long passphrase may suit a master password.",
        "label": "Strength",
        "art": "scales"
      },
      {
        "title": "Additional proof",
        "text": "Multifactor authentication requires different types of evidence, such as possession of a security key in addition to a password.",
        "label": "MFA",
        "art": "timeline"
      },
      {
        "title": "Recovery matters",
        "text": "Keep recovery methods up to date and store backup codes securely. Phishing-resistant authentication can reduce certain risks, but no method removes every threat.",
        "label": "Recovery",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "Why is password reuse risky?",
        "options": [
          "A single leak can affect multiple accounts",
          "It makes screens brighter",
          "It prevents encryption"
        ],
        "correct": 0,
        "why": "Attackers can attempt exposed credentials at other services."
      },
      {
        "q": "What does MFA add?",
        "options": [
          "Another type of authentication evidence",
          "A second username only",
          "Guaranteed immunity to fraud"
        ],
        "correct": 0,
        "why": "Additional factors reduce reliance on a single secret."
      }
    ]
  },
  {
    "id": "credit",
    "category": "Financial Literacy",
    "title": "What credit reports actually contain",
    "desc": "Distinguish borrowing records, scores and interest rates.",
    "art": "network",
    "diagram": [
      "Report",
      "Score",
      "Loan"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://www.consumerfinance.gov/consumer-tools/educator-tools/adult-financial-education/tools-and-resources/",
    "slides": [
      {
        "title": "A borrowing record",
        "text": "Credit reports contain information about certain credit accounts and payment history. Coverage and accuracy can vary.",
        "label": "Report",
        "art": "network"
      },
      {
        "title": "A score is a model",
        "text": "Credit scoring models estimate aspects of lending risk using report information. Different models and versions may produce different scores.",
        "label": "Score",
        "art": "scales"
      },
      {
        "title": "Interest and fees",
        "text": "APR expresses borrowing costs on an annualized basis under applicable rules. Actual total cost depends on balances, fees, terms and repayment.",
        "label": "Cost",
        "art": "timeline"
      },
      {
        "title": "Check and correct",
        "text": "Review reports for unfamiliar or incorrect information and use official dispute channels. Accurate information may remain according to applicable rules.",
        "label": "Review",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "Are a credit report and a credit score identical?",
        "options": [
          "Yes",
          "No"
        ],
        "correct": 1,
        "why": "A report contains records; a score is a model-derived measure."
      },
      {
        "q": "Why compare loan costs as well as monthly payments?",
        "options": [
          "A longer term may change the total cost",
          "Payments always reveal every fee",
          "APR never matters"
        ],
        "correct": 0,
        "why": "Monthly affordability and total borrowing cost differ."
      }
    ]
  },
  {
    "id": "insurance",
    "category": "Financial Literacy",
    "title": "Insurance and the price of risk",
    "desc": "Understand premiums, deductibles and coverage.",
    "art": "network",
    "diagram": [
      "Premium",
      "Deductible",
      "Coverage"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://www.consumerfinance.gov/consumer-tools/educator-tools/adult-financial-education/tools-and-resources/",
    "slides": [
      {
        "title": "Pooling uncertain losses",
        "text": "Insurance exchanges a premium for specified financial protection against covered risks. Contract terms determine what is protected.",
        "label": "Pooling",
        "art": "network"
      },
      {
        "title": "Premium and deductible",
        "text": "A premium is the price of coverage. A deductible is an amount the insured may owe before certain benefits apply, depending on the policy.",
        "label": "Deductible",
        "art": "scales"
      },
      {
        "title": "Limits and exclusions",
        "text": "Policies can restrict covered events, benefit amounts and providers. A low premium does not prove that a plan offers adequate protection.",
        "label": "Limits",
        "art": "timeline"
      },
      {
        "title": "Compare scenarios",
        "text": "Consider regular premiums, likely claims and the financial impact of a major covered or excluded loss. Read the actual policy before buying.",
        "label": "Comparison",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "What is a premium?",
        "options": [
          "The price paid for insurance coverage",
          "Always the claim amount",
          "An investment guarantee"
        ],
        "correct": 0,
        "why": "Premiums purchase specified coverage."
      },
      {
        "q": "Does insurance cover every possible loss?",
        "options": [
          "Yes",
          "No"
        ],
        "correct": 1,
        "why": "Policies have conditions, limits and exclusions."
      }
    ]
  },
  {
    "id": "legal-systems",
    "category": "Law & Civics",
    "title": "Civil law and criminal law",
    "desc": "Learn how different legal disputes reach courts.",
    "art": "network",
    "diagram": [
      "Dispute",
      "Charge",
      "Judgment"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://www.uscourts.gov/about-federal-courts",
    "slides": [
      {
        "title": "Civil disputes",
        "text": "Civil cases commonly involve disputes over rights, obligations or remedies. Parties may seek damages, injunctions or other relief.",
        "label": "Civil",
        "art": "network"
      },
      {
        "title": "Criminal prosecution",
        "text": "Criminal cases involve alleged offenses prosecuted by public authorities. Conviction can carry penalties, subject to legal procedures.",
        "label": "Criminal",
        "art": "scales"
      },
      {
        "title": "Different standards",
        "text": "In the United States, criminal guilt must be proved beyond a reasonable doubt. Many civil claims use a preponderance standard, with exceptions.",
        "label": "Proof",
        "art": "timeline"
      },
      {
        "title": "Jurisdiction matters",
        "text": "Courts have authority over particular kinds of cases and geographic areas. Rules vary across jurisdictions and case types; this is general education.",
        "label": "Jurisdiction",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "Who ordinarily prosecutes a criminal case?",
        "options": [
          "A public prosecuting authority",
          "Any civil plaintiff acting privately",
          "A jury"
        ],
        "correct": 0,
        "why": "Criminal prosecution is generally brought by the state or federal government."
      },
      {
        "q": "Are all civil claims subject to exactly the same proof standard?",
        "options": [
          "Yes",
          "No"
        ],
        "correct": 1,
        "why": "Some claims require different standards."
      }
    ]
  },
  {
    "id": "contracts",
    "category": "Law & Civics",
    "title": "Reading an agreement before signing",
    "desc": "Recognize obligations, terms and dispute clauses.",
    "art": "network",
    "diagram": [
      "Terms",
      "Obligations",
      "Remedies"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://consumer.ftc.gov/",
    "slides": [
      {
        "title": "An exchange of promises",
        "text": "Contracts can create enforceable obligations. Requirements differ by jurisdiction and subject; not every promise is enforceable.",
        "label": "Agreement",
        "art": "network"
      },
      {
        "title": "Identify the parties",
        "text": "Check who is bound, what is promised, the payment schedule, duration and renewal terms.",
        "label": "Terms",
        "art": "scales"
      },
      {
        "title": "Look for contingencies",
        "text": "Read cancellation, termination, penalties, exclusions and dispute-resolution clauses. Ask about unclear wording before agreeing.",
        "label": "Contingencies",
        "art": "timeline"
      },
      {
        "title": "Keep a record",
        "text": "Retain the signed agreement and important written communications. For significant or unclear legal obligations, consult qualified local advice.",
        "label": "Records",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "What should you check in a recurring subscription contract?",
        "options": [
          "Renewal and cancellation terms",
          "Only the logo",
          "Only the first day's price"
        ],
        "correct": 0,
        "why": "Recurring obligations depend on ongoing contract terms."
      },
      {
        "q": "Does every informal promise automatically form an enforceable contract?",
        "options": [
          "Yes",
          "No"
        ],
        "correct": 1,
        "why": "Legal enforceability depends on the applicable requirements."
      }
    ]
  },
  {
    "id": "sociology",
    "category": "Sociology",
    "title": "How society shapes everyday choices",
    "desc": "Explore norms, roles and institutions.",
    "art": "network",
    "diagram": [
      "Norms",
      "Roles",
      "Institutions"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://openstax.org/books/introduction-sociology-3e/pages/1-introduction",
    "slides": [
      {
        "title": "Norms",
        "text": "Social norms are shared expectations about behavior. They can differ across groups, settings and historical periods.",
        "label": "Norms",
        "art": "network"
      },
      {
        "title": "Roles",
        "text": "A role is a set of expectations associated with a social position. The same person may face conflicting expectations in different roles.",
        "label": "Roles",
        "art": "scales"
      },
      {
        "title": "Institutions",
        "text": "Education, families, law and markets organize patterns of social activity. Institutions both constrain and enable choices.",
        "label": "Institutions",
        "art": "timeline"
      },
      {
        "title": "Agency and structure",
        "text": "People make choices within social conditions, and collective action can change those conditions. Sociology studies both levels.",
        "label": "Agency",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "What is a social role?",
        "options": [
          "Expectations associated with a social position",
          "An inherited DNA sequence",
          "A universal personality type"
        ],
        "correct": 0,
        "why": "Roles concern expected behavior in social positions."
      },
      {
        "q": "Can social norms change over time?",
        "options": [
          "Yes",
          "No"
        ],
        "correct": 0,
        "why": "Norms vary across societies and historical periods."
      }
    ]
  },
  {
    "id": "culture",
    "category": "Anthropology",
    "title": "Culture beyond stereotypes",
    "desc": "Understand cultural learning and context.",
    "art": "network",
    "diagram": [
      "Practice",
      "Context",
      "Variation"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://library.si.edu/topic",
    "slides": [
      {
        "title": "Learned patterns",
        "text": "Culture includes learned meanings, practices, knowledge and ways of organizing life. It is transmitted and transformed through interaction.",
        "label": "Learning",
        "art": "network"
      },
      {
        "title": "Context before judgment",
        "text": "A practice can have different meanings in different settings. Anthropologists investigate its social and historical context.",
        "label": "Context",
        "art": "scales"
      },
      {
        "title": "Variation within groups",
        "text": "No cultural group is homogeneous. Age, region, class, migration and individual experiences can produce substantial variation.",
        "label": "Variation",
        "art": "timeline"
      },
      {
        "title": "Change and exchange",
        "text": "Cultural practices change through innovation, interaction, migration and power relations. Cultures are not sealed, unchanging objects.",
        "label": "Change",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "Are all members of a cultural group necessarily identical in beliefs?",
        "options": [
          "Yes",
          "No"
        ],
        "correct": 1,
        "why": "Variation exists within every large cultural group."
      },
      {
        "q": "Why study a practice in context?",
        "options": [
          "Its meaning may depend on local relationships and history",
          "It proves every practice is harmless",
          "Context makes evidence irrelevant"
        ],
        "correct": 0,
        "why": "Context helps explain meaning without requiring moral endorsement."
      }
    ]
  },
  {
    "id": "maps",
    "category": "Geography",
    "title": "Why no flat map is perfect",
    "desc": "Explore projections, scale and distortion.",
    "art": "network",
    "diagram": [
      "Globe",
      "Projection",
      "Distortion"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://education.nationalgeographic.org/",
    "slides": [
      {
        "title": "A curved surface",
        "text": "Earth is approximately an oblate spheroid. Representing its curved surface on a flat map requires distortion.",
        "label": "Globe",
        "art": "network"
      },
      {
        "title": "Projection trade-offs",
        "text": "Map projections may preserve local angles, area, distances along selected lines or other properties, but cannot preserve all properties everywhere.",
        "label": "Projection",
        "art": "scales"
      },
      {
        "title": "Scale changes interpretation",
        "text": "Scale relates map distance to actual distance under specified conditions. Generalization removes details to make a map readable.",
        "label": "Scale",
        "art": "timeline"
      },
      {
        "title": "Choose by purpose",
        "text": "Equal-area maps suit many size comparisons; other projections serve navigation or regional mapping. A map's usefulness depends on the question.",
        "label": "Purpose",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "Can one flat world map preserve all distances, areas and angles everywhere?",
        "options": [
          "Yes",
          "No"
        ],
        "correct": 1,
        "why": "Flattening a curved surface requires distortion."
      },
      {
        "q": "Which projection property helps compare land areas?",
        "options": [
          "Equal area",
          "A bright color scheme",
          "Maximum zoom"
        ],
        "correct": 0,
        "why": "Equal-area projections preserve relative area."
      }
    ]
  },
  {
    "id": "language",
    "category": "Linguistics",
    "title": "How language builds meaning",
    "desc": "Explore sounds, words and sentences.",
    "art": "network",
    "diagram": [
      "Sounds",
      "Words",
      "Syntax"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://www.linguisticsociety.org/",
    "slides": [
      {
        "title": "Sound patterns",
        "text": "Languages organize sounds or signs into contrastive units. Spoken and signed languages have rich structured systems.",
        "label": "Sound",
        "art": "network"
      },
      {
        "title": "Word structure",
        "text": "Morphemes are meaningful units such as roots and affixes. Languages combine these units in different ways.",
        "label": "Morphology",
        "art": "scales"
      },
      {
        "title": "Sentence structure",
        "text": "Syntax concerns how words and phrases combine. Languages differ in typical word order and grammatical marking.",
        "label": "Syntax",
        "art": "timeline"
      },
      {
        "title": "Meaning in context",
        "text": "A sentence's interpretation depends on literal meaning, context and shared assumptions. Language changes through use across generations.",
        "label": "Pragmatics",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "What is a morpheme?",
        "options": [
          "A meaningful unit of language",
          "A planet's orbit",
          "A sentence with no words"
        ],
        "correct": 0,
        "why": "Roots and affixes are common examples."
      },
      {
        "q": "Do signed languages have grammar?",
        "options": [
          "Yes",
          "No"
        ],
        "correct": 0,
        "why": "Signed languages have complex linguistic structure."
      }
    ]
  },
  {
    "id": "etymology",
    "category": "Linguistics",
    "title": "How words travel and change",
    "desc": "Discover borrowing and historical sound changes.",
    "art": "network",
    "diagram": [
      "Borrowing",
      "Change",
      "Meaning"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://www.linguisticsociety.org/",
    "slides": [
      {
        "title": "Borrowed words",
        "text": "Languages adopt words through contact, trade, migration and cultural exchange. Borrowings may adapt to local pronunciation.",
        "label": "Borrowing",
        "art": "network"
      },
      {
        "title": "Sound change",
        "text": "Sounds can change in systematic patterns across generations. Comparing related languages helps reconstruct earlier forms.",
        "label": "Sound change",
        "art": "scales"
      },
      {
        "title": "Meaning changes",
        "text": "Words can broaden, narrow or shift in meaning. An older meaning is not necessarily the correct modern one.",
        "label": "Semantics",
        "art": "timeline"
      },
      {
        "title": "Evidence over resemblance",
        "text": "Two similar-looking words are not automatically related. Historical records and regular sound correspondences help establish relationships.",
        "label": "Evidence",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "Does a word's oldest known meaning dictate its present meaning?",
        "options": [
          "Yes",
          "No"
        ],
        "correct": 1,
        "why": "Meanings evolve through use."
      },
      {
        "q": "What supports a claim of shared linguistic ancestry?",
        "options": [
          "Systematic sound correspondences and evidence",
          "A single accidental resemblance",
          "Identical fonts"
        ],
        "correct": 0,
        "why": "Historical linguistics relies on patterns and documentation."
      }
    ]
  },
  {
    "id": "visual-composition",
    "category": "Art & Design",
    "title": "How artists guide the eye",
    "desc": "Explore contrast, balance and visual hierarchy.",
    "art": "network",
    "diagram": [
      "Contrast",
      "Balance",
      "Focal point"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://www.si.edu/educators/art-resources",
    "slides": [
      {
        "title": "Visual hierarchy",
        "text": "Size, placement, contrast and other features can guide attention toward particular elements in an image.",
        "label": "Hierarchy",
        "art": "network"
      },
      {
        "title": "Balance",
        "text": "Visual weight can be distributed symmetrically or asymmetrically. Balance does not require every element to be identical.",
        "label": "Balance",
        "art": "scales"
      },
      {
        "title": "Negative space",
        "text": "Unoccupied areas can help define shapes, establish breathing room and emphasize a subject.",
        "label": "Space",
        "art": "timeline"
      },
      {
        "title": "Interpretation varies",
        "text": "Compositions operate in cultural and historical contexts. Formal design analysis is one tool, not a complete explanation of an artwork's meaning.",
        "label": "Context",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "What can help make one object a focal point?",
        "options": [
          "Contrast with its surroundings",
          "Making every feature equally prominent",
          "Removing all relationships"
        ],
        "correct": 0,
        "why": "Contrast can guide attention."
      },
      {
        "q": "Does balance require exact mirror symmetry?",
        "options": [
          "Yes",
          "No"
        ],
        "correct": 1,
        "why": "Asymmetric arrangements can also be balanced."
      }
    ]
  },
  {
    "id": "color-theory",
    "category": "Art & Design",
    "title": "How colors interact",
    "desc": "Distinguish light mixing, pigments and contrast.",
    "art": "network",
    "diagram": [
      "Hue",
      "Value",
      "Saturation"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://www.si.edu/educators/art-resources",
    "slides": [
      {
        "title": "Three useful properties",
        "text": "Hue refers to color family, value to relative lightness or darkness, and saturation to color intensity in a given model.",
        "label": "Properties",
        "art": "network"
      },
      {
        "title": "Additive light",
        "text": "Screens combine red, green and blue light. Adding all three at high intensity can produce a white appearance.",
        "label": "Additive",
        "art": "scales"
      },
      {
        "title": "Subtractive color",
        "text": "Inks and pigments absorb portions of incoming light. Their mixing behaves differently from combining emitted light.",
        "label": "Subtractive",
        "art": "timeline"
      },
      {
        "title": "Accessible contrast",
        "text": "A design should not rely on color alone to communicate essential meaning. Lightness contrast, text and shapes can make information clearer.",
        "label": "Contrast",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "What mixing model is commonly used by screens?",
        "options": [
          "Additive RGB",
          "Subtractive paint only",
          "Sound mixing"
        ],
        "correct": 0,
        "why": "Displays combine emitted light."
      },
      {
        "q": "Should a warning be communicated only by red color?",
        "options": [
          "Yes",
          "No"
        ],
        "correct": 1,
        "why": "Text or icons provide another accessible cue."
      }
    ]
  },
  {
    "id": "music-rhythm",
    "category": "Music",
    "title": "How rhythm organizes time",
    "desc": "Understand pulse, tempo and meter.",
    "art": "network",
    "diagram": [
      "Pulse",
      "Tempo",
      "Meter"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://library.si.edu/topic",
    "slides": [
      {
        "title": "Pulse",
        "text": "A pulse is a recurring beat that listeners may perceive. Not all music has a steady or obvious pulse.",
        "label": "Pulse",
        "art": "network"
      },
      {
        "title": "Tempo",
        "text": "Tempo describes the rate of beats, often measured in beats per minute. At 120 BPM, a steady beat lasts half a second.",
        "label": "Tempo",
        "art": "scales"
      },
      {
        "title": "Meter",
        "text": "Meter groups beats into recurring patterns. A common triple meter groups beats in threes, while other traditions use more varied patterns.",
        "label": "Meter",
        "art": "timeline"
      },
      {
        "title": "Syncopation",
        "text": "Accenting unexpected parts of a metrical pattern can create rhythmic tension or surprise. It depends on an established expectation.",
        "label": "Syncopation",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "At 60 BPM, how long is one beat?",
        "options": [
          "1 second",
          "2 seconds",
          "0.1 seconds"
        ],
        "correct": 0,
        "why": "Sixty beats per minute is one beat per second."
      },
      {
        "q": "What does meter describe?",
        "options": [
          "How beats are grouped",
          "The loudness of a note only",
          "The instrument's price"
        ],
        "correct": 0,
        "why": "Meter organizes recurring beat patterns."
      }
    ]
  },
  {
    "id": "music-harmony",
    "category": "Music",
    "title": "Why notes sound different together",
    "desc": "Explore intervals, harmony and musical context.",
    "art": "network",
    "diagram": [
      "Pitch",
      "Interval",
      "Harmony"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://library.si.edu/topic",
    "slides": [
      {
        "title": "Pitch",
        "text": "Pitch is the perceived highness or lowness of a sound and is strongly related to frequency. Complex tones contain multiple frequency components.",
        "label": "Pitch",
        "art": "network"
      },
      {
        "title": "Intervals",
        "text": "An interval describes the relationship between two pitches. An octave corresponds to a frequency ratio of two to one.",
        "label": "Intervals",
        "art": "scales"
      },
      {
        "title": "Harmony",
        "text": "Harmony concerns simultaneous or implied combinations of pitches. Different musical traditions organize these relationships in different ways.",
        "label": "Harmony",
        "art": "timeline"
      },
      {
        "title": "Tension and expectation",
        "text": "Listeners learn patterns from musical experience. Expectations and context influence how combinations feel, so musical meaning is not wholly universal.",
        "label": "Context",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "What is the frequency ratio of an octave?",
        "options": [
          "2:1",
          "3:1",
          "1:1"
        ],
        "correct": 0,
        "why": "Doubling frequency raises a pitch by one octave."
      },
      {
        "q": "Are all musical harmony conventions universal across cultures?",
        "options": [
          "Yes",
          "No"
        ],
        "correct": 1,
        "why": "Traditions use different musical systems and expectations."
      }
    ]
  },
  {
    "id": "architecture",
    "category": "Architecture",
    "title": "How buildings stand up",
    "desc": "Learn how loads move through a structure.",
    "art": "network",
    "diagram": [
      "Load",
      "Support",
      "Foundation"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://library.si.edu/topic",
    "slides": [
      {
        "title": "Loads",
        "text": "Buildings must resist their own weight, occupancy loads, wind and other forces relevant to the site.",
        "label": "Loads",
        "art": "network"
      },
      {
        "title": "Load paths",
        "text": "Structural elements transfer forces through beams, columns, walls and connections to foundations and the ground.",
        "label": "Load path",
        "art": "scales"
      },
      {
        "title": "Compression and tension",
        "text": "Compression pushes material together; tension pulls it apart. Material properties and member shape influence structural behavior.",
        "label": "Forces",
        "art": "timeline"
      },
      {
        "title": "Safety and context",
        "text": "Structural design must account for local conditions, codes and qualified engineering. A conceptual diagram is not sufficient to design a real building.",
        "label": "Safety",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "Where does a typical building's gravity load eventually transfer?",
        "options": [
          "Through foundations into the ground",
          "Into the air without support",
          "Only into windows"
        ],
        "correct": 0,
        "why": "Load paths transfer forces to the ground."
      },
      {
        "q": "What is tension?",
        "options": [
          "A pulling force",
          "A pushing force",
          "A temperature reading"
        ],
        "correct": 0,
        "why": "Tension acts to pull material apart."
      }
    ]
  },
  {
    "id": "engineering",
    "category": "Engineering",
    "title": "How engineers solve problems",
    "desc": "Explore requirements, constraints and iteration.",
    "art": "network",
    "diagram": [
      "Requirements",
      "Prototype",
      "Test"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://openstax.org/k12/cte",
    "slides": [
      {
        "title": "Define the problem",
        "text": "Engineering begins by identifying what a solution must do, who uses it and what constraints apply.",
        "label": "Requirements",
        "art": "network"
      },
      {
        "title": "Compare alternatives",
        "text": "Different designs can trade cost, safety, reliability, efficiency and ease of repair. No single metric captures every priority.",
        "label": "Trade-offs",
        "art": "scales"
      },
      {
        "title": "Build and test",
        "text": "A prototype can test key assumptions. Testing must represent relevant conditions and failure modes.",
        "label": "Prototype",
        "art": "timeline"
      },
      {
        "title": "Improve and document",
        "text": "Review results, refine the design and document decisions. Safety-critical designs require appropriate standards and professional review.",
        "label": "Iteration",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "Why test a prototype?",
        "options": [
          "To check assumptions before committing to a design",
          "To avoid gathering evidence",
          "To guarantee zero future failures"
        ],
        "correct": 0,
        "why": "Prototypes help reveal design weaknesses."
      },
      {
        "q": "Is the lowest-cost design always best?",
        "options": [
          "Yes",
          "No"
        ],
        "correct": 1,
        "why": "Cost is only one constraint among many."
      }
    ]
  },
  {
    "id": "energy-grid",
    "category": "Engineering",
    "title": "How electricity reaches a home",
    "desc": "Trace generation, transmission and distribution.",
    "art": "network",
    "diagram": [
      "Generation",
      "Grid",
      "Distribution"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://www.energy.gov/energysaver",
    "slides": [
      {
        "title": "Generation",
        "text": "Electricity is produced through several technologies, including turbines, solar photovoltaics and other systems.",
        "label": "Generation",
        "art": "network"
      },
      {
        "title": "Transmission",
        "text": "High-voltage networks carry power over long distances. For a given power, higher voltage allows lower current, reducing resistive losses.",
        "label": "Transmission",
        "art": "scales"
      },
      {
        "title": "Distribution",
        "text": "Substations and transformers help adjust voltage for regional and local delivery. Distribution networks connect customers to the grid.",
        "label": "Distribution",
        "art": "timeline"
      },
      {
        "title": "Balance and resilience",
        "text": "Grid operators maintain supply-demand balance and respond to disturbances. Storage, flexible demand and diverse resources can support reliability.",
        "label": "Balance",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "Why use high voltage for long-distance transmission?",
        "options": [
          "Lower current can reduce resistive losses",
          "It eliminates the need for wires",
          "It makes electricity free"
        ],
        "correct": 0,
        "why": "Resistive loss scales with current squared for a given resistance."
      },
      {
        "q": "What does a transformer do in an AC power system?",
        "options": [
          "Changes voltage levels",
          "Creates unlimited energy",
          "Replaces every generator"
        ],
        "correct": 0,
        "why": "Transformers help adapt voltage for transmission and use."
      }
    ]
  },
  {
    "id": "food-safety",
    "category": "Practical Skills",
    "title": "The science of safer food",
    "desc": "Learn why temperature and cross-contamination matter.",
    "art": "network",
    "diagram": [
      "Separate",
      "Cook",
      "Chill"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://www.foodsafety.gov/",
    "slides": [
      {
        "title": "Microbes and food",
        "text": "Some microorganisms can cause illness when contaminated food is eaten. You cannot reliably detect harmful contamination by smell alone.",
        "label": "Microbes",
        "art": "network"
      },
      {
        "title": "Prevent cross-contamination",
        "text": "Keep raw animal products separate from ready-to-eat foods. Wash hands and clean utensils and surfaces appropriately.",
        "label": "Separate",
        "art": "scales"
      },
      {
        "title": "Use appropriate temperatures",
        "text": "A food thermometer helps verify safe cooking according to food-specific guidance. Appearance alone may not establish safe internal temperature.",
        "label": "Cook",
        "art": "timeline"
      },
      {
        "title": "Store promptly",
        "text": "Refrigerate perishable food promptly and follow official storage and leftover guidance. Discard food when safety cannot reasonably be established.",
        "label": "Chill",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "Can smell reliably identify all dangerous food contamination?",
        "options": [
          "Yes",
          "No"
        ],
        "correct": 1,
        "why": "Pathogens can be present without obvious spoilage."
      },
      {
        "q": "What helps verify cooking temperature?",
        "options": [
          "A food thermometer",
          "The package color",
          "Only the cooking time"
        ],
        "correct": 0,
        "why": "A thermometer measures internal temperature."
      }
    ]
  },
  {
    "id": "preparedness",
    "category": "Practical Skills",
    "title": "Preparing for everyday emergencies",
    "desc": "Make plans around realistic disruptions.",
    "art": "network",
    "diagram": [
      "Plan",
      "Supplies",
      "Communication"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://www.ready.gov/",
    "slides": [
      {
        "title": "Identify likely disruptions",
        "text": "Consider local weather, power outages, water interruptions and household needs. A useful plan addresses realistic risks.",
        "label": "Risks",
        "art": "network"
      },
      {
        "title": "Make a communication plan",
        "text": "Agree on how household members will contact one another and where to meet if normal routines are disrupted.",
        "label": "Communication",
        "art": "scales"
      },
      {
        "title": "Gather essentials",
        "text": "Build a kit around water, food, lighting, essential medications, chargers and other individual needs. Check official guidance and expiration dates.",
        "label": "Supplies",
        "art": "timeline"
      },
      {
        "title": "Use equipment safely",
        "text": "Never run fuel-burning generators indoors or in garages. Follow equipment instructions and official guidance about carbon monoxide and fire safety.",
        "label": "Safety",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "Where should a portable fuel-burning generator be operated?",
        "options": [
          "Outdoors, safely away from openings as directed",
          "Inside a garage with the door open",
          "In a bedroom"
        ],
        "correct": 0,
        "why": "Outdoor placement away from openings reduces carbon monoxide risk."
      },
      {
        "q": "Why review emergency supplies periodically?",
        "options": [
          "Needs and expiration dates change",
          "Supplies always last forever",
          "Planning replaces safety instructions"
        ],
        "correct": 0,
        "why": "Maintenance keeps the kit suitable and usable."
      }
    ]
  },
  {
    "id": "ancient-egypt",
    "category": "World History",
    "title": "Ancient Egypt and the river Nile",
    "desc": "Understand geography, state formation and daily life.",
    "art": "network",
    "diagram": [
      "River",
      "Agriculture",
      "State"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://openstax.org/k12/social-studies",
    "slides": [
      {
        "title": "River and settlement",
        "text": "The Nile supplied water, fertile floodplain soils and transportation. Its seasonal patterns shaped agriculture and settlement.",
        "label": "River",
        "art": "network"
      },
      {
        "title": "A changing state",
        "text": "Ancient Egypt experienced periods of political unification, fragmentation and foreign rule across millennia. Institutions changed over time.",
        "label": "State",
        "art": "scales"
      },
      {
        "title": "Labor and writing",
        "text": "Agriculture, skilled crafts, administration and religious institutions sustained complex society. Writing helped record transactions and beliefs.",
        "label": "Society",
        "art": "timeline"
      },
      {
        "title": "Reading evidence",
        "text": "Archaeology, inscriptions and material remains reveal different aspects of life. Elite monuments are not complete records of every social group.",
        "label": "Evidence",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "Why was the Nile important to ancient Egyptian settlement?",
        "options": [
          "Water, fertile land and transport",
          "It prevented all conflict",
          "It was the only source of stone"
        ],
        "correct": 0,
        "why": "The river supported agriculture and communication."
      },
      {
        "q": "Do elite tombs alone provide a complete account of society?",
        "options": [
          "Yes",
          "No"
        ],
        "correct": 1,
        "why": "Different sources reveal different groups and experiences."
      }
    ]
  },
  {
    "id": "silk-roads",
    "category": "World History",
    "title": "The networks called the Silk Roads",
    "desc": "Explore exchange across Eurasia and beyond.",
    "art": "network",
    "diagram": [
      "Routes",
      "Exchange",
      "Ideas"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://openstax.org/k12/social-studies",
    "slides": [
      {
        "title": "Not one road",
        "text": "The Silk Roads were overlapping land and maritime networks linking many regions. Routes changed with politics, geography and trade.",
        "label": "Networks",
        "art": "network"
      },
      {
        "title": "More than silk",
        "text": "Goods, technologies, religious ideas and artistic practices moved through these networks, often through multiple intermediaries.",
        "label": "Exchange",
        "art": "scales"
      },
      {
        "title": "Cities and institutions",
        "text": "Markets, caravan stops and ports helped organize exchange. Governments and local communities shaped trade through taxes, protection and rules.",
        "label": "Cities",
        "art": "timeline"
      },
      {
        "title": "Costs and consequences",
        "text": "Long-distance connections could spread disease as well as knowledge and goods. Exchange was unequal and changed societies in diverse ways.",
        "label": "Consequences",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "Were the Silk Roads a single continuous highway?",
        "options": [
          "Yes",
          "No"
        ],
        "correct": 1,
        "why": "They were interconnected and changing routes."
      },
      {
        "q": "What besides goods moved through these networks?",
        "options": [
          "Ideas and technologies",
          "Nothing else",
          "Only coins"
        ],
        "correct": 0,
        "why": "Trade networks also carried cultural and technical knowledge."
      }
    ]
  },
  {
    "id": "printing",
    "category": "World History",
    "title": "How printing transformed information",
    "desc": "Explore technologies that changed access to texts.",
    "art": "network",
    "diagram": [
      "Printing",
      "Copies",
      "Readers"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://openstax.org/k12/social-studies",
    "slides": [
      {
        "title": "Multiple histories",
        "text": "Printing techniques developed in different societies. East Asian traditions included woodblock and movable-type printing before Gutenberg's European press.",
        "label": "Origins",
        "art": "network"
      },
      {
        "title": "Repeatable production",
        "text": "Movable type and mechanical printing could reproduce texts at scale under suitable economic and technical conditions.",
        "label": "Production",
        "art": "scales"
      },
      {
        "title": "Access and institutions",
        "text": "Printing affected religious debates, scholarship, administration and commerce. Literacy and access remained uneven.",
        "label": "Access",
        "art": "timeline"
      },
      {
        "title": "New information problems",
        "text": "Easier reproduction spread accurate and inaccurate claims alike. Censorship, copyright and publishing institutions evolved in response.",
        "label": "Consequences",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "Did printing exist in East Asia before Gutenberg?",
        "options": [
          "Yes",
          "No"
        ],
        "correct": 0,
        "why": "Woodblock and movable-type techniques had earlier East Asian histories."
      },
      {
        "q": "Does cheaper reproduction guarantee accurate information?",
        "options": [
          "Yes",
          "No"
        ],
        "correct": 1,
        "why": "The technology can spread both reliable and unreliable material."
      }
    ]
  },
  {
    "id": "archaeology",
    "category": "Anthropology",
    "title": "How archaeologists read the past",
    "desc": "Discover material evidence, context and dating.",
    "art": "network",
    "diagram": [
      "Artifact",
      "Context",
      "Date"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://library.si.edu/topic",
    "slides": [
      {
        "title": "Material traces",
        "text": "Artifacts, structures, environmental remains and human-made changes can provide evidence about past activities.",
        "label": "Evidence",
        "art": "network"
      },
      {
        "title": "Context matters",
        "text": "An object's location and relationships with surrounding material help interpret it. Removing it without documentation can destroy information.",
        "label": "Context",
        "art": "scales"
      },
      {
        "title": "Dating methods",
        "text": "Relative dating establishes sequences; methods such as radiocarbon dating estimate ages for suitable materials under specific assumptions.",
        "label": "Dating",
        "art": "timeline"
      },
      {
        "title": "Interpretation and ethics",
        "text": "Archaeological conclusions can change with new evidence. Work should respect legal requirements, communities and cultural heritage.",
        "label": "Ethics",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "Why document where an artifact was found?",
        "options": [
          "Its context can reveal relationships and use",
          "Location is never relevant",
          "It makes the artifact newer"
        ],
        "correct": 0,
        "why": "Context is central to archaeological interpretation."
      },
      {
        "q": "Can radiocarbon dating directly date every kind of object?",
        "options": [
          "Yes",
          "No"
        ],
        "correct": 1,
        "why": "It applies to appropriate carbon-bearing materials and conditions."
      }
    ]
  },
  {
    "id": "supply-chains",
    "category": "Systems & Logistics",
    "title": "How products reach the shelf",
    "desc": "Understand the networks behind everyday goods.",
    "art": "network",
    "diagram": [
      "Supplier",
      "Production",
      "Delivery"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://openstax.org/k12/cte",
    "slides": [
      {
        "title": "A connected network",
        "text": "Supply chains include suppliers, production, storage, transport and customers. Information and money flow alongside goods.",
        "label": "Network",
        "art": "network"
      },
      {
        "title": "Lead time",
        "text": "Lead time is the interval between initiating a process or order and its completion. Delays can propagate through dependent activities.",
        "label": "Lead time",
        "art": "scales"
      },
      {
        "title": "Buffers and trade-offs",
        "text": "Inventory and backup suppliers can reduce certain disruption risks, but they carry costs. Optimal buffers depend on demand and uncertainty.",
        "label": "Buffers",
        "art": "timeline"
      },
      {
        "title": "The bullwhip effect",
        "text": "Small shifts in consumer demand can produce larger order fluctuations upstream when participants react to incomplete information.",
        "label": "Feedback",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "What is lead time?",
        "options": [
          "Time from initiation to completion",
          "The total price of a product",
          "The number of employees"
        ],
        "correct": 0,
        "why": "Lead time describes elapsed time across a process."
      },
      {
        "q": "Why maintain a buffer?",
        "options": [
          "To reduce exposure to some disruptions",
          "To eliminate all costs",
          "To ensure demand never changes"
        ],
        "correct": 0,
        "why": "Buffers can absorb variability, at a cost."
      }
    ]
  },
  {
    "id": "systems-thinking",
    "category": "Systems & Logistics",
    "title": "Thinking in feedback loops",
    "desc": "Understand why systems respond in unexpected ways.",
    "art": "network",
    "diagram": [
      "Input",
      "Feedback",
      "Outcome"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://openstax.org/k12/cte",
    "slides": [
      {
        "title": "Connections matter",
        "text": "A system contains interacting elements. Changing one part can alter behavior elsewhere, sometimes after a delay.",
        "label": "Connections",
        "art": "network"
      },
      {
        "title": "Reinforcing loops",
        "text": "A reinforcing loop amplifies a change. For example, accumulated positive returns can increase the amount earning future returns.",
        "label": "Reinforcement",
        "art": "scales"
      },
      {
        "title": "Balancing loops",
        "text": "A balancing loop counteracts deviation. A thermostat can turn heating on when temperature falls below a chosen setpoint.",
        "label": "Balance",
        "art": "timeline"
      },
      {
        "title": "Delays and boundaries",
        "text": "Feedback may arrive late, causing overshoot or instability. Define what is inside the system and what assumptions are being made.",
        "label": "Delays",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "Which is an example of balancing feedback?",
        "options": [
          "A thermostat responding to a temperature gap",
          "Unbounded compound growth",
          "A disconnected switch"
        ],
        "correct": 0,
        "why": "The response counteracts a deviation from a target."
      },
      {
        "q": "Can delays make feedback harder to manage?",
        "options": [
          "Yes",
          "No"
        ],
        "correct": 0,
        "why": "Delayed responses may cause overcorrection or oscillation."
      }
    ]
  }
]);
// Original interdisciplinary expansion: academic foundations and everyday systems.
courses.push(...[
  {
    "id": "algorithms",
    "category": "Computer Science",
    "title": "Algorithms: instructions that solve problems",
    "desc": "Understand inputs, decisions and efficient procedures.",
    "art": "network",
    "diagram": [
      "Input",
      "Procedure",
      "Output"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://openstax.org/books/introduction-computer-science/pages/index",
    "slides": [
      {
        "title": "A precise procedure",
        "text": "An algorithm specifies steps for solving a problem. A sorting algorithm receives a collection and returns it in an intended order.",
        "label": "Procedure",
        "art": "network"
      },
      {
        "title": "Search by elimination",
        "text": "Binary search checks the middle of a sorted collection, discards the half that cannot contain the target, and repeats until it succeeds or runs out of candidates.",
        "label": "Search",
        "art": "scales"
      },
      {
        "title": "Cost as inputs grow",
        "text": "Linear search may inspect all n items. Binary search uses at most about log₂(n) comparisons plus a small constant on an efficiently indexed, sorted collection.",
        "label": "Efficiency",
        "art": "timeline"
      },
      {
        "title": "Correctness comes first",
        "text": "A fast algorithm that produces the wrong result is not useful. Test normal inputs, empty inputs and edge cases before comparing performance.",
        "label": "Correctness",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "Which condition makes ordinary binary search suitable?",
        "options": [
          "Every item has the same value",
          "The collection is sorted and efficiently indexed",
          "The collection contains exactly two items"
        ],
        "correct": 1,
        "why": "Binary search depends on ordering and efficient access to the middle."
      },
      {
        "q": "If a procedure fails on an empty input, what should be checked first?",
        "options": [
          "Its display color",
          "Its average running time",
          "Its correctness for edge cases"
        ],
        "correct": 2,
        "why": "A valid procedure must handle the inputs specified by its contract."
      }
    ]
  },
  {
    "id": "operating-systems",
    "category": "Computer Science",
    "title": "The invisible manager inside a computer",
    "desc": "Learn what operating systems do with programs and hardware.",
    "art": "network",
    "diagram": [
      "Processes",
      "Memory",
      "Devices"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://openstax.org/books/introduction-computer-science/pages/index",
    "slides": [
      {
        "title": "An abstraction layer",
        "text": "An operating system manages resources and provides interfaces through which applications request services without controlling every hardware detail directly.",
        "label": "Abstraction",
        "art": "network"
      },
      {
        "title": "Processes and scheduling",
        "text": "A process is a running instance of a program with associated resources. A scheduler allocates processor time among runnable threads or processes.",
        "label": "Scheduling",
        "art": "scales"
      },
      {
        "title": "Virtual memory",
        "text": "Virtual addresses are translated into physical memory locations through hardware and operating-system mechanisms. Isolation helps prevent applications from accessing each other's memory directly.",
        "label": "Memory",
        "art": "timeline"
      },
      {
        "title": "Files and permissions",
        "text": "File systems organize persistent data. Access controls can restrict which users or processes read, modify or execute resources.",
        "label": "Permissions",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "Why does a scheduler exist?",
        "options": [
          "To permanently dedicate every CPU core to one app",
          "To compress every file",
          "To allocate CPU time to runnable work"
        ],
        "correct": 2,
        "why": "Scheduling coordinates work competing for processor time."
      },
      {
        "q": "What helps isolate one application's memory from another?",
        "options": [
          "Virtual memory and access protection",
          "A different desktop wallpaper",
          "The monitor's refresh rate"
        ],
        "correct": 0,
        "why": "Address translation and protections constrain memory access."
      }
    ]
  },
  {
    "id": "databases",
    "category": "Computer Science",
    "title": "How databases organize information",
    "desc": "Explore tables, keys and transactions.",
    "art": "network",
    "diagram": [
      "Tables",
      "Keys",
      "Transactions"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://openstax.org/books/introduction-computer-science/pages/index",
    "slides": [
      {
        "title": "Rows and columns",
        "text": "A relational database represents data in tables. A row can describe an order, while columns describe attributes such as amount and date.",
        "label": "Tables",
        "art": "network"
      },
      {
        "title": "Identifiers",
        "text": "A primary key uniquely identifies a row. A foreign key can reference a key in another table, connecting related records.",
        "label": "Keys",
        "art": "scales"
      },
      {
        "title": "Queries and indexes",
        "text": "A query asks for selected data. An index can accelerate suitable lookups at the cost of storage and additional maintenance during writes.",
        "label": "Queries",
        "art": "timeline"
      },
      {
        "title": "All or nothing",
        "text": "A transaction groups operations. Atomicity ensures the transaction's changes either take effect together or do not take effect.",
        "label": "Transactions",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "What does a primary key provide?",
        "options": [
          "A unique row identifier",
          "Automatic encryption of all records",
          "A required alphabetical order"
        ],
        "correct": 0,
        "why": "Primary keys identify records uniquely."
      },
      {
        "q": "Why might a bank group a debit and credit into one transaction?",
        "options": [
          "To prevent every network delay",
          "To ensure both updates succeed together or neither does",
          "To eliminate the need for account identifiers"
        ],
        "correct": 1,
        "why": "Atomicity prevents partial completion of related changes."
      }
    ]
  },
  {
    "id": "binary",
    "category": "Computer Science",
    "title": "How computers represent numbers",
    "desc": "Learn bits, bytes and binary place value.",
    "art": "network",
    "diagram": [
      "Bits",
      "Places",
      "Encoding"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://openstax.org/books/introduction-computer-science/pages/index",
    "slides": [
      {
        "title": "Two symbols",
        "text": "Binary uses digits 0 and 1. Each position in an unsigned binary integer represents a power of two.",
        "label": "Bits",
        "art": "network"
      },
      {
        "title": "Decode a number",
        "text": "The binary value 1011 equals 8 + 0 + 2 + 1, or decimal 11. A leading zero does not change its value.",
        "label": "Place value",
        "art": "scales"
      },
      {
        "title": "A byte",
        "text": "A byte conventionally contains eight bits and can represent 256 distinct bit patterns. Those patterns can be interpreted in different ways.",
        "label": "Byte",
        "art": "timeline"
      },
      {
        "title": "Meaning depends on encoding",
        "text": "The same bits may represent a number, a character, or a color component. The interpretation depends on a format or encoding agreement.",
        "label": "Encoding",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "What is binary 1101 in decimal?",
        "options": [
          "11",
          "15",
          "13"
        ],
        "correct": 2,
        "why": "8 + 4 + 0 + 1 = 13."
      },
      {
        "q": "How many distinct patterns fit in eight bits?",
        "options": [
          "128",
          "256",
          "512"
        ],
        "correct": 1,
        "why": "Each bit has two possibilities, giving 2⁸ patterns."
      }
    ]
  },
  {
    "id": "compression",
    "category": "Computer Science",
    "title": "Making information smaller",
    "desc": "Distinguish lossless and lossy compression.",
    "art": "network",
    "diagram": [
      "Redundancy",
      "Encoding",
      "Quality"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://openstax.org/books/introduction-computer-science/pages/index",
    "slides": [
      {
        "title": "Patterns save space",
        "text": "A sequence containing many repeated symbols can sometimes be represented using fewer symbols plus instructions for reconstructing the sequence.",
        "label": "Redundancy",
        "art": "network"
      },
      {
        "title": "Lossless compression",
        "text": "Lossless methods reconstruct the original data exactly. ZIP archives and PNG images are common examples.",
        "label": "Lossless",
        "art": "scales"
      },
      {
        "title": "Lossy compression",
        "text": "Lossy methods discard or approximate some information to reduce size. Many audio and image codecs exploit details that may be less perceptible.",
        "label": "Lossy",
        "art": "timeline"
      },
      {
        "title": "Trade-offs",
        "text": "Compression can require processing time and may not shrink already compressed or random-looking data. Choose the method according to required fidelity and cost.",
        "label": "Trade-off",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "Which method is appropriate if every original byte must be recoverable?",
        "options": [
          "Lossy image compression",
          "Lossless compression",
          "Lowering the display resolution"
        ],
        "correct": 1,
        "why": "Lossless methods preserve the original data."
      },
      {
        "q": "Why might a ZIP archive of an already compressed file be almost the same size?",
        "options": [
          "It contains little exploitable redundancy",
          "ZIP requires a network connection",
          "Compression always halves data"
        ],
        "correct": 0,
        "why": "Existing compression can remove many easy-to-exploit patterns."
      }
    ]
  },
  {
    "id": "derivative",
    "category": "Mathematics",
    "title": "Calculus: measuring change",
    "desc": "Build intuition for slopes and instantaneous rates.",
    "art": "network",
    "diagram": [
      "Function",
      "Slope",
      "Rate"
    ],
    "difficulty": "Intermediate",
    "format": "Course",
    "source": "https://openstax.org/books/calculus-volume-1/pages/index",
    "slides": [
      {
        "title": "Average change",
        "text": "If a vehicle travels 60 km in two hours, its average speed is 30 km/h. An average does not reveal its speed at every instant.",
        "label": "Average",
        "art": "network"
      },
      {
        "title": "Instantaneous change",
        "text": "A derivative is the limit of difference quotients where that limit exists. Geometrically, it describes the slope of a tangent to a function's graph.",
        "label": "Derivative",
        "art": "scales"
      },
      {
        "title": "A simple rule",
        "text": "For f(x)=x², the derivative is 2x. At x=3, the instantaneous slope is 6, even though the graph's slope changes across its domain.",
        "label": "Power rule",
        "art": "timeline"
      },
      {
        "title": "Units tell a story",
        "text": "If position is measured in meters and time in seconds, the derivative has units of meters per second. Differentiating velocity gives acceleration where defined.",
        "label": "Units",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "For f(x)=x², what is the slope at x=4?",
        "options": [
          "4",
          "16",
          "8"
        ],
        "correct": 2,
        "why": "The derivative 2x evaluates to 8."
      },
      {
        "q": "What does differentiating position with respect to time give?",
        "options": [
          "Velocity",
          "Mass",
          "Total distance in every case"
        ],
        "correct": 0,
        "why": "The derivative of position describes instantaneous velocity."
      }
    ]
  },
  {
    "id": "integral",
    "category": "Mathematics",
    "title": "Calculus: adding up tiny changes",
    "desc": "Understand accumulation and definite integrals.",
    "art": "network",
    "diagram": [
      "Rate",
      "Slices",
      "Total"
    ],
    "difficulty": "Intermediate",
    "format": "Course",
    "source": "https://openstax.org/books/calculus-volume-1/pages/index",
    "slides": [
      {
        "title": "Accumulation",
        "text": "If water enters a container at two liters per minute for five minutes, ten liters enter. A varying rate requires a more general calculation.",
        "label": "Rate",
        "art": "network"
      },
      {
        "title": "Approximate with slices",
        "text": "Split an interval into small pieces and multiply a representative rate by each piece's width. Sum those contributions to approximate accumulation.",
        "label": "Slices",
        "art": "scales"
      },
      {
        "title": "A definite integral",
        "text": "Taking a suitable limit of these sums yields a definite integral. It represents signed area under a curve, with values below the axis subtracting.",
        "label": "Integral",
        "art": "timeline"
      },
      {
        "title": "Connection to derivatives",
        "text": "The fundamental theorem of calculus connects accumulation to differentiation. When conditions hold, an antiderivative evaluated at the interval endpoints gives the integral.",
        "label": "Connection",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "A constant inflow of 3 L/min lasts 4 min. How much enters?",
        "options": [
          "7 L",
          "12 L",
          "0.75 L"
        ],
        "correct": 1,
        "why": "Rate multiplied by duration gives 12 liters."
      },
      {
        "q": "What happens to contributions below the horizontal axis in a signed integral?",
        "options": [
          "They are ignored",
          "They are always added as positive area",
          "They contribute negatively"
        ],
        "correct": 2,
        "why": "A definite integral counts signed area."
      }
    ]
  },
  {
    "id": "logarithms",
    "category": "Mathematics",
    "title": "Logarithms: turning growth into steps",
    "desc": "Understand inverse powers and multiplicative scales.",
    "art": "network",
    "diagram": [
      "Base",
      "Power",
      "Logarithm"
    ],
    "difficulty": "Intermediate",
    "format": "Course",
    "source": "https://openstax.org/books/precalculus-2e/pages/1-introduction-to-functions",
    "slides": [
      {
        "title": "An inverse question",
        "text": "An exponential asks what value a base raised to a power produces. A logarithm asks which exponent produced a given positive value.",
        "label": "Inverse",
        "art": "network"
      },
      {
        "title": "Powers of ten",
        "text": "Because 10³=1000, log₁₀(1000)=3. For base ten, each increase of one in the logarithm corresponds to a tenfold increase in the original value.",
        "label": "Base ten",
        "art": "scales"
      },
      {
        "title": "Products become sums",
        "text": "For positive x and y, log(xy)=log(x)+log(y) using the same valid base. This converts multiplicative relationships into additive ones.",
        "label": "Products",
        "art": "timeline"
      },
      {
        "title": "Read scales carefully",
        "text": "Logarithmic axes can display values spanning many orders of magnitude. Equal distances along such an axis represent equal ratios, not equal absolute differences.",
        "label": "Scale",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "What is log₁₀(100000)?",
        "options": [
          "5",
          "4",
          "10000"
        ],
        "correct": 0,
        "why": "10 to the fifth power is 100000."
      },
      {
        "q": "On a base-ten logarithmic axis, equal steps usually mean what?",
        "options": [
          "Equal absolute differences",
          "Equal ratios",
          "Equal elapsed time"
        ],
        "correct": 1,
        "why": "A one-unit logarithmic difference corresponds to a tenfold ratio."
      }
    ]
  },
  {
    "id": "trigonometry",
    "category": "Mathematics",
    "title": "Triangles that measure the world",
    "desc": "Use angles and side ratios to reason about distance.",
    "art": "network",
    "diagram": [
      "Angle",
      "Ratio",
      "Distance"
    ],
    "difficulty": "Intermediate",
    "format": "Course",
    "source": "https://openstax.org/books/precalculus-2e/pages/1-introduction-to-functions",
    "slides": [
      {
        "title": "Right triangles",
        "text": "A right triangle contains a 90-degree angle. Its hypotenuse is the longest side, opposite that right angle.",
        "label": "Triangle",
        "art": "network"
      },
      {
        "title": "Three ratios",
        "text": "For an acute angle, sine equals opposite over hypotenuse, cosine adjacent over hypotenuse, and tangent opposite over adjacent.",
        "label": "Ratios",
        "art": "scales"
      },
      {
        "title": "Measure indirectly",
        "text": "On level ground, an observer 20 m from a vertical pole sees its top at 45 degrees above eye level. Since tan(45°)=1, the top is 20 m above eye level.",
        "label": "Application",
        "art": "timeline"
      },
      {
        "title": "Beyond triangles",
        "text": "Sine and cosine extend to the unit circle. Their periodic behavior helps model idealized waves, rotations and oscillations.",
        "label": "Periodicity",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "Which ratio is tangent in a right triangle?",
        "options": [
          "Adjacent/hypotenuse",
          "Opposite/hypotenuse",
          "Opposite/adjacent"
        ],
        "correct": 2,
        "why": "Tangent relates the opposite and adjacent legs."
      },
      {
        "q": "Why add eye height in the pole example to find total height?",
        "options": [
          "The angle measures height relative to the observer's eye",
          "Tangent measures the pole's mass",
          "The ground is always curved"
        ],
        "correct": 0,
        "why": "The calculated vertical difference starts at eye level."
      }
    ]
  },
  {
    "id": "neural-signals",
    "category": "Neuroscience",
    "title": "How neurons send signals",
    "desc": "Follow electrical and chemical communication in the nervous system.",
    "art": "network",
    "diagram": [
      "Voltage",
      "Impulse",
      "Synapse"
    ],
    "difficulty": "Intermediate",
    "format": "Course",
    "source": "https://openstax.org/books/anatomy-and-physiology-2e/pages/1-introduction",
    "slides": [
      {
        "title": "Specialized cells",
        "text": "Neurons receive and transmit information through electrical and chemical signals. Their shapes and functions vary across the nervous system.",
        "label": "Neuron",
        "art": "network"
      },
      {
        "title": "Electrical gradients",
        "text": "Ion concentrations and selective membrane permeability help establish a resting membrane potential. Ion channels can change that voltage.",
        "label": "Voltage",
        "art": "scales"
      },
      {
        "title": "An action potential",
        "text": "When appropriate threshold conditions are reached, voltage-dependent channels produce a rapidly propagating electrical signal along an axon.",
        "label": "Impulse",
        "art": "timeline"
      },
      {
        "title": "Across a synapse",
        "text": "At many synapses, an arriving action potential triggers release of neurotransmitter. The transmitter binds receptors and changes the receiving cell's behavior.",
        "label": "Synapse",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "What carries an action potential along an axon?",
        "options": [
          "A sequence of membrane voltage changes",
          "A stream of red blood cells",
          "A pulse of visible light"
        ],
        "correct": 0,
        "why": "Voltage-dependent ion channels support propagation."
      },
      {
        "q": "At a typical chemical synapse, what crosses the gap?",
        "options": [
          "The entire sending neuron",
          "Neurotransmitter molecules",
          "A new axon each time"
        ],
        "correct": 1,
        "why": "Released neurotransmitters act on receptors across the synapse."
      }
    ]
  },
  {
    "id": "plasticity",
    "category": "Neuroscience",
    "title": "How experience changes the brain",
    "desc": "Explore synaptic plasticity without exaggerated promises.",
    "art": "network",
    "diagram": [
      "Experience",
      "Synapse",
      "Change"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://openstax.org/books/anatomy-and-physiology-2e/pages/1-introduction",
    "slides": [
      {
        "title": "A changing network",
        "text": "Neural plasticity refers to the nervous system's capacity to change with experience, development or injury. Its mechanisms operate at multiple scales.",
        "label": "Plasticity",
        "art": "network"
      },
      {
        "title": "Synaptic strength",
        "text": "Repeated activity under certain conditions can alter how strongly one neuron influences another. Long-term potentiation and depression are examples of synaptic plasticity.",
        "label": "Synapse",
        "art": "scales"
      },
      {
        "title": "Practice matters",
        "text": "Learning a skill can change activity patterns and neural connections. The type of practice and feedback influence what improves.",
        "label": "Practice",
        "art": "timeline"
      },
      {
        "title": "Plastic does not mean unlimited",
        "text": "Changes depend on age, health, environment and the task. Plasticity does not imply every injury is reversible or every skill is equally attainable.",
        "label": "Limits",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "What can synaptic plasticity change?",
        "options": [
          "The strength of communication between neurons",
          "The number of protons in carbon",
          "The laws of physics"
        ],
        "correct": 0,
        "why": "Synapses can change their influence on receiving cells."
      },
      {
        "q": "Does neuroplasticity guarantee complete recovery from every brain injury?",
        "options": [
          "Yes, after enough practice",
          "No; recovery varies considerably",
          "Only in adults"
        ],
        "correct": 1,
        "why": "Plasticity has biological and clinical limits."
      }
    ]
  },
  {
    "id": "drug-action",
    "category": "Medicine",
    "title": "How medicines affect the body",
    "desc": "Understand dose, receptors and the movement of drugs.",
    "art": "network",
    "diagram": [
      "Absorption",
      "Action",
      "Elimination"
    ],
    "difficulty": "Intermediate",
    "format": "Course",
    "source": "https://medlineplus.gov/",
    "slides": [
      {
        "title": "A drug reaches its target",
        "text": "Pharmacokinetics describes how the body handles a drug, including absorption, distribution, metabolism and excretion.",
        "label": "Movement",
        "art": "network"
      },
      {
        "title": "A drug changes function",
        "text": "Pharmacodynamics describes what a drug does to the body. Some drugs bind receptors, while others affect enzymes, channels or other processes.",
        "label": "Action",
        "art": "scales"
      },
      {
        "title": "Dose and response",
        "text": "Benefits and adverse effects may change with dose. Different people may respond differently because of physiology, interactions and disease.",
        "label": "Dose",
        "art": "timeline"
      },
      {
        "title": "Safe use",
        "text": "Medicines have specific indications, risks and instructions. Do not change prescribed doses or combine medicines based solely on a general lesson; consult a qualified professional.",
        "label": "Safety",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "Which term describes how the body absorbs and eliminates a drug?",
        "options": [
          "Pharmacodynamics",
          "Pharmacokinetics",
          "Histology"
        ],
        "correct": 1,
        "why": "Pharmacokinetics concerns the drug's movement and handling."
      },
      {
        "q": "Why can a higher dose be unsafe?",
        "options": [
          "Benefits and adverse effects can both depend on dose",
          "All drugs have identical effects at every dose",
          "Every medicine is removed instantly"
        ],
        "correct": 0,
        "why": "Dose-response relationships include potential toxicity."
      }
    ]
  },
  {
    "id": "immune-system",
    "category": "Medicine",
    "title": "The body's layered defenses",
    "desc": "Distinguish innate and adaptive immune responses.",
    "art": "network",
    "diagram": [
      "Barrier",
      "Innate",
      "Adaptive"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://openstax.org/books/anatomy-and-physiology-2e/pages/1-introduction",
    "slides": [
      {
        "title": "Barriers first",
        "text": "Skin, mucous membranes and other defenses reduce entry of pathogens. These defenses are part of innate protection.",
        "label": "Barrier",
        "art": "network"
      },
      {
        "title": "Rapid recognition",
        "text": "Innate immune cells recognize common danger or microbial patterns. Inflammation can recruit cells and substances to affected tissue.",
        "label": "Innate",
        "art": "scales"
      },
      {
        "title": "Specific responses",
        "text": "Adaptive immunity involves lymphocytes with specific recognition capabilities. B cells can produce antibodies, while T cells have roles in coordination and cellular responses.",
        "label": "Adaptive",
        "art": "timeline"
      },
      {
        "title": "Regulation matters",
        "text": "Immune responses must be controlled as well as activated. Autoimmune conditions involve inappropriate responses against the body's own components.",
        "label": "Regulation",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "Which is an example of a barrier defense?",
        "options": [
          "Intact skin",
          "A memory B cell only",
          "A red blood cell"
        ],
        "correct": 0,
        "why": "Skin helps prevent pathogens from entering tissues."
      },
      {
        "q": "Which cells can differentiate into antibody-secreting plasma cells?",
        "options": [
          "Platelets",
          "B lymphocytes",
          "Skeletal muscle cells"
        ],
        "correct": 1,
        "why": "Activated B cells can become plasma cells."
      }
    ]
  },
  {
    "id": "hormones",
    "category": "Human Biology",
    "title": "How hormones coordinate the body",
    "desc": "Explore signaling, receptors and feedback.",
    "art": "network",
    "diagram": [
      "Gland",
      "Signal",
      "Target"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://openstax.org/books/anatomy-and-physiology-2e/pages/1-introduction",
    "slides": [
      {
        "title": "Chemical messengers",
        "text": "Endocrine hormones are chemical signals often released into the bloodstream. Target cells respond when they possess suitable receptors and signaling machinery.",
        "label": "Signal",
        "art": "network"
      },
      {
        "title": "One signal, different targets",
        "text": "A hormone may act in multiple tissues. Its effects depend on receptor types, concentrations and the internal state of those tissues.",
        "label": "Receptors",
        "art": "scales"
      },
      {
        "title": "Feedback loops",
        "text": "Many endocrine systems use negative feedback. A rise in a regulated hormone or related variable can reduce further secretion through regulatory pathways.",
        "label": "Feedback",
        "art": "timeline"
      },
      {
        "title": "A glucose example",
        "text": "Insulin helps regulate blood glucose by influencing glucose uptake and storage and reducing glucose production by the liver. Other hormones also contribute.",
        "label": "Glucose",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "Why do only certain cells respond to a particular hormone?",
        "options": [
          "They have suitable receptors and signaling mechanisms",
          "They are always closest to the heart",
          "Every hormone enters only one cell"
        ],
        "correct": 0,
        "why": "Receptor expression and signaling determine responsiveness."
      },
      {
        "q": "What does negative feedback generally do?",
        "options": [
          "Amplifies every disturbance",
          "Counteracts a deviation in a regulated variable",
          "Prevents all biological change"
        ],
        "correct": 1,
        "why": "Negative feedback helps stabilize a regulated system."
      }
    ]
  },
  {
    "id": "christianity",
    "category": "World Religions",
    "title": "Christianity: origins and traditions",
    "desc": "Explore the central role of Jesus and diverse Christian communities.",
    "art": "network",
    "diagram": [
      "Jesus",
      "Scripture",
      "Traditions"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://www.britannica.com/topic/religion",
    "slides": [
      {
        "title": "Historical origins",
        "text": "Christianity emerged in the first century CE within the Jewish context of Roman-ruled Judea. Early communities formed around teachings concerning Jesus of Nazareth.",
        "label": "Origins",
        "art": "network"
      },
      {
        "title": "Central teachings",
        "text": "Most Christian traditions affirm Jesus Christ's central role, including his death and resurrection as core articles of faith. Interpretations of salvation and doctrine differ.",
        "label": "Beliefs",
        "art": "scales"
      },
      {
        "title": "Sacred texts",
        "text": "The Christian Bible comprises the Old and New Testaments, with some differences in canon among traditions. The New Testament includes four canonical Gospels.",
        "label": "Scripture",
        "art": "timeline"
      },
      {
        "title": "Diverse communities",
        "text": "Catholic, Orthodox, Protestant and other Christian traditions have distinctive histories, practices and institutions. Individual beliefs also vary within communities.",
        "label": "Traditions",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "In which historical context did Christianity emerge?",
        "options": [
          "Medieval Scandinavia",
          "First-century Jewish society under Roman rule",
          "Industrial-era America"
        ],
        "correct": 1,
        "why": "Its earliest communities arose in the first-century eastern Roman world."
      },
      {
        "q": "Do all Christian traditions use exactly the same biblical canon?",
        "options": [
          "No, some canons differ",
          "Yes, without exception",
          "Only the New Testament exists"
        ],
        "correct": 0,
        "why": "There are differences in accepted Old Testament books."
      }
    ]
  },
  {
    "id": "islam",
    "category": "World Religions",
    "title": "Islam: belief, practice and community",
    "desc": "Learn about the Quran, Muhammad and central religious practices.",
    "art": "network",
    "diagram": [
      "Faith",
      "Scripture",
      "Practice"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://www.britannica.com/topic/religion",
    "slides": [
      {
        "title": "Historical setting",
        "text": "Islam emerged in seventh-century Arabia. Muslims regard Muhammad as a prophet and the Quran as revelation from God.",
        "label": "Origins",
        "art": "network"
      },
      {
        "title": "One God",
        "text": "The oneness of God, or tawhid, is central to Islamic belief. Islamic teachings place importance on worship, moral conduct and accountability.",
        "label": "Faith",
        "art": "scales"
      },
      {
        "title": "Five pillars",
        "text": "The Five Pillars commonly summarize the profession of faith, prayer, charitable giving, fasting during Ramadan and pilgrimage to Mecca for those able to undertake it.",
        "label": "Practice",
        "art": "timeline"
      },
      {
        "title": "Diversity",
        "text": "Sunni and Shia communities have distinct historical developments and traditions. Islamic religious life also varies by legal school, region, community and individual.",
        "label": "Traditions",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "Which text is central to Islam?",
        "options": [
          "The Quran",
          "The Vedas",
          "The Analects"
        ],
        "correct": 0,
        "why": "Muslims regard the Quran as divine revelation."
      },
      {
        "q": "Does Islam consist of one uniform set of practices in every community?",
        "options": [
          "Yes, without any variation",
          "No; traditions and practices vary",
          "Only one region has Muslims"
        ],
        "correct": 1,
        "why": "Muslim communities are diverse."
      }
    ]
  },
  {
    "id": "hinduism",
    "category": "World Religions",
    "title": "Hindu traditions and the paths of life",
    "desc": "Explore dharma, karma and diverse forms of worship.",
    "art": "network",
    "diagram": [
      "Dharma",
      "Karma",
      "Moksha"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://www.britannica.com/topic/religion",
    "slides": [
      {
        "title": "Many traditions",
        "text": "Hinduism encompasses diverse religious and philosophical traditions with deep roots in South Asia. It has no single historical founder or universally binding creed.",
        "label": "Traditions",
        "art": "network"
      },
      {
        "title": "Dharma and karma",
        "text": "Dharma can refer to duty, ethics, order or right conduct depending on context. Karma concerns actions and their consequences, understood differently across traditions.",
        "label": "Ethics",
        "art": "scales"
      },
      {
        "title": "Liberation",
        "text": "Many Hindu traditions discuss samsara, the cycle of rebirth, and moksha, liberation from it. Paths to liberation and philosophical accounts differ.",
        "label": "Liberation",
        "art": "timeline"
      },
      {
        "title": "Texts and devotion",
        "text": "The Vedas, Upanishads, Bhagavad Gita and other texts are important in different traditions. Worship can emphasize devotion to particular deities, ritual, knowledge or other approaches.",
        "label": "Practice",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "Which concept commonly refers to liberation from samsara?",
        "options": [
          "Moksha",
          "Tawhid",
          "Baptism"
        ],
        "correct": 0,
        "why": "Moksha is liberation in many Hindu philosophical traditions."
      },
      {
        "q": "Why is it misleading to describe Hinduism as having one universally accepted creed?",
        "options": [
          "It has diverse schools, practices and philosophical views",
          "It has no sacred texts",
          "It originated in a single modern congregation"
        ],
        "correct": 0,
        "why": "Hindu traditions vary considerably."
      }
    ]
  },
  {
    "id": "judaism",
    "category": "World Religions",
    "title": "Judaism: covenant, learning and community",
    "desc": "Explore Jewish religion, texts and diverse traditions.",
    "art": "network",
    "diagram": [
      "Covenant",
      "Torah",
      "Practice"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://www.britannica.com/topic/religion",
    "slides": [
      {
        "title": "An ancient tradition",
        "text": "Judaism developed among the ancient Israelites and continues through diverse Jewish religious and cultural communities around the world.",
        "label": "Origins",
        "art": "network"
      },
      {
        "title": "Covenant and monotheism",
        "text": "Jewish religious traditions emphasize a relationship with one God, often described through covenant, obligations and communal remembrance.",
        "label": "Covenant",
        "art": "scales"
      },
      {
        "title": "Torah and interpretation",
        "text": "The Torah includes the Five Books of Moses. Rabbinic traditions draw on interpretation and discussion preserved in texts including the Mishnah and Talmud.",
        "label": "Learning",
        "art": "timeline"
      },
      {
        "title": "Diverse Jewish life",
        "text": "Shabbat, festivals, prayer and dietary practices are significant in many communities. Observance varies among religious movements, individuals and cultural identities.",
        "label": "Practice",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "What does Torah refer to in its narrower textual sense?",
        "options": [
          "The Five Books of Moses",
          "The four canonical Gospels",
          "The Quran"
        ],
        "correct": 0,
        "why": "The Torah comprises the first five books of the Hebrew Bible."
      },
      {
        "q": "Do all Jewish people follow identical religious practices?",
        "options": [
          "Yes",
          "No, observance and identities vary",
          "Only one Jewish community exists"
        ],
        "correct": 1,
        "why": "Jewish religious and cultural life is diverse."
      }
    ]
  },
  {
    "id": "poetry",
    "category": "Literature",
    "title": "How poetry makes meaning",
    "desc": "Explore imagery, rhythm and figurative language.",
    "art": "network",
    "diagram": [
      "Image",
      "Sound",
      "Meaning"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://www.poetryfoundation.org/education/glossary",
    "slides": [
      {
        "title": "Compression",
        "text": "Poems often use concentrated language, though they need not be short. Line breaks and spacing may shape emphasis and interpretation.",
        "label": "Form",
        "art": "network"
      },
      {
        "title": "Imagery",
        "text": "Sensory language can evoke sight, sound, smell, taste or touch. A concrete detail can communicate an abstract experience.",
        "label": "Imagery",
        "art": "scales"
      },
      {
        "title": "Figurative language",
        "text": "A metaphor describes one thing in terms of another; a simile makes an explicit comparison, often using like or as.",
        "label": "Metaphor",
        "art": "timeline"
      },
      {
        "title": "Read aloud and reread",
        "text": "Sound patterns, rhythm and pauses can influence meaning. Interpretations should draw on the text and acknowledge ambiguity rather than assume a single hidden code.",
        "label": "Interpretation",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "Which phrase is a simile?",
        "options": [
          "Time is a river",
          "Her voice was like rain",
          "The door closed"
        ],
        "correct": 1,
        "why": "The phrase uses an explicit comparison."
      },
      {
        "q": "Why consider a poem's line breaks?",
        "options": [
          "They can change emphasis, pacing and expectations",
          "They always indicate the author's age",
          "They remove all ambiguity"
        ],
        "correct": 0,
        "why": "Lineation is a meaningful feature of many poems."
      }
    ]
  },
  {
    "id": "narrative",
    "category": "Literature",
    "title": "Who is telling the story?",
    "desc": "Distinguish narrators, characters and points of view.",
    "art": "network",
    "diagram": [
      "Narrator",
      "Perspective",
      "Evidence"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://www.poetryfoundation.org/education/glossary",
    "slides": [
      {
        "title": "Narrator and author",
        "text": "A narrator is the voice that tells a story. A fictional narrator's views need not represent the actual author's views.",
        "label": "Narrator",
        "art": "network"
      },
      {
        "title": "Point of view",
        "text": "First-person narration uses an I perspective. Third-person narration may restrict access to one character's experience or move among multiple perspectives.",
        "label": "Perspective",
        "art": "scales"
      },
      {
        "title": "Unreliable narration",
        "text": "A narrator may misinterpret, omit or distort events. Contradictions and discrepancies can give readers reasons to question their account.",
        "label": "Reliability",
        "art": "timeline"
      },
      {
        "title": "Interpret from evidence",
        "text": "Ask what information is available, whose perspective is missing and how the narrative controls disclosure. Support interpretations with details from the text.",
        "label": "Evidence",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "Does a fictional narrator's belief automatically represent the author's own belief?",
        "options": [
          "No",
          "Yes, in every novel",
          "Only in third-person stories"
        ],
        "correct": 0,
        "why": "Narrative voice and author are distinct."
      },
      {
        "q": "What might signal an unreliable narrator?",
        "options": [
          "Consistent independently confirmed events",
          "Contradictions between their account and other evidence",
          "The use of paragraph breaks"
        ],
        "correct": 1,
        "why": "Discrepancies can undermine the reliability of the account."
      }
    ]
  },
  {
    "id": "rhetoric",
    "category": "Literature",
    "title": "The tools of persuasive language",
    "desc": "Explore credibility, emotion and reasoning in texts.",
    "art": "network",
    "diagram": [
      "Ethos",
      "Pathos",
      "Logos"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://www.poetryfoundation.org/education/glossary",
    "slides": [
      {
        "title": "A rhetorical situation",
        "text": "Persuasive communication occurs within a context involving an audience, purpose, speaker and constraints.",
        "label": "Context",
        "art": "network"
      },
      {
        "title": "Credibility",
        "text": "Ethos concerns the speaker's perceived character and credibility. Relevant expertise may support credibility but does not make every claim true.",
        "label": "Ethos",
        "art": "scales"
      },
      {
        "title": "Emotion",
        "text": "Pathos appeals to emotions and values. Emotional examples can communicate stakes but should not substitute for reliable evidence.",
        "label": "Pathos",
        "art": "timeline"
      },
      {
        "title": "Reasoning",
        "text": "Logos concerns arguments and evidence. Evaluate the premises, inferential steps and relevance of information, even when the writing is compelling.",
        "label": "Logos",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "A writer supports a claim with relevant data and reasoning. Which appeal is most directly involved?",
        "options": [
          "Pathos",
          "Logos",
          "Meter"
        ],
        "correct": 1,
        "why": "Logos concerns rational argument."
      },
      {
        "q": "Does a credible speaker guarantee that an argument is sound?",
        "options": [
          "Yes",
          "No",
          "Only if the audience agrees"
        ],
        "correct": 1,
        "why": "Credibility is not a substitute for evidence and valid reasoning."
      }
    ]
  },
  {
    "id": "diplomacy",
    "category": "International Relations",
    "title": "How countries negotiate with each other",
    "desc": "Understand diplomacy, agreements and national interests.",
    "art": "network",
    "diagram": [
      "Interests",
      "Dialogue",
      "Agreement"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://www.un.org/en/about-us/un-charter",
    "slides": [
      {
        "title": "Many kinds of actors",
        "text": "International relations includes states, international organizations, businesses and civil society. States remain important actors but are not the only ones.",
        "label": "Actors",
        "art": "network"
      },
      {
        "title": "Diplomacy",
        "text": "Diplomacy uses communication and negotiation to pursue interests, manage disagreement and build agreements. Formal and informal channels can coexist.",
        "label": "Dialogue",
        "art": "scales"
      },
      {
        "title": "Treaties",
        "text": "Treaties are international agreements governed by international law when they meet applicable requirements. Domestic approval processes and implementation vary.",
        "label": "Treaties",
        "art": "timeline"
      },
      {
        "title": "Cooperation and conflict",
        "text": "States may cooperate where interests overlap and disagree where interests diverge. Institutions can facilitate information sharing and commitments but do not eliminate conflict.",
        "label": "Cooperation",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "What is a central tool of diplomacy?",
        "options": [
          "Negotiation and communication",
          "The automatic elimination of borders",
          "A single worldwide election"
        ],
        "correct": 0,
        "why": "Diplomacy provides channels to manage interests and disputes."
      },
      {
        "q": "Do international institutions automatically eliminate disagreements among states?",
        "options": [
          "Yes",
          "No",
          "Only if a treaty has a title"
        ],
        "correct": 1,
        "why": "Institutions facilitate cooperation without guaranteeing it."
      }
    ]
  },
  {
    "id": "comparative-advantage",
    "category": "International Relations",
    "title": "Why trade can benefit different economies",
    "desc": "Understand opportunity costs and specialization.",
    "art": "network",
    "diagram": [
      "Cost",
      "Specialization",
      "Exchange"
    ],
    "difficulty": "Intermediate",
    "format": "Course",
    "source": "https://openstax.org/books/principles-economics-3e/pages/preface",
    "slides": [
      {
        "title": "Opportunity cost",
        "text": "The opportunity cost of producing a good is the value of the best forgone alternative. Relative costs matter even when one producer is more productive overall.",
        "label": "Cost",
        "art": "network"
      },
      {
        "title": "Comparative advantage",
        "text": "A producer has comparative advantage in a good when its opportunity cost is lower than another producer's opportunity cost for that good.",
        "label": "Advantage",
        "art": "scales"
      },
      {
        "title": "An example",
        "text": "If A gives up one unit of cloth for an extra unit of grain while B gives up three, A has comparative advantage in grain in this simplified example.",
        "label": "Specialization",
        "art": "timeline"
      },
      {
        "title": "Distribution and adjustment",
        "text": "Trade can increase aggregate gains under suitable conditions while creating costs for particular workers or firms. Policy choices involve distribution, resilience and other goals.",
        "label": "Distribution",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "Who has comparative advantage in grain in the example?",
        "options": [
          "A, because its opportunity cost is lower",
          "B, because its opportunity cost is higher",
          "Neither, because both can grow grain"
        ],
        "correct": 0,
        "why": "One unit of cloth forgone is less than three."
      },
      {
        "q": "Can an economy gain overall from trade while some workers lose income?",
        "options": [
          "No",
          "Yes",
          "Only if all production stops"
        ],
        "correct": 1,
        "why": "Aggregate gains do not guarantee gains for every individual."
      }
    ]
  },
  {
    "id": "soil",
    "category": "Agriculture",
    "title": "Soil: a living foundation",
    "desc": "Understand texture, organic matter and soil organisms.",
    "art": "network",
    "diagram": [
      "Minerals",
      "Organic matter",
      "Life"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://www.nrcs.usda.gov/conservation-basics/soil/soil-health/soil-health-management",
    "slides": [
      {
        "title": "A complex material",
        "text": "Soil contains mineral particles, organic matter, water, air and organisms. Their proportions and arrangement influence soil behavior.",
        "label": "Composition",
        "art": "network"
      },
      {
        "title": "Texture and structure",
        "text": "Texture describes relative proportions of sand, silt and clay. Structure describes how particles aggregate, affecting pore space and water movement.",
        "label": "Texture",
        "art": "scales"
      },
      {
        "title": "Living processes",
        "text": "Roots, fungi, bacteria and other organisms participate in nutrient cycling and soil formation. Soil conditions affect their activity.",
        "label": "Life",
        "art": "timeline"
      },
      {
        "title": "Protecting the resource",
        "text": "Ground cover, diverse rotations and appropriate disturbance management can reduce erosion and support soil functioning. Practices should suit local conditions.",
        "label": "Protection",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "What does soil texture describe?",
        "options": [
          "The relative amounts of sand, silt and clay",
          "The exact number of earthworms",
          "Only its color"
        ],
        "correct": 0,
        "why": "Texture is based on mineral particle-size fractions."
      },
      {
        "q": "Why can ground cover help soil?",
        "options": [
          "It prevents all soil chemistry",
          "It can reduce erosion and protect habitat",
          "It eliminates the need for water"
        ],
        "correct": 1,
        "why": "Cover reduces exposure to erosive forces."
      }
    ]
  },
  {
    "id": "crop-rotation",
    "category": "Agriculture",
    "title": "Why farmers rotate crops",
    "desc": "Explore nutrient needs, pest cycles and diversity.",
    "art": "network",
    "diagram": [
      "Crop",
      "Rotation",
      "Soil"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://www.usda.gov/topics/farming",
    "slides": [
      {
        "title": "A sequence across seasons",
        "text": "Crop rotation means growing different crops in a planned sequence on the same land rather than continuously planting one crop.",
        "label": "Rotation",
        "art": "network"
      },
      {
        "title": "Pest and disease pressures",
        "text": "Rotating away from a susceptible host can interrupt some pests' and pathogens' life cycles. Effectiveness depends on the organism and crop sequence.",
        "label": "Pests",
        "art": "scales"
      },
      {
        "title": "Nitrogen-fixing partnerships",
        "text": "Some legumes host bacteria that convert atmospheric nitrogen into biologically usable forms. How much nitrogen benefits following crops depends on management and conditions.",
        "label": "Nitrogen",
        "art": "timeline"
      },
      {
        "title": "Design for local conditions",
        "text": "A rotation should consider climate, markets, water, soil, equipment and disease risk. Diversity is a tool, not a guarantee of higher yields every year.",
        "label": "Design",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "Why might rotating away from a host crop reduce a particular pathogen?",
        "options": [
          "It can interrupt the pathogen's access to a susceptible host",
          "All pathogens die immediately without sunlight",
          "Rotation sterilizes every field"
        ],
        "correct": 0,
        "why": "Host-specific organisms may struggle when their host is absent."
      },
      {
        "q": "What enables many legumes to contribute biologically fixed nitrogen?",
        "options": [
          "Root-associated bacteria",
          "Photosynthesis alone",
          "Evaporation"
        ],
        "correct": 0,
        "why": "Symbiotic bacteria perform nitrogen fixation."
      }
    ]
  },
  {
    "id": "photosynthesis",
    "category": "Biology",
    "title": "How plants turn sunlight into sugar",
    "desc": "Understand energy capture and carbon fixation.",
    "art": "network",
    "diagram": [
      "Light",
      "Carbon",
      "Sugar"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://openstax.org/books/biology-2e/pages/1-introduction",
    "slides": [
      {
        "title": "Capture light",
        "text": "Photosynthetic organisms use pigments to absorb light. In plants, chloroplasts contain machinery for photosynthesis.",
        "label": "Light",
        "art": "network"
      },
      {
        "title": "Light-dependent reactions",
        "text": "These reactions use light energy to produce ATP and reducing power in the form of NADPH. Oxygen is released when water is split.",
        "label": "Energy",
        "art": "scales"
      },
      {
        "title": "Fix carbon",
        "text": "The Calvin cycle uses energy and reducing power to incorporate carbon dioxide into organic compounds. Products can contribute to sugar synthesis.",
        "label": "Carbon",
        "art": "timeline"
      },
      {
        "title": "Plants also respire",
        "text": "Plants use cellular respiration as well as photosynthesis. Their net gas exchange depends on light, metabolism and environmental conditions.",
        "label": "Respiration",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "Where does the oxygen released in oxygenic photosynthesis originate?",
        "options": [
          "Water",
          "Carbon dioxide directly",
          "Soil nitrogen"
        ],
        "correct": 0,
        "why": "Water splitting releases oxygen."
      },
      {
        "q": "Do plants perform cellular respiration?",
        "options": [
          "No, only animals do",
          "Yes, plants also extract usable energy from organic molecules",
          "Only during winter"
        ],
        "correct": 1,
        "why": "Plant cells use respiration to support metabolism."
      }
    ]
  },
  {
    "id": "flight",
    "category": "Transportation",
    "title": "The four forces of flight",
    "desc": "Discover lift, weight, thrust and drag.",
    "art": "network",
    "diagram": [
      "Lift",
      "Weight",
      "Thrust"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak",
    "slides": [
      {
        "title": "Four forces",
        "text": "An airplane in flight experiences lift, weight, thrust and drag. These forces influence its motion according to their magnitudes and directions.",
        "label": "Forces",
        "art": "network"
      },
      {
        "title": "Lift and airflow",
        "text": "Wings generate lift by interacting with airflow. Pressure distributions and changes in the air's momentum are related descriptions of that interaction.",
        "label": "Lift",
        "art": "scales"
      },
      {
        "title": "Drag and thrust",
        "text": "Drag opposes motion relative to the surrounding air; thrust from propulsion can offset drag. Drag depends on shape, speed and operating conditions.",
        "label": "Drag",
        "art": "timeline"
      },
      {
        "title": "Balanced flight",
        "text": "In steady straight-and-level unaccelerated flight, the forces sum to zero. Turning, climbing or changing speed can require a different force balance.",
        "label": "Balance",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "What is true of net force in straight, steady, unaccelerated flight?",
        "options": [
          "It is zero",
          "It equals the aircraft's weight",
          "It must point forward"
        ],
        "correct": 0,
        "why": "No acceleration means zero net force."
      },
      {
        "q": "What distinguishes thrust from drag?",
        "options": [
          "Thrust is identical to weight",
          "Thrust generally drives the aircraft while drag opposes relative airflow motion",
          "Both always point upward"
        ],
        "correct": 1,
        "why": "They generally act in opposing directions along the flight path."
      }
    ]
  },
  {
    "id": "ev-motor",
    "category": "Transportation",
    "title": "How electric cars turn energy into motion",
    "desc": "Follow energy from battery to wheels and back.",
    "art": "network",
    "diagram": [
      "Battery",
      "Inverter",
      "Motor"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://afdc.energy.gov/vehicles/how-do-all-electric-cars-work",
    "slides": [
      {
        "title": "Stored energy",
        "text": "An electric vehicle stores electrical energy chemically in its traction battery. Battery capacity and energy use affect range.",
        "label": "Battery",
        "art": "network"
      },
      {
        "title": "Motor and control",
        "text": "Power electronics regulate the electric motor. The motor converts electrical energy into mechanical torque that drives the wheels.",
        "label": "Motor",
        "art": "scales"
      },
      {
        "title": "Regenerative braking",
        "text": "During some deceleration, a motor can act as a generator and convert part of the vehicle's kinetic energy back into electrical energy.",
        "label": "Regeneration",
        "art": "timeline"
      },
      {
        "title": "Energy losses",
        "text": "Conversion, rolling resistance, aerodynamic drag and heating or cooling affect energy use. Regeneration cannot recover all energy or make a vehicle run indefinitely.",
        "label": "Losses",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "What does regenerative braking recover?",
        "options": [
          "Some kinetic energy as electrical energy",
          "All energy consumed during a trip",
          "Energy from nothing"
        ],
        "correct": 0,
        "why": "Only part of the vehicle's motion energy can be recovered."
      },
      {
        "q": "Which component converts electrical energy into driving torque?",
        "options": [
          "The tire tread",
          "The traction motor",
          "The windshield"
        ],
        "correct": 1,
        "why": "The motor produces mechanical torque."
      }
    ]
  },
  {
    "id": "railways",
    "category": "Transportation",
    "title": "Why steel wheels travel so efficiently",
    "desc": "Explore rolling resistance and rail networks.",
    "art": "network",
    "diagram": [
      "Wheels",
      "Rails",
      "Network"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://openstax.org/books/college-physics-2e/pages/1-introduction-to-science-and-the-realm-of-physics-physical-quantities-and-units",
    "slides": [
      {
        "title": "Rolling resistance",
        "text": "A steel wheel rolling on a steel rail generally experiences relatively low rolling resistance compared with a rubber tire on many road surfaces.",
        "label": "Resistance",
        "art": "network"
      },
      {
        "title": "Guided motion",
        "text": "Rail vehicles follow a fixed guideway. Wheel and rail geometry help guide motion; switches direct vehicles between routes.",
        "label": "Guidance",
        "art": "scales"
      },
      {
        "title": "Traction and braking",
        "text": "The wheel-rail contact must provide sufficient adhesion for acceleration and braking. Low rolling resistance does not imply unlimited traction.",
        "label": "Adhesion",
        "art": "timeline"
      },
      {
        "title": "Network economics",
        "text": "Rail can move substantial freight or passenger volumes along fixed corridors. Infrastructure, scheduling and transfer costs affect suitability.",
        "label": "Network",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "Why can rail transport be efficient over busy corridors?",
        "options": [
          "Low rolling resistance and large combined loads can reduce energy per unit moved",
          "Trains have no friction at all",
          "Rails create fuel"
        ],
        "correct": 0,
        "why": "Resistance and load consolidation can improve efficiency."
      },
      {
        "q": "Does low rolling resistance imply unlimited braking force?",
        "options": [
          "Yes",
          "No, available adhesion remains limited",
          "Only on curved tracks"
        ],
        "correct": 1,
        "why": "Wheel-rail adhesion constrains traction and braking."
      }
    ]
  },
  {
    "id": "volcanoes",
    "category": "Earth Science",
    "title": "Why volcanoes erupt",
    "desc": "Understand magma, gases and tectonic settings.",
    "art": "network",
    "diagram": [
      "Magma",
      "Gas",
      "Eruption"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://www.usgs.gov/educational-resources",
    "slides": [
      {
        "title": "Melting underground",
        "text": "Magma forms when rock partially melts under suitable temperature, pressure and composition conditions. It may rise because of buoyancy and pressure.",
        "label": "Magma",
        "art": "network"
      },
      {
        "title": "Different settings",
        "text": "Volcanism occurs at many plate boundaries and some hotspots. The mechanisms producing magma differ across settings.",
        "label": "Tectonics",
        "art": "scales"
      },
      {
        "title": "Gas and viscosity",
        "text": "Dissolved gases can come out of solution as pressure falls. Magma viscosity, gas escape and other conditions influence whether eruptions are more explosive or effusive.",
        "label": "Gas",
        "art": "timeline"
      },
      {
        "title": "Monitoring",
        "text": "Scientists use seismicity, ground deformation, gas measurements and other observations to assess volcanic activity. Forecasts remain uncertain.",
        "label": "Monitoring",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "What is molten rock below Earth's surface called?",
        "options": [
          "Lava",
          "Magma",
          "Sediment"
        ],
        "correct": 1,
        "why": "Magma is molten or partially molten material underground."
      },
      {
        "q": "Why do eruption styles vary?",
        "options": [
          "Magma properties, gases and pressure conditions differ",
          "Every volcano contains identical magma",
          "Only the mountain's color matters"
        ],
        "correct": 0,
        "why": "Multiple physical factors shape eruption behavior."
      }
    ]
  },
  {
    "id": "glaciers",
    "category": "Earth Science",
    "title": "How glaciers sculpt landscapes",
    "desc": "Learn accumulation, ice flow and erosion.",
    "art": "network",
    "diagram": [
      "Snow",
      "Ice flow",
      "Erosion"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://www.usgs.gov/educational-resources",
    "slides": [
      {
        "title": "Snow becomes ice",
        "text": "Where snow persists and accumulates over years, burial and compaction can transform it into dense glacial ice.",
        "label": "Accumulation",
        "art": "network"
      },
      {
        "title": "Ice flows",
        "text": "Glaciers deform internally under gravity and may slide at their beds. They can flow even while their terminus retreats.",
        "label": "Flow",
        "art": "scales"
      },
      {
        "title": "Carving and carrying",
        "text": "Glacial movement can erode bedrock and transport sediment. Deposited debris can form landforms such as moraines.",
        "label": "Erosion",
        "art": "timeline"
      },
      {
        "title": "Mass balance",
        "text": "A glacier gains mass through accumulation and loses mass through ablation processes. Its overall mass balance influences long-term size.",
        "label": "Balance",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "Can a glacier's ice flow downhill while its terminus retreats?",
        "options": [
          "Yes",
          "No",
          "Only when all ice is melting instantly"
        ],
        "correct": 0,
        "why": "Retreat describes the terminus position, not necessarily the direction of ice motion."
      },
      {
        "q": "What is negative glacier mass balance?",
        "options": [
          "A gain exceeding loss",
          "A net loss of ice mass",
          "A reversal of gravity"
        ],
        "correct": 1,
        "why": "Loss exceeds accumulation."
      }
    ]
  },
  {
    "id": "minerals",
    "category": "Earth Science",
    "title": "Minerals, rocks and the rock cycle",
    "desc": "Learn how geological materials form and transform.",
    "art": "network",
    "diagram": [
      "Igneous",
      "Sedimentary",
      "Metamorphic"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://www.usgs.gov/educational-resources",
    "slides": [
      {
        "title": "Minerals and rocks",
        "text": "A mineral is generally a naturally occurring crystalline substance with characteristic chemistry and structure. Rocks are aggregates of minerals or other geological material.",
        "label": "Minerals",
        "art": "network"
      },
      {
        "title": "Cooling melts",
        "text": "Igneous rocks form when molten material cools and solidifies. Cooling conditions influence their texture.",
        "label": "Igneous",
        "art": "scales"
      },
      {
        "title": "Sediment becomes rock",
        "text": "Many sedimentary rocks form when deposited particles are compacted and cemented. Others form through chemical or biological processes.",
        "label": "Sedimentary",
        "art": "timeline"
      },
      {
        "title": "Change without melting",
        "text": "Metamorphic rocks form as existing rocks change under heat, pressure or chemically active fluids, without complete melting.",
        "label": "Metamorphic",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "Which rock type forms by solidification of molten material?",
        "options": [
          "Metamorphic",
          "Igneous",
          "Sedimentary only"
        ],
        "correct": 1,
        "why": "Cooling and crystallization produce igneous rocks."
      },
      {
        "q": "Does metamorphism require complete melting?",
        "options": [
          "No",
          "Yes",
          "Only for limestone"
        ],
        "correct": 0,
        "why": "Metamorphism occurs without complete melting."
      }
    ]
  },
  {
    "id": "hvac",
    "category": "Home & Infrastructure",
    "title": "How refrigerators and heat pumps move heat",
    "desc": "Understand the refrigeration cycle conceptually.",
    "art": "network",
    "diagram": [
      "Evaporator",
      "Compressor",
      "Condenser"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://www.energy.gov/energysaver",
    "slides": [
      {
        "title": "Moving heat",
        "text": "A refrigeration system uses work to move thermal energy from a cooler region to a warmer one. A heat pump uses the same general principle for useful heating.",
        "label": "Heat transfer",
        "art": "network"
      },
      {
        "title": "Absorb heat",
        "text": "In a vapor-compression system, low-pressure refrigerant evaporates in an evaporator and absorbs heat from its surroundings.",
        "label": "Evaporation",
        "art": "scales"
      },
      {
        "title": "Raise pressure",
        "text": "A compressor raises the refrigerant vapor's pressure and temperature. In the condenser, the refrigerant rejects heat and condenses.",
        "label": "Compression",
        "art": "timeline"
      },
      {
        "title": "Repeat the cycle",
        "text": "An expansion device lowers refrigerant pressure before it returns to the evaporator. Refrigerant circuits and electrical systems require appropriate qualified servicing.",
        "label": "Expansion",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "Why does the evaporator absorb heat?",
        "options": [
          "Low-pressure refrigerant evaporates there",
          "It generates heat from nothing",
          "It prevents phase changes"
        ],
        "correct": 0,
        "why": "Evaporation absorbs thermal energy."
      },
      {
        "q": "Does a heat pump need energy to move heat from cold to warm?",
        "options": [
          "No",
          "Yes, it requires work",
          "Only if it uses electricity from solar panels"
        ],
        "correct": 1,
        "why": "External work drives heat transfer against the natural temperature gradient."
      }
    ]
  },
  {
    "id": "drinking-water",
    "category": "Home & Infrastructure",
    "title": "From a water source to the tap",
    "desc": "Explore drinking-water treatment and distribution.",
    "art": "network",
    "diagram": [
      "Source",
      "Treatment",
      "Distribution"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://www.epa.gov/ground-water-and-drinking-water",
    "slides": [
      {
        "title": "Different sources",
        "text": "Public water systems may draw from rivers, lakes, reservoirs or groundwater. Treatment needs depend on source quality and applicable requirements.",
        "label": "Source",
        "art": "network"
      },
      {
        "title": "Removing particles",
        "text": "Many surface-water plants use processes such as coagulation, settling and filtration to remove suspended matter. Treatment trains vary.",
        "label": "Filtration",
        "art": "scales"
      },
      {
        "title": "Managing pathogens",
        "text": "Disinfection helps control harmful microorganisms. Systems monitor water quality and may maintain a disinfectant residual within distribution networks.",
        "label": "Disinfection",
        "art": "timeline"
      },
      {
        "title": "A protected network",
        "text": "Pumps, storage and pipes deliver treated water. Contamination can also occur after treatment, so infrastructure and monitoring matter. Follow local advisories during disruptions.",
        "label": "Distribution",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "Why might water require both filtration and disinfection?",
        "options": [
          "They address different kinds of contamination",
          "Every contaminant is visible",
          "Both are identical processes"
        ],
        "correct": 0,
        "why": "Particle removal and microbial control are distinct treatment objectives."
      },
      {
        "q": "Does clear water necessarily meet drinking-water standards?",
        "options": [
          "Yes",
          "No",
          "Only if it is cold"
        ],
        "correct": 1,
        "why": "Some contaminants are invisible and require testing or treatment."
      }
    ]
  },
  {
    "id": "wastewater",
    "category": "Home & Infrastructure",
    "title": "Where wastewater goes after the drain",
    "desc": "Understand treatment stages and environmental protection.",
    "art": "network",
    "diagram": [
      "Collection",
      "Treatment",
      "Discharge"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://www.epa.gov/npdes",
    "slides": [
      {
        "title": "Collecting wastewater",
        "text": "Sanitary sewer networks carry wastewater to treatment facilities. Some systems also receive stormwater, while others keep it separate.",
        "label": "Collection",
        "art": "network"
      },
      {
        "title": "Physical removal",
        "text": "Preliminary and primary treatment can remove large debris, grit and settleable solids using screens and other physical processes.",
        "label": "Primary",
        "art": "scales"
      },
      {
        "title": "Biological treatment",
        "text": "Many plants use microorganisms to transform dissolved and suspended organic material. Operators manage oxygen and other conditions to support treatment.",
        "label": "Biological",
        "art": "timeline"
      },
      {
        "title": "Further treatment",
        "text": "Facilities may remove additional nutrients, disinfect effluent and process sludge depending on requirements. Treated effluent is not automatically suitable for drinking.",
        "label": "Discharge",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "What is one purpose of biological wastewater treatment?",
        "options": [
          "To transform organic material using microorganisms",
          "To add untreated sewage to rivers",
          "To eliminate every solid with magnets"
        ],
        "correct": 0,
        "why": "Microbial metabolism helps reduce organic pollution."
      },
      {
        "q": "Does treated wastewater automatically qualify as drinking water?",
        "options": [
          "Yes",
          "No, suitability depends on treatment and standards",
          "Only if it has no odor"
        ],
        "correct": 1,
        "why": "Drinking-water reuse requires appropriate additional safeguards."
      }
    ]
  },
  {
    "id": "fermentation",
    "category": "Food Science",
    "title": "How microbes transform food",
    "desc": "Explore yogurt, bread and fermentation chemistry.",
    "art": "network",
    "diagram": [
      "Microbes",
      "Substrate",
      "Products"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://www.fda.gov/food",
    "slides": [
      {
        "title": "Metabolism without oxygen",
        "text": "In biochemical fermentation, cells regenerate necessary electron carriers without relying on an external electron acceptor such as oxygen. Different pathways produce different substances.",
        "label": "Metabolism",
        "art": "network"
      },
      {
        "title": "Bread and yeast",
        "text": "Baker's yeast can convert sugars into ethanol and carbon dioxide. Trapped carbon dioxide helps dough rise.",
        "label": "Yeast",
        "art": "scales"
      },
      {
        "title": "Lactic acid bacteria",
        "text": "In foods such as yogurt, certain bacteria transform sugars into lactic acid, contributing to acidity and characteristic texture and flavor.",
        "label": "Acid",
        "art": "timeline"
      },
      {
        "title": "Controlled conditions",
        "text": "Food fermentation depends on suitable organisms, ingredients, temperature and time. Fermentation does not automatically make every food safe; use tested procedures.",
        "label": "Control",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "What gas helps yeast-leavened bread rise?",
        "options": [
          "Nitrogen",
          "Carbon dioxide",
          "Helium"
        ],
        "correct": 1,
        "why": "Yeast fermentation produces carbon dioxide."
      },
      {
        "q": "Why use tested food fermentation procedures?",
        "options": [
          "They help manage food safety and process conditions",
          "Every microorganism is harmless",
          "Fermentation destroys all toxins automatically"
        ],
        "correct": 0,
        "why": "Safety depends on controlled conditions and the food involved."
      }
    ]
  },
  {
    "id": "maillard",
    "category": "Food Science",
    "title": "Why cooked food turns golden brown",
    "desc": "Distinguish Maillard reactions from caramelization.",
    "art": "network",
    "diagram": [
      "Heat",
      "Sugars",
      "Amino groups"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://openstax.org/books/chemistry-2e/pages/1-introduction",
    "slides": [
      {
        "title": "Flavor from reactions",
        "text": "Heating food can change molecules and produce new flavor compounds. Not all browning follows the same chemistry.",
        "label": "Browning",
        "art": "network"
      },
      {
        "title": "Maillard chemistry",
        "text": "Reducing sugars react with amino groups, leading to complex products associated with aroma and browning in foods such as bread crust.",
        "label": "Maillard",
        "art": "scales"
      },
      {
        "title": "Caramelization",
        "text": "Caramelization involves thermal reactions of sugars. It can occur without amino groups and is distinct from the Maillard reaction.",
        "label": "Caramelization",
        "art": "timeline"
      },
      {
        "title": "Conditions matter",
        "text": "Temperature, time, moisture, acidity and ingredients influence browning. Color alone does not establish safe internal cooking temperature.",
        "label": "Conditions",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "Which ingredients participate in the initial Maillard reaction?",
        "options": [
          "Reducing sugars and amino groups",
          "Water and oxygen only",
          "Pure salt alone"
        ],
        "correct": 0,
        "why": "Maillard chemistry begins with sugar and amino-group reactions."
      },
      {
        "q": "Can brown surface color reliably establish safe internal temperature?",
        "options": [
          "Yes",
          "No",
          "Only for thick foods"
        ],
        "correct": 1,
        "why": "Internal temperature is a separate food-safety measure."
      }
    ]
  },
  {
    "id": "job-interview",
    "category": "Career Development",
    "title": "How to demonstrate a skill in an interview",
    "desc": "Turn real experiences into concrete evidence.",
    "art": "network",
    "diagram": [
      "Situation",
      "Action",
      "Result"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://www.careeronestop.org/",
    "slides": [
      {
        "title": "Understand the role",
        "text": "Read the requirements and identify which experiences demonstrate relevant skills. Use examples rather than claiming universal competence.",
        "label": "Requirements",
        "art": "network"
      },
      {
        "title": "Describe the context",
        "text": "Explain the situation and task briefly so the interviewer understands the problem and your responsibility.",
        "label": "Situation",
        "art": "scales"
      },
      {
        "title": "Show your actions",
        "text": "Describe the specific steps you took and decisions you made. Distinguish your own contribution from the team's work.",
        "label": "Action",
        "art": "timeline"
      },
      {
        "title": "Explain outcomes honestly",
        "text": "Describe measurable outcomes where available, or qualitative results and lessons. Do not invent numbers or overstate your authority.",
        "label": "Result",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "Which response gives stronger evidence of troubleshooting ability?",
        "options": [
          "A specific problem, actions and outcome",
          "A claim that you solve every issue perfectly",
          "A list of unrelated hobbies"
        ],
        "correct": 0,
        "why": "Concrete examples show how a skill was used."
      },
      {
        "q": "What should you do when you do not know an exact outcome metric?",
        "options": [
          "Invent a plausible percentage",
          "Describe the known outcome honestly",
          "Claim the entire project succeeded because of you"
        ],
        "correct": 1,
        "why": "Credibility depends on accurate representation."
      }
    ]
  },
  {
    "id": "feedback-work",
    "category": "Career Development",
    "title": "Getting useful feedback at work",
    "desc": "Turn criticism and praise into actionable next steps.",
    "art": "network",
    "diagram": [
      "Observation",
      "Impact",
      "Next step"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://www.careeronestop.org/",
    "slides": [
      {
        "title": "Ask for specifics",
        "text": "General feedback can be difficult to act on. Ask for examples of behavior, circumstances and expected standards.",
        "label": "Specifics",
        "art": "network"
      },
      {
        "title": "Separate observation and interpretation",
        "text": "A missed deadline is an observable event. A conclusion about someone's motivation requires additional evidence.",
        "label": "Evidence",
        "art": "scales"
      },
      {
        "title": "Agree on a change",
        "text": "Clarify what improvement looks like, which resources are available and when progress can be revisited.",
        "label": "Action",
        "art": "timeline"
      },
      {
        "title": "Evaluate fairly",
        "text": "Feedback may be incomplete, biased or conflicting. Seek clarification and compare it with other evidence while considering the work context.",
        "label": "Review",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "Which feedback is easier to act on?",
        "options": [
          "Be a better person",
          "Include a rollback plan in each change request",
          "Everyone dislikes the process"
        ],
        "correct": 1,
        "why": "Specific expectations describe observable behavior."
      },
      {
        "q": "Should every interpretation in feedback be accepted as established fact?",
        "options": [
          "No; distinguish evidence from interpretation",
          "Yes, regardless of evidence",
          "Only if it is negative"
        ],
        "correct": 0,
        "why": "A judgment may need clarification or corroboration."
      }
    ]
  },
  {
    "id": "banks",
    "category": "Financial Literacy",
    "title": "What banks do with deposits and loans",
    "desc": "Distinguish bank assets, liabilities and payment services.",
    "art": "network",
    "diagram": [
      "Deposit",
      "Loan",
      "Settlement"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://www.consumerfinance.gov/consumer-tools/",
    "slides": [
      {
        "title": "Deposits as liabilities",
        "text": "A customer's deposit is generally money the bank owes to that customer. It is a liability on the bank's balance sheet and an asset for the depositor.",
        "label": "Deposits",
        "art": "network"
      },
      {
        "title": "Loans as assets",
        "text": "When a bank makes a loan, the loan is an asset representing a borrower's repayment obligation. Bank lending can create deposits, subject to constraints.",
        "label": "Loans",
        "art": "scales"
      },
      {
        "title": "Payments and liquidity",
        "text": "Payments between banks require settlement arrangements. Banks manage liquidity to meet withdrawals and payment obligations.",
        "label": "Settlement",
        "art": "timeline"
      },
      {
        "title": "Risk and safeguards",
        "text": "Capital, liquidity regulation, supervision and applicable deposit insurance help address risks. Coverage and eligibility depend on jurisdiction and account conditions.",
        "label": "Safeguards",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "On a bank's balance sheet, a customer's deposit is generally what?",
        "options": [
          "An asset owned by the bank free of obligation",
          "A liability owed to the customer",
          "A stock dividend"
        ],
        "correct": 1,
        "why": "The bank owes the depositor the balance."
      },
      {
        "q": "Why must banks manage liquidity?",
        "options": [
          "To meet payments and withdrawals",
          "To eliminate every credit loss",
          "To avoid recording assets"
        ],
        "correct": 0,
        "why": "Liquidity supports timely payment obligations."
      }
    ]
  },
  {
    "id": "renaissance",
    "category": "World History",
    "title": "The Renaissance beyond the famous paintings",
    "desc": "Explore humanism, patronage and knowledge exchange.",
    "art": "network",
    "diagram": [
      "Texts",
      "Patrons",
      "Innovation"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://openstax.org/books/world-history-volume-1/pages/1-introduction",
    "slides": [
      {
        "title": "A changing intellectual movement",
        "text": "The Renaissance refers to developments in art, scholarship and culture that took shape in Italian cities and spread across Europe over several centuries.",
        "label": "Origins",
        "art": "network"
      },
      {
        "title": "Humanist scholarship",
        "text": "Humanists studied classical Greek and Latin texts and emphasized subjects such as rhetoric, history and moral philosophy. Religious concerns remained important.",
        "label": "Humanism",
        "art": "scales"
      },
      {
        "title": "Patronage and trade",
        "text": "Wealthy households, churches, rulers and institutions supported artists and scholars. Trade and urban life helped sustain cultural production.",
        "label": "Patronage",
        "art": "timeline"
      },
      {
        "title": "Connected histories",
        "text": "European developments drew on older traditions and exchanges across the Mediterranean and beyond. The Renaissance was not an abrupt end to all medieval intellectual life.",
        "label": "Continuity",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "What did Renaissance humanists often study?",
        "options": [
          "Classical texts and rhetoric",
          "Only electronic engineering",
          "Only modern stock prices"
        ],
        "correct": 0,
        "why": "Classical scholarship was central to humanism."
      },
      {
        "q": "Was the Renaissance an abrupt disappearance of all medieval learning?",
        "options": [
          "Yes",
          "No",
          "Only in Italy"
        ],
        "correct": 1,
        "why": "Many institutions and intellectual traditions continued and changed."
      }
    ]
  },
  {
    "id": "decolonization",
    "category": "World History",
    "title": "How colonial empires ended",
    "desc": "Explore independence movements and the legacies of colonial rule.",
    "art": "network",
    "diagram": [
      "Empire",
      "Independence",
      "Statehood"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://openstax.org/books/world-history-volume-2/pages/1-introduction",
    "slides": [
      {
        "title": "Unequal political control",
        "text": "Colonial empires exercised different forms of control over territories and populations. Political exclusion, extraction and settlement varied by place and time.",
        "label": "Colonial rule",
        "art": "network"
      },
      {
        "title": "Independence movements",
        "text": "Nationalist movements and other political organizations challenged colonial rule using diverse strategies. Local movements were crucial to many transitions.",
        "label": "Movements",
        "art": "scales"
      },
      {
        "title": "A global shift",
        "text": "The decades after World War II saw many territories gain independence as imperial powers weakened and international political conditions changed.",
        "label": "Transitions",
        "art": "timeline"
      },
      {
        "title": "Independence and continuity",
        "text": "Formal sovereignty did not erase inherited boundaries, economic dependencies or social inequalities. Outcomes differed widely among newly independent states.",
        "label": "Legacies",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "What changed with formal political independence?",
        "options": [
          "A territory gained sovereign statehood or a new political status",
          "All economic inequalities ended immediately",
          "Every inherited institution disappeared"
        ],
        "correct": 0,
        "why": "Political independence changes legal and governmental authority."
      },
      {
        "q": "Why do decolonization histories differ among countries?",
        "options": [
          "Local movements, colonial structures and international conditions varied",
          "All followed the same treaty",
          "Every transition occurred in one year"
        ],
        "correct": 0,
        "why": "Each transition had its own political and social context."
      }
    ]
  },
  {
    "id": "eclipses",
    "category": "Astronomy",
    "title": "Why eclipses do not happen every month",
    "desc": "Explore orbital alignment and shadows.",
    "art": "network",
    "diagram": [
      "Sun",
      "Moon",
      "Earth"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://openstax.org/books/astronomy-2e/pages/1-introduction",
    "slides": [
      {
        "title": "Solar eclipse",
        "text": "A solar eclipse occurs when the Moon passes between Earth and the Sun in a suitable alignment and casts a shadow on part of Earth.",
        "label": "Solar",
        "art": "network"
      },
      {
        "title": "Lunar eclipse",
        "text": "A lunar eclipse occurs when the Moon passes through Earth's shadow. It can occur only near full moon.",
        "label": "Lunar",
        "art": "scales"
      },
      {
        "title": "Tilted orbits",
        "text": "The Moon's orbit is tilted relative to Earth's orbital plane around the Sun. Most new and full moons therefore miss the alignment needed for an eclipse.",
        "label": "Tilt",
        "art": "timeline"
      },
      {
        "title": "Viewing safely",
        "text": "Looking directly at the Sun outside the brief total phase of a total solar eclipse can damage the eyes. Use appropriate certified solar viewing protection and follow official guidance.",
        "label": "Safety",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "When can a lunar eclipse occur?",
        "options": [
          "Near new moon",
          "Near full moon",
          "Only at noon"
        ],
        "correct": 1,
        "why": "Earth lies between the Sun and Moon near full moon."
      },
      {
        "q": "Why is there not a solar eclipse at every new moon?",
        "options": [
          "The Moon's orbit is tilted",
          "The Sun disappears monthly",
          "Earth stops rotating"
        ],
        "correct": 0,
        "why": "Most new moons pass above or below the required alignment."
      }
    ]
  },
  {
    "id": "accessibility",
    "category": "Art & Design",
    "title": "Designing for different abilities",
    "desc": "Learn why accessible interfaces benefit more people.",
    "art": "network",
    "diagram": [
      "Perceive",
      "Operate",
      "Understand"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://www.w3.org/WAI/fundamentals/accessibility-intro/",
    "slides": [
      {
        "title": "Perceivable information",
        "text": "Offer text alternatives for meaningful images, readable contrast and captions where appropriate. Information should not rely solely on one sensory channel.",
        "label": "Perception",
        "art": "network"
      },
      {
        "title": "Operable controls",
        "text": "Interfaces should support keyboard interaction and visible focus. Touch targets should be large enough and controls should be understandable.",
        "label": "Operation",
        "art": "scales"
      },
      {
        "title": "Understandable behavior",
        "text": "Use clear labels, consistent navigation and helpful error messages. Unexpected changes can make tasks difficult to complete.",
        "label": "Clarity",
        "art": "timeline"
      },
      {
        "title": "Test with real needs",
        "text": "Automated checks catch some accessibility issues but not all. Manual testing and feedback from people with disabilities help identify barriers.",
        "label": "Testing",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "What helps users who navigate without a mouse?",
        "options": [
          "Keyboard-accessible controls and visible focus",
          "Hover-only menus",
          "Unlabeled buttons"
        ],
        "correct": 0,
        "why": "Keyboard interaction requires reachable and identifiable controls."
      },
      {
        "q": "Does passing an automated check guarantee full accessibility?",
        "options": [
          "Yes",
          "No",
          "Only on desktop"
        ],
        "correct": 1,
        "why": "Manual evaluation and real-world use remain important."
      }
    ]
  }
]);
// Milestone expansion: 50 original four-slide courses.
courses.push(...[
  {
    "id": "greek-myth",
    "category": "Mythology",
    "title": "The stories of the Greek gods",
    "desc": "Explore myth as a way of explaining the world.",
    "art": "network",
    "diagram": [
      "Gods",
      "Heroes",
      "Stories"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://www.britannica.com/topic/myth",
    "slides": [
      {
        "title": "A shared tradition",
        "text": "Ancient Greek myths circulated in oral poetry, ritual, theater and visual art. Different communities and authors told different versions of the same stories.",
        "label": "A shared tradition",
        "art": "network"
      },
      {
        "title": "The Olympians",
        "text": "Zeus, Hera, Athena and other gods appear in stories about authority, kinship, craft and conflict. Greek worship included local cults and practices.",
        "label": "The Olympians",
        "art": "scales"
      },
      {
        "title": "Heroes and consequences",
        "text": "Stories about figures such as Heracles explore extraordinary feats, human limitations and obligations. A mythic hero is not necessarily a moral exemplar.",
        "label": "Heroes and consequences",
        "art": "timeline"
      },
      {
        "title": "Read myth in context",
        "text": "Myths can express cultural values and tensions. They are not straightforward historical records, and no single surviving version defines all Greek belief.",
        "label": "Read myth in context",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "Why can two ancient versions of one myth differ?",
        "options": [
          "Stories developed across communities and authors",
          "Every myth had one official written script",
          "All differences are modern inventions"
        ],
        "correct": 0,
        "why": "Oral and literary traditions allow variation."
      },
      {
        "q": "Do heroic figures always model admirable behavior?",
        "options": [
          "Yes, by definition",
          "Only when a story includes a god",
          "No, myths can portray flaws and consequences"
        ],
        "correct": 2,
        "why": "Heroism in myth is not identical to moral perfection."
      }
    ]
  },
  {
    "id": "norse-myth",
    "category": "Mythology",
    "title": "The worlds of Norse mythology",
    "desc": "Explore gods, cosmic stories and surviving sources.",
    "art": "network",
    "diagram": [
      "Gods",
      "Worlds",
      "Ragnarök"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://www.britannica.com/topic/myth",
    "slides": [
      {
        "title": "Sources and limits",
        "text": "Many surviving accounts of Norse myth come from medieval Icelandic texts, including the Poetic and Prose Eddas, recorded after the conversion to Christianity.",
        "label": "Sources and limits",
        "art": "network"
      },
      {
        "title": "The divine figures",
        "text": "Odin, Thor and Freyja appear in varied stories associated with wisdom, thunder, warfare, love and other themes. Their roles overlap and cannot be reduced to one attribute.",
        "label": "The divine figures",
        "art": "scales"
      },
      {
        "title": "A connected cosmos",
        "text": "Yggdrasil is a great tree associated with the mythic cosmos. Sources describe multiple worlds, but do not provide a single consistent modern-style map.",
        "label": "A connected cosmos",
        "art": "timeline"
      },
      {
        "title": "Ragnarök",
        "text": "Ragnarök describes destructive conflict, death and renewal in surviving accounts. Interpretations differ, and the stories are not factual predictions.",
        "label": "Ragnarök",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "Why approach medieval written sources with historical care?",
        "options": [
          "They were written before all oral traditions",
          "They preserve older material through later authors and contexts",
          "Every surviving account is identical"
        ],
        "correct": 1,
        "why": "The transmission history shapes the evidence."
      },
      {
        "q": "What is Yggdrasil in Norse myth?",
        "options": [
          "A cosmic tree",
          "A Roman city",
          "An astronomical instrument"
        ],
        "correct": 0,
        "why": "Yggdrasil is associated with the structure of the mythic world."
      }
    ]
  },
  {
    "id": "egypt-myth",
    "category": "Mythology",
    "title": "Egyptian myths of order and renewal",
    "desc": "Discover religious stories about nature, kingship and the afterlife.",
    "art": "network",
    "diagram": [
      "Order",
      "Afterlife",
      "Renewal"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://www.britannica.com/topic/myth",
    "slides": [
      {
        "title": "Many centers of worship",
        "text": "Ancient Egyptian religious traditions evolved across thousands of years. Local centers emphasized different deities and creation narratives.",
        "label": "Many centers of worship",
        "art": "network"
      },
      {
        "title": "Ma'at",
        "text": "Ma'at expresses ideas of truth, justice and cosmic order and is also personified as a goddess. Maintaining order was important in Egyptian religious and royal thought.",
        "label": "Ma'at",
        "art": "scales"
      },
      {
        "title": "Osiris and renewal",
        "text": "Stories about Osiris, Isis and Horus connect death, restoration and kingship. These figures had diverse roles in ritual and funerary traditions.",
        "label": "Osiris and renewal",
        "art": "timeline"
      },
      {
        "title": "Life after death",
        "text": "Funerary texts and objects reveal beliefs about an afterlife. Practices varied with period, status and resources; surviving elite monuments are only part of the evidence.",
        "label": "Life after death",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "What does ma'at commonly encompass?",
        "options": [
          "A type of currency",
          "A Roman military rank",
          "Truth, justice and cosmic order"
        ],
        "correct": 2,
        "why": "Ma'at is a central concept of order and right conduct."
      },
      {
        "q": "Why avoid treating Egyptian religion as one unchanging system?",
        "options": [
          "There were no religious texts",
          "Practices and beliefs changed across regions and centuries",
          "All surviving objects were made at once"
        ],
        "correct": 1,
        "why": "Egyptian religious history spans many periods and communities."
      }
    ]
  },
  {
    "id": "forensic-dna",
    "category": "Forensic Science",
    "title": "What DNA evidence can establish",
    "desc": "Understand genetic profiles and the limits of inference.",
    "art": "network",
    "diagram": [
      "Sample",
      "Profile",
      "Inference"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://www.nist.gov/feature-stories/dna-mixtures-forensic-science-explainer",
    "slides": [
      {
        "title": "A partial profile",
        "text": "Forensic DNA analysis commonly compares selected variable regions rather than sequencing a person's entire genome. A profile can help evaluate a possible biological source.",
        "label": "A partial profile",
        "art": "network"
      },
      {
        "title": "Comparisons need statistics",
        "text": "A profile comparison must be interpreted with population data and a stated hypothesis. A match statistic is not the probability that a person committed a crime.",
        "label": "Comparisons need statistics",
        "art": "scales"
      },
      {
        "title": "Mixtures and transfer",
        "text": "Samples may contain DNA from several people. DNA can also be transferred indirectly, so presence alone does not establish how or when it arrived.",
        "label": "Mixtures and transfer",
        "art": "timeline"
      },
      {
        "title": "Combine evidence carefully",
        "text": "Laboratory quality controls, sample history and other evidence are important. Conclusions should communicate uncertainty and distinguish source questions from activity questions.",
        "label": "Combine evidence carefully",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "Does DNA presence alone establish when a person touched an object?",
        "options": [
          "No, transfer and persistence complicate timing",
          "Yes, precisely",
          "Only if the sample is very small"
        ],
        "correct": 0,
        "why": "DNA can persist or transfer through different routes."
      },
      {
        "q": "Why are mixed samples more challenging?",
        "options": [
          "They always lack DNA",
          "They reveal a person's exact intent",
          "They may contain overlapping genetic contributions"
        ],
        "correct": 2,
        "why": "Multiple contributors complicate interpretation."
      }
    ]
  },
  {
    "id": "fingerprints",
    "category": "Forensic Science",
    "title": "Reading the patterns on fingertips",
    "desc": "Learn what fingerprint comparisons can and cannot show.",
    "art": "network",
    "diagram": [
      "Ridges",
      "Comparison",
      "Uncertainty"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://www.nist.gov/forensic-science",
    "slides": [
      {
        "title": "Friction ridges",
        "text": "Fingertips have ridged skin that develops before birth. Ridge patterns can leave impressions on surfaces, though impressions vary in quality.",
        "label": "Friction ridges",
        "art": "network"
      },
      {
        "title": "Features and detail",
        "text": "Examiners compare ridge flow and smaller features such as ridge endings and bifurcations. Partial or distorted marks may contain limited information.",
        "label": "Features and detail",
        "art": "scales"
      },
      {
        "title": "Comparison is a judgment",
        "text": "Fingerprint examination involves trained interpretation. The method is not infallible, and the strength of a conclusion depends on the available detail and method.",
        "label": "Comparison is a judgment",
        "art": "timeline"
      },
      {
        "title": "Context matters",
        "text": "A fingerprint may help associate a person with an impression, but cannot by itself establish the time, purpose or circumstances of contact.",
        "label": "Context matters",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "Why might a partial mark be difficult to compare?",
        "options": [
          "It always belongs to several people",
          "It may contain too little reliable ridge detail",
          "All fingers have identical ridges"
        ],
        "correct": 1,
        "why": "Limited or distorted detail increases uncertainty."
      },
      {
        "q": "Can a fingerprint establish the purpose of someone's contact?",
        "options": [
          "No, that requires additional evidence",
          "Yes, by counting ridges",
          "Yes, if the impression is large"
        ],
        "correct": 0,
        "why": "The impression alone does not reveal intent."
      }
    ]
  },
  {
    "id": "chain-custody",
    "category": "Forensic Science",
    "title": "Why the history of evidence matters",
    "desc": "Explore documentation, contamination and integrity.",
    "art": "network",
    "diagram": [
      "Collect",
      "Document",
      "Preserve"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://www.nist.gov/forensic-science",
    "slides": [
      {
        "title": "Evidence has a history",
        "text": "A chain of custody documents the handling, possession and transfer of evidence. Records help show what happened to an item after collection.",
        "label": "Evidence has a history",
        "art": "network"
      },
      {
        "title": "Preservation",
        "text": "Suitable packaging and storage depend on the material being collected. Poor handling can damage samples or introduce contamination.",
        "label": "Preservation",
        "art": "scales"
      },
      {
        "title": "Traceability",
        "text": "Unique identifiers, transfer records and documented procedures help distinguish items and reveal gaps in their histories.",
        "label": "Traceability",
        "art": "timeline"
      },
      {
        "title": "A limited conclusion",
        "text": "A documented chain helps evaluate integrity, but does not establish that an interpretation is correct. Analytical methods and contextual evidence also matter.",
        "label": "A limited conclusion",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "What does a chain of custody primarily document?",
        "options": [
          "A suspect's private motives",
          "The final verdict",
          "Handling and transfers of evidence"
        ],
        "correct": 2,
        "why": "Traceability helps establish the item's documented history."
      },
      {
        "q": "Does good documentation guarantee an analytical conclusion is correct?",
        "options": [
          "Yes, in all cases",
          "No, the method and interpretation must also be evaluated",
          "Only for photographs"
        ],
        "correct": 1,
        "why": "Integrity and analytical validity are distinct."
      }
    ]
  },
  {
    "id": "steel",
    "category": "Materials Science",
    "title": "Why steel can be hard or tough",
    "desc": "Explore alloys, microstructure and processing.",
    "art": "network",
    "diagram": [
      "Iron",
      "Carbon",
      "Structure"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://openstax.org/books/chemistry-2e/pages/1-introduction",
    "slides": [
      {
        "title": "An alloy",
        "text": "Steel is an iron-based alloy whose properties depend on carbon and other alloying elements. Different grades suit different uses.",
        "label": "An alloy",
        "art": "network"
      },
      {
        "title": "Microstructure",
        "text": "Atoms in a solid metal form structures and grains. The phases, grain sizes and defects in steel influence strength, toughness and ductility.",
        "label": "Microstructure",
        "art": "scales"
      },
      {
        "title": "Heat treatment",
        "text": "Heating and controlled cooling can change microstructure and mechanical properties. Appropriate processing depends on the particular alloy and intended use.",
        "label": "Heat treatment",
        "art": "timeline"
      },
      {
        "title": "Trade-offs",
        "text": "Hardness describes resistance to localized deformation; toughness concerns energy absorbed before fracture. A very hard material is not automatically tough.",
        "label": "Trade-offs",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "What can change the properties of the same steel composition?",
        "options": [
          "Its processing and microstructure",
          "Only its painted color",
          "Its product name alone"
        ],
        "correct": 0,
        "why": "Thermal and mechanical processing can change material structure."
      },
      {
        "q": "Are hardness and toughness identical?",
        "options": [
          "Yes, in every alloy",
          "Only in glass",
          "No, they describe different properties"
        ],
        "correct": 2,
        "why": "A hard material may still fracture relatively easily."
      }
    ]
  },
  {
    "id": "glass",
    "category": "Materials Science",
    "title": "Glass: a solid without repeating crystals",
    "desc": "Understand amorphous structure, transparency and fracture.",
    "art": "network",
    "diagram": [
      "Structure",
      "Light",
      "Stress"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://openstax.org/books/chemistry-2e/pages/1-introduction",
    "slides": [
      {
        "title": "An amorphous solid",
        "text": "Ordinary glass lacks the long-range periodic atomic order of a crystal. At room temperature it behaves as a solid, not a liquid flowing on everyday timescales.",
        "label": "An amorphous solid",
        "art": "network"
      },
      {
        "title": "Light transmission",
        "text": "Many glasses transmit visible light because their composition and structure do not strongly absorb much of that wavelength range. Not every glass is transparent.",
        "label": "Light transmission",
        "art": "scales"
      },
      {
        "title": "Brittle behavior",
        "text": "Surface flaws can concentrate stress and initiate cracks. Glass often fractures with little permanent deformation under ordinary conditions.",
        "label": "Brittle behavior",
        "art": "timeline"
      },
      {
        "title": "Tempering and laminating",
        "text": "Tempering can introduce compressive surface stresses. Laminated glass uses an interlayer that can help retain fragments; different safety glasses serve different purposes.",
        "label": "Tempering and laminating",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "What distinguishes ordinary glass from a crystal?",
        "options": [
          "Absence of atoms",
          "Lack of long-range periodic atomic order",
          "It is always liquid at room temperature"
        ],
        "correct": 1,
        "why": "Glass is an amorphous solid."
      },
      {
        "q": "Why can a tiny surface flaw matter?",
        "options": [
          "It concentrates stress and may initiate a crack",
          "It changes glass into metal",
          "It removes gravity"
        ],
        "correct": 0,
        "why": "Stress concentration can promote brittle fracture."
      }
    ]
  },
  {
    "id": "polymers",
    "category": "Materials Science",
    "title": "The long chains behind plastics",
    "desc": "Explore polymer structure and everyday properties.",
    "art": "network",
    "diagram": [
      "Monomers",
      "Chains",
      "Properties"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://openstax.org/books/chemistry-2e/pages/1-introduction",
    "slides": [
      {
        "title": "Molecular chains",
        "text": "Polymers are substances composed of macromolecules built from repeating structural units. Natural polymers include cellulose; synthetic polymers include polyethylene.",
        "label": "Molecular chains",
        "art": "network"
      },
      {
        "title": "Shape and motion",
        "text": "Chain length, branching, intermolecular interactions and crystallinity influence stiffness, flexibility and melting behavior.",
        "label": "Shape and motion",
        "art": "scales"
      },
      {
        "title": "Thermoplastics",
        "text": "Many thermoplastics soften on heating and harden on cooling, allowing reshaping under appropriate conditions. Repeated processing can also degrade material.",
        "label": "Thermoplastics",
        "art": "timeline"
      },
      {
        "title": "Cross-linked networks",
        "text": "Thermoset polymers form networks that generally do not remelt like thermoplastics. Chemical composition and processing affect reuse and disposal options.",
        "label": "Cross-linked networks",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "Which feature can influence a polymer's flexibility?",
        "options": [
          "Only the package label",
          "The number of planets",
          "Chain structure and interactions"
        ],
        "correct": 2,
        "why": "Molecular structure influences bulk behavior."
      },
      {
        "q": "Can every plastic be repeatedly melted and remolded?",
        "options": [
          "Yes, without degradation",
          "No, cross-linked thermosets behave differently",
          "Only natural polymers can"
        ],
        "correct": 1,
        "why": "Polymer structures determine thermal processing options."
      }
    ]
  },
  {
    "id": "composites",
    "category": "Materials Science",
    "title": "Building materials from different components",
    "desc": "Discover how composites combine useful properties.",
    "art": "network",
    "diagram": [
      "Matrix",
      "Reinforcement",
      "Interface"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://openstax.org/books/chemistry-2e/pages/1-introduction",
    "slides": [
      {
        "title": "A combined material",
        "text": "A composite combines distinguishable constituents to achieve useful properties. Reinforced concrete and fiber-reinforced polymers are examples.",
        "label": "A combined material",
        "art": "network"
      },
      {
        "title": "Matrix and reinforcement",
        "text": "In many composites, a matrix surrounds reinforcing fibers or particles. The components work together to transfer loads.",
        "label": "Matrix and reinforcement",
        "art": "scales"
      },
      {
        "title": "Direction matters",
        "text": "Fiber alignment can make a material much stronger or stiffer in one direction than another. Design must account for expected loading directions.",
        "label": "Direction matters",
        "art": "timeline"
      },
      {
        "title": "Interfaces and trade-offs",
        "text": "The bond between components influences load transfer and failure. Cost, repairability, environmental exposure and manufacturing quality also matter.",
        "label": "Interfaces and trade-offs",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "Why does fiber orientation matter in many composites?",
        "options": [
          "Properties can depend on loading direction",
          "Fibers eliminate all stresses",
          "Orientation only changes color"
        ],
        "correct": 0,
        "why": "Aligned reinforcement creates direction-dependent behavior."
      },
      {
        "q": "Does combining two materials guarantee better performance in every way?",
        "options": [
          "Yes, always",
          "Only when both are transparent",
          "No, properties and trade-offs depend on the design"
        ],
        "correct": 2,
        "why": "Composites must be selected for the actual application."
      }
    ]
  },
  {
    "id": "diodes",
    "category": "Electronics",
    "title": "How a diode directs current",
    "desc": "Understand semiconductor junctions and directional behavior.",
    "art": "network",
    "diagram": [
      "Junction",
      "Bias",
      "Current"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://openstax.org/books/college-physics-2e/pages/1-introduction-to-science-and-the-realm-of-physics-physical-quantities-and-units",
    "slides": [
      {
        "title": "Semiconductors",
        "text": "A semiconductor's electrical behavior can be controlled through composition, impurities, temperature and other conditions.",
        "label": "Semiconductors",
        "art": "network"
      },
      {
        "title": "A common junction",
        "text": "A p-n junction joins regions with different dominant charge carriers. A diode based on such a junction conducts much more readily in one bias direction than the other.",
        "label": "A common junction",
        "art": "scales"
      },
      {
        "title": "Forward and reverse bias",
        "text": "Forward bias can increase conduction. Reverse bias normally produces much smaller current until breakdown conditions, which depend on the device.",
        "label": "Forward and reverse bias",
        "art": "timeline"
      },
      {
        "title": "Useful functions",
        "text": "Diodes can rectify alternating signals, emit light in LEDs or provide protection in circuits. Real devices have voltage, current and temperature ratings.",
        "label": "Useful functions",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "What is rectification?",
        "options": [
          "Storing mechanical energy",
          "Converting an alternating electrical signal into a unidirectional one",
          "Changing a resistor into a battery"
        ],
        "correct": 1,
        "why": "Diodes can favor one direction of conduction."
      },
      {
        "q": "Are real diodes perfect one-way valves under every voltage?",
        "options": [
          "No, leakage and breakdown can occur",
          "Yes, without limits",
          "Only when no current flows"
        ],
        "correct": 0,
        "why": "Real components have nonideal behavior and ratings."
      }
    ]
  },
  {
    "id": "transistors",
    "category": "Electronics",
    "title": "The tiny switches inside modern electronics",
    "desc": "Discover how transistors control signals.",
    "art": "network",
    "diagram": [
      "Control",
      "Switch",
      "Amplify"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://openstax.org/books/college-physics-2e/pages/1-introduction-to-science-and-the-realm-of-physics-physical-quantities-and-units",
    "slides": [
      {
        "title": "A controllable device",
        "text": "A transistor is a semiconductor device that can control current or voltage in a circuit. Different transistor types operate in different ways.",
        "label": "A controllable device",
        "art": "network"
      },
      {
        "title": "A field-effect example",
        "text": "In a field-effect transistor, an electric field associated with a gate affects the conductivity of a channel between other terminals.",
        "label": "A field-effect example",
        "art": "scales"
      },
      {
        "title": "Digital switching",
        "text": "Digital circuits use transistors and other components to produce distinguishable logic states. Groups of transistors implement logic functions and memory.",
        "label": "Digital switching",
        "art": "timeline"
      },
      {
        "title": "Analog amplification",
        "text": "Transistors can also amplify signals when operated appropriately. Energy for amplification comes from a power supply, not from the input signal alone.",
        "label": "Analog amplification",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "What controls the channel of a typical field-effect transistor?",
        "options": [
          "A mechanical wheel",
          "A light bulb in every circuit",
          "The electric field associated with its gate"
        ],
        "correct": 2,
        "why": "Gate voltage influences channel conductivity."
      },
      {
        "q": "Where does the extra output energy in amplification come from?",
        "options": [
          "Nothing",
          "A power supply",
          "The signal's color"
        ],
        "correct": 1,
        "why": "Amplification requires energy from a supply."
      }
    ]
  },
  {
    "id": "capacitors",
    "category": "Electronics",
    "title": "How capacitors store electrical energy",
    "desc": "Explore charge separation and circuit timing.",
    "art": "network",
    "diagram": [
      "Charge",
      "Voltage",
      "Energy"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://openstax.org/books/college-physics-2e/pages/1-introduction-to-science-and-the-realm-of-physics-physical-quantities-and-units",
    "slides": [
      {
        "title": "Two conductors",
        "text": "A basic capacitor consists of conductors separated by an insulating region. Charge separation creates an electric field between them.",
        "label": "Two conductors",
        "art": "network"
      },
      {
        "title": "Capacitance",
        "text": "Capacitance relates stored charge magnitude to voltage. For an ideal linear capacitor, Q equals C times V.",
        "label": "Capacitance",
        "art": "scales"
      },
      {
        "title": "Energy and timing",
        "text": "The stored energy of an ideal linear capacitor is one half C times V squared. Charging through resistance produces a characteristic time scale related to resistance and capacitance.",
        "label": "Energy and timing",
        "art": "timeline"
      },
      {
        "title": "Applications and caution",
        "text": "Capacitors can smooth voltage changes and shape signals. Some retain hazardous charge even after equipment is disconnected; servicing requires appropriate expertise.",
        "label": "Applications and caution",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "If voltage doubles across a fixed ideal capacitor, how does stored energy change?",
        "options": [
          "It becomes four times as large",
          "It doubles",
          "It stays constant"
        ],
        "correct": 0,
        "why": "Energy is proportional to voltage squared."
      },
      {
        "q": "Can a disconnected capacitor retain charge?",
        "options": [
          "No, never",
          "Only if it is magnetic",
          "Yes"
        ],
        "correct": 2,
        "why": "Stored electric energy can remain after power is removed."
      }
    ]
  },
  {
    "id": "sensors",
    "category": "Electronics",
    "title": "Turning physical changes into signals",
    "desc": "Explore sensing, measurement and calibration.",
    "art": "network",
    "diagram": [
      "Measure",
      "Convert",
      "Calibrate"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://openstax.org/books/college-physics-2e/pages/1-introduction-to-science-and-the-realm-of-physics-physical-quantities-and-units",
    "slides": [
      {
        "title": "A physical input",
        "text": "Sensors respond to quantities such as light, temperature, pressure or motion. The output may be electrical, optical or another measurable signal.",
        "label": "A physical input",
        "art": "network"
      },
      {
        "title": "Transduction",
        "text": "A transducer converts one form of signal or energy into another. A thermistor, for example, changes resistance with temperature.",
        "label": "Transduction",
        "art": "scales"
      },
      {
        "title": "Calibration",
        "text": "Calibration compares instrument indications with known references under specified conditions. It helps establish the relationship between output and measured quantity.",
        "label": "Calibration",
        "art": "timeline"
      },
      {
        "title": "Uncertainty",
        "text": "Noise, drift, response time and environmental effects limit measurements. A digital display with many digits does not guarantee high accuracy.",
        "label": "Uncertainty",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "What is the purpose of calibration?",
        "options": [
          "Make every reading exact forever",
          "Relate instrument readings to known references",
          "Increase the display brightness"
        ],
        "correct": 1,
        "why": "Calibration establishes measurement relationships and uncertainty."
      },
      {
        "q": "Does displaying more digits guarantee greater accuracy?",
        "options": [
          "No",
          "Yes",
          "Only for temperature sensors"
        ],
        "correct": 0,
        "why": "Resolution and accuracy are different properties."
      }
    ]
  },
  {
    "id": "camera-exposure",
    "category": "Photography",
    "title": "How a camera controls exposure",
    "desc": "Understand aperture, shutter speed and ISO.",
    "art": "network",
    "diagram": [
      "Aperture",
      "Shutter",
      "ISO"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://openstax.org/books/college-physics-2e/pages/1-introduction-to-science-and-the-realm-of-physics-physical-quantities-and-units",
    "slides": [
      {
        "title": "Light collection",
        "text": "Exposure at the sensor depends on the light reaching it over time. Aperture and shutter duration are key controls.",
        "label": "Light collection",
        "art": "network"
      },
      {
        "title": "Aperture",
        "text": "A lower f-number represents a larger relative aperture, all else equal. A larger opening admits more light and often reduces depth of field.",
        "label": "Aperture",
        "art": "scales"
      },
      {
        "title": "Shutter duration",
        "text": "Longer exposure gathers more light but may record more motion blur. Shorter durations can better freeze motion under suitable conditions.",
        "label": "Shutter duration",
        "art": "timeline"
      },
      {
        "title": "ISO and noise",
        "text": "Digital ISO affects how recorded sensor signals are processed or amplified. Raising ISO does not itself collect more photons, and results depend on camera design.",
        "label": "ISO and noise",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "Which change collects more light, other settings equal?",
        "options": [
          "A higher ISO setting alone",
          "A smaller aperture opening",
          "A longer shutter duration"
        ],
        "correct": 2,
        "why": "Longer exposure allows more photons to reach the sensor."
      },
      {
        "q": "What can happen when shutter duration is increased for moving subjects?",
        "options": [
          "Movement always freezes",
          "Motion blur may increase",
          "The lens focal length doubles"
        ],
        "correct": 1,
        "why": "Motion can be recorded over the longer interval."
      }
    ]
  },
  {
    "id": "lenses",
    "category": "Photography",
    "title": "How a lens forms an image",
    "desc": "Explore focal length, focus and perspective.",
    "art": "network",
    "diagram": [
      "Light",
      "Focus",
      "Image"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://openstax.org/books/college-physics-2e/pages/1-introduction-to-science-and-the-realm-of-physics-physical-quantities-and-units",
    "slides": [
      {
        "title": "Refraction",
        "text": "Light changes direction when passing between materials with different refractive indices. Lenses use curved surfaces and optical materials to redirect light.",
        "label": "Refraction",
        "art": "network"
      },
      {
        "title": "Focal length",
        "text": "For a camera lens, focal length helps determine the field of view for a given sensor size. A longer focal length generally shows a narrower field.",
        "label": "Focal length",
        "art": "scales"
      },
      {
        "title": "Focus",
        "text": "A lens system adjusts the relationship between the subject and image plane to make chosen objects appear sharp. Depth of field describes the range of acceptably sharp distances.",
        "label": "Focus",
        "art": "timeline"
      },
      {
        "title": "Perspective",
        "text": "Camera position determines perspective relationships. Changing focal length without moving changes framing, not the geometric perspective of objects in the scene.",
        "label": "Perspective",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "What happens to field of view when focal length increases on the same sensor?",
        "options": [
          "It generally narrows",
          "It always widens",
          "It becomes unrelated to optics"
        ],
        "correct": 0,
        "why": "Longer focal lengths capture a narrower angular field."
      },
      {
        "q": "What determines the geometric perspective of a scene?",
        "options": [
          "ISO setting",
          "Image file compression",
          "Camera position"
        ],
        "correct": 2,
        "why": "Position determines viewing relationships and relative distances."
      }
    ]
  },
  {
    "id": "photographic-light",
    "category": "Photography",
    "title": "Reading light before taking a photograph",
    "desc": "Discover direction, contrast and softness.",
    "art": "network",
    "diagram": [
      "Direction",
      "Size",
      "Contrast"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://openstax.org/books/college-physics-2e/pages/1-introduction-to-science-and-the-realm-of-physics-physical-quantities-and-units",
    "slides": [
      {
        "title": "Direction",
        "text": "Light direction influences shadows and the visibility of surface texture. Side lighting often emphasizes shape through contrast.",
        "label": "Direction",
        "art": "network"
      },
      {
        "title": "Apparent size",
        "text": "A light source that appears large from a subject generally creates softer shadow edges than a small apparent source.",
        "label": "Apparent size",
        "art": "scales"
      },
      {
        "title": "Reflect and fill",
        "text": "A reflector can redirect existing light into shadow areas. Fill light can reduce contrast without changing the main light's position.",
        "label": "Reflect and fill",
        "art": "timeline"
      },
      {
        "title": "Color and interpretation",
        "text": "Different light sources have different spectral characteristics. White balance can adjust color rendering, though it cannot recover spectral information that was never captured.",
        "label": "Color and interpretation",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "Which tends to soften shadow edges?",
        "options": [
          "A smaller distant point source",
          "A larger apparent light source",
          "A faster autofocus motor"
        ],
        "correct": 1,
        "why": "A larger angular source illuminates more directions."
      },
      {
        "q": "What does a reflector do?",
        "options": [
          "Redirects existing light",
          "Creates energy from nothing",
          "Changes the subject's physical size"
        ],
        "correct": 0,
        "why": "Reflected light can brighten shadow regions."
      }
    ]
  },
  {
    "id": "migration",
    "category": "Zoology",
    "title": "Why animals travel across seasons",
    "desc": "Explore migration, cues and trade-offs.",
    "art": "network",
    "diagram": [
      "Resources",
      "Cues",
      "Journey"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://openstax.org/books/biology-2e/pages/1-introduction",
    "slides": [
      {
        "title": "Changing resources",
        "text": "Migration is a recurring movement between areas in many species. Food availability, breeding opportunities and climate can shape its timing and routes.",
        "label": "Changing resources",
        "art": "network"
      },
      {
        "title": "Navigation",
        "text": "Animals may use landmarks, celestial cues, odors, magnetic information or combinations of cues. Mechanisms differ between species.",
        "label": "Navigation",
        "art": "scales"
      },
      {
        "title": "Costs and benefits",
        "text": "Travel requires energy and can expose animals to hazards. Migration persists when its benefits can outweigh those costs under relevant conditions.",
        "label": "Costs and benefits",
        "art": "timeline"
      },
      {
        "title": "Changing environments",
        "text": "Habitat loss and climate shifts can disrupt stopover sites or timing. Conservation often requires protecting connected locations, not just breeding grounds.",
        "label": "Changing environments",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "Why might protecting only a breeding ground be insufficient?",
        "options": [
          "Migrants never travel outside breeding grounds",
          "Every species travels the same route",
          "Migrants may depend on stopover and wintering habitats"
        ],
        "correct": 2,
        "why": "Migration requires suitable habitats across its annual cycle."
      },
      {
        "q": "Do all migratory animals navigate using one identical mechanism?",
        "options": [
          "Yes, only stars",
          "No, species use diverse cues",
          "Yes, only smell"
        ],
        "correct": 1,
        "why": "Navigation strategies differ among species."
      }
    ]
  },
  {
    "id": "animal-communication",
    "category": "Zoology",
    "title": "How animals exchange information",
    "desc": "Explore signals through sound, scent and movement.",
    "art": "network",
    "diagram": [
      "Signal",
      "Receiver",
      "Context"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://openstax.org/books/biology-2e/pages/1-introduction",
    "slides": [
      {
        "title": "Signals and cues",
        "text": "Signals can affect another individual's behavior and have evolved through such effects. A cue may provide information without having evolved for communication.",
        "label": "Signals and cues",
        "art": "network"
      },
      {
        "title": "Different channels",
        "text": "Bird calls, chemical signals, body displays and vibrations can communicate information in different environments.",
        "label": "Different channels",
        "art": "scales"
      },
      {
        "title": "Costs and interpretation",
        "text": "Signals can have costs and may not always be reliable. Receivers respond according to context, experience and evolved mechanisms.",
        "label": "Costs and interpretation",
        "art": "timeline"
      },
      {
        "title": "Avoid human assumptions",
        "text": "A behavior that resembles a human gesture need not have the same meaning. Researchers compare observations and experiments to infer function.",
        "label": "Avoid human assumptions",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "What is a chemical communication example?",
        "options": [
          "A pheromone affecting another individual's behavior",
          "A mountain casting a shadow",
          "A random rock falling"
        ],
        "correct": 0,
        "why": "Chemical signals are important in many animals."
      },
      {
        "q": "Does a human-like gesture establish identical human-like intent?",
        "options": [
          "Yes, always",
          "Only in birds",
          "No, additional evidence is needed"
        ],
        "correct": 2,
        "why": "Similar behavior does not guarantee identical mental processes."
      }
    ]
  },
  {
    "id": "camouflage",
    "category": "Zoology",
    "title": "How animals disappear in plain sight",
    "desc": "Discover concealment, mimicry and predator perception.",
    "art": "network",
    "diagram": [
      "Pattern",
      "Background",
      "Perception"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://openstax.org/books/biology-2e/pages/1-introduction",
    "slides": [
      {
        "title": "Concealment",
        "text": "Camouflage reduces detection or recognition by observers. Effectiveness depends on the background, light and the observer's sensory system.",
        "label": "Concealment",
        "art": "network"
      },
      {
        "title": "Breaking outlines",
        "text": "Disruptive patterns can make body boundaries harder to recognize. Background matching can reduce differences between an animal and its surroundings.",
        "label": "Breaking outlines",
        "art": "scales"
      },
      {
        "title": "Mimicry differs",
        "text": "In some forms of mimicry, one organism resembles another organism or signal in a way that affects a receiver's behavior. Concealment and mimicry can overlap but are not identical.",
        "label": "Mimicry differs",
        "art": "timeline"
      },
      {
        "title": "Selection and context",
        "text": "Traits that improve survival or reproduction may become more common across generations. A pattern effective in one environment may be conspicuous in another.",
        "label": "Selection and context",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "Why can camouflage fail in a different habitat?",
        "options": [
          "Every animal sees the same colors",
          "Background and lighting change",
          "Camouflage never depends on environment"
        ],
        "correct": 1,
        "why": "Detection depends on the interaction between pattern and context."
      },
      {
        "q": "What is disruptive coloration intended to make harder?",
        "options": [
          "Recognition of body outlines",
          "Production of DNA",
          "Movement of Earth's plates"
        ],
        "correct": 0,
        "why": "Patterns can obscure recognizable boundaries."
      }
    ]
  },
  {
    "id": "social-insects",
    "category": "Zoology",
    "title": "How insect colonies coordinate",
    "desc": "Explore division of labor and distributed behavior.",
    "art": "network",
    "diagram": [
      "Workers",
      "Signals",
      "Colony"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://openstax.org/books/biology-2e/pages/1-introduction",
    "slides": [
      {
        "title": "Eusocial organization",
        "text": "Eusocial species have cooperative brood care, overlapping generations and reproductive division of labor. Many ants, termites and some bees and wasps are examples.",
        "label": "Eusocial organization",
        "art": "network"
      },
      {
        "title": "Local interactions",
        "text": "Workers respond to local cues and signals. Colony-level patterns can emerge without a central individual directing every action.",
        "label": "Local interactions",
        "art": "scales"
      },
      {
        "title": "Flexible roles",
        "text": "Task allocation can depend on age, physiology and colony needs. The details vary among species and may change as circumstances change.",
        "label": "Flexible roles",
        "art": "timeline"
      },
      {
        "title": "A queen is not a commander",
        "text": "In many species, queens specialize in reproduction rather than issuing detailed instructions. Colony organization emerges from many interactions.",
        "label": "A queen is not a commander",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "Does a queen typically direct every worker's individual task?",
        "options": [
          "Yes, like a human manager",
          "Only during daylight",
          "No, much coordination arises from local interactions"
        ],
        "correct": 2,
        "why": "Distributed behavior can organize colony activity."
      },
      {
        "q": "What is reproductive division of labor?",
        "options": [
          "Every individual has the same reproductive role",
          "Some individuals specialize more in reproduction than others",
          "Workers have no social interactions"
        ],
        "correct": 1,
        "why": "It is a defining feature of eusocial organization."
      }
    ]
  },
  {
    "id": "pollination",
    "category": "Botany",
    "title": "How flowering plants exchange pollen",
    "desc": "Follow pollination, fertilization and seed development.",
    "art": "network",
    "diagram": [
      "Pollen",
      "Transfer",
      "Seed"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://openstax.org/books/biology-2e/pages/1-introduction",
    "slides": [
      {
        "title": "Pollen transfer",
        "text": "Pollination is transfer of pollen to a receptive structure. In flowering plants, pollen typically reaches the stigma.",
        "label": "Pollen transfer",
        "art": "network"
      },
      {
        "title": "Different vectors",
        "text": "Wind, water and animals can move pollen, depending on the plant. Floral traits may influence which animals interact with flowers.",
        "label": "Different vectors",
        "art": "scales"
      },
      {
        "title": "Fertilization follows",
        "text": "A compatible pollen grain may germinate and grow a pollen tube. Fertilization occurs when gametes unite, not merely when pollen arrives.",
        "label": "Fertilization follows",
        "art": "timeline"
      },
      {
        "title": "Seeds and fruit",
        "text": "After successful reproduction, ovules can develop into seeds and ovaries commonly contribute to fruits. Some plants also reproduce without ordinary fertilization.",
        "label": "Seeds and fruit",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "Are pollination and fertilization identical?",
        "options": [
          "No, pollen transfer can precede fertilization",
          "Yes, always",
          "Only in wind-pollinated species"
        ],
        "correct": 0,
        "why": "Transfer and gamete fusion are distinct processes."
      },
      {
        "q": "What is one potential pollination vector?",
        "options": [
          "Gravity alone in every plant",
          "A computer processor",
          "Wind"
        ],
        "correct": 2,
        "why": "Wind can carry pollen between flowers."
      }
    ]
  },
  {
    "id": "tree-water",
    "category": "Botany",
    "title": "How trees move water upward",
    "desc": "Understand roots, xylem and transpiration.",
    "art": "network",
    "diagram": [
      "Roots",
      "Xylem",
      "Leaves"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://openstax.org/books/biology-2e/pages/1-introduction",
    "slides": [
      {
        "title": "Water enters roots",
        "text": "Water moves through soil and root tissues along water potential gradients. Root structure and soil conditions affect uptake.",
        "label": "Water enters roots",
        "art": "network"
      },
      {
        "title": "Xylem pathways",
        "text": "Xylem conducts water and dissolved minerals through much of the plant. Mature conducting elements in many plants form interconnected pathways.",
        "label": "Xylem pathways",
        "art": "scales"
      },
      {
        "title": "Transpiration",
        "text": "Evaporation from leaves contributes to negative pressure in xylem. Cohesion among water molecules helps maintain connected water columns.",
        "label": "Transpiration",
        "art": "timeline"
      },
      {
        "title": "Limits under stress",
        "text": "Drought can reduce water availability and promote loss of hydraulic conductivity. Plants can regulate water loss through stomata, with trade-offs for gas exchange.",
        "label": "Limits under stress",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "Which tissue primarily conducts water upward in a tree?",
        "options": [
          "Phloem only",
          "Xylem",
          "Petal pigment"
        ],
        "correct": 1,
        "why": "Xylem transports water and dissolved minerals."
      },
      {
        "q": "Why can closing stomata reduce photosynthesis?",
        "options": [
          "It restricts carbon dioxide exchange as well as water loss",
          "It eliminates all chlorophyll instantly",
          "It makes sunlight colder"
        ],
        "correct": 0,
        "why": "Stomata regulate exchange with surrounding air."
      }
    ]
  },
  {
    "id": "seed-dispersal",
    "category": "Botany",
    "title": "Why seeds travel away from their parents",
    "desc": "Explore wind, animals and other dispersal strategies.",
    "art": "network",
    "diagram": [
      "Seed",
      "Dispersal",
      "Establishment"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://openstax.org/books/biology-2e/pages/1-introduction",
    "slides": [
      {
        "title": "A new location",
        "text": "Dispersal moves seeds or other reproductive structures away from their origin. Distance can affect competition, colonization and survival.",
        "label": "A new location",
        "art": "network"
      },
      {
        "title": "Wind and water",
        "text": "Some seeds or fruits have structures that facilitate transport by wind or water. Success depends on conditions and where they arrive.",
        "label": "Wind and water",
        "art": "scales"
      },
      {
        "title": "Animals as carriers",
        "text": "Animals may carry seeds on their bodies, cache them or disperse them after eating fruit. Not every animal interaction benefits the seed.",
        "label": "Animals as carriers",
        "art": "timeline"
      },
      {
        "title": "Establishment",
        "text": "A dispersed seed must still survive and germinate under suitable conditions. Reaching a location is not the same as establishing a population.",
        "label": "Establishment",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "How can fruit-eating animals contribute to dispersal?",
        "options": [
          "By guaranteeing every seed germinates",
          "By eliminating all plant competition",
          "By moving viable seeds to another location"
        ],
        "correct": 2,
        "why": "Some seeds survive transport or passage through animals."
      },
      {
        "q": "Does arrival at a site guarantee establishment?",
        "options": [
          "Yes, every time",
          "No, survival and germination depend on conditions",
          "Only in winter"
        ],
        "correct": 1,
        "why": "Suitable environmental conditions are required."
      }
    ]
  },
  {
    "id": "thunderstorms",
    "category": "Meteorology",
    "title": "How thunderstorms develop",
    "desc": "Explore moisture, instability and rising air.",
    "art": "network",
    "diagram": [
      "Moisture",
      "Lift",
      "Instability"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://www.noaa.gov/education/resource-collections/weather-atmosphere",
    "slides": [
      {
        "title": "Three ingredients",
        "text": "Thunderstorm development commonly involves moisture, atmospheric instability and lifting that starts air rising. These ingredients vary across environments.",
        "label": "Three ingredients",
        "art": "network"
      },
      {
        "title": "Growing clouds",
        "text": "Rising moist air can cool and condense. Released latent heat can support further buoyancy under suitable conditions, producing deep convective clouds.",
        "label": "Growing clouds",
        "art": "scales"
      },
      {
        "title": "Electric charge",
        "text": "Interactions among particles inside storms can separate electric charge. Lightning is a rapid electrical discharge; thunder results from rapidly heated expanding air.",
        "label": "Electric charge",
        "art": "timeline"
      },
      {
        "title": "Hazard awareness",
        "text": "Thunderstorms can produce lightning, strong winds, hail and flooding. Follow official weather warnings and seek appropriate shelter when thunder is heard.",
        "label": "Hazard awareness",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "What produces thunder?",
        "options": [
          "Rapid expansion of air heated by lightning",
          "Clouds colliding like solid rocks",
          "The sound of raindrops alone"
        ],
        "correct": 0,
        "why": "Lightning rapidly heats the surrounding air."
      },
      {
        "q": "Does moisture alone guarantee a thunderstorm?",
        "options": [
          "Yes, at every temperature",
          "Only when clouds are white",
          "No, instability and lifting also matter"
        ],
        "correct": 2,
        "why": "Multiple conditions influence convection."
      }
    ]
  },
  {
    "id": "hurricanes",
    "category": "Meteorology",
    "title": "The engines of tropical cyclones",
    "desc": "Understand warm oceans, circulation and storm hazards.",
    "art": "network",
    "diagram": [
      "Ocean",
      "Convection",
      "Wind"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://www.noaa.gov/education/resource-collections/weather-atmosphere",
    "slides": [
      {
        "title": "A warm-core system",
        "text": "Tropical cyclones are organized low-pressure systems with rotating winds and deep convection. Their energy is linked to heat and moisture exchange with warm ocean surfaces.",
        "label": "A warm-core system",
        "art": "network"
      },
      {
        "title": "Favorable conditions",
        "text": "Warm water, moisture, sufficient rotation and relatively low disruptive vertical wind shear can favor development. Warm water alone does not guarantee formation.",
        "label": "Favorable conditions",
        "art": "scales"
      },
      {
        "title": "Structure and hazards",
        "text": "Stronger organized storms may develop an eye and eyewall. Wind, heavy rainfall, storm surge and waves can all cause damage.",
        "label": "Structure and hazards",
        "art": "timeline"
      },
      {
        "title": "Forecasting",
        "text": "Track and intensity predictions use observations and models. The forecast center line is not the boundary of hazards, and local official instructions matter.",
        "label": "Forecasting",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "What can power tropical cyclone convection?",
        "options": [
          "Cold dry air alone",
          "Heat and moisture from warm ocean surfaces",
          "Earth's magnetic field alone"
        ],
        "correct": 1,
        "why": "Ocean-atmosphere energy exchange supports convection."
      },
      {
        "q": "Does the forecast center line show the full area of possible impacts?",
        "options": [
          "No, hazards extend beyond it",
          "Yes, exactly",
          "Only rainfall occurs outside it"
        ],
        "correct": 0,
        "why": "Storm hazards can affect a broad region."
      }
    ]
  },
  {
    "id": "tornadoes",
    "category": "Meteorology",
    "title": "Why some storms produce tornadoes",
    "desc": "Understand rotating air and the limits of prediction.",
    "art": "network",
    "diagram": [
      "Storm",
      "Rotation",
      "Vortex"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://www.noaa.gov/education/resource-collections/weather-atmosphere",
    "slides": [
      {
        "title": "A rotating column",
        "text": "A tornado is a violently rotating column of air extending from a thunderstorm to the ground. A condensation funnel may not be visible along its entire length.",
        "label": "A rotating column",
        "art": "network"
      },
      {
        "title": "Storm environments",
        "text": "Many significant tornadoes occur with rotating thunderstorms called supercells. Wind shear and instability can support rotation, but not every supercell produces a tornado.",
        "label": "Storm environments",
        "art": "scales"
      },
      {
        "title": "Multiple pathways",
        "text": "Tornado formation depends on interactions within storms and near the surface. Some tornadoes form through different mechanisms, including non-supercell processes.",
        "label": "Multiple pathways",
        "art": "timeline"
      },
      {
        "title": "Warnings and safety",
        "text": "Meteorologists use radar, observations and forecasts. Tornadoes can occur with limited visibility; follow official warnings and seek recommended shelter.",
        "label": "Warnings and safety",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "Does every rotating supercell produce a tornado?",
        "options": [
          "Yes",
          "Only at night",
          "No"
        ],
        "correct": 2,
        "why": "Storm rotation is not sufficient to guarantee tornado formation."
      },
      {
        "q": "Can a tornado be dangerous without a clearly visible funnel?",
        "options": [
          "No",
          "Yes",
          "Only if it produces hail"
        ],
        "correct": 1,
        "why": "The rotating wind can reach the ground even when condensation is incomplete."
      }
    ]
  },
  {
    "id": "encryption",
    "category": "Cryptography",
    "title": "How encryption protects information",
    "desc": "Distinguish plaintext, ciphertext and keys.",
    "art": "network",
    "diagram": [
      "Plaintext",
      "Key",
      "Ciphertext"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://csrc.nist.gov/glossary",
    "slides": [
      {
        "title": "Make content unreadable",
        "text": "Encryption transforms plaintext into ciphertext using an algorithm and a key. Authorized decryption reconstructs plaintext under the appropriate conditions.",
        "label": "Make content unreadable",
        "art": "network"
      },
      {
        "title": "Symmetric keys",
        "text": "Symmetric encryption uses shared secret key material for encryption and decryption. Secure distribution and protection of keys are important.",
        "label": "Symmetric keys",
        "art": "scales"
      },
      {
        "title": "Public-key systems",
        "text": "Asymmetric cryptography uses related public and private keys. Different schemes support functions such as encryption, key agreement or digital signatures.",
        "label": "Public-key systems",
        "art": "timeline"
      },
      {
        "title": "Security has layers",
        "text": "Encryption can protect confidentiality but does not automatically authenticate every sender or secure compromised endpoints. Secure protocols combine protections.",
        "label": "Security has layers",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "What is ciphertext?",
        "options": [
          "The encrypted representation of information",
          "A secret key in every protocol",
          "A guarantee of sender identity"
        ],
        "correct": 0,
        "why": "Ciphertext results from encryption of plaintext."
      },
      {
        "q": "Does encryption alone guarantee a device is free from malware?",
        "options": [
          "Yes",
          "Only when using a long key",
          "No"
        ],
        "correct": 2,
        "why": "Endpoint compromise is a separate security issue."
      }
    ]
  },
  {
    "id": "hash-functions",
    "category": "Cryptography",
    "title": "Digital fingerprints of information",
    "desc": "Learn what cryptographic hashes can do.",
    "art": "network",
    "diagram": [
      "Input",
      "Digest",
      "Integrity"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://csrc.nist.gov/glossary",
    "slides": [
      {
        "title": "A fixed-length digest",
        "text": "A cryptographic hash maps input data to a digest of a specified length. The same algorithm and input produce the same digest.",
        "label": "A fixed-length digest",
        "art": "network"
      },
      {
        "title": "One-way design",
        "text": "Secure hash functions are designed to make finding an input from its digest computationally difficult and finding collisions difficult under relevant assumptions.",
        "label": "One-way design",
        "art": "scales"
      },
      {
        "title": "Integrity checks",
        "text": "Comparing a computed hash with a trusted expected hash can reveal many accidental or malicious changes. A hash obtained from an untrusted source does not independently establish integrity.",
        "label": "Integrity checks",
        "art": "timeline"
      },
      {
        "title": "Passwords need special treatment",
        "text": "Password storage should use suitable salted password-hashing schemes with appropriate cost parameters. A fast general-purpose hash alone is generally insufficient.",
        "label": "Passwords need special treatment",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "Can two different inputs theoretically share a fixed-length digest?",
        "options": [
          "No, every possible input has a unique digest",
          "Yes, collisions must exist for sufficiently many possible inputs",
          "Only identical files can collide"
        ],
        "correct": 1,
        "why": "A fixed output space cannot uniquely represent arbitrarily many inputs."
      },
      {
        "q": "Why must an expected hash come from a trusted source?",
        "options": [
          "An attacker could replace both a file and an untrusted hash",
          "Hash values are always secret",
          "Comparing hashes automatically verifies authorship"
        ],
        "correct": 0,
        "why": "Integrity depends on trusting the reference digest."
      }
    ]
  },
  {
    "id": "digital-signatures",
    "category": "Cryptography",
    "title": "How digital signatures verify a message",
    "desc": "Learn about signing, verification and identity.",
    "art": "network",
    "diagram": [
      "Private key",
      "Message",
      "Verification"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://csrc.nist.gov/glossary",
    "slides": [
      {
        "title": "An asymmetric tool",
        "text": "A digital signature scheme uses a private signing key and a related public verification key. Verification tests a signature against a message and public key.",
        "label": "An asymmetric tool",
        "art": "network"
      },
      {
        "title": "Detecting changes",
        "text": "A valid signature binds a particular message to the signing key under the scheme's security assumptions. Changing the message generally invalidates verification.",
        "label": "Detecting changes",
        "art": "scales"
      },
      {
        "title": "Identity is separate",
        "text": "A valid signature does not by itself establish a person's real-world identity. Certificates or other trusted arrangements can link keys to identities.",
        "label": "Identity is separate",
        "art": "timeline"
      },
      {
        "title": "Not secrecy",
        "text": "Signatures provide authenticity and integrity properties when properly used; they do not necessarily hide the message. Encryption and signing address different goals.",
        "label": "Not secrecy",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "Which key verifies a typical digital signature?",
        "options": [
          "The private signing key must be shared with everyone",
          "A random unrelated key",
          "The public verification key"
        ],
        "correct": 2,
        "why": "Public keys are used for verification."
      },
      {
        "q": "Does signing a message necessarily hide its contents?",
        "options": [
          "Yes, signatures are always encryption",
          "No",
          "Only if the message is short"
        ],
        "correct": 1,
        "why": "Signatures and confidentiality are distinct goals."
      }
    ]
  },
  {
    "id": "zoning",
    "category": "Urban Planning",
    "title": "How land-use rules shape cities",
    "desc": "Understand zoning, flexibility and trade-offs.",
    "art": "network",
    "diagram": [
      "Land use",
      "Rules",
      "Community"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://www.planning.org/aboutplanning/",
    "slides": [
      {
        "title": "Rules for development",
        "text": "Zoning and related land-use rules regulate activities and physical development in designated areas. The exact legal arrangements differ by jurisdiction.",
        "label": "Rules for development",
        "art": "network"
      },
      {
        "title": "Separation and mixing",
        "text": "Some rules separate uses such as industry and housing. Mixed-use approaches can allow homes, shops and services closer together.",
        "label": "Separation and mixing",
        "art": "scales"
      },
      {
        "title": "Trade-offs",
        "text": "Restrictions can affect housing supply, environmental exposure, traffic and neighborhood form. Their effects depend on the specific rule and market context.",
        "label": "Trade-offs",
        "art": "timeline"
      },
      {
        "title": "Changing a plan",
        "text": "Planning often involves public input, technical analysis and legal procedures. Competing goals require balancing accessibility, safety, affordability and other priorities.",
        "label": "Changing a plan",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "What can zoning regulate?",
        "options": [
          "Permitted uses and development characteristics",
          "The weather",
          "Every individual's private opinion"
        ],
        "correct": 0,
        "why": "Land-use regulations address activities and built form."
      },
      {
        "q": "Do all zoning rules have identical effects in every city?",
        "options": [
          "Yes",
          "Only rules with the same name do",
          "No"
        ],
        "correct": 2,
        "why": "Local markets and rule details matter."
      }
    ]
  },
  {
    "id": "transit",
    "category": "Urban Planning",
    "title": "Why public transit networks succeed or fail",
    "desc": "Explore coverage, frequency and transfers.",
    "art": "network",
    "diagram": [
      "Routes",
      "Frequency",
      "Access"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://www.planning.org/aboutplanning/",
    "slides": [
      {
        "title": "Two goals",
        "text": "Transit networks can emphasize geographic coverage, frequent service or a combination. Limited resources can create trade-offs between these objectives.",
        "label": "Two goals",
        "art": "network"
      },
      {
        "title": "Frequency",
        "text": "Frequent service reduces average waiting time for many trips. Reliability and coordinated schedules also influence the total time a passenger needs.",
        "label": "Frequency",
        "art": "scales"
      },
      {
        "title": "Connections",
        "text": "Transfers can connect many origins and destinations without providing a direct route for every possible pair. Transfer penalties can discourage some trips.",
        "label": "Connections",
        "art": "timeline"
      },
      {
        "title": "Access beyond the station",
        "text": "Walkable routes, affordability, accessibility and land use influence who can actually reach and use transit. Vehicle speed alone is not enough.",
        "label": "Access beyond the station",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "What can frequent service reduce?",
        "options": [
          "The need for all accessibility features",
          "Expected waiting time",
          "Every passenger's walking distance"
        ],
        "correct": 1,
        "why": "Shorter intervals between services can reduce waiting."
      },
      {
        "q": "Why include transfers in trip evaluation?",
        "options": [
          "They can add waiting and uncertainty",
          "They never affect total travel time",
          "Every transit system forbids them"
        ],
        "correct": 0,
        "why": "Transfers influence the usefulness of a network."
      }
    ]
  },
  {
    "id": "walkability",
    "category": "Urban Planning",
    "title": "What makes a neighborhood walkable",
    "desc": "Explore destinations, street networks and safety.",
    "art": "network",
    "diagram": [
      "Destinations",
      "Connections",
      "Comfort"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://www.planning.org/aboutplanning/",
    "slides": [
      {
        "title": "Nearby destinations",
        "text": "Walking becomes more practical when useful destinations are reachable within reasonable distances. Distance alone does not determine whether a route is comfortable.",
        "label": "Nearby destinations",
        "art": "network"
      },
      {
        "title": "Connected streets",
        "text": "Interconnected routes can reduce detours. Dead ends, barriers and limited crossings can make nearby destinations difficult to reach on foot.",
        "label": "Connected streets",
        "art": "scales"
      },
      {
        "title": "Safety and accessibility",
        "text": "Crossing design, traffic speed, lighting, curb ramps and surface conditions affect walking experiences and mobility access.",
        "label": "Safety and accessibility",
        "art": "timeline"
      },
      {
        "title": "Context and equity",
        "text": "People have different abilities, schedules and needs. Evaluate routes using observed conditions and community input rather than a single universal score.",
        "label": "Context and equity",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "Why might a shop 200 meters away be difficult to walk to?",
        "options": [
          "Short distance guarantees access",
          "It always requires a car",
          "A road barrier or lack of safe crossing may force a detour"
        ],
        "correct": 2,
        "why": "Network connectivity affects actual walking distance and safety."
      },
      {
        "q": "Does walkability mean the same experience for everyone?",
        "options": [
          "Yes, always",
          "No, accessibility needs and conditions differ",
          "Only in small towns"
        ],
        "correct": 1,
        "why": "Different people face different barriers."
      }
    ]
  },
  {
    "id": "prisoners-dilemma",
    "category": "Game Theory",
    "title": "When individual incentives undermine cooperation",
    "desc": "Explore the prisoner's dilemma without assuming selfishness is inevitable.",
    "art": "network",
    "diagram": [
      "Choices",
      "Payoffs",
      "Cooperation"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://openstax.org/books/principles-economics-3e/pages/10-2-oligopoly",
    "slides": [
      {
        "title": "A simplified game",
        "text": "Two participants each choose whether to cooperate or defect. Payoffs depend on both choices, and the standard dilemma specifies particular incentive rankings.",
        "label": "A simplified game",
        "art": "network"
      },
      {
        "title": "Individual incentives",
        "text": "In the one-shot standard prisoner's dilemma, defection gives each participant a better individual payoff regardless of the other's choice.",
        "label": "Individual incentives",
        "art": "scales"
      },
      {
        "title": "A worse shared outcome",
        "text": "Mutual defection produces a worse outcome for both than mutual cooperation. Individual incentives and collective welfare can therefore conflict.",
        "label": "A worse shared outcome",
        "art": "timeline"
      },
      {
        "title": "Repeated interaction",
        "text": "Future consequences, reputation, communication and institutional rules can alter incentives. Real cooperation depends on context rather than one mathematical model alone.",
        "label": "Repeated interaction",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "In the standard one-shot dilemma, which choice is individually dominant?",
        "options": [
          "Defection",
          "Cooperation",
          "A coin toss by definition"
        ],
        "correct": 0,
        "why": "Defection gives a higher individual payoff for either opposing choice."
      },
      {
        "q": "Which outcome is better for both than mutual defection?",
        "options": [
          "Mutual defection itself",
          "Changing the names of the players",
          "Mutual cooperation"
        ],
        "correct": 2,
        "why": "The dilemma arises because mutual cooperation is jointly preferable."
      }
    ]
  },
  {
    "id": "nash-equilibrium",
    "category": "Game Theory",
    "title": "When nobody wants to change alone",
    "desc": "Understand best responses and Nash equilibrium.",
    "art": "network",
    "diagram": [
      "Strategy",
      "Response",
      "Equilibrium"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://openstax.org/books/principles-economics-3e/pages/10-2-oligopoly",
    "slides": [
      {
        "title": "Strategic interaction",
        "text": "A player's outcome may depend on their own action and others' actions. A game describes available strategies and payoffs.",
        "label": "Strategic interaction",
        "art": "network"
      },
      {
        "title": "Best responses",
        "text": "A best response maximizes a player's payoff given other players' strategies. More than one best response can exist.",
        "label": "Best responses",
        "art": "scales"
      },
      {
        "title": "Nash equilibrium",
        "text": "A strategy profile is a Nash equilibrium if no player can improve their payoff by changing their strategy alone, holding the others' strategies fixed.",
        "label": "Nash equilibrium",
        "art": "timeline"
      },
      {
        "title": "Not necessarily the best world",
        "text": "An equilibrium need not maximize total welfare or be unique. Changes in rules, coordination or incentives can produce different outcomes.",
        "label": "Not necessarily the best world",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "What defines a Nash equilibrium?",
        "options": [
          "Everyone receives the same payoff",
          "No player can gain by a unilateral strategy change",
          "All players cooperate by definition"
        ],
        "correct": 1,
        "why": "Each strategy is a best response to the others."
      },
      {
        "q": "Does a Nash equilibrium necessarily maximize collective welfare?",
        "options": [
          "No",
          "Yes",
          "Only if two players participate"
        ],
        "correct": 0,
        "why": "Strategic stability is distinct from social optimality."
      }
    ]
  },
  {
    "id": "jet-engines",
    "category": "Aerospace",
    "title": "How a jet engine produces thrust",
    "desc": "Follow airflow through a turbine engine.",
    "art": "network",
    "diagram": [
      "Intake",
      "Combustion",
      "Exhaust"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://www1.grc.nasa.gov/beginners-guide-to-aeronautics/jet-engine/",
    "slides": [
      {
        "title": "Momentum change",
        "text": "A jet engine creates thrust by accelerating air and exhaust backward relative to the engine. The surrounding aircraft experiences an opposing force.",
        "label": "Momentum change",
        "art": "network"
      },
      {
        "title": "Compression and combustion",
        "text": "In a gas turbine engine, a compressor raises air pressure and fuel releases energy in the combustor. Hot gases expand downstream.",
        "label": "Compression and combustion",
        "art": "scales"
      },
      {
        "title": "Turbine work",
        "text": "A turbine extracts some energy from the gas flow to drive the compressor and, in many engines, a fan.",
        "label": "Turbine work",
        "art": "timeline"
      },
      {
        "title": "Different designs",
        "text": "Turbofan engines accelerate substantial bypass air as well as core flow. Engine suitability depends on speed, efficiency and operating environment.",
        "label": "Different designs",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "What drives the compressor in a typical gas turbine?",
        "options": [
          "A battery in every engine",
          "The landing gear",
          "A turbine extracting energy from hot gas"
        ],
        "correct": 2,
        "why": "The turbine and compressor are mechanically linked."
      },
      {
        "q": "Can an ordinary air-breathing jet engine operate in a vacuum as designed?",
        "options": [
          "Yes, indefinitely",
          "No, it needs intake air",
          "Only if it flies faster"
        ],
        "correct": 1,
        "why": "Air-breathing engines require surrounding air."
      }
    ]
  },
  {
    "id": "rocket-flight",
    "category": "Aerospace",
    "title": "Why rockets can work in space",
    "desc": "Understand thrust, propellant and reaching orbit.",
    "art": "network",
    "diagram": [
      "Mass",
      "Thrust",
      "Orbit"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://www1.grc.nasa.gov/beginners-guide-to-aeronautics/flight-to-orbit/",
    "slides": [
      {
        "title": "Expelling mass",
        "text": "A rocket accelerates propellant in one direction and experiences thrust in the opposite direction. The process does not require surrounding air to push against.",
        "label": "Expelling mass",
        "art": "network"
      },
      {
        "title": "Propellant and energy",
        "text": "Chemical rockets carry the reactants needed to release energy and expel hot gas. Different propulsion systems use different energy sources and propellants.",
        "label": "Propellant and energy",
        "art": "scales"
      },
      {
        "title": "Orbit requires motion",
        "text": "Reaching space and reaching orbit are different achievements. An orbit requires sufficient sideways motion in relation to gravity, not just altitude.",
        "label": "Orbit requires motion",
        "art": "timeline"
      },
      {
        "title": "Mass and efficiency",
        "text": "Carrying propellant adds mass that must also be accelerated. Spaceflight design must balance mission requirements, propulsion performance and structural mass.",
        "label": "Mass and efficiency",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "Why can a rocket generate thrust in a vacuum?",
        "options": [
          "It expels mass and conserves momentum",
          "It pushes on atmospheric air",
          "Gravity disappears"
        ],
        "correct": 0,
        "why": "Momentum exchange does not require external air."
      },
      {
        "q": "Does reaching a high altitude automatically establish an orbit?",
        "options": [
          "Yes, at every altitude",
          "Only if the vehicle stops",
          "No, appropriate velocity is also needed"
        ],
        "correct": 2,
        "why": "Orbit depends on position and velocity."
      }
    ]
  },
  {
    "id": "satellite-orbits",
    "category": "Aerospace",
    "title": "Why different satellites use different orbits",
    "desc": "Explore low Earth, polar and geostationary paths.",
    "art": "network",
    "diagram": [
      "Altitude",
      "Inclination",
      "Period"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://science.nasa.gov/learn/basics-of-space-flight/chapter5-1/",
    "slides": [
      {
        "title": "Orbital period",
        "text": "The time for an orbit depends on its size and the central body's gravity. Circular Earth orbits at higher altitude generally have longer periods.",
        "label": "Orbital period",
        "art": "network"
      },
      {
        "title": "Low Earth orbit",
        "text": "Many satellites orbit relatively close to Earth, enabling useful imaging or communications geometry. Their ground tracks move relative to the surface.",
        "label": "Low Earth orbit",
        "art": "scales"
      },
      {
        "title": "Geostationary orbit",
        "text": "A circular prograde equatorial orbit with a period matching Earth's sidereal rotation appears fixed above one longitude. Other geosynchronous orbits need not appear fixed.",
        "label": "Geostationary orbit",
        "art": "timeline"
      },
      {
        "title": "Choose for purpose",
        "text": "Altitude and inclination affect coverage, signal travel time, revisit patterns and launch requirements. No single orbit is best for every mission.",
        "label": "Choose for purpose",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "What makes a geostationary satellite appear fixed in the sky?",
        "options": [
          "It rests on a tower",
          "A circular equatorial prograde orbit matching Earth's sidereal rotation",
          "It has zero orbital velocity"
        ],
        "correct": 1,
        "why": "Its angular motion matches Earth's rotation."
      },
      {
        "q": "Are all geosynchronous orbits geostationary?",
        "options": [
          "No",
          "Yes, always",
          "Only if they are low Earth orbits"
        ],
        "correct": 0,
        "why": "Geostationary orbits have additional geometry requirements."
      }
    ]
  },
  {
    "id": "space-stations",
    "category": "Aerospace",
    "title": "Living in orbit without weight on the floor",
    "desc": "Explore free fall, life support and orbital research.",
    "art": "network",
    "diagram": [
      "Free fall",
      "Life support",
      "Research"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://www.nasa.gov/international-space-station/",
    "slides": [
      {
        "title": "Continuous free fall",
        "text": "A spacecraft in orbit and the objects inside it accelerate under gravity together. This creates the apparent weightlessness commonly called microgravity.",
        "label": "Continuous free fall",
        "art": "network"
      },
      {
        "title": "Life support",
        "text": "Crewed spacecraft need breathable air, pressure, water management, temperature control and other systems. Equipment monitors and maintains these conditions.",
        "label": "Life support",
        "art": "scales"
      },
      {
        "title": "Human adaptation",
        "text": "Reduced mechanical loading affects muscles and bones, among other physiological changes. Exercise and monitoring help manage some effects during missions.",
        "label": "Human adaptation",
        "art": "timeline"
      },
      {
        "title": "Research environment",
        "text": "Microgravity allows researchers to study processes affected by gravity-driven convection, sedimentation and mechanical loading. Experiments still require controls and careful interpretation.",
        "label": "Research environment",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "Why do astronauts float in an orbiting station?",
        "options": [
          "Earth's gravity is completely absent",
          "Air pressure pushes everyone upward",
          "They and the station are in continuous free fall"
        ],
        "correct": 2,
        "why": "Objects share nearly the same gravitational acceleration."
      },
      {
        "q": "What is one challenge of extended microgravity exposure?",
        "options": [
          "Immediate elimination of all metabolism",
          "Loss of muscle and bone strength",
          "The disappearance of oxygen atoms"
        ],
        "correct": 1,
        "why": "Reduced loading can affect musculoskeletal health."
      }
    ]
  },
  {
    "id": "balance-sheet",
    "category": "Accounting",
    "title": "A snapshot of what a business owns and owes",
    "desc": "Understand assets, liabilities and equity.",
    "art": "network",
    "diagram": [
      "Assets",
      "Liabilities",
      "Equity"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://openstax.org/books/principles-financial-accounting/pages/1-introduction",
    "slides": [
      {
        "title": "At a moment in time",
        "text": "A balance sheet reports an entity's financial position at a specified date. It differs from a report covering activity over a period.",
        "label": "At a moment in time",
        "art": "network"
      },
      {
        "title": "Assets and obligations",
        "text": "Assets are economic resources controlled by an entity under applicable accounting concepts. Liabilities represent present obligations to transfer economic resources.",
        "label": "Assets and obligations",
        "art": "scales"
      },
      {
        "title": "Equity",
        "text": "Equity is the residual interest after liabilities are deducted from assets. The basic accounting equation is assets equals liabilities plus equity.",
        "label": "Equity",
        "art": "timeline"
      },
      {
        "title": "A worked example",
        "text": "If a small business reports 80,000 dollars in assets and 30,000 dollars in liabilities, its equity is 50,000 dollars. This is not necessarily its market value.",
        "label": "A worked example",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "What is equity when assets are 80,000 and liabilities 30,000?",
        "options": [
          "50,000",
          "110,000",
          "30,000"
        ],
        "correct": 0,
        "why": "Subtract liabilities from assets."
      },
      {
        "q": "Does balance-sheet equity always equal the market value of the company?",
        "options": [
          "Yes",
          "Only if the company has cash",
          "No"
        ],
        "correct": 2,
        "why": "Accounting measurements and market valuations differ."
      }
    ]
  },
  {
    "id": "income-statement",
    "category": "Accounting",
    "title": "How a business measures profit",
    "desc": "Understand revenue, expenses and accounting periods.",
    "art": "network",
    "diagram": [
      "Revenue",
      "Expenses",
      "Profit"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://openstax.org/books/principles-financial-accounting/pages/1-introduction",
    "slides": [
      {
        "title": "A period of activity",
        "text": "An income statement reports financial performance over a period. It generally includes revenue and expenses recognized under applicable accounting rules.",
        "label": "A period of activity",
        "art": "network"
      },
      {
        "title": "Revenue is not always cash",
        "text": "Under accrual accounting, revenue recognition can occur before or after cash is received depending on the transaction and rules.",
        "label": "Revenue is not always cash",
        "art": "scales"
      },
      {
        "title": "Expenses and margin",
        "text": "Expenses reduce profit. Gross profit commonly equals revenue minus cost of goods sold, while net income reflects additional applicable income and expenses.",
        "label": "Expenses and margin",
        "art": "timeline"
      },
      {
        "title": "Profit has limits",
        "text": "Profit does not necessarily equal available cash. Evaluating performance requires considering cash flows, assets, liabilities and the accounting policies used.",
        "label": "Profit has limits",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "If revenue is 100 and cost of goods sold is 60, what is gross profit?",
        "options": [
          "160",
          "40",
          "60"
        ],
        "correct": 1,
        "why": "Gross profit is revenue less cost of goods sold."
      },
      {
        "q": "Can a profitable business have cash shortages?",
        "options": [
          "Yes",
          "No",
          "Only when revenue is zero"
        ],
        "correct": 0,
        "why": "Accrual profit and cash availability can differ."
      }
    ]
  },
  {
    "id": "cash-flow-statement",
    "category": "Accounting",
    "title": "Following the actual movement of cash",
    "desc": "Distinguish operating, investing and financing activities.",
    "art": "network",
    "diagram": [
      "Operating",
      "Investing",
      "Financing"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://openstax.org/books/principles-financial-accounting/pages/1-introduction",
    "slides": [
      {
        "title": "Cash movements",
        "text": "A cash flow statement explains changes in cash and cash equivalents over a period under the applicable reporting framework.",
        "label": "Cash movements",
        "art": "network"
      },
      {
        "title": "Operating cash",
        "text": "Operating activities typically include cash related to ordinary revenue-generating operations, such as many customer receipts and supplier payments.",
        "label": "Operating cash",
        "art": "scales"
      },
      {
        "title": "Investing cash",
        "text": "Investing activities often include purchases or sales of long-term productive assets. Such purchases can consume cash without being immediately expensed in full.",
        "label": "Investing cash",
        "art": "timeline"
      },
      {
        "title": "Financing cash",
        "text": "Borrowing, repayment and equity financing can change cash without representing ordinary sales. Classification details can differ by reporting rules.",
        "label": "Financing cash",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "Which activity commonly includes purchasing a building for business operations?",
        "options": [
          "Customer revenue",
          "Payroll withholding only",
          "Investing"
        ],
        "correct": 2,
        "why": "Acquisition of a long-term asset is normally investing activity."
      },
      {
        "q": "Does receiving loan proceeds normally represent sales revenue?",
        "options": [
          "Yes",
          "No",
          "Only for manufacturers"
        ],
        "correct": 1,
        "why": "Borrowing increases cash and creates an obligation rather than sales revenue."
      }
    ]
  },
  {
    "id": "home-insulation",
    "category": "Practical Skills",
    "title": "Why insulation helps homes stay comfortable",
    "desc": "Understand thermal resistance and air leakage.",
    "art": "network",
    "diagram": [
      "Heat",
      "Resistance",
      "Air seal"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://www.energy.gov/energysaver",
    "slides": [
      {
        "title": "Heat moves across temperature differences",
        "text": "Heating and cooling systems compensate for energy transferred through walls, ceilings, windows and air exchange.",
        "label": "Heat moves across temperature differences",
        "art": "network"
      },
      {
        "title": "Thermal resistance",
        "text": "Insulation slows heat transfer. R-value expresses thermal resistance under specified conditions; higher values indicate more resistance in comparable assemblies.",
        "label": "Thermal resistance",
        "art": "scales"
      },
      {
        "title": "Air leakage",
        "text": "Uncontrolled air movement can transport heat and moisture. Air sealing and ventilation serve different purposes and should be considered together.",
        "label": "Air leakage",
        "art": "timeline"
      },
      {
        "title": "Moisture and safety",
        "text": "Insulation projects must account for moisture control, ventilation and combustion safety. Building assemblies and climate influence appropriate choices.",
        "label": "Moisture and safety",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "What does a higher R-value generally indicate?",
        "options": [
          "Greater thermal resistance",
          "Greater electrical voltage",
          "More air leakage by definition"
        ],
        "correct": 0,
        "why": "R-value measures resistance to heat transfer."
      },
      {
        "q": "Does air sealing eliminate the need for appropriate ventilation?",
        "options": [
          "Yes",
          "Only in winter",
          "No"
        ],
        "correct": 2,
        "why": "Controlled ventilation remains important for indoor air quality."
      }
    ]
  },
  {
    "id": "emergency-kit",
    "category": "Practical Skills",
    "title": "How to plan a reliable household emergency kit",
    "desc": "Choose supplies based on needs and plausible interruptions.",
    "art": "network",
    "diagram": [
      "Needs",
      "Storage",
      "Review"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://www.ready.gov/",
    "slides": [
      {
        "title": "Plan by disruption",
        "text": "Consider power, water, transportation and communication interruptions. Household size, medical needs, climate and pets affect what is useful.",
        "label": "Plan by disruption",
        "art": "network"
      },
      {
        "title": "Choose essentials",
        "text": "Water, suitable shelf-stable food, lighting, communication supplies, first-aid supplies and essential medicines are common starting points. Follow official recommendations.",
        "label": "Choose essentials",
        "art": "scales"
      },
      {
        "title": "Accessible storage",
        "text": "Store supplies where they remain accessible during likely emergencies, protected from damage and inappropriate temperatures. Follow manufacturer storage instructions.",
        "label": "Accessible storage",
        "art": "timeline"
      },
      {
        "title": "Review the plan",
        "text": "Check expirations, replace depleted supplies and update contact information. Know official local alert channels and avoid unsafe indoor fuel-burning equipment.",
        "label": "Review the plan",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "Why tailor a kit to the household?",
        "options": [
          "Every household has identical needs",
          "People, pets and local risks differ",
          "Supplies never expire"
        ],
        "correct": 1,
        "why": "Planning should reflect realistic conditions and needs."
      },
      {
        "q": "Why inspect stored supplies periodically?",
        "options": [
          "Conditions, expiration dates and needs change",
          "To make food last forever",
          "To replace all emergency training"
        ],
        "correct": 0,
        "why": "Regular review helps maintain a usable kit."
      }
    ]
  },
  {
    "id": "consumer-scams",
    "category": "Practical Skills",
    "title": "How to spot misleading sales tactics",
    "desc": "Practice checking offers before making a commitment.",
    "art": "network",
    "diagram": [
      "Claim",
      "Terms",
      "Verification"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://consumer.ftc.gov/",
    "slides": [
      {
        "title": "Pressure to decide",
        "text": "Scams and misleading sales can use urgency, fear or unrealistic guarantees. Legitimate offers can also be time limited, so urgency alone proves little.",
        "label": "Pressure to decide",
        "art": "network"
      },
      {
        "title": "Check the total price",
        "text": "Look beyond advertised monthly payments or initial discounts. Recurring charges, required purchases and cancellation terms affect actual cost.",
        "label": "Check the total price",
        "art": "scales"
      },
      {
        "title": "Verify independently",
        "text": "Look for official contact details, relevant regulatory information and independent evidence. Avoid relying entirely on links or testimonials supplied by an unknown seller.",
        "label": "Verify independently",
        "art": "timeline"
      },
      {
        "title": "Protect payment information",
        "text": "Be cautious with demands for unusual or irreversible payment methods. If an offer seems suspicious, contact relevant institutions through independently verified channels.",
        "label": "Protect payment information",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "What is a useful response to an unrealistic guaranteed return claim?",
        "options": [
          "Pay immediately to preserve the offer",
          "Assume a testimonial proves it",
          "Verify independently and assess the risks before paying"
        ],
        "correct": 2,
        "why": "Guarantees require evidence and may conceal risk."
      },
      {
        "q": "Why examine cancellation terms before subscribing?",
        "options": [
          "They determine the screen resolution",
          "They affect future obligations and total cost",
          "They never affect payments"
        ],
        "correct": 1,
        "why": "Recurring fees and cancellation conditions matter."
      }
    ]
  },
  {
    "id": "perspective-art",
    "category": "Art & Design",
    "title": "How artists create depth on a flat surface",
    "desc": "Explore linear perspective and atmospheric cues.",
    "art": "network",
    "diagram": [
      "Horizon",
      "Vanishing point",
      "Depth"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://www.metmuseum.org/essays",
    "slides": [
      {
        "title": "Projecting a scene",
        "text": "Linear perspective represents spatial relationships from a viewpoint on a flat surface. Objects farther away often occupy a smaller visual angle.",
        "label": "Projecting a scene",
        "art": "network"
      },
      {
        "title": "Vanishing points",
        "text": "In perspective projection, sets of parallel lines not parallel to the image plane can appear to converge toward vanishing points.",
        "label": "Vanishing points",
        "art": "scales"
      },
      {
        "title": "Other depth cues",
        "text": "Overlap, relative scale, shading and atmospheric changes can suggest distance. Artists combine or intentionally depart from these cues.",
        "label": "Other depth cues",
        "art": "timeline"
      },
      {
        "title": "Artistic choice",
        "text": "Linear perspective is one representational system rather than a universal requirement of art. Other traditions and styles organize space differently.",
        "label": "Artistic choice",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "What can parallel railway tracks appear to do in a perspective image?",
        "options": [
          "Converge toward a vanishing point",
          "Physically meet in reality",
          "Remain the same apparent separation at all distances"
        ],
        "correct": 0,
        "why": "Projection makes distant parallel lines appear closer together."
      },
      {
        "q": "Must every artwork use linear perspective?",
        "options": [
          "Yes, to qualify as art",
          "Only abstract art must use it",
          "No"
        ],
        "correct": 2,
        "why": "Artists use many conventions and representational goals."
      }
    ]
  },
  {
    "id": "art-symbolism",
    "category": "Art & Design",
    "title": "How to interpret symbols in art",
    "desc": "Understand iconography, context and uncertainty.",
    "art": "network",
    "diagram": [
      "Image",
      "Context",
      "Interpretation"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://www.metmuseum.org/essays",
    "slides": [
      {
        "title": "A visual vocabulary",
        "text": "Artists and communities use images that can carry shared associations. A symbol may refer to religious ideas, political authority or everyday experience.",
        "label": "A visual vocabulary",
        "art": "network"
      },
      {
        "title": "Meaning depends on context",
        "text": "The same animal, object or color can have different meanings across periods, cultures and individual works.",
        "label": "Meaning depends on context",
        "art": "scales"
      },
      {
        "title": "Read multiple clues",
        "text": "Consider accompanying figures, inscriptions, the artwork's setting and historical sources. Repeated patterns can support an interpretation.",
        "label": "Read multiple clues",
        "art": "timeline"
      },
      {
        "title": "Avoid false certainty",
        "text": "Some meanings remain disputed or unknown. Good interpretation distinguishes visible details, historical evidence and a proposed explanation.",
        "label": "Avoid false certainty",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "Does a particular color always symbolize the same idea worldwide?",
        "options": [
          "Yes, every culture shares one code",
          "No, meanings vary across contexts",
          "Only red has a meaning"
        ],
        "correct": 1,
        "why": "Symbolic associations are historically and culturally situated."
      },
      {
        "q": "What strengthens an interpretation of an artwork's symbol?",
        "options": [
          "Evidence from the work and its historical context",
          "A guess without supporting details",
          "The price of the frame"
        ],
        "correct": 0,
        "why": "Contextual evidence helps assess possible meanings."
      }
    ]
  },
  {
    "id": "ocean-tides",
    "category": "Oceanography",
    "title": "Why oceans rise and fall",
    "desc": "Understand lunar and solar tides and local variation.",
    "art": "network",
    "diagram": [
      "Moon",
      "Sun",
      "Water level"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://oceanservice.noaa.gov/facts/springtide.html",
    "slides": [
      {
        "title": "Differential gravity",
        "text": "Tides arise primarily from differences in the Moon's and Sun's gravitational influence across Earth. The Moon has the larger tide-generating effect.",
        "label": "Differential gravity",
        "art": "network"
      },
      {
        "title": "Spring and neap tides",
        "text": "Near new and full moon, lunar and solar tidal effects reinforce one another, tending toward larger tidal ranges. Near quarter moons, ranges tend to be smaller.",
        "label": "Spring and neap tides",
        "art": "scales"
      },
      {
        "title": "Local patterns",
        "text": "Coastline shape, ocean depth and basin dynamics influence actual tidal timing and range. Not every coast experiences the same daily pattern.",
        "label": "Local patterns",
        "art": "timeline"
      },
      {
        "title": "Other water-level changes",
        "text": "Wind, atmospheric pressure, waves and river flow can affect observed water levels. Tide predictions do not capture every weather-related change.",
        "label": "Other water-level changes",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "When are spring tides generally expected?",
        "options": [
          "Only during the spring season",
          "Near every quarter moon",
          "Near new and full moon"
        ],
        "correct": 2,
        "why": "Aligned solar and lunar tidal influences increase the range."
      },
      {
        "q": "Why can actual water levels differ from astronomical tide predictions?",
        "options": [
          "Gravity stops acting during storms",
          "Weather and local water dynamics also matter",
          "Predictions include every possible disturbance"
        ],
        "correct": 1,
        "why": "Non-tidal influences affect observed water levels."
      }
    ]
  },
  {
    "id": "earthquakes",
    "category": "Earth Science",
    "title": "Why earthquakes shake the ground",
    "desc": "Understand faults, seismic waves and magnitude.",
    "art": "network",
    "diagram": [
      "Fault",
      "Stress",
      "Waves"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://www.usgs.gov/programs/earthquake-hazards",
    "slides": [
      {
        "title": "Stored strain",
        "text": "Movement of Earth's plates can build stress along faults. When a fault slips suddenly, stored elastic energy can be released as seismic waves.",
        "label": "Stored strain",
        "art": "network"
      },
      {
        "title": "Wave types",
        "text": "P waves are compressional and can travel through solids and fluids. S waves involve shear and do not propagate through ordinary liquids.",
        "label": "Wave types",
        "art": "scales"
      },
      {
        "title": "Magnitude and intensity",
        "text": "Magnitude describes the size of an earthquake at its source. Intensity describes shaking effects at a location and can vary with distance and local geology.",
        "label": "Magnitude and intensity",
        "art": "timeline"
      },
      {
        "title": "Hazard and preparedness",
        "text": "Earthquake risk depends on hazard, exposure and vulnerability. Precise prediction of individual earthquakes remains unavailable; follow local preparedness guidance.",
        "label": "Hazard and preparedness",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "Why can the same earthquake produce different shaking intensities in different places?",
        "options": [
          "Distance and local geological conditions vary",
          "Magnitude changes every second at the source",
          "All ground behaves identically"
        ],
        "correct": 0,
        "why": "Local conditions influence experienced shaking."
      },
      {
        "q": "Which waves cannot travel through ordinary liquids?",
        "options": [
          "P waves",
          "All seismic waves",
          "S waves"
        ],
        "correct": 2,
        "why": "Liquids cannot sustain the shear required by S waves."
      }
    ]
  },
  {
    "id": "population-change",
    "category": "Demography",
    "title": "How populations grow, age and move",
    "desc": "Explore birth rates, death rates and migration.",
    "art": "network",
    "diagram": [
      "Births",
      "Deaths",
      "Migration"
    ],
    "difficulty": "Beginner",
    "format": "Course",
    "source": "https://www.census.gov/topics/population.html",
    "slides": [
      {
        "title": "Population accounting",
        "text": "A population changes through births, deaths and movement across its defined boundaries. Births and immigration add people; deaths and emigration subtract them.",
        "label": "Population accounting",
        "art": "network"
      },
      {
        "title": "Rates and counts",
        "text": "A rate compares events with a population or person-time measure. Two regions with similar event counts may have very different rates.",
        "label": "Rates and counts",
        "art": "scales"
      },
      {
        "title": "Age structure",
        "text": "The distribution of ages influences future births, deaths, workforce patterns and service needs. Populations with equal totals can have different age structures.",
        "label": "Age structure",
        "art": "timeline"
      },
      {
        "title": "Projections are conditional",
        "text": "Demographic projections rely on assumptions about fertility, mortality and migration. They describe possible trajectories, not guaranteed future counts.",
        "label": "Projections are conditional",
        "art": "growth"
      }
    ],
    "questions": [
      {
        "q": "What contributes directly to population change?",
        "options": [
          "Only the size of a country's territory",
          "Births, deaths, immigration and emigration",
          "Only average income"
        ],
        "correct": 1,
        "why": "These components account for changes in population size."
      },
      {
        "q": "Why can demographic projections change?",
        "options": [
          "Their assumptions and observed conditions can change",
          "Every projection is a guaranteed outcome",
          "Age structure never changes"
        ],
        "correct": 0,
        "why": "Future rates and migration are uncertain."
      }
    ]
  }
]);

/* Subject-depth expansion: independently authored compact lessons, retained original course IDs. */
const depthReferences={"Accounting":"https://openstax.org/books/principles-financial-accounting/pages/1-introduction","Aerospace":"https://www1.grc.nasa.gov/beginners-guide-to-aeronautics/","Agriculture":"https://www.usda.gov/topics/farming","Anthropology":"https://library.si.edu/topic","Architecture":"https://library.si.edu/topic","Art & Design":"https://www.si.edu/educators/art-resources","Astronomy":"https://openstax.org/books/astronomy-2e/pages/1-introduction","Biology":"https://openstax.org/books/biology-2e/pages/1-introduction","Botany":"https://openstax.org/books/biology-2e/pages/1-introduction","Business":"https://www.sba.gov/business-guide","Career Development":"https://www.careeronestop.org/","Chemistry":"https://openstax.org/books/chemistry-2e/pages/1-introduction","Communication":"https://openstax.org/books/psychology-2e/pages/1-introduction","Computer Science":"https://openstax.org/books/introduction-computer-science/pages/index","Cryptography":"https://csrc.nist.gov/glossary","Cybersecurity":"https://www.cisa.gov/","Data Literacy":"https://openstax.org/books/introductory-statistics-2e/pages/1-introduction","Demography":"https://www.census.gov/topics/population.html","Earth Science":"https://www.usgs.gov/educational-resources/geology-education","Economics":"https://openstax.org/books/principles-economics-3e/pages/preface","Electronics":"https://openstax.org/books/college-physics-2e/pages/1-introduction-to-science-and-the-realm-of-physics-physical-quantities-and-units","Engineering":"https://openstax.org/k12/cte","Finance":"https://www.investor.gov/introduction-investing","Financial Literacy":"https://www.consumerfinance.gov/consumer-tools/","Food Science":"https://www.fda.gov/food","Forensic Science":"https://www.nist.gov/forensic-science","Game Theory":"https://openstax.org/books/principles-economics-3e/pages/10-2-oligopoly","Geography":"https://education.nationalgeographic.org/","Government":"https://constitution.congress.gov/","Health":"https://medlineplus.gov/","History":"https://www.britannica.com/","Home & Infrastructure":"https://www.energy.gov/energysaver","Human Biology":"https://openstax.org/books/anatomy-and-physiology-2e/pages/1-introduction","International Relations":"https://www.un.org/en/about-us/un-charter","Law & Civics":"https://www.uscourts.gov/about-federal-courts","Leadership":"https://openstax.org/books/organizational-behavior/pages/1-introduction","Linguistics":"https://www.linguisticsociety.org/","Literature":"https://www.poetryfoundation.org/education/glossary","Materials Science":"https://openstax.org/books/chemistry-2e/pages/1-introduction","Mathematics":"https://openstax.org/books/precalculus-2e/pages/1-introduction-to-functions","Media Literacy":"https://style.mla.org/lateral-reading/","Medicine":"https://medlineplus.gov/","Meteorology":"https://www.noaa.gov/education/resource-collections/weather-atmosphere","Music":"https://library.si.edu/topic","Mythology":"https://www.britannica.com/topic/myth","Nature":"https://openstax.org/books/biology-2e/pages/1-introduction","Neuroscience":"https://openstax.org/books/anatomy-and-physiology-2e/pages/1-introduction","Oceanography":"https://www.noaa.gov/education/resource-collections","Personal Development":"https://www.learningscientists.org/","Philosophy":"https://plato.stanford.edu/","Photography":"https://openstax.org/books/college-physics-2e/pages/1-introduction-to-science-and-the-realm-of-physics-physical-quantities-and-units","Physics":"https://openstax.org/books/college-physics-2e/pages/1-introduction-to-science-and-the-realm-of-physics-physical-quantities-and-units","Practical Skills":"https://www.ready.gov/","Productivity":"https://openstax.org/books/organizational-behavior/pages/1-introduction","Psychology":"https://openstax.org/books/psychology-2e/pages/1-introduction","Relationships":"https://openstax.org/books/psychology-2e/pages/1-introduction","Science":"https://openstax.org/subjects/science","Scientific Literacy":"https://openstax.org/books/introductory-statistics-2e/pages/1-introduction","Social Issues":"https://openstax.org/books/introduction-sociology-3e/pages/1-introduction","Sociology":"https://openstax.org/books/introduction-sociology-3e/pages/1-introduction","Statistics":"https://openstax.org/books/introductory-statistics-2e/pages/1-introduction","Systems & Logistics":"https://openstax.org/k12/cte","Technology":"https://www.nist.gov/","Transportation":"https://openstax.org/books/college-physics-2e/pages/1-introduction-to-science-and-the-realm-of-physics-physical-quantities-and-units","Urban Planning":"https://www.planning.org/aboutplanning/","World History":"https://openstax.org/books/world-history-volume-1/pages/1-introduction","World Religions":"https://www.britannica.com/topic/religion","Zoology":"https://openstax.org/books/biology-2e/pages/1-introduction"};
const depthSlug=s=>s.toLowerCase().normalize('NFKD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
function depthCourse(row){
 const [category,title,...parts]=row,id='depth-'+depthSlug(category)+'-'+depthSlug(title);
 const split=s=>{const i=s.indexOf(':');return {term:s.slice(0,i).trim(),definition:s.slice(i+1).trim()}};
 const terms=parts.map(split),seed=[...id].reduce((n,c)=>n+c.charCodeAt(0),0);
 const short=s=>s.length>20?s.slice(0,18).trim()+'…':s;
 const diagram=terms.slice(0,3).map(t=>short(t.term));
 const mix=(options,correct,n)=>{let k=n%options.length;return {options:options.slice(k).concat(options.slice(0,k)),correct:(correct-k+options.length)%options.length}};
 let a=seed%3,b=(a+1+(seed%2))%3;
 const q1={q:'Which concept matches this description? '+terms[a].definition,...mix(terms.slice(0,3).map(t=>t.term),a,Math.floor(seed/3)),why:terms[a].term+': '+terms[a].definition};
 const q2={q:'What best describes '+terms[b].term.toLowerCase()+'?',...mix(terms.slice(0,3).map(t=>t.definition),b,Math.floor(seed/7)+1),why:terms[b].term+': '+terms[b].definition};
 return {id,category,title,desc:terms[0].definition,art:'network',diagram,difficulty:'Beginner',format:'Course',source:depthReferences[category],depth:true,
 slides:terms.map((t,i)=>({title:t.term,text:t.definition,label:short(t.term),art:['network','scales','timeline','growth'][i]})),questions:[q1,q2]};
}
courses.push(...(window.LumenDepth||[]).map(depthCourse));


/* Applied subject expansion: authored lesson sequences and explanatory knowledge checks. */
function plusCourse(row,concept=false){
 const [category,title]=row, id='plus-'+depthSlug(category)+'-'+depthSlug(title), seed=[...id].reduce((n,c)=>n+c.charCodeAt(0),0);
 const layout=concept?({'Art & Design':['compare','compare','layers','compare','layers','timeline','compare','layers','compare','flow'],'Astronomy':['flow','cycle','flow','flow','timeline','cycle','layers','compare','map','scale'],'Biology':['flow','layers','flow','network','flow','layers','flow','cycle','cycle','network'],'Botany':['timeline','layers','timeline','network','layers','compare','compare','network','layers','compare'],'Business':['scale','flow','cycle','flow','compare','cycle','compare','flow','flow','network']}[category]?.[(window.LumenPlusConcepts||[]).filter(x=>x[0]===category).indexOf(row)]||'layers'):row[2];
 const split=s=>{const i=s.indexOf('~');return {term:s.slice(0,i).trim(),text:s.slice(i+1).trim()}};
 const parts=row.slice(concept?2:3,concept?6:7).map(split);
 const rotate=(q,options,why,n)=>{let k=n%3;return {q,options:options.slice(k).concat(options.slice(0,k)),correct:(3-k)%3,why}};
 const stop=new Set('a an the to of in on and or is are was were be been by with for from as at it its what which why how does do can could may might should would when where who not no yes all every always only some more most same one'.split(' '));
 const tokens=s=>String(s).toLowerCase().match(/[\p{L}\p{N}]+/gu)?.filter(x=>x.length>2&&!stop.has(x))||[];
 const choose=(q,answer,i)=>{let query=new Set(tokens(q+' '+answer)),best=-Infinity,pick=parts[i];for(const p of parts){let words=tokens(p.term+' '+p.text),term=tokens(p.term),score=words.reduce((n,x)=>n+(query.has(x)?1:0),0)+term.reduce((n,x)=>n+(query.has(x)?2:0),0);if(score>best){best=score;pick=p}}return pick};
 const written=concept?window.LumenPlusQuestions?.[category+':'+title]:row.slice(7,9);
 if(!written||written.length!==2)throw Error('Missing authored questions: '+title);
 const questions=written.map((s,i)=>{const [q,a,b,c,ref]=s.split('~');const p=ref!==undefined?parts[Number(ref)]:choose(q,a,i);return rotate(q,[a,b,c],p.text,Math.floor(seed/(i?7:3))+i)});
 return {id,category,title,desc:parts[0].text,art:'network',diagram:parts.slice(0,3).map(p=>p.term),difficulty:'Beginner',format:'Course',source:depthReferences[category],depth:true,plus:true,layout,
 slides:parts.map(p=>({title:p.term,text:p.text,label:p.term,art:'network'})),questions};
}
courses.push(...(window.LumenPlus||[]).map(r=>plusCourse(r)),...(window.LumenPlusConcepts||[]).map(r=>plusCourse(r,true)));

function plusArt(c,cls='cover',step=-1){
 const colors=[['#e9e0ca','#365345','#bc935d'],['#dce8df','#305d52','#bd9362'],['#e3ddec','#594d70','#aa845c'],['#dbe7eb','#3e5e70','#b69a61'],['#edddd4','#784e40','#bc835c'],['#e5e8d8','#456047','#a9945b']];
 const seed=[...c.id].reduce((n,a)=>n+a.charCodeAt(0),0),[bg,ink,accent]=colors[seed%colors.length],labels=c.slides.map(s=>s.label);
 const box=(x,y,w,h,active=false)=>'<rect x="'+x+'" y="'+y+'" width="'+w+'" height="'+h+'" rx="8" fill="'+(active?accent:'#fffaf0')+'" fill-opacity="'+(active?.85:.6)+'" stroke="'+ink+'" stroke-width="'+(active?2:1.1)+'"/>';
 const path=(d,extra='')=>'<path d="'+d+'" fill="none" stroke="'+ink+'" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" '+extra+'/>';
 const circle=(x,y,r,active=false)=>'<circle cx="'+x+'" cy="'+y+'" r="'+r+'" fill="'+(active?accent:'#fffaf0')+'" stroke="'+ink+'" stroke-width="'+(active?2.3:1.3)+'"/>';
 const txt=(x,y,s,size=11,max=17)=>{
 let lines=[],cur='';for(const word of String(s).split(/\s+/)){if(cur&&(cur+' '+word).length>max){lines.push(cur);cur=word}else cur+=(cur?' ':'')+word}if(cur)lines.push(cur);return '<text x="'+x+'" y="'+(y-(lines.length-1)*size*.57)+'" fill="'+ink+'" font-size="'+size+'" font-family="system-ui,sans-serif" font-weight="650" text-anchor="middle">'+lines.map((l,i)=>'<tspan x="'+x+'" dy="'+(i?size*1.15:0)+'">'+E(l)+'</tspan>').join('')+'</text>'};
 const active=i=>step===i, arrow=(x1,y1,x2,y2)=>{let a=Math.atan2(y2-y1,x2-x1),l=7;return path('M'+x1+' '+y1+'L'+x2+' '+y2+'M'+(x2-l*Math.cos(a-.55))+' '+(y2-l*Math.sin(a-.55))+'L'+x2+' '+y2+' '+(x2-l*Math.cos(a+.55))+' '+(y2-l*Math.sin(a+.55)))};
 let body='',kind=c.layout;
 if(kind==='flow'||kind==='timeline'){
 const pts=[[86,65],[274,65],[86,145],[274,145]];
 body=arrow(151,65,209,65)+arrow(274,94,274,116)+arrow(209,145,151,145);
 const order=[0,1,3,2];for(let i=0;i<4;i++){const [x,y]=pts[order[i]];body+=box(x-65,y-27,130,54,active(i))+txt(x,y-5,labels[i],11,19)+txt(x,y+17,String(i+1).padStart(2,'0'),8,10)}
 }else if(kind==='compare'||kind==='scale'||kind==='chart'){
 for(let i=0;i<4;i++){let x=18+(i%2)*165,y=35+Math.floor(i/2)*76;body+=box(x,y,159,64,active(i))+txt(x+79.5,y+12,['A','B','C','D'][i],9,8)+txt(x+79.5,y+36,labels[i],12,21)}
 body+=path('M180 40V174','stroke-dasharray="2 5" opacity=".45"');
 }else if(kind==='layers'){
 for(let i=0;i<4;i++){let x=28+i*12,y=26+i*39;body+=box(x,y,304-i*24,34,active(i))+txt(180,y+20,labels[i],11,29)}
 }else if(kind==='cycle'){
 const pts=[[180,49],[281,103],[180,158],[79,103]];
 body=arrow(229,58,251,80)+arrow(251,126,229,148)+arrow(131,148,109,126)+arrow(109,80,131,58);
 for(let i=0;i<4;i++){const [x,y]=pts[i];body+=box(x-56,y-21,112,42,active(i))+txt(x,y+4,labels[i],10,15)}
 }else if(kind==='network'||kind==='tree'||kind==='map'){
 let pts=[[180,48],[81,107],[279,107],[180,165]];body=path('M155 64L106 89M205 64L254 89M106 126L155 148M254 126L205 148','stroke-dasharray="4 5" opacity=".75"');for(let i=0;i<4;i++){let [x,y]=pts[i];body+=box(x-63,y-21,126,42,active(i))+txt(x,y+4,labels[i],10,19)}
 }else{
 for(let i=0;i<4;i++){let x=24+(i%2)*160,y=28+Math.floor(i/2)*79;body+=box(x,y,152,70,active(i))+txt(x+76,y+37,labels[i],11,20)}
 }
 return '<svg class="'+E(cls)+'" viewBox="0 0 360 220" role="img" aria-label="'+E('Key concepts: '+labels.join(', '))+'" preserveAspectRatio="xMidYMid meet" style="background:'+bg+'"><rect width="360" height="220" rx="0" fill="'+bg+'"/><path d="M12 23V12h11m314 196h11v-11" stroke="'+ink+'" fill="none" opacity=".4"/>'+body+txt(180,205,step>=0?'IDEA '+(step+1)+' OF 4':'CONCEPT MAP',9,25)+'</svg>';
}


/* Content revisions retain stable course IDs and question positions. */
const qualityRevision='2026-11-25.1';
const qualityRows=[...(window.LumenQualityReviewed||[]).map(row=>[qualityRevision,row]),...(window.LumenQualityNext||[]).map(row=>['2026-11-25.2',row]),...(window.LumenQualityBatch3||[]).map(row=>['2026-11-25.3',row]),...(window.LumenQualityBatch4||[]).map(row=>['2026-11-26.1',row])];
for(const [revision,[id,difficulty,source,...parts]] of qualityRows){
 const c=courses.find(x=>x.id===id);if(!c)throw Error('Unknown revised course: '+id);
 if(parts.length!==6)throw Error('Malformed revised lesson: '+id);
 const slides=parts.slice(0,4).map((p,i)=>{const [title,text]=p.split('~');return {title,text,label:title,art:c.slides[i]?.art||'network'}});
 const questions=parts.slice(4).map((p,i)=>{const [q,correct,b,c2,why]=p.split('~'),options=[correct,b,c2],offset=([...id].reduce((n,ch)=>n+ch.charCodeAt(0),0)+i)%3;return {q,options:options.slice(offset).concat(options.slice(0,offset)),correct:(3-offset)%3,why}});
 Object.assign(c,{difficulty,source,slides,questions,desc:slides[0].text,diagram:slides.slice(0,3).map(s=>s.title),editorialRevision:revision});
}
function revisionOf(c){return c.editorialRevision||'original'}

const K='lumen-v1', day=(t=Date.now())=>{const d=new Date(t);return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0')};
const fresh=()=>({theme:'light',goal:10,interests:[],onboarded:false,progress:{},saved:{},notes:{},review:{},activity:{},custom:[],knowledge:{},attempts:0,correct:0});
let state=fresh();try{const s=JSON.parse(localStorage.getItem(K));if(s&&typeof s==='object')state={...fresh(),...s};}catch(e){}
function persist(){if(window.LumenLocalProfiles?.markChanged()||window.LumenAccounts?.markChanged())return;try{localStorage.setItem(K,JSON.stringify(state))}catch(e){notify('Storage unavailable — progress may not survive a refresh.')}}
const all=()=>courses.concat(state.custom), get=id=>all().find(c=>c.id===id), categories=()=>[...new Set(all().map(c=>c.category))].sort();
const progress=id=>state.progress[id]||{step:0,done:false};
const checkResult=c=>{const check=progress(c.id).check;return check?.version===revisionOf(c)&&check.total===c.questions.length&&Number.isInteger(check.correct)&&check.correct>=0&&check.correct<=check.total?check:null};
const understanding=c=>{let check=checkResult(c);return check?check.correct===check.total?'Knowledge check passed':'Review recommended':progress(c.id).done?'Knowledge check not recorded':''};const due=()=>Object.entries(state.review).filter(([k,v])=>v.next<=Date.now()&&get(k.split(':')[0])).sort((a,b)=>a[1].next-b[1].next);
const activity=()=>state.activity[day()]||{seconds:0,lessons:0};const completed=()=>all().filter(c=>progress(c.id).done);
function log(seconds,lessons=0){const a=activity();state.activity[day()]={seconds:a.seconds+Math.max(0,Math.min(seconds,1800)),lessons:a.lessons+lessons};persist()}
function streak(){let n=0,d=new Date();if(!state.activity[day()]?.seconds)d.setDate(d.getDate()-1);while(state.activity[day(d)]?.seconds){n++;d.setDate(d.getDate()-1)}return n}
const duration=c=>Math.max(2,Math.ceil(c.slides.length*.7+c.questions.length*.6));
const palette={mind:['#e8c9a0','#694d3f','#a65f49'],scales:['#d9dfca','#41614d','#bd8651'],growth:['#d4dfcc','#315c4d','#d4a760'],orbit:['#d8d6e4','#514e73','#d0a174'],nature:['#e0dfb8','#536b4c','#a97641'],network:['#d3e1dc','#34645c','#c78860'],timeline:['#ebd6bc','#74583f','#a16d50'],chance:['#e0d9e8','#685080','#bc8d63'],chart:['#d4e1cc','#43644e','#d5a55c']};
function artwork(kind,cls='cover'){let k=kind==='compound'?'growth':kind==='supply'?'scales':kind==='coin'?'chance':kind;const [bg,ink,acc]=palette[k]||palette.network;let a='';
if(k==='mind')a='<path d="M147 161c-26-6-37-24-37-48 0-35 25-59 65-59 35 0 64 25 64 61l-18 19v35h-36v-26" fill="'+acc+'" opacity=".7"/><path d="M166 68c-18-12-37 6-30 23-19 11-14 38 6 40 4 16 29 20 36 5 17 8 36-4 34-20 19-14 5-40-10-38-6-15-25-19-36-10z" fill="none" stroke="'+ink+'" stroke-width="3"/><path d="M155 88q18 5 12 25m21-29q-16 16-4 32m-31 4 12 10m23-14 12 12" stroke="'+ink+'" fill="none" stroke-width="2"/>';
else if(k==='orbit')a='<ellipse cx="180" cy="110" rx="116" ry="49" transform="rotate(-19 180 110)" fill="none" stroke="'+ink+'" stroke-width="2"/><ellipse cx="180" cy="110" rx="88" ry="72" transform="rotate(34 180 110)" fill="none" stroke="'+ink+'" stroke-dasharray="4 6"/><circle cx="180" cy="110" r="32" fill="'+acc+'"/><circle cx="280" cy="75" r="15" fill="'+ink+'"/><circle cx="116" cy="157" r="8" fill="'+ink+'"/>';
else if(k==='growth'||k==='chart')a='<path d="M66 168h235M66 168V47" fill="none" stroke="'+ink+'" stroke-width="2"/>'+[29,44,66,90,125].map((v,i)=>'<rect x="'+(86+i*42)+'" y="'+(167-v)+'" width="27" height="'+v+'" rx="4" fill="'+ink+'" opacity="'+(.45+i*.13)+'"/>').join('')+'<path d="M89 140Q190 132 280 37l-17 2m17-2-2 17" fill="none" stroke="'+acc+'" stroke-width="4" stroke-linecap="round"/>';
else if(k==='scales')a='<path d="M180 47v112m-40 9h80M85 76h190M85 76 50 132h70zm190 0-35 56h70z" stroke="'+ink+'" stroke-width="4" stroke-linejoin="round" fill="none"/><path d="M50 132q35 35 70 0m120 0q35 35 70 0" fill="'+acc+'" stroke="'+ink+'" stroke-width="2"/><circle cx="180" cy="76" r="8" fill="'+acc+'"/>';
else if(k==='nature')a='<path d="M180 185V47m0 60q-57-60-91-38 16 47 91 62m0 16q52-74 99-66-14 59-99 82m0-77q31-54 56-48-1 34-56 62" stroke="'+ink+'" stroke-width="3" fill="'+acc+'" fill-opacity=".65"/><path d="M63 187h234" stroke="'+ink+'" stroke-width="2"/>';
else if(k==='timeline')a='<path d="M52 117h256" stroke="'+ink+'" stroke-width="3"/>'+[70,143,217,290].map((x,i)=>'<circle cx="'+x+'" cy="117" r="9" fill="'+ink+'"/><path d="M'+x+' 117v'+(i%2?'-43':'43')+'" stroke="'+ink+'" stroke-width="2"/><rect x="'+(x-24)+'" y="'+(i%2?42:153)+'" width="48" height="28" rx="5" fill="'+acc+'"/>').join('');
else if(k==='chance')a='<g transform="rotate(-12 135 110)"><rect x="85" y="60" width="100" height="100" rx="17" fill="'+ink+'"/>'+[[110,85],[160,85],[135,110],[110,135],[160,135]].map(p=>'<circle cx="'+p[0]+'" cy="'+p[1]+'" r="7" fill="'+bg+'"/>').join('')+'</g><circle cx="235" cy="117" r="48" fill="'+acc+'" stroke="'+ink+'" stroke-width="2"/><circle cx="235" cy="117" r="37" fill="none" stroke="'+ink+'"/><text x="235" y="130" font-family="Georgia" font-size="38" text-anchor="middle" fill="'+ink+'">½</text>';
else a='<path d="M78 83 180 53 281 84 254 159 180 110 106 159 78 83 180 110 281 84M180 53v57m-74 49 148 0" stroke="'+ink+'" stroke-width="2.5" fill="none"/>'+[[78,83],[180,53],[281,84],[254,159],[180,110],[106,159]].map((p,i)=>'<circle cx="'+p[0]+'" cy="'+p[1]+'" r="'+(i===4?19:12)+'" fill="'+(i===4?acc:ink)+'" stroke="'+bg+'" stroke-width="3"/>').join('');
return '<svg class="'+cls+'" viewBox="0 0 360 220" role="img" aria-label="'+E(k+' conceptual illustration')+'" preserveAspectRatio="xMidYMid meet" style="background:'+bg+'"><rect width="360" height="220" fill="'+bg+'"/><circle cx="180" cy="110" r="97" fill="none" stroke="'+ink+'" stroke-opacity=".13"/><path d="M20 27h27m-13-13v27M325 193h14m-7-7v14" stroke="'+ink+'" stroke-opacity=".45"/>'+a+'</svg>'}

const editorialPal={bias:['#e8cdb0','#6d483e','#b96d53'],memory:['#d9dfd3','#38564b','#b38b50'],compound:['#dce7ce','#315b45','#d0a04d'],inflation:['#f1dfb5','#8a6340','#bc7e4e'],supply:['#e1dfc8','#3e654e','#bf8753'],stoic:['#e6d7ca','#795747','#a98463'],evolution:['#dbe1c4','#536945','#b48e4d'],space:['#d9d9ea','#414c73','#d7a56a'],internet:['#d5e4df','#2d645b','#b78565'],ai:['#d8dfe6','#4c6175','#c78e63'],history:['#ecd9bf','#77563c','#ab714b'],probability:['#e3d9e9','#634c78','#b9875c'],sleep:['#d4dce7','#465878','#cbb080'],listening:['#eddbc9','#785d54','#b77d69'],government:['#e0e3d6','#52644f','#b28a55'],nature:['#dce4ce','#435f44','#c59b61']};

function conceptArt(c,cls='cover',step=-1){
const palettes=[['#e7d9bb','#73543b','#bc8554'],['#dce5d3','#355b48','#bd9052'],['#dfd9eb','#5b4a76','#bc8d61'],['#d4e4df','#35665d','#bc8966'],['#efd9cc','#815949','#bb7c69'],['#d9e1ed','#4a5c7a','#c5a26c']];
const seed=[...c.id].reduce((a,b)=>a+b.charCodeAt(0),0),[bg,ink,acc]=palettes[seed%palettes.length];
const labels=step<0?c.diagram:[c.slides[step].label,...c.diagram.filter(x=>x!==c.slides[step].label)].slice(0,3);
const esc=E, txt=(x,y,t,size=10)=>'<text x="'+x+'" y="'+y+'" fill="'+ink+'" font-size="'+size+'" font-weight="700" text-anchor="middle" font-family="system-ui,sans-serif">'+esc(t)+'</text>';
const node=(x,y,n,t)=>'<circle cx="'+x+'" cy="'+y+'" r="29" fill="'+(n===1?acc:bg)+'" stroke="'+ink+'" stroke-width="1.8"/><text x="'+x+'" y="'+(y+6)+'" font-size="19" font-family="Georgia" fill="'+ink+'" text-anchor="middle">'+(n+1)+'</text>'+txt(x,y+47,t,t.length>17?9:11);
const pts=[[69,96],[180,96],[291,96]];
let body=pts.map((p,i)=>node(p[0],p[1],i,labels[i]||'')).join('');
body+='<path d="M101 96h47m64 0h47" stroke="'+ink+'" stroke-width="1.6" stroke-dasharray="3 5" fill="none"/>';
return '<svg class="'+cls+'" viewBox="0 0 360 220" role="img" aria-label="'+esc('Key ideas: '+labels.join(', '))+'" preserveAspectRatio="xMidYMid meet" style="background:'+bg+'"><rect width="360" height="220" fill="'+bg+'"/><circle cx="180" cy="107" r="96" stroke="'+ink+'" fill="none" opacity=".09"/><path d="M19 27v-8h8m306 174h8v-8" stroke="'+ink+'" fill="none" opacity=".5"/>'+body+txt(180,188,step<0?'THREE KEY IDEAS':'KEY CONCEPTS',10)+'</svg>';
}

function editorial(c,cls='cover',step=-1){
const revisedArt=window.LumenQualityArt?.(c,cls,step);if(revisedArt)return revisedArt;
if(c.plus)return plusArt(c,cls,step);
if(c.diagram)return conceptArt(c,cls,step);
if(!editorialPal[c.id])return artwork(step>=0?c.slides[step].art:c.art,cls);
const [bg,ink,acc]=editorialPal[c.id], line='stroke="'+ink+'" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"', fill='fill="'+ink+'"', gold='fill="'+acc+'"';let a='';
const path=(d,extra='')=>'<path d="'+d+'" '+line+' fill="none" '+extra+'/>';
const circle=(x,y,r,color=ink,extra='')=>'<circle cx="'+x+'" cy="'+y+'" r="'+r+'" fill="'+color+'" '+extra+'/>';
const rect=(x,y,w,h,color=ink,r=3)=>'<rect x="'+x+'" y="'+y+'" width="'+w+'" height="'+h+'" rx="'+r+'" fill="'+color+'"/>';
const label=(x,y,t,size=11)=>'<text x="'+x+'" y="'+y+'" font-family="system-ui,sans-serif" font-weight="600" font-size="'+size+'" letter-spacing=".7" fill="'+ink+'" text-anchor="middle">'+E(t)+'</text>';
const dots=(pts)=>pts.map((p,i)=>circle(p[0],p[1],p[2]||5,i%3===0?acc:ink)).join('');
switch(c.id){
case 'bias':a=path('M127 172v-23c-22-6-37-24-37-47 0-33 26-59 61-59s61 25 61 58l15 22h-22v26h-35v23')+'<path d="M126 73q-26 17-8 38-10 23 15 31 17 8 29-10 23 8 32-12 16-14 1-33-4-22-28-20-20-12-41 6z" '+line+' fill="'+acc+'" fill-opacity=".55"/>'+path('M132 84q20 8 9 24m26-34q-11 17 4 34m-31 17q12-10 28 6')+path('M240 64h54m-54 0 14-9m-14 9 14 9M294 126h-54m54 0-14-9m14 9-14 9')+circle(266,95,9,acc)+label(265,152,'PERCEPTION',9);break;
case 'memory':a=path('M180 45c-12 29-64 32-81 65s19 61 53 39m28-104c12 29 64 32 81 65s-19 61-53 39M180 45v125M118 98l62 20 62-20M152 149l28-31 28 31')+dots([[180,45,10],[118,98,9],[242,98,9],[180,118,15],[152,149,8],[208,149,8],[180,170,9]])+label(180,197,'ENCODE · RETRIEVE · REPEAT',9);break;
case 'compound':a=path('M55 171H307M55 171V48')+[24,35,52,76,108].map((v,i)=>rect(78+i*43,170-v,28,v,i===4?acc:ink,4)).join('')+path('M84 139Q196 139 283 46l-18 2m18-2-1 17')+circle(283,46,5,acc)+label(180,196,'GROWTH BUILDS ON GROWTH',9);break;
case 'inflation':a=rect(52,60,96,108,ink,8)+rect(57,65,86,98,bg,5)+rect(212,44,96,124,ink,8)+rect(217,49,86,114,bg,5)+path('M148 114h64m-12-9 12 9-12 9')+label(100,91,'BASKET',10)+label(100,131,'$100',25)+label(260,76,'BASKET',10)+label(260,125,'$105',25)+label(180,193,'SAME GOODS · HIGHER PRICE',9);break;
case 'supply':a=path('M58 170H305M58 170V39')+path('M74 151 287 52')+'<path d="M74 51 287 151" stroke="'+acc+'" stroke-width="3" fill="none"/>'+path('M58 101h123v69','stroke-dasharray="4 5"')+circle(181,101,8,ink,'stroke="'+bg+'" stroke-width="3"')+label(260,48,'SUPPLY',9)+label(260,168,'DEMAND',9)+label(180,195,'EQUILIBRIUM',9);break;
case 'stoic':a=path('M72 170h216M93 170l87-124 87 124M114 170l66-94 66 94')+circle(180,120,27,acc)+circle(180,120,42,'none','stroke="'+ink+'" stroke-dasharray="3 5" stroke-width="1.4"')+label(180,124,'CHOICE',9)+label(180,195,'WHAT IS WITHIN OUR CONTROL?',9);break;
case 'evolution':a=path('M180 178v-39m0 0-75-35m75 35 75-35m-75 35V88M105 104 68 58m37 46 38-46m112 46-38-46m38 46 37-46')+dots([[180,178,8],[180,139,7],[105,104,8],[255,104,8],[180,88,8],[68,58,11],[143,58,11],[217,58,11],[292,58,11]])+label(180,200,'VARIATION ACROSS GENERATIONS',9);break;
case 'space':a='<ellipse cx="180" cy="106" rx="123" ry="52" transform="rotate(-18 180 106)" '+line+' fill="none"/><ellipse cx="180" cy="106" rx="89" ry="79" transform="rotate(35 180 106)" stroke="'+ink+'" stroke-dasharray="3 6" fill="none"/>'+circle(180,106,30,acc)+circle(277,76,14,ink)+circle(112,153,7,ink)+path('M270 78 214 100m12-10-12 10 16 2')+label(180,197,'GRAVITY + MOTION',9);break;
case 'internet':a=rect(42,77,71,50,ink,6)+rect(48,83,59,36,bg,2)+path('M62 135h32m-16-8v8M113 101h30m74 0h30')+'<path d="M143 102q-6-24 16-27 5-24 30-17 23-5 27 17 17 0 17 20 0 13-15 13h-62q-12 0-13-6z" '+line+' fill="'+acc+'" fill-opacity=".65"/>'+[57,81,105].map(y=>rect(247,y,69,18,ink,3)+circle(257,y+9,3,bg)).join('')+label(78,157,'CLIENT',9)+label(181,132,'NETWORK',9)+label(282,148,'SERVER',9)+label(180,193,'REQUEST → RESPONSE',9);break;
case 'ai':{let ls=[[65,64],[65,111],[65,158]],rs=[[180,48],[180,90],[180,132],[180,174]],os=[[294,86],[294,136]];a=ls.flatMap(p=>rs.map(q=>path('M'+p.join(' ')+' '+q.join(' '),'opacity=".36"'))).join('')+rs.flatMap(p=>os.map(q=>path('M'+p.join(' ')+' '+q.join(' '),'opacity=".36"'))).join('')+dots(ls.concat(rs,os).map(p=>[...p,10]))+label(65,197,'INPUT',9)+label(180,197,'PATTERNS',9)+label(294,197,'OUTPUT',9);break}
case 'history':a=rect(60,104,237,67,ink,2)+path('M60 104l47-33v33l47-33v33l47-33v33')+rect(232,43,24,63,ink,1)+rect(273,58,17,48,ink,1)+[76,124,172,220,268].map(x=>rect(x,122,24,22,bg,1)).join('')+path('M244 32q-18-12-4-24m43 39q-11-14 5-23','opacity=".6"')+label(180,195,'MECHANIZATION · INDUSTRY',9);break;
case 'probability':a='<g transform="rotate(-13 112 106)">'+rect(62,57,100,100,ink,15)+[[85,80],[139,80],[112,107],[85,134],[139,134]].map(p=>circle(p[0],p[1],7,bg)).join('')+'</g>'+circle(248,105,53,acc,'stroke="'+ink+'" stroke-width="2"')+circle(248,105,43,'none','stroke="'+ink+'" stroke-width="1"')+label(248,117,'½',34)+label(180,192,'INDEPENDENT EVENTS',9);break;
case 'sleep':a='<path d="M166 44a58 58 0 1 0 52 90 64 64 0 0 1-52-90z" fill="'+acc+'" stroke="'+ink+'" stroke-width="2"/>'+dots([[82,64,3],[264,51,5],[284,92,3],[246,113,3],[86,134,3]])+path('M55 178h250M60 174q15-28 31 0t31 0 31 0 31 0 31 0 31 0 31 0')+label(180,201,'CIRCADIAN RHYTHM',9);break;
case 'listening':a='<path d="M52 48h145v70H95l-24 22v-22H52z" '+line+' fill="'+acc+'" fill-opacity=".55"/><path d="M166 101h145v68h-19v23l-24-23H166z" '+line+' fill="'+bg+'"/>'+[70,100,130].map(x=>circle(x,82,5,ink)).join('')+[191,221,251].map(x=>circle(x,134,5,ink)).join('')+label(180,207,'LISTEN · REFLECT · CLARIFY',9);break;
case 'government':a='<path d="M48 78 180 35 312 78z" '+line+' fill="'+acc+'"/>'+rect(54,81,252,12,ink,1)+[80,152,224].map(x=>rect(x,97,50,69,ink,2)+rect(x+9,103,32,57,bg,2)).join('')+rect(52,170,256,9,ink,1)+label(105,137,'L',23)+label(177,137,'E',23)+label(249,137,'J',23)+label(180,200,'CHECKS AND BALANCES',9);break;
case 'nature':a=circle(179,49,21,acc)+path('M179 75v19m-7-7 7 7 7-7M179 135v28m-7-7 7 7 7-7M90 151q12-50 60-38-5 39-60 38M90 151l-10 19M212 116q45-20 61 27-43 16-61-27m61 27 11 16')+'<path d="M179 94q-42 1-42 39 42 20 84 0 0-38-42-39z" '+line+' fill="'+acc+'" fill-opacity=".45"/>'+label(179,128,'PRODUCERS',8)+label(179,186,'ENERGY FLOWS',10);break;
}
const alt=c.title+' — original conceptual illustration';
const corner=path('M19 27v-8h8m306 174h8v-8','opacity=".55"');
return '<svg class="'+cls+'" viewBox="0 0 360 220" role="img" aria-label="'+E(alt)+'" preserveAspectRatio="xMidYMid meet" style="background:'+bg+'"><rect width="360" height="220" fill="'+bg+'"/><circle cx="180" cy="108" r="94" fill="none" stroke="'+ink+'" opacity=".09"/><circle cx="180" cy="108" r="76" fill="none" stroke="'+ink+'" opacity=".06"/>'+corner+a+'</svg>';
}

function notify(msg){const t=document.getElementById('toast');t.textContent=msg;t.hidden=false;clearTimeout(notify.timer);notify.timer=setTimeout(()=>t.hidden=true,2600)}
let page='Today',filter='All',search='',format='All',session=null,answered=null,started=0,lastFocus=null,knowledgeFocus='',knowledgeAll=false;
const main=document.getElementById('main'), lesson=document.getElementById('lesson'),dialog=document.getElementById('dialog');
function setTheme(){document.documentElement.dataset.theme=state.theme}
function go(p){page=p;render();window.scrollTo(0,0)}

const knowledgeLevels=['Not specified','Beginner','Intermediate','Advanced','Expert'];
const placementBank=new Map((window.LumenKnowledgeBank||[]).map(([cat,...items])=>[cat,items.map((item,i)=>{const [q,a,b,c,why]=item.split('~');return {q,options:[a,b,c],correct:0,why,tier:i<2?'Applied':'Deeper reasoning'}})]));
const knowledgeRecord=cat=>state.knowledge?.[cat]||{};
function knowledgePreference(cat){let k=knowledgeRecord(cat);return k.useAssessment&&k.assessment?k.assessment.level:k.self||'Not specified'}
function saveKnowledge(cat,level){if(!categories().includes(cat)||!knowledgeLevels.includes(level))return;state.knowledge={...state.knowledge,[cat]:{...knowledgeRecord(cat),self:level,useAssessment:false}};persist();render()}
function knowledgePage(){
 let cats=categories(),selected=state.interests.filter(x=>cats.includes(x)),visible=knowledgeAll||!selected.length?cats:[...new Set([...(knowledgeFocus?[knowledgeFocus]:[]),...selected])].filter(x=>cats.includes(x));
 return '<div class="eyebrow">Personalize your learning</div><div class="row between"><h1>Knowledge Profile.</h1><button class="secondary" data-go="Profile">← Profile</button></div><p class="muted">Tell us what you already know, or take an optional placement assessment. Your choices guide recommendations; they never lock courses or award completion.</p><div class="panel section"><div class="row between"><div><h3>Your subjects</h3><small>'+visible.length+' of '+cats.length+' subjects · saved on this device</small></div><button class="secondary" data-action="knowledge-all">'+(knowledgeAll?'Show interests':'Show all subjects')+'</button></div>'+visible.map(cat=>{let k=knowledgeRecord(cat),a=k.assessment;return '<div class="kp-subject" '+(cat===knowledgeFocus?'data-kp-focus="true"':'')+'><div class="row between"><div><h3>'+E(cat)+'</h3><small>Recommended: '+E(knowledgePreference(cat))+'</small></div>'+(placementBank.has(cat)?'<button class="secondary kp-test" data-kp-test="'+E(cat)+'">Test me →</button>':'')+'</div><label for="kp-'+E(depthSlug(cat))+'">Self-reported knowledge</label><select id="kp-'+E(depthSlug(cat))+'" data-kp-level="'+E(cat)+'">'+knowledgeLevels.map(v=>'<option '+((k.self||'Not specified')===v?'selected':'')+'>'+E(v)+'</option>').join('')+'</select>'+(a?'<div class="kp-result"><small>Placement estimate: <b>'+E(a.level)+'</b> · '+a.correct+'/'+a.total+' correct · '+E(new Date(a.date).toLocaleDateString())+'</small>'+(!k.useAssessment?'<button class="link" data-kp-use="'+E(cat)+'">Use test result</button>':'<small>Used for recommendations</small>')+'</div>':'<small>No placement assessment taken yet.</small>')+'</div>'}).join('')+'</div><p class="note">Placement is a short sample of knowledge, not certification or proof of expertise. Expert is self-reported only. Retake any test whenever you wish.</p>';
}
function openKnowledge(cat=''){if(session)closeLesson();knowledgeFocus=categories().includes(cat)?cat:'';go('Knowledge');if(knowledgeFocus)main.querySelector('[data-kp-focus]')?.scrollIntoView({block:'center'})}
function shuffled(arr){let a=arr.slice();for(let i=a.length-1;i>0;i--){let j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}
function placementQuestion(q,tier){const indices=shuffled(q.options.map((_,i)=>i));return {q:q.q,options:indices.map(i=>q.options[i]),correct:indices.indexOf(q.correct),why:q.why,tier}}
function placementStart(cat){if(!placementBank.has(cat))return;const pool=shuffled(courses.filter(c=>c.category===cat&&c.format==='Course'&&!c.plus&&c.questions.some(q=>q.options.length>=3&&q.q.length>8)));const basics=pool.slice(0,4).map(c=>placementQuestion(shuffled(c.questions.filter(q=>q.options.length>=3&&q.q.length>8))[0],'Fundamentals'));if(basics.length<4){notify('Not enough foundational questions for this subject.');return}
 lastFocus=document.activeElement;session={mode:'placement',cat,step:0,questions:basics,results:[],bank:placementBank.get(cat).map(q=>placementQuestion(q,q.tier)),stage:0,finished:false};started=Date.now();answered=null;lesson.hidden=false;document.querySelector('.shell').inert=true;document.body.style.overflow='hidden';renderLesson();lesson.querySelector('button')?.focus();
}
function placementResult(results){let counts={Fundamentals:{correct:0,total:0},Applied:{correct:0,total:0},'Deeper reasoning':{correct:0,total:0}};for(const r of results){counts[r.tier].total++;counts[r.tier].correct+=Number(r.correct)}const b=counts.Fundamentals,a=counts.Applied,d=counts['Deeper reasoning'];let level=b.correct>=3&&a.correct>=1?'Intermediate':'Beginner';if(b.correct>=3&&a.correct===2&&d.correct===2)level='Advanced';return {level,correct:results.filter(r=>r.correct).length,total:results.length,counts}}
function placementAnswer(index){let s=session;if(s?.mode!=='placement'||s.finished||answered!==null)return;let q=s.questions[s.step];if(!q||index< -1||index>=q.options.length)return;answered=index;s.results.push({tier:q.tier,correct:index===q.correct,q:q.q,answer:index===-1?'Not sure':q.options[index],expected:q.options[q.correct],why:q.why});s.step++;
 if(s.step===4&&s.stage===0){if(s.results.filter(r=>r.correct).length>=3){s.stage=1;s.questions.push(...s.bank.slice(0,2))}else return finishPlacement()}
 if(s.step===6&&s.stage===1){if(s.results.slice(4,6).every(r=>r.correct)){s.stage=2;s.questions.push(...s.bank.slice(2))}else return finishPlacement()}
 if(s.step===8)return finishPlacement();answered=null;renderLesson();lesson.querySelector('.lessonbody button')?.focus();
}
function finishPlacement(){let s=session;if(!s||s.finished)return;let result=placementResult(s.results);s.finished=true;s.result=result;state.knowledge={...state.knowledge,[s.cat]:{...knowledgeRecord(s.cat),assessment:{...result,date:Date.now()},useAssessment:true}};persist();answered=null;renderLesson();lesson.querySelector('[data-action="close"]')?.focus()}
function renderPlacement(){let s=session;if(s.finished){let r=s.result;lesson.innerHTML='<div class="lessonhead"><div class="row between"><button class="iconbtn" data-action="close" aria-label="Exit assessment">'+icon('close')+'</button><small>'+E(s.cat)+' · Placement complete</small></div></div><div class="lessonbody"><div class="eyebrow">Your knowledge profile</div><h1>'+E(r.level)+' starting point</h1><p>'+r.correct+' of '+r.total+' correct. Your recommended level has been saved.</p><div class="panel">'+Object.entries(r.counts).map(([name,v])=>'<div class="row between"><span>'+E(name)+'</span><b>'+(v.total?v.correct+'/'+v.total:'Not reached')+'</b></div>').join('')+'</div><p class="muted">This is a provisional placement estimate, not a credential. Your completed courses and quiz history have not changed.</p><details><summary>Review answers</summary>'+s.results.map(x=>'<div class="panel"><h3>'+E(x.q)+'</h3><p>'+E(x.answer)+' · '+(x.correct?'Correct':'Not correct')+'</p><small>Answer: '+E(x.expected)+'<br>'+E(x.why)+'</small></div>').join('')+'</details></div><div class="lessonfoot"><button class="primary" data-knowledge-open="'+E(s.cat)+'">Back to Knowledge Profile →</button></div>';return}
 let q=s.questions[s.step];lesson.innerHTML='<div class="lessonhead"><div class="row between"><button class="iconbtn" data-action="close" aria-label="Exit assessment">'+icon('close')+'</button><small>'+E(s.cat)+' · Question '+(s.step+1)+' of up to 8</small></div><div class="bar"><span style="width:'+((s.step+1)/8*100)+'%"></span></div></div><div class="lessonbody"><div class="eyebrow">Placement assessment · '+E(q.tier)+'</div><h1>'+E(q.q)+'</h1><p class="muted">Choose the best answer. Select Not sure if you do not know; answers are reviewed at the end.</p><div class="list">'+q.options.map((o,i)=>'<button class="option" data-kp-answer="'+i+'"><b>'+String.fromCharCode(65+i)+'</b> '+E(o)+'</button>').join('')+'<button class="secondary" data-kp-answer="-1">Not sure</button></div></div><div class="lessonfoot"><small>Difficulty adapts to your answers. Leaving now will not save a partial result.</small></div>';
}
function completionFeedback(c){const v=checkResult(c);return '<div class="panel"><h3>'+E(understanding(c))+'</h3><p>'+(v?v.correct+' of '+v.total+' correct. '+(v.correct===v.total?'You passed this lesson’s short knowledge check. This is not a certification of mastery.':'Revisit the concepts and try the questions again. Your reading progress is retained.'): 'No scored assessment is available for this version.')+'</p>'+(v&&v.correct<v.total?'<button class="secondary" data-retry-check="'+E(c.id)+'">Retry lesson</button>':'')+'</div>'}
function renderCourseComplete(){const c=get(session.id);lesson.innerHTML='<div class="lessonhead"><div class="row between"><button class="iconbtn" data-action="close" aria-label="Exit lesson">'+icon('close')+'</button><small>Lesson complete</small></div><div class="bar"><span style="width:100%"></span></div></div><div class="lessonbody"><div class="eyebrow">Another step forward</div><h1>Lesson complete!</h1><h2>'+E(c.title)+'</h2><p>Your progress is saved.</p>'+completionFeedback(c)+'<div class="panel"><h3>Already knew this?</h3><p class="muted">Tell us your familiarity with '+E(c.category)+' or test your knowledge to find a more suitable starting point.</p><div class="row"><button class="secondary" data-knowledge-open="'+E(c.category)+'">Already knew this?</button>'+(placementBank.has(c.category)?'<button class="secondary" data-kp-from-complete="'+E(c.category)+'">Test me</button>':'')+'</div></div></div><div class="lessonfoot"><button class="primary" data-action="close">Done →</button></div>'}

const subjectPaths={"Physics":["motion","depth-physics-how-friction-changes-motion","depth-physics-energy-and-work","depth-physics-why-objects-float","heat","plus-physics-what-heat-capacity-means","plus-physics-how-phase-transitions-absorb-energy","waves","electricity","plus-physics-how-electric-fields-act-on-charges","plus-physics-understanding-relative-motion","depth-physics-how-momentum-works","depth-physics-understanding-rotational-motion","plus-physics-how-springs-store-elastic-energy","plus-physics-why-sound-changes-pitch-with-motion","plus-physics-how-lenses-bend-light","depth-physics-how-pressure-works-in-fluids","plus-physics-how-oscillations-transfer-energy","plus-physics-understanding-electromagnetic-induction","plus-physics-why-interference-creates-patterns"],"Computer Science":["binary","depth-computer-science-how-programming-functions-work","algorithms","depth-computer-science-how-data-structures-organize-work","operating-systems","databases","depth-computer-science-why-networks-use-protocols","compression","depth-computer-science-how-software-testing-finds-defects","plus-computer-science-how-version-control-merges-changes","depth-computer-science-understanding-recursion","plus-computer-science-how-stacks-and-queues-differ","plus-computer-science-how-hash-tables-find-records","plus-computer-science-how-indexes-speed-database-queries","plus-computer-science-what-caching-trades-for-speed","plus-computer-science-how-processes-and-threads-differ","plus-computer-science-understanding-time-complexity","plus-computer-science-why-balanced-search-trees-help","plus-computer-science-how-transactions-prevent-partial-updates","plus-computer-science-why-deadlocks-occur"]};
const prerequisites={"depth-physics-how-momentum-works":["motion","depth-physics-energy-and-work"],"depth-physics-understanding-rotational-motion":["motion","depth-physics-how-momentum-works"],"plus-physics-how-springs-store-elastic-energy":["depth-physics-energy-and-work"],"plus-physics-how-oscillations-transfer-energy":["motion","plus-physics-how-springs-store-elastic-energy"],"plus-physics-understanding-electromagnetic-induction":["electricity","plus-physics-how-electric-fields-act-on-charges"],"plus-physics-why-interference-creates-patterns":["waves"],"plus-physics-why-sound-changes-pitch-with-motion":["waves","plus-physics-understanding-relative-motion"],"depth-physics-how-pressure-works-in-fluids":["depth-physics-why-objects-float","depth-physics-energy-and-work"],"plus-physics-how-phase-transitions-absorb-energy":["plus-physics-what-heat-capacity-means"],"depth-computer-science-understanding-recursion":["depth-computer-science-how-programming-functions-work"],"plus-computer-science-how-stacks-and-queues-differ":["depth-computer-science-how-data-structures-organize-work"],"plus-computer-science-how-hash-tables-find-records":["depth-computer-science-how-data-structures-organize-work"],"plus-computer-science-why-balanced-search-trees-help":["algorithms","plus-computer-science-understanding-time-complexity"],"plus-computer-science-understanding-time-complexity":["algorithms","depth-computer-science-understanding-recursion"],"plus-computer-science-how-indexes-speed-database-queries":["databases","algorithms"],"plus-computer-science-how-transactions-prevent-partial-updates":["databases","plus-computer-science-how-processes-and-threads-differ"],"plus-computer-science-why-deadlocks-occur":["plus-computer-science-how-processes-and-threads-differ"],"plus-computer-science-how-processes-and-threads-differ":["operating-systems"],"plus-computer-science-what-caching-trades-for-speed":["depth-computer-science-why-networks-use-protocols"]};
for(const cat of ['Psychology','Finance','Health']){
 const ids=(window.LumenQualityBatch3||[]).map(row=>row[0]);
 subjectPaths[cat]=ids.filter(id=>{const c=courses.find(x=>x.id===id);return c?.category===cat&&c.format==='Course'});
}
Object.assign(prerequisites,{
 'plus-psychology-how-confirmation-bias-affects-belief-updating':['bias','plus-psychology-understanding-the-availability-heuristic'],
 'plus-psychology-why-framing-can-change-decisions':['bias'],
 'plus-psychology-understanding-cognitive-dissonance':['motivation','plus-psychology-why-people-infer-causes-differently'],
 'plus-psychology-how-expectations-affect-perception':['attention','bias'],
 'plus-psychology-understanding-the-spacing-effect':['memory'],
 'plus-psychology-why-social-comparison-affects-self-evaluation':['social-proof','happiness'],
 'plus-psychology-what-emotional-regulation-involves':['emotion'],
 'plus-finance-how-index-funds-track-markets':['stockmarket','diversification'],
 'plus-finance-why-rebalancing-changes-portfolio-risk':['depth-finance-understanding-asset-allocation'],
 'plus-finance-understanding-risk-adjusted-returns':['investing','plus-finance-understanding-investment-drawdowns'],
 'plus-finance-how-duration-relates-to-bond-sensitivity':['depth-finance-understanding-bond-prices'],
 'plus-finance-how-inflation-linked-bonds-differ':['depth-finance-understanding-bond-prices','depth-finance-inflation-and-real-returns'],
 'plus-finance-why-sequence-of-returns-matters':['compound','plus-finance-understanding-investment-drawdowns'],
 'plus-health-how-caffeine-affects-alertness':['sleep','plus-health-how-sleep-pressure-builds'],
 'plus-health-understanding-exercise-recovery':['depth-health-how-physical-activity-supports-health','sleep'],
 'plus-health-why-health-screening-can-produce-false-alarms':['depth-health-what-preventive-care-means'],
 'plus-health-how-energy-balance-relates-to-weight':['nutrition','depth-health-reading-nutrition-labels'],
 'plus-health-what-blood-cholesterol-measures':['nutrition']
});
for(const cat of ['Mathematics','Statistics']){
 subjectPaths[cat]=courses.filter(c=>c.category===cat&&c.format==='Course').sort((a,b)=>['Beginner','Intermediate','Advanced'].indexOf(a.difficulty)-['Beginner','Intermediate','Advanced'].indexOf(b.difficulty)).map(c=>c.id);
}
Object.assign(prerequisites,{
 'depth-mathematics-how-ratios-and-proportions-work':['depth-mathematics-understanding-fractions'],
 'depth-mathematics-reading-linear-equations':['depth-mathematics-what-functions-describe'],
 'logarithms':['depth-mathematics-how-exponential-growth-works'],
 'trigonometry':['depth-mathematics-how-ratios-and-proportions-work','plus-mathematics-understanding-geometric-similarity'],
 'plus-mathematics-how-systems-of-equations-intersect':['depth-mathematics-reading-linear-equations'],
 'plus-mathematics-what-logarithmic-graphs-reveal':['logarithms','depth-mathematics-how-exponential-growth-works'],
 'plus-mathematics-how-quadratic-equations-model-motion':['depth-mathematics-what-functions-describe'],
 'plus-mathematics-understanding-conditional-probability':['probability'],
 'derivative':['depth-mathematics-reading-linear-equations','depth-mathematics-what-functions-describe'],
 'integral':['derivative','depth-mathematics-understanding-geometric-area'],
 'plus-mathematics-how-matrices-transform-coordinates':['plus-mathematics-understanding-vectors','plus-mathematics-how-systems-of-equations-intersect'],
 'plus-mathematics-reading-sequences-and-series':['depth-mathematics-how-exponential-growth-works'],
 'plus-statistics-understanding-standard-error':['depth-statistics-how-standard-deviation-measures-spread','plus-statistics-how-a-sampling-distribution-works'],
 'depth-statistics-understanding-confidence-intervals':['plus-statistics-understanding-standard-error','sampling'],
 'plus-statistics-how-confidence-levels-affect-intervals':['depth-statistics-understanding-confidence-intervals'],
 'depth-statistics-how-hypothesis-tests-work':['plus-statistics-how-a-sampling-distribution-works','depth-statistics-understanding-confidence-intervals'],
 'depth-statistics-understanding-statistical-power':['depth-statistics-how-hypothesis-tests-work','plus-statistics-understanding-standard-error'],
 'depth-statistics-what-regression-models-describe':['correlation','plus-statistics-why-residual-plots-are-useful'],
 'plus-statistics-understanding-interaction-effects':['depth-statistics-what-regression-models-describe'],
 'plus-statistics-how-multiple-comparisons-create-false-positives':['depth-statistics-how-hypothesis-tests-work','probability']
});
function subjectPathUI(cat){
 const list=(subjectPaths[cat]||[]).map(get).filter(Boolean);if(!list.length)return '';
 const passed=list.filter(c=>checkResult(c)?.correct===c.questions.length).length, unread=list.filter(c=>!progress(c.id).done),ordered=unread.slice().sort((a,b)=>knowledgeRank(b)-knowledgeRank(a)), nextCourse=ordered[0];
 return '<div class="panel section"><div class="row between"><div><div class="eyebrow">Guided learning path</div><h2>'+E(cat)+'</h2><small>'+list.filter(c=>progress(c.id).done).length+'/'+list.length+' read · '+passed+' knowledge checks passed</small></div><button class="secondary" data-knowledge-open="'+E(cat)+'">Tune knowledge</button></div>'+(nextCourse?'<p>Suggested next: <b>'+E(nextCourse.title)+'</b> · '+E(nextCourse.difficulty)+'</p><button class="primary" data-open="'+E(nextCourse.id)+'">Start suggested course →</button>':'<p>You have read every course in this path. Revisit concepts whenever you like.</p>')+'<details><summary>View complete sequence</summary>'+['Beginner','Intermediate','Advanced'].map(level=>'<h3>'+level+'</h3><div class="path-list">'+list.filter(c=>c.difficulty===level).map(c=>'<button class="path-item" data-open="'+E(c.id)+'"><span>'+E(c.title)+'</span><small>'+E(progress(c.id).done?understanding(c):'Open →')+'</small></button>').join('')+'</div>').join('')+'</details><small>Suggested order only. All courses remain available, regardless of placement or progress.</small></div>';
}
function prerequisiteUI(c){const list=(prerequisites[c.id]||[]).map(get).filter(Boolean);if(!list.length)return '';const missing=list.filter(x=>checkResult(x)?.correct!==x.questions.length);if(!missing.length)return '<small class="muted">Related foundational knowledge checks passed.</small>';return '<div class="panel"><h3>Helpful background</h3><p class="muted">These concepts may help. No prerequisite is required to open this course.</p><div class="row">'+missing.map(x=>'<button class="secondary" data-related-course="'+E(x.id)+'">'+E(x.title)+' →</button>').join('')+'</div></div>'}

function knowledgeRank(c){const pref=knowledgePreference(c.category),rank=knowledgeLevels.indexOf(pref),level=['Beginner','Intermediate','Advanced'].indexOf(c.difficulty);if(rank<1)return 0;const wanted=Math.min(rank-1,2);return 3-Math.abs(wanted-Math.max(0,level))+(wanted>0&&level===0&&c.plus?.2:0)}

function recommend(){const list=all().filter(c=>!progress(c.id).done);return list.sort((a,b)=>Number(state.interests.includes(b.category))-Number(state.interests.includes(a.category))||Number(!!state.progress[b.id])-Number(!!state.progress[a.id])||knowledgeRank(b)-knowledgeRank(a))}
function card(c){const p=progress(c.id);return '<button class="card course" data-open="'+E(c.id)+'"><div class="coverwrap">'+editorial(c)+'<span class="coverlabel">'+E(c.category)+'</span></div><div class="cardbody"><div class="meta">'+E(c.format)+' · '+duration(c)+' min'+(c.editorialRevision?' · Revised':'')+(approvedSimulations[c.id]||window.LumenExperiences?.has(c.id)||['compound','supply','probability'].includes(c.id)?' · Interactive':'')+'</div><h3>'+E(c.title)+'</h3><p>'+E(c.desc)+'</p>'+(p.step&&!p.done?'<div class="bar"><span style="width:'+Math.min(100,100*p.step/(c.slides.length+c.questions.length))+'%"></span></div>':'')+'<div class="cardend"><div class="meta">'+(p.done?('Completed · '+E(understanding(c))):p.step?'In progress':E(c.difficulty))+'</div><span class="arrow" aria-hidden="true">→</span></div></div></button>'}
function section(title,body,action=''){return '<section class="section"><div class="sectionhead"><h2>'+E(title)+'</h2>'+action+'</div>'+body+'</section>'}
function cards(arr){return arr.length?'<div class="grid">'+arr.map(card).join('')+'</div>':'<div class="empty">Nothing here yet. Explore the library to discover something new.</div>'}
function header(){return '<div class="top"><span class="eyebrow">Your personal learning space</span><span class="mobilebrand">lumen.</span><div class="row"><span class="pill" aria-label="Learning streak">'+streak()+' day streak</span><button class="iconbtn" data-action="theme" aria-label="Toggle appearance">'+icon(state.theme==='dark'?'sun':'moon')+'</button></div></div>'}
function today(){const rec=recommend(), c=rec[0]||all()[0],a=activity(),mins=Math.floor(a.seconds/60),cont=all().filter(x=>state.progress[x.id]&&!progress(x.id).done),pct=Math.min(100,Math.round(a.seconds/(state.goal*60)*100)),date=new Date().toLocaleDateString(undefined,{weekday:'long',month:'long',day:'numeric'});return '<div class="intro"><div><div class="eyebrow">Your daily edition</div><h1>Stay curious.</h1><p class="muted">A few minutes. A fresh perspective. A world of ideas.</p></div><small class="edition">'+E(date)+'</small></div><div class="hero"><div><div class="eyebrow">Today’s discovery / '+E(c.category)+'</div><h2>'+E(c.title)+'</h2><p>'+E(c.desc)+'</p><div class="hero-meta"><span>'+duration(c)+' min</span><span>'+E(c.format)+'</span><span>'+E(c.difficulty)+'</span></div><button class="primary" data-open="'+E(c.id)+'">'+(state.progress[c.id]&&!progress(c.id).done?'Continue learning':'Start learning')+' →</button></div>'+editorial(c,'heroart')+'</div><div class="dailyrow"><div class="panel"><div class="row" style="flex-wrap:nowrap"><div class="goalring" style="--pct:'+pct+'%"><strong>'+pct+'%</strong></div><div class="goalcopy"><div class="eyebrow">Daily goal</div><h3>'+mins+' of '+state.goal+' min</h3><small>'+a.lessons+' completed today</small></div><button class="link" data-action="prefs">Edit goal</button></div></div><div class="panel"><div class="row" style="flex-wrap:nowrap"><div class="reviewglyph">'+icon('Review')+'</div><div class="goalcopy"><div class="eyebrow">Knowledge review</div><h3>'+due().length+' due</h3><small>Make what you learn stick.</small></div><button class="link" data-go="Review">Review →</button></div></div></div>'+ (cont.length?section('Continue your journey',cards(cont.slice(0,3))):'')+section('Explore by subject','<div class="topicstrip">'+categories().map(x=>'<button data-topic="'+E(x)+'">'+E(x)+'</button>').join('')+'</div>','<button class="link" data-go="Explore">All subjects →</button>')+section('Discover something new',cards(rec.filter(x=>x.id!==c.id).slice(0,6)),'<button class="link" data-go="Explore">View all →</button>')+section('A thought to keep','<div class="editorialnote"><div><div class="eyebrow">Learning science</div><h2>Knowing is different from recognizing.</h2><p class="muted">Try explaining one thing you learned today without looking at the lesson. That effort is part of learning.</p></div><button class="secondary" data-open="memory">Explore memory →</button></div>')}

const originalExperiences=[
 {course:'compound',step:1,title:'Watch your money compound',type:'simulation'},
 {course:'supply',step:1,title:'Find a market equilibrium',type:'simulation'},
 {course:'probability',step:1,title:'Toss a fair coin',type:'simulation'},
 {course:'dna',step:3,title:'What color eyes might a child have?',type:'simulation'},
 {course:'motion',step:2,title:'Race a cart down a hill',type:'simulation'},
 {course:'transistors',step:2,title:'Can you turn on the light?',type:'simulation'}
];
function experienceEntries(){return [...originalExperiences,...(window.LumenExperiences?.all||[])]}
function filteredExperiences(){let q=search.toLowerCase().trim();return experienceEntries().filter(d=>{let c=get(d.course);return c&&(filter==='All'||c.category===filter)&&(!q||(d.title+' '+c.title+' '+c.category+' '+(window.LumenExperiences?.types[d.type]||'Interactive lab')).toLowerCase().includes(q))})}
function experienceCards(entries){return entries.length?'<div class="grid">'+entries.map(d=>{let c=get(d.course),kind=window.LumenExperiences?.types[d.type]||'Interactive lab';return '<button class="card course" data-experience-open="'+E(d.course+':'+d.step)+'"><div class="coverwrap">'+editorial(c)+'<span class="coverlabel">'+E(c.category)+'</span></div><div class="cardbody"><div class="meta">'+E(kind)+'</div><h3>'+E(d.title)+'</h3><p>'+E(c.title)+'</p><div class="cardend"><div class="meta">Try experience</div><span class="arrow" aria-hidden="true">→</span></div></div></button>'}).join('')+'</div>':'<div class="empty">No matching experiences. Try another subject or search.</div>'}
function openExperience(key){const d=experienceEntries().find(d=>d.course+':'+d.step===key);if(!d)return;lastFocus=document.activeElement;session={id:d.course,step:d.step,mode:'experience',experience:d};answered=null;started=Date.now();lesson.hidden=false;document.querySelector('.shell').inert=true;document.body.style.overflow='hidden';renderLesson();lesson.querySelector('button')?.focus()}
function renderStandaloneExperience(){const d=session.experience,c=get(d.course),s=c.slides[d.step];const content=simulation(s.art)+approvedSimulation(c.id,d.step)+(window.LumenExperiences?.markup(c.id,d.step)||'');lesson.innerHTML='<div class="lessonhead"><div class="row between"><button class="iconbtn" data-action="close" aria-label="Exit experience">'+icon('close')+'</button><small>Interactive learning · '+E(c.category)+'</small><span></span></div></div><div class="lessonbody"><div class="eyebrow">'+E(c.category)+' · Interactive experience</div><h1>'+E(d.title)+'</h1>'+content+'<small>From the lesson: '+E(c.title)+'</small>'+sourceUI(c)+'</div><div class="lessonfoot"><button class="secondary" data-action="close">← Back to Explore</button><button class="primary" data-action="close">Done ✓</button></div>';if(document.getElementById('rate'))drawCompound(7);if(document.getElementById('demand'))drawSupply(90);if(document.getElementById('coinresult'))drawCoin();initializeApprovedSim();window.LumenExperiences?.mount();lesson.scrollTop=0}

function explore(){let q=search.toLowerCase().trim();let arr=all().filter(c=>(filter==='All'||c.category===filter)&&(format==='All'||c.format===format||(format==='Interactive'&&(approvedSimulations[c.id]||window.LumenExperiences?.has(c.id)||['compound','supply','probability'].includes(c.id))))&&(!q||(c.title+' '+c.desc+' '+c.category+' '+c.slides.map(s=>s.title+' '+s.text).join(' ')).toLowerCase().includes(q)));const entries=format==='Interactive'?filteredExperiences():null;return '<div class="eyebrow">The collection</div><h1>Explore ideas.</h1><p class="muted" style="margin:8px 0 20px">Original illustrated lessons from across the world of knowledge.</p><div class="row" style="align-items:stretch"><input style="flex:2" id="search" type="search" placeholder="Search subjects and concepts…" value="'+E(search)+'" aria-label="Search lessons"><select id="format" style="flex:1;min-width:115px;max-width:180px" aria-label="Content format">'+['All','Course','Quick read','Interactive'].map(f=>'<option '+(f===format?'selected':'')+'>'+f+'</option>').join('')+'</select></div><div class="filters">'+['All',...categories()].map(f=>'<button class="pill '+(f===filter?'active':'')+'" data-filter="'+E(f)+'">'+E(f)+'</button>').join('')+'</div>'+(!q&&!entries?subjectPathUI(filter):'')+'<div class="sectionhead"><h2>'+E(filter==='All'?(entries?'Interactive experiences':'All learning'):filter)+'</h2><small>'+(entries?entries.length+' experiences':arr.length+' titles')+'</small></div><div id="results">'+(entries?experienceCards(entries):cards(arr))+'</div>'}
function library(){const saved=Object.entries(state.saved).map(([k,v])=>({k,v,c:get(k.split(':')[0])})).filter(x=>x.c);return '<div class="eyebrow">Your collection</div><h1>My library.</h1>'+section('Saved insights',saved.length?'<div class="list">'+saved.map(({k,v,c})=>'<div class="listitem"><div><div class="meta">'+E(c.title)+'</div><h3>'+E(v.title)+'</h3><p class="muted">'+E(state.notes[k]||v.text)+'</p></div><div class="row"><button class="secondary" data-note="'+E(k)+'">Note</button><button class="iconbtn" data-unsave="'+E(k)+'" aria-label="Remove bookmark">'+icon('close')+'</button></div></div>').join('')+'</div>':'<div class="empty">Bookmark a slide as you learn to build your personal knowledge library.</div>')+section('In progress',cards(all().filter(c=>state.progress[c.id]&&!progress(c.id).done)))+section('Completed',cards(completed()))}
function review(){const d=due();return '<div class="eyebrow">Make knowledge stick</div><h1>Remember more.</h1><p class="muted" style="margin:8px 0 20px">Retrieve ideas from memory, with reviews spaced over time.</p><div class="panel"><h2>'+d.length+' '+(d.length===1?'concept':'concepts')+' ready</h2><p class="muted">'+(d.length?'Your next review is drawn from lessons you have completed.':'Finish a lesson to unlock its review questions.')+'</p><button class="primary" data-action="review" '+(d.length?'':'disabled')+'>Start review →</button></div>'+section('Review schedule','<div class="list">'+(Object.keys(state.review).length?Object.entries(state.review).filter(([k])=>get(k.split(':')[0])).sort((a,b)=>a[1].next-b[1].next).map(([k,v])=>{let [id,i]=k.split(':');let c=get(id);return '<div class="listitem"><div><div class="meta">'+E(c.title)+'</div><h3>'+E(c.questions[Number(i)]?.q||'Concept')+'</h3><small>'+ (v.next<=Date.now()?'Due now':'Next: '+new Date(v.next).toLocaleDateString())+'</small></div><small>Level '+v.level+'</small></div>'}).join(''):'<div class="empty">Your review schedule will appear here.</div>')+'</div>')}
function profile(){const total=Object.values(state.activity).reduce((n,a)=>n+a.seconds,0), days=Array.from({length:7},(_,i)=>{const d=new Date();d.setDate(d.getDate()-6+i);return d});return '<div class="eyebrow">Your intellectual journey</div><h1>Learning progress.</h1>'+section('Your progress','<div class="statgrid"><div class="stat"><strong>'+completed().length+'</strong><small>Titles completed</small></div><div class="stat"><strong>'+Math.floor(total/60)+'</strong><small>Minutes learned</small></div><div class="stat"><strong>'+(state.attempts?Math.round(state.correct/state.attempts*100)+'%':'—')+'</strong><small>Quiz accuracy</small></div></div><div class="panel" style="margin-top:12px"><h3>Past seven days</h3><div class="days">'+days.map(d=>'<div>'+E(d.toLocaleDateString(undefined,{weekday:'short'}))+'<b>'+Math.floor((state.activity[day(d)]?.seconds||0)/60)+'m</b></div>').join('')+'</div><p class="muted">Subjects explored: '+new Set(completed().map(c=>c.category)).size+' · Review concepts: '+Object.keys(state.review).length+'</p></div>')+section('Preferences','<div class="panel"><div class="row between"><div><h3>Knowledge Profile</h3><small>Adjust your knowledge or take a placement test.</small></div><button class="secondary" data-knowledge-open="all">Open</button></div><div class="row between"><div><h3>Learning interests & daily goal</h3><small>'+state.goal+' minutes · '+state.interests.length+' interests</small></div><button class="secondary" data-action="prefs">Edit</button></div><div class="row between"><div><h3>Appearance</h3><small>'+E(state.theme)+'</small></div><button class="secondary" data-action="theme">Switch theme</button></div><div class="row between"><div><h3>Export personal data</h3><small>Save a copy of local progress and bookmarks.</small></div><button class="secondary" data-action="export">Export</button></div><div class="row between"><div><h3>Content studio</h3><small>Create original private lessons on this device.</small></div><button class="secondary" data-action="studio">Open</button></div><div class="row between"><div><h3>Delete local data</h3><small>Clear progress, preferences and custom content.</small></div><button class="secondary" data-action="reset">Delete</button></div></div>')+(window.LumenAccounts?.enabled()?'':(window.LumenLocalProfiles?.panel()||''))+(window.LumenAccounts?.panel()||'')+'<p class="note section">Lumen is an independent educational web app. No advertising or tracking. Guest data is stored in this browser.'+(window.LumenAccounts?.enabled()?' Optional accounts use Supabase to sync learning data when enabled.':' Local learning profiles are optional; no cloud accounts or cross-device sync are active.')+' Lessons are introductions, not professional advice.</p>'}
function render(){setTheme();document.getElementById('nav').innerHTML=['Today','Explore','Library','Review','Profile'].map(p=>'<button data-go="'+p+'" aria-label="'+p+'" class="'+(p===page||(p==='Profile'&&page==='Knowledge')?'active':'')+'" '+(p===page||(p==='Profile'&&page==='Knowledge')?'aria-current="page"':'')+'>'+icon(p)+'<span>'+p+'</span></button>').join('');main.innerHTML=header()+({Today:today,Explore:explore,Library:library,Review:review,Profile:profile,Knowledge:knowledgePage}[page])()}
function openCourse(id){const c=get(id);if(!c)return;lastFocus=document.activeElement;const p=progress(id),valid=p.attemptVersion===revisionOf(c)&&p.answers&&typeof p.answers==='object';let step=p.done?0:Math.min(Math.max(0,p.step||0),c.slides.length+c.questions.length-1);if(!valid&&step>=c.slides.length)step=c.slides.length;session={id,step,mode:'course',answers:p.done||!valid?{}:{...p.answers}};answered=null;started=Date.now();lesson.hidden=false;document.querySelector('.shell').inert=true;document.body.style.overflow='hidden';renderLesson();lesson.querySelector('button')?.focus()}
function openReview(){const d=due();if(!d.length)return;lastFocus=document.activeElement;session={mode:'review',queue:d.map(x=>x[0]),step:0};answered=null;started=Date.now();lesson.hidden=false;document.body.style.overflow='hidden';renderLesson();lesson.querySelector('button')?.focus()}
function schedule(id,i,correct){const k=id+':'+i,old=state.review[k]||{level:0};let level=correct?Math.min(old.level+1,6):0;const intervals=[.125,1,3,7,14,30,60];state.review[k]={level,next:Date.now()+intervals[level]*86400000};persist()}
function closeLesson(){stopHill();window.LumenExperiences?.unmount();if(session){log((Date.now()-started)/1000);session=null}lesson.hidden=true;lesson.innerHTML='';document.querySelector('.shell').inert=false;document.body.style.overflow='';render();if(lastFocus?.isConnected)lastFocus.focus();else main.querySelector('button')?.focus()}
function questionUI(q){return '<div class="eyebrow">Check your understanding</div><h1>'+E(q.q)+'</h1><div class="list">'+q.options.map((o,i)=>'<button class="option '+(answered!==null&&i===q.correct?'correct':answered===i&&i!==q.correct?'wrong':'')+'" data-answer="'+i+'" '+(answered!==null?'disabled':'')+'><b>'+String.fromCharCode(65+i)+'</b> '+E(o)+'</button>').join('')+'</div>'+(answered!==null?'<div class="feedback" role="status"><h3>'+(answered===q.correct?'Exactly right.':'Here’s why.')+'</h3><p><strong>Answer: '+E(q.options[q.correct])+'</strong></p><p>'+E(q.why)+'</p></div>':'')}
function reportLink(c,position){const title='Content feedback: '+c.title,body='Course ID: '+c.id+'\nLesson: '+c.title+'\nPosition: '+position+'\n\nWhat seems inaccurate or unclear?\n\nSuggested correction and public source (optional):\n\nDo not include personal, medical, account or other private information. Reports are public GitHub issues.';return 'https://github.com/MattKHering/Lumen/issues/new?title='+encodeURIComponent(title)+'&body='+encodeURIComponent(body)}
function sourceUI(c){const position=session?.mode==='course'?(session.step<c.slides.length?'Slide '+(session.step+1):'Question '+(session.step-c.slides.length+1)):session?.mode==='review'?'Review question':'Lesson';return '<div class="quality-meta"><small>'+(c.editorialRevision?'Editorial revision · '+E(c.editorialRevision.split('.').shift()):'Editorial review pending')+'</small>'+(/^https:\/\//i.test(c.source)?'<small><a href="'+E(c.source)+'" target="_blank" rel="noopener noreferrer">'+(c.editorialRevision?'Topic reference ↗':c.depth?'General subject reference ↗':'Educational reference ↗')+'</a></small>':'')+(c.id.startsWith('custom-')?'':'<small><a href="'+E(reportLink(c,position))+'" target="_blank" rel="noopener noreferrer">Report a content issue ↗</a></small>')+'</div>'}
function simulation(art){if(art==='compound')return '<div class="panel"><label for="rate">Annual growth rate: <b id="rateLabel">7%</b></label><input id="rate" type="range" min="0" max="15" value="7"><div id="compoundChart" class="chart" role="img" aria-label="Modeled investment values"></div><h3 id="balance"></h3><small>Starting value $1,000 · annual compounding · 20 years</small></div>';if(art==='supply')return '<div class="panel"><label for="demand">Demand intercept: <b id="demandLabel">90</b></label><input id="demand" type="range" min="60" max="120" value="90"><svg id="market" viewBox="0 0 340 210" role="img" aria-label="Supply and demand graph"></svg><h3 id="equilibrium"></h3><small>Model: Qd = intercept − 2P; Qs = 10 + 2P. Illustrative only.</small></div>';if(art==='coin')return '<div class="panel"><h3>Fair coin experiment</h3><div class="row"><button class="secondary" data-toss="10">Toss 10</button><button class="secondary" data-toss="100">Toss 100</button><button class="link" data-toss="reset">Reset</button></div><div class="bar"><span id="coinbar" style="width:50%"></span></div><h3 id="coinresult">No tosses yet.</h3><small>Uses simulated random independent tosses.</small></div>';return ''}

/* Approved interactive lesson experiences, scoped to the three existing courses. */
const approvedSimulations={dna:{3:'eyes'},motion:{2:'hill'},transistors:{2:'bulb'}};
const simEl=id=>document.getElementById(id);
let hillFrame=null;
function stopHill(){if(hillFrame!==null){cancelAnimationFrame(hillFrame);hillFrame=null}}
function inheritance(a,b){return [a[0]+b[0],a[0]+b[1],a[1]+b[0],a[1]+b[1]].map(x=>({genotype:x.includes('B')?(x==='BB'?'BB':'Bb'):'bb',brown:x.includes('B')}))}
function eyePicture(brown,x,y,scale=1){
 const dark=brown?'#563820':'#315b7d',mid=brown?'#986a40':'#76a8c8',light=brown?'#ca9f65':'#c4dce9';
 let rays=Array.from({length:48},(_,i)=>{let a=i*Math.PI/24,rr=24+i%3;return '<path d="M'+(12*Math.cos(a)).toFixed(2)+' '+(12*Math.sin(a)).toFixed(2)+'L'+(rr*Math.cos(a+.04)).toFixed(2)+' '+(rr*Math.sin(a+.04)).toFixed(2)+'" stroke="'+(i%2?dark:light)+'" stroke-width="1" opacity=".8"/>'}).join('');
 return '<g transform="translate('+x+' '+y+') scale('+scale+')"><path d="M-57 0Q0 -52 57 0Q0 52 -57 0Z" fill="#f9f6ef" stroke="#8f8175" stroke-width="1.5"/><circle r="29" fill="'+dark+'"/><circle r="26" fill="'+mid+'"/>'+rays+'<circle r="11" fill="#1b201e"/><circle cx="-8" cy="-10" r="5" fill="#fff" opacity=".93"/><circle cx="8" cy="6" r="2" fill="#fff" opacity=".6"/></g>'
}
function eyeSim(){
 const opts='<option value="BB">Brown · BB (two B copies)</option><option value="Bb" selected>Brown · Bb (one B copy)</option><option value="bb">Blue · bb (no B copy)</option>';
 return '<section class="panel simlab"><div class="eyebrow">Interactive lab · Genetics</div><h2>What color eyes might a child have?</h2><p>Choose the hypothetical genetic variants inherited from two parents and explore the possible eye colors.</p><div class="simtwocol"><label>Parent 1<select id="eyeParent1">'+opts+'</select></label><label>Parent 2<select id="eyeParent2">'+opts.replace('value="Bb" selected','value="Bb"').replace('value="bb"','value="bb" selected')+'</select></label></div><svg id="eyeParents" viewBox="0 0 340 104" class="simscene eyeparents" role="img" aria-label="Parent eye colors"></svg><h3>Four equally likely allele combinations</h3><svg id="eyeOutcomes" viewBox="0 0 340 192" class="simscene eyeoutcomes" role="img" aria-label="Punnett square showing predicted eye colors"></svg><div class="simtwocol simmetrics"><div><small>Brown eyes</small><strong id="eyeBrown">50%</strong></div><div><small>Blue eyes</small><strong id="eyeBlue">50%</strong></div></div><div class="simcolorbar"><span id="eyeBrownBar" style="background:#986a40;width:50%"></span><span id="eyeBlueBar" style="background:#76a8c8;width:50%"></span></div><p id="eyeResult" class="simexplain" aria-live="polite"></p><small>Teaching model only: assumes one gene with complete dominance. Real eye color is influenced by multiple genes and includes green, hazel and other colors. A brown-eyed person cannot infer BB or Bb from appearance alone. These percentages are not real-world predictions. <a href="https://medlineplus.gov/genetics/understanding/traits/eyecolor/" target="_blank" rel="noopener noreferrer">Learn about real eye-color genetics ↗</a></small></section>'
}
function drawEyes(){
 const p1=simEl('eyeParent1'),p2=simEl('eyeParent2');if(!p1||!p2)return;
 const a=p1.value,b=p2.value,results=inheritance(a,b),brown=results.filter(x=>x.brown).length*25;
 const txt=(x,y,s)=>'<text x="'+x+'" y="'+y+'" text-anchor="middle" fill="currentColor" font-size="12" font-weight="650">'+s+'</text>';
 simEl('eyeParents').innerHTML=eyePicture(a!=='bb',85,44,.9)+eyePicture(b!=='bb',255,44,.9)+txt(85,94,'Parent 1 · '+(a==='bb'?'Blue':'Brown'))+txt(255,94,'Parent 2 · '+(b==='bb'?'Blue':'Brown'));
 simEl('eyeOutcomes').innerHTML=results.map((v,i)=>{const x=i%2*170,y=Math.floor(i/2)*96;return '<rect x="'+(x+5)+'" y="'+(y+4)+'" width="160" height="88" rx="9" fill="'+(v.brown?'#a77c4c':'#6e9dbd')+'" opacity=".15"/>'+eyePicture(v.brown,x+85,y+37,.74)+txt(x+85,y+79,(v.brown?'Brown':'Blue')+' eyes · '+v.genotype)}).join('');
 simEl('eyeBrown').textContent=brown+'%';simEl('eyeBlue').textContent=(100-brown)+'%';simEl('eyeBrownBar').style.width=brown+'%';simEl('eyeBlueBar').style.width=(100-brown)+'%';
 simEl('eyeResult').textContent='In this model, each child has a '+brown+'% chance of brown eyes and a '+(100-brown)+'% chance of blue eyes. Each inheritance event is independent.';
}
function hillValues(angle,mass){const a=9.81*Math.sin(angle*Math.PI/180);return {a,force:mass*a,time:Math.sqrt(24/a),speed:Math.sqrt(24*a)}}
function hillSim(){return '<section class="panel simlab"><div class="eyebrow">Interactive lab · Physics</div><h2>Race a cart down a hill</h2><p>Change the hill and the mass of the cart. Release it and watch its speed build over a 12-meter track.</p><svg id="hillScene" class="simscene" viewBox="0 0 360 265" role="img" aria-label="Cart moving down a hill"><rect width="360" height="265" fill="#dce8e3"/><circle cx="306" cy="32" r="20" fill="#efd08a"/><g fill="#fff" opacity=".75"><ellipse cx="92" cy="24" rx="31" ry="9"/><ellipse cx="111" cy="18" rx="18" ry="12"/><ellipse cx="70" cy="24" rx="20" ry="7"/></g><path d="M0 210V144L70 92 121 150 209 70 360 184V265H0Z" fill="#aec7bb"/><path id="hillGround" fill="#7da182"/><path id="hillTrack" stroke="#555e58" stroke-width="9" stroke-linecap="round" fill="none"/><path id="hillTrackline" stroke="#e5d7b7" stroke-width="1.5" stroke-dasharray="10 8" fill="none"/><g id="hillFlag"><path d="M0 0V-48" stroke="#424b46" stroke-width="2"/><rect y="-48" width="24" height="18" fill="#f5f3e9"/><path d="M0 -48h8v6H0z M16 -48h8v6h-8z M8 -42h8v6H8z M0 -36h8v6H0z M16 -36h8v6h-8z" fill="#39443c"/></g><g id="hillCart"><rect x="-19" y="-33" width="38" height="24" rx="4" fill="#bc8753" stroke="#735333"/><rect x="-16" y="-36" width="32" height="7" rx="3" fill="#d6ab78"/><path d="M-20 -9H20" stroke="#39443e" stroke-width="4"/><circle cx="-12" cy="-6" r="6" fill="#34453e" stroke="#acb4af" stroke-width="1.5"/><circle cx="12" cy="-6" r="6" fill="#34453e" stroke="#acb4af" stroke-width="1.5"/><text id="hillMassLabel" y="-17" text-anchor="middle" font-size="10" font-weight="bold" fill="#fff"></text></g><text id="hillSlopeLabel" x="42" y="112" font-size="12" fill="#263e31"></text><rect x="12" y="235" width="336" height="20" rx="6" fill="#edf4eb"/><rect id="hillProgress" x="12" y="235" width="0" height="20" rx="6" fill="#b0cdb3"/><text id="hillStatus" x="180" y="249" text-anchor="middle" font-size="11" font-weight="650" fill="#263e31">Ready to race</text></svg><div class="simmetrics simthreecol"><div><small>Elapsed</small><strong id="hillElapsed">0.00 s</strong></div><div><small>Speed</small><strong id="hillSpeed">0.0 m/s</strong></div><div><small>Distance</small><strong id="hillDistance">0.0 m</strong></div></div><label for="hillAngle">Hill steepness <b id="hillAngleValue">20°</b></label><input id="hillAngle" type="range" min="5" max="35" step="1" value="20"><label for="hillMass">Cart mass <b id="hillMassValue">4 kg</b></label><input id="hillMass" type="range" min="1" max="20" step="1" value="4"><div class="simmetrics simtwocol"><div><small>Acceleration</small><strong id="hillAcceleration"></strong></div><div><small>Downhill force</small><strong id="hillForce"></strong></div><div><small>Predicted finish time</small><strong id="hillTime"></strong></div><div><small>Predicted finish speed</small><strong id="hillFinishSpeed"></strong></div></div><div class="simtwocol"><button class="primary simbutton" data-sim-hill="start"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 4l14 8-14 8Z" fill="currentColor"/></svg> Start</button><button class="secondary simbutton" data-sim-hill="replay"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 12a9 9 0 1 1 3 7M3 4v8h8" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg> Replay</button></div><p id="hillAnnouncement" class="simexplain" aria-live="polite">Try two different cart masses at the same slope. Does the finishing time change?</p><small>Ideal model: the cart starts from rest; ignores friction, air resistance and wheel rotational inertia. The downhill gravitational force is m g sin θ. Acceleration is g sin θ, independent of mass.</small></section>'}
function paintHill(t,status,angle,mass){
 if(!simEl('hillScene'))return;
 const v=hillValues(angle,mass),rad=angle*Math.PI/180,L=12,scale=23,s=Math.min(L,.5*v.a*t*t),x=38+scale*s*Math.cos(rad),y=58+scale*s*Math.sin(rad),ex=38+scale*L*Math.cos(rad),ey=58+scale*L*Math.sin(rad);
 simEl('hillGround').setAttribute('d','M0 58H38L'+ex+' '+ey+'H360V265H0Z');
 for(const id of ['hillTrack','hillTrackline'])simEl(id).setAttribute('d','M38 58L'+ex+' '+ey);
 simEl('hillFlag').setAttribute('transform','translate('+ex+' '+ey+')');
 simEl('hillCart').setAttribute('transform','translate('+x+' '+y+') rotate('+angle+')');
 simEl('hillMassLabel').textContent=mass+' kg';simEl('hillSlopeLabel').textContent=angle+'° slope';simEl('hillSlopeLabel').setAttribute('y',Math.min(210,58+40*Math.sin(rad)+25));
 simEl('hillElapsed').textContent=t.toFixed(2)+' s';simEl('hillSpeed').textContent=(v.a*t).toFixed(1)+' m/s';simEl('hillDistance').textContent=s.toFixed(1)+' m';simEl('hillProgress').setAttribute('width',336*s/L);simEl('hillStatus').textContent=status;
}
function resetHill(){
 stopHill();if(!simEl('hillAngle'))return;
 const angle=+simEl('hillAngle').value,mass=+simEl('hillMass').value,v=hillValues(angle,mass);
 simEl('hillAngleValue').textContent=angle+'°';simEl('hillMassValue').textContent=mass+' kg';
 simEl('hillAcceleration').textContent=v.a.toFixed(2)+' m/s²';simEl('hillForce').textContent=v.force.toFixed(1)+' N';simEl('hillTime').textContent=v.time.toFixed(2)+' s';simEl('hillFinishSpeed').textContent=v.speed.toFixed(2)+' m/s';
 simEl('hillAnnouncement').textContent='Try two different cart masses at the same slope. Does the finishing time change?';paintHill(0,'Ready to race · 12 m track',angle,mass);
}
function playHill(){
 resetHill();if(!simEl('hillAngle'))return;
 const angle=+simEl('hillAngle').value,mass=+simEl('hillMass').value,v=hillValues(angle,mass),start=performance.now();
 if(window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches){paintHill(v.time,'Finished!',angle,mass);simEl('hillAnnouncement').textContent='Finished in '+v.time.toFixed(2)+' seconds.';return}
 const tick=now=>{if(!simEl('hillScene')){hillFrame=null;return}const t=Math.min(v.time,(now-start)/1000);paintHill(t,t>=v.time?'Finished!':'Rolling downhill…',angle,mass);if(t<v.time)hillFrame=requestAnimationFrame(tick);else{hillFrame=null;simEl('hillAnnouncement').textContent='Finished in '+v.time.toFixed(2)+' seconds. Try a different mass or slope.'}};
 hillFrame=requestAnimationFrame(tick);
}
let bulbGate='AND',bulbA=true,bulbB=false;
function bulbOn(g,a,b){return g==='AND'?a&&b:g==='OR'?a||b:a!==b}
function bulbSim(){return '<section class="panel simlab"><div class="eyebrow">Interactive lab · Electronics</div><h2>Can you turn on the light?</h2><p>Two switches control a lamp through a logic gate. Choose a gate, flip the switches and see when the bulb lights up.</p><div class="simthreecol" role="group" aria-label="Choose a logic gate">'+['AND','OR','XOR'].map(g=>'<button class="secondary" data-sim-gate="'+g+'" aria-pressed="false">'+g+'</button>').join('')+'</div><svg id="bulbScene" class="simscene" viewBox="0 0 340 268" role="img" aria-label="Two switches controlling a lightbulb"></svg><div class="simtwocol"><button class="secondary" data-sim-switch="a" aria-pressed="true" id="bulbSwitchA">Switch A · ON</button><button class="secondary" data-sim-switch="b" aria-pressed="false" id="bulbSwitchB">Switch B · OFF</button></div><p id="bulbExplanation" class="simexplain" aria-live="polite"></p><div class="simtablewrap"><table class="simtruth"><caption>Compare the three gates</caption><thead><tr><th scope="col">A</th><th scope="col">B</th><th scope="col">AND</th><th scope="col">OR</th><th scope="col">XOR</th></tr></thead><tbody id="bulbTruth"></tbody></table></div><small>Conceptual digital logic demonstration, not a household electrical wiring diagram.</small></section>'}
function drawBulb(){
 if(!simEl('bulbScene'))return;
 const lit=bulbOn(bulbGate,bulbA,bulbB),wire=on=>on?'#39875c':'#7d8881';
 let scene='<rect width="340" height="268" rx="12" fill="'+(lit?'#eee6ce':'#dce2df')+'"/><path d="M0 233H340V268H0Z" fill="'+(lit?'#c5b89a':'#aab8b0')+'"/>';
 if(lit){scene+='<circle cx="170" cy="83" r="69" fill="#ffda65" opacity=".2"/><circle cx="170" cy="83" r="53" fill="#ffe083" opacity=".3"/>';for(let i=0;i<12;i++){let a=i*Math.PI/6;scene+='<path d="M'+(170+46*Math.cos(a))+' '+(83+46*Math.sin(a))+'L'+(170+58*Math.cos(a))+' '+(83+58*Math.sin(a))+'" stroke="#c59437" stroke-width="2" stroke-linecap="round"/>'}}
 scene+='<path d="M148 107Q148 100 140 88A34 34 0 1 1 200 88Q192 100 192 107V119H148Z" fill="'+(lit?'#ffe68a':'#c0c9c5')+'" stroke="'+(lit?'#b78a37':'#65736e')+'" stroke-width="2"/><path d="M160 109V85L166 77 174 85 180 77V109" fill="none" stroke="'+(lit?'#9e6b27':'#7d8982')+'" stroke-width="2"/><rect x="150" y="119" width="40" height="16" rx="4" fill="#7a837e"/><path d="M152 123h36m-36 5h36m-36 5h36" stroke="#b9c1bc" stroke-width="2"/><path d="M170 135V163" stroke="'+wire(lit)+'" stroke-width="3"/><rect x="132" y="163" width="76" height="31" rx="6" fill="#3b5a4b"/><text x="170" y="183" text-anchor="middle" font-size="14" font-weight="bold" fill="#fff">'+bulbGate+'</text><path d="M132 179H70V207" fill="none" stroke="'+wire(bulbA)+'" stroke-width="3"/><path d="M208 179H270V207" fill="none" stroke="'+wire(bulbB)+'" stroke-width="3"/>';
 for(const [i,on] of [bulbA,bulbB].entries()){scene+='<g transform="translate('+(i===0?70:270)+' 0)"><rect x="-24" y="205" width="48" height="45" rx="5" fill="#f7f6ef" stroke="#9da8a0"/><rect x="-9" y="211" width="18" height="28" rx="4" fill="#adb6af"/><rect x="-7" y="'+(on?211:225)+'" width="14" height="14" rx="3" fill="'+wire(on)+'"/><circle cy="244" r="2" fill="'+wire(on)+'"/><text y="262" text-anchor="middle" font-size="10" font-weight="bold" fill="#35453b">Switch '+(i===0?'A':'B')+'</text></g>'}
 scene+='<text x="170" y="16" text-anchor="middle" fill="#35453b" font-size="11" font-weight="bold">LIGHT '+(lit?'ON':'OFF')+'</text>';simEl('bulbScene').innerHTML=scene;
 for(const [id,on,name] of [['bulbSwitchA',bulbA,'A'],['bulbSwitchB',bulbB,'B']]){const el=simEl(id);el.textContent='Switch '+name+' · '+(on?'ON':'OFF');el.setAttribute('aria-pressed',String(on))}
 for(const el of document.querySelectorAll('[data-sim-gate]'))el.setAttribute('aria-pressed',String(el.dataset.simGate===bulbGate));
 simEl('bulbExplanation').textContent='Light is '+(lit?'ON':'OFF')+'. '+({AND:'Both switches must be on.',OR:'At least one switch must be on.',XOR:'Exactly one switch must be on.'}[bulbGate]);
 simEl('bulbTruth').innerHTML=[[false,false],[false,true],[true,false],[true,true]].map(([a,b])=>'<tr'+(a===bulbA&&b===bulbB?' class="simcurrent"':'')+'><th scope="row">'+(a?'On':'Off')+'</th><td>'+(b?'On':'Off')+'</td>'+['AND','OR','XOR'].map(g=>{const on=bulbOn(g,a,b);return '<td'+(g===bulbGate?' class="simselected"':'')+'><span class="simdot '+(on?'ison':'')+'" aria-hidden="true"></span>'+(on?'On':'Off')+'</td>'}).join('')+'</tr>').join('');
}
function approvedSimulation(id,step){const type=approvedSimulations[id]?.[step];return type==='eyes'?eyeSim():type==='hill'?hillSim():type==='bulb'?bulbSim():''}
function initializeApprovedSim(){if(simEl('eyeParent1'))drawEyes();if(simEl('hillAngle'))resetHill();if(simEl('bulbScene')){bulbGate='AND';bulbA=true;bulbB=false;drawBulb()}}

function renderLesson(){stopHill();window.LumenExperiences?.unmount();if(!session)return;if(session.mode==='experience'){renderStandaloneExperience();return}if(session.mode==='placement'){renderPlacement();return}if(session.mode==='complete'){renderCourseComplete();return}let c,body='',total,step=session.step,q,bookmark='';if(session.mode==='review'){const k=session.queue[step];if(!k){closeLesson();notify('Review complete.');return}const [id,i]=k.split(':');c=get(id);q=c.questions[+i];total=session.queue.length;body=questionUI(q)+sourceUI(c)}else{c=get(session.id);total=c.slides.length+c.questions.length;if(step<c.slides.length){const s=c.slides[step];const key=c.id+':s'+step;bookmark='<button class="iconbtn" data-save="'+E(key)+'" aria-label="'+(state.saved[key]?'Remove bookmark':'Save insight')+'" aria-pressed="'+!!state.saved[key]+'">'+icon('bookmark')+(state.saved[key]?'✓':'')+'</button>';body='<div class="eyebrow">'+E(c.category)+' · '+E(c.format)+'</div><h1>'+E(s.title)+'</h1>'+(c.diagram||step===0?editorial(c,'lessonart',step):artwork(s.art,'lessonart'))+'<p>'+E(s.text)+'</p>'+(step===0?prerequisiteUI(c):'')+simulation(s.art)+approvedSimulation(c.id,step)+(window.LumenExperiences?.markup(c.id,step)||'')+sourceUI(c)}else{q=c.questions[step-c.slides.length];body=questionUI(q)+sourceUI(c)}}
lesson.innerHTML='<div class="lessonhead"><div class="row between"><button class="iconbtn" data-action="close" aria-label="Exit lesson">'+icon('close')+'</button><small>'+E(c.title)+' · '+(step+1)+'/'+total+'</small>'+bookmark+'</div><div class="bar"><span style="width:'+((step+1)/total*100)+'%"></span></div></div><div class="lessonbody">'+body+'</div><div class="lessonfoot"><button class="secondary" data-action="prev" '+(session.mode==='review'||step===0||q?'disabled':'')+'>← Back</button><button class="primary" data-action="next" '+(q&&answered===null?'disabled':'')+'>'+(step===total-1?'Finish':'Continue')+' →</button></div>';if(document.getElementById('rate'))drawCompound(7);if(document.getElementById('demand'))drawSupply(90);if(document.getElementById('coinresult'))drawCoin();initializeApprovedSim();window.LumenExperiences?.mount();lesson.scrollTop=0}
function answer(i){if(!session||!['course','review'].includes(session.mode)||answered!==null)return;let c,j;if(session.mode==='review'){const [id,index]=session.queue[session.step].split(':');c=get(id);j=+index}else{c=get(session.id);j=session.step-c.slides.length}let q=c.questions[j];if(!q||i<0||i>=q.options.length)return;answered=i;state.attempts++;state.correct+=Number(i===q.correct);schedule(c.id,j,i===q.correct);persist();renderLesson()}
function next(){if(!session||!['course','review'].includes(session.mode))return;if(session.mode==='review'){if(answered===null)return;session.step++;answered=null;renderLesson();return}const c=get(session.id),total=c.slides.length+c.questions.length;if(session.step>=c.slides.length&&answered===null)return;if(session.step>=c.slides.length){let j=session.step-c.slides.length;session.answers[j]=Number(answered===c.questions[j].correct)}session.step++;answered=null;if(session.step>=total){const check={version:revisionOf(c),correct:Object.values(session.answers).reduce((sum,n)=>sum+Number(n===1),0),total:c.questions.length,date:Date.now()};state.progress[c.id]={...progress(c.id),step:0,done:true,answers:{},attemptVersion:revisionOf(c),check};log((Date.now()-started)/1000,1);session={mode:'complete',id:c.id};started=Date.now();renderLesson();return}state.progress[c.id]={...progress(c.id),step:session.step,answers:{...session.answers},attemptVersion:revisionOf(c)};persist();renderLesson()}
function prev(){if(session?.mode==='course'&&session.step>0&&session.step<get(session.id).slides.length){session.step--;answered=null;state.progress[session.id]={...progress(session.id),step:session.step,answers:{...session.answers},attemptVersion:revisionOf(get(session.id))};persist();renderLesson()}}
function drawCompound(rate){rate=+rate;const values=[0,5,10,15,20].map(y=>1000*Math.pow(1+rate/100,y)),max=values[4];document.getElementById('rateLabel').textContent=rate+'%';document.getElementById('compoundChart').innerHTML=values.map((v,i)=>'<div><b>$'+Math.round(v).toLocaleString()+'</b><i style="height:'+Math.max(3,v/max*75)+'%"></i><small>Y'+i*5+'</small></div>').join('');document.getElementById('balance').textContent='After 20 years: $'+Math.round(max).toLocaleString()}
function drawSupply(intercept){intercept=+intercept;const P=(intercept-10)/4,Q=10+2*P,X=q=>35+q*2.15,Y=p=>185-p*2.6;document.getElementById('demandLabel').textContent=intercept;document.getElementById('market').innerHTML='<path d="M35 15v170h280" stroke="currentColor" fill="none"/><path d="M'+X(10)+' '+Y(0)+' L'+X(130)+' '+Y(60)+'" stroke="#6b9b77" stroke-width="3"/><path d="M'+X(intercept)+' '+Y(0)+' L'+X(0)+' '+Y(intercept/2)+'" stroke="#bd8756" stroke-width="3"/><path d="M35 '+Y(P)+' H'+X(Q)+' V185" fill="none" stroke="currentColor" stroke-dasharray="4 4"/><circle cx="'+X(Q)+'" cy="'+Y(P)+'" r="6" fill="currentColor"/><g fill="currentColor" font-size="11"><text x="4" y="15">Price</text><text x="253" y="203">Quantity</text><text x="225" y="28">Supply</text><text x="48" y="44">Demand</text></g>';document.getElementById('equilibrium').textContent='Equilibrium: price $'+P.toFixed(2)+' · quantity '+Q.toFixed(1)}
let tosses=0,heads=0;function drawCoin(){document.getElementById('coinbar').style.width=(tosses?heads/tosses*100:50)+'%';document.getElementById('coinresult').textContent=tosses?heads+' heads / '+tosses+' tosses · '+(heads/tosses*100).toFixed(1)+'% heads':'No tosses yet.'}
function prefs(){dialog.innerHTML='<form id="prefsForm"><div class="eyebrow">Make it yours</div><h2>What are you curious about?</h2><p class="muted">Choose any interests. You can explore every subject regardless.</p><div class="checkgrid">'+categories().map(c=>'<label><input type="checkbox" name="interest" value="'+E(c)+'" '+(state.interests.includes(c)?'checked':'')+'>'+E(c)+'</label>').join('')+'</div><label>Daily learning goal<select name="goal">'+[5,10,15,20].map(x=>'<option value="'+x+'" '+(state.goal===x?'selected':'')+'>'+x+' minutes</option>').join('')+'</select></label><button class="primary" type="submit">Save preferences</button><button class="link" type="button" data-action="dismiss">Not now</button></form>';dialog.showModal()}
function studio(){const example={title:'Why leaves change color',category:'Nature',desc:'Discover autumn pigments.',art:'nature',format:'Quick read',source:'https://www.fs.usda.gov/',slides:[{title:'Chlorophyll',text:'Leaves use chlorophyll to absorb light. As chlorophyll breaks down in autumn, other pigments can become visible.',art:'nature'}],questions:[{q:'Which pigment is associated with green leaves?',options:['Chlorophyll','Hemoglobin'],correct:0,why:'Chlorophyll absorbs light used in photosynthesis.'}]};dialog.innerHTML='<form id="studioForm"><h2>Content studio</h2><p class="muted">Add an original lesson with structured slides and questions. It is saved privately in this browser, not published to GitHub. Verify sources before sharing.</p><label>Lesson JSON<textarea name="json" rows="14" required>'+E(JSON.stringify(example,null,2))+'</textarea></label><small>Supported art: mind, scales, growth, orbit, nature, network, timeline, chance, chart, compound, supply, coin.</small><div class="row"><button class="primary" type="submit">Add lesson</button><button class="secondary" type="button" data-action="dismiss">Cancel</button></div></form>';dialog.showModal()}
function validCustom(x){const s=v=>typeof v==='string'&&v.trim().length>0&&v.length<4000;return x&&s(x.title)&&s(x.category)&&s(x.desc)&&Array.isArray(x.slides)&&x.slides.length>0&&x.slides.length<=30&&x.slides.every(y=>s(y.title)&&s(y.text)&&s(y.art))&&Array.isArray(x.questions)&&x.questions.length>0&&x.questions.length<=20&&x.questions.every(q=>s(q.q)&&s(q.why)&&Array.isArray(q.options)&&q.options.length>=2&&q.options.length<=6&&q.options.every(s)&&Number.isInteger(q.correct)&&q.correct>=0&&q.correct<q.options.length)}
function exportData(){const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([JSON.stringify(state,null,2)],{type:'application/json'}));a.download='lumen-learning-data.json';a.click();setTimeout(()=>URL.revokeObjectURL(a.href),1000)}
document.addEventListener('click',e=>{const b=e.target.closest('button');if(!b||b.disabled)return;const d=b.dataset;if(d.relatedCourse){const id=d.relatedCourse;if(session)closeLesson();openCourse(id);return}if(d.retryCheck){const id=d.retryCheck;closeLesson();openCourse(id);return}if(d.knowledgeOpen!==undefined){openKnowledge(d.knowledgeOpen);return}if(d.kpTest){placementStart(d.kpTest);return}if(d.kpFromComplete){const cat=d.kpFromComplete;openKnowledge(cat);placementStart(cat);return}if(d.kpAnswer!==undefined){placementAnswer(+d.kpAnswer);return}if(d.kpUse){const cat=d.kpUse;if(knowledgeRecord(cat).assessment){state.knowledge={...state.knowledge,[cat]:{...knowledgeRecord(cat),useAssessment:true}};persist();render()}return}if(d.action==='knowledge-all'){knowledgeAll=!knowledgeAll;render();return}if(d.simHill){playHill();return}if(d.simGate){bulbGate=d.simGate;drawBulb();return}if(d.simSwitch){if(d.simSwitch==='a')bulbA=!bulbA;else bulbB=!bulbB;drawBulb();return}if(d.go){if(d.go==='Explore'&&page!=='Explore'){filter='All';search='';format='All'}go(d.go);return}if(d.experienceOpen){openExperience(d.experienceOpen);return}if(d.open){openCourse(d.open);return}if(d.topic){filter=d.topic;format='All';search='';go('Explore');return}if(d.filter){filter=d.filter;render();return}if(d.answer!==undefined){answer(+d.answer);return}if(d.save){const c=get(session.id),s=c.slides[session.step];if(state.saved[d.save]){delete state.saved[d.save];notify('Bookmark removed')}else{state.saved[d.save]={title:s.title,text:s.text};notify('Saved to your library')}persist();renderLesson();return}if(d.unsave){delete state.saved[d.unsave];delete state.notes[d.unsave];persist();render();return}if(d.note){dialog.innerHTML='<form id="noteForm" data-key="'+E(d.note)+'"><h2>Personal note</h2><label>What did you learn?<textarea name="note" rows="5">'+E(state.notes[d.note]||'')+'</textarea></label><button class="primary" type="submit">Save note</button><button class="link" type="button" data-action="dismiss">Cancel</button></form>';dialog.showModal();return}if(d.toss){if(d.toss==='reset'){tosses=0;heads=0}else{for(let i=0;i<+d.toss;i++){tosses++;heads+=Number(Math.random()<.5)}}drawCoin();return}switch(d.action){case 'theme':state.theme=state.theme==='dark'?'light':'dark';persist();render();break;case 'prefs':prefs();break;case 'dismiss':dialog.close();state.onboarded=true;persist();break;case 'close':closeLesson();break;case 'next':next();break;case 'prev':prev();break;case 'review':openReview();break;case 'export':exportData();break;case 'studio':studio();break;case 'reset':if(window.LumenLocalProfiles?.isActive()){notify('Use Delete profile in Local learning profiles to remove this profile.');break}if(window.LumenAccounts?.isActive()){notify('Sign out before clearing guest data. Account deletion is not yet available.');break}if(confirm('Permanently delete all guest Lumen data on this device?')){state=fresh();persist();go('Today');prefs()}break}});
document.addEventListener('input',e=>{if(e.target.id==='search'){search=e.target.value;const q=search.toLowerCase().trim(),arr=all().filter(c=>(filter==='All'||c.category===filter)&&(format==='All'||c.format===format||(format==='Interactive'&&(approvedSimulations[c.id]||window.LumenExperiences?.has(c.id)||['compound','supply','probability'].includes(c.id))))&&(!q||(c.title+' '+c.desc+' '+c.category+' '+c.slides.map(s=>s.title+' '+s.text).join(' ')).toLowerCase().includes(q)));const entries=format==='Interactive'?filteredExperiences():null;document.getElementById('results').innerHTML=entries?experienceCards(entries):cards(arr);const count=document.querySelector('#results').previousElementSibling.querySelector('small');if(count)count.textContent=entries?entries.length+' experiences':arr.length+' titles'}if(e.target.id==='hillAngle'||e.target.id==='hillMass')resetHill();if(e.target.id==='rate')drawCompound(e.target.value);if(e.target.id==='demand')drawSupply(e.target.value)});
document.addEventListener('change',e=>{if(e.target.dataset.kpLevel){saveKnowledge(e.target.dataset.kpLevel,e.target.value);return}if(e.target.id==='eyeParent1'||e.target.id==='eyeParent2')drawEyes();if(e.target.id==='format'){format=e.target.value;render()}});
document.addEventListener('submit',e=>{if(!['prefsForm','noteForm','studioForm'].includes(e.target.id))return;e.preventDefault();const f=new FormData(e.target);if(e.target.id==='prefsForm'){state.interests=f.getAll('interest');state.goal=+f.get('goal');state.onboarded=true}else if(e.target.id==='noteForm'){state.notes[e.target.dataset.key]=String(f.get('note'))}else{try{const x=JSON.parse(f.get('json'));if(!validCustom(x))throw Error('Provide a title, category, description, slides and valid questions.');state.custom.push({id:'custom-'+Date.now(),title:x.title,category:x.category,desc:x.desc,art:x.art||'network',format:x.format==='Course'?'Course':'Quick read',difficulty:'Beginner',source:typeof x.source==='string'?x.source:'',slides:x.slides.map(s=>({title:s.title,text:s.text,art:s.art})),questions:x.questions.map(q=>({q:q.q,options:q.options,correct:q.correct,why:q.why}))});notify('Custom lesson added.')}catch(err){notify('Invalid lesson: '+err.message);return}}persist();dialog.close();render()});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&session&&!dialog.open)closeLesson();if(e.key==='Tab'&&session&&!dialog.open){const focusable=[...lesson.querySelectorAll('button:not(:disabled),a[href],input:not(:disabled),select:not(:disabled)')];if(focusable.length){const first=focusable[0],last=focusable[focusable.length-1];if(e.shiftKey&&(document.activeElement===first||!lesson.contains(document.activeElement))){e.preventDefault();last.focus()}else if(!e.shiftKey&&(document.activeElement===last||!lesson.contains(document.activeElement))){e.preventDefault();first.focus()}}}});
window.addEventListener('pagehide',()=>{if(session){log((Date.now()-started)/1000);started=Date.now()}});
dialog.addEventListener('cancel',()=>{state.onboarded=true;persist()});
render();if(!state.onboarded)prefs();
const profileAdapter={
 get:()=>state,fresh,catalog:()=>courses,notify,
 guest:()=>{try{const s=JSON.parse(localStorage.getItem(K));return s&&typeof s==='object'?{...fresh(),...s}:fresh()}catch{return fresh()}},
 refresh:()=>{if(page==='Profile'&&!session&&!dialog.open)render()},
 swap:nextState=>{
  stopHill();window.LumenExperiences?.unmount();session=null;answered=null;lastFocus=null;lesson.hidden=true;lesson.innerHTML='';document.querySelector('.shell').inert=false;document.body.style.overflow='';
  if(dialog.open)dialog.close();state={...fresh(),...nextState};page='Profile';filter='All';search='';format='All';knowledgeFocus='';render();
 }
};
window.LumenAccounts?.start(profileAdapter);
if(!window.LumenAccounts?.enabled())window.LumenLocalProfiles?.start(profileAdapter);
