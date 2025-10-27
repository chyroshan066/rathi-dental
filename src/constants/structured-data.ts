interface PostalAddress {
  "@type": "PostalAddress";
  streetAddress: string;
  addressLocality: string;
  addressRegion: string;
  postalCode: string;
  addressCountry: string;
}

interface AggregateRating {
  "@type": "AggregateRating";
  ratingValue: string;
  ratingCount: string;
}

interface GeoCoordinates {
  "@type": "GeoCoordinates";
  latitude: string;
  longitude: string;
}

interface EntryPoint {
  "@type": "EntryPoint";
  urlTemplate: string;
}

interface Appointment {
  "@type": "Appointment";
  name: string;
}

interface ScheduleAction {
  "@type": "ScheduleAction";
  target: EntryPoint;
  result: Appointment;
}

interface AnatomicalStructure {
  "@type": "AnatomicalStructure";
  name: string;
}

interface MedicalProcedure {
  "@type": "MedicalProcedure";
  name: string;
  description: string;
  procedureType: string;
  bodyLocation: AnatomicalStructure;
}

interface MedicalSpecialty {
  "@type": "MedicalSpecialty";
  name: string;
  description: string;
  includedServices: string[];
}

interface ListItem {
  "@type": "ListItem";
  position: number;
  item: MedicalSpecialty;
}

interface DentalBusinessStructuredData {
  "@context": "https://schema.org";
  "@type": "Dentist";
  name: string;
  description: string;
  url: string | undefined;
  address: PostalAddress;
  telephone: string;
  email: string;
  openingHours: string[];
  medicalSpecialty: string[];
  priceRange: string;
  aggregateRating: AggregateRating;
  geo: GeoCoordinates;
  sameAs: string[];
  potentialAction: ScheduleAction;
}

interface DentalServicesStructuredData {
  "@context": "https://schema.org";
  "@type": "MedicalBusiness";
  name: string;
  description: string;
  availableService: MedicalProcedure[];
}

interface SpecialtiesStructuredData {
  "@context": "https://schema.org";
  "@type": "ItemList";
  name: string;
  description: string;
  itemListElement: ListItem[];
}

export const dentalClinicStructuredData: DentalBusinessStructuredData = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  "name": "Rathi Dental", 
  "description": "Professional dental care services in Itahari. Comprehensive oral health treatments including routine checkups, advanced procedures, orthodontics, and emergency dental care. Modern equipment, experienced dentists, and patient-focused approach.", 
  "url": "https://www.rathidentalclinic.com",
  
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Hatiya Line",
    "addressLocality": "Itahari",
    "addressRegion": "Koshi",
    "postalCode": "56701",
    "addressCountry": "NP"
  },
  
  "telephone": "+977-25-582240",
  "email": "rathidental.ith@gmail.com",
  
  "openingHours": [
    "Mo-Su 9:00-19:00",
  ],
  
  "medicalSpecialty": ["Dentistry", "Oral Surgery", "Orthodontics", "Periodontics"],
  "priceRange": "$$",
  
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "ratingCount": "8"
  },
  
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "26.66173", 
    "longitude": "87.27672"
  },
  
  "sameAs": [
    "https://www.facebook.com/rathidentalclinicitahari",
    "https://www.tiktok.com/@rathi.dental.clin?_t=ZS-8zQAMDKzUI6&_r=1",
  ],
  
  "potentialAction": {
    "@type": "ScheduleAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://www.rathidentalclinic.com/#contact"
    },
    "result": {
      "@type": "Appointment",
      "name": "Dental Appointment"
    }
  }
};

export const dentalServicesStructuredData: DentalServicesStructuredData = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "name": "Dental Services",
  "description": "Comprehensive dental care services including preventive, restorative, surgical, and cosmetic treatments",
  
  "availableService": [
    {
      "@type": "MedicalProcedure",
      "name": "Dental Checkup",
      "description": "Routine examination and cleaning to maintain healthy teeth and gums. Comprehensive oral health assessment including cavity detection and preventive care.",
      "procedureType": "Preventive Care",
      "bodyLocation": {
        "@type": "AnatomicalStructure",
        "name": "Oral Cavity"
      }
    },
    {
      "@type": "MedicalProcedure",
      "name": "Dental X-Ray",
      "description": "Advanced digital imaging to detect hidden dental problems and plan precise treatments. Includes panoramic and periapical X-rays.",
      "procedureType": "Diagnostic Imaging",
      "bodyLocation": {
        "@type": "AnatomicalStructure",
        "name": "Teeth and Jaw"
      }
    },
    {
      "@type": "MedicalProcedure",
      "name": "Teeth Whitening",
      "description": "Professional brightening treatment to remove stains and enhance your smile. Safe, effective in-office whitening procedures.",
      "procedureType": "Cosmetic Dentistry",
      "bodyLocation": {
        "@type": "AnatomicalStructure",
        "name": "Teeth"
      }
    },
    {
      "@type": "MedicalProcedure",
      "name": "Gingivitis & Periodontitis Treatment",
      "description": "Specialized treatment for gum disease to restore healthy gums and prevent tooth loss. Deep cleaning and periodontal therapy.",
      "procedureType": "Periodontal Care",
      "bodyLocation": {
        "@type": "AnatomicalStructure",
        "name": "Gums"
      }
    },
    {
      "@type": "MedicalProcedure",
      "name": "Composite Filling",
      "description": "Tooth-colored fillings to repair cavities and restore natural appearance. Durable composite resin restorations.",
      "procedureType": "Restorative Dentistry",
      "bodyLocation": {
        "@type": "AnatomicalStructure",
        "name": "Teeth"
      }
    },
    {
      "@type": "MedicalProcedure",
      "name": "Root Canal Treatment (RCT)",
      "description": "Root canal treatment to save infected teeth and eliminate pain. Advanced endodontic therapy to preserve natural teeth.",
      "procedureType": "Endodontics",
      "bodyLocation": {
        "@type": "AnatomicalStructure",
        "name": "Tooth Root"
      }
    },
    {
      "@type": "MedicalProcedure",
      "name": "Oral Surgery",
      "description": "Surgical procedures for complex dental treatments including impacted wisdom teeth and surgical extractions.",
      "procedureType": "Oral Surgery",
      "bodyLocation": {
        "@type": "AnatomicalStructure",
        "name": "Oral Cavity"
      }
    },
    {
      "@type": "MedicalProcedure",
      "name": "Complete Denture (CD)",
      "description": "Custom full dentures to replace all missing teeth and restore complete oral function and aesthetics.",
      "procedureType": "Prosthodontics",
      "bodyLocation": {
        "@type": "AnatomicalStructure",
        "name": "Upper and Lower Jaw"
      }
    },
    {
      "@type": "MedicalProcedure",
      "name": "Removable Partial Denture (RPD)",
      "description": "Custom partial dentures to replace multiple missing teeth with removable appliance.",
      "procedureType": "Prosthodontics",
      "bodyLocation": {
        "@type": "AnatomicalStructure",
        "name": "Jaw"
      }
    },
    {
      "@type": "MedicalProcedure",
      "name": "Fixed Partial Denture (FPD) - Bridge",
      "description": "Fixed bridges to replace missing teeth permanently, anchored to adjacent healthy teeth.",
      "procedureType": "Prosthodontics",
      "bodyLocation": {
        "@type": "AnatomicalStructure",
        "name": "Teeth"
      }
    },
    {
      "@type": "MedicalProcedure",
      "name": "Simple Tooth Extraction",
      "description": "Safe tooth removal procedures for damaged or problematic teeth using gentle extraction techniques.",
      "procedureType": "Oral Surgery",
      "bodyLocation": {
        "@type": "AnatomicalStructure",
        "name": "Teeth"
      }
    },
    {
      "@type": "MedicalProcedure",
      "name": "Surgical Extraction",
      "description": "Complex tooth removal for impacted or difficult-to-extract teeth requiring surgical approach.",
      "procedureType": "Oral Surgery",
      "bodyLocation": {
        "@type": "AnatomicalStructure",
        "name": "Teeth and Jawbone"
      }
    },
    {
      "@type": "MedicalProcedure",
      "name": "Orthodontic Treatment - Metal Braces",
      "description": "Traditional metal braces to straighten teeth and correct bite alignment. Comprehensive orthodontic care.",
      "procedureType": "Orthodontics",
      "bodyLocation": {
        "@type": "AnatomicalStructure",
        "name": "Teeth and Jaw"
      }
    },
    {
      "@type": "MedicalProcedure",
      "name": "Orthodontic Treatment - Ceramic Braces",
      "description": "Tooth-colored ceramic braces for discreet orthodontic treatment with aesthetic appeal.",
      "procedureType": "Orthodontics",
      "bodyLocation": {
        "@type": "AnatomicalStructure",
        "name": "Teeth and Jaw"
      }
    },
    {
      "@type": "MedicalProcedure",
      "name": "Dental Crown - Ceramic",
      "description": "High-quality ceramic caps to protect and restore damaged or weakened teeth with natural appearance.",
      "procedureType": "Prosthodontics",
      "bodyLocation": {
        "@type": "AnatomicalStructure",
        "name": "Individual Tooth"
      }
    },
    {
      "@type": "MedicalProcedure",
      "name": "Dental Crown - Metal",
      "description": "Durable metal crowns for posterior teeth requiring maximum strength and longevity.",
      "procedureType": "Prosthodontics",
      "bodyLocation": {
        "@type": "AnatomicalStructure",
        "name": "Individual Tooth"
      }
    },
    {
      "@type": "MedicalProcedure",
      "name": "Halitosis Treatment",
      "description": "Specialized care to eliminate bad breath and restore fresh confidence through comprehensive oral health improvement.",
      "procedureType": "General Dentistry",
      "bodyLocation": {
        "@type": "AnatomicalStructure",
        "name": "Oral Cavity"
      }
    },
    {
      "@type": "MedicalProcedure",
      "name": "Scaling (Deep Cleaning)",
      "description": "Professional plaque and tartar removal to maintain healthy gums and teeth. Ultrasonic and manual scaling.",
      "procedureType": "Preventive Care",
      "bodyLocation": {
        "@type": "AnatomicalStructure",
        "name": "Teeth and Gums"
      }
    },
    {
      "@type": "MedicalProcedure",
      "name": "Tooth Polishing",
      "description": "Professional tooth polishing to remove stains and restore natural shine. Final step in professional cleaning.",
      "procedureType": "Preventive Care",
      "bodyLocation": {
        "@type": "AnatomicalStructure",
        "name": "Teeth"
      }
    },
    {
      "@type": "MedicalProcedure",
      "name": "Full Mouth Rehabilitation",
      "description": "Comprehensive restoration to rebuild and transform your entire smile. Complete oral reconstruction with multiple specialties.",
      "procedureType": "Comprehensive Treatment",
      "bodyLocation": {
        "@type": "AnatomicalStructure",
        "name": "Entire Oral Cavity"
      }
    }
  ]
};

export const dentalSpecialtiesStructuredData: SpecialtiesStructuredData = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Dental Specialties and Services",
  "description": "Comprehensive dental care organized by specialty areas",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@type": "MedicalSpecialty",
        "name": "Preventive Dentistry",
        "description": "Routine care to maintain oral health and prevent dental problems",
        "includedServices": ["Dental Checkup", "Scaling", "Polishing", "X-Ray"]
      }
    },
    {
      "@type": "ListItem", 
      "position": 2,
      "item": {
        "@type": "MedicalSpecialty",
        "name": "Restorative Dentistry",
        "description": "Treatments to repair and restore damaged teeth",
        "includedServices": ["Composite Filling", "GIC Restoration", "Dental Crown"]
      }
    },
    {
      "@type": "ListItem",
      "position": 3, 
      "item": {
        "@type": "MedicalSpecialty",
        "name": "Endodontics",
        "description": "Root canal treatments to save infected teeth",
        "includedServices": ["Root Canal Treatment"]
      }
    },
    {
      "@type": "ListItem",
      "position": 4,
      "item": {
        "@type": "MedicalSpecialty", 
        "name": "Oral Surgery",
        "description": "Surgical procedures for complex dental cases",
        "includedServices": ["Tooth Extraction", "Surgical Extraction", "Oral Surgery", "Trauma Management"]
      }
    },
    {
      "@type": "ListItem",
      "position": 5,
      "item": {
        "@type": "MedicalSpecialty",
        "name": "Prosthodontics", 
        "description": "Replacement of missing teeth with artificial substitutes",
        "includedServices": ["Complete Denture", "Partial Denture", "Fixed Bridge", "Full Mouth Rehabilitation"]
      }
    },
    {
      "@type": "ListItem",
      "position": 6,
      "item": {
        "@type": "MedicalSpecialty",
        "name": "Orthodontics",
        "description": "Correction of teeth and jaw alignment",
        "includedServices": ["Metal Braces", "Ceramic Braces", "Orthodontic Treatment"]
      }
    },
    {
      "@type": "ListItem",
      "position": 7,
      "item": {
        "@type": "MedicalSpecialty",
        "name": "Cosmetic Dentistry",
        "description": "Aesthetic improvements to enhance your smile", 
        "includedServices": ["Teeth Whitening", "Ceramic Crowns", "Polishing"]
      }
    },
    {
      "@type": "ListItem",
      "position": 8,
      "item": {
        "@type": "MedicalSpecialty",
        "name": "Periodontics",
        "description": "Treatment of gum diseases and supporting structures",
        "includedServices": ["Gingivitis Treatment", "Periodontitis Treatment", "Scaling"]
      }
    }
  ]
};