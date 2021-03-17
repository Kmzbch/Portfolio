import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

export default class AnimationManager {
	constructor() {
		gsap.registerPlugin(ScrollTrigger);
	}

	initializeAnimation(currentScreen) {
		let delay = 0.75;

		if (currentScreen === 'default') {
			this.setHomeAnimation();
			delay = 7.5;
		} else {
			const html = document.querySelector('html');
			// use Home for splash screen
			gsap.to(html, {
				opacity: 1
			});
		}

		this.setNavbarAnimation(delay);
		this.setAboutAnimation();
		this.setProjectAnimation();
		this.setTimelineAnimation();
		this.setContactAnimation();
	}

	setNavbarAnimation(delay = 0.75) {
		const navbar = document.querySelector('.nav-container');
		const html = document.querySelector('html');
		const tl = gsap.timeline();

		tl
			.from(navbar, {
				delay: delay,
				duration: 0.75,
				top: -100,
				ease: 'ease.out',
				opacity: 0
			})
			.to(html, {
				delay: 1,
				overflowY: 'auto'
			});
	}

	setHomeAnimation() {
		const home = document.querySelector('#home');
		const greetings = home.querySelector('.greeting').children;
		const viewButton = home.querySelector('.view-button');
		const html = document.querySelector('html');
		const tl = gsap.timeline();

		// use Home for splash screen
		gsap.to(html, {
			opacity: 1,
			overflowY: 'hidden'
		});

		tl
			.from([ home ], {
				delay: 0.75,
				duration: 1,
				opacity: 0
			})
			.from([ home ], 0.5, {
				backgroundColor: 'rgba(0,0,0,0)',
				duration: 3
			})
			.from(greetings[0], 1, {
				duration: 0.5,
				opacity: 0
			})
			.from([ greetings[1], greetings[2] ], 1.5, {
				duration: 0.5,
				opacity: 0,
				stagger: {
					amount: 0.3
				}
			})
			.from(greetings[3], 1.4, {
				duration: 0.5,
				opacity: 0
			})
			.from([ viewButton ], 1.5, {
				duration: 1,
				y: 75,
				ease: 'back.out',
				opacity: 0
			});
	}

	setAboutAnimation() {
		const about = document.querySelector('#about');
		const header = about.querySelector('.header');
		const divider = about.querySelector('.divider');
		const profileDescription = about.querySelector('.description');
		const profileHeader = about.querySelector('.profile-header');
		const profile = about.querySelector('.profile');
		const aboutSkills = about.querySelector('.about-skills');
		// const skillItems = about.querySelectorAll('.skill-item');

		const specialties = about.querySelectorAll('.skill-item.specialties');
		const softSkills = about.querySelectorAll('.skill-item.soft-skills');

		const aboutTechCaption = about.querySelectorAll('.about-tech .caption');
		const aboutTechPanels = about.querySelectorAll('.about-tech .panel');

		gsap.from([ header, divider ], {
			delay: 0.5,
			duration: 0.8,
			ease: 'ease.out',
			x: -100,
			z: 0.1,
			opacity: 0,
			stagger: {
				amount: 0.15
			},
			scrollTrigger: {
				trigger: [ header ],
				start: 'top 75%'
			}
		});

		gsap.from([ profileHeader, profileDescription ], {
			delay: 0.5,
			duration: 0.8,
			ease: 'ease.out',
			x: -100,
			z: 0.1,

			opacity: 0,
			stagger: {
				amount: 0.15
			},
			scrollTrigger: {
				trigger: [ profileDescription, profileHeader ],
				start: 'top 75%'
			}
		});

		gsap.from([ profile ], {
			delay: 0.5,
			duration: 0.8,
			ease: 'ease.out',
			y: 50,
			z: 0.1,

			opacity: 0,
			stagger: {
				amount: 0.15
			},
			scrollTrigger: {
				trigger: [ profile ],
				start: 'top 75%'
			}
		});

		gsap.from([ aboutSkills ], {
			delay: 0.5,
			duration: 0.8,
			ease: 'back.out',
			transformOrigin: 'center',
			scaleX: 0.8,
			scaleY: 0.8,
			z: 0.1,

			opacity: 0,
			scrollTrigger: {
				trigger: [ aboutSkills ],
				start: 'top 75%'
			}
		});

		// gsap.from(skillItems, {
		// 	delay: 2,
		// 	duration: 0.6,
		// 	ease: 'back.out',
		// 	scaleX: 0.9,
		// 	scaleY: 0.9,
		// 	y: 50,
		// 	opacity: 0,
		// 	z: 0.1,

		// 	stagger: {
		// 		amount: 0.5
		// 	},
		// 	scrollTrigger: {
		// 		trigger: skillItems,
		// 		start: 'top 75%'
		// 	}
		// });

		gsap.from(specialties, {
			delay: 2,
			duration: 0.6,
			ease: 'back.out',
			scaleX: 0.9,
			scaleY: 0.9,
			y: 50,
			opacity: 0,
			z: 0.1,

			stagger: {
				amount: 0.5
			},
			scrollTrigger: {
				trigger: specialties,
				start: 'top 75%'
			}
		});

		gsap.from(softSkills, {
			delay: 2,
			duration: 0.6,
			ease: 'back.out',
			scaleX: 0.9,
			scaleY: 0.9,
			y: 50,
			opacity: 0,
			z: 0.1,

			stagger: {
				amount: 0.5
			},
			scrollTrigger: {
				trigger: softSkills,
				start: 'top 75%'
			}
		});

		gsap.from([ aboutTechCaption ], {
			delay: 0.5,
			duration: 0.8,
			ease: 'ease.out',
			y: 50,
			z: 0.1,

			opacity: 0,
			stagger: {
				amount: 0.15
			},
			scrollTrigger: {
				trigger: [ aboutTechCaption ],
				start: 'top 75%'
			}
		});

		let movementVal = 0;

		for (let i = 0; i < aboutTechPanels.length; i++) {
			if (i % 2 === 0) {
				movementVal = 50;
			} else {
				movementVal = -50;
			}

			gsap.from([ aboutTechPanels[i] ], {
				delay: 0.5,
				duration: 0.8,
				ease: 'ease.out',
				x: movementVal,
				z: 0.1,

				opacity: 0,
				stagger: {
					amount: 0.15
				},
				scrollTrigger: {
					trigger: [ aboutTechPanels[i] ],
					start: 'top 75%'
				}
			});

			const techStackImages = aboutTechPanels[i].querySelectorAll('.tech-stack-image');

			gsap.from(techStackImages, {
				delay: 1.5,
				duration: 0.6,
				ease: 'ease.out',
				y: 50,
				z: 0.1,

				opacity: 0,
				stagger: {
					amount: 0.5
				},
				scrollTrigger: {
					trigger: techStackImages,
					start: 'top 75%'
				}
			});
		}
	}

	setProjectAnimation() {
		const project = document.querySelector('#project');
		const header = project.querySelector('.header');
		const divider = project.querySelector('.divider');
		const panels = project.querySelectorAll('.panel');

		gsap.from([ header, divider ], {
			delay: 0.5,
			duration: 0.8,
			ease: 'ease.out',
			x: 100,
			z: 0.1,
			opacity: 0,
			stagger: {
				amount: 0.15
			},
			scrollTrigger: {
				trigger: [ header ],
				start: 'top 75%'
			}
		});

		for (let i = 0; i < panels.length; i++) {
			const subPanelLeft = panels[i].querySelector('.sub-panel.left');
			const subPanelLeftContent = subPanelLeft.children;

			gsap.from([ panels[i] ], {
				delay: 0.5,
				duration: 0.8,
				ease: 'ease.out',
				y: 50,
				z: 0.1,
				opacity: 0,
				stagger: {
					amount: 0.15
				},
				scrollTrigger: {
					trigger: [ panels[i] ],
					start: 'top 85%'
				}
			});

			gsap.from(subPanelLeftContent, {
				delay: 2,
				duration: 0.5,
				ease: 'ease.out',
				y: 50,
				z: 0.1,
				opacity: 0,
				stagger: {
					amount: 0.5
				},
				scrollTrigger: {
					trigger: subPanelLeft,
					start: 'top 85%'
				}
			});
		}
	}

	setTimelineAnimation() {
		const timeline = document.querySelector('#timeline');
		const header = timeline.querySelector('.header');
		const divider = timeline.querySelector('.divider');
		const panel = timeline.querySelectorAll('.panel');
		const timelineEventIcons = timeline.querySelectorAll('.timeline-event-icon');
		const timelineEvents = timeline.querySelectorAll('.timeline-event');

		gsap.from([ header, divider ], {
			delay: 0.5,
			duration: 0.8,
			ease: 'ease.out',
			x: -100,
			z: 0.1,
			opacity: 0,
			stagger: {
				amount: 0.15
			},
			scrollTrigger: {
				trigger: [ header ],
				start: 'top 75%'
			}
		});

		gsap.from([ panel ], {
			delay: 0.5,
			duration: 0.8,
			ease: 'ease.out',
			z: 0.1,
			opacity: 0,
			stagger: {
				amount: 0.15
			},
			scrollTrigger: {
				trigger: [ panel ],
				start: 'top 75%'
			}
		});

		for (let i = 0; i < timelineEventIcons.length; i++) {
			gsap.from([ timelineEventIcons[i] ], 0.7, {
				rotation: -680,
				z: 0.1,
				scrollTrigger: {
					trigger: [ timelineEventIcons[i] ],
					start: 'top 75%'
				}
			});
		}

		for (let i = 0; i < timelineEvents.length; i++) {
			const dutyList = timelineEvents[i].querySelector('.timeline-duty-list');
			const techStackImages = timelineEvents[i].querySelectorAll('.tech-stack-image');

			gsap.from([ timelineEvents[i] ], {
				delay: 0.5,
				duration: 0.8,
				ease: 'ease.out',
				y: 50,
				z: 0.1,
				opacity: 0,
				stagger: {
					amount: 0.15
				},
				scrollTrigger: {
					trigger: [ timelineEvents[i] ],
					start: 'top 75%'
				}
			});

			gsap.from(dutyList.children, {
				delay: 3,
				duration: 1,
				ease: 'power3.out',
				x: 100,
				z: 0.1,
				opacity: 0,
				stagger: {
					amount: 0.5
				},
				scrollTrigger: {
					trigger: [ dutyList ],
					start: 'top 75%'
				}
			});

			gsap.from(techStackImages, {
				delay: 1.5,
				duration: 0.6,
				ease: 'ease.out',
				y: 50,
				z: 0.1,
				opacity: 0,
				stagger: {
					amount: 0.3
				},
				scrollTrigger: {
					trigger: techStackImages,
					start: 'top 100%'
				}
			});
		}
	}

	setContactAnimation() {
		const contact = document.querySelector('#contact');
		const header = contact.querySelector('.header');
		const divider = contact.querySelector('.divider');
		const caption = contact.querySelector('.caption');
		const contactList = contact.querySelector('.contact-list');
		const contactLinks = contact.querySelectorAll('.contact-link');
		const contactForm = contact.querySelector('.contact-form');

		gsap.from([ header, divider, caption ], {
			delay: 0.5,
			duration: 0.8,
			ease: 'ease.out',
			x: -100,
			z: 0.1,
			opacity: 0,
			stagger: {
				amount: 0.15
			},
			scrollTrigger: {
				trigger: [ header ],
				start: 'top 75%'
			}
		});

		gsap.from(contactList, {
			delay: 0.5,
			duration: 0.8,
			ease: 'ease.out',
			x: -50,
			z: 0.1,
			opacity: 0,
			stagger: {
				amount: 0.5
			},
			scrollTrigger: {
				trigger: contactList,
				start: 'top 75%'
			}
		});

		gsap.from(contactLinks, {
			delay: 0.5,
			duration: 0.8,
			ease: 'ease.out',
			z: 0.1,
			opacity: 0,
			stagger: {
				amount: 0.5
			},
			scrollTrigger: {
				trigger: contactLinks,
				start: 'top 75%'
			}
		});

		gsap.from([ contactForm ], {
			delay: 0.5,
			duration: 0.8,
			ease: 'ease.out',
			y: 50,
			z: 0.1,
			opacity: 0,
			stagger: {
				amount: 0.15
			},
			scrollTrigger: {
				trigger: [ contactForm ],
				start: 'top 75%'
			}
		});
	}
}
