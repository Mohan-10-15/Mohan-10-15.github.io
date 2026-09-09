export const blogData = [
  {
    slug: "endpoint-detection-fundamentals",
    title: "Endpoint Detection and Response: Building a Home-grown EDR",
    category: "Endpoint Security",
    date: "12 March 2026",
    readTime: "8 min read",
    excerpt:
      "A practical walkthrough of the detection logic, process monitoring and threat scoring that powers ThreatGuard EDR.",
    image: "/projects/threatguard/dashboard.png",
    tags: ["EDR", "Python", "Process Monitoring", "Threat Scoring"],
    content: [
      {
        heading: "Why Every Analyst Builds an EDR Throwaway",
        paragraphs: [
          "Endpoint detection and response is the frontline of modern security operations. The idea of watching every running process, scoring its behaviour and flagging anomalies before they become incidents is what drew me into security engineering.",
          "My approach was to build a self-contained EDR that monitors live process activity, analyses behaviour against a scoring model and presents findings through a professional dashboard."
        ]
      },
      {
        heading: "Scoring Suspicious Behaviour",
        paragraphs: [
          "Rather than relying on static signatures, the tool evaluates processes across several signals: parent-child relationships, abnormal CPU or memory usage, unauthorised executables and file access patterns. Each signal contributes to a weighted threat score.",
          "By combining behavioural signals, the tool can surface processes that would otherwise appear benign. The full pipeline runs locally, which keeps all monitoring data on the endpoint."
        ]
      },
      {
        heading: "Presenting Threats Clearly",
        paragraphs: [
          "A threat is only useful if it can be understood. The dashboard groups alerts by severity, shows historical trends and lets analysts drill into the details of any flagged process. This emphasis on presentation turned raw telemetry into a decision-ready feed."
        ]
      }
    ]
  },
  {
    slug: "network-threat-detection-with-scapy",
    title: "Detecting Port Scans, SYN Floods and DNS Tunnels with Scapy",
    category: "Network Security",
    date: "28 February 2026",
    readTime: "10 min read",
    excerpt:
      "How I built a live packet analyzer that maps network anomalies to MITRE ATT&CK techniques using Python and Scapy.",
    image: "/projects/network-analyzer/dashboard.png",
    tags: ["Scapy", "Packet Analysis", "MITRE ATT&CK", "Detection"],
    content: [
      {
        heading: "From Capture to Context",
        paragraphs: [
          "Capturing packets is straightforward; understanding them is the hard part. My Network Packet Analyzer listens on a live interface and applies detection rules to surface suspicious traffic with context.",
          "The analyzer detects port scans by observing unusual numbers of SYN packets, identifies SYN flood patterns from rapid connection requests and flags DNS tunnels when DNS query volume and payload characteristics fall outside normal baselines."
        ]
      },
      {
        heading: "Mapping to MITRE ATT&CK",
        paragraphs: [
          "Detection is more valuable when it maps to a shared language. Each finding is correlated with relevant MITRE ATT&CK techniques, giving responders immediate context about the tactics and techniques an attack is likely following."
        ]
      },
      {
        heading: "Visualising the Threat Landscape",
        paragraphs: [
          "The dashboard renders a live threat heatmap, a geo-mapped view of suspicious sources and a chronological event timeline. Generated PDF reports summarise the session for sharing with stakeholders or incident teams."
        ]
      }
    ]
  },
  {
    slug: "practical-cryptography-fernet",
    title: "Practical Cryptography in Python with Fernet and Hashlib",
    category: "Cryptography",
    date: "14 February 2026",
    readTime: "7 min read",
    excerpt:
      "Lessons from building SecureVault, a file-encryption tool that balances strong cryptography with a usable interface.",
    image: "/projects/securevault/dashboard.png",
    tags: ["Cryptography", "Fernet", "Python", "Data Protection"],
    content: [
      {
        heading: "Choosing the Right Primitive",
        paragraphs: [
          "Encryption libraries handle the hard cryptographic maths, but choosing the right primitive for the job is still a design decision. For SecureVault I used Fernet, a symmetric-key scheme built on AES-128 in CBC mode with HMAC authentication.",
          "Fernet provides authenticated encryption out of the box, meaning data integrity is verified on decryption as well as confidentiality protected on encryption."
        ]
      },
      {
        heading: "Deriving and Protecting Keys",
        paragraphs: [
          "A password is not a key. The application derives a strong key from the user password using key-derivation functions and hashing utilities, so that the same user password can be verified and used consistently."
        ]
      },
      {
        heading: "Security Logs and History",
        paragraphs: [
          "SecureVault maintains a clear activity history and security logs, giving users visibility into every encryption and decryption operation. Visibility is a security feature in itself."
        ]
      }
    ]
  }
];
