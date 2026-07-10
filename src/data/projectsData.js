export const projectsData = [
  {
    slug: "threatguard-edr",
    name: "ThreatGuard EDR",
    category: "Endpoint Security",
    status: "Flagship Project",
    shortDescription:
      "An endpoint detection and response platform designed to monitor processes, identify suspicious activity and present threats through a professional security dashboard.",

    description:
      "ThreatGuard EDR is a desktop-based endpoint security solution that monitors system activity, analyses running processes, detects suspicious behaviour and produces structured threat information for users and administrators.",

    image: "/projects/threatguard/dashboard.png",

    screenshots: [
      "/projects/threatguard/dashboard.png",
      "/projects/threatguard/analytics.png",
      "/projects/threatguard/threat-center.png"
    ],

    features: [
      "Real-time process monitoring",
      "Threat scoring and classification",
      "Suspicious process detection",
      "Security analytics dashboard",
      "Threat centre for incident review",
      "System activity reporting",
      "Professional enterprise-style interface"
    ],

    technologies: [
      "Python",
      "CustomTkinter",
      "psutil",
      "Pandas",
      "Scikit-learn",
      "Matplotlib"
    ],

    githubUrl:
      "https://github.com/Mohan-10-15/Advanced-Keylogger-Detection-System",

    highlights: [
      {
        label: "Focus",
        value: "Endpoint Detection"
      },
      {
        label: "Platform",
        value: "Windows"
      },
      {
        label: "Architecture",
        value: "Desktop Security Tool"
      }
    ]
  },

  {
    slug: "network-packet-analyzer",
    name: "Network Packet Analyzer",
    category: "Network Security",
    status: "Flagship Project",
    shortDescription:
      "A network traffic analysis platform that captures packets, identifies suspicious behaviour and visualises threats through dashboards and security reports.",

    description:
      "The Network Packet Analyzer captures and analyses live network traffic, detects suspicious network activity, maps findings to security concepts and presents results through a professional monitoring dashboard.",

    image: "/projects/network-analyzer/dashboard.png",

    screenshots: [
      "/projects/network-analyzer/dashboard.png",
      "/projects/network-analyzer/heatmap.png",
      "/projects/network-analyzer/threat-feed.png",
      "/projects/network-analyzer/threat-map.png",
      "/projects/network-analyzer/timeline.png"
    ],

    features: [
      "Live packet capture",
      "Protocol analysis",
      "Port scan detection",
      "SYN flood detection",
      "DNS tunnel detection",
      "Threat heatmap",
      "GeoIP threat mapping",
      "MITRE ATT&CK mapping",
      "Executive security dashboard",
      "PDF report generation"
    ],

    technologies: [
      "Python",
      "Scapy",
      "Flask",
      "Pandas",
      "Matplotlib",
      "GeoIP",
      "Wireshark"
    ],

    githubUrl:
      "https://github.com/Mohan-10-15/NetworkPacketAnalyzer",

    highlights: [
      {
        label: "Focus",
        value: "Network Monitoring"
      },
      {
        label: "Detection",
        value: "Multiple Threat Types"
      },
      {
        label: "Output",
        value: "Dashboard and Reports"
      }
    ]
  },

  {
    slug: "securevault-enterprise",
    name: "SecureVault Enterprise",
    category: "Cryptography",
    status: "Flagship Project",
    shortDescription:
      "A secure file and folder encryption application with password protection, activity history and an enterprise-inspired user interface.",

    description:
      "SecureVault Enterprise protects files and folders using encryption, provides secure decryption workflows and maintains user-friendly activity records through a professional desktop interface.",

    image: "/projects/securevault/dashboard.png",

    screenshots: [
      "/projects/securevault/dashboard.png",
      "/projects/securevault/encrypt.png",
      "/projects/securevault/decrypt.png",
      "/projects/securevault/history.png",
      "/projects/securevault/logs.png",
      "/projects/securevault/settings.png"
    ],

    features: [
      "File encryption",
      "Folder encryption",
      "Secure decryption",
      "Password-protected operations",
      "Activity history",
      "Security logs",
      "Settings management",
      "Enterprise-style interface"
    ],

    technologies: [
      "Python",
      "Cryptography",
      "Fernet",
      "CustomTkinter",
      "Hashlib",
      "File Handling"
    ],

    githubUrl:
      "https://github.com/Mohan-10-15/SecureVault",

    highlights: [
      {
        label: "Focus",
        value: "Data Protection"
      },
      {
        label: "Security",
        value: "Encrypted Storage"
      },
      {
        label: "Interface",
        value: "Enterprise Desktop UI"
      }
    ]
  }
];