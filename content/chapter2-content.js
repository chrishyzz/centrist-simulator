
/* CHAPTER 2: PROJECT ATLAS CONTENT */

var CHAPTER2_CONTENT = {
  title: "OFFICE 001: PROJECT ATLAS",
  seconds: 300,

  people: [
    {
      name: "The Project Lead",
      glyph: "P",
      x: 40, y: 14,
      prompt: "We’re behind on the Q2 deadline due to unexpected infrastructure issues. The team is burned out. Do we mandate overtime to catch up, risking attrition, or renegotiate the timeline with the client, risking our reputation?",
      options: [
        {
          say: "Mandate overtime. Meeting the deadline is critical for our partnership and bonus structure.",
          reply: "Understood. I’ll tell them it’s an opportunity.",
          alert: "DEADLINE PROTECTED: Progress up. Several people have started updating their CVs.",
          fx: { staff: -4, happiness: -18, progress: 20 }
        },
        {
          say: "Renegotiate timeline. Prioritise team well-being and sustainable productivity over short-term goals.",
          reply: "Bold. The client will call that a risk. The team will call it Tuesday.",
          alert: "SUSTAINABILITY DETECTED: Morale up. Bonus structure alarmed.",
          fx: { staff: 3, happiness: 16, progress: 6 }
        }
      ]
    },

    {
      name: "The Receptionist",
      glyph: "R",
      x: 23, y: 23,
      prompt: "Visitors must be badged. The badge printer has been in review for six weeks. Shall I log that as an issue or a feature?",
      options: [
        {
          say: "An issue. Get it fixed this week.",
          reply: "Fixed? Sir, it has a steering group.",
          alert: "ISSUE LOGGED: Small win for common sense. Steering group offended.",
          fx: { staff: 1, happiness: 4, progress: 4 }
        },
        {
          say: "A feature. Visitors love anticipation.",
          reply: "I’ll add it to the onboarding deck.",
          alert: "INNOVATION: Delay rebranded as experience. Progress +3.",
          fx: { staff: 0, happiness: -3, progress: 3 }
        }
      ]
    },

    {
      name: "The Developer",
      glyph: "d",
      x: 7, y: 12,
      prompt: "I’ve been on the same ticket since spring. Can I work on something that actually matters?",
      options: [
        {
          say: "Yes. Take the week and fix the infrastructure properly.",
          reply: "Seriously? I’ll order the good biscuits.",
          alert: "EMPOWERMENT: Unplanned competence. Roadmap confidence wobbling.",
          fx: { staff: 2, happiness: 10, progress: 9 }
        },
        {
          say: "Close it and open a follow-up ticket.",
          reply: "That’s... technically a different number.",
          alert: "VELOCITY: One ticket closed, one ticket opened. Burn-down chart improves.",
          fx: { staff: -1, happiness: -6, progress: 5 }
        }
      ]
    },

    {
      name: "The Barista",
      glyph: "b",
      x: 47, y: 21,
      prompt: "Flat white? We’re out of oat, almond and regular milk.",
      options: [
        {
          say: "Black, like the Q2 forecast.",
          reply: "Dark. I respect that.",
          alert: "MORALE: Small joy found in the supply chain.",
          fx: { staff: 0, happiness: 5, progress: 0 }
        },
        {
          say: "Form a working group on milk.",
          reply: "I’ll circulate a Doodle.",
          alert: "PROCESS: Milk now has a stakeholder map.",
          fx: { staff: 0, happiness: -4, progress: 4 }
        }
      ]
    },

    {
      name: "The Huddle Regular",
      glyph: "h",
      x: 52, y: 17,
      prompt: "We’ve been in this huddle since nine. Is it a meeting, or a lifestyle?",
      options: [
        {
          say: "End it. Go and do the work.",
          reply: "Wait, we can just... leave?",
          alert: "DISRUPTION: Meeting ended unilaterally. Calendar in shock.",
          fx: { staff: 1, happiness: 9, progress: 5 }
        },
        {
          say: "Book a follow-up huddle to discuss this.",
          reply: "Great. I’ll block out Thursday.",
          alert: "ALIGNMENT: Huddle scheduled. Nothing else is.",
          fx: { staff: 0, happiness: -6, progress: 2 }
        }
      ]
    },

    {
      name: "The CEO",
      glyph: "E",
      x: 28, y: 5,
      prompt: "Atlas is a partnership, not a project. What am I hearing from the floor?",
      options: [
        {
          say: "The team is stretched, but the plan is honest and fixable.",
          reply: "Honest. Hm. Put that in a one-pager and we’ll see.",
          alert: "CANDOUR: Dangerous. Executive eyebrow raised by 3 millimetres.",
          fx: { staff: 3, happiness: 8, progress: 8 }
        },
        {
          say: "Everything is on track. Fully aligned. Very exciting.",
          reply: "Wonderful. Let’s keep that energy until the audit.",
          alert: "EXCELLENT: Zero information transferred. Executive confidence +40.",
          fx: { staff: 0, happiness: -5, progress: 0 }
        }
      ]
    }
  ]
};
