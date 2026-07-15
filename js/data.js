/* ==========================================================================
   PARALLAX — content data
   ========================================================================== */

const IMG = {
  sombrero:  'https://commons.wikimedia.org/wiki/Special:FilePath/M104_ngc4594_sombrero_galaxy_hi-res.jpg?width=900',
  v838:      'https://commons.wikimedia.org/wiki/Special:FilePath/V838_Mon_HST.jpg?width=900',
  saturnring:'https://commons.wikimedia.org/wiki/Special:FilePath/Saturn_from_Cassini_Orbiter_%282007-01-19%29.jpg?width=900',
  ngc4414:   'https://commons.wikimedia.org/wiki/Special:FilePath/NGC_4414_%28NASA-med%29.jpg?width=900',
  horsehead: 'https://commons.wikimedia.org/wiki/Special:FilePath/Horsehead-Hubble.jpg?width=900',
  mars:      'https://commons.wikimedia.org/wiki/Special:FilePath/OSIRIS_Mars_true_color.jpg?width=900',
  mercury:   'https://commons.wikimedia.org/wiki/Special:FilePath/Mercury_in_color_-_Prockter07-edit1.jpg?width=700',
  venus:     'https://commons.wikimedia.org/wiki/Special:FilePath/Venus-real_color.jpg?width=700',
  earth:     'https://commons.wikimedia.org/wiki/Special:FilePath/The_Earth_seen_from_Apollo_17.jpg?width=700',
  jupiter:   'https://commons.wikimedia.org/wiki/Special:FilePath/Jupiter_and_its_shrunken_Great_Red_Spot.jpg?width=700',
  uranus:    'https://commons.wikimedia.org/wiki/Special:FilePath/Uranus2.jpg?width=700',
  neptune:   'https://commons.wikimedia.org/wiki/Special:FilePath/Neptune_Full.jpg?width=700'
};

const ARTICLES = {
  sombrero: {
    catalog: 'M-104 · GALAXY',
    title: "The Sombrero's dust lane hides a supermassive secret",
    img: IMG.sombrero, credit: 'NASA / ESA / Hubble Heritage Team',
    body: [
      "Seen nearly edge-on from Earth, the Sombrero Galaxy earns its name from the thick, dark band of dust that wraps around its bright core like the brim of a hat. That dust lane is made of the raw material for future stars — gas and grains that haven't yet collapsed into anything.",
      "What's harder to see is what's sitting at the center: a black hole with a mass estimated at roughly a billion times that of our Sun. It's one of the most massive black holes measured in a nearby galaxy, and it likely shaped how the galaxy's dense, bright bulge formed in the first place.",
      "The Sombrero sits about 28 million light-years away in the constellation Virgo, close enough that mid-sized amateur telescopes can pick out its distinctive shape on a clear night."
    ]
  },
  v838: {
    catalog: 'V-838 · STAR',
    title: "The star that brightened 600 times over — and no one knows why",
    img: IMG.v838, credit: 'NASA / ESA / Hubble Heritage Team',
    body: [
      "In January 2002, an unremarkable red star in the constellation Monoceros began to swell and brighten, eventually outshining its usual self by a factor of hundreds. Within weeks it briefly ranked among the most luminous stars in the galaxy, then faded back into obscurity.",
      "Nobody agrees on exactly why. Leading explanations include a stellar merger, a helium flash, or a giant star swallowing one of its own planets — but none fit every observation perfectly.",
      "What made the event famous wasn't the star itself but the 'light echo' around it: pulses of light reflecting off surrounding dust shells, expanding outward in a slow-motion ripple that telescopes kept photographing for years afterward."
    ]
  },
  saturn: {
    catalog: 'P-07 · PLANET',
    title: "Saturn's rings are younger than the dinosaurs",
    img: IMG.saturnring, credit: 'NASA / JPL-Caltech / Space Science Institute',
    body: [
      "For decades the assumption was that Saturn's rings were as old as the planet itself, roughly 4.5 billion years. Data from the Cassini spacecraft's final orbits in 2017 upended that.",
      "By measuring how much material was raining down from the rings into Saturn's atmosphere, scientists could work backward to estimate how much mass the rings have lost — and how long they could have existed at their current size. The answer: somewhere between 10 and 100 million years, possibly younger than Earth's Tyrannosaurus rex.",
      "That means something relatively recent supplied the ice and rock — most likely a shattered moon or a captured comet — and that the rings we see today may eventually disappear entirely, raining slowly into the planet below."
    ]
  },
  weighing: {
    catalog: 'NGC-4414 · GALAXY',
    title: "How to weigh a galaxy you can never touch",
    img: IMG.ngc4414, credit: 'NASA / ESA / Hubble Heritage Team',
    body: [
      "You can't put a galaxy on a scale, but you can watch how it moves. Stars near the edge of a spiral galaxy orbit the center at speeds that depend on how much mass is pulling on them from the inside.",
      "When astronomers measured those speeds in galaxies like NGC 4414, they found something strange: stars far from the core were moving just as fast as stars close in, when ordinary physics predicted they should be moving much slower.",
      "The explanation that's held up for fifty years is that most of a galaxy's mass isn't visible at all. It's dark matter — matter that doesn't emit or absorb light, detectable only by its gravity. Roughly five-sixths of the matter in a typical galaxy falls into this invisible category."
    ]
  },
  horsehead: {
    catalog: 'B-33 · STAR NURSERY',
    title: "Inside the Horsehead: a star factory in silhouette",
    img: IMG.horsehead, credit: 'NASA / ESA / Hubble Heritage Team',
    body: [
      "The Horsehead Nebula looks dark rather than bright because it is dark: a dense column of cold gas and dust, silhouetted against the glowing red hydrogen of the nebula behind it. From Earth it looks almost like ink dropped into a photograph.",
      "Inside that column, gravity is doing quiet, patient work. Pockets of gas are slowly collapsing under their own weight, heating up as they compress, and — over hundreds of thousands of years — igniting into new stars.",
      "It's an unglamorous process by cosmic standards, but it's the same one that built our own Sun roughly 4.6 billion years ago, inside a cloud that has long since dispersed."
    ]
  },
  mars: {
    catalog: 'P-04 · PLANET',
    title: "Mars lost an ocean's worth of water. Where did it go?",
    img: IMG.mars, credit: 'ESA / OSIRIS Team',
    body: [
      "Orbital imagery of Mars shows what look unmistakably like dry riverbeds, deltas, and shorelines — evidence that the planet once held enough liquid water to fill an ocean covering a third of its surface.",
      "The old theory was that Mars's thin atmosphere let solar wind strip that water away into space, molecule by molecule, over billions of years. That's part of the story, but recent modeling using data from the Curiosity rover suggests it's not the whole picture.",
      "A significant share of that ancient water appears to have been absorbed into minerals in the Martian crust, locked into rock rather than lost to space — meaning some of Mars's original ocean may still be there, just buried."
    ]
  }
};

const PLANETS = {
  mercury: {
    name: 'Mercury', catalog: 'I · TERRESTRIAL', color: '#B8ADA3', img: IMG.mercury,
    desc: "The closest planet to the Sun has almost no atmosphere to trap heat, so its surface swings from 430°C in daylight to -180°C at night — one of the widest temperature ranges of any world in the solar system.",
    stats: [['Diameter', '4,879 km'], ['Day length', '59 Earth days'], ['Moons', '0']]
  },
  venus: {
    name: 'Venus', catalog: 'II · TERRESTRIAL', color: '#E6C27A', img: IMG.venus,
    desc: "A runaway greenhouse effect makes Venus the hottest planet in the solar system, hot enough to melt lead, despite being farther from the Sun than Mercury. Its thick clouds are made of sulfuric acid.",
    stats: [['Diameter', '12,104 km'], ['Day length', '243 Earth days'], ['Moons', '0']]
  },
  earth: {
    name: 'Earth', catalog: 'III · TERRESTRIAL', color: '#4FB6D9', img: IMG.earth,
    desc: "The only known planet with liquid water on its surface, plate tectonics, and life. Its magnetic field, generated by a churning molten core, shields the surface from most solar radiation.",
    stats: [['Diameter', '12,742 km'], ['Day length', '24 hours'], ['Moons', '1']]
  },
  mars: {
    name: 'Mars', catalog: 'IV · TERRESTRIAL', color: '#C1613F', img: IMG.mars,
    desc: "Home to Olympus Mons, the largest volcano in the solar system at nearly three times the height of Everest, and to strong evidence of ancient rivers, lakes, and possibly an ocean.",
    stats: [['Diameter', '6,779 km'], ['Day length', '24.6 hours'], ['Moons', '2']]
  },
  jupiter: {
    name: 'Jupiter', catalog: 'V · GAS GIANT', color: '#D9A066', img: IMG.jupiter,
    desc: "The largest planet by far, Jupiter's Great Red Spot is a storm bigger than Earth that has raged for at least 350 years. Its gravity acts as a shield, deflecting comets and asteroids away from the inner solar system.",
    stats: [['Diameter', '139,820 km'], ['Day length', '9.9 hours'], ['Moons', '95']]
  },
  saturn: {
    name: 'Saturn', catalog: 'VI · GAS GIANT', color: '#E8C888', img: IMG.saturnring,
    desc: "Best known for its ring system, made of countless particles of ice and rock ranging from dust grains to boulders. Saturn is the least dense planet in the solar system — it would float in water, if you could find an ocean big enough.",
    stats: [['Diameter', '116,460 km'], ['Day length', '10.7 hours'], ['Moons', '146']]
  },
  uranus: {
    name: 'Uranus', catalog: 'VII · ICE GIANT', color: '#8FD6D6', img: IMG.uranus,
    desc: "Uranus rotates almost completely on its side, likely the result of an ancient collision with an Earth-sized object. This means each pole gets roughly 42 years of continuous sunlight, followed by 42 years of darkness.",
    stats: [['Diameter', '50,724 km'], ['Day length', '17.2 hours'], ['Moons', '28']]
  },
  neptune: {
    name: 'Neptune', catalog: 'VIII · ICE GIANT', color: '#5C7CE0', img: IMG.neptune,
    desc: "The windiest planet in the solar system, with gusts recorded at over 2,000 km/h. Neptune was the first planet discovered through mathematical prediction rather than direct observation, found in 1846 after astronomers noticed irregularities in Uranus's orbit.",
    stats: [['Diameter', '49,244 km'], ['Day length', '16.1 hours'], ['Moons', '16']]
  }
};

const STAGES = [
  { max: 15,  mass: '0.1 – 0.5 solar masses', title: 'Red Dwarf',
    desc: "Burns its hydrogen so slowly it could outlive the universe as we understand it — some estimates run past ten trillion years." },
  { max: 40,  mass: '0.5 – 1.5 solar masses', title: 'Yellow Star',
    desc: "Our Sun's category. Stable for roughly 10 billion years before swelling into a red giant and eventually shedding its outer layers as a planetary nebula." },
  { max: 65,  mass: '1.5 – 8 solar masses', title: 'Red Giant → White Dwarf',
    desc: "Expands dramatically as it exhausts its core fuel, then sheds its outer layers, leaving behind a dense, slowly cooling ember about the size of Earth." },
  { max: 85,  mass: '8 – 20 solar masses', title: 'Supernova → Neutron Star',
    desc: "Ends its life in a catastrophic explosion bright enough to briefly outshine its entire home galaxy, collapsing its core into a neutron star just kilometers across." },
  { max: 101, mass: '20+ solar masses', title: 'Supernova → Black Hole',
    desc: "So massive that its own gravity overwhelms every known force after collapse, crushing its core past the point of no return and leaving a black hole behind." }
];
