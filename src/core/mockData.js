import moment from 'moment';
import shuffle from 'lodash.shuffle';

const MockData = (displayAs) => {
	let data =  [
		{
			id: randomString(10),
			active: Math.random() > 0.66 ? true : false,
			question: 'Puroland is happening only in japan ???',
			intent: 'CP.Access.Location',
			entities: ['CP-Country','CP-Location'],
			children: [],
			answer: {
				default: '',
				scenarioId: '',
				scenarioName: '',
				custom: []
			},
			created: {
				_seconds: moment(RandomDate()).unix()
			},
			modified: {
				_seconds: moment(RandomDate()).unix()
			}
		},
		{
			id: randomString(10),
			active: Math.random() > 0.66 ? true : false,
			question: 'Sanrio Puroland address',
			intent: 'CP.Access.Address',
			entities: ['CP-Location'],
			children: [],
			answer: {
				default: '',
				scenarioId: '',
				scenarioName: '',
				custom: ['Sanrio Puroland Address: 1-31 Ochiai, Tama, Tokyo']
			},
			created: {
				_seconds: moment(RandomDate()).unix()
			},
			modified: {
				_seconds: moment(RandomDate()).unix()
			}
		},
		{
			id: randomString(10),
			active: Math.random() > 0.66 ? true : false,
			question: 'Where can I find pictures taken at Lady Kitty House. Photo taken last spring of 2019',
			intent: 'CP.Attractions.Ephoto',
			entities: ['CP-Attractions'],
			children: [
				{
					id: randomString(10),
					active: Math.random() > 0.66 ? true : false,
					question: 'Where can I find pictures taken at Lady Kitty House. Photo taken last spring of 2019',
					intent: 'CP.Attractions.Ephoto',
					entities: ['CP-Attractions'],
					children: [],
					answer: [],
					created: {
						_seconds: moment(RandomDate()).unix()
					},
					modified: {
						_seconds: moment(RandomDate()).unix()
					}
				},
				{
					id: randomString(10),
					active: Math.random() > 0.66 ? true : false,
					question: 'We did not receive the download password for lady kitty house photo',
					intent: 'CP.Attractions.Ephoto',
					entities: ['CP-Attractions'],
					children: [],
					answer: [],
					created: {
						_seconds: moment(RandomDate()).unix()
					},
					modified: {
						_seconds: moment(RandomDate()).unix()
					}
				},
				{
					id: randomString(10),
					active: Math.random() > 0.66 ? true : false,
					question: 'how can I see thru online the picture of us in helly kitty house?',
					intent: 'CP.Attractions.Ephoto',
					entities: ['CP-Attractions'],
					children: [],
					answer: [],
					created: {
						_seconds: moment(RandomDate()).unix()
					},
					modified: {
						_seconds: moment(RandomDate()).unix()
					}
				},
				{
					id: randomString(10),
					active: Math.random() > 0.66 ? true : false,
					question: 'I took photo with Lady Kitty House',
					intent: 'CP.Attractions.Ephoto',
					entities: ['CP-Attractions'],
					children: [],
					answer: [],
					created: {
						_seconds: moment(RandomDate()).unix()
					},
					modified: {
						_seconds: moment(RandomDate()).unix()
					}
				}
			],
			answer: {
				default: '',
				scenarioId: '',
				scenarioName: '',
				custom: []
			},
			created: {
				_seconds: moment(RandomDate()).unix()
			},
			modified: {
				_seconds: moment(RandomDate()).unix()
			}
		},
		{
			id: randomString(10),
			active: Math.random() > 0.66 ? true : false,
			question: 'Where is ur located in japonica or Osaka?',
			intent: 'CP.Access.Location',
			entities: ['CP-CountryCity'],
			children: [
				{
					id: randomString(10),
					active: Math.random() > 0.66 ? true : false,
					question: 'Where is ur located in japonica or Osaka?',
					intent: 'CP.Access.Location',
					entities: ['CP-CountryCity'],
					children: [],
					answer: {
						default: '',
						scenarioId: '',
						scenarioName: '',
						custom: ['Sanrio Puroland is only located in Tama City, Tokyo, Japan. Do come visit us if you\'re planning a trip to Japan!']
					},
					created: {
						_seconds: moment(RandomDate()).unix()
					},
					modified: {
						_seconds: moment(RandomDate()).unix()
					}
				},
				{
					id: randomString(10),
					active: Math.random() > 0.66 ? true : false,
					question: 'Do you have that in Hong Kong',
					intent: 'CP.Access.Location',
					entities: ['CP-CountryCity'],
					children: [],
					answer: {
						default: '',
						scenarioId: '',
						scenarioName: '',
						custom: ['Sanrio Puroland is only located in Tama City, Tokyo, Japan. Do come visit us if you\'re planning a trip to Japan!']
					},
					created: {
						_seconds: moment(RandomDate()).unix()
					},
					modified: {
						_seconds: moment(RandomDate()).unix()
					}
				},
				{
					id: randomString(10),
					active: Math.random() > 0.66 ? true : false,
					question: 'Do you have puroland in hongkong?',
					intent: 'CP.Access.Location',
					entities: ['CP-CountryCity'],
					children: [],
					answer: {
						default: '',
						scenarioId: '',
						scenarioName: '',
						custom: ['Sanrio Puroland is only located in Tama City, Tokyo, Japan. Do come visit us if you\'re planning a trip to Japan!']
					},
					created: {
						_seconds: moment(RandomDate()).unix()
					},
					modified: {
						_seconds: moment(RandomDate()).unix()
					}
				},
				{
					id: randomString(10),
					active: Math.random() > 0.66 ? true : false,
					question: 'Is the party in Los Angeles?',
					intent: 'CP.Access.Location',
					entities: ['CP-CountryCity'],
					children: [],
					answer: {
						default: '',
						scenarioId: '',
						scenarioName: '',
						custom: ['Sanrio Puroland is only located in Tama City, Tokyo, Japan. Do come visit us if you\'re planning a trip to Japan!']
					},
					created: {
						_seconds: moment(RandomDate()).unix()
					},
					modified: {
						_seconds: moment(RandomDate()).unix()
					}
				},
				{
					id: randomString(10),
					active: Math.random() > 0.66 ? true : false,
					question: 'Is it going to be in Omaha Nebraska',
					intent: 'CP.Access.Location',
					entities: ['CP-CountryCity'],
					children: [],
					answer: {
						default: '',
						scenarioId: '',
						scenarioName: '',
						custom: ['Sanrio Puroland is only located in Tama City, Tokyo, Japan. Do come visit us if you\'re planning a trip to Japan!']
					},
					created: {
						_seconds: moment(RandomDate()).unix()
					},
					modified: {
						_seconds: moment(RandomDate()).unix()
					}
				},
				{
					id: randomString(10),
					active: Math.random() > 0.66 ? true : false,
					question: 'Do you have any event in London',
					intent: 'CP.Access.Location',
					entities: ['CP-CountryCity'],
					children: [],
					answer: {
						default: '',
						scenarioId: '',
						scenarioName: '',
						custom: ['Sanrio Puroland is only located in Tama City, Tokyo, Japan. Do come visit us if you\'re planning a trip to Japan!']
					},
					created: {
						_seconds: moment(RandomDate()).unix()
					},
					modified: {
						_seconds: moment(RandomDate()).unix()
					}
				}
			],
			answer: {
				default: '',
				scenarioId: '',
				scenarioName: '',
				custom: ['Sanrio Puroland is only located in Tama City, Tokyo, Japan. Do come visit us if you\'re planning a trip to Japan!']
			},
			created: {
				_seconds: moment(RandomDate()).unix()
			},
			modified: {
				_seconds: moment(RandomDate()).unix()
			}
		},
		{
			id: randomString(10),
			active: Math.random() > 0.66 ? true : false,
			question: 'fastest way to get to puroland',
			intent: 'CP.Access.Navigation',
			entities: ['CP-Distance','CP-LocationTo'],
			children: [],
			answer: {
				default: '',
				scenarioId: 'SC82910292',
				scenarioName: 'Scenario_Direction_Puroland',
				custom: []
			},
			created: {
				_seconds: moment(RandomDate()).unix()
			},
			modified: {
				_seconds: moment(RandomDate()).unix()
			}
		},
		{
			id: randomString(10),
			active: Math.random() > 0.66 ? true : false,
			question: 'Can I have Google Maps directions ?',
			intent: 'CP.Access.Navigation',
			entities: ['CP-Feature'],
			children: [
				{
					id: randomString(10),
					active: Math.random() > 0.66 ? true : false,
					question: 'Can I have Google Maps directions ?',
					intent: 'CP.Access.Navigation',
					entities: ['CP-Feature'],
					children: [],
					answer: {
						default: '',
						scenarioId: '',
						scenarioName: '',
						custom: []
					},
					created: {
						_seconds: moment(RandomDate()).unix()
					},
					modified: {
						_seconds: moment(RandomDate()).unix()
					}
				},
				{
					id: randomString(10),
					active: Math.random() > 0.66 ? true : false,
					question: 'Do you have a Google Maps view?',
					intent: 'CP.Access.Navigation',
					entities: ['CP-Feature'],
					children: [],
					answer: {
						default: '',
						scenarioId: '',
						scenarioName: '',
						custom: []
					},
					created: {
						_seconds: moment(RandomDate()).unix()
					},
					modified: {
						_seconds: moment(RandomDate()).unix()
					}
				}
			],
			answer: {
				default: 'Yes, you can either visit our office or print from our website',
				scenarioId: '',
				scenarioName: '',
				custom: []
			},
			created: {
				_seconds: moment(RandomDate()).unix()
			},
			modified: {
				_seconds: moment(RandomDate()).unix()
			}
		},
		{
			id: randomString(10),
			active: Math.random() > 0.66 ? true : false,
			question: 'We did not receive the download password for lady kitty house photo. Our photo serial number is 0262 and date is May 12th 2018.',
			intent: 'CP.Attractions.Ephoto',
			entities: ['CP-Attractions','CP-Date','CP-PhotoSerialNumber'],
			children: [],
			answer: {
				default: '',
				scenarioId: '',
				scenarioName: '',
				custom: []
			},
			created: {
				_seconds: moment(RandomDate()).unix()
			},
			modified: {
				_seconds: moment(RandomDate()).unix()
			}
		},
		{
			id: randomString(10),
			active: Math.random() > 0.66 ? true : false,
			question: 'We did not receive the download password for lady kitty house photo',
			intent: 'CP.Attractions.Ephoto',
			entities: ['CP.Attractions.Ephoto'],
			children: [
				{
					id: randomString(10),
					active: Math.random() > 0.66 ? true : false,
					question: 'We did not receive the download password for lady kitty house photo',
					intent: 'CP.Attractions.Ephoto',
					entities: ['CP.Attractions.Ephoto'],
					children: [],
					answer: {
						default: '',
						scenarioId: '',
						scenarioName: '',
						custom: []
					},
					created: {
						_seconds: moment(RandomDate()).unix()
					},
					modified: {
						_seconds: moment(RandomDate()).unix()
					}
				},
				{
					id: randomString(10),
					active: Math.random() > 0.66 ? true : false,
					question: 'how can I see thru online the picture of us in helly kitty house?',
					intent: 'CP.Attractions.Ephoto',
					entities: ['CP.Attractions.Ephoto'],
					children: [],
					answer: {
						default: '',
						scenarioId: '',
						scenarioName: '',
						custom: []
					},
					created: {
						_seconds: moment(RandomDate()).unix()
					},
					modified: {
						_seconds: moment(RandomDate()).unix()
					}
				},
				{
					id: randomString(10),
					active: Math.random() > 0.66 ? true : false,
					question: 'I took photo with Lady Kitty House',
					intent: 'CP.Attractions.Ephoto',
					entities: ['CP.Attractions.Ephoto'],
					children: [],
					answer: {
						default: '',
						scenarioId: '',
						scenarioName: '',
						custom: []
					},
					created: {
						_seconds: moment(RandomDate()).unix()
					},
					modified: {
						_seconds: moment(RandomDate()).unix()
					}
				},
				{
					id: randomString(10),
					active: Math.random() > 0.66 ? true : false,
					question: 'Where can I find pictures taken at Lady Kitty House. Photo taken last spring of 2019',
					intent: 'CP.Attractions.Ephoto',
					entities: ['CP.Attractions.Ephoto'],
					children: [],
					answer: {
						default: '',
						scenarioId: '',
						scenarioName: '',
						custom: []
					},
					created: {
						_seconds: moment(RandomDate()).unix()
					},
					modified: {
						_seconds: moment(RandomDate()).unix()
					}
				}
			],
			answer: {
				default: '',
				scenarioId: '',
				scenarioName: '',
				custom: []
			},
			created: {
				_seconds: moment(RandomDate()).unix()
			},
			modified: {
				_seconds: moment(RandomDate()).unix()
			}
		},{
			id: randomString(10),
			active: Math.random() > 0.66 ? true : false,
			question: 'If I ride the Keio Line from JR Shinjuku station, Do I have to change the train at Chofu station?',
			intent: 'CP.Access.Navigation',
			entities: ['CP-TrainLine','CP-TrainStation'],
			children: [],
			answer: {
				default: '',
				scenarioId: '',
				scenarioName: '',
				custom: ['Kyoto and other cities, do not stop at Shinjuku, cross-city trains can get you to Shinkansen at Ueno, Tokyo and Shinagawa stations. Meanwhile, express trains connect Shinjuku with Narita Airport via the Narita Express (N’EX) rail service.']
			},
			created: {
				_seconds: moment(RandomDate()).unix()
			},
			modified: {
				_seconds: moment(RandomDate()).unix()
			}
		},{
			id: randomString(10),
			active: Math.random() > 0.66 ? true : false,
			question: 'How do i get there from Asakusa Station with a 3 days city pass',
			intent: 'CP.Access.Navigation',
			entities: ['CP-TrainStation'],
			children: [],
			answer: {
				default: 'Purchase the Greater Tokyo Pass and tour Tokyo and the surrounding areas conveniently',
				scenarioId: '',
				scenarioName: '',
				custom: []
			},
			created: {
				_seconds: moment(RandomDate()).unix()
			},
			modified: {
				_seconds: moment(RandomDate()).unix()
			}
		},{
			id: randomString(10),
			active: Math.random() > 0.66 ? true : false,
			question: 'hello, can my baby 1 year old take the rides',
			intent: 'CP.Attractions.AgeLimit',
			entities: ['CP-Age'],
			children: [],
			answer: {
				default: '',
				scenarioId: '',
				scenarioName: '',
				custom: ['No, rides allowed height at least 80cm']
			},
			created: {
				_seconds: moment(RandomDate()).unix()
			},
			modified: {
				_seconds: moment(RandomDate()).unix()
			}
		},{
			id: randomString(10),
			active: Math.random() > 0.66 ? true : false,
			question: 'Where can I download digital photo taken with lady Kitty?',
			intent: 'CP.Attractions.Ephoto',
			entities: ['CP-Characters'],
			children: [
				{
					id: randomString(10),
					active: Math.random() > 0.66 ? true : false,
					question: 'Where can I download digital photo taken with lady Kitty?',
					intent: 'CP.Attractions.Ephoto',
					entities: ['CP-Characters'],
					children: [],
					answer: {
						default: '',
						scenarioId: '',
						scenarioName: '',
						custom: []
					},
					created: {
						_seconds: moment(RandomDate()).unix()
					},
					modified: {
						_seconds: moment(RandomDate()).unix()
					}
				},
				{
					id: randomString(10),
					active: Math.random() > 0.66 ? true : false,
					question: 'How do I download a digital copy of a photo taken there with Lady Kitty ?',
					intent: 'CP.Attractions.Ephoto',
					entities: ['CP-Characters'],
					children: [],
					answer: {
						default: '',
						scenarioId: '',
						scenarioName: '',
						custom: []
					},
					created: {
						_seconds: moment(RandomDate()).unix()
					},
					modified: {
						_seconds: moment(RandomDate()).unix()
					}
				},{
					id: randomString(10),
					active: Math.random() > 0.66 ? true : false,
					question: 'i can\'t seem to find hte link to download the photograph with kitty',
					intent: 'CP.Attractions.Ephoto',
					entities: ['CP-Characters'],
					children: [],
					answer: {
						default: '',
						scenarioId: '',
						scenarioName: '',
						custom: []
					},
					created: {
						_seconds: moment(RandomDate()).unix()
					},
					modified: {
						_seconds: moment(RandomDate()).unix()
					}
				}
			],
			answer: {
				default: '',
				scenarioId: '',
				scenarioName: '',
				custom: []
			},
			created: {
				_seconds: moment(RandomDate()).unix()
			},
			modified: {
				_seconds: moment(RandomDate()).unix()
			}
		},{
			id: randomString(10),
			active: Math.random() > 0.66 ? true : false,
			question: 'Why is the web photo service link down?',
			intent: 'CP.Attractions.Ephoto',
			entities: ['CP-Negative'],
			children: [
				{
					id: randomString(10),
					active: Math.random() > 0.66 ? true : false,
					question: 'Why is the web photo service link down?',
					intent: 'CP.Attractions.Ephoto',
					entities: ['CP-Negative'],
					children: [],
					answer: {
						default: '',
						scenarioId: '',
						scenarioName: '',
						custom: []
					},
					created: {
						_seconds: moment(RandomDate()).unix()
					},
					modified: {
						_seconds: moment(RandomDate()).unix()
					}
				},{
					id: randomString(10),
					active: Math.random() > 0.66 ? true : false,
					question: 'The link doesn’t work to download',
					intent: 'CP.Attractions.Ephoto',
					entities: ['CP-Negative'],
					children: [],
					answer: {
						default: '',
						scenarioId: '',
						scenarioName: '',
						custom: []
					},
					created: {
						_seconds: moment(RandomDate()).unix()
					},
					modified: {
						_seconds: moment(RandomDate()).unix()
					}
				}
			],
			answer: {
				default: '',
				scenarioId: '',
				scenarioName: '',
				custom: []
			},
			created: {
				_seconds: moment(RandomDate()).unix()
			},
			modified: {
				_seconds: moment(RandomDate()).unix()
			}
		}
	];
	if (displayAs === 'individual') {
		data = data.filter(item => !item.children.length).map(item => item);
	}
	return shuffle(data);
};

const MockFaqData = () => {
	let data = [
		{
			id: randomString(10),
			question: 'book hotel check in tomorrow',
			answer: 'How many days will you stay in?'
		},
		{
			id: randomString(10),
			question: 'book hotel in Nebraska',
			answer: 'No problem'
		},
		{
			id: randomString(10),
			question: 'can you book a room hotel in Las Vegas',
			answer: 'Yes, of course. Please give me your information'
		},
		{
			id: randomString(10),
			question: 'can you book a room in the hotel',
			answer: 'Yes, I can'
		},
		{
			id: randomString(10),
			question: 'find a hotel in Tokyo starting on April 10 for 4 nights make sure it\'s a Hyatt',
			answer: 'It is six stars hotel'
		},
		{
			id: randomString(10),
			question: 'Give me the direction to London',
			answer: 'Sure, give me a minute'
		},
		{
			id: randomString(10),
			question: 'How much does it cost to go from Singapore to Vietnam?',
			answer: 'Around 200 dollars by air'
		},
		{
			id: randomString(10),
			question: 'How to go to Thailand from Singapore',
			answer: 'By Plane'
		},
		{
			id: randomString(10),
			question: 'I need a place to stay in Rome this weekend',
			answer: 'I will contact the receptionist'
		},
		{
			id: randomString(10),
			question: 'I said I would like to book a room at Mariott',
			answer: 'How many people in your family?'
		},
		{
			id: randomString(10),
			question: 'I want to book a room at the Hilton hotel in SF',
			answer: 'Welcome to San Francisco'
		},
		{
			id: randomString(10),
			question: 'I would like to book a hotel',
			answer: 'Please use our website'
		},
		{
			id: randomString(10),
			question: 'Most expensive hotel in Malaysia?',
			answer: 'Not very sure'
		},
		{
			id: randomString(10),
			question: 'Most expensive hotel in Singapore?',
			answer: 'Probably Marina Bay Sand ?'
		}
	];
	return shuffle(data);
};

const randomString = len =>
  Array(len)
    .fill('0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz')
    .map(function(x) {
      return x[Math.floor(Math.random() * x.length)];
    })
    .join('');

const RandomDate = () => {
	return new Date(Number(new Date()) - Math.floor(Math.random()*10000000000));
};

const range = len => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

export function makeData(len = 5, displayAs) {
	const data = MockData(displayAs);
	const max = len > data.length ? data.length : len;
	return range(max).map(d => {
		return data[d];
	});
}

export function makeAnswerData(len = 5) {
	const data = MockFaqData();
	const max = len > data.length ? data.length : len;
	return range(max).map(d => {
		return data[d];
	});
}
