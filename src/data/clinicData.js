export const clinicData = {
  name: "Wellness Clinic",
  address: "123 Health Avenue, Medical District, GA 30033",
  phone: "(555) 123-4567",
  email: "appointments@genaiclinic.com",
  doctors: [
    {
      id: 1,
      name: "Sarah Johnson",
      specialty: "General Physician",
      qualifications: "MD",
      available: true,
      schedule: {
        monday: ["9:00 AM - 1:00 PM", "2:00 PM - 6:00 PM"],
        tuesday: ["9:00 AM - 1:00 PM", "2:00 PM - 6:00 PM"],
        wednesday: ["9:00 AM - 1:00 PM", "2:00 PM - 5:00 PM"],
        thursday: ["9:00 AM - 1:00 PM"],
        friday: ["9:00 AM - 1:00 PM"],
        saturday: [],
        sunday: [],
      },
      profileImage: "dr_johnson.jpg",
      consultationFee: 100,
      maxPatientsPerDay: 20,
      appointmentDuration: 30,
      emergencySlots: 2,
      breaks: [
        { day: "monday", time: "1:00 PM - 2:00 PM" },
        { day: "tuesday", time: "1:00 PM - 2:00 PM" },
      ],
    },
    {
      id: 2,
      name: "Michael Patel",
      specialty: "Cardiologist",
      qualifications: "MD, PhD, FACC",
      available: false,
      schedule: {
        monday: ["10:00 AM - 4:00 PM"],
        tuesday: ["10:00 AM - 4:00 PM"],
        wednesday: [],
        thursday: ["10:00 AM - 4:00 PM"],
        friday: ["10:00 AM - 2:00 PM"],
        saturday: [],
        sunday: [],
      },
      profileImage: "dr_patel.jpg",
      consultationFee: 150,
    },
    {
      id: 3,
      name: "Rebecca Chen",
      specialty: "Pediatrician",
      qualifications: "MD, FAAP",
      available: true,
      schedule: {
        monday: ["9:00 AM - 5:00 PM"],
        tuesday: ["9:00 AM - 5:00 PM"],
        wednesday: ["9:00 AM - 5:00 PM"],
        thursday: ["9:00 AM - 5:00 PM"],
        friday: ["9:00 AM - 5:00 PM"],
        saturday: ["10:00 AM - 2:00 PM"],
        sunday: [],
      },
      profileImage: "dr_chen.jpg",
      consultationFee: 120,
    },
    {
      id: 4,
      name: "David Wilson",
      specialty: "Orthopedic Surgeon",
      qualifications: "MD, FAAOS",
      available: true,
      schedule: {
        monday: ["8:00 AM - 12:00 PM"],
        tuesday: ["8:00 AM - 12:00 PM", "1:00 PM - 4:00 PM"],
        wednesday: ["8:00 AM - 12:00 PM"],
        thursday: ["1:00 PM - 6:00 PM"],
        friday: ["8:00 AM - 12:00 PM", "1:00 PM - 4:00 PM"],
        saturday: [],
        sunday: [],
      },
      profileImage: "dr_wilson.jpg",
      consultationFee: 180,
    },
    {
      id: 5,
      name: "Dr. Michael Chen",
      specialty: "Cardiologist",
      qualifications: "MD, FACC",
      available: true,
      schedule: {
        monday: ["9:00 AM - 4:00 PM"],
        tuesday: ["10:00 AM - 6:00 PM"],
        wednesday: ["9:00 AM - 4:00 PM"],
        thursday: ["10:00 AM - 6:00 PM"],
        friday: ["9:00 AM - 3:00 PM"],
      },
      consultationFee: 200,
      languages: ["English", "Mandarin"],
      expertise: ["Preventive Cardiology", "Heart Disease Management"],
    },
    {
      id: 6,
      name: "Dr. Emily Rodriguez",
      specialty: "Dermatologist",
      qualifications: "MD, FAAD",
      available: true,
      schedule: {
        monday: ["11:00 AM - 7:00 PM"],
        wednesday: ["11:00 AM - 7:00 PM"],
        friday: ["9:00 AM - 5:00 PM"],
      },
      consultationFee: 175,
      languages: ["English", "Spanish"],
      expertise: ["Cosmetic Dermatology", "Skin Cancer Screening"],
    },
    {
      id: 7,
      name: "Dr. James Wilson",
      specialty: "Orthopedic Surgeon",
      qualifications: "MD, FAAOS",
      available: true,
      schedule: {
        tuesday: ["8:00 AM - 4:00 PM"],
        thursday: ["8:00 AM - 4:00 PM"],
        friday: ["10:00 AM - 2:00 PM"],
      },
      consultationFee: 225,
      languages: ["English"],
      expertise: ["Joint Replacement", "Sports Medicine"],
    },
  ],
  services: [
    {
      id: 1,
      name: "General Check-up",
      description: "Comprehensive health assessment and preventive care",
      duration: 30,
      fee: 100,
    },
    {
      id: 2,
      name: "Cardiology Consultation",
      description: "Heart health assessment and diagnostic services",
      duration: 45,
      fee: 150,
    },
    {
      id: 3,
      name: "Pediatric Check-up",
      description: "Child health assessment and development monitoring",
      duration: 30,
      fee: 120,
    },
    {
      id: 4,
      name: "Orthopedic Consultation",
      description: "Evaluation and treatment for bone and joint issues",
      duration: 45,
      fee: 180,
    },
    {
      id: 5,
      name: "Vaccination",
      description: "Various vaccines for preventable diseases",
      duration: 15,
      fee: 60,
    },
    {
      id: "gen-checkup",
      name: "General Health Checkup",
      description: "Comprehensive physical examination and health assessment",
      duration: "45 minutes",
      fee: 150,
      prerequisites: ["8-hour fasting recommended"],
    },
    {
      id: "cardio-eval",
      name: "Cardiac Evaluation",
      description:
        "Complete heart health assessment including ECG and stress test",
      duration: "90 minutes",
      fee: 300,
      prerequisites: [
        "12-hour fasting required",
        "Comfortable clothing recommended",
      ],
    },
    {
      id: "derm-screen",
      name: "Skin Cancer Screening",
      description: "Comprehensive full-body skin examination",
      duration: "30 minutes",
      fee: 175,
      prerequisites: ["No makeup or nail polish"],
    },
    {
      id: "ortho-consult",
      name: "Orthopedic Consultation",
      description: "Musculoskeletal evaluation and treatment planning",
      duration: "45 minutes",
      fee: 225,
      prerequisites: ["Bring previous X-rays if available"],
    },
  ],
  insuranceAccepted: [
    "BlueCross BlueShield",
    "Aetna",
    "UnitedHealthcare",
    "Cigna",
    "Medicare",
    "Medicaid",
  ],
  appointmentPolicy: {
    cancellationNotice: 24,
    lateArrival:
      "Patients who arrive more than 15 minutes late may need to reschedule",
    noShow: "No-show appointments will incur a $30 fee",
  },
  bookingRules: {
    minAdvanceHours: 24,
    maxAdvanceDays: 30,
    cancelationWindow: 24,
    emergencySlotBuffer: 2,
  },
  insurance: {
    accepted: [
      "Blue Cross Blue Shield",
      "Aetna",
      "UnitedHealthcare",
      "Cigna",
      "Medicare",
    ],
    verificationRequired: true,
  },
};
