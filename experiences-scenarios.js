window.LumenScenarioData=[
  {
    "course": "negotiation",
    "step": 2,
    "title": "Negotiate a job offer",
    "type": "decision",
    "rounds": [
      {
        "body": "Your fictional offer is $22/hour; you have another option at $23/hour and value schedule flexibility.",
        "visual": "person:Candidate;receipt:$22 offer",
        "prompt": "What do you do first?",
        "choices": [
          {
            "label": "Explain your value and ask about pay and flexibility",
            "feedback": "You open a discussion of shared interests.",
            "good": true
          },
          {
            "label": "Accept immediately without comparing",
            "feedback": "You may accept a deal without understanding alternatives.",
            "good": false
          },
          {
            "label": "Threaten to quit before starting",
            "feedback": "A threat may damage trust without making your case.",
            "good": false
          }
        ]
      },
      {
        "body": "The employer cannot raise the hourly rate but can offer flexible hours.",
        "visual": "calendar:Flexible hours;wallet:Pay ceiling",
        "prompt": "What is the best next step?",
        "choices": [
          {
            "label": "Compare the whole package with your alternative",
            "feedback": "You evaluate the deal against your actual priorities.",
            "good": true
          },
          {
            "label": "Assume flexibility is worth any pay cut",
            "feedback": "The value of flexibility varies by person.",
            "good": false
          },
          {
            "label": "Dismiss all non-pay terms",
            "feedback": "Non-pay terms may matter substantially.",
            "good": false
          }
        ]
      }
    ]
  },
  {
    "course": "cyber-safety",
    "step": 1,
    "title": "The urgent IT email",
    "type": "decision",
    "rounds": [
      {
        "body": "A fictional email claims your account expires in 10 minutes and asks you to sign in from its link.",
        "visual": "computer:Email;clock:10 minutes;warning:Urgent",
        "prompt": "How should you respond?",
        "choices": [
          {
            "label": "Use your known company portal or help desk independently",
            "feedback": "Independent verification avoids trusting the suspicious link.",
            "good": true
          },
          {
            "label": "Enter your password in the email link",
            "feedback": "The link may be a credential-stealing page.",
            "good": false
          },
          {
            "label": "Reply with your MFA code",
            "feedback": "An MFA code can help an attacker complete sign-in.",
            "good": false
          }
        ]
      },
      {
        "body": "The real help desk confirms the message is fraudulent.",
        "visual": "shield:Verified help desk;computer:Suspicious message",
        "prompt": "What next?",
        "choices": [
          {
            "label": "Report the message through the organization's process",
            "feedback": "Reporting helps defenders investigate and protect others.",
            "good": true
          },
          {
            "label": "Forward it to everyone unmarked",
            "feedback": "Unmarked forwarding may spread the lure.",
            "good": false
          },
          {
            "label": "Delete logs and pretend nothing happened",
            "feedback": "Preserving relevant evidence can help incident response.",
            "good": false
          }
        ]
      }
    ]
  },
  {
    "course": "budget",
    "step": 2,
    "title": "Make payday last",
    "type": "decision",
    "rounds": [
      {
        "body": "A fictional monthly budget has $2,400 income, $1,500 essential costs and $500 planned discretionary spending.",
        "visual": "wallet:$2,400 income;receipt:$2,000 expenses",
        "prompt": "How would you use the remaining $400?",
        "choices": [
          {
            "label": "Set aside a buffer for irregular costs and savings",
            "feedback": "You reduce vulnerability to unexpected expenses.",
            "good": true
          },
          {
            "label": "Treat all $400 as guaranteed spare spending",
            "feedback": "Irregular bills could exhaust the apparent surplus.",
            "good": false
          },
          {
            "label": "Borrow $400 for entertainment",
            "feedback": "Borrowing adds future obligations and possibly interest.",
            "good": false
          }
        ]
      },
      {
        "body": "A $250 repair arrives.",
        "visual": "car:Repair;coin:$250",
        "prompt": "What is a sensible response if you saved the buffer?",
        "choices": [
          {
            "label": "Use part of the buffer and rebuild it",
            "feedback": "The buffer serves its purpose; rebuilding restores resilience.",
            "good": true
          },
          {
            "label": "Ignore the repair bill forever",
            "feedback": "Avoiding a required payment may create further costs.",
            "good": false
          },
          {
            "label": "Spend the buffer twice",
            "feedback": "Money cannot cover multiple expenses simultaneously.",
            "good": false
          }
        ]
      }
    ]
  },
  {
    "course": "insurance",
    "step": 3,
    "title": "Choose a fictional insurance plan",
    "type": "decision",
    "rounds": [
      {
        "body": "Plan A costs $600/year with $1,000 deductible; plan B costs $900/year with $250 deductible. Assume a single covered $2,000 claim and no other costs.",
        "visual": "shield:Plan A;shield:Plan B",
        "prompt": "Which costs less in this claim scenario?",
        "choices": [
          {
            "label": "Plan B, $1,150 total",
            "feedback": "B costs $900 + $250 = $1,150, less than A's $1,600.",
            "good": true
          },
          {
            "label": "Plan A, $1,600 total",
            "feedback": "A is more expensive in this claim scenario.",
            "good": false
          },
          {
            "label": "They cost exactly the same",
            "feedback": "The totals differ by $450.",
            "good": false
          }
        ]
      },
      {
        "body": "Now assume there are no claims for the year.",
        "visual": "calendar:No claims;wallet:Premiums",
        "prompt": "Which costs less now?",
        "choices": [
          {
            "label": "Plan A, $600",
            "feedback": "Only premiums are paid in this simplified scenario.",
            "good": true
          },
          {
            "label": "Plan B, $900",
            "feedback": "B's higher premium costs more with no claims.",
            "good": false
          },
          {
            "label": "Both cost $1,150",
            "feedback": "No deductible applies when no claim occurs.",
            "good": false
          }
        ]
      }
    ]
  },
  {
    "course": "contracts",
    "step": 2,
    "title": "Read before you sign",
    "type": "decision",
    "rounds": [
      {
        "body": "A fictional subscription costs $20/month and has a $100 cancellation charge during the first year.",
        "visual": "receipt:Agreement;coin:$20/month",
        "prompt": "What should you check first?",
        "choices": [
          {
            "label": "Total commitment and cancellation conditions",
            "feedback": "You identify costs and exit terms before committing.",
            "good": true
          },
          {
            "label": "Only the largest heading",
            "feedback": "Headlines may omit important terms.",
            "good": false
          },
          {
            "label": "Only the first month's price",
            "feedback": "The first payment does not show the full commitment.",
            "good": false
          }
        ]
      },
      {
        "body": "You may need to cancel after three months.",
        "visual": "calendar:3 months;receipt:$100 fee",
        "prompt": "Under the stated terms, what is the cost?",
        "choices": [
          {
            "label": "$160 total",
            "feedback": "Three payments plus the fee equal $160.",
            "good": true
          },
          {
            "label": "$60 total",
            "feedback": "The fee is missing from that amount.",
            "good": false
          },
          {
            "label": "$100 total",
            "feedback": "The monthly payments are missing.",
            "good": false
          }
        ]
      }
    ]
  },
  {
    "course": "startup",
    "step": 1,
    "title": "Test a coffee-delivery idea",
    "type": "decision",
    "rounds": [
      {
        "body": "You think coworkers will pay for a morning coffee delivery service.",
        "visual": "cup:Coffee;person:Potential customer",
        "prompt": "How do you test demand before investing heavily?",
        "choices": [
          {
            "label": "Offer a small paid pilot",
            "feedback": "A paid pilot tests willingness to pay with limited investment.",
            "good": true
          },
          {
            "label": "Buy a fleet of delivery vehicles",
            "feedback": "Large fixed costs arrive before demand is established.",
            "good": false
          },
          {
            "label": "Ask only friends whether the logo looks nice",
            "feedback": "Logo opinions are not the same as buying behavior.",
            "good": false
          }
        ]
      },
      {
        "body": "Ten people say they like it but only two place paid orders.",
        "visual": "person:10 interested;coin:2 buyers",
        "prompt": "What do you learn?",
        "choices": [
          {
            "label": "Interest and actual demand can differ; investigate why",
            "feedback": "The pilot reveals a useful gap to investigate.",
            "good": true
          },
          {
            "label": "Ten people have bought subscriptions",
            "feedback": "Only two purchases occurred.",
            "good": false
          },
          {
            "label": "The pilot guarantees the business will fail",
            "feedback": "Small early data cannot guarantee failure.",
            "good": false
          }
        ]
      }
    ]
  },
  {
    "course": "priorities",
    "step": 2,
    "title": "Triage a busy morning",
    "type": "decision",
    "rounds": [
      {
        "body": "A report due today blocks a teammate. A minor cosmetic task and an optional meeting compete for time.",
        "visual": "clipboard:Report;clock:Deadline;chat:Meeting",
        "prompt": "What should you prioritize?",
        "choices": [
          {
            "label": "The time-sensitive report that blocks another person",
            "feedback": "You address a deadline and dependency first.",
            "good": true
          },
          {
            "label": "The easiest cosmetic task automatically",
            "feedback": "Ease alone is not the most relevant criterion.",
            "good": false
          },
          {
            "label": "All three simultaneously",
            "feedback": "Multitasking may add switching costs.",
            "good": false
          }
        ]
      },
      {
        "body": "A new urgent request arrives from your manager.",
        "visual": "chat:New request;calendar:Limited time",
        "prompt": "What helps resolve the conflict?",
        "choices": [
          {
            "label": "Clarify deadlines and communicate trade-offs",
            "feedback": "A shared priority decision reduces hidden conflicts.",
            "good": true
          },
          {
            "label": "Promise everything without checking capacity",
            "feedback": "Overcommitting can create missed expectations.",
            "good": false
          },
          {
            "label": "Silently abandon the report",
            "feedback": "The teammate remains blocked without warning.",
            "good": false
          }
        ]
      }
    ]
  },
  {
    "course": "food-safety",
    "step": 1,
    "title": "Prepare dinner safely",
    "type": "decision",
    "rounds": [
      {
        "body": "You are cutting raw chicken and vegetables for a salad.",
        "visual": "board:Raw poultry;plant:Salad",
        "prompt": "How should you handle the cutting board?",
        "choices": [
          {
            "label": "Use separate clean equipment or wash and sanitize before reuse",
            "feedback": "Separation and appropriate cleaning reduce cross-contamination.",
            "good": true
          },
          {
            "label": "Cut salad immediately on the poultry board",
            "feedback": "Raw poultry can transfer pathogens to ready-to-eat food.",
            "good": false
          },
          {
            "label": "Wipe the board on a towel only",
            "feedback": "A towel wipe is not reliable sanitation.",
            "good": false
          }
        ]
      },
      {
        "body": "You have cooked the chicken and need to check doneness.",
        "visual": "oven:Cooked chicken;thermo:Food thermometer",
        "prompt": "What is the reliable check?",
        "choices": [
          {
            "label": "Measure internal temperature with a food thermometer",
            "feedback": "A thermometer allows comparison with applicable safe-temperature guidance.",
            "good": true
          },
          {
            "label": "Judge only by color",
            "feedback": "Color alone does not reliably establish safety.",
            "good": false
          },
          {
            "label": "Taste a raw piece",
            "feedback": "Tasting raw poultry risks illness.",
            "good": false
          }
        ]
      }
    ]
  },
  {
    "course": "preparedness",
    "step": 1,
    "title": "A winter power outage",
    "type": "decision",
    "rounds": [
      {
        "body": "A fictional home loses power during cold weather. You have a portable fuel-burning outdoor generator.",
        "visual": "house:Cold home;engine:Generator",
        "prompt": "Where should it run?",
        "choices": [
          {
            "label": "Outdoors away from openings, following manufacturer and safety guidance",
            "feedback": "Outdoor placement away from openings helps prevent carbon monoxide entering the home.",
            "good": true
          },
          {
            "label": "In an attached garage with the door cracked",
            "feedback": "An open garage door does not make indoor generator use safe.",
            "good": false
          },
          {
            "label": "In the basement near a window",
            "feedback": "Combustion exhaust can cause fatal carbon monoxide exposure.",
            "good": false
          }
        ]
      },
      {
        "body": "A carbon monoxide alarm sounds indoors.",
        "visual": "warning:CO alarm;house:Home",
        "prompt": "What do you do?",
        "choices": [
          {
            "label": "Leave for fresh air and call emergency services from outside",
            "feedback": "Treat an alarm as a potential emergency and leave promptly.",
            "good": true
          },
          {
            "label": "Silence the alarm and stay",
            "feedback": "Carbon monoxide can be dangerous without obvious symptoms.",
            "good": false
          },
          {
            "label": "Search indoors for the leak before leaving",
            "feedback": "Searching can prolong exposure.",
            "good": false
          }
        ]
      }
    ]
  },
  {
    "course": "feedback-work",
    "step": 1,
    "title": "Turn vague feedback into action",
    "type": "decision",
    "rounds": [
      {
        "body": "A colleague says your project updates are confusing.",
        "visual": "chat:Vague feedback;clipboard:Project",
        "prompt": "What is your first useful response?",
        "choices": [
          {
            "label": "Ask for a specific example and desired outcome",
            "feedback": "Specific examples make feedback actionable.",
            "good": true
          },
          {
            "label": "Argue that all updates are perfect",
            "feedback": "Defensiveness may obscure useful information.",
            "good": false
          },
          {
            "label": "Assume they dislike you personally",
            "feedback": "The statement alone does not establish motive.",
            "good": false
          }
        ]
      },
      {
        "body": "The colleague wants risks and next steps at the top.",
        "visual": "clipboard:Risks;check:Next steps",
        "prompt": "How can you test the improvement?",
        "choices": [
          {
            "label": "Try the new format and ask if it helps",
            "feedback": "A focused change and follow-up test whether the issue improves.",
            "good": true
          },
          {
            "label": "Change every part of the project",
            "feedback": "Unrelated changes complicate evaluation.",
            "good": false
          },
          {
            "label": "Never ask for feedback again",
            "feedback": "Avoiding feedback prevents checking the result.",
            "good": false
          }
        ]
      }
    ]
  },
  {
    "course": "source-check",
    "step": 2,
    "title": "Investigate a viral claim",
    "type": "decision",
    "rounds": [
      {
        "body": "A post claims a fictional town banned all private cars, but cites no primary source.",
        "visual": "computer:Viral post;warning:Unverified",
        "prompt": "Where do you start?",
        "choices": [
          {
            "label": "Look for the original ordinance and independent reporting",
            "feedback": "Primary text and independent evidence can clarify scope.",
            "good": true
          },
          {
            "label": "Count the likes",
            "feedback": "Popularity does not establish accuracy.",
            "good": false
          },
          {
            "label": "Share because the image looks convincing",
            "feedback": "Images can be unrelated or misleading.",
            "good": false
          }
        ]
      },
      {
        "body": "The ordinance restricts cars only on one street on Sundays.",
        "visual": "map:One street;calendar:Sundays",
        "prompt": "What is the fair conclusion?",
        "choices": [
          {
            "label": "The broad claim exaggerates a limited restriction",
            "feedback": "The specific evidence supports a much narrower claim.",
            "good": true
          },
          {
            "label": "The town banned all cars",
            "feedback": "The source does not support a townwide ban.",
            "good": false
          },
          {
            "label": "Every local rule is fake",
            "feedback": "One misleading claim does not invalidate all rules.",
            "good": false
          }
        ]
      }
    ]
  },
  {
    "course": "leadership",
    "step": 2,
    "title": "Help a team deliver",
    "type": "decision",
    "rounds": [
      {
        "body": "A project is late because two teammates thought the other owned a task.",
        "visual": "person:Teammate A;person:Teammate B;clipboard:Unowned task",
        "prompt": "What is the constructive first action?",
        "choices": [
          {
            "label": "Clarify the owner, deliverable and deadline",
            "feedback": "Clear responsibility addresses the coordination problem.",
            "good": true
          },
          {
            "label": "Blame both people publicly",
            "feedback": "Blame may discourage disclosure without fixing ownership.",
            "good": false
          },
          {
            "label": "Add several unrelated meetings",
            "feedback": "More meetings do not automatically clarify ownership.",
            "good": false
          }
        ]
      },
      {
        "body": "A teammate privately identifies a technical risk.",
        "visual": "warning:Risk;chat:Private concern",
        "prompt": "How should you respond?",
        "choices": [
          {
            "label": "Invite details and plan mitigation without punishing disclosure",
            "feedback": "Early risk reporting supports planning and psychological safety.",
            "good": true
          },
          {
            "label": "Tell them to hide it until launch",
            "feedback": "Hiding risk can make consequences worse.",
            "good": false
          },
          {
            "label": "Treat reporting as evidence of incompetence",
            "feedback": "Punishing disclosure may discourage others from speaking.",
            "good": false
          }
        ]
      }
    ]
  },
  {
    "course": "job-interview",
    "step": 2,
    "title": "Answer with real evidence",
    "type": "decision",
    "rounds": [
      {
        "body": "An interviewer asks about resolving a difficult technical issue.",
        "visual": "person:Interviewer;computer:Technical issue",
        "prompt": "Which answer is strongest?",
        "choices": [
          {
            "label": "Describe a real situation, your actions and observed result",
            "feedback": "Concrete details give evidence of the skill.",
            "good": true
          },
          {
            "label": "Claim mastery of everything",
            "feedback": "Broad claims are difficult to evaluate.",
            "good": false
          },
          {
            "label": "Describe only what the team did without your role",
            "feedback": "The interviewer needs to understand your contribution.",
            "good": false
          }
        ]
      },
      {
        "body": "You do not know the exact numerical impact.",
        "visual": "chart:Unknown metric;clipboard:Outcome",
        "prompt": "What should you do?",
        "choices": [
          {
            "label": "Explain the observed outcome without inventing numbers",
            "feedback": "Honesty preserves credibility while still showing evidence.",
            "good": true
          },
          {
            "label": "Make up a percentage improvement",
            "feedback": "Invented metrics can misrepresent performance.",
            "good": false
          },
          {
            "label": "Claim there was no outcome",
            "feedback": "Qualitative outcomes can still be meaningful.",
            "good": false
          }
        ]
      }
    ]
  },
  {
    "course": "persuasion",
    "step": 3,
    "title": "Design an honest sales page",
    "type": "decision",
    "rounds": [
      {
        "body": "You are writing copy for a fictional product with a genuine limited-time discount.",
        "visual": "shop:Product;calendar:Real offer",
        "prompt": "Which wording respects informed choice?",
        "choices": [
          {
            "label": "Explain the actual discount, deadline and terms",
            "feedback": "Accurate terms let buyers assess the offer.",
            "good": true
          },
          {
            "label": "Use a fake resetting countdown",
            "feedback": "Fake scarcity manipulates rather than informs.",
            "good": false
          },
          {
            "label": "Hide required fees until checkout",
            "feedback": "Hidden fees obscure the real total cost.",
            "good": false
          }
        ]
      },
      {
        "body": "A customer asks whether the product meets their needs.",
        "visual": "person:Customer;clipboard:Requirements",
        "prompt": "What is the ethical response?",
        "choices": [
          {
            "label": "Explain strengths, limits and relevant alternatives",
            "feedback": "Transparent limitations support informed choice.",
            "good": true
          },
          {
            "label": "Promise it works for everyone",
            "feedback": "Universal promises may be misleading.",
            "good": false
          },
          {
            "label": "Avoid answering and demand immediate payment",
            "feedback": "Pressure does not answer the customer's question.",
            "good": false
          }
        ]
      }
    ]
  },
  {
    "course": "diplomacy",
    "step": 2,
    "title": "Share a river across borders",
    "type": "decision",
    "rounds": [
      {
        "body": "Two fictional countries share a river. One needs predictable irrigation and the other needs adequate downstream flow.",
        "visual": "map:Upstream;water:Shared river;map:Downstream",
        "prompt": "What helps reach a durable agreement?",
        "choices": [
          {
            "label": "Share water data and identify overlapping interests",
            "feedback": "Shared evidence helps identify feasible agreements.",
            "good": true
          },
          {
            "label": "Refuse to disclose any relevant information",
            "feedback": "Opacity can undermine trust and planning.",
            "good": false
          },
          {
            "label": "Assume only one country can benefit",
            "feedback": "Some allocations and conservation measures can benefit both.",
            "good": false
          }
        ]
      },
      {
        "body": "Rainfall varies year to year.",
        "visual": "cloud:Variable rain;water:Flow",
        "prompt": "What should an agreement include?",
        "choices": [
          {
            "label": "Monitoring, drought rules and a dispute process",
            "feedback": "Contingencies and monitoring improve adaptability.",
            "good": true
          },
          {
            "label": "A fixed promise ignoring all future conditions",
            "feedback": "A fixed promise may become infeasible in drought.",
            "good": false
          },
          {
            "label": "No way to verify compliance",
            "feedback": "Verification supports implementation.",
            "good": false
          }
        ]
      }
    ]
  },
  {
    "course": "kidneys",
    "step": 2,
    "title": "Explore a nephron",
    "type": "diagram",
    "parts": [
      {
        "icon": "filter",
        "label": "Glomerulus",
        "body": "Blood pressure drives filtration of water and small solutes"
      },
      {
        "icon": " most cells and large proteins remain in blood."
      },
      {
        "icon": "pipe",
        "label": "Tubule",
        "body": "Selective reabsorption returns useful substances and much water to the blood."
      },
      {
        "icon": "drop",
        "label": "Collecting duct",
        "body": "Regulated water handling contributes to the final urine concentration."
      },
      {
        "icon": "water",
        "label": "Urine",
        "body": "Remaining fluid carries wastes and excess substances away."
      }
    ],
    "prompt": "Which part begins filtration?",
    "answer": "Glomerulus"
  },
  {
    "course": "atoms",
    "step": 0,
    "title": "Inside an atom",
    "type": "diagram",
    "parts": [
      {
        "icon": "dot",
        "label": "Proton",
        "body": "A positive particle in the nucleus"
      },
      {
        "icon": " proton count defines an element."
      },
      {
        "icon": "dot",
        "label": "Neutron",
        "body": "A neutral particle in the nucleus"
      },
      {
        "icon": " isotopes differ in neutron count."
      },
      {
        "icon": "orbit",
        "label": "Electron",
        "body": "A negatively charged particle described by quantum states around the nucleus."
      },
      {
        "icon": "atom",
        "label": "Nucleus",
        "body": "Contains protons and usually neutrons"
      },
      {
        "icon": " holds nearly all atomic mass."
      }
    ],
    "prompt": "What defines the element?",
    "answer": "Proton"
  },
  {
    "course": "architecture",
    "step": 1,
    "title": "Trace the weight of a building",
    "type": "diagram",
    "parts": [
      {
        "icon": "house",
        "label": "Roof",
        "body": "Collects loads such as its own weight and snow."
      },
      {
        "icon": "beam",
        "label": "Beam",
        "body": "Spans between supports and transfers loads."
      },
      {
        "icon": "tower",
        "label": "Column",
        "body": "Carries forces down toward the foundation."
      },
      {
        "icon": "soil",
        "label": "Foundation",
        "body": "Transfers loads to supporting ground."
      }
    ],
    "prompt": "Which part transfers loads into the ground?",
    "answer": "Foundation"
  },
  {
    "course": "hvac",
    "step": 3,
    "title": "Explore a heat pump loop",
    "type": "diagram",
    "parts": [
      {
        "icon": "snow",
        "label": "Evaporator",
        "body": "Refrigerant absorbs heat while evaporating at low pressure."
      },
      {
        "icon": "engine",
        "label": "Compressor",
        "body": "Work raises the refrigerant pressure and temperature."
      },
      {
        "icon": "heat",
        "label": "Condenser",
        "body": "Refrigerant releases heat and condenses."
      },
      {
        "icon": "valve",
        "label": "Expansion device",
        "body": "Pressure drops before the refrigerant returns to the evaporator."
      }
    ],
    "prompt": "Which part adds mechanical work?",
    "answer": "Compressor"
  },
  {
    "course": "operating-systems",
    "step": 1,
    "title": "Inside a busy computer",
    "type": "diagram",
    "parts": [
      {
        "icon": "computer",
        "label": "Process",
        "body": "A running program with execution state and resources."
      },
      {
        "icon": "clock",
        "label": "Scheduler",
        "body": "Chooses which ready tasks receive processor time."
      },
      {
        "icon": "chip",
        "label": "Memory manager",
        "body": "Manages memory allocation and address spaces."
      },
      {
        "icon": "folder",
        "label": "File system",
        "body": "Organizes persistent data and access to files."
      }
    ],
    "prompt": "Which part chooses which task runs next?",
    "answer": "Scheduler"
  },
  {
    "course": "jet-engines",
    "step": 2,
    "title": "Engine exploration",
    "type": "diagram",
    "parts": [
      {
        "icon": "engine",
        "label": "Intake",
        "body": "Guides incoming air into the engine."
      },
      {
        "icon": "engine",
        "label": "Compressor",
        "body": "Raises air pressure using rotating stages."
      },
      {
        "icon": "flame",
        "label": "Combustor",
        "body": "Adds energy by burning fuel in compressed air."
      },
      {
        "icon": "engine",
        "label": "Turbine",
        "body": "Extracts energy to drive machinery such as the compressor."
      },
      {
        "icon": "arrow",
        "label": "Exhaust",
        "body": "Accelerates flow and contributes to thrust."
      }
    ],
    "prompt": "Which part adds energy through combustion?",
    "answer": "Combustor"
  },
  {
    "course": "soil",
    "step": 2,
    "title": "Explore a handful of soil",
    "type": "diagram",
    "parts": [
      {
        "icon": "soil",
        "label": "Mineral particles",
        "body": "Sand, silt and clay influence texture and water behavior."
      },
      {
        "icon": "drop",
        "label": "Water and air",
        "body": "Pore spaces hold varying amounts of water and air."
      },
      {
        "icon": "leaf",
        "label": "Organic matter",
        "body": "Decomposing material contributes to soil properties."
      },
      {
        "icon": "microbe",
        "label": "Living organisms",
        "body": "Organisms transform nutrients and influence soil structure."
      }
    ],
    "prompt": "Which component is directly involved in decomposition?",
    "answer": "Living organisms"
  },
  {
    "course": "hurricanes",
    "step": 2,
    "title": "Explore a tropical cyclone",
    "type": "diagram",
    "parts": [
      {
        "icon": "orbit",
        "label": "Eye",
        "body": "A relatively calm central region in many mature tropical cyclones."
      },
      {
        "icon": "cloud",
        "label": "Eyewall",
        "body": "Often contains the strongest winds and intense convection."
      },
      {
        "icon": "cloud",
        "label": "Rainbands",
        "body": "Spiral bands can bring heavy rain and strong winds far from the center."
      },
      {
        "icon": "water",
        "label": "Storm surge",
        "body": "Wind and pressure effects can raise coastal water levels dangerously."
      }
    ],
    "prompt": "Where are the strongest winds often found?",
    "answer": "Eyewall"
  },
  {
    "course": "balance-sheet",
    "step": 2,
    "title": "Inspect a shop's balance sheet",
    "type": "diagram",
    "parts": [
      {
        "icon": "coin",
        "label": "Cash $500",
        "body": "An asset owned by the business."
      },
      {
        "icon": "box",
        "label": "Inventory $1,000",
        "body": "Another asset, assuming this is its accounting value."
      },
      {
        "icon": "receipt",
        "label": "Loan $900",
        "body": "A liability owed to a lender."
      },
      {
        "icon": "chart",
        "label": "Equity $600",
        "body": "Assets of $1,500 minus liabilities of $900."
      }
    ],
    "prompt": "Which item represents the owners' residual interest?",
    "answer": "Equity $600"
  },
  {
    "course": "photographic-light",
    "step": 1,
    "title": "Inspect a portrait lighting setup",
    "type": "diagram",
    "parts": [
      {
        "icon": "sun",
        "label": "Key light",
        "body": "Provides the primary direction and shape of illumination."
      },
      {
        "icon": "mirror",
        "label": "Fill light",
        "body": "Reduces some shadows without necessarily eliminating them."
      },
      {
        "icon": "person",
        "label": "Subject",
        "body": "Orientation affects how the light falls across features."
      },
      {
        "icon": "camera",
        "label": "Camera",
        "body": "Records the result from its chosen position."
      }
    ],
    "prompt": "Which element can reduce shadow contrast?",
    "answer": "Fill light"
  },
  {
    "course": "correlation",
    "step": 1,
    "title": "Ice cream and sunburn",
    "type": "predict",
    "body": "A fictional beach has more ice-cream sales and more sunburns on hotter days.",
    "visual": "sun:Hot day;cup:Ice cream;person:Sunburn",
    "reveal": "sun:Shared cause;arrow:Two outcomes",
    "question": {
      "q": "Does ice cream necessarily cause sunburn?",
      "options": [
        "No, hotter weather may influence both",
        "Yes, correlation proves it",
        "Yes, if both increase"
      ],
      "correct": 0,
      "why": "A shared cause can produce correlation without one variable causing the other."
    }
  },
  {
    "course": "base-rates",
    "step": 2,
    "title": "A rare result",
    "type": "predict",
    "body": "In a fictional group of 1,000, ten have a condition. A test detects all ten but also flags 90 others.",
    "visual": "person:1,000 people;check:100 positives",
    "reveal": "check:10 true;warning:90 false",
    "question": {
      "q": "Of the 100 positives, how many have the condition?",
      "options": [
        "10",
        "90",
        "100"
      ],
      "correct": 0,
      "why": "Ten true positives out of 100 positive results equal 10%; base rates matter."
    }
  },
  {
    "course": "diversification",
    "step": 1,
    "title": "Two baskets of investments",
    "type": "predict",
    "body": "A fictional portfolio holds ten companies in one industry; another holds companies across many industries.",
    "visual": "basket:One industry;basket:Several industries",
    "reveal": "chart:Different exposures;shield:Reduced concentration",
    "question": {
      "q": "Which generally reduces industry concentration risk?",
      "options": [
        "The diversified portfolio",
        "The single-industry portfolio",
        "Neither can change concentration risk"
      ],
      "correct": 0,
      "why": "Diversification can reduce concentration risk, though market-wide risk remains."
    }
  },
  {
    "course": "sleep",
    "step": 1,
    "title": "Does sleep stay the same all night?",
    "type": "predict",
    "body": "A person sleeps through several hours of normal sleep, moving between stages.",
    "visual": "bed:Sleeping person;clock:Hours pass",
    "reveal": "bed:Non-REM;bed:REM;clock:Cycles",
    "question": {
      "q": "Does the person stay in one sleep stage the entire night?",
      "options": [
        "No, stages recur and change",
        "Yes, deep sleep only",
        "Yes, REM only"
      ],
      "correct": 0,
      "why": "Sleep typically cycles through non-REM and REM stages, with patterns changing through the night."
    }
  },
  {
    "course": "climate",
    "step": 1,
    "title": "A planet's energy balance",
    "type": "predict",
    "body": "In an illustrative energy-budget model, absorbed solar energy exceeds outgoing energy.",
    "visual": "sun:Incoming energy;globe:Earth;arrow:Outgoing energy",
    "reveal": "globe:Energy accumulation;heat:Warming",
    "question": {
      "q": "What happens while the imbalance persists?",
      "options": [
        "The Earth system gains energy",
        "The Earth system loses energy",
        "Energy stays exactly constant"
      ],
      "correct": 0,
      "why": "Net incoming energy increases stored energy until the balance changes."
    }
  },
  {
    "course": "microbes",
    "step": 3,
    "title": "A cold and antibiotics",
    "type": "predict",
    "body": "A person has an uncomplicated viral cold. Antibiotics target susceptible bacteria, not the cold virus.",
    "visual": "microbe:Virus;pill:Antibiotic",
    "reveal": "microbe:Virus unaffected;shield:Appropriate care",
    "question": {
      "q": "Will antibiotics directly treat the cold virus?",
      "options": [
        "No",
        "Yes, all microbes respond",
        "Yes, if taken at double dose"
      ],
      "correct": 0,
      "why": "Antibiotics do not treat viral infections; unnecessary use can cause harm and resistance."
    }
  },
  {
    "course": "glass",
    "step": 2,
    "title": "Why a scratch matters",
    "type": "predict",
    "body": "Two identical glass samples are under tension, one with a surface flaw.",
    "visual": "glass:Smooth glass;glass:Flawed glass",
    "reveal": "glass:Crack grows;warning:Stress concentration",
    "question": {
      "q": "Which may fracture at lower applied stress?",
      "options": [
        "The sample with a significant flaw",
        "The smooth one necessarily",
        "Both always fracture at exactly the same stress"
      ],
      "correct": 0,
      "why": "Flaws can concentrate stress and facilitate crack growth."
    }
  },
  {
    "course": "railways",
    "step": 1,
    "title": "Steel wheels and rails",
    "type": "predict",
    "body": "A train travels on firm steel rails; a similar wheeled vehicle travels on a deformable surface.",
    "visual": "train:Steel rail;car:Deformable surface",
    "reveal": "train:Low deformation;arrow:Reduced rolling loss",
    "question": {
      "q": "Why can the rail vehicle have low rolling resistance?",
      "options": [
        "Less deformation at the wheel and track interface",
        "There is no friction anywhere",
        "Gravity no longer acts"
      ],
      "correct": 0,
      "why": "Low deformation can reduce rolling energy loss, though traction and other losses remain."
    }
  },
  {
    "course": "banks",
    "step": 2,
    "title": "A bank's cash and loans",
    "type": "predict",
    "body": "A bank has long-term loans and customers request many withdrawals today.",
    "visual": "bank:Bank;wallet:Withdrawals",
    "reveal": "clock:Timing mismatch;wallet:Cash need",
    "question": {
      "q": "Can a bank with valuable assets still face a liquidity problem?",
      "options": [
        "Yes, assets may not be immediately convertible to cash",
        "No, assets and available cash are identical",
        "No, loans can always be sold instantly at face value"
      ],
      "correct": 0,
      "why": "Liquidity concerns the ability to meet near-term obligations, not simply asset value."
    }
  },
  {
    "course": "maillard",
    "step": 1,
    "title": "Browning a piece of toast",
    "type": "predict",
    "body": "Bread is heated and its surface becomes golden as moisture falls and chemical reactions occur.",
    "visual": "bread:Toast;heat:Heat",
    "reveal": "bread:Brown surface;flame:Heat",
    "question": {
      "q": "Which reaction involves reducing sugars and amino compounds?",
      "options": [
        "Maillard reaction",
        "Freezing",
        "Only caramelization"
      ],
      "correct": 0,
      "why": "The Maillard reaction involves amino compounds and reducing sugars; caramelization is a different pathway."
    }
  }
];
