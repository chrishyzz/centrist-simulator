// CHAPTER 1: ELECTION - all the words.
//
//   tileDescriptions  what you see when you walk into scenery. The names
//                     match "desc" in maps/chapter1-map.js.
//   narrator          the narrator's lines and when they appear.
//   voters            the people in the park. "at" is the x,y of their letter
//                     on the map (v, or J for the journalist) - change it to
//                     swap who stands where.
//   ambientVoters     spare "v"s on the map with no script yet.
//   donors            the people at the dinner (the "D"s), same idea.
//
// Each question has two options. "type" says what kind of answer it is:
//   meaningful | platitude | promiseEverything
// "say" is what you say, "reply" is the answer back, "alert" is the system
// alert. "aside" is the bracketed stage direction.

var CHAPTER1_CONTENT = {
  "tileDescriptions": {
    "pond": {
      "default": "Pond: Murky park water. A few ducks look at you with the cold indifference of swing voters.",
      "alternative": "Pond: Still water reflecting the sky. You dream of joining the blissfully ignorant duck."
    },
    "plants": {
      "default": "Plants: Carefully trimmed to look natural without actually being wild.",
      "alternative": "Plants: Municipal shrubbery. Funded by a pilot scheme that lost its funding."
    },
    "trees": {
      "default": "Trees: Mature park trees. You resist the urge to climb.",
      "alternative": "Trees: Leafy canopy. You kick a leaf. You imagine it is your opponent."
    },
    "canapeTable": {
      "default": "Canape Table: A silver tray of tiny, expensive snacks. Essential campaign infrastructure.",
      "empty": "Canape Table: Crumbs and napkins. The refreshments have been thoroughly consulted."
    },
    "tables": {
      "default": "Tables: Folding event tables. Draped in cloth to hide the cheap plastic underneath.",
      "alternative": "Tables: Reception tables. Waiting for someone to put something concrete on them."
    }
  },
  "narrator": {
    "enterPark": "Welcome to the park. Our polling said the people don't know you. Time to press the flesh! Shake hands, but for the love of God, don't make any firm commitments. We have a fundraising dinner to get to next.",
    "parkOver2Minutes": "You've been lingering here for too long now. Nice that you like the public, but don't get used to it. Politics should be about more important things.",
    "allVotersSpokenTo": "Umm, where the fuck are you? The fundraising dinner is calling – real money lives behind closed doors, dummy.",
    "canape1": "Okay, good to refuel – but back to work. Donors don't write cheques for empty plates.",
    "canape2": "Stop stuffing your mouth. You're running for office, not competing in a catering endurance test.",
    "canape3plus": "STOP, YOU IDIOT. PEOPLE ARE LOOKING.",
    "last30Seconds": "We gotta get going. Finish up quick before democracy – or your press team – catches up to you."
  },
  "voters": [
    {
      "id": "commuter",
      "name": "The Commuter",
      "topic": "Rail & Transport",
      "at": {
        "x": 36,
        "y": 7
      },
      "questions": [
        {
          "prompt": "My train to work has been cancelled three times this week, and fares just went up again. What are you going to do about it?",
          "options": [
            {
              "type": "meaningful",
              "say": "We’ll bring the franchise back into public ownership and cap commuter fares immediately.",
              "reply": "Finally, someone talking sense. You’ve got my vote.",
              "alert": "WARNING: Populist rhetoric detected. Market Confidence -5. Party Whips displeased."
            },
            {
              "type": "platitude",
              "say": "Transport is the lifeblood of our economy. That's why I have pledged... a commission... holistic, cross-party dialogue...",
              "aside": "as words leave your mouth, the life drifts from their eyes",
              "reply": "Wow, you sure are clever!",
              "alert": "EXCELLENT: Masterful triangulation. Fiscal Credibility +4."
            }
          ]
        },
        {
          "prompt": "What about the bus routes to the outer estates? They cut the night service last year.",
          "options": [
            {
              "type": "meaningful",
              "say": "We’ll fund a municipal bus network with guaranteed hourly night routes.",
              "reply": "That would genuinely save my job. Thank you.",
              "alert": "CRITICAL: Uncosted compassion! Donor Confidence -6."
            },
            {
              "type": "platitude",
              "say": "I remember when my mother worked the late shift. As a bank CEO, she often attended late night dinners at the best restaurants in town...",
              "aside": "you can feel your relatable anecdote is really cutting through",
              "reply": "(Sighs and walks away)",
              "alert": "TEXTBOOK CENTRISM: Zero commitments made. Media Relations +3. Opinion with restaurant owners and bank CEOs +53%."
            }
          ]
        }
      ]
    },
    {
      "id": "nurse",
      "name": "The Junior Nurse",
      "topic": "Healthcare",
      "at": {
        "x": 5,
        "y": 8
      },
      "questions": [
        {
          "prompt": "Our ward is chronically understaffed and half the nurses are burning out. Will you raise pay to attract more staff?",
          "options": [
            {
              "type": "meaningful",
              "say": "Yes – we clapped for nurses as heroes during the pandemic. It's time to put action behind that gesture.",
              "reply": "If you actually do that, the whole hospital will back you.",
              "alert": "ALARM: Risky precedent set. Treasury Orthodoxy Index plummeting. Healthcare workforce hope and expectation reaching DANGEROUS levels. -39732720290 critical variable assessment levels."
            },
            {
              "type": "platitude",
              "say": "Our nurses are heroes. We must work together to build a resilient healthcare framework for the future.",
              "reply": "[Is pushed aside by your comms director]",
              "alert": "WELL PLAYED: Empathy projected without budgetary impact. Party Confidence +19. Pharma donations incoming."
            }
          ]
        }
      ]
    },
    {
      "id": "tenant",
      "name": "The Tenant",
      "topic": "Housing",
      "at": {
        "x": 1,
        "y": 18
      },
      "questions": [
        {
          "prompt": "My landlord just raised my rent by 20% and I can't afford it, I'm afraid I'll be evicted and end up on the streets. Will you back rent controls?",
          "options": [
            {
              "type": "meaningful",
              "say": "Yes. Rent is a tax on ordinary working people, with knock effects for the whole of society. No-fault evictions are an injustice we will end.",
              "reply": "That means everything.",
              "alert": "PANIC: Property portfolio donors are hyperventilating! Reports of landlord militia groups are forming."
            },
            {
              "type": "platitude",
              "say": "Everyone deserves a safe home. And I want to work with house-providers to improve your options.",
              "reply": "I really don't want to be homeless.",
              "alert": "IMPRESSIVE: Pivoting from 'landlord' to 'housing provider' earns credibility +42."
            }
          ]
        }
      ]
    },
    {
      "id": "shopkeeper",
      "name": "The Small Shopkeeper",
      "topic": "High Street & Energy",
      "at": {
        "x": 22,
        "y": 6
      },
      "questions": [
        {
          "prompt": "My energy bill tripled this year, and business rates are killing the high street. How do I stay open?",
          "options": [
            {
              "type": "meaningful",
              "say": "You won't need to worry about this anymore, friend. I am going to nationalise everything.",
              "reply": "Finally! That's a big weight off my mind!",
              "alert": "WARNING: Candidate is becoming dangerously based. Market Confidence -7000."
            },
            {
              "type": "platitude",
              "say": "Small businesses are the backbone of this country. When I interned at my uncle's hedge fund, I bought and stripped apart dozens of small businesses...",
              "aside": "A cute dog walks by, distracting the voter from your charming anecdote",
              "reply": "Good boy.",
              "alert": "VIRAL CLIP WITH CUTE DOG boosts favorability with pet owners across demographics. Except lizard owners. Those people are weird."
            }
          ]
        }
      ]
    },
    {
      "id": "parent",
      "name": "The Parent",
      "topic": "Childcare & Schools",
      "at": {
        "x": 17,
        "y": 13
      },
      "questions": [
        {
          "prompt": "Nursery costs more than my mortgage, and my kid’s school roof has buckets catching rainwater. What’s the plan?",
          "options": [
            {
              "type": "meaningful",
              "say": "Universal funded childcare from nine months old and an emergency capital fund to fix school buildings.",
              "reply": "That would change our lives. Seriously.",
              "alert": "SYSTEM ERROR: Helping parents increase supply of 'next generation', increasing burden on local bus routes. Transport Department officials furious +1500%."
            },
            {
              "type": "platitude",
              "say": "I see promising developments with AI as an exciting solution to the problem of so-called 'schools'...",
              "reply": "So the buckets stay until the economy grows?",
              "alert": "BRAVO: Tech futurist persona invoked. Clip circulating with +3% favourability on male-centered podcasts."
            }
          ]
        }
      ]
    },
    {
      "id": "journalist",
      "name": "The Journalist",
      "topic": "Media",
      "at": {
        "x": 23,
        "y": 19
      },
      "questions": [
        {
          "prompt": "You've spent twenty minutes talking about 'tough choices' and 'moving forward.' Name one concrete policy you will actually implement in your first hundred days.",
          "options": [
            {
              "type": "platitude",
              "say": "Our policy is clear: delivering a sensible, long-term plan that puts working families first while maintaining economic stability.",
              "reply": "That’s not a policy, that’s a bumper sticker. Readers will see straight through this.",
              "alert": "GAFFE: Cornered by basic follow-up! Consider banning the media? Media Relations -60. Public Approval -14."
            },
            {
              "type": "meaningful",
              "say": "Day one: we cap commuter rail fares and restore public sector pay.",
              "reply": "And yet you're also promising to cut taxes, not increase borrowing...",
              "alert": "WARNING: Previous statements being unfairly weaponised promises made in the moment. Scrutiny tanking relationships with the Treasury."
            }
          ]
        },
        {
          "prompt": "Your campaign is taking substantial donations from private healthcare and property firms. How can voters trust you won't serve their interests?",
          "options": [
            {
              "type": "platitude",
              "say": "We welcome support from all sectors of society who share our vision for a modern, dynamic economy.",
              "reply": "So they're buying access, and you're calling it 'vision.' Good headline, thanks.",
              "alert": "DISASTER: Evasion backfired! Public Approval -25."
            },
            {
              "type": "meaningful",
              "say": "I am not accepting corporation donations and will ban corporate lobbyists in the first 30 days.",
              "reply": "Bold pledge. But your press office announced you're attending a fundraising dinner right after this meet-and-greet?",
              "alert": "CATASTROPHE: Hostile media environment undermining trust between public servants and entrepreneurs. Risk to democratic way of life +43."
            }
          ]
        }
      ]
    }
  ],
  "ambientVoters": [
    {
      "x": 10,
      "y": 8
    },
    {
      "x": 8,
      "y": 12
    },
    {
      "x": 3,
      "y": 15
    }
  ],
  "donors": [
    {
      "id": "developer",
      "name": "The Property Developer",
      "at": {
        "x": 50,
        "y": 12
      },
      "questions": [
        {
          "prompt": "This talk of social housing requirements... we're worried about the cost implications.",
          "options": [
            {
              "type": "platitude",
              "say": "We value constructive dialogue with developers to ensure balanced, community-led housing outcomes.",
              "reply": "Hmm. 'Community-led' sounds awfully slow. I’ll hold off on writing a cheque.",
              "alert": "MISSED OPPORTUNITY: Donor unconvinced of your flexibility. Funds +£3."
            },
            {
              "type": "promiseEverything",
              "say": "Consider the red tape shredded. Affordable housing quotas will be entirely 'voluntary' under our watch.",
              "reply": "Music to my ears. Put me down for £100,000. And buds will throw in the same.",
              "alert": "EXCELLENT: Public assets leveraged for campaign cash! Funds +£1,000,000. Donor Confidence +43."
            }
          ]
        }
      ]
    },
    {
      "id": "healthcare",
      "name": "The Private Healthcare Executive",
      "at": {
        "x": 58,
        "y": 17
      },
      "questions": [
        {
          "prompt": "Patient outcomes....",
          "aside": "You tune him out. The canapes look better than last time. Much better.",
          "options": [
            {
              "type": "platitude",
              "say": "We believe in utilising every tool in the box...",
              "reply": "Thank you for your time. Let's talk again soon.",
              "alert": "LUKEWARM: Donor requires firmer enthusiasm for privatisation. Funds +£1,000."
            },
            {
              "type": "promiseEverything",
              "say": "I'm very excited about expanding private contracts. Polls well.",
              "reply": "Now that’s bold leadership! My board will max out our donation today.",
              "alert": "BRILLIANT: NHS budget pre-allocated to friends! Funds £1,000,000. Potential post-politics career aspects increase +15%."
            }
          ]
        }
      ]
    },
    {
      "id": "tech",
      "name": "The Tech & AI Lobbyist",
      "at": {
        "x": 58,
        "y": 20
      },
      "questions": [
        {
          "prompt": "We can be an AI superpower, so long as heavy-handed data privacy or copyright laws don't strangle innovation in the crib.",
          "options": [
            {
              "type": "platitude",
              "say": "We want to harness the power of technology while ensuring robust ethical guardrails for all citizens.",
              "reply": "'Guardrails' is a dirty word in Silicon Valley. We’ll back your opponent instead.",
              "alert": "BLUNDER: 'Ethics' mentioned in front of a tech lobbyist. Donor Confidence -52."
            },
            {
              "type": "promiseEverything",
              "say": "Grok, give me an epic roast of China.",
              "aside": "Quietly to your phone",
              "reply": "Epic!",
              "replyAside": "Noticeably concerned about your clear AI psychosis",
              "alert": "VISIONARY: Citizen privacy monetised! Funds +£15,000,000. Support by bots online boosts your campaign message +52."
            }
          ]
        }
      ]
    }
  ]
};
