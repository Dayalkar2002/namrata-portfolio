export interface Zone {
  id: string;
  name: string;
  code: string;
  percentage?: string;
  location: string;
  summary: string;
  details: string[];
  color: string;
  image: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  location: string;
  year: string;
  type: string;
  heroImage: string;
  overview: string;
  concept: string;
  zones?: Zone[];
  images: { url: string; title: string; desc: string }[];
  pdfUrl?: string;
}

export interface Board {
  id: number;
  title: string;
  filename: string;
  image: string;
  category: string;
  description: string;
}

export const DESIGNER_INFO = {
  name: "Namrata Devalekar",
  role: "Architectural Designer & Urbanist",
  tagline: "Synthesizing Cultural Memory, Art Deco Identity & High-Density Urbanism",
  bio: "Architectural Designer focused on spatial narratives, inner-city revitalization, and high-density vertical frameworks. Passionate about integrating historical memory—such as Mumbai's iconic cinema and mill heritage—with futuristic Art Deco-inspired urban spaces.",
  location: "Mumbai, Maharashtra, India",
  email: "namrata.devalekar.arch@gmail.com",
  phone: "+91 98765 43210",
  socials: {
    linkedin: "https://linkedin.com/in/namrata-devalekar",
    instagram: "https://instagram.com/namrata_arch",
    issuu: "https://issuu.com/namratadevalekar",
    behance: "https://behance.net/namratadevalekar"
  },
  skills: {
    design: ["Architectural Design", "Urban Planning", "Site Context Analysis", "Spatial Zoning", "Art Deco Heritage", "Vertical Urbanism"],
    software: ["AutoCAD", "Revit", "Rhino 3D", "V-Ray", "SketchUp", "Enscape", "Adobe Photoshop", "Adobe Illustrator", "InDesign"],
    stats: [
      { label: "Major Urban Projects", value: "02" },
      { label: "Presentation Boards", value: "19+" },
      { label: "Project Focus Areas", value: "Cultural & High-Density" },
      { label: "Location Focus", value: "Mumbai Metro Region" }
    ]
  }
};

export const URBAN_CULTURAL_COMMONS: Project = {
  id: "urban-cultural-commons",
  title: "Urban Cultural Commons",
  subtitle: "A Cultural Hub Celebrating Mumbai's Heritage",
  category: "Urban Design & Cultural Architecture",
  location: "Lalbaug, Mumbai",
  year: "2026-2027",
  type: "Public Cultural Commons & Mill Land Revitalization",
  heroImage: "/assets/portfolio/sheet_1.png",
  overview: "Located in the dense inner city neighborhood of Lalbaug, Mumbai—a district historically celebrated for mill culture, single-screen cinema heritage, and grand public festivals like Ganesh Utsav. The project bridges the spatial memory of the historic Bharat Mata Cinema and the adjacent heritage cotton mills.",
  concept: "Through connected galleries, open courtyards, and Art Deco-inspired architectural elements, visitors experience cinema not only through static exhibits but also through the spatial journey of the building itself—interweaving light, movement, and architectural pause frames.",
  pdfUrl: "/portfolio.pdf",
  zones: [
    {
      id: "zone-a",
      name: "Performing Art + Admin",
      code: "ZONE A",
      location: "Front Site Facing (Easy Public Access)",
      summary: "Active, welcoming street face featuring music studios, dance practice spaces, and administrative offices.",
      details: [
        "Located at front for seamless daily community engagement",
        "Includes multi-purpose rehearsal studios and music practice rooms",
        "Houses administrative headquarters and visitor orientation",
        "Acts as the active, welcoming public front of the commons"
      ],
      color: "from-amber-500 to-orange-600",
      image: "/assets/portfolio/portfolio_p2_img4.png"
    },
    {
      id: "zone-b",
      name: "Khanawal + Regional Restaurant",
      code: "ZONE B",
      location: "Front Public Street Zone",
      summary: "Dedicated food gathering space reflecting Lalbaug's historic mill worker 'Khanawal' dining culture.",
      details: [
        "Placemaking element celebrating authentic Girangaon food heritage",
        "Includes outdoor terrace dining, communal seating, and food stalls",
        "Forms the primary social interaction hub for local residents and tourists",
        "Infuses round-the-clock street life and culinary vibrancy"
      ],
      color: "from-emerald-500 to-teal-700",
      image: "/assets/portfolio/portfolio_p2_img5.png"
    },
    {
      id: "zone-c",
      name: "Camera & Cinema Museum",
      code: "ZONE C (30%)",
      location: "Middle Core (Transition Zone)",
      summary: "The conceptual heart of the project—designed as an immersive journey of memory and visual movement.",
      details: [
        "Occupies 30% of total footprint as the spatial spine of the building",
        "Spaces act like cinematic aperture frames with dynamic light play",
        "Exhibits vintage celluloid film, projection apparatus, and Art Deco memorabilia",
        "Links front street life smoothly to the rear performance theatre"
      ],
      color: "from-sky-500 to-blue-700",
      image: "/assets/portfolio/portfolio_p2_img6.jpeg"
    },
    {
      id: "zone-d",
      name: "Performing Theatre & Auditorium",
      code: "ZONE D",
      location: "Rear Controlled Zone",
      summary: "State-of-the-art auditorium and performing stage serving as the grand final destination.",
      details: [
        "Acoustically isolated rear location for acoustic precision",
        "Includes main stage, seating tier, green rooms, and backstage docks",
        "Hosts live theatre, Marathi drama, film premieres, and cultural symposiums",
        "Creates an immersive and focused climax to the spatial journey"
      ],
      color: "from-purple-500 to-indigo-700",
      image: "/assets/portfolio/portfolio_p2_img7.jpeg"
    }
  ],
  images: [
    {
      url: "/assets/portfolio/sheet_1.png",
      title: "Cover & Aerial Master Plan Render",
      desc: "Architectural visualization showcasing Art Deco facade lines, central open court, and public landscape integration."
    },
    {
      url: "/assets/portfolio/portfolio_p1_img1.jpeg",
      title: "Atmospheric Visual Render",
      desc: "Night render illustrating illuminated public plazas, mill chimney context, and street-level vibrancy."
    },
    {
      url: "/assets/portfolio/sheet_2.png",
      title: "Site Context & Zonal Strategy",
      desc: "Detailed site context mapping between Bharat Mata Cinema, Old Mill, and zonal distribution A, B, C, D."
    },
    {
      url: "/assets/portfolio/sheet_3.png",
      title: "Ground Floor & Landscape Integration Plan",
      desc: "Detailed masterplan detailing pedestrian flow, Khanawal outdoor seating, and courtyard connectivity."
    },
    {
      url: "/assets/portfolio/sheet_4.png",
      title: "First Floor Gallery Plan & Spatial Journey",
      desc: "Movement & memory floor plan with Art Deco galleries, open courts, and lightwell cutouts."
    },
    {
      url: "/assets/portfolio/sheet_5.png",
      title: "Elevations & Structural Section Drawings",
      desc: "Building sections depicting double-height exhibition voids, theatre fly tower, and Art Deco crown."
    },
    {
      url: "/assets/portfolio/sheet_6.png",
      title: "Public Courtyard & Interior Visualizations",
      desc: "Art Deco inspired interior gallery spaces, natural light wells, and landscape gathering steps."
    }
  ]
};

export const VERTICAL_PARADIGM_BOARDS: Board[] = Array.from({ length: 13 }, (_, i) => {
  const boardNum = i + 1;
  const categories = [
    "Project Intro & Site Vision",
    "Urban Context & Massing",
    "Vertical Stratification & Density",
    "Structural Grid & Axonometric",
    "Podium & Street Connectivity",
    "Mid-Rise Public Sky Gardens",
    "Residential / Office Floor Plans",
    "Vertical Circulation & Cores",
    "Environmental & Solar Simulation",
    "Facade Detailing & Materiality",
    "Detailed Building Section",
    "Interior Spatial Renders",
    "Final Atmospheric Visualization"
  ];

  return {
    id: boardNum,
    title: `Sheet 0${boardNum} — ${categories[i]}`,
    filename: `page_vertical_${boardNum}.png`,
    image: `/assets/vertical/board_${boardNum}.png`,
    category: categories[i],
    description: `Semester 7 Architectural Design (2026-27) presentation sheet covering ${categories[i].toLowerCase()} for The Vertical Paradigm high-density urban project.`
  };
});
