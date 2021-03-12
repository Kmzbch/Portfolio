import { gsap, TimelineMax } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

export default class AnimationManager {
	constructor() {
		gsap.registerPlugin(ScrollTrigger);
	}

	initializeAnimation(currentScreen) {
		let delay = 0.75;

		if (currentScreen === 'home') {
			this.setHomeAnimation();
			delay = 7.5;
		}

		this.setNavbarAnimation(delay);
		this.setAboutAnimation();
		this.setProjectAnimation();
		this.setTimelineAnimation();
		this.setContactAnimation();
	}

	setNavbarAnimation(delay = 0.75) {
		const navbar = document.querySelector('.nav-container');

		const tl = new TimelineMax();

		const html = document.querySelector('html');

		tl.from(navbar, {
			delay: delay,
			duration: 0.75,
			top: -100,
			ease: 'ease.out',
			opacity: 0
		});
	}

	setHomeAnimation() {
		const home = document.querySelector('#home');
		const greetings = document.querySelectorAll('.greeting');
		const viewButton = document.querySelector('.home .view-button');
		const tl = new TimelineMax();

		const html = document.querySelector('html');

		// use Home for splash screen
		gsap.to(html, {
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
			})
			.to(html, 0.5, {
				overflowY: 'auto'
			});
	}

	setAboutAnimation() {
		const header = document.querySelector('.about .header');
		const divider = document.querySelector('.about .divider');

		gsap.from([ header, divider ], {
			delay: 0.5,
			duration: 0.8,
			ease: 'ease.out',
			x: -100,
			opacity: 0,
			stagger: {
				amount: 0.15
			},
			scrollTrigger: {
				trigger: [ header ],
				start: 'top 75%'
			}
		});

		const aboutMe = document.querySelector('.description');
		const profileHeader = document.querySelector('.profile-header');
		const profile = document.querySelector('.profile');

		gsap.from([ profileHeader, aboutMe ], {
			delay: 0.5,
			duration: 0.8,
			ease: 'ease.out',
			x: -100,
			opacity: 0,
			stagger: {
				amount: 0.15
			},
			scrollTrigger: {
				trigger: [ aboutMe, profileHeader ],
				start: 'top 75%'
			}
		});

		gsap.from([ profile ], {
			delay: 0.5,
			duration: 0.8,
			ease: 'ease.out',
			y: 50,
			opacity: 0,
			stagger: {
				amount: 0.15
			},
			scrollTrigger: {
				trigger: [ profile ],
				start: 'top 75%'
			}
		});

		const aboutSkills = document.querySelector('.about-skills');

		gsap.from([ aboutSkills ], {
			delay: 0.5,
			duration: 0.8,
			ease: 'back.out',
			transformOrigin: 'center',
			scaleX: 0.8,
			scaleY: 0.8,
			opacity: 0,
			scrollTrigger: {
				trigger: [ aboutSkills ],
				start: 'top 75%'
			}
		});

		const aboutTechCaption = document.querySelectorAll('.about-tech .caption');
		const aboutTechImages = document.querySelectorAll('.about-tech .sub-panel');

		gsap.from([ aboutTechCaption ], {
			delay: 0.5,
			duration: 0.8,
			ease: 'ease.out',
			y: 50,
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

		for (let i = 0; i < aboutTechImages.length; i++) {
			if (i % 2 === 0) {
				movementVal = 50;
			} else {
				movementVal = -50;
			}

			gsap.from([ aboutTechImages[i] ], {
				delay: 0.5,
				duration: 0.8,
				ease: 'ease.out',
				x: movementVal,
				opacity: 0,
				stagger: {
					amount: 0.15
				},
				scrollTrigger: {
					trigger: [ aboutTechImages[i] ],
					start: 'top 75%'
				}
			});

			const techStackImages = aboutTechImages[i].querySelectorAll('.tech-stack-image');
			gsap.from(techStackImages, {
				delay: 1.5,
				duration: 0.6,
				ease: 'ease.out',
				y: 50,
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
		const header = document.querySelector('.project .header');
		const divider = document.querySelector('.project .divider');

		const panels = document.querySelectorAll('.project .panel');

		gsap.from([ header, divider ], {
			delay: 0.5,
			duration: 0.8,
			ease: 'ease.out',
			x: 100,
			opacity: 0,
			stagger: {
				amount: 0.15
			},
			scrollTrigger: {
				trigger: '.project .header',
				start: 'top 75%'
			}
		});

		for (let i = 0; i < panels.length; i++) {
			gsap.from([ panels[i] ], {
				delay: 0.5,
				duration: 0.8,
				ease: 'ease.out',
				y: 50,
				opacity: 0,
				stagger: {
					amount: 0.15
				},
				scrollTrigger: {
					trigger: [ panels[i] ],
					start: 'top 85%'
				}
			});
		}
	}

	setTimelineAnimation() {
		const header = document.querySelector('.timeline .header');
		const divider = document.querySelector('.timeline .divider');

		const panel = document.querySelectorAll('.timeline .panel');

		const timelineEvents = document.querySelectorAll('.timeline .timeline-event');

		gsap.from([ header, divider ], {
			delay: 0.5,
			duration: 0.8,
			ease: 'ease.out',
			x: -100,
			opacity: 0,
			stagger: {
				amount: 0.15
			},
			scrollTrigger: {
				trigger: '.timeline .header',
				start: 'top 75%'
			}
		});

		gsap.from([ panel ], {
			delay: 0.5,
			duration: 0.8,
			ease: 'ease.out',
			opacity: 0,
			stagger: {
				amount: 0.15
			},
			scrollTrigger: {
				trigger: [ panel ],
				start: 'top 75%'
			}
		});

		for (let i = 0; i < timelineEvents.length; i++) {
			gsap.from([ timelineEvents[i] ], {
				delay: 0.5,
				duration: 0.8,
				// ease: 'Linear.easeNone',
				// scaleY: 0.8,

				ease: 'ease.out',
				y: 50,
				opacity: 0,
				stagger: {
					amount: 0.15
				},
				scrollTrigger: {
					trigger: [ timelineEvents[i] ],
					start: 'top 75%'
				}
			});

			const techStackImages = timelineEvents[i].querySelectorAll('.tech-stack-image');
			gsap.from(techStackImages, {
				delay: 1.5,
				duration: 0.6,
				ease: 'ease.out',
				y: 50,
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
		const header = document.querySelector('.contact .header');
		const divider = document.querySelector('.contact .divider');
		const caption = document.querySelector('.contact .caption');

		gsap.from([ header, divider, caption ], {
			delay: 0.5,
			duration: 0.8,
			ease: 'ease.out',
			x: -100,
			opacity: 0,
			stagger: {
				amount: 0.15
			},
			scrollTrigger: {
				trigger: [ header ],
				start: 'top center'
			}
		});

		const contactItems = document.querySelector('.contact .contact-items');
		const contactLinks = document.querySelectorAll('.contact .contact-links');
		const contactForm = document.querySelector('.contact-form');

		gsap.from(contactItems, {
			delay: 0.5,
			duration: 0.8,
			ease: 'ease.out',
			x: -50,
			opacity: 0,
			stagger: {
				amount: 0.5
			},
			scrollTrigger: {
				trigger: contactItems,
				start: 'top 100%'
			}
		});

		gsap.from(contactLinks, {
			delay: 0.5,
			duration: 0.8,
			ease: 'ease.out',
			opacity: 0,
			stagger: {
				amount: 0.5
			},
			scrollTrigger: {
				trigger: contactLinks,
				start: 'top 100%'
			}
		});

		gsap.from([ contactForm ], {
			delay: 0.5,
			duration: 0.8,
			ease: 'ease.out',
			y: 50,
			opacity: 0,
			stagger: {
				amount: 0.15
			},
			scrollTrigger: {
				trigger: [ contactForm ],
				start: 'top 100%'
			}
		});
	}
}
